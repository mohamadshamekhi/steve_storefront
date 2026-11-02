import type { CartItem } from '@/state/stores/cart/cart.types';

// API prices are in Toman; GA4 receives them as Rial (currency: 'IRR').
const TOMAN_TO_RIAL = 10;
const FLUSH_INTERVAL_MS = 250;
const FLUSH_MAX_ATTEMPTS = 240;
const PURCHASES_KEY = 'ga_purchases';
const MAX_REMEMBERED_ORDERS = 5;

type EcommerceEvent = 'view_item' | 'add_to_cart' | 'begin_checkout' | 'purchase';

declare global {
    interface Window {
        gtag?: (command: 'event', name: string, params: Record<string, unknown>) => void;
    }
}

/** Prices are in Toman. Never add customer data (name, phone, address) here. */
export type AnalyticsItem = { slug: string; name: string; price: number; quantity: number };

type PurchaseData = { items: AnalyticsItem[]; value: number };
type RememberedPurchases = { current?: string; orders: Record<string, PurchaseData> };

const toRial = (toman: number) => Math.round(toman * TOMAN_TO_RIAL);

// gtag is loaded with strategy='lazyOnload', so it doesn't exist yet when a page's first effects run.
const pending: [EcommerceEvent, Record<string, unknown>][] = [];
let flushTimer: ReturnType<typeof setInterval> | undefined;
let flushAttempts = 0;

const flush = () => {
    if (window.gtag) pending.splice(0).forEach(([name, params]) => window.gtag?.('event', name, params));
    if (!pending.length || ++flushAttempts >= FLUSH_MAX_ATTEMPTS) {
        clearInterval(flushTimer);
        flushTimer = undefined;
        pending.length = 0;
    }
};

export const trackEcommerce = (name: EcommerceEvent, items: AnalyticsItem[], options?: { value?: number; transactionId?: string }) => {
    if (typeof window === 'undefined' || !process.env.NEXT_PUBLIC_GA_ID || !items.length) return;

    pending.push([
        name,
        {
            currency: 'IRR',
            value: toRial(options?.value ?? items.reduce((sum, item) => sum + item.price * item.quantity, 0)),
            ...(options?.transactionId && { transaction_id: options.transactionId }),
            items: items.map((item) => ({
                item_id: item.slug,
                item_name: item.name,
                price: toRial(item.price),
                quantity: item.quantity
            }))
        }
    ]);

    flushAttempts = 0;
    flush();
    if (pending.length && !flushTimer) flushTimer = setInterval(flush, FLUSH_INTERVAL_MS);
};

export const cartAnalyticsItems = (items: CartItem[]): AnalyticsItem[] =>
    items.map((item) => ({
        slug: item.slug || item.product_id,
        name: item.ProductName,
        price: item.PriceAtTime - (item.discount_amount ?? 0),
        quantity: item.Quantity
    }));

const readPurchases = (): RememberedPurchases => {
    try {
        return JSON.parse(localStorage.getItem(PURCHASES_KEY) ?? '') as RememberedPurchases;
    } catch {
        return { orders: {} };
    }
};

const writePurchases = (purchases: RememberedPurchases) => {
    try {
        localStorage.setItem(PURCHASES_KEY, JSON.stringify(purchases));
    } catch {
        // storage unavailable: the purchase event is skipped, the payment itself isn't affected
    }
};

/**
 * Call right before redirecting to the gateway. The verify response has no order id or items,
 * so they are remembered here for the return to /payment. `keepExisting` is for paying an order
 * again from the dashboard, where the snapshot from checkout has the real slugs.
 */
export const rememberPurchase = (orderId: string, data: PurchaseData, { keepExisting = false } = {}) => {
    const purchases = readPurchases();
    const orders = { ...purchases.orders, [orderId]: (keepExisting && purchases.orders[orderId]) || data };
    const recent = Object.keys(orders).slice(-MAX_REMEMBERED_ORDERS);
    writePurchases({ current: orderId, orders: Object.fromEntries(recent.map((id) => [id, orders[id]])) });
};

/** Call after a verified payment. The snapshot is removed first, so a page refresh sends nothing. */
export const trackRememberedPurchase = () => {
    const { current, orders } = readPurchases();
    const data = current ? orders[current] : undefined;
    if (!current || !data) return;

    delete orders[current];
    writePurchases({ orders });
    trackEcommerce('purchase', data.items, { value: data.value, transactionId: current });
};
