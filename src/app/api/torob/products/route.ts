/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import { SingleProductItem } from '@/models/product.model';
import { getMediaType } from '@/utils/mime.util';
import { importSPKI, jwtVerify } from 'jose';
import { isVariantInStock } from '@/utils/stock.util';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Torob "API v3" product feed endpoint.
 * Docs: https://panel.torob.com/s/torobApiV3
 *
 * Torob POSTs a JSON body in one of three shapes:
 *   1) { page_urls: string[] }               -> return those specific products
 *   2) { page_uniques: string[] }             -> return those specific products
 *   3) { page: number, sort: 'date_added_desc' | 'date_updated_desc' } -> return a paginated, sorted catalog
 *
 * `page_unique` is mapped to our internal product `_id` (stable, never reused).
 */

const BASE_URL = 'https://stevemobile.com';
const TOROB_PAGE_SIZE = 100;

// ---------------------------------------------------------------------------
// Security: every request must carry a valid X-Torob-Token (a JWT signed with
// Torob's private key, algorithm EdDSA/ed25519). We verify it with Torob's
// published public key. Source: Torob's "API Token Guide: JWT Validation".
//
// Checked, per Torob's spec:
//   - signature, using the public key below + EdDSA
//   - exp / nbf (validated automatically by `jose` when present in the token)
//   - aud, which Torob sets to the Host header of the request it sent - so we
//     validate it against *this* request's own Host header rather than a
//     hardcoded domain (works across stevemobile.com, staging hosts, etc.)
//
// TOROB_PUBLIC_KEY can be overridden via env if Torob ever rotates the key;
// otherwise the published key below is used.
// ---------------------------------------------------------------------------
const DEFAULT_TOROB_PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MCowBQYDK2VwAyEAt6Mu4T0pBORY11W+QeM35UsmLO3vsf+6yKpFDEImFk0=
-----END PUBLIC KEY-----`;

// Env vars sometimes carry PEM keys with literal "\n" instead of real
// newlines (e.g. pasted into a single-line .env value or hosting panel
// field) - normalize so importSPKI always gets a real PEM block.
const TOROB_PUBLIC_KEY = (process.env.TOROB_PUBLIC_KEY?.replace(/\\n/g, '\n') || DEFAULT_TOROB_PUBLIC_KEY).trim();
const TOROB_JWT_ALG = 'EdDSA';

const verifyTorobToken = async (req: NextRequest): Promise<boolean> => {
    const token = req.headers.get('x-torob-token');
    if (!token) return false;

    const host = req.headers.get('host');
    if (!host) {
        console.error('[torob] request has no Host header - cannot validate aud claim');
        return false;
    }

    try {
        const publicKey = await importSPKI(TOROB_PUBLIC_KEY, TOROB_JWT_ALG);
        await jwtVerify(token, publicKey, { algorithms: [TOROB_JWT_ALG], audience: host });
        return true;
    } catch (error) {
        console.error('[torob] token verification failed', error);
        return false;
    }
};

const errorResponse = (message: string, status = 400) => NextResponse.json({ error: message }, { status });

// ---------------------------------------------------------------------------
// Torob output shape
// ---------------------------------------------------------------------------
interface TorobProduct {
    page_unique: string;
    page_url: string;
    title: string;
    subtitle?: string;
    product_group_id?: string;
    current_price: number;
    old_price?: number;
    availability: boolean;
    category_name?: string;
    image_links: string[];
    short_desc?: string;
    spec: Record<string, string>;
    guarantee?: string;
    date_added: string;
    date_updated: string;
}

const truncate = (value: string | undefined | null, maxLength: number) =>
    value ? value.slice(0, maxLength) : undefined;

const toIsoWithTimezone = (value?: string) => {
    const date = value ? new Date(value) : new Date();
    return Number.isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
};

// Replicates the discount math used on product cards (ProductCardOrganisms) so
// current_price/old_price match what a shopper actually sees on the site.
const computePricing = (product: SingleProductItem) => {
    const variant = product.variants?.[0];
    const originalPrice = variant?.price ?? 0;

    const discountItem = Array.isArray(product.discount) ? product.discount[0] : product.discount;

    let discountedPrice: number | undefined;

    if (discountItem?.is_active && originalPrice) {
        if (discountItem.discount_type === 'percentage' && discountItem.discount_value > 0) {
            discountedPrice = Math.round(originalPrice - (originalPrice * discountItem.discount_value) / 100);
        } else if (discountItem.discount_type === 'fixed_amount' && discountItem.discount_value > 0) {
            discountedPrice = Math.round(originalPrice - discountItem.discount_value);
        }
    }

    const hasDiscount = discountedPrice !== undefined && discountedPrice >= 0 && discountedPrice < originalPrice;

    return {
        current_price: Math.max(0, Math.round(hasDiscount ? (discountedPrice as number) : originalPrice)),
        old_price: hasDiscount ? Math.round(originalPrice) : undefined
    };
};

const toTorobProduct = (product: SingleProductItem | null): TorobProduct | null => {
    if (!product || product.is_published === false) return null;

    const variant = product.variants?.[0];
    const { current_price, old_price } = computePricing(product);

    const imageLinks = (product.gallery ?? [])
        .filter((item) => getMediaType(item.url) === 'image')
        .sort((a, b) => Number(b.is_primary) - Number(a.is_primary))
        .map((item) => truncate(item.url, 1000) as string);

    const spec: Record<string, string> = {};
    (product.specifications ?? []).forEach((item) => {
        if (item?.name && item?.value !== undefined && item?.value !== null) {
            spec[item.name] = String(item.value);
        }
    });

    const guarantee =
        variant?.warranty && variant.warranty !== '-' ? truncate(`گارانتی ${variant.warranty} ماهه`, 200) : undefined;

    const dateAdded = toIsoWithTimezone(product.created_at);
    const dateUpdated = product.updated_at ? toIsoWithTimezone(product.updated_at) : dateAdded;

    return {
        page_unique: (truncate(product._id, 200) ?? product._id ?? '') as string,
        page_url: (truncate(`${BASE_URL}/product/${product.slug}`, 1500) ?? '') as string,
        title: (truncate(product.name, 500) ?? product.name ?? '') as string,
        subtitle: truncate(product.en_title, 500),
        current_price,
        old_price,
        availability: isVariantInStock(variant),
        category_name: truncate(product.category?.name, 200),
        image_links: imageLinks,
        short_desc: truncate(product.description?.replace(/<[^>]*>/g, '').trim(), 500),
        spec,
        guarantee,
        date_added: dateAdded,
        date_updated: dateUpdated
    };
};

// ---------------------------------------------------------------------------
// Data access helpers
// ---------------------------------------------------------------------------
const extractSlugFromUrl = (url: string): string | null => {
    try {
        const { pathname } = new URL(url);
        const match = pathname.match(/\/product\/([^/]+)\/?$/);
        return match ? decodeURIComponent(match[1]) : null;
    } catch {
        return null;
    }
};

const fetchProductBySlug = async (slug: string): Promise<SingleProductItem | null> => {
    try {
        const res = await fetcher(ApiKeys.GET_SINGLE_PRODUCT_BY_SLUG(slug), 'web', 'GET');
        return res?.data?.product ?? null;
    } catch {
        return null;
    }
};

const fetchProductById = async (id: string): Promise<SingleProductItem | null> => {
    try {
        const res = await fetcher(ApiKeys.GET_SINGLE_PRODUCT(id), 'web', 'GET');
        return res?.data?.product ?? null;
    } catch {
        return null;
    }
};

// Runs async work over a list with a bounded number of concurrent requests,
// so a 5000-product catalog doesn't fire 5000 simultaneous backend calls.
const mapWithConcurrency = async <T, R>(items: T[], limit: number, fn: (item: T) => Promise<R>): Promise<R[]> => {
    const results: R[] = new Array(items.length);
    let index = 0;

    const workers = new Array(Math.min(limit, items.length)).fill(null).map(async () => {
        while (index < items.length) {
            const current = index++;
            results[current] = await fn(items[current]);
        }
    });

    await Promise.all(workers);
    return results;
};

// ---------------------------------------------------------------------------
// Full-catalog cache for the page+sort mode.
//
// Torob crawls page after page in quick succession, and building each page
// requires knowing every product's created_at/updated_at to sort correctly -
// which means fetching full product detail for the whole catalog. We do that
// full pass once and cache the sorted, mapped result in memory for a few
// minutes so a full crawl only pays that cost once.
//
// Caveat: this cache is per server instance/process, so on serverless
// deployments with multiple instances it's a best-effort cache, not a
// guarantee. For very large catalogs (many thousands of SKUs), replace this
// with a dedicated backend endpoint that already returns dates in the list
// response instead of fetching full detail per product.
// ---------------------------------------------------------------------------
const CATALOG_CACHE_TTL_MS = 5 * 60 * 1000;
let catalogCache: { sortKey: string; products: TorobProduct[]; expiresAt: number } | null = null;

const fetchFullCatalogSorted = async (sort: 'date_added_desc' | 'date_updated_desc'): Promise<TorobProduct[]> => {
    if (catalogCache && catalogCache.sortKey === sort && catalogCache.expiresAt > Date.now()) {
        return catalogCache.products;
    }

    const listResponse = await fetcher(ApiKeys.GET_Products, 'web', 'GET', {
        params: { page_number: '1', page_size: '5000' }
    });
    const rawProducts: Array<{ slug?: string }> = listResponse?.data?.products ?? [];
    const slugs = rawProducts.map((item) => item.slug).filter((slug): slug is string => Boolean(slug));

    const details = await mapWithConcurrency(slugs, 10, fetchProductBySlug);
    const products = details
        .map(toTorobProduct)
        .filter((item): item is TorobProduct => item !== null)
        .sort((a, b) => {
            const key = sort === 'date_added_desc' ? 'date_added' : 'date_updated';
            return new Date(b[key]).getTime() - new Date(a[key]).getTime();
        });

    catalogCache = { sortKey: sort, products, expiresAt: Date.now() + CATALOG_CACHE_TTL_MS };
    return products;
};

// ---------------------------------------------------------------------------
// Route handler
// ---------------------------------------------------------------------------
export async function POST(req: NextRequest) {
    const isAuthorized = await verifyTorobToken(req);
    if (!isAuthorized) {
        return errorResponse('missing or invalid X-Torob-Token', 401);
    }

    let body: any;
    try {
        body = await req.json();
    } catch {
        return errorResponse('request body must be valid json');
    }

    if (!body || typeof body !== 'object') {
        return errorResponse('request body is empty or invalid');
    }

    const hasPageUrls = Array.isArray(body.page_urls) && body.page_urls.length > 0;
    const hasPageUniques = Array.isArray(body.page_uniques) && body.page_uniques.length > 0;
    const hasPageSort = body.page !== undefined || body.sort !== undefined;
    const modesProvided = [hasPageUrls, hasPageUniques, hasPageSort].filter(Boolean).length;

    if (modesProvided === 0) {
        return errorResponse('one of page_urls, page_uniques or page+sort parameters must be provided');
    }
    if (modesProvided > 1) {
        return errorResponse('only one of page_urls, page_uniques or page+sort may be provided at a time');
    }

    try {
        if (hasPageUrls) {
            const slugs = (body.page_urls as unknown[])
                .filter((url): url is string => typeof url === 'string')
                .map(extractSlugFromUrl)
                .filter((slug): slug is string => Boolean(slug));

            const products = (await mapWithConcurrency(slugs, 10, fetchProductBySlug))
                .map(toTorobProduct)
                .filter((item): item is TorobProduct => item !== null);

            return NextResponse.json({
                api_version: 'torob_api_v3',
                current_page: 1,
                total: products.length,
                max_pages: 1,
                products
            });
        }

        if (hasPageUniques) {
            const ids = (body.page_uniques as unknown[]).filter((id): id is string => typeof id === 'string');

            const products = (await mapWithConcurrency(ids, 10, fetchProductById))
                .map(toTorobProduct)
                .filter((item): item is TorobProduct => item !== null);

            return NextResponse.json({
                api_version: 'torob_api_v3',
                current_page: 1,
                total: products.length,
                max_pages: 1,
                products
            });
        }

        // page + sort mode
        if (body.page === undefined) return errorResponse('page parameter is not provided');
        if (body.sort === undefined) return errorResponse('sort parameter is not provided');

        const page = Number(body.page);
        if (!Number.isInteger(page) || page < 1) {
            return errorResponse('page parameter must be an integer greater than or equal to 1');
        }
        if (body.sort !== 'date_added_desc' && body.sort !== 'date_updated_desc') {
            return errorResponse('sort parameter must be either "date_added_desc" or "date_updated_desc"');
        }

        const allProducts = await fetchFullCatalogSorted(body.sort);
        const total = allProducts.length;
        const maxPages = Math.max(1, Math.ceil(total / TOROB_PAGE_SIZE));
        const start = (page - 1) * TOROB_PAGE_SIZE;
        const pageProducts = allProducts.slice(start, start + TOROB_PAGE_SIZE);

        return NextResponse.json({
            api_version: 'torob_api_v3',
            current_page: page,
            total,
            max_pages: maxPages,
            products: pageProducts
        });
    } catch (error) {
        console.error('[torob] failed to build product feed', error);
        return errorResponse('internal error while building the product feed', 500);
    }
}

export async function GET() {
    return errorResponse('only POST is supported on this endpoint', 405);
}
