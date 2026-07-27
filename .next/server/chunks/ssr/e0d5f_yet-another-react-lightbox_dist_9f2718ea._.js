module.exports = [
"[project]/node_modules/.pnpm/yet-another-react-lightbox@3.32.1_@types+react-dom@19.2.3_@types+react@19.2.17__@types+_a639e58e7fc68b442b7e419735bd540e/node_modules/yet-another-react-lightbox/dist/types.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACTION_CLOSE",
    ()=>ACTION_CLOSE,
    "ACTION_NEXT",
    ()=>ACTION_NEXT,
    "ACTION_PREV",
    ()=>ACTION_PREV,
    "ACTION_SWIPE",
    ()=>ACTION_SWIPE,
    "ACTIVE_SLIDE_COMPLETE",
    ()=>ACTIVE_SLIDE_COMPLETE,
    "ACTIVE_SLIDE_ERROR",
    ()=>ACTIVE_SLIDE_ERROR,
    "ACTIVE_SLIDE_LOADING",
    ()=>ACTIVE_SLIDE_LOADING,
    "ACTIVE_SLIDE_PLAYING",
    ()=>ACTIVE_SLIDE_PLAYING,
    "CLASS_FLEX_CENTER",
    ()=>CLASS_FLEX_CENTER,
    "CLASS_FULLSIZE",
    ()=>CLASS_FULLSIZE,
    "CLASS_NO_SCROLL",
    ()=>CLASS_NO_SCROLL,
    "CLASS_NO_SCROLL_PADDING",
    ()=>CLASS_NO_SCROLL_PADDING,
    "CLASS_SLIDE",
    ()=>CLASS_SLIDE,
    "CLASS_SLIDE_WRAPPER",
    ()=>CLASS_SLIDE_WRAPPER,
    "CLASS_SLIDE_WRAPPER_INTERACTIVE",
    ()=>CLASS_SLIDE_WRAPPER_INTERACTIVE,
    "ELEMENT_BUTTON",
    ()=>ELEMENT_BUTTON,
    "ELEMENT_ICON",
    ()=>ELEMENT_ICON,
    "EVENT_ON_KEY_DOWN",
    ()=>EVENT_ON_KEY_DOWN,
    "EVENT_ON_KEY_UP",
    ()=>EVENT_ON_KEY_UP,
    "EVENT_ON_POINTER_CANCEL",
    ()=>EVENT_ON_POINTER_CANCEL,
    "EVENT_ON_POINTER_DOWN",
    ()=>EVENT_ON_POINTER_DOWN,
    "EVENT_ON_POINTER_LEAVE",
    ()=>EVENT_ON_POINTER_LEAVE,
    "EVENT_ON_POINTER_MOVE",
    ()=>EVENT_ON_POINTER_MOVE,
    "EVENT_ON_POINTER_UP",
    ()=>EVENT_ON_POINTER_UP,
    "EVENT_ON_WHEEL",
    ()=>EVENT_ON_WHEEL,
    "IMAGE_FIT_CONTAIN",
    ()=>IMAGE_FIT_CONTAIN,
    "IMAGE_FIT_COVER",
    ()=>IMAGE_FIT_COVER,
    "MODULE_CAROUSEL",
    ()=>MODULE_CAROUSEL,
    "MODULE_CONTROLLER",
    ()=>MODULE_CONTROLLER,
    "MODULE_NAVIGATION",
    ()=>MODULE_NAVIGATION,
    "MODULE_NO_SCROLL",
    ()=>MODULE_NO_SCROLL,
    "MODULE_PORTAL",
    ()=>MODULE_PORTAL,
    "MODULE_ROOT",
    ()=>MODULE_ROOT,
    "MODULE_TOOLBAR",
    ()=>MODULE_TOOLBAR,
    "PLUGIN_CAPTIONS",
    ()=>PLUGIN_CAPTIONS,
    "PLUGIN_COUNTER",
    ()=>PLUGIN_COUNTER,
    "PLUGIN_DOWNLOAD",
    ()=>PLUGIN_DOWNLOAD,
    "PLUGIN_FULLSCREEN",
    ()=>PLUGIN_FULLSCREEN,
    "PLUGIN_INLINE",
    ()=>PLUGIN_INLINE,
    "PLUGIN_SHARE",
    ()=>PLUGIN_SHARE,
    "PLUGIN_SLIDESHOW",
    ()=>PLUGIN_SLIDESHOW,
    "PLUGIN_THUMBNAILS",
    ()=>PLUGIN_THUMBNAILS,
    "PLUGIN_ZOOM",
    ()=>PLUGIN_ZOOM,
    "SLIDE_STATUS_COMPLETE",
    ()=>SLIDE_STATUS_COMPLETE,
    "SLIDE_STATUS_ERROR",
    ()=>SLIDE_STATUS_ERROR,
    "SLIDE_STATUS_LOADING",
    ()=>SLIDE_STATUS_LOADING,
    "SLIDE_STATUS_PLACEHOLDER",
    ()=>SLIDE_STATUS_PLACEHOLDER,
    "SLIDE_STATUS_PLAYING",
    ()=>SLIDE_STATUS_PLAYING,
    "UNKNOWN_ACTION_TYPE",
    ()=>UNKNOWN_ACTION_TYPE,
    "VK_ARROW_LEFT",
    ()=>VK_ARROW_LEFT,
    "VK_ARROW_RIGHT",
    ()=>VK_ARROW_RIGHT,
    "VK_ESCAPE",
    ()=>VK_ESCAPE,
    "activeSlideStatus",
    ()=>activeSlideStatus
]);
const MODULE_CAROUSEL = "carousel";
const MODULE_CONTROLLER = "controller";
const MODULE_NAVIGATION = "navigation";
const MODULE_NO_SCROLL = "no-scroll";
const MODULE_PORTAL = "portal";
const MODULE_ROOT = "root";
const MODULE_TOOLBAR = "toolbar";
const PLUGIN_CAPTIONS = "captions";
const PLUGIN_COUNTER = "counter";
const PLUGIN_DOWNLOAD = "download";
const PLUGIN_FULLSCREEN = "fullscreen";
const PLUGIN_INLINE = "inline";
const PLUGIN_SHARE = "share";
const PLUGIN_SLIDESHOW = "slideshow";
const PLUGIN_THUMBNAILS = "thumbnails";
const PLUGIN_ZOOM = "zoom";
const SLIDE_STATUS_LOADING = "loading";
const SLIDE_STATUS_PLAYING = "playing";
const SLIDE_STATUS_ERROR = "error";
const SLIDE_STATUS_COMPLETE = "complete";
const SLIDE_STATUS_PLACEHOLDER = "placeholder";
const activeSlideStatus = (status)=>`active-slide-${status}`;
const ACTIVE_SLIDE_LOADING = activeSlideStatus(SLIDE_STATUS_LOADING);
const ACTIVE_SLIDE_PLAYING = activeSlideStatus(SLIDE_STATUS_PLAYING);
const ACTIVE_SLIDE_ERROR = activeSlideStatus(SLIDE_STATUS_ERROR);
const ACTIVE_SLIDE_COMPLETE = activeSlideStatus(SLIDE_STATUS_COMPLETE);
const CLASS_FULLSIZE = "fullsize";
const CLASS_FLEX_CENTER = "flex_center";
const CLASS_NO_SCROLL = "no_scroll";
const CLASS_NO_SCROLL_PADDING = "no_scroll_padding";
const CLASS_SLIDE = "slide";
const CLASS_SLIDE_WRAPPER = "slide_wrapper";
const CLASS_SLIDE_WRAPPER_INTERACTIVE = "slide_wrapper_interactive";
const ACTION_PREV = "prev";
const ACTION_NEXT = "next";
const ACTION_SWIPE = "swipe";
const ACTION_CLOSE = "close";
const EVENT_ON_POINTER_DOWN = "onPointerDown";
const EVENT_ON_POINTER_MOVE = "onPointerMove";
const EVENT_ON_POINTER_UP = "onPointerUp";
const EVENT_ON_POINTER_LEAVE = "onPointerLeave";
const EVENT_ON_POINTER_CANCEL = "onPointerCancel";
const EVENT_ON_KEY_DOWN = "onKeyDown";
const EVENT_ON_KEY_UP = "onKeyUp";
const EVENT_ON_WHEEL = "onWheel";
const VK_ESCAPE = "Escape";
const VK_ARROW_LEFT = "ArrowLeft";
const VK_ARROW_RIGHT = "ArrowRight";
const ELEMENT_BUTTON = "button";
const ELEMENT_ICON = "icon";
const IMAGE_FIT_CONTAIN = "contain";
const IMAGE_FIT_COVER = "cover";
const UNKNOWN_ACTION_TYPE = "Unknown action type";
;
}),
"[project]/node_modules/.pnpm/yet-another-react-lightbox@3.32.1_@types+react-dom@19.2.3_@types+react@19.2.17__@types+_a639e58e7fc68b442b7e419735bd540e/node_modules/yet-another-react-lightbox/dist/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "A11yContext",
    ()=>A11yContext,
    "A11yContextProvider",
    ()=>A11yContextProvider,
    "Carousel",
    ()=>Carousel,
    "CarouselModule",
    ()=>CarouselModule,
    "CloseIcon",
    ()=>CloseIcon,
    "Controller",
    ()=>Controller,
    "ControllerContext",
    ()=>ControllerContext,
    "ControllerModule",
    ()=>ControllerModule,
    "DocumentContext",
    ()=>DocumentContext,
    "DocumentContextProvider",
    ()=>DocumentContextProvider,
    "ErrorIcon",
    ()=>ErrorIcon,
    "EventsContext",
    ()=>EventsContext,
    "EventsProvider",
    ()=>EventsProvider,
    "IconButton",
    ()=>IconButton,
    "ImageSlide",
    ()=>ImageSlide,
    "Lightbox",
    ()=>Lightbox,
    "LightboxDefaultProps",
    ()=>LightboxDefaultProps,
    "LightboxDispatchContext",
    ()=>LightboxDispatchContext,
    "LightboxPropsContext",
    ()=>LightboxPropsContext,
    "LightboxPropsProvider",
    ()=>LightboxPropsProvider,
    "LightboxRoot",
    ()=>LightboxRoot,
    "LightboxStateContext",
    ()=>LightboxStateContext,
    "LightboxStateProvider",
    ()=>LightboxStateProvider,
    "LoadingIcon",
    ()=>LoadingIcon,
    "Navigation",
    ()=>Navigation,
    "NavigationButton",
    ()=>NavigationButton,
    "NavigationModule",
    ()=>NavigationModule,
    "NextIcon",
    ()=>NextIcon,
    "NoScroll",
    ()=>NoScroll,
    "NoScrollModule",
    ()=>NoScrollModule,
    "Portal",
    ()=>Portal,
    "PortalModule",
    ()=>PortalModule,
    "PreviousIcon",
    ()=>PreviousIcon,
    "RTLContext",
    ()=>RTLContext,
    "RTLContextProvider",
    ()=>RTLContextProvider,
    "Root",
    ()=>Root,
    "RootModule",
    ()=>RootModule,
    "SwipeState",
    ()=>SwipeState,
    "TimeoutsContext",
    ()=>TimeoutsContext,
    "TimeoutsProvider",
    ()=>TimeoutsProvider,
    "Toolbar",
    ()=>Toolbar,
    "ToolbarModule",
    ()=>ToolbarModule,
    "addToolbarButton",
    ()=>addToolbarButton,
    "calculatePreload",
    ()=>calculatePreload,
    "cleanup",
    ()=>cleanup,
    "clsx",
    ()=>clsx,
    "composePrefix",
    ()=>composePrefix,
    "computeSlideRect",
    ()=>computeSlideRect,
    "createIcon",
    ()=>createIcon,
    "createIconDisabled",
    ()=>createIconDisabled,
    "createModule",
    ()=>createModule,
    "createNode",
    ()=>createNode,
    "cssClass",
    ()=>cssClass,
    "cssVar",
    ()=>cssVar,
    "default",
    ()=>Lightbox,
    "devicePixelRatio",
    ()=>devicePixelRatio,
    "getSlide",
    ()=>getSlide,
    "getSlideIfPresent",
    ()=>getSlideIfPresent,
    "getSlideIndex",
    ()=>getSlideIndex,
    "getSlideKey",
    ()=>getSlideKey,
    "hasSlides",
    ()=>hasSlides,
    "hasWindow",
    ()=>hasWindow,
    "isImageFitCover",
    ()=>isImageFitCover,
    "isImageSlide",
    ()=>isImageSlide,
    "label",
    ()=>label,
    "makeComposePrefix",
    ()=>makeComposePrefix,
    "makeInertWhen",
    ()=>makeInertWhen,
    "makeUseContext",
    ()=>makeUseContext,
    "parseInt",
    ()=>parseInt,
    "parseLengthPercentage",
    ()=>parseLengthPercentage,
    "reflow",
    ()=>reflow,
    "round",
    ()=>round,
    "setRef",
    ()=>setRef,
    "stopNavigationEventsPropagation",
    ()=>stopNavigationEventsPropagation,
    "translateLabel",
    ()=>translateLabel,
    "translateSlideCounter",
    ()=>translateSlideCounter,
    "useA11yContext",
    ()=>useA11yContext,
    "useAnimation",
    ()=>useAnimation,
    "useContainerRect",
    ()=>useContainerRect,
    "useController",
    ()=>useController,
    "useDelay",
    ()=>useDelay,
    "useDocumentContext",
    ()=>useDocumentContext,
    "useEventCallback",
    ()=>useEventCallback,
    "useEvents",
    ()=>useEvents,
    "useForkRef",
    ()=>useForkRef,
    "useKeyboardNavigation",
    ()=>useKeyboardNavigation,
    "useLayoutEffect",
    ()=>useLayoutEffect,
    "useLightboxDispatch",
    ()=>useLightboxDispatch,
    "useLightboxProps",
    ()=>useLightboxProps,
    "useLightboxState",
    ()=>useLightboxState,
    "useLoseFocus",
    ()=>useLoseFocus,
    "useMotionPreference",
    ()=>useMotionPreference,
    "useNavigationState",
    ()=>useNavigationState,
    "usePointerEvents",
    ()=>usePointerEvents,
    "usePointerSwipe",
    ()=>usePointerSwipe,
    "usePreventWheelDefaults",
    ()=>usePreventWheelDefaults,
    "useRTL",
    ()=>useRTL,
    "useRTLContext",
    ()=>useRTLContext,
    "useSensors",
    ()=>useSensors,
    "useThrottle",
    ()=>useThrottle,
    "useTimeouts",
    ()=>useTimeouts,
    "useWheelSwipe",
    ()=>useWheelSwipe,
    "withPlugins",
    ()=>withPlugins
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.21_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/yet-another-react-lightbox@3.32.1_@types+react-dom@19.2.3_@types+react@19.2.17__@types+_a639e58e7fc68b442b7e419735bd540e/node_modules/yet-another-react-lightbox/dist/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.21_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const cssPrefix$3 = "yarl__";
function clsx(...classes) {
    return classes.filter(Boolean).join(" ");
}
function cssClass(name) {
    return `${cssPrefix$3}${name}`;
}
function cssVar(name) {
    return `--${cssPrefix$3}${name}`;
}
function composePrefix(base, prefix) {
    return `${base}${prefix ? `_${prefix}` : ""}`;
}
function makeComposePrefix(base) {
    return (prefix)=>composePrefix(base, prefix);
}
function translateLabel(labels, defaultLabel) {
    var _a;
    return (_a = labels === null || labels === void 0 ? void 0 : labels[defaultLabel]) !== null && _a !== void 0 ? _a : defaultLabel;
}
function label(labels, defaultLabel) {
    return translateLabel(labels, defaultLabel);
}
function translateSlideCounter(labels, slides, index) {
    return translateLabel(labels, "{index} of {total}").replace(/\{index}/g, `${getSlideIndex(index, slides.length) + 1}`).replace(/\{total}/g, `${slides.length}`);
}
function cleanup(...cleaners) {
    return ()=>{
        cleaners.forEach((cleaner)=>{
            cleaner();
        });
    };
}
function makeUseContext(name, contextName, context) {
    return ()=>{
        const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](context);
        if (!ctx) {
            throw new Error(`${name} must be used within a ${contextName}.Provider`);
        }
        return ctx;
    };
}
function hasWindow() {
    return "undefined" !== "undefined";
}
function round(value, decimals = 0) {
    const factor = 10 ** decimals;
    return Math.round((value + Number.EPSILON) * factor) / factor;
}
function isImageSlide(slide) {
    return slide.type === undefined || slide.type === "image";
}
function isImageFitCover(image, imageFit) {
    return image.imageFit === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMAGE_FIT_COVER"] || image.imageFit !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMAGE_FIT_CONTAIN"] && imageFit === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMAGE_FIT_COVER"];
}
function parseInt(value) {
    return typeof value === "string" ? Number.parseInt(value, 10) : value;
}
function parseLengthPercentage(input) {
    if (typeof input === "number") {
        return {
            pixel: input
        };
    }
    if (typeof input === "string") {
        const value = parseInt(input);
        return input.endsWith("%") ? {
            percent: value
        } : {
            pixel: value
        };
    }
    return {
        pixel: 0
    };
}
function computeSlideRect(containerRect, padding) {
    const paddingValue = parseLengthPercentage(padding);
    const paddingPixels = paddingValue.percent !== undefined ? containerRect.width / 100 * paddingValue.percent : paddingValue.pixel;
    return {
        width: Math.max(containerRect.width - 2 * paddingPixels, 0),
        height: Math.max(containerRect.height - 2 * paddingPixels, 0)
    };
}
function devicePixelRatio() {
    return (hasWindow() ? "TURBOPACK unreachable" : undefined) || 1;
}
function getSlideIndex(index, slidesCount) {
    return slidesCount > 0 ? (index % slidesCount + slidesCount) % slidesCount : 0;
}
function hasSlides(slides) {
    return slides.length > 0;
}
function getSlide(slides, index) {
    return slides[getSlideIndex(index, slides.length)];
}
function getSlideIfPresent(slides, index) {
    return hasSlides(slides) ? getSlide(slides, index) : undefined;
}
function getSlideKey(slide) {
    return isImageSlide(slide) ? slide.src : undefined;
}
function addToolbarButton(toolbar, key, button) {
    if (!button) return toolbar;
    const { buttons, ...restToolbar } = toolbar;
    const index = buttons.findIndex((item)=>item === key);
    const buttonWithKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](button) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](button, {
        key
    }, null) : button;
    if (index >= 0) {
        const result = [
            ...buttons
        ];
        result.splice(index, 1, buttonWithKey);
        return {
            buttons: result,
            ...restToolbar
        };
    }
    return {
        buttons: [
            buttonWithKey,
            ...buttons
        ],
        ...restToolbar
    };
}
function stopNavigationEventsPropagation() {
    const stopPropagation = (event)=>{
        event.stopPropagation();
    };
    return {
        onPointerDown: stopPropagation,
        onKeyDown: stopPropagation,
        onWheel: stopPropagation
    };
}
function calculatePreload(carousel, slides, minimum = 0) {
    return Math.min(carousel.preload, Math.max(carousel.finite ? slides.length - 1 : Math.floor(slides.length / 2), minimum));
}
const isReact19 = Number(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"].split(".")[0]) >= 19;
function makeInertWhen(condition) {
    const legacyValue = condition ? "" : undefined;
    return {
        inert: isReact19 ? condition : legacyValue
    };
}
function reflow(node) {
    node.scrollTop;
}
const LightboxDefaultProps = {
    open: false,
    close: ()=>{},
    index: 0,
    slides: [],
    render: {},
    plugins: [],
    toolbar: {
        buttons: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACTION_CLOSE"]
        ]
    },
    labels: {},
    animation: {
        fade: 250,
        swipe: 500,
        easing: {
            fade: "ease",
            swipe: "ease-out",
            navigation: "ease-in-out"
        }
    },
    carousel: {
        finite: false,
        preload: 2,
        padding: "16px",
        spacing: "30%",
        imageFit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMAGE_FIT_CONTAIN"],
        imageProps: {}
    },
    controller: {
        ref: null,
        focus: true,
        aria: false,
        touchAction: "none",
        closeOnPullUp: false,
        closeOnPullDown: false,
        closeOnBackdropClick: false,
        closeOnEscape: true,
        preventDefaultWheelX: true,
        preventDefaultWheelY: false,
        disableSwipeNavigation: false
    },
    portal: {},
    noScroll: {
        disabled: false
    },
    on: {},
    styles: {},
    className: ""
};
function createModule(name, component) {
    return {
        name,
        component
    };
}
function createNode(module, children) {
    return {
        module,
        children
    };
}
function traverseNode(node, target, apply) {
    if (node.module.name === target) {
        return apply(node);
    }
    if (node.children) {
        return [
            createNode(node.module, node.children.flatMap((n)=>{
                var _a;
                return (_a = traverseNode(n, target, apply)) !== null && _a !== void 0 ? _a : [];
            }))
        ];
    }
    return [
        node
    ];
}
function traverse(nodes, target, apply) {
    return nodes.flatMap((node)=>{
        var _a;
        return (_a = traverseNode(node, target, apply)) !== null && _a !== void 0 ? _a : [];
    });
}
function withPlugins(root, plugins = [], augmentations = []) {
    let config = root;
    const contains = (target)=>{
        const nodes = [
            ...config
        ];
        while(nodes.length > 0){
            const node = nodes.pop();
            if ((node === null || node === void 0 ? void 0 : node.module.name) === target) return true;
            if (node === null || node === void 0 ? void 0 : node.children) nodes.push(...node.children);
        }
        return false;
    };
    const addParent = (target, module)=>{
        if (target === "") {
            config = [
                createNode(module, config)
            ];
            return;
        }
        config = traverse(config, target, (node)=>[
                createNode(module, [
                    node
                ])
            ]);
    };
    const append = (target, module)=>{
        config = traverse(config, target, (node)=>[
                createNode(node.module, [
                    createNode(module, node.children)
                ])
            ]);
    };
    const addChild = (target, module, precede)=>{
        config = traverse(config, target, (node)=>{
            var _a;
            return [
                createNode(node.module, [
                    ...precede ? [
                        createNode(module)
                    ] : [],
                    ...(_a = node.children) !== null && _a !== void 0 ? _a : [],
                    ...!precede ? [
                        createNode(module)
                    ] : []
                ])
            ];
        });
    };
    const addSibling = (target, module, precede)=>{
        config = traverse(config, target, (node)=>[
                ...precede ? [
                    createNode(module)
                ] : [],
                node,
                ...!precede ? [
                    createNode(module)
                ] : []
            ]);
    };
    const addModule = (module)=>{
        append(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODULE_CONTROLLER"], module);
    };
    const replace = (target, module)=>{
        config = traverse(config, target, (node)=>[
                createNode(module, node.children)
            ]);
    };
    const remove = (target)=>{
        config = traverse(config, target, (node)=>node.children);
    };
    const augment = (augmentation)=>{
        augmentations.push(augmentation);
    };
    plugins.forEach((plugin)=>{
        plugin({
            contains,
            addParent,
            append,
            addChild,
            addSibling,
            addModule,
            replace,
            remove,
            augment
        });
    });
    return {
        config,
        augmentation: (props)=>augmentations.reduce((acc, augmentation)=>augmentation(acc), props)
    };
}
const A11yContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](null);
const useA11yContext = makeUseContext("useA11yContext", "A11yContext", A11yContext);
function A11yContextProvider({ children }) {
    const [focusWithin, setFocusWithin] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [autoPlaying, setAutoPlaying] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const trackFocusWithin = (onFocus, onBlur)=>{
            const trackAndDelegate = (focusWithinValue)=>(event)=>{
                    var _a;
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                        setFocusWithin(focusWithinValue);
                    }
                    (_a = focusWithinValue ? onFocus : onBlur) === null || _a === void 0 ? void 0 : _a(event);
                };
            return {
                onFocus: trackAndDelegate(true),
                onBlur: trackAndDelegate(false)
            };
        };
        return {
            focusWithin,
            trackFocusWithin,
            autoPlaying,
            setAutoPlaying
        };
    }, [
        focusWithin,
        autoPlaying
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](A11yContext.Provider, {
        value: context
    }, children);
}
const DocumentContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](null);
const useDocumentContext = makeUseContext("useDocument", "DocumentContext", DocumentContext);
function DocumentContextProvider({ nodeRef, children }) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const getOwnerDocument = (node)=>{
            var _a;
            return ((_a = node || nodeRef.current) === null || _a === void 0 ? void 0 : _a.ownerDocument) || document;
        };
        const getOwnerWindow = (node)=>{
            var _a;
            return ((_a = getOwnerDocument(node)) === null || _a === void 0 ? void 0 : _a.defaultView) || window;
        };
        return {
            getOwnerDocument,
            getOwnerWindow
        };
    }, [
        nodeRef
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](DocumentContext.Provider, {
        value: context
    }, children);
}
const EventsContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](null);
const useEvents = makeUseContext("useEvents", "EventsContext", EventsContext);
function EventsProvider({ children }) {
    const [subscriptions] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]({});
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>()=>{
            Object.keys(subscriptions).forEach((topic)=>delete subscriptions[topic]);
        }, [
        subscriptions
    ]);
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const unsubscribe = (topic, callback)=>{
            var _a;
            (_a = subscriptions[topic]) === null || _a === void 0 ? void 0 : _a.splice(0, subscriptions[topic].length, ...subscriptions[topic].filter((cb)=>cb !== callback));
        };
        const subscribe = (topic, callback)=>{
            if (!subscriptions[topic]) {
                subscriptions[topic] = [];
            }
            subscriptions[topic].push(callback);
            return ()=>unsubscribe(topic, callback);
        };
        const publish = (...[topic, event])=>{
            var _a;
            (_a = subscriptions[topic]) === null || _a === void 0 ? void 0 : _a.forEach((callback)=>callback(event));
        };
        return {
            publish,
            subscribe,
            unsubscribe
        };
    }, [
        subscriptions
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](EventsContext.Provider, {
        value: context
    }, children);
}
const LightboxPropsContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](null);
const useLightboxProps = makeUseContext("useLightboxProps", "LightboxPropsContext", LightboxPropsContext);
function LightboxPropsProvider({ children, ...props }) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](LightboxPropsContext.Provider, {
        value: props
    }, children);
}
const LightboxStateContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](null);
const useLightboxState = makeUseContext("useLightboxState", "LightboxStateContext", LightboxStateContext);
const LightboxDispatchContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](null);
const useLightboxDispatch = makeUseContext("useLightboxDispatch", "LightboxDispatchContext", LightboxDispatchContext);
function reducer(state, action) {
    switch(action.type){
        case "swipe":
            {
                const { slides } = state;
                const increment = (action === null || action === void 0 ? void 0 : action.increment) || 0;
                const globalIndex = state.globalIndex + increment;
                const currentIndex = getSlideIndex(globalIndex, slides.length);
                const currentSlide = getSlideIfPresent(slides, currentIndex);
                const animation = increment || action.duration !== undefined ? {
                    increment,
                    duration: action.duration,
                    easing: action.easing
                } : undefined;
                return {
                    slides,
                    currentIndex,
                    globalIndex,
                    currentSlide,
                    animation
                };
            }
        case "update":
            if (action.slides !== state.slides || action.index !== state.currentIndex) {
                return {
                    slides: action.slides,
                    currentIndex: action.index,
                    globalIndex: action.index,
                    currentSlide: getSlideIfPresent(action.slides, action.index)
                };
            }
            return state;
        default:
            throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNKNOWN_ACTION_TYPE"]);
    }
}
function LightboxStateProvider({ slides, index, children }) {
    const [state, dispatch] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducer"](reducer, {
        slides,
        currentIndex: index,
        globalIndex: index,
        currentSlide: getSlideIfPresent(slides, index)
    });
    const [prevSlides, setPrevSlides] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](slides);
    const [prevIndex, setPrevIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](index);
    if (slides !== prevSlides || index !== prevIndex) {
        setPrevSlides(slides);
        setPrevIndex(index);
        dispatch({
            type: "update",
            slides,
            index
        });
    }
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            ...state,
            state,
            dispatch
        }), [
        state,
        dispatch
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](LightboxDispatchContext.Provider, {
        value: dispatch
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](LightboxStateContext.Provider, {
        value: context
    }, children));
}
const RTLContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](null);
const useRTLContext = makeUseContext("useRTLContext", "RTLContext", RTLContext);
function RTLContextProvider({ isRTL, children }) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            isRTL
        }), [
        isRTL
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](RTLContext.Provider, {
        value: context
    }, children);
}
const TimeoutsContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](null);
const useTimeouts = makeUseContext("useTimeouts", "TimeoutsContext", TimeoutsContext);
function TimeoutsProvider({ children }) {
    const [timeouts] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]([]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>()=>{
            timeouts.forEach((tid)=>window.clearTimeout(tid));
            timeouts.splice(0, timeouts.length);
        }, [
        timeouts
    ]);
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const removeTimeout = (id)=>{
            timeouts.splice(0, timeouts.length, ...timeouts.filter((tid)=>tid !== id));
        };
        const setTimeout = (fn, delay)=>{
            const id = window.setTimeout(()=>{
                removeTimeout(id);
                fn();
            }, delay);
            timeouts.push(id);
            return id;
        };
        const clearTimeout = (id)=>{
            if (id !== undefined) {
                removeTimeout(id);
                window.clearTimeout(id);
            }
        };
        return {
            setTimeout,
            clearTimeout
        };
    }, [
        timeouts
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](TimeoutsContext.Provider, {
        value: context
    }, children);
}
const IconButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function IconButton({ label, className, icon: Icon, renderIcon, onClick, style, ...rest }, ref) {
    const { styles, labels } = useLightboxProps();
    const buttonLabel = translateLabel(labels, label);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("button", {
        ref: ref,
        type: "button",
        title: buttonLabel,
        "aria-label": buttonLabel,
        className: clsx(cssClass(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELEMENT_BUTTON"]), className),
        onClick: onClick,
        style: {
            ...style,
            ...styles.button
        },
        ...rest
    }, renderIcon ? renderIcon() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Icon, {
        className: cssClass(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELEMENT_ICON"]),
        style: styles.icon
    }));
});
function svgIcon(name, children) {
    const icon = (props)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: "24",
            height: "24",
            "aria-hidden": "true",
            focusable: "false",
            ...props
        }, children);
    icon.displayName = name;
    return icon;
}
function createIcon(name, glyph) {
    return svgIcon(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("g", {
        fill: "currentColor"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", {
        d: "M0 0h24v24H0z",
        fill: "none"
    }), glyph));
}
function createIconDisabled(name, glyph) {
    return svgIcon(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("defs", null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("mask", {
        id: "strike"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", {
        d: "M0 0h24v24H0z",
        fill: "white"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", {
        d: "M0 0L24 24",
        stroke: "black",
        strokeWidth: 4
    }))), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", {
        d: "M0.70707 2.121320L21.878680 23.292883",
        stroke: "currentColor",
        strokeWidth: 2
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("g", {
        fill: "currentColor",
        mask: "url(#strike)"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", {
        d: "M0 0h24v24H0z",
        fill: "none"
    }), glyph)));
}
const CloseIcon = createIcon("Close", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}));
const PreviousIcon = createIcon("Previous", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", {
    d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
}));
const NextIcon = createIcon("Next", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", {
    d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}));
