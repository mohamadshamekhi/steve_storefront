# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> Keep this file current: when the user states an important convention, constraint, preference, or "gotcha" during a session, add it here so future sessions inherit it.

## What this is

The **Steve Mobile** storefront — a Persian/RTL e-commerce frontend (mobile phones, accessories, second-hand, repairs) built on Next.js 15 App Router + React 19. It talks to an external REST API (`NEXT_PUBLIC_API_URL`, e.g. `https://api.stevemobile.com`); this repo contains no backend. (`package.json` `name` is still the scaffold default `my-app` — don't "fix" it casually.)

### Libraries already in the stack

Reach for these before adding an equivalent:

- **State/URL/cookies**: `zustand` (+ persist), `swr` / `swr/infinite`, `nuqs` (typed URL query state), `nookies` (cookie read/write), `jose` + `jwt-decode` (JWT decode/verify for auth/middleware).
- **Forms**: `formik` + `zod` + `zod-formik-adapter`.
- **UI/interaction**: `swiper` (all carousels), `react-select` (via the `CSelect` wrapper), `yet-another-react-lightbox` (image lightbox), `react-otp-input` (OTP entry), `@smastrom/react-rating` (star ratings), `react-range-slider-input` (price/range sliders).
- **Maps**: `leaflet` + `react-leaflet` (address / branch picker) — load client-side only.
- **HTML safety**: `isomorphic-dompurify` sanitizes API-provided HTML before it hits `.prose-product` / `dangerouslySetInnerHTML`.
- **Utils**: `clsx` + `tailwind-merge` via `cn()`.

## Commands

```bash
npm run dev        # next dev --turbopack (http://localhost:3000)
npm run build      # next build  — the reliable pre-commit gate together with tsc
npm run start      # serve the production build
npx tsc --noEmit   # type-check; USE THIS to verify changes
npm run prettier   # prettier --write .  — see "Formatting" caveat before running
```

- **No test framework is set up** — there are no tests, no test runner, no `npm test`.
- **`npm run lint` / `next lint` is currently broken**: `eslint-plugin-react-hooks` is not in `package.json` at all, so `next/core-web-vitals` (extended in `eslint.config.mjs` via `FlatCompat`) fails to load its rules. `next build` prints this as a warning but still completes. Rely on `tsc --noEmit` + `next build` instead. To actually restore lint: `npm i -D eslint-plugin-react-hooks` — do this rather than deleting the plugin reference from the shared Next config.
- Package manager is ambiguous: both `package-lock.json` and `pnpm-lock.yaml` are committed; the Dockerfile and this repo's tooling use **npm**.
- **`next build` compiling ≠ the UI is correct.** The dev/CI environment here has **no network access to `api.stevemobile.com`**, so pages that fetch data cannot be rendered with real data locally — `tsc` + `build` only prove it *compiles*. Don't claim a visual/layout change is "done" or "verified" from a green build; say what was and wasn't checked, and ask the user to confirm visually (or have them run `npm run dev` against the real API).

## Formatting (important)

There is **no committed Prettier config**. `prettier --write` reformats to 2-space indent / double quotes, but most hand-written files (pages, routes, page components) are **4-space / single quote**. Do **not** run Prettier over existing files — match the surrounding file's style by hand. Some files (many under `components/ui/atoms`, `SingleProductTemplate.tsx`) are already 2-space; follow whatever the file you're editing uses.

## Design, UX & responsive work

This is a **customer-facing storefront and UX/UI quality is a first-class concern** on every task, not just when asked. There's an ongoing **mobile-first UI/UX overhaul**, done surface by surface (landing, product listing, PDP, mobile bottom nav, mega-menu, …).

Standing expectations from the project owner:

- **Always weigh UX.** Every change should leave the page more attractive and more user-friendly, and — where relevant — nudge the visitor toward buying. If a change is purely functional, still check it doesn't regress the look/flow.
- **Speak up about problems.** If you notice a UI/UX issue anywhere (even outside the current task's scope), tell the user — don't silently leave it.
- **Feature ideas are welcome.** Proposing new features that attract visitors or increase conversion is in scope; suggest them when you see an opening (briefly, with the rationale).
- **Ask when unsure.** If a design/product decision isn't obvious from the request or the code, ask rather than guessing.
- **Responsive is non-negotiable — most traffic is mobile.** Design mobile-first; verify mobile (`< 640`), tablet (`640–1023`) and desktop (`lg` / `xl`) on every UI change. One breakpoint's feedback (the user usually sends a screenshot at one width) must not break the others.

Working rules:

- **Stay in the site's own visual language.** Primary = purple `#5a4fcf`, secondary = red `#ed1944`, Yekan Bakh font, the `text-*-*` typography utilities, `rounded-2xl` cards with soft shadows. Do **not** introduce a different design system / token set (a generated "design-system" style was tried and rejected as the wrong fit).
- **Sections must never touch.** Keep a consistent vertical rhythm between page sections/cards (e.g. `space-y-6 lg:space-y-8` on the page wrapper, `space-y-4` inside a column) — no two white cards flush against each other. Prefer one `space-y-*` on the parent over ad-hoc `mt-*`/`mb-*` on each child.
- **Product cards in a row must be equal height.** Swiper defaults to content-height slides — add the `swiper-equal-height` class (defined in `_general.css`) to the `SwiperComponent` and keep the card `h-full`. In a grid, `align-items: stretch` + card `h-full` already does this. Reserve space for optional card sections (e.g. the spec chips have `sm:min-h-12`) so equalized cards don't get large internal gaps.
- Prefer scoping hover/transform effects to `lg:` (they misbehave on touch); verify grid column counts, sticky elements, and overflow clipping at every breakpoint.
- Match the existing arbitrary-value → canonical-class lint preference (`min-w-8.5` not `min-w-[34px]`, `bg-linear-to-b` not `bg-gradient-to-b`).
- Category data for the header menus comes from the shared `useCategories()` hook (`src/hooks/useCategories.ts`) — SWR + a 12h `localStorage` cache, never revalidates. Reuse it rather than re-fetching.
- Form fields: the `Input` atom and `CSelect` (react-select wrapper, its look lives in the JS `customStyles` object) are kept visually matched — white bg, `border-gray-300`, `rounded-lg`, primary focus ring. Keep them in sync when touching either. `Input` still defaults to `max-w-[283px]` (legacy) — form usages pass `className="max-w-full!"`.

## Architecture

### Page structure — the three-file pattern

Every route follows: `src/app/<route>/page.tsx` → `src/app/<route>/client-page.tsx` → `src/components/page/<Name>Page.tsx`

- **`page.tsx`** (Server Component): does *all* data fetching (usually one `Promise.all` of `fetcher(...)` calls), builds `generateMetadata` + JSON-LD `<script>` tags, then renders `<ClientPage>` with the fetched data as props.
- **`client-page.tsx`** (`'use client'`): thin wrapper, mostly just `<Layout>` + `<SomePage {...props} />`. Exists to keep `page.tsx` a pure server component.
- **`components/page/<Name>Page.tsx`**: the actual client UI, composed from `components/ui/templates/*` and `components/ui/organisms/*`.

Not every route is fully three-file. Common variants: `page.tsx` renders `<ClientPage>` directly (no `components/page/*`, e.g. `partner-sales`, `phone-repair`, `phone-sales`); marketing/utility routes wrap `<ClientPage>` in `<Suspense>` (`partner-sales`, `payment`); no-index utility routes set `robots: { index: false }` inline instead of via `pageSeoGenerator` (`invite`, `payment`, `checkout/cart`). Some server components run a **module-level top-level `await fetcher(...)`** (`phone-repair`, `phone-sales` fetch brands this way) — this is intentional, not a bug.

### Route map (App Router)

- `phone-sales` — sell-your-used-phone flow (سبد/ثبت درخواست, evaluation → payout). `phone-repair` — repair-service request flow. Both are lead/service pages, brand list fetched server-side.
- `partner-sales` — B2B "فروش همکاری" wholesale/partner application page. Part of the **partner (همکار) feature** (see also `usePartnerStatus`, partner pricing in `PriceBox`).
- `invite` — referral landing: reads `?ref=<code>` and passes it to `<ClientPage>`; part of the referral program.
- `blog` (list, `?` search params) + `blog/[id]` (article, `revalidate = 120`, comments) — `ApiKeys.GET_BLOG_POSTS`. `blog/[id]` files are 2-space/double-quote — match that file, not the 4-space convention.
- `order/delivery/[token]` — landing page of the delivery QR printed on each parcel (URL comes from backend `GET /backoffice/order/:id/delivery-qrcode`). Public, no-index, no `<Layout>`. Status → phone → OTP → marks order `delivered` → shows invoice; invoice token kept in `sessionStorage` so refresh doesn't need a new OTP. Uses raw `fetch`, **not** `fetcher`: a wrong OTP returns 401 and `fetcher` hard-redirects every 401 to `/auth/sign-in` — keep that in mind for any other public endpoint that can 401.
- `product/[slug]?variant=<variantId>` preselects that variant (variant QR stickers link here). Read client-side in `ProductVariantProvider` via `window.location` so the ISR page stays static.
- `checkout/cart` — cart page (no-index). `payment` — post-checkout payment status (no-index, Suspense).

`src/components/ui/organisms/Container/Layout/Layout.tsx` wraps page content with the global chrome: `HeaderOrganism`, `FooterOrganisms`, `BottomSheet` (mobile bottom nav, `< lg` only), `Backdrop`, `CartSyncProvider`, `AdvertiseOrganism`.

**Fixed/sticky chrome stacking (mobile).** The mobile header (`sticky top-0 md:static`), the `BottomSheet` bottom nav (`fixed bottom-0`), and a page's own bottom bar (the single-product `PriceBox layout="bar"`) all coexist. Each reports its rendered height to a CSS var on `<html>` via `useElementHeightVar` — `--app-header-h`, `--app-bottom-nav`, `--app-bottom-bar` (0px when that element isn't mounted). Everything else positions against those vars instead of hard-coding sizes:
- page bottom bar sits at `bottom-[var(--app-bottom-nav,0px)]`
- sticky in-page bars (ScrollTabs, the mobile sort bar) stick at `top-[var(--app-header-h,0px)]`
- page + footer bottom padding is `calc(var(--app-bottom-nav,0px) + var(--app-bottom-bar,0px) + …)`

If you add another piece of fixed chrome, give it a var via the hook and have neighbours read it — don't hard-code offsets.

The mobile menu `OffCanvas` (`z-[120]`) and `Backdrop` (`z-40`, page-root) must render **outside** the sticky `<header>` — a `z-40` header is a stacking context that would trap the drawer below `Backdrop` and it renders greyed-out. `HeaderOrganism` returns `<>{'<header/>'}{'<OffCanvas/>'}</>` for this reason.

### API layer

`fetcher` (`src/api/config/fetcher.ts`, aliased `@steve/api-config`):

```ts
fetcher(key: string, location: 'web' | 'dashboard', method?, {
  params?, body?, next?: { revalidate, tags }, requiredAuth?, headers?
})
```

- `location: 'web'` → **public** call, no auth.
- `location: 'dashboard'` → **authenticated**: reads the `steve-session` cookie, sends `Authorization: Bearer <token>`; on missing/expired token or a 401 it shows a toast and hard-redirects to `/auth/sign-in`.
- Works on both server (relays the incoming `Cookie` header via `next/headers`) and client (native fetch). Does **not** use `credentials: 'include'` — the API's CORS sends `Allow-Origin: *` with no `Allow-Credentials`.
- All API responses use the envelope `{ success, message, data, errors }`; field-level validation errors are in `errors`.

**API paths** live in `src/api/keys/*.keys.ts`, each a default-exported object, all spread into one `ApiKeys` object (`src/api/keys/index.ts`, aliased `@steve/api-keys`). Note `category.keys.ts` is **not** spread in — use `ApiKeys.GET_ALL_CATEGORY` (from `landing.keys.ts`).

**Source of truth for the backend API** (this repo has no backend): `/Users/mohamadshamekhi/Desktop/Project/steve/api/docs/` — sibling checkout of the API server.
- `api-endpoints.json` — full list of every HTTP route: `method`, `path`, `auth` (`public` / `user` JWT / `backoffice` / `backoffice+ACL:<key>`), request `in` shape, response `out` shape, Persian `desc`. Grouped by domain (`auth`, `product`, `cart`, …). All responses are the `APIResponse` `{ message, data }` envelope.
- `postman/` — Postman collection + environment.

Read `api-endpoints.json` before wiring up any new API call. **If an endpoint you need isn't in that file, stop and tell the user to have the backend team add it** — don't invent a path or assume a shape.

### Data fetching conventions

- **Server-side**: `page.tsx` fetches with `fetcher(key, 'web', 'GET', { next: { revalidate } })` and passes data down as props. Routes set `export const revalidate = <seconds>` for ISR.
- **Client-side authed/interactive calls**: use the **same `fetcher`** directly inside client components (see `PriceBox`, `ProductFilterTemplate`, `usePartnerStatus`). This codebase deliberately avoids Server Actions — `src/actions/` contains only `auth.action.ts`. If you need a real browser `POST api.stevemobile.com/...`, call `fetcher` client-side, not an action.
- **Infinite lists**: `useInfiniteScroll` (`src/hooks/useInfinitieScroll.ts`, SWR-infinite) — returns `data`, `totalItems`, `isLoadingInitial/More`, `isEmpty`, `isReachingEnd`, `loadMore`, etc.
- Some older components fetch with a raw `fetch(\`${process.env.NEXT_PUBLIC_API_URL}/...\`)` inside `useEffect` (e.g. `SearchProducts`).
- `src/app/client-page.tsx` sets the global `SWRConfig` with `fetcher` from `@steve/api-config` as the default. `useSWR(key)` with no fetcher goes through it; components that need a different call shape pass their own fetcher.

### Auth

- Phone-number **OTP** login: `/auth/sign-in` → `/auth/verify`. `src/actions/auth.action.ts` handles it; the JWT is stored in the `steve-session` cookie.
- `src/middleware.ts` runs `ensureVisitorCookie` (sets `steve_visitor_id` for unique-visitor tracking) then `authMiddleware` (`src/app/core/middleware/auth.ts`): protects routes starting with `/dashboard`, checks the JWT `exp` (with a 30s buffer), redirects auth pages → `/dashboard` when already logged in, and clears an expired cookie.
- `signInAction` / `signInVerifyAction` in `src/actions/auth.action.ts` are the one place Server Actions are used (see "Data fetching conventions").
- Client session state: `useSessionStore` (`src/state/stores/auth`, Zustand + persist), hydrated from `GET /api/auth/session` (a route handler that decodes the cookie + fetches the profile). `status` is `'loading' | 'authenticated' | 'unauthenticated'`.

### State (Zustand)

Stores in `src/state/stores/*`, re-exported from `@/state`:

- `useCartStore` — cart; **persisted** to localStorage; `CartSyncProvider` re-fetches every 5 min while authenticated. `getItemQuantity(productId, variantId)` is the per-variant check used by add-to-cart UIs.
- `useSessionStore` — see Auth above.
- `useMenuStore` — the header **mega-menu** drawer (`toggle('mobile' | 'desktop')`); the mobile `BottomSheet` "منو" button drives this one.
- `useDrawerStore` — a **different** drawer, used by the dashboard sidebar. Don't confuse the two.
- `useModalStore`, `useToastStore` (toasts are fired imperatively from `fetcher` via `useToastStore.getState().showToast(...)`), `useAccordionStore`, `useAddressStore`, `useRoutingStore`, `useUserPreferencesStore`.

### Product detail page (PDP)

`SingleProductTemplate` wraps its subtree in `<ProductVariantProvider>` (`src/contexts/ProductVariantContext.tsx`). `PriceBox`, `ProductGalleryOrganisms`, `ProductDetailOrganisms` read `useProductVariant()` for the currently selected color/variant and its active discount. `PriceBox` takes `layout="box" | "bar"` — `"bar"` is the compact mobile sticky buy bar.

### Components

Atomic design under `src/components/ui/{atoms,molecules,organisms,templates}`. Product cards: `ProductCardOrganisms` (listing grid + PDP related-products swiper) and `ProductOrganisms` (landing-page carousels) are **two different components** — check which one you're editing.

Icons are one component per file in `src/components/icons/`. Many **hardcode `fill`/`stroke`** (e.g. `#1F2937`) rather than `currentColor`, so a parent `text-*` class won't recolor them; several accept a `className` prop, some don't — check the file.

Carousels use **Swiper** (`components/ui/atoms/Swiper/Swiper.tsx`) with a `breakpoints` map. Several existing breakpoint maps contain a `728` key (a typo for `768`) — harmless, but don't copy it into new code.

### Styling

- **Tailwind v4**, configured entirely in CSS. `src/styles/master.css` imports `base/_tailwind.css` (`@import 'tailwindcss'`), `_theme.css` (design tokens + `@theme inline`), `_typography.css`, `_general.css` (plain CSS + a few `@apply` component classes like `.no-scrollbar`, `.prose-product`, swiper overrides).
- Design tokens: `--color-primary-*` is **purple `#5a4fcf`**, `--color-secondary-*` is **red `#ed1944`**. Custom sizes: `text-tiny` (10px), `text-xs-plus` (13px), `text-sm-plus` (15px), `text-3xl-plus`/`4xl-plus`/`5xl-plus`.
- Typography utility classes in `_typography.css`: `text-body1-bold`, `text-caption1-regular`, `text-subtitle2-medium`, `text-overline-regular`, etc. — used widely; prefer them for text where the surrounding code does.
- `cn()` = `twMerge(clsx(...))` from `@/config/utilities/cn`.
- **RTL**: `<html lang="fa" dir="rtl">`, Yekan Bakh font (`src/config/fonts/YekanFont`). Physical `left`/`right` in class names are common; be deliberate about `flex-row-reverse` in RTL.
- The IDE lints arbitrary values with a "can be written as `<canonical>`" suggestion (e.g. `min-w-[34px]` → `min-w-8.5`, `bg-gradient-to-b` → `bg-linear-to-b`). Prefer the canonical form.
- `next.config.ts` allows images from **any host** (`remotePatterns: [{ hostname: '**' }]`) and sets `images.formats` (AVIF/WebP) + a long `minimumCacheTTL` — but those only affect **local `import`ed** images. `OptimizedImage` (`src/utils/imageLoader.tsx`) gives external URLs a **no-op `loader`** so they bypass the Next optimizer (`/_next/image`) entirely: the production container can't reach `storage.c2.liara.space` server-side, so optimized external images 500 in prod even though they work in `next dev`. Don't "fix" this by removing the loader. To actually optimize product images, put a CDN/proxy in front of the image host.

### Forms & validation

Formik + Zod (`zod-formik-adapter`). Schemas live in `src/config/schema/*.schema.ts`.

### SEO

`src/seo` — `pageSeoGenerator(data, titleOverride?)` builds `Metadata`; it auto-appends `" | استیو موبایل"` to titles (don't repeat the brand name). `robots.ts` and `sitemap.ts` are at `src/app/`.

## Path aliases

`@/*` → `src/*` · `@public/*` → `public/*` · `@steve/api-config` → `src/api/config/index.ts` · `@steve/api-keys` → `src/api/keys/index.ts`

## Deployment

GitLab CI (`.gitlab-ci.yml`), `main` branch only: builds the Docker image (`Dockerfile` — `npm install` + `npx next build`, no standalone output), pushes to the GitLab registry, then SSHes to the server and restarts the `storefront` container on port 3000. Env comes from `.env.production` / deploy-time vars (`NEXT_PUBLIC_API_URL`, analytics IDs).

## Misc

- `src/app/ui/page.tsx` is an internal component playground/showcase.
- `src/app/api/torob/products` is a product feed for the Torob price-comparison aggregator.