const LoadingIcon = createIcon("Loading", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, Array.from({
    length: 8
}).map((_, index, array)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("line", {
        key: index,
        x1: "12",
        y1: "6.5",
        x2: "12",
        y2: "1.8",
        strokeLinecap: "round",
        strokeWidth: "2.6",
        stroke: "currentColor",
        strokeOpacity: 1 / array.length * (index + 1),
        transform: `rotate(${360 / array.length * index}, 12, 12)`
    }))));
const ErrorIcon = createIcon("Error", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", {
    d: "M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"
}));
const useLayoutEffect = hasWindow() ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"];
function useMotionPreference() {
    const [reduceMotion, setReduceMotion] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        var _a, _b;
        const mediaQuery = (_a = window.matchMedia) === null || _a === void 0 ? void 0 : _a.call(window, "(prefers-reduced-motion: reduce)");
        setReduceMotion(mediaQuery === null || mediaQuery === void 0 ? void 0 : mediaQuery.matches);
        const listener = (event)=>setReduceMotion(event.matches);
        (_b = mediaQuery === null || mediaQuery === void 0 ? void 0 : mediaQuery.addEventListener) === null || _b === void 0 ? void 0 : _b.call(mediaQuery, "change", listener);
        return ()=>{
            var _a;
            return (_a = mediaQuery === null || mediaQuery === void 0 ? void 0 : mediaQuery.removeEventListener) === null || _a === void 0 ? void 0 : _a.call(mediaQuery, "change", listener);
        };
    }, []);
    return reduceMotion;
}
function currentTransformation(node) {
    let x = 0;
    let y = 0;
    let z = 0;
    const matrix = window.getComputedStyle(node).transform;
    const matcher = matrix.match(/matrix.*\((.+)\)/);
    if (matcher) {
        const values = matcher[1].split(",").map(parseInt);
        if (values.length === 6) {
            x = values[4];
            y = values[5];
        } else if (values.length === 16) {
            x = values[12];
            y = values[13];
            z = values[14];
        }
    }
    return {
        x,
        y,
        z
    };
}
function useAnimation(nodeRef, computeAnimation) {
    const snapshot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](undefined);
    const animation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](undefined);
    const reduceMotion = useMotionPreference();
    useLayoutEffect(()=>{
        var _a, _b, _c;
        if (nodeRef.current && snapshot.current !== undefined && !reduceMotion) {
            const { keyframes, duration, easing, onfinish } = computeAnimation(snapshot.current, nodeRef.current.getBoundingClientRect(), currentTransformation(nodeRef.current)) || {};
            if (keyframes && duration) {
                (_a = animation.current) === null || _a === void 0 ? void 0 : _a.cancel();
                animation.current = undefined;
                try {
                    animation.current = (_c = (_b = nodeRef.current).animate) === null || _c === void 0 ? void 0 : _c.call(_b, keyframes, {
                        duration,
                        easing
                    });
                } catch (err) {
                    console.error(err);
                }
                if (animation.current) {
                    animation.current.onfinish = ()=>{
                        animation.current = undefined;
                        onfinish === null || onfinish === void 0 ? void 0 : onfinish();
                    };
                }
            }
        }
        snapshot.current = undefined;
    });
    return {
        prepareAnimation: (currentSnapshot)=>{
            snapshot.current = currentSnapshot;
        },
        isAnimationPlaying: ()=>{
            var _a;
            return ((_a = animation.current) === null || _a === void 0 ? void 0 : _a.playState) === "running";
        }
    };
}
function useContainerRect() {
    const containerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const observerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](undefined);
    const [containerRect, setContainerRect] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]();
    const setContainerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((node)=>{
        containerRef.current = node;
        if (observerRef.current) {
            observerRef.current.disconnect();
            observerRef.current = undefined;
        }
        const updateContainerRect = ()=>{
            if (node) {
                const styles = window.getComputedStyle(node);
                const parse = (value)=>parseFloat(value) || 0;
                setContainerRect({
                    width: Math.round(node.clientWidth - parse(styles.paddingLeft) - parse(styles.paddingRight)),
                    height: Math.round(node.clientHeight - parse(styles.paddingTop) - parse(styles.paddingBottom))
                });
            } else {
                setContainerRect(undefined);
            }
        };
        updateContainerRect();
        if (node && typeof ResizeObserver !== "undefined") {
            observerRef.current = new ResizeObserver(updateContainerRect);
            observerRef.current.observe(node);
        }
    }, []);
    return {
        setContainerRef,
        containerRef,
        containerRect
    };
}
function useDelay() {
    const timeoutId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](undefined);
    const { setTimeout, clearTimeout } = useTimeouts();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((callback, delay)=>{
        clearTimeout(timeoutId.current);
        timeoutId.current = setTimeout(callback, delay > 0 ? delay : 0);
    }, [
        setTimeout,
        clearTimeout
    ]);
}
function useEventCallback(fn) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](fn);
    useLayoutEffect(()=>{
        ref.current = fn;
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((...args)=>{
        var _a;
        return (_a = ref.current) === null || _a === void 0 ? void 0 : _a.call(ref, ...args);
    }, []);
}
function setRef(ref, value) {
    if (typeof ref === "function") {
        ref(value);
    } else if (ref) {
        ref.current = value;
    }
}
function useForkRef(refA, refB) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>refA == null && refB == null ? null : (refValue)=>{
            setRef(refA, refValue);
            setRef(refB, refValue);
        }, [
        refA,
        refB
    ]);
}
function useLoseFocus(focus, disabled = false) {
    const focused = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    useLayoutEffect(()=>{
        if (disabled && focused.current) {
            focused.current = false;
            focus();
        }
    }, [
        disabled,
        focus
    ]);
    const onFocus = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        focused.current = true;
    }, []);
    const onBlur = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        focused.current = false;
    }, []);
    return {
        onFocus,
        onBlur
    };
}
function useRTL() {
    return useRTLContext().isRTL;
}
function useSensors() {
    const [subscribers] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]({});
    const notifySubscribers = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((type, event)=>{
        var _a;
        (_a = subscribers[type]) === null || _a === void 0 ? void 0 : _a.forEach((listener)=>{
            if (!event.isPropagationStopped()) listener(event);
        });
    }, [
        subscribers
    ]);
    const registerSensors = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            onPointerDown: (event)=>notifySubscribers(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVENT_ON_POINTER_DOWN"], event),
            onPointerMove: (event)=>notifySubscribers(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVENT_ON_POINTER_MOVE"], event),
            onPointerUp: (event)=>notifySubscribers(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVENT_ON_POINTER_UP"], event),
            onPointerLeave: (event)=>notifySubscribers(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVENT_ON_POINTER_LEAVE"], event),
            onPointerCancel: (event)=>notifySubscribers(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVENT_ON_POINTER_CANCEL"], event),
            onKeyDown: (event)=>notifySubscribers(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVENT_ON_KEY_DOWN"], event),
            onKeyUp: (event)=>notifySubscribers(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVENT_ON_KEY_UP"], event),
            onWheel: (event)=>notifySubscribers(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVENT_ON_WHEEL"], event)
        }), [
        notifySubscribers
    ]);
    const subscribeSensors = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((type, callback)=>{
        if (!subscribers[type]) {
            subscribers[type] = [];
        }
        subscribers[type].unshift(callback);
        return ()=>{
            const listeners = subscribers[type];
            if (listeners) {
                listeners.splice(0, listeners.length, ...listeners.filter((el)=>el !== callback));
            }
        };
    }, [
        subscribers
    ]);
    return {
        registerSensors,
        subscribeSensors
    };
}
function useThrottle(callback, delay) {
    const lastCallbackTime = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const delayCallback = useDelay();
    const executeCallback = useEventCallback((...args)=>{
        lastCallbackTime.current = Date.now();
        callback(args);
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((...args)=>{
        delayCallback(()=>{
            executeCallback(args);
        }, delay - (Date.now() - lastCallbackTime.current));
    }, [
        delay,
        executeCallback,
        delayCallback
    ]);
}
const slidePrefix = makeComposePrefix("slide");
const slideImagePrefix = makeComposePrefix("slide_image");
function ImageSlide({ slide: image, offset, render, rect, imageFit, imageProps, onClick, onLoad, onError, style }) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const [status, setStatus] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SLIDE_STATUS_LOADING"]);
    const { publish } = useEvents();
    const { setTimeout } = useTimeouts();
    const imageRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (offset === 0) {
            publish((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["activeSlideStatus"])(status));
        }
    }, [
        offset,
        status,
        publish
    ]);
    const handleLoading = useEventCallback((img)=>{
        ("decode" in img ? img.decode() : Promise.resolve()).catch(()=>{}).then(()=>{
            if (!img.parentNode) {
                return;
            }
            setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SLIDE_STATUS_COMPLETE"]);
            setTimeout(()=>{
                onLoad === null || onLoad === void 0 ? void 0 : onLoad(img);
            }, 0);
        });
    });
    const setImageRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((img)=>{
        imageRef.current = img;
        if (img === null || img === void 0 ? void 0 : img.complete) {
            handleLoading(img);
        }
    }, [
        handleLoading
    ]);
    const handleOnLoad = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((event)=>{
        handleLoading(event.currentTarget);
    }, [
        handleLoading
    ]);
    const handleOnError = useEventCallback(()=>{
        setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SLIDE_STATUS_ERROR"]);
        onError === null || onError === void 0 ? void 0 : onError();
    });
    const cover = isImageFitCover(image, imageFit);
    const nonInfinite = (value, fallback)=>Number.isFinite(value) ? value : fallback;
    const maxWidth = nonInfinite(Math.max(...((_b = (_a = image.srcSet) === null || _a === void 0 ? void 0 : _a.map((x)=>x.width)) !== null && _b !== void 0 ? _b : []).concat(image.width ? [
        image.width
    ] : []).filter(Boolean)), ((_c = imageRef.current) === null || _c === void 0 ? void 0 : _c.naturalWidth) || 0);
    const maxHeight = nonInfinite(Math.max(...((_e = (_d = image.srcSet) === null || _d === void 0 ? void 0 : _d.map((x)=>x.height)) !== null && _e !== void 0 ? _e : []).concat(image.height ? [
        image.height
    ] : []).filter(Boolean)), ((_f = imageRef.current) === null || _f === void 0 ? void 0 : _f.naturalHeight) || 0);
    const defaultStyle = maxWidth && maxHeight ? {
        maxWidth: `min(${maxWidth}px, 100%)`,
        maxHeight: `min(${maxHeight}px, 100%)`
    } : {
        maxWidth: "100%",
        maxHeight: "100%"
    };
    const srcSet = (_g = image.srcSet) === null || _g === void 0 ? void 0 : _g.slice().sort((a, b)=>a.width - b.width).map((item)=>`${item.src} ${item.width}w`).join(", ");
    const estimateActualWidth = ()=>rect && !cover && image.width && image.height ? rect.height / image.height * image.width : Number.MAX_VALUE;
    const sizes = srcSet && rect && hasWindow() ? "TURBOPACK unreachable" : undefined;
    const { style: imagePropsStyle, className: imagePropsClassName, ...restImageProps } = (typeof imageProps === "function" ? imageProps(image) : imageProps) || {};
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("img", {
        ref: setImageRef,
        onLoad: handleOnLoad,
        onError: handleOnError,
        onClick: onClick,
        draggable: false,
        className: clsx(cssClass(slideImagePrefix()), cover && cssClass(slideImagePrefix("cover")), status !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SLIDE_STATUS_COMPLETE"] && cssClass(slideImagePrefix("loading")), imagePropsClassName),
        style: {
            ...defaultStyle,
            ...style,
            ...imagePropsStyle
        },
        ...restImageProps,
        alt: (_h = image.alt) !== null && _h !== void 0 ? _h : "",
        sizes: sizes,
        srcSet: srcSet,
        src: image.src
    }), status !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SLIDE_STATUS_COMPLETE"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: cssClass(slidePrefix(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SLIDE_STATUS_PLACEHOLDER"]))
    }, status === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SLIDE_STATUS_LOADING"] && ((render === null || render === void 0 ? void 0 : render.iconLoading) ? render.iconLoading() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](LoadingIcon, {
        className: clsx(cssClass(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELEMENT_ICON"]), cssClass(slidePrefix(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SLIDE_STATUS_LOADING"])))
    })), status === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SLIDE_STATUS_ERROR"] && ((render === null || render === void 0 ? void 0 : render.iconError) ? render.iconError() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](ErrorIcon, {
        className: clsx(cssClass(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELEMENT_ICON"]), cssClass(slidePrefix(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SLIDE_STATUS_ERROR"])))
    }))));
}
const LightboxRoot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function LightboxRoot({ className, children, onFocus, onBlur, ...rest }, ref) {
    const nodeRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const [isRTL, setIsRTL] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const { trackFocusWithin } = useA11yContext();
    const detectRTL = useEventCallback(()=>{
        if (nodeRef.current) {
            const rtl = window.getComputedStyle(nodeRef.current).direction === "rtl";
            if (rtl !== isRTL) {
                setIsRTL(rtl);
            }
        }
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](detectRTL);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](DocumentContextProvider, {
        nodeRef: nodeRef
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](RTLContextProvider, {
        isRTL: isRTL
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ref: useForkRef(ref, nodeRef),
        className: clsx(cssClass("root"), className),
        ...trackFocusWithin(onFocus, onBlur),
        ...rest
    }, children)));
});
var SwipeState;
(function(SwipeState) {
    SwipeState[SwipeState["NONE"] = 0] = "NONE";
    SwipeState[SwipeState["SWIPE"] = 1] = "SWIPE";
    SwipeState[SwipeState["PULL"] = 2] = "PULL";
    SwipeState[SwipeState["ANIMATION"] = 3] = "ANIMATION";
})(SwipeState || (SwipeState = {}));
function usePointerEvents(subscribeSensors, onPointerDown, onPointerMove, onPointerUp, disabled) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>!disabled ? cleanup(subscribeSensors(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVENT_ON_POINTER_DOWN"], onPointerDown), subscribeSensors(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVENT_ON_POINTER_MOVE"], onPointerMove), subscribeSensors(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVENT_ON_POINTER_UP"], onPointerUp), subscribeSensors(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVENT_ON_POINTER_LEAVE"], onPointerUp), subscribeSensors(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVENT_ON_POINTER_CANCEL"], onPointerUp)) : ()=>{}, [
        subscribeSensors,
        onPointerDown,
        onPointerMove,
        onPointerUp,
        disabled
    ]);
}
var Gesture;
(function(Gesture) {
    Gesture[Gesture["NONE"] = 0] = "NONE";
    Gesture[Gesture["SWIPE"] = 1] = "SWIPE";
    Gesture[Gesture["PULL"] = 2] = "PULL";
})(Gesture || (Gesture = {}));
const SWIPE_THRESHOLD = 30;
function usePointerSwipe({ disableSwipeNavigation, closeOnBackdropClick }, subscribeSensors, isSwipeValid, containerWidth, swipeAnimationDuration, onSwipeStart, onSwipeProgress, onSwipeFinish, onSwipeCancel, pullUpEnabled, pullDownEnabled, onPullStart, onPullProgress, onPullFinish, onPullCancel, onClose) {
    const offset = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const pointers = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]([]);
    const activePointer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](undefined);
    const startTime = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const gesture = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](Gesture.NONE);
    const clearPointer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((event)=>{
        if (activePointer.current === event.pointerId) {
            activePointer.current = undefined;
            gesture.current = Gesture.NONE;
        }
        const currentPointers = pointers.current;
        currentPointers.splice(0, currentPointers.length, ...currentPointers.filter((p)=>p.pointerId !== event.pointerId));
    }, []);
    const addPointer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((event)=>{
        clearPointer(event);
        event.persist();
        pointers.current.push(event);
    }, [
        clearPointer
    ]);
    const lookupPointer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((event)=>pointers.current.find(({ pointerId })=>event.pointerId === pointerId), []);
    const onPointerDown = useEventCallback((event)=>{
        addPointer(event);
    });
    const exceedsPullThreshold = (value, threshold)=>pullDownEnabled && value > threshold || pullUpEnabled && value < -threshold;
    const onPointerUp = useEventCallback((event)=>{
        const pointer = lookupPointer(event);
        if (pointer) {
            if (activePointer.current === event.pointerId) {
                const duration = Date.now() - startTime.current;
                const currentOffset = offset.current;
                if (gesture.current === Gesture.SWIPE) {
                    if (Math.abs(currentOffset) > 0.3 * containerWidth || Math.abs(currentOffset) > 5 && duration < swipeAnimationDuration) {
                        onSwipeFinish(currentOffset, duration);
                    } else {
                        onSwipeCancel(currentOffset);
                    }
                } else if (gesture.current === Gesture.PULL) {
                    if (exceedsPullThreshold(currentOffset, 2 * SWIPE_THRESHOLD)) {
                        onPullFinish(currentOffset, duration);
                    } else {
                        onPullCancel(currentOffset);
                    }
                }
                offset.current = 0;
                gesture.current = Gesture.NONE;
            } else {
                const { target } = event;
                if (closeOnBackdropClick && target instanceof HTMLElement && target === pointer.target && (target.classList.contains(cssClass(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CLASS_SLIDE"])) || target.classList.contains(cssClass(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CLASS_SLIDE_WRAPPER"])))) {
                    onClose();
                }
            }
        }
        clearPointer(event);
    });
    const onPointerMove = useEventCallback((event)=>{
        const pointer = lookupPointer(event);
        if (pointer) {
            const isCurrentPointer = activePointer.current === event.pointerId;
            if (event.buttons === 0) {
                if (isCurrentPointer && offset.current !== 0) {
                    onPointerUp(event);
                } else {
                    clearPointer(pointer);
                }
                return;
            }
            const deltaX = event.clientX - pointer.clientX;
            const deltaY = event.clientY - pointer.clientY;
            if (activePointer.current === undefined) {
                const startGesture = (newGesture)=>{
                    addPointer(event);
                    activePointer.current = event.pointerId;
                    startTime.current = Date.now();
                    gesture.current = newGesture;
                };
                if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > SWIPE_THRESHOLD && isSwipeValid(deltaX)) {
                    if (!disableSwipeNavigation) {
                        startGesture(Gesture.SWIPE);
                        onSwipeStart();
                    }
                } else if (Math.abs(deltaY) > Math.abs(deltaX) && exceedsPullThreshold(deltaY, SWIPE_THRESHOLD)) {
                    startGesture(Gesture.PULL);
                    onPullStart();
                }
            } else if (isCurrentPointer) {
                if (gesture.current === Gesture.SWIPE) {
                    offset.current = deltaX;
                    onSwipeProgress(deltaX);
                } else if (gesture.current === Gesture.PULL) {
                    offset.current = deltaY;
                    onPullProgress(deltaY);
                }
            }
        }
    });
    usePointerEvents(subscribeSensors, onPointerDown, onPointerMove, onPointerUp);
}
function usePreventWheelDefaults({ preventDefaultWheelX, preventDefaultWheelY }) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const listener = useEventCallback((event)=>{
        const horizontal = Math.abs(event.deltaX) > Math.abs(event.deltaY);
        if (horizontal && preventDefaultWheelX || !horizontal && preventDefaultWheelY || event.ctrlKey) {
            event.preventDefault();
        }
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((node)=>{
        var _a;
        if (node) {
            node.addEventListener("wheel", listener, {
                passive: false
            });
        } else {
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.removeEventListener("wheel", listener);
        }
        ref.current = node;
    }, [
        listener
    ]);
}
function useWheelSwipe(swipeState, subscribeSensors, isSwipeValid, containerWidth, swipeAnimationDuration, onSwipeStart, onSwipeProgress, onSwipeFinish, onSwipeCancel) {
    const offset = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const intent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const intentCleanup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](undefined);
    const resetCleanup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](undefined);
    const wheelInertia = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const wheelInertiaCleanup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](undefined);
    const startTime = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const { setTimeout, clearTimeout } = useTimeouts();
    const cancelSwipeIntentCleanup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        if (intentCleanup.current) {
            clearTimeout(intentCleanup.current);
            intentCleanup.current = undefined;
        }
    }, [
        clearTimeout
    ]);
    const cancelSwipeResetCleanup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        if (resetCleanup.current) {
            clearTimeout(resetCleanup.current);
            resetCleanup.current = undefined;
        }
    }, [
        clearTimeout
    ]);
    const handleCleanup = useEventCallback(()=>{
        if (swipeState !== SwipeState.SWIPE) {
            offset.current = 0;
            startTime.current = 0;
            cancelSwipeIntentCleanup();
            cancelSwipeResetCleanup();
        }
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](handleCleanup, [
        swipeState,
        handleCleanup
    ]);
    const handleCancelSwipe = useEventCallback((currentSwipeOffset)=>{
        resetCleanup.current = undefined;
        if (offset.current === currentSwipeOffset) {
            onSwipeCancel(offset.current);
        }
    });
    const onWheel = useEventCallback((event)=>{
        if (event.ctrlKey) {
            return;
        }
        if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
            return;
        }
        const setWheelInertia = (inertia)=>{
            wheelInertia.current = inertia;
            clearTimeout(wheelInertiaCleanup.current);
            wheelInertiaCleanup.current = inertia > 0 ? setTimeout(()=>{
                wheelInertia.current = 0;
                wheelInertiaCleanup.current = undefined;
            }, 300) : undefined;
        };
        if (swipeState === SwipeState.NONE) {
            if (Math.abs(event.deltaX) <= 1.2 * Math.abs(wheelInertia.current)) {
                setWheelInertia(event.deltaX);
                return;
            }
            if (!isSwipeValid(-event.deltaX)) {
                return;
            }
            intent.current += event.deltaX;
            cancelSwipeIntentCleanup();
            if (Math.abs(intent.current) > 30) {
                intent.current = 0;
                setWheelInertia(0);
                startTime.current = Date.now();
                onSwipeStart();
            } else {
                const currentSwipeIntent = intent.current;
                intentCleanup.current = setTimeout(()=>{
                    intentCleanup.current = undefined;
                    if (currentSwipeIntent === intent.current) {
                        intent.current = 0;
                    }
                }, swipeAnimationDuration);
            }
        } else if (swipeState === SwipeState.SWIPE) {
            let newSwipeOffset = offset.current - event.deltaX;
            newSwipeOffset = Math.min(Math.abs(newSwipeOffset), containerWidth) * Math.sign(newSwipeOffset);
            offset.current = newSwipeOffset;
            onSwipeProgress(newSwipeOffset);
            cancelSwipeResetCleanup();
            if (Math.abs(newSwipeOffset) > 0.2 * containerWidth) {
                setWheelInertia(event.deltaX);
                onSwipeFinish(newSwipeOffset, Date.now() - startTime.current);
                return;
            }
            resetCleanup.current = setTimeout(()=>handleCancelSwipe(newSwipeOffset), 2 * swipeAnimationDuration);
        } else {
            setWheelInertia(event.deltaX);
        }
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>subscribeSensors(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVENT_ON_WHEEL"], onWheel), [
        subscribeSensors,
        onWheel
    ]);
}
const cssContainerPrefix = makeComposePrefix("container");
const ControllerContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](null);
const useController = makeUseContext("useController", "ControllerContext", ControllerContext);
function Controller({ children, ...props }) {
    var _a;
    const { carousel, animation, controller, on, styles, render } = props;
    const { closeOnPullUp, closeOnPullDown, preventDefaultWheelX, preventDefaultWheelY } = controller;
    const [toolbarWidth, setToolbarWidth] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]();
    const state = useLightboxState();
    const dispatch = useLightboxDispatch();
    const [swipeState, setSwipeState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](SwipeState.NONE);
    const swipeOffset = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const pullOffset = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const pullOpacity = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](1);
    const { registerSensors, subscribeSensors } = useSensors();
    const { subscribe, publish } = useEvents();
    const cleanupAnimationIncrement = useDelay();
    const cleanupSwipeOffset = useDelay();
    const cleanupPullOffset = useDelay();
    const { containerRef, setContainerRef, containerRect } = useContainerRect();
    const handleContainerRef = useForkRef(usePreventWheelDefaults({
        preventDefaultWheelX,
        preventDefaultWheelY
    }), setContainerRef);
    const carouselRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const setCarouselRef = useForkRef(carouselRef, undefined);
    const { getOwnerDocument } = useDocumentContext();
    const isRTL = useRTL();
    const rtl = (value)=>(isRTL ? -1 : 1) * (typeof value === "number" ? value : 1);
    const focus = useEventCallback(()=>{
        var _a;
        return (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    });
    const getLightboxProps = useEventCallback(()=>props);
    const getLightboxState = useEventCallback(()=>state);
    const prev = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((params)=>publish(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACTION_PREV"], params), [
        publish
    ]);
    const next = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((params)=>publish(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACTION_NEXT"], params), [
        publish
    ]);
    const close = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>publish(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACTION_CLOSE"]), [
        publish
    ]);
    const isSwipeValid = (offset)=>!(carousel.finite && (rtl(offset) > 0 && state.currentIndex === 0 || rtl(offset) < 0 && state.currentIndex === state.slides.length - 1));
    const setSwipeOffset = (offset)=>{
        var _a;
        swipeOffset.current = offset;
        (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.style.setProperty(cssVar("swipe_offset"), `${Math.round(offset)}px`);
    };
    const setPullOffset = (offset)=>{
        var _a, _b;
        pullOffset.current = offset;
        pullOpacity.current = (()=>{
            const threshold = 60;
            const minOpacity = 0.5;
            const offsetValue = (()=>{
                if (closeOnPullDown && offset > 0) return offset;
                if (closeOnPullUp && offset < 0) return -offset;
                return 0;
            })();
            return Math.min(Math.max(round(1 - offsetValue / threshold * (1 - minOpacity), 2), minOpacity), 1);
        })();
        (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.style.setProperty(cssVar("pull_offset"), `${Math.round(offset)}px`);
        (_b = containerRef.current) === null || _b === void 0 ? void 0 : _b.style.setProperty(cssVar("pull_opacity"), `${pullOpacity.current}`);
    };
    const { prepareAnimation: preparePullAnimation } = useAnimation(carouselRef, (snapshot, rect, translate)=>{
        if (carouselRef.current && containerRect) {
            return {
                keyframes: [
                    {
                        transform: `translate(0, ${snapshot.rect.y - rect.y + translate.y}px)`,
                        opacity: snapshot.opacity
                    },
                    {
                        transform: "translate(0, 0)",
                        opacity: 1
                    }
                ],
                duration: snapshot.duration,
                easing: animation.easing.fade
            };
        }
        return undefined;
    });
    const pull = (offset, cancel)=>{
        if (closeOnPullUp || closeOnPullDown) {
            setPullOffset(offset);
            let duration = 0;
            if (carouselRef.current) {
                duration = animation.fade * (cancel ? 2 : 1);
                preparePullAnimation({
                    rect: carouselRef.current.getBoundingClientRect(),
                    opacity: pullOpacity.current,
                    duration
                });
            }
            cleanupPullOffset(()=>{
                setPullOffset(0);
                setSwipeState(SwipeState.NONE);
            }, duration);
            setSwipeState(SwipeState.ANIMATION);
            if (!cancel) {
                close();
            }
        }
    };
    const { prepareAnimation, isAnimationPlaying } = useAnimation(carouselRef, (snapshot, rect, translate)=>{
        var _a;
        if (carouselRef.current && containerRect && ((_a = state.animation) === null || _a === void 0 ? void 0 : _a.duration)) {
            const parsedSpacing = parseLengthPercentage(carousel.spacing);
            const spacingValue = (parsedSpacing.percent ? parsedSpacing.percent * containerRect.width / 100 : parsedSpacing.pixel) || 0;
            return {
                keyframes: [
                    {
                        transform: `translate(${rtl(state.globalIndex - snapshot.index) * (containerRect.width + spacingValue) + snapshot.rect.x - rect.x + translate.x}px, 0)`
                    },
                    {
                        transform: "translate(0, 0)"
                    }
                ],
                duration: state.animation.duration,
                easing: state.animation.easing
            };
        }
        return undefined;
    });
    const swipe = useEventCallback((action)=>{
        var _a, _b;
        const currentSwipeOffset = action.offset || 0;
        const swipeDuration = !currentSwipeOffset ? (_a = animation.navigation) !== null && _a !== void 0 ? _a : animation.swipe : animation.swipe;
        const swipeEasing = !currentSwipeOffset && !isAnimationPlaying() ? animation.easing.navigation : animation.easing.swipe;
        let { direction } = action;
        const count = (_b = action.count) !== null && _b !== void 0 ? _b : 1;
        let newSwipeState = SwipeState.ANIMATION;
        let newSwipeAnimationDuration = swipeDuration * count;
        if (!direction) {
            const containerWidth = containerRect === null || containerRect === void 0 ? void 0 : containerRect.width;
            const elapsedTime = action.duration || 0;
            const expectedTime = containerWidth ? swipeDuration / containerWidth * Math.abs(currentSwipeOffset) : swipeDuration;
            if (count !== 0) {
                if (elapsedTime < expectedTime) {
                    newSwipeAnimationDuration = newSwipeAnimationDuration / expectedTime * Math.max(elapsedTime, expectedTime / 5);
                } else if (containerWidth) {
                    newSwipeAnimationDuration = swipeDuration / containerWidth * (containerWidth - Math.abs(currentSwipeOffset));
                }
                direction = rtl(currentSwipeOffset) > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACTION_PREV"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACTION_NEXT"];
            } else {
                newSwipeAnimationDuration = swipeDuration / 2;
            }
        }
        let increment = 0;
        if (direction === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACTION_PREV"]) {
            if (isSwipeValid(rtl(1))) {
                increment = -count;
            } else {
                newSwipeState = SwipeState.NONE;
                newSwipeAnimationDuration = swipeDuration;
            }
        } else if (direction === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACTION_NEXT"]) {
            if (isSwipeValid(rtl(-1))) {
                increment = count;
            } else {
                newSwipeState = SwipeState.NONE;
                newSwipeAnimationDuration = swipeDuration;
            }
        }
        newSwipeAnimationDuration = Math.round(newSwipeAnimationDuration);
        cleanupSwipeOffset(()=>{
            setSwipeOffset(0);
            setSwipeState(SwipeState.NONE);
        }, newSwipeAnimationDuration);
        if (carouselRef.current) {
            prepareAnimation({
                rect: carouselRef.current.getBoundingClientRect(),
                index: state.globalIndex
            });
        }
        setSwipeState(newSwipeState);
        publish(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACTION_SWIPE"], {
            type: "swipe",
            increment,
            duration: newSwipeAnimationDuration,
            easing: swipeEasing
        });
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        var _a, _b;
        if (((_a = state.animation) === null || _a === void 0 ? void 0 : _a.increment) && ((_b = state.animation) === null || _b === void 0 ? void 0 : _b.duration)) {
            cleanupAnimationIncrement(()=>dispatch({
                    type: "swipe",
                    increment: 0
                }), state.animation.duration);
        }
    }, [
        state.animation,
        dispatch,
        cleanupAnimationIncrement
    ]);
    const swipeParams = [
        subscribeSensors,
        isSwipeValid,
        (containerRect === null || containerRect === void 0 ? void 0 : containerRect.width) || 0,
        animation.swipe,
        ()=>setSwipeState(SwipeState.SWIPE),
        (offset)=>setSwipeOffset(offset),
        (offset, duration)=>swipe({
                offset,
                duration,
                count: 1
            }),
        (offset)=>swipe({
                offset,
                count: 0
            })
    ];
    const pullParams = [
        ()=>{
            if (closeOnPullDown) {
                setSwipeState(SwipeState.PULL);
            }
        },
        (offset)=>setPullOffset(offset),
        (offset)=>pull(offset),
        (offset)=>pull(offset, true)
    ];
    usePointerSwipe(controller, ...swipeParams, closeOnPullUp, closeOnPullDown, ...pullParams, close);
    useWheelSwipe(swipeState, ...swipeParams);
    const focusOnMount = useEventCallback(()=>{
        if (controller.focus && getOwnerDocument().querySelector(`.${cssClass(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODULE_PORTAL"])} .${cssClass(cssContainerPrefix())}`)) {
            focus();
        }
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](focusOnMount, [
        focusOnMount
    ]);
    const onViewCallback = useEventCallback(()=>{
        var _a;
        (_a = on.view) === null || _a === void 0 ? void 0 : _a.call(on, {
            index: state.currentIndex
        });
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](onViewCallback, [
        state.globalIndex,
        onViewCallback
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>cleanup(subscribe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACTION_PREV"], (action)=>swipe({
                direction: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACTION_PREV"],
                ...action
            })), subscribe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACTION_NEXT"], (action)=>swipe({
                direction: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACTION_NEXT"],
                ...action
            })), subscribe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACTION_SWIPE"], (action)=>dispatch(action))), [
        subscribe,
        swipe,
        dispatch
    ]);
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            prev,
            next,
            close,
            focus,
            slideRect: containerRect ? computeSlideRect(containerRect, carousel.padding) : {
                width: 0,
                height: 0
            },
            containerRect: containerRect || {
                width: 0,
                height: 0
            },
            subscribeSensors,
            containerRef,
            setCarouselRef,
            toolbarWidth,
            setToolbarWidth
        }), [
        prev,
        next,
        close,
        focus,
        subscribeSensors,
        containerRect,
        containerRef,
        setCarouselRef,
        toolbarWidth,
        setToolbarWidth,
        carousel.padding
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"](controller.ref, ()=>({
            prev,
            next,
            close,
            focus,
            getLightboxProps,
            getLightboxState
        }), [
        prev,
        next,
        close,
        focus,
        getLightboxProps,
        getLightboxState
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ref: handleContainerRef,
        className: clsx(cssClass(cssContainerPrefix()), cssClass(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CLASS_FLEX_CENTER"])),
        style: {
            ...swipeState === SwipeState.SWIPE ? {
                [cssVar("swipe_offset")]: `${Math.round(swipeOffset.current)}px`
            } : null,
            ...swipeState === SwipeState.PULL ? {
                [cssVar("pull_offset")]: `${Math.round(pullOffset.current)}px`,
                [cssVar("pull_opacity")]: `${pullOpacity.current}`
            } : null,
            ...controller.touchAction !== "none" ? {
                [cssVar("controller_touch_action")]: controller.touchAction
            } : null,
            ...styles.container
        },
        tabIndex: -1,
        ...registerSensors
    }, containerRect && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](ControllerContext.Provider, {
        value: context
    }, children, (_a = render.controls) === null || _a === void 0 ? void 0 : _a.call(render)));
}
const ControllerModule = createModule(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODULE_CONTROLLER"], Controller);
function cssPrefix$2(value) {
    return composePrefix(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODULE_CAROUSEL"], value);
}
function cssSlidePrefix(value) {
    return composePrefix(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CLASS_SLIDE"], value);
}
function CarouselSlide({ slide, offset }) {
    const containerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const { currentIndex, slides } = useLightboxState();
    const { slideRect, focus } = useController();
    const { render, carousel: { imageFit, imageProps }, on: { click: onClick }, styles: { slide: style }, labels } = useLightboxProps();
    const { getOwnerDocument } = useDocumentContext();
    const offscreen = offset !== 0;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        var _a;
        if (offscreen && ((_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.contains(getOwnerDocument().activeElement))) {
            focus();
        }
    }, [
        offscreen,
        focus,
        getOwnerDocument
    ]);
    const renderSlide = ()=>{
        var _a, _b, _c, _d;
        let rendered = (_a = render.slide) === null || _a === void 0 ? void 0 : _a.call(render, {
            slide,
            offset,
            rect: slideRect
        });
        if (!rendered && isImageSlide(slide)) {
            rendered = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](ImageSlide, {
                slide: slide,
                offset: offset,
                render: render,
                rect: slideRect,
                imageFit: imageFit,
                imageProps: imageProps,
                onClick: !offscreen ? ()=>onClick === null || onClick === void 0 ? void 0 : onClick({
                        index: currentIndex
                    }) : undefined
            });
        }
        return rendered ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, (_b = render.slideHeader) === null || _b === void 0 ? void 0 : _b.call(render, {
            slide
        }), ((_c = render.slideContainer) !== null && _c !== void 0 ? _c : ({ children })=>children)({
            slide,
            children: rendered
        }), (_d = render.slideFooter) === null || _d === void 0 ? void 0 : _d.call(render, {
            slide
        })) : null;
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ref: containerRef,
        className: clsx(cssClass(cssSlidePrefix()), !offscreen && cssClass(cssSlidePrefix("current")), cssClass(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CLASS_FLEX_CENTER"])),
        ...makeInertWhen(offscreen),
        style: style,
        role: "group",
        "aria-roledescription": translateLabel(labels, "Slide"),
        "aria-label": translateSlideCounter(labels, slides, currentIndex + offset)
    }, renderSlide());
}
function Placeholder() {
    const style = useLightboxProps().styles.slide;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: cssClass(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CLASS_SLIDE"]),
        style: style
    });
}
function Carousel({ carousel, labels }) {
    const { slides, currentIndex, globalIndex } = useLightboxState();
    const { setCarouselRef } = useController();
    const { autoPlaying, focusWithin } = useA11yContext();
    const spacingValue = parseLengthPercentage(carousel.spacing);
    const paddingValue = parseLengthPercentage(carousel.padding);
    const preload = calculatePreload(carousel, slides, 1);
    const items = [];
    if (hasSlides(slides)) {
        for(let index = currentIndex - preload; index <= currentIndex + preload; index += 1){
            const slide = getSlide(slides, index);
            const key = globalIndex - currentIndex + index;
            const placeholder = carousel.finite && (index < 0 || index > slides.length - 1);
            items.push(!placeholder ? {
                key: [
                    `${key}`,
                    getSlideKey(slide)
                ].filter(Boolean).join("|"),
                offset: index - currentIndex,
                slide
            } : {
                key
            });
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ref: setCarouselRef,
        className: clsx(cssClass(cssPrefix$2()), items.length > 0 && cssClass(cssPrefix$2("with_slides"))),
        style: {
            [`${cssVar(cssPrefix$2("slides_count"))}`]: items.length,
            [`${cssVar(cssPrefix$2("spacing_px"))}`]: spacingValue.pixel || 0,
            [`${cssVar(cssPrefix$2("spacing_percent"))}`]: spacingValue.percent || 0,
            [`${cssVar(cssPrefix$2("padding_px"))}`]: paddingValue.pixel || 0,
            [`${cssVar(cssPrefix$2("padding_percent"))}`]: paddingValue.percent || 0
        },
        role: "region",
        "aria-live": autoPlaying && !focusWithin ? "off" : "polite",
        "aria-roledescription": translateLabel(labels, "Carousel"),
        "aria-label": translateLabel(labels, "Photo gallery")
    }, items.map(({ key, slide, offset })=>slide ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](CarouselSlide, {
            key: key,
            slide: slide,
            offset: offset
        }) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Placeholder, {
            key: key
        })));
}
const CarouselModule = createModule(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODULE_CAROUSEL"], Carousel);
function useNavigationState() {
    const { carousel } = useLightboxProps();
    const { slides, currentIndex } = useLightboxState();
    const prevDisabled = slides.length === 0 || carousel.finite && currentIndex === 0;
    const nextDisabled = slides.length === 0 || carousel.finite && currentIndex === slides.length - 1;
    return {
        prevDisabled,
        nextDisabled
    };
}
function useKeyboardNavigation(subscribeSensors) {
    var _a;
    const isRTL = useRTL();
    const { publish } = useEvents();
    const { animation, controller } = useLightboxProps();
    const { prevDisabled, nextDisabled } = useNavigationState();
    const throttle = ((_a = animation.navigation) !== null && _a !== void 0 ? _a : animation.swipe) / 2;
    const prev = useThrottle(()=>publish(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACTION_PREV"]), throttle);
    const next = useThrottle(()=>publish(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACTION_NEXT"]), throttle);
    const handleKeyDown = useEventCallback((event)=>{
        switch(event.key){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VK_ESCAPE"]:
                if (!controller.closeOnEscape) return;
                publish(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACTION_CLOSE"]);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VK_ARROW_LEFT"]:
                if (!(isRTL ? nextDisabled : prevDisabled)) (isRTL ? next : prev)();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VK_ARROW_RIGHT"]:
                if (!(isRTL ? prevDisabled : nextDisabled)) (isRTL ? prev : next)();
                break;
            default:
                return;
        }
        event.stopPropagation();
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>subscribeSensors(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVENT_ON_KEY_DOWN"], handleKeyDown), [
        subscribeSensors,
        handleKeyDown
    ]);
}
function NavigationButton({ label, icon, renderIcon, action, onClick, disabled, style }) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](IconButton, {
        label: label,
        icon: icon,
        renderIcon: renderIcon,
        className: cssClass(`navigation_${action}`),
        disabled: disabled,
        onClick: onClick,
        style: style,
        ...useLoseFocus(useController().focus, disabled)
    });
}
function Navigation({ render: { buttonPrev, buttonNext, iconPrev, iconNext }, styles }) {
    const { prev, next, subscribeSensors } = useController();
    const { prevDisabled, nextDisabled } = useNavigationState();
    useKeyboardNavigation(subscribeSensors);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, buttonPrev ? buttonPrev() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](NavigationButton, {
        label: "Previous",
        action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACTION_PREV"],
        icon: PreviousIcon,
        renderIcon: iconPrev,
        style: styles.navigationPrev,
        disabled: prevDisabled,
        onClick: prev
    }), buttonNext ? buttonNext() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](NavigationButton, {
        label: "Next",
        action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACTION_NEXT"],
        icon: NextIcon,
        renderIcon: iconNext,
        style: styles.navigationNext,
        disabled: nextDisabled,
        onClick: next
    }));
}
const NavigationModule = createModule(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODULE_NAVIGATION"], Navigation);
const noScroll = cssClass(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CLASS_NO_SCROLL"]);
const noScrollPadding = cssClass(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CLASS_NO_SCROLL_PADDING"]);
function isHTMLElement(element) {
    return "style" in element;
}
function padScrollbar(element, padding, rtl) {
    const styles = window.getComputedStyle(element);
    const property = rtl ? "padding-left" : "padding-right";
    const computedValue = rtl ? styles.paddingLeft : styles.paddingRight;
    const originalValue = element.style.getPropertyValue(property);
    element.style.setProperty(property, `${(parseInt(computedValue) || 0) + padding}px`);
    return ()=>{
        if (originalValue) {
            element.style.setProperty(property, originalValue);
        } else {
            element.style.removeProperty(property);
        }
    };
}
function NoScroll({ noScroll: { disabled }, children }) {
    const rtl = useRTL();
    const { getOwnerDocument, getOwnerWindow } = useDocumentContext();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (disabled) return ()=>{};
        const cleanup = [];
        const ownerWindow = getOwnerWindow();
        const { body, documentElement } = getOwnerDocument();
        const scrollbar = Math.round(ownerWindow.innerWidth - documentElement.clientWidth);
        if (scrollbar > 0) {
            cleanup.push(padScrollbar(body, scrollbar, rtl));
            const elements = body.getElementsByTagName("*");
            for(let i = 0; i < elements.length; i += 1){
                const element = elements[i];
                if (isHTMLElement(element) && ownerWindow.getComputedStyle(element).getPropertyValue("position") === "fixed" && !element.classList.contains(noScrollPadding)) {
                    cleanup.push(padScrollbar(element, scrollbar, rtl));
                }
            }
        }
        body.classList.add(noScroll);
        return ()=>{
            body.classList.remove(noScroll);
            cleanup.forEach((clean)=>clean());
        };
    }, [
        rtl,
        disabled,
        getOwnerDocument,
        getOwnerWindow
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, children);
}
const NoScrollModule = createModule(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODULE_NO_SCROLL"], NoScroll);
function cssPrefix$1(value) {
    return composePrefix(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODULE_PORTAL"], value);
}
function setAttribute(element, attribute, value) {
    const previousValue = element.getAttribute(attribute);
    element.setAttribute(attribute, value);
    return ()=>{
        if (previousValue) {
            element.setAttribute(attribute, previousValue);
        } else {
            element.removeAttribute(attribute);
        }
    };
}
function Portal({ portal: { root, container: { className: containerClassName, style: containerStyle, ...containerRest } = {} }, animation, styles, className, on, close, labels, children }) {
    const [mounted, setMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [visible, setVisible] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const cleanup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]([]);
    const restoreFocus = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const { setTimeout } = useTimeouts();
    const { subscribe } = useEvents();
    const reduceMotion = useMotionPreference();
    const animationDuration = !reduceMotion ? animation.fade : 0;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        setMounted(true);
        return ()=>{
            setMounted(false);
            setVisible(false);
        };
    }, []);
    const handleCleanup = useEventCallback(()=>{
        cleanup.current.forEach((clean)=>clean());
        cleanup.current = [];
    });
    const handleClose = useEventCallback(()=>{
        var _a;
        setVisible(false);
        handleCleanup();
        (_a = on.exiting) === null || _a === void 0 ? void 0 : _a.call(on);
        setTimeout(()=>{
            var _a;
            (_a = on.exited) === null || _a === void 0 ? void 0 : _a.call(on);
            close();
        }, animationDuration);
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>subscribe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACTION_CLOSE"], handleClose), [
        subscribe,
        handleClose
    ]);
    const handleEnter = useEventCallback((node)=>{
        var _a, _b, _c;
        reflow(node);
        setVisible(true);
        (_a = on.entering) === null || _a === void 0 ? void 0 : _a.call(on);
        const elements = (_c = (_b = node.parentNode) === null || _b === void 0 ? void 0 : _b.children) !== null && _c !== void 0 ? _c : [];
        for(let i = 0; i < elements.length; i += 1){
            const element = elements[i];
            if ([
                "TEMPLATE",
                "SCRIPT",
                "STYLE"
            ].indexOf(element.tagName) === -1 && element !== node) {
                cleanup.current.push(setAttribute(element, "inert", ""));
                cleanup.current.push(setAttribute(element, "aria-hidden", "true"));
            }
        }
        cleanup.current.push(()=>{
            var _a, _b;
            (_b = (_a = restoreFocus.current) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.call(_a);
        });
        setTimeout(()=>{
            var _a;
            (_a = on.entered) === null || _a === void 0 ? void 0 : _a.call(on);
        }, animationDuration);
    });
    const handleRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((node)=>{
        if (node) {
            handleEnter(node);
        } else {
            handleCleanup();
        }
    }, [
        handleEnter,
        handleCleanup
    ]);
    return mounted ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](LightboxRoot, {
        ref: handleRef,
        className: clsx(className, containerClassName, cssClass(cssPrefix$1()), cssClass(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CLASS_NO_SCROLL_PADDING"]), visible && cssClass(cssPrefix$1("open"))),
        "aria-modal": true,
        role: "dialog",
        "aria-label": translateLabel(labels, "Lightbox"),
        style: {
            ...animation.fade !== LightboxDefaultProps.animation.fade ? {
                [cssVar("fade_animation_duration")]: `${animationDuration}ms`
            } : null,
            ...animation.easing.fade !== LightboxDefaultProps.animation.easing.fade ? {
                [cssVar("fade_animation_timing_function")]: animation.easing.fade
            } : null,
            ...styles.root,
            ...containerStyle
        },
        onFocus: (event)=>{
            if (!restoreFocus.current) {
                restoreFocus.current = event.relatedTarget;
            }
        },
        ...containerRest
    }, children), (typeof root === "function" ? root() : root) || document.body) : null;
}
const PortalModule = createModule(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODULE_PORTAL"], Portal);
function Root({ children }) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, children);
}
const RootModule = createModule(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODULE_ROOT"], Root);
function cssPrefix(value) {
    return composePrefix(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODULE_TOOLBAR"], value);
}
function Toolbar({ toolbar: { buttons }, render: { buttonClose, iconClose }, styles }) {
    const { close, setToolbarWidth } = useController();
    const { setContainerRef, containerRect } = useContainerRect();
    useLayoutEffect(()=>{
        setToolbarWidth(containerRect === null || containerRect === void 0 ? void 0 : containerRect.width);
    }, [
        setToolbarWidth,
        containerRect === null || containerRect === void 0 ? void 0 : containerRect.width
    ]);
    const renderCloseButton = ()=>{
        if (buttonClose) return buttonClose();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](IconButton, {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACTION_CLOSE"],
            label: "Close",
            icon: CloseIcon,
            renderIcon: iconClose,
            onClick: close
        });
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ref: setContainerRef,
        style: styles.toolbar,
        className: cssClass(cssPrefix())
    }, buttons === null || buttons === void 0 ? void 0 : buttons.map((button)=>button === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACTION_CLOSE"] ? renderCloseButton() : button));
}
const ToolbarModule = createModule(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODULE_TOOLBAR"], Toolbar);
function renderNode(node, props) {
    var _a;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](node.module.component, {
        key: node.module.name,
        ...props
    }, (_a = node.children) === null || _a === void 0 ? void 0 : _a.map((child)=>renderNode(child, props)));
}
function mergeAnimation(defaultAnimation, animation = {}) {
    const { easing: defaultAnimationEasing, ...restDefaultAnimation } = defaultAnimation;
    const { easing, ...restAnimation } = animation;
    return {
        easing: {
            ...defaultAnimationEasing,
            ...easing
        },
        ...restDefaultAnimation,
        ...restAnimation
    };
}
function Lightbox({ carousel, animation, render, toolbar, controller, noScroll, on, plugins, slides, index, ...restProps }) {
    const { animation: defaultAnimation, carousel: defaultCarousel, render: defaultRender, toolbar: defaultToolbar, controller: defaultController, noScroll: defaultNoScroll, on: defaultOn, slides: defaultSlides, index: defaultIndex, plugins: defaultPlugins, ...restDefaultProps } = LightboxDefaultProps;
    const { config, augmentation } = withPlugins([
        createNode(PortalModule, [
            createNode(NoScrollModule, [
                createNode(ControllerModule, [
                    createNode(CarouselModule),
                    createNode(ToolbarModule),
                    createNode(NavigationModule)
                ])
            ])
        ])
    ], plugins || defaultPlugins);
    const props = augmentation({
        animation: mergeAnimation(defaultAnimation, animation),
        carousel: {
            ...defaultCarousel,
            ...carousel
        },
        render: {
            ...defaultRender,
            ...render
        },
        toolbar: {
            ...defaultToolbar,
            ...toolbar
        },
        controller: {
            ...defaultController,
            ...controller
        },
        noScroll: {
            ...defaultNoScroll,
            ...noScroll
        },
        on: {
            ...defaultOn,
            ...on
        },
        ...restDefaultProps,
        ...restProps
    });
    if (!props.open) return null;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](LightboxPropsProvider, {
        ...props
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](LightboxStateProvider, {
        slides: slides || defaultSlides,
        index: parseInt(index || defaultIndex)
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](TimeoutsProvider, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](EventsProvider, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](A11yContextProvider, null, renderNode(createNode(RootModule, config), props))))));
}
;
}),
"[project]/node_modules/.pnpm/yet-another-react-lightbox@3.32.1_@types+react-dom@19.2.3_@types+react@19.2.17__@types+_a639e58e7fc68b442b7e419735bd540e/node_modules/yet-another-react-lightbox/dist/plugins/counter/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Counter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.21_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/yet-another-react-lightbox@3.32.1_@types+react-dom@19.2.3_@types+react@19.2.17__@types+_a639e58e7fc68b442b7e419735bd540e/node_modules/yet-another-react-lightbox/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/yet-another-react-lightbox@3.32.1_@types+react-dom@19.2.3_@types+react@19.2.17__@types+_a639e58e7fc68b442b7e419735bd540e/node_modules/yet-another-react-lightbox/dist/types.js [app-ssr] (ecmascript)");
;
;
;
const defaultCounterProps = {
    separator: "/",
    container: {}
};
const resolveCounterProps = (counter)=>({
        ...defaultCounterProps,
        ...counter
    });
function CounterComponent({ counter }) {
    const { slides, currentIndex } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useLightboxState"])();
    const { separator, container: { className, ...rest }, className: legacyClassName, ...legacyRest } = resolveCounterProps(counter);
    if (slides.length === 0) return null;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["clsx"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cssClass"])("counter"), className || legacyClassName),
        ...legacyRest,
        ...rest,
        "aria-hidden": true
    }, currentIndex + 1, " ", separator, " ", slides.length);
}
function Counter({ augment, addChild }) {
    augment(({ counter, ...restProps })=>({
            counter: resolveCounterProps(counter),
            ...restProps
        }));
    addChild(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODULE_CONTROLLER"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createModule"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLUGIN_COUNTER"], CounterComponent));
}
;
}),
"[project]/node_modules/.pnpm/yet-another-react-lightbox@3.32.1_@types+react-dom@19.2.3_@types+react@19.2.17__@types+_a639e58e7fc68b442b7e419735bd540e/node_modules/yet-another-react-lightbox/dist/plugins/thumbnails/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Thumbnails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.21_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/yet-another-react-lightbox@3.32.1_@types+react-dom@19.2.3_@types+react@19.2.17__@types+_a639e58e7fc68b442b7e419735bd540e/node_modules/yet-another-react-lightbox/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/yet-another-react-lightbox@3.32.1_@types+react-dom@19.2.3_@types+react@19.2.17__@types+_a639e58e7fc68b442b7e419735bd540e/node_modules/yet-another-react-lightbox/dist/types.js [app-ssr] (ecmascript)");
;
;
;
const defaultThumbnailsProps = {
    ref: null,
    position: "bottom",
    width: 120,
    height: 80,
    border: 1,
    borderRadius: 4,
    padding: 4,
    gap: 16,
    imageFit: "contain",
    vignette: true,
    hidden: false,
    showToggle: false
};
const resolveThumbnailsProps = (thumbnails)=>({
        ...defaultThumbnailsProps,
        ...thumbnails
    });
function useThumbnailsProps() {
    const { thumbnails } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useLightboxProps"])();
    return resolveThumbnailsProps(thumbnails);
}
const cssPrefix = (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["composePrefix"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLUGIN_THUMBNAILS"], value);
const cssThumbnailPrefix = (value)=>cssPrefix((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["composePrefix"])("thumbnail", value));
const VideoThumbnailIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createIcon"])("VideoThumbnail", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", {
    d: "M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
}));
const UnknownThumbnailIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createIcon"])("UnknownThumbnail", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", {
    d: "M23 18V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zM8.5 12.5l2.5 3.01L14.5 11l4.5 6H5l3.5-4.5z"
}));
function renderThumbnail({ slide, render, rect, imageFit }) {
    var _a;
    const customThumbnail = (_a = render.thumbnail) === null || _a === void 0 ? void 0 : _a.call(render, {
        slide,
        render,
        rect,
        imageFit
    });
    if (customThumbnail) {
        return customThumbnail;
    }
    const imageSlideProps = {
        render,
        rect,
        imageFit
    };
    if (slide.thumbnail) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ImageSlide"], {
            slide: {
                src: slide.thumbnail
            },
            ...imageSlideProps
        });
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isImageSlide"])(slide)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ImageSlide"], {
            slide: slide,
            ...imageSlideProps
        });
    }
    const thumbnailIconClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cssClass"])(cssThumbnailPrefix(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELEMENT_ICON"]));
    if (slide.type === "video") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, slide.poster && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ImageSlide"], {
            slide: {
                src: slide.poster
            },
            ...imageSlideProps
        }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](VideoThumbnailIcon, {
            className: thumbnailIconClass
        }));
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](UnknownThumbnailIcon, {
        className: thumbnailIconClass
    });
}
const activePrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["makeComposePrefix"])("active");
const fadeInPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["makeComposePrefix"])("fadein");
const fadeOutPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["makeComposePrefix"])("fadeout");
const placeholderPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["makeComposePrefix"])("placeholder");
const DELAY = "delay";
const DURATION = "duration";
function Thumbnail({ slide, index, onClick, fadeIn, fadeOut, placeholder, onLoseFocus }) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const { render, styles, labels } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useLightboxProps"])();
    const { slides, globalIndex } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useLightboxState"])();
    const { getOwnerDocument } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDocumentContext"])();
    const { width, height, imageFit } = useThumbnailsProps();
    const rect = {
        width,
        height
    };
    const active = index === globalIndex;
    const onLoseFocusCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEventCallback"])(onLoseFocus);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (fadeOut && getOwnerDocument().activeElement === ref.current) {
            onLoseFocusCallback();
        }
    }, [
        fadeOut,
        onLoseFocusCallback,
        getOwnerDocument
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("button", {
        ref: ref,
        type: "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["clsx"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cssClass"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CLASS_FLEX_CENTER"]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cssClass"])(cssThumbnailPrefix()), active && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cssClass"])(cssThumbnailPrefix(activePrefix())), fadeIn && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cssClass"])(cssThumbnailPrefix(fadeInPrefix())), fadeOut && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cssClass"])(cssThumbnailPrefix(fadeOutPrefix())), placeholder && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cssClass"])(cssThumbnailPrefix(placeholderPrefix()))),
        style: {
            ...fadeIn ? {
                [(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cssVar"])(cssThumbnailPrefix(fadeInPrefix(DURATION)))]: `${fadeIn.duration}ms`,
                [(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cssVar"])(cssThumbnailPrefix(fadeInPrefix(DELAY)))]: `${fadeIn.delay}ms`
            } : null,
            ...fadeOut ? {
                [(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cssVar"])(cssThumbnailPrefix(fadeOutPrefix(DURATION)))]: `${fadeOut.duration}ms`,
                [(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cssVar"])(cssThumbnailPrefix(fadeOutPrefix(DELAY)))]: `${fadeOut.delay}ms`
            } : null,
            ...styles.thumbnail
        },
        onClick: onClick,
        "aria-current": active ? true : undefined,
        "aria-label": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["translateSlideCounter"])(labels, slides, index)
    }, slide && renderThumbnail({
        slide,
        render,
        rect,
        imageFit
    }));
}
function isHorizontal(position) {
    return [
        "top",
        "bottom"
    ].includes(position);
}
function boxSize(thumbnails, dimension) {
    return dimension + 2 * (thumbnails.border + thumbnails.padding) + thumbnails.gap;
}
function getThumbnailKey(slide) {
    const { thumbnail, poster } = slide || {
        thumbnail: "placeholder"
    };
    return typeof thumbnail === "string" && thumbnail || typeof poster === "string" && poster || slide && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getSlideKey"])(slide) || undefined;
}
function ThumbnailsTrack({ visible, containerRef }) {
    const track = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const isRTL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useRTL"])();
    const { publish, subscribe } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEvents"])();
    const { carousel, styles, labels } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useLightboxProps"])();
    const { slides, globalIndex, animation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useLightboxState"])();
    const { registerSensors, subscribeSensors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useSensors"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useKeyboardNavigation"])(subscribeSensors);
    const thumbnails = useThumbnailsProps();
    const { position, width, height, border, borderStyle, borderColor, borderRadius, padding, gap, vignette } = thumbnails;
    const offset = (animation === null || animation === void 0 ? void 0 : animation.duration) !== undefined && (animation === null || animation === void 0 ? void 0 : animation.increment) || 0;
    const animationDuration = (animation === null || animation === void 0 ? void 0 : animation.duration) || 0;
    const { prepareAnimation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useAnimation"])(track, (snapshot)=>({
            keyframes: isHorizontal(position) ? [
                {
                    transform: `translateX(${(isRTL ? -1 : 1) * boxSize(thumbnails, width) * offset + snapshot}px)`
                },
                {
                    transform: "translateX(0)"
                }
            ] : [
                {
                    transform: `translateY(${boxSize(thumbnails, height) * offset + snapshot}px)`
                },
                {
                    transform: "translateY(0)"
                }
            ],
            duration: animationDuration,
            easing: animation === null || animation === void 0 ? void 0 : animation.easing
        }));
    const handleControllerSwipe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEventCallback"])(()=>{
        let animationOffset = 0;
        if (containerRef.current && track.current) {
            const containerRect = containerRef.current.getBoundingClientRect();
            const trackRect = track.current.getBoundingClientRect();
            animationOffset = isHorizontal(position) ? trackRect.left - containerRect.left - (containerRect.width - trackRect.width) / 2 : trackRect.top - containerRect.top - (containerRect.height - trackRect.height) / 2;
        }
        prepareAnimation(animationOffset);
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cleanup"])(subscribe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACTION_SWIPE"], handleControllerSwipe)), [
        subscribe,
        handleControllerSwipe
    ]);
    const preload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["calculatePreload"])(carousel, slides);
    const items = [];
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasSlides"])(slides)) {
        for(let index = globalIndex - preload - Math.abs(offset); index <= globalIndex + preload + Math.abs(offset); index += 1){
            const placeholder = carousel.finite && (index < 0 || index > slides.length - 1) || offset < 0 && index < globalIndex - preload || offset > 0 && index > globalIndex + preload;
            const slide = !placeholder ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getSlide"])(slides, index) : null;
            const key = [
                `${index}`,
                getThumbnailKey(slide)
            ].filter(Boolean).join("|");
            items.push({
                key,
                index,
                slide
            });
        }
    }
    const handleClick = (slideIndex)=>()=>{
            if (slideIndex > globalIndex) {
                publish(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACTION_NEXT"], {
                    count: slideIndex - globalIndex
                });
            } else if (slideIndex < globalIndex) {
                publish(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACTION_PREV"], {
                    count: globalIndex - slideIndex
                });
            }
        };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["clsx"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cssClass"])(cssPrefix("container")), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cssClass"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CLASS_FLEX_CENTER"])),
        style: {
            ...!visible ? {
                display: "none"
            } : null,
            ...width !== defaultThumbnailsProps.width ? {
                [(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cssVar"])(cssThumbnailPrefix("width"))]: `${width}px`
            } : null,
            ...height !== defaultThumbnailsProps.height ? {
                [(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cssVar"])(cssThumbnailPrefix("height"))]: `${height}px`
            } : null,
            ...border !== defaultThumbnailsProps.border ? {
                [(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cssVar"])(cssThumbnailPrefix("border"))]: `${border}px`
            } : null,
            ...borderStyle ? {
                [(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cssVar"])(cssThumbnailPrefix("border_style"))]: borderStyle
            } : null,
            ...borderColor ? {
                [(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cssVar"])(cssThumbnailPrefix("border_color"))]: borderColor
            } : null,
            ...borderRadius !== defaultThumbnailsProps.borderRadius ? {
                [(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cssVar"])(cssThumbnailPrefix("border_radius"))]: `${borderRadius}px`
            } : null,
            ...padding !== defaultThumbnailsProps.padding ? {
                [(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cssVar"])(cssThumbnailPrefix("padding"))]: `${padding}px`
            } : null,
            ...gap !== defaultThumbnailsProps.gap ? {
                [(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cssVar"])(cssThumbnailPrefix("gap"))]: `${gap}px`
            } : null,
            ...styles.thumbnailsContainer
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("nav", {
        ref: track,
        style: styles.thumbnailsTrack,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["clsx"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cssClass"])(cssPrefix("track")), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cssClass"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CLASS_FLEX_CENTER"])),
        "aria-label": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["translateLabel"])(labels, "Thumbnails"),
        tabIndex: -1,
        ...registerSensors
    }, items.map(({ key, index, slide })=>{
        const fadeAnimationDuration = animationDuration / Math.abs(offset || 1);
        const fadeIn = offset > 0 && index > globalIndex + preload - offset && index <= globalIndex + preload || offset < 0 && index < globalIndex - preload - offset && index >= globalIndex - preload ? {
            duration: fadeAnimationDuration,
            delay: ((offset > 0 ? index - (globalIndex + preload - offset) : globalIndex - preload - offset - index) - 1) * fadeAnimationDuration
        } : undefined;
        const fadeOut = offset > 0 && index < globalIndex - preload || offset < 0 && index > globalIndex + preload ? {
            duration: fadeAnimationDuration,
            delay: (offset > 0 ? offset - (globalIndex - preload - index) : -offset - (index - (globalIndex + preload))) * fadeAnimationDuration
        } : undefined;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Thumbnail, {
            key: key,
            index: index,
            slide: slide,
            fadeIn: fadeIn,
            fadeOut: fadeOut,
            placeholder: !slide,
            onClick: handleClick(index),
            onLoseFocus: ()=>{
                var _a;
                return (_a = track.current) === null || _a === void 0 ? void 0 : _a.focus();
            }
        });
    })), vignette && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cssClass"])(cssPrefix("vignette"))
    }));
}
const ThumbnailsContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](null);
const useThumbnails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["makeUseContext"])("useThumbnails", "ThumbnailsContext", ThumbnailsContext);
function ThumbnailsContextProvider({ children, ...props }) {
    const { ref, position, hidden } = resolveThumbnailsProps(props.thumbnails);
    const [visible, setVisible] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](!hidden);
    const containerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            visible,
            show: ()=>setVisible(true),
            hide: ()=>setVisible(false)
        }), [
        visible
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, ()=>context, [
        context
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LightboxPropsProvider"], {
        ...props
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](ThumbnailsContext.Provider, {
        value: context
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ref: containerRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["clsx"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cssClass"])(cssPrefix()), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cssClass"])(cssPrefix(`${position}`)))
    }, [
        "start",
        "top"
    ].includes(position) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](ThumbnailsTrack, {
        containerRef: containerRef,
        visible: visible
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cssClass"])(cssPrefix("wrapper"))
    }, children), [
        "end",
        "bottom"
    ].includes(position) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](ThumbnailsTrack, {
        containerRef: containerRef,
        visible: visible
    }))));
}
const thumbnailsIcon = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", {
        strokeWidth: 2,
        stroke: "currentColor",
        strokeLinejoin: "round",
        fill: "none",
        d: "M3 5l18 0l0 14l-18 0l0-14z"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", {
        d: "M5 14h4v3h-4zM10 14h4v3h-4zM15 14h4v3h-4z"
    }));
const ThumbnailsVisible = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createIcon"])("ThumbnailsVisible", thumbnailsIcon());
const ThumbnailsHidden = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createIconDisabled"])("ThumbnailsHidden", thumbnailsIcon());
function ThumbnailsButton() {
    const { visible, show, hide } = useThumbnails();
    const { render } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useLightboxProps"])();
    if (render.buttonThumbnails) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, render.buttonThumbnails({
            visible,
            show,
            hide
        }));
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["IconButton"], {
        label: visible ? "Hide thumbnails" : "Show thumbnails",
        icon: visible ? ThumbnailsVisible : ThumbnailsHidden,
        renderIcon: visible ? render.iconThumbnailsVisible : render.iconThumbnailsHidden,
        onClick: visible ? hide : show
    });
}
function Thumbnails({ augment, contains, append, addParent }) {
    augment(({ thumbnails: thumbnailsProps, toolbar, ...restProps })=>{
        const thumbnails = resolveThumbnailsProps(thumbnailsProps);
        return {
            toolbar: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addToolbarButton"])(toolbar, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLUGIN_THUMBNAILS"], thumbnails.showToggle ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](ThumbnailsButton, null) : null),
            thumbnails,
            ...restProps
        };
    });
    const module = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createModule"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLUGIN_THUMBNAILS"], ThumbnailsContextProvider);
    if (contains(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLUGIN_FULLSCREEN"])) {
        append(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLUGIN_FULLSCREEN"], module);
    } else {
        addParent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODULE_CONTROLLER"], module);
    }
}
;
}),
"[project]/node_modules/.pnpm/yet-another-react-lightbox@3.32.1_@types+react-dom@19.2.3_@types+react@19.2.17__@types+_a639e58e7fc68b442b7e419735bd540e/node_modules/yet-another-react-lightbox/dist/plugins/video/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Video
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.21_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/yet-another-react-lightbox@3.32.1_@types+react-dom@19.2.3_@types+react@19.2.17__@types+_a639e58e7fc68b442b7e419735bd540e/node_modules/yet-another-react-lightbox/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/yet-another-react-lightbox@3.32.1_@types+react-dom@19.2.3_@types+react@19.2.17__@types+_a639e58e7fc68b442b7e419735bd540e/node_modules/yet-another-react-lightbox/dist/types.js [app-ssr] (ecmascript)");
;
;
;
const defaultVideoProps = {
    controls: true,
    playsInline: true
};
const resolveVideoProps = (video)=>({
        ...defaultVideoProps,
        ...video
    });
function useVideoProps() {
    const { video } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useLightboxProps"])();
    return resolveVideoProps(video);
}
function isChromium() {
    var _a;
    return ((_a = navigator.userAgentData) === null || _a === void 0 ? void 0 : _a.brands.some(({ brand })=>brand === "Chromium")) || !!window.chrome;
}
function isWebKit() {
    return /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent);
}
function VideoSlide({ slide, offset }) {
    const video = useVideoProps();
    const { publish } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEvents"])();
    const { setContainerRef, containerRect, containerRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useContainerRect"])();
    const { getOwnerDocument } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDocumentContext"])();
    const { animation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useLightboxProps"])();
    const videoRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const freezeNavigation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (offset !== 0 && videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
        }
    }, [
        offset
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (offset === 0 && videoRef.current && (slide.autoPlay || video.autoPlay)) {
            publish(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACTIVE_SLIDE_LOADING"]);
            videoRef.current.play().catch(()=>{});
        }
    }, [
        offset,
        video.autoPlay,
        slide.autoPlay,
        publish
    ]);
    const fixupPlayerControls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEventCallback"])(()=>{
        const timeoutId = setTimeout(()=>{
            if (containerRef.current) {
                const borderStyle = containerRef.current.style.border;
                containerRef.current.style.border = "1px solid transparent";
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["reflow"])(containerRef.current);
                containerRef.current.style.border = borderStyle;
            }
        }, Math.max(animation.swipe, animation.navigation || 0) + 50);
        return ()=>clearTimeout(timeoutId);
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (isChromium() && offset === 0) {
            return fixupPlayerControls();
        }
    }, [
        offset,
        fixupPlayerControls
    ]);
    const handleVideoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEventCallback"])((node)=>{
        if (offset === 0 && (video.autoPlay || slide.autoPlay) && node.paused) {
            node.play().catch(()=>{});
        }
    });
    const setVideoRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((node)=>{
        videoRef.current = node;
        if (node) {
            handleVideoRef(node);
        }
    }, [
        handleVideoRef
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (offset === 0) {
            let fullscreen = false;
            const onFullscreenChange = ()=>{
                fullscreen = getOwnerDocument().fullscreenElement === videoRef.current;
                freezeNavigation.current = fullscreen;
            };
            getOwnerDocument().addEventListener("fullscreenchange", onFullscreenChange);
            return ()=>{
                getOwnerDocument().removeEventListener("fullscreenchange", onFullscreenChange);
                if (fullscreen) {
                    freezeNavigation.current = false;
                    getOwnerDocument().exitFullscreen().catch(()=>{});
                }
            };
        }
    }, [
        offset,
        getOwnerDocument
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (offset === 0) {
            let pip = false;
            const trackPiP = (pipValue)=>(event)=>{
                    if (event.target === videoRef.current) {
                        pip = pipValue;
                        freezeNavigation.current = pip;
                    }
                };
            const onEnterPiP = trackPiP(true);
            const onLeavePiP = trackPiP(false);
            getOwnerDocument().addEventListener("enterpictureinpicture", onEnterPiP);
            getOwnerDocument().addEventListener("leavepictureinpicture", onLeavePiP);
            return ()=>{
                getOwnerDocument().removeEventListener("enterpictureinpicture", onEnterPiP);
                getOwnerDocument().removeEventListener("leavepictureinpicture", onLeavePiP);
                if (pip) {
                    freezeNavigation.current = false;
                    getOwnerDocument().exitPictureInPicture().catch(()=>{});
                }
            };
        }
    }, [
        offset,
        getOwnerDocument
    ]);
    const { width, height, poster, sources } = slide;
    const scaleWidthAndHeight = ()=>{
        const scalingProps = {};
        scalingProps.style = {
            maxWidth: "100%",
            maxHeight: "100%"
        };
        if (width && height && containerRect) {
            const widthBound = width / height > containerRect.width / containerRect.height;
            const elementWidth = widthBound ? containerRect.width : Math.round(containerRect.height / height * width);
            const elementHeight = !widthBound ? containerRect.height : Math.round(containerRect.width / width * height);
            scalingProps.width = elementWidth;
            scalingProps.height = elementHeight;
            scalingProps.style.width = elementWidth;
            scalingProps.style.height = elementHeight;
        }
        return scalingProps;
    };
    const resolveBoolean = (attr)=>{
        if (slide[attr] === false) return null;
        if (slide[attr] === true) return {
            [attr]: true
        };
        if (video[attr] === false) return null;
        if (video[attr] === true) return {
            [attr]: true
        };
        return null;
    };
    const resolveString = (attr)=>{
        if (video[attr] || slide[attr]) {
            return {
                [attr]: slide[attr] || video[attr]
            };
        }
        return null;
    };
    const suppressWhenFrozen = (event)=>{
        if (freezeNavigation.current) {
            event.stopPropagation();
        }
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, sources && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ref: setContainerRef,
        style: {
            width: "100%",
            height: "100%",
            ...width ? {
                maxWidth: `${width}px`
            } : null
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["clsx"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cssClass"])("video_container"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cssClass"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CLASS_FLEX_CENTER"]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cssClass"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CLASS_SLIDE_WRAPPER"]))
    }, containerRect && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("video", {
        ref: setVideoRef,
        poster: poster,
        ...scaleWidthAndHeight(),
        ...resolveBoolean("controls"),
        ...resolveBoolean("playsInline"),
        ...resolveBoolean("loop"),
        ...resolveBoolean("muted"),
        ...resolveBoolean("playsInline"),
        ...resolveBoolean("disablePictureInPicture"),
        ...resolveBoolean("disableRemotePlayback"),
        ...resolveString("controlsList"),
        ...resolveString("crossOrigin"),
        ...resolveString("preload"),
        onPlay: ()=>{
            var _a;
            if (offset !== 0) {
                (_a = videoRef.current) === null || _a === void 0 ? void 0 : _a.pause();
                return;
            }
            publish(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACTIVE_SLIDE_PLAYING"]);
        },
        onEnded: ()=>{
            publish(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$yet$2d$another$2d$react$2d$lightbox$40$3$2e$32$2e$1_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$17_$5f40$types$2b$_a639e58e7fc68b442b7e419735bd540e$2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACTIVE_SLIDE_COMPLETE"]);
        },
        onWheel: suppressWhenFrozen,
        onKeyDown: suppressWhenFrozen,
        onPointerDown: (event)=>{
            suppressWhenFrozen(event);
            if (isWebKit() && videoRef.current && videoRef.current.getBoundingClientRect().bottom - event.clientY < 40) {
                event.stopPropagation();
            }
        }
    }, sources.map(({ src, type, media })=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("source", {
            key: [
                src,
                type,
                media
            ].filter(Boolean).join("|"),
            src: src,
            type: type,
            media: media
        })))));
}
function isVideoSlide(slide) {
    return slide.type === "video";
}
function Video({ augment }) {
    augment(({ render: { slide: renderSlide, ...restRender }, video, ...restProps })=>({
            render: {
                slide: ({ slide, offset, rect })=>{
                    var _a;
                    return isVideoSlide(slide) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$21_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](VideoSlide, {
                        key: (_a = slide.sources) === null || _a === void 0 ? void 0 : _a.map((source)=>source.src).join("|"),
                        slide: slide,
                        offset: offset
                    }) : renderSlide === null || renderSlide === void 0 ? void 0 : renderSlide({
                        slide,
                        offset,
                        rect
                    });
                },
                ...restRender
            },
            video: resolveVideoProps(video),
            ...restProps
        }));
}
;
}),
];

//# sourceMappingURL=e0d5f_yet-another-react-lightbox_dist_9f2718ea._.js.map