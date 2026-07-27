module.exports = [
"[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/cache.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CacheItem",
    ()=>CacheItem,
    "NullObject",
    ()=>NullObject,
    "createCacheKey",
    ()=>createCacheKey,
    "getCache",
    ()=>getCache,
    "setCache",
    ()=>setCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$generational$2d$cache$40$1$2e$0$2e$1$2f$node_modules$2f40$asamuzakjp$2f$generational$2d$cache$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+generational-cache@1.0.1/node_modules/@asamuzakjp/generational-cache/src/index.js [app-ssr] (ecmascript)");
;
//#region src/js/cache.ts
/**
* cache
*/ var CACHE_SIZE = 2048;
/**
* CacheItem
*/ var CacheItem = class {
    #isNull;
    #item;
    constructor(item, isNull = false){
        this.#item = item;
        this.#isNull = !!isNull;
    }
    get item() {
        return this.#item;
    }
    get isNull() {
        return this.#isNull;
    }
};
/**
* NullObject
*/ var NullObject = class extends CacheItem {
    constructor(){
        super(Symbol("null"), true);
    }
};
var genCache = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$generational$2d$cache$40$1$2e$0$2e$1$2f$node_modules$2f40$asamuzakjp$2f$generational$2d$cache$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenerationalCache"](CACHE_SIZE);
/**
* shared null object
*/ var sharedNullObject = new NullObject();
/**
* set cache
* @param key - cache key
* @param value - value to cache
* @returns void
*/ var setCache = (key, value)=>{
    if (!key) return;
    if (value === null) genCache.set(key, sharedNullObject);
    else if (value instanceof CacheItem) genCache.set(key, value);
    else genCache.set(key, new CacheItem(value));
};
/**
* get cache
* @param key - cache key
* @returns cached item or false otherwise
*/ var getCache = (key)=>{
    if (!key) return false;
    const item = genCache.get(key);
    if (item !== void 0) return item;
    return false;
};
/**
* helper function to sort object keys alphabetically
* @param obj - Object
* @returns stringified JSON
*/ var stringifySorted = (obj)=>{
    const keys = Object.keys(obj);
    if (keys.length === 0) return "";
    keys.sort();
    let result = "";
    for (const key of keys)result += `${key}:${JSON.stringify(obj[key])};`;
    return result;
};
/**
* create cache key
* @param keyData - key data
* @param [opt] - options
* @returns cache key
*/ var createCacheKey = (keyData, opt = {})=>{
    if (!keyData || opt.customProperty && typeof opt.customProperty.callback === "function" || opt.dimension && typeof opt.dimension.callback === "function") return "";
    const namespace = keyData.namespace || "";
    const name = keyData.name || "";
    const value = keyData.value || "";
    if (!namespace && !name && !value) return "";
    return `${`${namespace}:${name}:${value}`}::${`${opt.format || ""}|${opt.colorSpace || ""}|${opt.colorScheme || ""}|${opt.currentColor || ""}|${opt.d50 ? "1" : "0"}|${opt.nullable ? "1" : "0"}|${opt.preserveComment ? "1" : "0"}|${opt.delimiter || ""}`}::${opt.customProperty ? stringifySorted(opt.customProperty) : ""}::${opt.dimension ? stringifySorted(opt.dimension) : ""}`;
};
;
 //# sourceMappingURL=cache.js.map
}),
"[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/common.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/js/common.ts
/**
* is string
* @param o - object to check
* @returns result
*/ __turbopack_context__.s([
    "isString",
    ()=>isString,
    "isStringOrNumber",
    ()=>isStringOrNumber
]);
var isString = (o)=>typeof o === "string" || o instanceof String;
/**
* is string or number
* @param o - object to check
* @returns result
*/ var isStringOrNumber = (o)=>isString(o) || typeof o === "number";
;
 //# sourceMappingURL=common.js.map
}),
"[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/constant.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/js/constant.ts
/**
* constant
*/ __turbopack_context__.s([
    "ANGLE",
    ()=>ANGLE,
    "CS_HUE",
    ()=>CS_HUE,
    "CS_HUE_CAPT",
    ()=>CS_HUE_CAPT,
    "CS_LAB",
    ()=>CS_LAB,
    "CS_LCH",
    ()=>CS_LCH,
    "CS_MIX",
    ()=>CS_MIX,
    "CS_RECT",
    ()=>CS_RECT,
    "CS_RGB",
    ()=>CS_RGB,
    "CS_XYZ",
    ()=>CS_XYZ,
    "FN_COLOR",
    ()=>FN_COLOR,
    "FN_LIGHT_DARK",
    ()=>FN_LIGHT_DARK,
    "FN_MIX",
    ()=>FN_MIX,
    "FN_REL",
    ()=>FN_REL,
    "FN_REL_CAPT",
    ()=>FN_REL_CAPT,
    "FN_VAR",
    ()=>FN_VAR,
    "LENGTH",
    ()=>LENGTH,
    "NONE",
    ()=>NONE,
    "NUM",
    ()=>NUM,
    "NUM_POSITIVE",
    ()=>NUM_POSITIVE,
    "PCT",
    ()=>PCT,
    "SYN_COLOR_TYPE",
    ()=>SYN_COLOR_TYPE,
    "SYN_FN_CALC",
    ()=>SYN_FN_CALC,
    "SYN_FN_COLOR",
    ()=>SYN_FN_COLOR,
    "SYN_FN_LIGHT_DARK",
    ()=>SYN_FN_LIGHT_DARK,
    "SYN_FN_MATH_START",
    ()=>SYN_FN_MATH_START,
    "SYN_FN_REL",
    ()=>SYN_FN_REL,
    "SYN_FN_VAR",
    ()=>SYN_FN_VAR,
    "SYN_FN_VAR_START",
    ()=>SYN_FN_VAR_START,
    "SYN_HSL",
    ()=>SYN_HSL,
    "SYN_HSL_LV3",
    ()=>SYN_HSL_LV3,
    "SYN_LCH",
    ()=>SYN_LCH,
    "SYN_MIX",
    ()=>SYN_MIX,
    "SYN_MIX_CAPT",
    ()=>SYN_MIX_CAPT,
    "SYN_MIX_PART",
    ()=>SYN_MIX_PART,
    "SYN_MOD",
    ()=>SYN_MOD,
    "SYN_RGB_LV3",
    ()=>SYN_RGB_LV3,
    "VAL_COMP",
    ()=>VAL_COMP,
    "VAL_MIX",
    ()=>VAL_MIX,
    "VAL_SPEC",
    ()=>VAL_SPEC
]);
var _DIGIT = "(?:0|[1-9]\\d*)";
var _MATH = `clamp|max|min|exp|hypot|log|pow|sqrt|abs|sign|mod|rem|round|a?(?:cos|sin|tan)|atan2`;
var _CALC = `calc|${_MATH}`;
var _VAR = `var|${_CALC}`;
var ANGLE = "deg|g?rad|turn";
var LENGTH = "[cm]m|[dls]?v(?:[bhiw]|max|min)|in|p[ctx]|q|r?(?:[cl]h|cap|e[mx]|ic)";
var NUM = `[+-]?(?:${_DIGIT}(?:\\.\\d*)?|\\.\\d+)(?:e-?${_DIGIT})?`;
var NUM_POSITIVE = `\\+?(?:${_DIGIT}(?:\\.\\d*)?|\\.\\d+)(?:e-?${_DIGIT})?`;
var NONE = "none";
var PCT = `${NUM}%`;
var SYN_FN_CALC = `^(?:${_CALC})\\(|(?<=[*\\/\\s\\(])(?:${_CALC})\\(`;
var SYN_FN_MATH_START = `^(?:${_MATH})\\($`;
var SYN_FN_VAR = "^var\\(|(?<=[*\\/\\s\\(])var\\(";
var SYN_FN_VAR_START = `^(?:${_VAR})\\(`;
var _ALPHA = `(?:\\s*\\/\\s*(?:${NUM}|${PCT}|${NONE}))?`;
var _ALPHA_LV3 = `(?:\\s*,\\s*(?:${NUM}|${PCT}))?`;
var _COLOR_FUNC = "(?:ok)?l(?:ab|ch)|color|hsla?|hwb|rgba?";
var _COLOR_KEY = "[a-z]+|#[\\da-f]{3}|#[\\da-f]{4}|#[\\da-f]{6}|#[\\da-f]{8}";
var _CS_HUE = "(?:ok)?lch|hsl|hwb";
var _CS_HUE_ARC = "(?:de|in)creasing|longer|shorter";
var _NUM_ANGLE = `${NUM}(?:${ANGLE})?`;
var _NUM_ANGLE_NONE = `(?:${NUM}(?:${ANGLE})?|${NONE})`;
var _NUM_PCT_NONE = `(?:${NUM}|${PCT}|${NONE})`;
var CS_HUE = `(?:${_CS_HUE})(?:\\s(?:${_CS_HUE_ARC})\\shue)?`;
var CS_HUE_CAPT = `(${_CS_HUE})(?:\\s(${_CS_HUE_ARC})\\shue)?`;
var CS_LAB = "(?:ok)?lab";
var CS_LCH = "(?:ok)?lch";
var CS_RGB = `(?:a98|prophoto)-rgb|display-p3|rec2020|srgb(?:-linear)?`;
var CS_XYZ = "xyz(?:-d(?:50|65))?";
var CS_RECT = `${CS_LAB}|${CS_RGB}|${CS_XYZ}`;
var CS_MIX = `${CS_HUE}|${CS_RECT}`;
var FN_COLOR = "color(";
var FN_LIGHT_DARK = "light-dark(";
var FN_MIX = "color-mix(";
var FN_REL = `(?:${_COLOR_FUNC})\\(\\s*from\\s+`;
var FN_REL_CAPT = `(${_COLOR_FUNC})\\(\\s*from\\s+`;
var FN_VAR = "var(";
var SYN_FN_COLOR = `(?:${CS_RGB}|${CS_XYZ})(?:\\s+${_NUM_PCT_NONE}){3}${_ALPHA}`;
var SYN_FN_LIGHT_DARK = "^light-dark\\(";
var SYN_FN_REL = `^${FN_REL}|(?<=[\\s])${FN_REL}`;
var SYN_HSL = `${_NUM_ANGLE_NONE}(?:\\s+${_NUM_PCT_NONE}){2}${_ALPHA}`;
var SYN_HSL_LV3 = `${_NUM_ANGLE}(?:\\s*,\\s*${PCT}){2}${_ALPHA_LV3}`;
var SYN_LCH = `(?:${_NUM_PCT_NONE}\\s+){2}${_NUM_ANGLE_NONE}${_ALPHA}`;
var SYN_MOD = `${_NUM_PCT_NONE}(?:\\s+${_NUM_PCT_NONE}){2}${_ALPHA}`;
var SYN_RGB_LV3 = `(?:${NUM}(?:\\s*,\\s*${NUM}){2}|${PCT}(?:\\s*,\\s*${PCT}){2})${_ALPHA_LV3}`;
var SYN_COLOR_TYPE = `${_COLOR_KEY}|hsla?\\(\\s*${SYN_HSL_LV3}\\s*\\)|rgba?\\(\\s*${SYN_RGB_LV3}\\s*\\)|(?:hsla?|hwb)\\(\\s*${SYN_HSL}\\s*\\)|(?:(?:ok)?lab|rgba?)\\(\\s*${SYN_MOD}\\s*\\)|(?:ok)?lch\\(\\s*${SYN_LCH}\\s*\\)|color\\(\\s*${SYN_FN_COLOR}\\s*\\)`;
var SYN_MIX_PART = `(?:${SYN_COLOR_TYPE})(?:\\s+${PCT})?`;
var SYN_MIX = `color-mix\\(\\s*in\\s+(?:${CS_MIX})\\s*,\\s*${SYN_MIX_PART}\\s*,\\s*${SYN_MIX_PART}\\s*\\)`;
var SYN_MIX_CAPT = `color-mix\\(\\s*in\\s+(${CS_MIX})\\s*,\\s*(${SYN_MIX_PART})\\s*,\\s*(${SYN_MIX_PART})\\s*\\)`;
var VAL_COMP = "computedValue";
var VAL_MIX = "mixValue";
var VAL_SPEC = "specifiedValue";
;
 //# sourceMappingURL=constant.js.map
}),
"[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/util.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractDashedIdent",
    ()=>extractDashedIdent,
    "interpolateHue",
    ()=>interpolateHue,
    "isAbsoluteFontSize",
    ()=>isAbsoluteFontSize,
    "isAbsoluteSizeOrLength",
    ()=>isAbsoluteSizeOrLength,
    "isColor",
    ()=>isColor,
    "resolveLengthInPixels",
    ()=>resolveLengthInPixels,
    "roundToPrecision",
    ()=>roundToPrecision,
    "splitValue",
    ()=>splitValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/cache.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/common.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/constant.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$resolve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/resolve.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@csstools+css-tokenizer@4.0.0/node_modules/@csstools/css-tokenizer/dist/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
//#region src/js/util.ts
/**
* util
*/ var { CloseParen: PAREN_CLOSE, Comma: COMMA, Comment: COMMENT, Delim: DELIM, EOF, Function: FUNC, OpenParen: PAREN_OPEN, Whitespace: W_SPACE } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"];
var NAMESPACE = "util";
var DEC = 10;
var HEX = 16;
var DEG = 360;
var DEG_HALF = 180;
var REG_COLOR = new RegExp(`^(?:${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYN_COLOR_TYPE"]})$`);
var REG_DIMENSION = /^([+-]?(?:\d+(?:\.\d+)?|\.\d+)(?:e[+-]?\d+)?)([a-z]*)$/i;
var REG_FN_COLOR = /^(?:(?:ok)?l(?:ab|ch)|color(?:-mix)?|hsla?|hwb|rgba?|var)\(/;
var REG_MIX = new RegExp(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYN_MIX"]);
var REG_DASHED_IDENT = /--[\w-]+/g;
var REG_COMMA = /^,$/;
var REG_SLASH = /^\/$/;
var REG_WHITESPACE = /^\s+$/;
/**
* split value
* NOTE: comments are stripped, it can be preserved if, in the options param,
* `delimiter` is either ',' or '/' and with `preserveComment` set to `true`
* @param value - CSS value
* @param [opt] - options
* @returns array of values
*/ var splitValue = (value, opt = {})=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) throw new TypeError(`${value} is not a string.`);
    const strValue = value.trim();
    const { delimiter = " ", preserveComment = false } = opt;
    const cacheKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCacheKey"])({
        namespace: NAMESPACE,
        name: "splitValue",
        value: strValue
    }, {
        delimiter,
        preserveComment
    });
    const cachedResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCache"])(cacheKey);
    if (cachedResult instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CacheItem"]) return cachedResult.item;
    let regDelimiter;
    switch(delimiter){
        case ",":
            regDelimiter = REG_COMMA;
            break;
        case "/":
            regDelimiter = REG_SLASH;
            break;
        default:
            regDelimiter = REG_WHITESPACE;
    }
    const tokens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokenize"])({
        css: strValue
    });
    let nest = 0;
    let currentStr = "";
    const res = [];
    for (const [type, val] of tokens)switch(type){
        case COMMA:
        case DELIM:
            if (nest === 0 && regDelimiter.test(val)) {
                res.push(currentStr.trim());
                currentStr = "";
            } else currentStr += val;
            break;
        case COMMENT:
            if (preserveComment && (delimiter === "," || delimiter === "/")) currentStr += val;
            break;
        case FUNC:
        case PAREN_OPEN:
            currentStr += val;
            nest++;
            break;
        case PAREN_CLOSE:
            currentStr += val;
            nest--;
            break;
        case W_SPACE:
            if (regDelimiter.test(val)) if (nest === 0) {
                if (currentStr) {
                    res.push(currentStr.trim());
                    currentStr = "";
                }
            } else currentStr += " ";
            else if (!currentStr.endsWith(" ")) currentStr += " ";
            break;
        default:
            if (type === EOF) {
                res.push(currentStr.trim());
                currentStr = "";
            } else currentStr += val;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, res);
    return res;
};
/**
* extract dashed-ident tokens
* @param value - CSS value
* @returns array of dashed-ident tokens
*/ var extractDashedIdent = (value)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) throw new TypeError(`${value} is not a string.`);
    const strValue = value.trim();
    const cacheKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCacheKey"])({
        namespace: NAMESPACE,
        name: "extractDashedIdent",
        value: strValue
    });
    const cachedResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCache"])(cacheKey);
    if (cachedResult instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CacheItem"]) return cachedResult.item;
    const matches = strValue.match(REG_DASHED_IDENT);
    const res = matches ? [
        ...new Set(matches)
    ] : [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, res);
    return res;
};
/**
* is color
* @param value - CSS value
* @param [opt] - options
* @returns result
*/ var isColor = (value, opt = {})=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) return false;
    const str = value.toLowerCase().trim();
    if (!str) return false;
    if (/^[a-z]+$/.test(str)) return str === "currentcolor" || str === "transparent" || Object.hasOwn(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAMED_COLORS"], str);
    if (REG_COLOR.test(str) || REG_MIX.test(str)) return true;
    if (REG_FN_COLOR.test(str)) {
        const colorOpt = {
            ...opt,
            nullable: true
        };
        if (!colorOpt.format) colorOpt.format = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_SPEC"];
        return !!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$resolve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveColor"])(str, colorOpt);
    }
    return false;
};
/**
* round to specified precision
* @param value - numeric value
* @param bit - minimum bits
* @returns rounded value
*/ var roundToPrecision = (value, bit = 0)=>{
    if (!Number.isFinite(value)) throw new TypeError(`${value} is not a finite number.`);
    if (!Number.isFinite(bit)) throw new TypeError(`${bit} is not a finite number.`);
    if (bit < 0 || bit > HEX) throw new RangeError(`${bit} is not between 0 and ${HEX}.`);
    if (bit === 0) return Math.round(value);
    const precision = bit === HEX ? 6 : bit < DEC ? 4 : 5;
    return parseFloat(value.toPrecision(precision));
};
/**
* interpolate hue
* @param hueA - hue value
* @param hueB - hue value
* @param arc - shorter | longer | increasing | decreasing
* @returns result - [hueA, hueB]
*/ var interpolateHue = (hueA, hueB, arc = "shorter")=>{
    if (!Number.isFinite(hueA)) throw new TypeError(`${hueA} is not a finite number.`);
    if (!Number.isFinite(hueB)) throw new TypeError(`${hueB} is not a finite number.`);
    let a = hueA;
    let b = hueB;
    switch(arc){
        case "decreasing":
            if (b > a) a += DEG;
            break;
        case "increasing":
            if (b < a) b += DEG;
            break;
        case "longer":
            if (b > a && b < a + DEG_HALF) a += DEG;
            else if (b > a - DEG_HALF && b <= a) b += DEG;
            break;
        default:
            if (b > a + DEG_HALF) a += DEG;
            else if (b < a - DEG_HALF) b += DEG;
    }
    return [
        a,
        b
    ];
};
var absoluteFontSize = new Map([
    [
        "xx-small",
        9 / 16
    ],
    [
        "x-small",
        5 / 8
    ],
    [
        "small",
        13 / 16
    ],
    [
        "medium",
        1
    ],
    [
        "large",
        9 / 8
    ],
    [
        "x-large",
        3 / 2
    ],
    [
        "xx-large",
        2
    ],
    [
        "xxx-large",
        3
    ]
]);
var relativeFontSize = new Map([
    [
        "smaller",
        1 / 1.2
    ],
    [
        "larger",
        1.2
    ]
]);
var absoluteLength = new Map([
    [
        "cm",
        96 / 2.54
    ],
    [
        "mm",
        96 / 25.4
    ],
    [
        "q",
        96 / 101.6
    ],
    [
        "in",
        96
    ],
    [
        "pc",
        16
    ],
    [
        "pt",
        96 / 72
    ],
    [
        "px",
        1
    ]
]);
var relativeLength = new Map([
    [
        "rcap",
        1
    ],
    [
        "rch",
        .5
    ],
    [
        "rem",
        1
    ],
    [
        "rex",
        .5
    ],
    [
        "ric",
        1
    ],
    [
        "rlh",
        1.2
    ]
]);
/**
* resolve length in pixels
* @param value - value
* @param unit - unit
* @param [opt] - options
* @returns pixelated value
*/ var resolveLengthInPixels = (value, unit, opt = {})=>{
    const { dimension = {} } = opt;
    const { callback, em, rem, vh, vw } = dimension;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) {
        const str = value.toLowerCase().trim();
        const ratio = absoluteFontSize.get(str);
        if (ratio !== void 0) return ratio * rem;
        const relRatio = relativeFontSize.get(str);
        if (relRatio !== void 0) return relRatio * em;
        return NaN;
    }
    if (Number.isFinite(value) && unit) {
        const u = unit.toLowerCase();
        if (Object.hasOwn(dimension, u)) return value * Number(dimension[u]);
        if (typeof callback === "function") return value * (callback(u) ?? NaN);
        const absRatio = absoluteLength.get(u);
        if (absRatio !== void 0) return value * absRatio;
        const relRatio = relativeLength.get(u);
        if (relRatio !== void 0) return value * relRatio * rem;
        const rUnitRatio = relativeLength.get(`r${u}`);
        if (rUnitRatio !== void 0) return value * rUnitRatio * em;
        switch(u){
            case "vb":
            case "vi":
                return value * vw;
            case "vmax":
                return value * Math.max(vh, vw);
            case "vmin":
                return value * Math.min(vh, vw);
            default:
        }
    }
    return NaN;
};
/**
* is absolute size or length
* @param value - value
* @param unit - unit
* @returns result
*/ var isAbsoluteSizeOrLength = (value, unit)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) return absoluteFontSize.has(value.toLowerCase().trim());
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(unit)) return absoluteLength.has(unit.toLowerCase().trim());
    return value === 0;
};
/**
* is absolute font size
* @param css - css
* @returns result
*/ var isAbsoluteFontSize = (css)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(css)) return false;
    const str = css.trim();
    if (isAbsoluteSizeOrLength(str, void 0)) return true;
    const match = str.match(REG_DIMENSION);
    return match ? isAbsoluteSizeOrLength(Number(match[1]), match[2] || void 0) : false;
};
;
 //# sourceMappingURL=util.js.map
}),
"[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/color.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NAMED_COLORS",
    ()=>NAMED_COLORS,
    "convertColorToHsl",
    ()=>convertColorToHsl,
    "convertColorToHwb",
    ()=>convertColorToHwb,
    "convertColorToLab",
    ()=>convertColorToLab,
    "convertColorToLch",
    ()=>convertColorToLch,
    "convertColorToOklab",
    ()=>convertColorToOklab,
    "convertColorToOklch",
    ()=>convertColorToOklch,
    "convertColorToRgb",
    ()=>convertColorToRgb,
    "convertRgbToHex",
    ()=>convertRgbToHex,
    "numberToHexString",
    ()=>numberToHexString,
    "parseColorFunc",
    ()=>parseColorFunc,
    "parseColorValue",
    ()=>parseColorValue,
    "resolveColorFunc",
    ()=>resolveColorFunc,
    "resolveColorMix",
    ()=>resolveColorMix,
    "resolveColorValue",
    ()=>resolveColorValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/cache.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/common.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/constant.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$resolve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/resolve.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/util.js [app-ssr] (ecmascript)");
;
;
;
;
;
//#region src/js/color.ts
/**
* color
*
* Ref: CSS Color Module Level 4
*      Sample code for Color Conversions
*      https://w3c.github.io/csswg-drafts/css-color-4/#color-conversion-code
*/ var NAMESPACE = "color";
var PPTH = .001;
var HALF = .5;
var DUO = 2;
var TRIA = 3;
var QUAD = 4;
var OCT = 8;
var DEC = 10;
var DOZ = 12;
var HEX = 16;
var SEXA = 60;
var DEG_HALF = 180;
var DEG = 360;
var MAX_PCT = 100;
var MAX_RGB = 255;
var POW_SQR = 2;
var POW_CUBE = 3;
var POW_LINEAR = 2.4;
var LINEAR_COEF = 12.92;
var LINEAR_OFFSET = .055;
var LAB_L = 116;
var LAB_A = 500;
var LAB_B = 200;
var LAB_EPSILON = 216 / 24389;
var LAB_KAPPA = 24389 / 27;
var D50 = [
    .3457 / .3585,
    1,
    .2958 / .3585
];
var MATRIX_D50_TO_D65 = [
    [
        .955473421488075,
        -.02309845494876471,
        .06325924320057072
    ],
    [
        -.0283697093338637,
        1.0099953980813041,
        .021041441191917323
    ],
    [
        .012314014864481998,
        -.020507649298898964,
        1.330365926242124
    ]
];
var MATRIX_D65_TO_D50 = [
    [
        1.0479297925449969,
        .022946870601609652,
        -.05019226628920524
    ],
    [
        .02962780877005599,
        .9904344267538799,
        -.017073799063418826
    ],
    [
        -.009243040646204504,
        .015055191490298152,
        .7518742814281371
    ]
];
var MATRIX_L_RGB_TO_XYZ = [
    [
        506752 / 1228815,
        87881 / 245763,
        12673 / 70218
    ],
    [
        87098 / 409605,
        175762 / 245763,
        12673 / 175545
    ],
    [
        7918 / 409605,
        87881 / 737289,
        1001167 / 1053270
    ]
];
var MATRIX_XYZ_TO_L_RGB = [
    [
        12831 / 3959,
        -329 / 214,
        -1974 / 3959
    ],
    [
        -851781 / 878810,
        1648619 / 878810,
        36519 / 878810
    ],
    [
        705 / 12673,
        -2585 / 12673,
        705 / 667
    ]
];
var MATRIX_XYZ_TO_LMS = [
    [
        .819022437996703,
        .3619062600528904,
        -.1288737815209879
    ],
    [
        .0329836539323885,
        .9292868615863434,
        .0361446663506424
    ],
    [
        .0481771893596242,
        .2642395317527308,
        .6335478284694309
    ]
];
var MATRIX_LMS_TO_XYZ = [
    [
        1.2268798758459243,
        -.5578149944602171,
        .2813910456659647
    ],
    [
        -.0405757452148008,
        1.112286803280317,
        -.0717110580655164
    ],
    [
        -.0763729366746601,
        -.4214933324022432,
        1.5869240198367816
    ]
];
var MATRIX_OKLAB_TO_LMS = [
    [
        1,
        .3963377773761749,
        .2158037573099136
    ],
    [
        1,
        -.1055613458156586,
        -.0638541728258133
    ],
    [
        1,
        -.0894841775298119,
        -1.2914855480194092
    ]
];
var MATRIX_LMS_TO_OKLAB = [
    [
        .210454268309314,
        .7936177747023054,
        -.0040720430116193
    ],
    [
        1.9779985324311684,
        -2.42859224204858,
        .450593709617411
    ],
    [
        .0259040424655478,
        .7827717124575296,
        -.8086757549230774
    ]
];
var MATRIX_P3_TO_XYZ = [
    [
        608311 / 1250200,
        189793 / 714400,
        198249 / 1000160
    ],
    [
        35783 / 156275,
        247089 / 357200,
        198249 / 2500400
    ],
    [
        0 / 1,
        32229 / 714400,
        5220557 / 5000800
    ]
];
var MATRIX_REC2020_TO_XYZ = [
    [
        63426534 / 99577255,
        20160776 / 139408157,
        47086771 / 278816314
    ],
    [
        26158966 / 99577255,
        472592308 / 697040785,
        8267143 / 139408157
    ],
    [
        0 / 1,
        19567812 / 697040785,
        295819943 / 278816314
    ]
];
var MATRIX_A98_TO_XYZ = [
    [
        573536 / 994567,
        263643 / 1420810,
        187206 / 994567
    ],
    [
        591459 / 1989134,
        6239551 / 9945670,
        374412 / 4972835
    ],
    [
        53769 / 1989134,
        351524 / 4972835,
        4929758 / 4972835
    ]
];
var MATRIX_PROPHOTO_TO_XYZ_D50 = [
    [
        .7977666449006423,
        .13518129740053308,
        .0313477341283922
    ],
    [
        .2880748288194013,
        .711835234241873,
        8993693872564e-17
    ],
    [
        0,
        0,
        .8251046025104602
    ]
];
var REG_COLOR = new RegExp(`^(?:${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYN_COLOR_TYPE"]})$`);
var REG_CS_HUE = new RegExp(`^${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CS_HUE_CAPT"]}$`);
var REG_CS_XYZ = /^xyz(?:-d(?:50|65))?$/;
var REG_CURRENT = /^currentColor$/i;
var REG_FN_COLOR = new RegExp(`^color\\(\\s*(${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYN_FN_COLOR"]})\\s*\\)$`);
var REG_HSL = new RegExp(`^hsla?\\(\\s*(${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYN_HSL"]}|${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYN_HSL_LV3"]})\\s*\\)$`);
var REG_HWB = new RegExp(`^hwb\\(\\s*(${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYN_HSL"]})\\s*\\)$`);
var REG_LAB = new RegExp(`^lab\\(\\s*(${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYN_MOD"]})\\s*\\)$`);
var REG_LCH = new RegExp(`^lch\\(\\s*(${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYN_LCH"]})\\s*\\)$`);
var REG_MIX = new RegExp(`^${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYN_MIX"]}$`);
var REG_MIX_CAPT = new RegExp(`^${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYN_MIX_CAPT"]}$`);
var REG_MIX_NEST = new RegExp(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYN_MIX"]}`, "g");
var REG_OKLAB = new RegExp(`^oklab\\(\\s*(${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYN_MOD"]})\\s*\\)$`);
var REG_OKLCH = new RegExp(`^oklch\\(\\s*(${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYN_LCH"]})\\s*\\)$`);
var REG_SPEC = /^(?:specifi|comput)edValue$/;
var REG_ANGLE_TO_DEG = new RegExp(`^(${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NUM"]})(${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ANGLE"]})?$`);
var REG_PARSE_RGB = new RegExp(`^rgba?\\(\\s*(${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYN_MOD"]}|${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYN_RGB_LV3"]})\\s*\\)$`);
var REG_MIX_CS_RGB_XYZ = new RegExp(`^(?:${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CS_RGB"]}|${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CS_XYZ"]})$`);
var REG_MIX_IN_CS = new RegExp(`in\\s+(${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CS_MIX"]})`);
var REG_MIX_START = new RegExp(`^color-mix\\(\\s*in\\s+(${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CS_MIX"]})\\s*,`);
var REG_MIX_COLOR_PART = new RegExp(`^(${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYN_COLOR_TYPE"]})(?:\\s+(${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PCT"]}))?$`);
/**
* named colors
*/ var NAMED_COLORS = {
    aliceblue: [
        240,
        248,
        255
    ],
    antiquewhite: [
        250,
        235,
        215
    ],
    aqua: [
        0,
        255,
        255
    ],
    aquamarine: [
        127,
        255,
        212
    ],
    azure: [
        240,
        255,
        255
    ],
    beige: [
        245,
        245,
        220
    ],
    bisque: [
        255,
        228,
        196
    ],
    black: [
        0,
        0,
        0
    ],
    blanchedalmond: [
        255,
        235,
        205
    ],
    blue: [
        0,
        0,
        255
    ],
    blueviolet: [
        138,
        43,
        226
    ],
    brown: [
        165,
        42,
        42
    ],
    burlywood: [
        222,
        184,
        135
    ],
    cadetblue: [
        95,
        158,
        160
    ],
    chartreuse: [
        127,
        255,
        0
    ],
    chocolate: [
        210,
        105,
        30
    ],
    coral: [
        255,
        127,
        80
    ],
    cornflowerblue: [
        100,
        149,
        237
    ],
    cornsilk: [
        255,
        248,
        220
    ],
    crimson: [
        220,
        20,
        60
    ],
    cyan: [
        0,
        255,
        255
    ],
    darkblue: [
        0,
        0,
        139
    ],
    darkcyan: [
        0,
        139,
        139
    ],
    darkgoldenrod: [
        184,
        134,
        11
    ],
    darkgray: [
        169,
        169,
        169
    ],
    darkgreen: [
        0,
        100,
        0
    ],
    darkgrey: [
        169,
        169,
        169
    ],
    darkkhaki: [
        189,
        183,
        107
    ],
    darkmagenta: [
        139,
        0,
        139
    ],
    darkolivegreen: [
        85,
        107,
        47
    ],
    darkorange: [
        255,
        140,
        0
    ],
    darkorchid: [
        153,
        50,
        204
    ],
    darkred: [
        139,
        0,
        0
    ],
    darksalmon: [
        233,
        150,
        122
    ],
    darkseagreen: [
        143,
        188,
        143
    ],
    darkslateblue: [
        72,
        61,
        139
    ],
    darkslategray: [
        47,
        79,
        79
    ],
    darkslategrey: [
        47,
        79,
        79
    ],
    darkturquoise: [
        0,
        206,
        209
    ],
    darkviolet: [
        148,
        0,
        211
    ],
    deeppink: [
        255,
        20,
        147
    ],
    deepskyblue: [
        0,
        191,
        255
    ],
    dimgray: [
        105,
        105,
        105
    ],
    dimgrey: [
        105,
        105,
        105
    ],
    dodgerblue: [
        30,
        144,
        255
    ],
    firebrick: [
        178,
        34,
        34
    ],
    floralwhite: [
        255,
        250,
        240
    ],
    forestgreen: [
        34,
        139,
        34
    ],
    fuchsia: [
        255,
        0,
        255
    ],
    gainsboro: [
        220,
        220,
        220
    ],
    ghostwhite: [
        248,
        248,
        255
    ],
    gold: [
        255,
        215,
        0
    ],
    goldenrod: [
        218,
        165,
        32
    ],
    gray: [
        128,
        128,
        128
    ],
    green: [
        0,
        128,
        0
    ],
    greenyellow: [
        173,
        255,
        47
    ],
    grey: [
        128,
        128,
        128
    ],
    honeydew: [
        240,
        255,
        240
    ],
    hotpink: [
        255,
        105,
        180
    ],
    indianred: [
        205,
        92,
        92
    ],
    indigo: [
        75,
        0,
        130
    ],
    ivory: [
        255,
        255,
        240
    ],
    khaki: [
        240,
        230,
        140
    ],
    lavender: [
        230,
        230,
        250
    ],
    lavenderblush: [
        255,
        240,
        245
    ],
    lawngreen: [
        124,
        252,
        0
    ],
    lemonchiffon: [
        255,
        250,
        205
    ],
    lightblue: [
        173,
        216,
        230
    ],
    lightcoral: [
        240,
        128,
        128
    ],
    lightcyan: [
        224,
        255,
        255
    ],
    lightgoldenrodyellow: [
        250,
        250,
        210
    ],
    lightgray: [
        211,
        211,
        211
    ],
    lightgreen: [
        144,
        238,
        144
    ],
    lightgrey: [
        211,
        211,
        211
    ],
    lightpink: [
        255,
        182,
        193
    ],
    lightsalmon: [
        255,
        160,
        122
    ],
    lightseagreen: [
        32,
        178,
        170
    ],
    lightskyblue: [
        135,
        206,
        250
    ],
    lightslategray: [
        119,
        136,
        153
    ],
    lightslategrey: [
        119,
        136,
        153
    ],
    lightsteelblue: [
        176,
        196,
        222
    ],
    lightyellow: [
        255,
        255,
        224
    ],
    lime: [
        0,
        255,
        0
    ],
    limegreen: [
        50,
        205,
        50
    ],
    linen: [
        250,
        240,
        230
    ],
    magenta: [
        255,
        0,
        255
    ],
    maroon: [
        128,
        0,
        0
    ],
    mediumaquamarine: [
        102,
        205,
        170
    ],
    mediumblue: [
        0,
        0,
        205
    ],
    mediumorchid: [
        186,
        85,
        211
    ],
    mediumpurple: [
        147,
        112,
        219
    ],
    mediumseagreen: [
        60,
        179,
        113
    ],
    mediumslateblue: [
        123,
        104,
        238
    ],
    mediumspringgreen: [
        0,
        250,
        154
    ],
    mediumturquoise: [
        72,
        209,
        204
    ],
    mediumvioletred: [
        199,
        21,
        133
    ],
    midnightblue: [
        25,
        25,
        112
    ],
    mintcream: [
        245,
        255,
        250
    ],
    mistyrose: [
        255,
        228,
        225
    ],
    moccasin: [
        255,
        228,
        181
    ],
    navajowhite: [
        255,
        222,
        173
    ],
    navy: [
        0,
        0,
        128
    ],
    oldlace: [
        253,
        245,
        230
    ],
    olive: [
        128,
        128,
        0
    ],
    olivedrab: [
        107,
        142,
        35
    ],
    orange: [
        255,
        165,
        0
    ],
    orangered: [
        255,
        69,
        0
    ],
    orchid: [
        218,
        112,
        214
    ],
    palegoldenrod: [
        238,
        232,
        170
    ],
    palegreen: [
        152,
        251,
        152
    ],
    paleturquoise: [
        175,
        238,
        238
    ],
    palevioletred: [
        219,
        112,
        147
    ],
    papayawhip: [
        255,
        239,
        213
    ],
    peachpuff: [
        255,
        218,
        185
    ],
    peru: [
        205,
        133,
        63
    ],
    pink: [
        255,
        192,
        203
    ],
    plum: [
        221,
        160,
        221
    ],
    powderblue: [
        176,
        224,
        230
    ],
    purple: [
        128,
        0,
        128
    ],
    rebeccapurple: [
        102,
        51,
        153
    ],
    red: [
        255,
        0,
        0
    ],
    rosybrown: [
        188,
        143,
        143
    ],
    royalblue: [
        65,
        105,
        225
    ],
    saddlebrown: [
        139,
        69,
        19
    ],
    salmon: [
        250,
        128,
        114
    ],
    sandybrown: [
        244,
        164,
        96
    ],
    seagreen: [
        46,
        139,
        87
    ],
    seashell: [
        255,
        245,
        238
    ],
    sienna: [
        160,
        82,
        45
    ],
    silver: [
        192,
        192,
        192
    ],
    skyblue: [
        135,
        206,
        235
    ],
    slateblue: [
        106,
        90,
        205
    ],
    slategray: [
        112,
        128,
        144
    ],
    slategrey: [
        112,
        128,
        144
    ],
    snow: [
        255,
        250,
        250
    ],
    springgreen: [
        0,
        255,
        127
    ],
    steelblue: [
        70,
        130,
        180
    ],
    tan: [
        210,
        180,
        140
    ],
    teal: [
        0,
        128,
        128
    ],
    thistle: [
        216,
        191,
        216
    ],
    tomato: [
        255,
        99,
        71
    ],
    turquoise: [
        64,
        224,
        208
    ],
    violet: [
        238,
        130,
        238
    ],
    wheat: [
        245,
        222,
        179
    ],
    white: [
        255,
        255,
        255
    ],
    whitesmoke: [
        245,
        245,
        245
    ],
    yellow: [
        255,
        255,
        0
    ],
    yellowgreen: [
        154,
        205,
        50
    ]
};
/**
* cache invalid color value
* @param key - cache key
* @param nullable - is nullable
* @returns cached value
*/ var cacheInvalidColorValue = (cacheKey, format, nullable = false)=>{
    if (format === "specifiedValue") {
        const res = "";
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, res);
        return res;
    }
    if (nullable) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, null);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]();
    }
    const res = [
        "rgb",
        0,
        0,
        0,
        0
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, res);
    return res;
};
/**
* resolve invalid color value
* @param format - output format
* @param nullable - is nullable
* @returns resolved value
*/ var resolveInvalidColorValue = (format, nullable = false)=>{
    switch(format){
        case "hsl":
        case "hwb":
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_MIX"]:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]();
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_SPEC"]:
            return "";
        default:
            if (nullable) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]();
            return [
                "rgb",
                0,
                0,
                0,
                0
            ];
    }
};
/**
* validate color components
* @param arr - color components
* @param [opt] - options
* @param [opt.alpha] - alpha channel
* @param [opt.minLength] - min length
* @param [opt.maxLength] - max length
* @param [opt.minRange] - min range
* @param [opt.maxRange] - max range
* @param [opt.validateRange] - validate range
* @returns result - validated color components
*/ var validateColorComponents = (arr, opt = {})=>{
    if (!Array.isArray(arr)) throw new TypeError(`${arr} is not an array.`);
    const { alpha = false, minLength = TRIA, maxLength = QUAD, minRange = 0, maxRange = 1, validateRange = true } = opt;
    if (!Number.isFinite(minLength)) throw new TypeError(`${minLength} is not a number.`);
    if (!Number.isFinite(maxLength)) throw new TypeError(`${maxLength} is not a number.`);
    if (!Number.isFinite(minRange)) throw new TypeError(`${minRange} is not a number.`);
    if (!Number.isFinite(maxRange)) throw new TypeError(`${maxRange} is not a number.`);
    const l = arr.length;
    if (l < minLength || l > maxLength) throw new Error(`Unexpected array length ${l}.`);
    let i = 0;
    while(i < l){
        const v = arr[i];
        if (!Number.isFinite(v)) throw new TypeError(`${v} is not a number.`);
        else if (i < TRIA && validateRange && (v < minRange || v > maxRange)) throw new RangeError(`${v} is not between ${minRange} and ${maxRange}.`);
        else if (i === TRIA && (v < 0 || v > 1)) throw new RangeError(`${v} is not between 0 and 1.`);
        i++;
    }
    if (alpha && l === TRIA) arr.push(1);
    return arr;
};
/**
* transform matrix
* @param mtx - 3 * 3 matrix
* @param vct - vector
* @param [skip] - skip validate
* @returns TriColorChannels - [p1, p2, p3]
*/ var transformMatrix = (mtx, vct, skip = false)=>{
    if (!Array.isArray(mtx)) throw new TypeError(`${mtx} is not an array.`);
    else if (mtx.length !== TRIA) throw new Error(`Unexpected array length ${mtx.length}.`);
    else if (!skip) for (let i of mtx)i = validateColorComponents(i, {
        maxLength: TRIA,
        validateRange: false
    });
    const [[r1c1, r1c2, r1c3], [r2c1, r2c2, r2c3], [r3c1, r3c2, r3c3]] = mtx;
    let v1, v2, v3;
    if (skip) [v1, v2, v3] = vct;
    else [v1, v2, v3] = validateColorComponents(vct, {
        maxLength: TRIA,
        validateRange: false
    });
    return [
        r1c1 * v1 + r1c2 * v2 + r1c3 * v3,
        r2c1 * v1 + r2c2 * v2 + r2c3 * v3,
        r3c1 * v1 + r3c2 * v2 + r3c3 * v3
    ];
};
/**
* normalize color components
* @param colorA - color components [v1, v2, v3, v4]
* @param colorB - color components [v1, v2, v3, v4]
* @param [skip] - skip validate
* @returns result - [colorA, colorB]
*/ var normalizeColorComponents = (colorA, colorB, skip = false)=>{
    if (!Array.isArray(colorA)) throw new TypeError(`${colorA} is not an array.`);
    else if (colorA.length !== QUAD) throw new Error(`Unexpected array length ${colorA.length}.`);
    if (!Array.isArray(colorB)) throw new TypeError(`${colorB} is not an array.`);
    else if (colorB.length !== QUAD) throw new Error(`Unexpected array length ${colorB.length}.`);
    let i = 0;
    while(i < QUAD){
        if (colorA[i] === "none" && colorB[i] === "none") {
            colorA[i] = 0;
            colorB[i] = 0;
        } else if (colorA[i] === "none") colorA[i] = colorB[i];
        else if (colorB[i] === "none") colorB[i] = colorA[i];
        i++;
    }
    if (skip) return [
        colorA,
        colorB
    ];
    return [
        validateColorComponents(colorA, {
            minLength: QUAD,
            validateRange: false
        }),
        validateColorComponents(colorB, {
            minLength: QUAD,
            validateRange: false
        })
    ];
};
/**
* number to hex string
* @param value - numeric value
* @returns hex string
*/ var numberToHexString = (value)=>{
    if (!Number.isFinite(value)) throw new TypeError(`${value} is not a number.`);
    else {
        value = Math.round(value);
        if (value < 0 || value > MAX_RGB) throw new RangeError(`${value} is not between 0 and ${MAX_RGB}.`);
    }
    let hex = value.toString(HEX);
    if (hex.length === 1) hex = `0${hex}`;
    return hex;
};
/**
* angle to deg
* @param angle
* @returns deg: 0..360
*/ var angleToDeg = (angle)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(angle)) angle = angle.trim();
    else throw new TypeError(`${angle} is not a string.`);
    const GRAD = DEG / 400;
    const RAD = DEG / (Math.PI * DUO);
    if (!REG_ANGLE_TO_DEG.test(angle)) throw new SyntaxError(`Invalid property value: ${angle}`);
    const [, value, unit] = angle.match(REG_ANGLE_TO_DEG);
    let deg;
    switch(unit){
        case "grad":
            deg = parseFloat(value) * GRAD;
            break;
        case "rad":
            deg = parseFloat(value) * RAD;
            break;
        case "turn":
            deg = parseFloat(value) * DEG;
            break;
        default:
            deg = parseFloat(value);
    }
    deg %= DEG;
    if (deg < 0) deg += DEG;
    else if (Object.is(deg, -0)) deg = 0;
    return deg;
};
/**
* parse alpha
* @param [alpha] - alpha value
* @returns alpha: 0..1
*/ var parseAlpha = (alpha = "")=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(alpha)) {
        alpha = alpha.trim();
        if (!alpha) alpha = "1";
        else if (alpha === "none") alpha = "0";
        else {
            let a;
            if (alpha.endsWith("%")) a = parseFloat(alpha) / MAX_PCT;
            else a = parseFloat(alpha);
            if (!Number.isFinite(a)) throw new TypeError(`${a} is not a finite number.`);
            if (a < PPTH) alpha = "0";
            else if (a > 1) alpha = "1";
            else alpha = a.toFixed(TRIA);
        }
    } else alpha = "1";
    return parseFloat(alpha);
};
/**
* parse hex alpha
* @param value - alpha value in hex string
* @returns alpha: 0..1
*/ var parseHexAlpha = (value)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) {
        if (value === "") throw new SyntaxError("Invalid property value: (empty string)");
        value = value.trim();
    } else throw new TypeError(`${value} is not a string.`);
    let alpha = parseInt(value, HEX);
    if (alpha <= 0) return 0;
    if (alpha >= MAX_RGB) return 1;
    const alphaMap = /* @__PURE__ */ new Map();
    for(let i = 1; i < MAX_PCT; i++)alphaMap.set(Math.round(i * MAX_RGB / MAX_PCT), i);
    if (alphaMap.has(alpha)) alpha = alphaMap.get(alpha) / MAX_PCT;
    else alpha = Math.round(alpha / MAX_RGB / PPTH) * PPTH;
    return parseFloat(alpha.toFixed(TRIA));
};
/**
* transform rgb to linear rgb
* @param rgb - [r, g, b] r|g|b: 0..255
* @param [skip] - skip validate
* @returns TriColorChannels - [r, g, b] r|g|b: 0..1
*/ var transformRgbToLinearRgb = (rgb, skip = false)=>{
    let rr, gg, bb;
    if (skip) [rr, gg, bb] = rgb;
    else [rr, gg, bb] = validateColorComponents(rgb, {
        maxLength: TRIA,
        maxRange: MAX_RGB
    });
    let r = rr / MAX_RGB;
    let g = gg / MAX_RGB;
    let b = bb / MAX_RGB;
    const COND_POW = .04045;
    if (r > COND_POW) r = Math.pow((r + LINEAR_OFFSET) / (1 + LINEAR_OFFSET), POW_LINEAR);
    else r /= LINEAR_COEF;
    if (g > COND_POW) g = Math.pow((g + LINEAR_OFFSET) / (1 + LINEAR_OFFSET), POW_LINEAR);
    else g /= LINEAR_COEF;
    if (b > COND_POW) b = Math.pow((b + LINEAR_OFFSET) / (1 + LINEAR_OFFSET), POW_LINEAR);
    else b /= LINEAR_COEF;
    return [
        r,
        g,
        b
    ];
};
/**
* transform rgb to xyz
* @param rgb - [r, g, b] r|g|b: 0..255
* @param [skip] - skip validate
* @returns TriColorChannels - [x, y, z]
*/ var transformRgbToXyz = (rgb, skip = false)=>{
    if (!skip) rgb = validateColorComponents(rgb, {
        maxLength: TRIA,
        maxRange: MAX_RGB
    });
    rgb = transformRgbToLinearRgb(rgb, true);
    return transformMatrix(MATRIX_L_RGB_TO_XYZ, rgb, true);
};
/**
* transform linear rgb to rgb
* @param rgb - [r, g, b] r|g|b: 0..1
* @param [round] - round result
* @returns TriColorChannels - [r, g, b] r|g|b: 0..255
*/ var transformLinearRgbToRgb = (rgb, round = false)=>{
    let [r, g, b] = validateColorComponents(rgb, {
        maxLength: TRIA
    });
    const COND_POW = 809 / 258400;
    if (r > COND_POW) r = Math.pow(r, 1 / POW_LINEAR) * (1 + LINEAR_OFFSET) - LINEAR_OFFSET;
    else r *= LINEAR_COEF;
    r *= MAX_RGB;
    if (g > COND_POW) g = Math.pow(g, 1 / POW_LINEAR) * (1 + LINEAR_OFFSET) - LINEAR_OFFSET;
    else g *= LINEAR_COEF;
    g *= MAX_RGB;
    if (b > COND_POW) b = Math.pow(b, 1 / POW_LINEAR) * (1 + LINEAR_OFFSET) - LINEAR_OFFSET;
    else b *= LINEAR_COEF;
    b *= MAX_RGB;
    return [
        round ? Math.round(r) : r,
        round ? Math.round(g) : g,
        round ? Math.round(b) : b
    ];
};
/**
* transform xyz to rgb
* @param xyz - [x, y, z]
* @param [skip] - skip validate
* @returns TriColorChannels - [r, g, b] r|g|b: 0..255
*/ var transformXyzToRgb = (xyz, skip = false)=>{
    if (!skip) xyz = validateColorComponents(xyz, {
        maxLength: TRIA,
        validateRange: false
    });
    let [r, g, b] = transformMatrix(MATRIX_XYZ_TO_L_RGB, xyz, true);
    [r, g, b] = transformLinearRgbToRgb([
        Math.min(Math.max(r, 0), 1),
        Math.min(Math.max(g, 0), 1),
        Math.min(Math.max(b, 0), 1)
    ], true);
    return [
        r,
        g,
        b
    ];
};
/**
* transform xyz to hsl
* @param xyz - [x, y, z]
* @param [skip] - skip validate
* @returns TriColorChannels - [h, s, l]
*/ var transformXyzToHsl = (xyz, skip = false)=>{
    const [rr, gg, bb] = transformXyzToRgb(xyz, skip);
    const r = rr / MAX_RGB;
    const g = gg / MAX_RGB;
    const b = bb / MAX_RGB;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const d = max - min;
    const l = (max + min) * HALF * MAX_PCT;
    let h, s;
    if (Math.round(l) === 0 || Math.round(l) === MAX_PCT) {
        h = 0;
        s = 0;
    } else {
        s = d / (1 - Math.abs(max + min - 1)) * MAX_PCT;
        if (s === 0) h = 0;
        else {
            switch(max){
                case r:
                    h = (g - b) / d;
                    break;
                case g:
                    h = (b - r) / d + DUO;
                    break;
                case b:
                default:
                    h = (r - g) / d + QUAD;
                    break;
            }
            h = h * SEXA % DEG;
            if (h < 0) h += DEG;
        }
    }
    return [
        h,
        s,
        l
    ];
};
/**
* transform xyz to hwb
* @param xyz - [x, y, z]
* @param [skip] - skip validate
* @returns TriColorChannels - [h, w, b]
*/ var transformXyzToHwb = (xyz, skip = false)=>{
    const [r, g, b] = transformXyzToRgb(xyz, skip);
    const wh = Math.min(r, g, b) / MAX_RGB;
    const bk = 1 - Math.max(r, g, b) / MAX_RGB;
    let h;
    if (wh + bk === 1) h = 0;
    else [h] = transformXyzToHsl(xyz);
    return [
        h,
        wh * MAX_PCT,
        bk * MAX_PCT
    ];
};
/**
* transform xyz to oklab
* @param xyz - [x, y, z]
* @param [skip] - skip validate
* @returns TriColorChannels - [l, a, b]
*/ var transformXyzToOklab = (xyz, skip = false)=>{
    if (!skip) xyz = validateColorComponents(xyz, {
        maxLength: TRIA,
        validateRange: false
    });
    let [l, a, b] = transformMatrix(MATRIX_LMS_TO_OKLAB, transformMatrix(MATRIX_XYZ_TO_LMS, xyz, true).map((c)=>Math.cbrt(c)), true);
    l = Math.min(Math.max(l, 0), 1);
    const lPct = Math.round(parseFloat(l.toFixed(QUAD)) * MAX_PCT);
    if (lPct === 0 || lPct === MAX_PCT) {
        a = 0;
        b = 0;
    }
    return [
        l,
        a,
        b
    ];
};
/**
* transform xyz to oklch
* @param xyz - [x, y, z]
* @param [skip] - skip validate
* @returns TriColorChannels - [l, c, h]
*/ var transformXyzToOklch = (xyz, skip = false)=>{
    const [l, a, b] = transformXyzToOklab(xyz, skip);
    let c, h;
    const lPct = Math.round(parseFloat(l.toFixed(QUAD)) * MAX_PCT);
    if (lPct === 0 || lPct === MAX_PCT) {
        c = 0;
        h = 0;
    } else {
        c = Math.max(Math.sqrt(Math.pow(a, POW_SQR) + Math.pow(b, POW_SQR)), 0);
        if (parseFloat(c.toFixed(QUAD)) === 0) h = 0;
        else {
            h = Math.atan2(b, a) * DEG_HALF / Math.PI;
            if (h < 0) h += DEG;
        }
    }
    return [
        l,
        c,
        h
    ];
};
/**
* transform xyz D50 to rgb
* @param xyz - [x, y, z]
* @param [skip] - skip validate
* @returns TriColorChannels - [r, g, b] r|g|b: 0..255
*/ var transformXyzD50ToRgb = (xyz, skip = false)=>{
    if (!skip) xyz = validateColorComponents(xyz, {
        maxLength: TRIA,
        validateRange: false
    });
    return transformXyzToRgb(transformMatrix(MATRIX_D50_TO_D65, xyz, true), true);
};
/**
* transform xyz-d50 to lab
* @param xyz - [x, y, z]
* @param [skip] - skip validate
* @returns TriColorChannels - [l, a, b]
*/ var transformXyzD50ToLab = (xyz, skip = false)=>{
    if (!skip) xyz = validateColorComponents(xyz, {
        maxLength: TRIA,
        validateRange: false
    });
    const [f0, f1, f2] = xyz.map((val, i)=>val / D50[i]).map((val)=>val > LAB_EPSILON ? Math.cbrt(val) : (val * LAB_KAPPA + HEX) / LAB_L);
    const l = Math.min(Math.max(LAB_L * f1 - HEX, 0), MAX_PCT);
    let a, b;
    if (l === 0 || l === MAX_PCT) {
        a = 0;
        b = 0;
    } else {
        a = (f0 - f1) * LAB_A;
        b = (f1 - f2) * LAB_B;
    }
    return [
        l,
        a,
        b
    ];
};
/**
* transform xyz-d50 to lch
* @param xyz - [x, y, z]
* @param [skip] - skip validate
* @returns TriColorChannels - [l, c, h]
*/ var transformXyzD50ToLch = (xyz, skip = false)=>{
    const [l, a, b] = transformXyzD50ToLab(xyz, skip);
    let c, h;
    if (l === 0 || l === MAX_PCT) {
        c = 0;
        h = 0;
    } else {
        c = Math.max(Math.sqrt(Math.pow(a, POW_SQR) + Math.pow(b, POW_SQR)), 0);
        h = Math.atan2(b, a) * DEG_HALF / Math.PI;
        if (h < 0) h += DEG;
    }
    return [
        l,
        c,
        h
    ];
};
/**
* convert rgb to hex color
* @param rgb - [r, g, b, alpha] r|g|b: 0..255 alpha: 0..1
* @returns hex color
*/ var convertRgbToHex = (rgb)=>{
    const [r, g, b, alpha] = validateColorComponents(rgb, {
        alpha: true,
        maxRange: MAX_RGB
    });
    const rr = numberToHexString(r);
    const gg = numberToHexString(g);
    const bb = numberToHexString(b);
    const aa = numberToHexString(alpha * MAX_RGB);
    let hex;
    if (aa === "ff") hex = `#${rr}${gg}${bb}`;
    else hex = `#${rr}${gg}${bb}${aa}`;
    return hex;
};
/**
* convert hex color to rgb
* @param value - hex color value
* @returns ColorChannels - [r, g, b, alpha] r|g|b: 0..255 alpha: 0..1
*/ var convertHexToRgb = (value)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) value = value.toLowerCase().trim();
    else throw new TypeError(`${value} is not a string.`);
    if (!(/^#[\da-f]{6}$/.test(value) || /^#[\da-f]{3}$/.test(value) || /^#[\da-f]{8}$/.test(value) || /^#[\da-f]{4}$/.test(value))) throw new SyntaxError(`Invalid property value: ${value}`);
    const arr = [];
    if (/^#[\da-f]{3}$/.test(value)) {
        const [, r, g, b] = value.match(/^#([\da-f])([\da-f])([\da-f])$/);
        arr.push(parseInt(`${r}${r}`, HEX), parseInt(`${g}${g}`, HEX), parseInt(`${b}${b}`, HEX), 1);
    } else if (/^#[\da-f]{4}$/.test(value)) {
        const [, r, g, b, alpha] = value.match(/^#([\da-f])([\da-f])([\da-f])([\da-f])$/);
        arr.push(parseInt(`${r}${r}`, HEX), parseInt(`${g}${g}`, HEX), parseInt(`${b}${b}`, HEX), parseHexAlpha(`${alpha}${alpha}`));
    } else if (/^#[\da-f]{8}$/.test(value)) {
        const [, r, g, b, alpha] = value.match(/^#([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/);
        arr.push(parseInt(r, HEX), parseInt(g, HEX), parseInt(b, HEX), parseHexAlpha(alpha));
    } else {
        const [, r, g, b] = value.match(/^#([\da-f]{2})([\da-f]{2})([\da-f]{2})$/);
        arr.push(parseInt(r, HEX), parseInt(g, HEX), parseInt(b, HEX), 1);
    }
    return arr;
};
/**
* convert hex color to linear rgb
* @param value - hex color value
* @returns ColorChannels - [r, g, b, alpha] r|g|b|alpha: 0..1
*/ var convertHexToLinearRgb = (value)=>{
    const [rr, gg, bb, alpha] = convertHexToRgb(value);
    const [r, g, b] = transformRgbToLinearRgb([
        rr,
        gg,
        bb
    ], true);
    return [
        r,
        g,
        b,
        alpha
    ];
};
/**
* convert hex color to xyz
* @param value - hex color value
* @returns ColorChannels - [x, y, z, alpha]
*/ var convertHexToXyz = (value)=>{
    const [r, g, b, alpha] = convertHexToLinearRgb(value);
    const [x, y, z] = transformMatrix(MATRIX_L_RGB_TO_XYZ, [
        r,
        g,
        b
    ], true);
    return [
        x,
        y,
        z,
        alpha
    ];
};
/**
* parse rgb()
* @param value - rgb color value
* @param [opt] - options
* @returns parsed color - ['rgb', r, g, b, alpha], '(empty)', NullObject
*/ var parseRgb = (value, opt = {})=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) value = value.toLowerCase().trim();
    else throw new TypeError(`${value} is not a string.`);
    const { format = "", nullable = false } = opt;
    if (!REG_PARSE_RGB.test(value)) {
        const res = resolveInvalidColorValue(format, nullable);
        if (res instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) return res;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(res)) return res;
        return res;
    }
    const [, val] = value.match(REG_PARSE_RGB);
    const [v1, v2, v3, v4 = ""] = val.match(/[^\s,/]+/g);
    let r, g, b;
    if (v1 === "none") r = 0;
    else {
        if (v1.endsWith("%")) r = parseFloat(v1) * MAX_RGB / MAX_PCT;
        else r = parseFloat(v1);
        r = Math.min(Math.max((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(r, OCT), 0), MAX_RGB);
    }
    if (v2 === "none") g = 0;
    else {
        if (v2.endsWith("%")) g = parseFloat(v2) * MAX_RGB / MAX_PCT;
        else g = parseFloat(v2);
        g = Math.min(Math.max((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(g, OCT), 0), MAX_RGB);
    }
    if (v3 === "none") b = 0;
    else {
        if (v3.endsWith("%")) b = parseFloat(v3) * MAX_RGB / MAX_PCT;
        else b = parseFloat(v3);
        b = Math.min(Math.max((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(b, OCT), 0), MAX_RGB);
    }
    const alpha = parseAlpha(v4);
    return [
        "rgb",
        r,
        g,
        b,
        format === "mixValue" && v4 === "none" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"] : alpha
    ];
};
/**
* parse hsl()
* @param value - hsl color value
* @param [opt] - options
* @returns parsed color - ['rgb', r, g, b, alpha], '(empty)', NullObject
*/ var parseHsl = (value, opt = {})=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) value = value.trim();
    else throw new TypeError(`${value} is not a string.`);
    const { format = "", nullable = false } = opt;
    if (!REG_HSL.test(value)) {
        const res = resolveInvalidColorValue(format, nullable);
        if (res instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) return res;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(res)) return res;
        return res;
    }
    const [, val] = value.match(REG_HSL);
    const [v1, v2, v3, v4 = ""] = val.match(/[^\s,/]+/g);
    let h, s, l;
    if (v1 === "none") h = 0;
    else h = angleToDeg(v1);
    if (v2 === "none") s = 0;
    else s = Math.min(Math.max(parseFloat(v2), 0), MAX_PCT);
    if (v3 === "none") l = 0;
    else l = Math.min(Math.max(parseFloat(v3), 0), MAX_PCT);
    const alpha = parseAlpha(v4);
    if (format === "hsl") return [
        format,
        v1 === "none" ? v1 : h,
        v2 === "none" ? v2 : s,
        v3 === "none" ? v3 : l,
        v4 === "none" ? v4 : alpha
    ];
    h = h / DEG * DOZ;
    l /= MAX_PCT;
    const sa = s / MAX_PCT * Math.min(l, 1 - l);
    const rk = h % DOZ;
    const gk = (8 + h) % DOZ;
    const bk = (4 + h) % DOZ;
    const r = l - sa * Math.max(-1, Math.min(rk - TRIA, TRIA ** POW_SQR - rk, 1));
    const g = l - sa * Math.max(-1, Math.min(gk - TRIA, TRIA ** POW_SQR - gk, 1));
    const b = l - sa * Math.max(-1, Math.min(bk - TRIA, TRIA ** POW_SQR - bk, 1));
    return [
        "rgb",
        Math.min(Math.max((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(r * MAX_RGB, OCT), 0), MAX_RGB),
        Math.min(Math.max((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(g * MAX_RGB, OCT), 0), MAX_RGB),
        Math.min(Math.max((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(b * MAX_RGB, OCT), 0), MAX_RGB),
        alpha
    ];
};
/**
* parse hwb()
* @param value - hwb color value
* @param [opt] - options
* @returns parsed color - ['rgb', r, g, b, alpha], '(empty)', NullObject
*/ var parseHwb = (value, opt = {})=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) value = value.trim();
    else throw new TypeError(`${value} is not a string.`);
    const { format = "", nullable = false } = opt;
    if (!REG_HWB.test(value)) {
        const res = resolveInvalidColorValue(format, nullable);
        if (res instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) return res;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(res)) return res;
        return res;
    }
    const [, val] = value.match(REG_HWB);
    const [v1, v2, v3, v4 = ""] = val.match(/[^\s,/]+/g);
    let h, wh, bk;
    if (v1 === "none") h = 0;
    else h = angleToDeg(v1);
    if (v2 === "none") wh = 0;
    else wh = Math.min(Math.max(parseFloat(v2), 0), MAX_PCT) / MAX_PCT;
    if (v3 === "none") bk = 0;
    else bk = Math.min(Math.max(parseFloat(v3), 0), MAX_PCT) / MAX_PCT;
    const alpha = parseAlpha(v4);
    if (format === "hwb") return [
        format,
        v1 === "none" ? v1 : h,
        v2 === "none" ? v2 : wh * MAX_PCT,
        v3 === "none" ? v3 : bk * MAX_PCT,
        v4 === "none" ? v4 : alpha
    ];
    if (wh + bk >= 1) {
        const v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(wh / (wh + bk) * MAX_RGB, OCT);
        return [
            "rgb",
            v,
            v,
            v,
            alpha
        ];
    }
    const factor = (1 - wh - bk) / MAX_RGB;
    let [, r, g, b] = parseHsl(`hsl(${h} 100 50)`);
    r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])((r * factor + wh) * MAX_RGB, OCT);
    g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])((g * factor + wh) * MAX_RGB, OCT);
    b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])((b * factor + wh) * MAX_RGB, OCT);
    return [
        "rgb",
        Math.min(Math.max(r, 0), MAX_RGB),
        Math.min(Math.max(g, 0), MAX_RGB),
        Math.min(Math.max(b, 0), MAX_RGB),
        alpha
    ];
};
/**
* parse lab()
* @param value - lab color value
* @param [opt] - options
* @returns parsed color
*   - [xyz-d50, x, y, z, alpha], ['lab', l, a, b, alpha], '(empty)', NullObject
*/ var parseLab = (value, opt = {})=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) value = value.trim();
    else throw new TypeError(`${value} is not a string.`);
    const { format = "", nullable = false } = opt;
    if (!REG_LAB.test(value)) {
        const res = resolveInvalidColorValue(format, nullable);
        if (res instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) return res;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(res)) return res;
        return res;
    }
    const COEF_PCT = 1.25;
    const COND_POW = 8;
    const [, val] = value.match(REG_LAB);
    const [v1, v2, v3, v4 = ""] = val.match(/[^\s,/]+/g);
    let l, a, b;
    if (v1 === "none") l = 0;
    else {
        if (v1.endsWith("%")) {
            l = parseFloat(v1);
            if (l > MAX_PCT) l = MAX_PCT;
        } else l = parseFloat(v1);
        if (l < 0) l = 0;
    }
    if (v2 === "none") a = 0;
    else a = v2.endsWith("%") ? parseFloat(v2) * COEF_PCT : parseFloat(v2);
    if (v3 === "none") b = 0;
    else b = v3.endsWith("%") ? parseFloat(v3) * COEF_PCT : parseFloat(v3);
    const alpha = parseAlpha(v4);
    if (REG_SPEC.test(format)) return [
        "lab",
        v1 === "none" ? v1 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(l, HEX),
        v2 === "none" ? v2 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(a, HEX),
        v3 === "none" ? v3 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(b, HEX),
        v4 === "none" ? v4 : alpha
    ];
    const fl = (l + HEX) / LAB_L;
    const fa = a / LAB_A + fl;
    const fb = fl - b / LAB_B;
    const powFl = Math.pow(fl, POW_CUBE);
    const powFa = Math.pow(fa, POW_CUBE);
    const powFb = Math.pow(fb, POW_CUBE);
    const [x, y, z] = [
        powFa > LAB_EPSILON ? powFa : (fa * LAB_L - HEX) / LAB_KAPPA,
        l > COND_POW ? powFl : l / LAB_KAPPA,
        powFb > LAB_EPSILON ? powFb : (fb * LAB_L - HEX) / LAB_KAPPA
    ].map((val, i)=>val * D50[i]);
    return [
        "xyz-d50",
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(x, HEX),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(y, HEX),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(z, HEX),
        alpha
    ];
};
/**
* parse lch()
* @param value - lch color value
* @param [opt] - options
* @returns parsed color
*   - ['xyz-d50', x, y, z, alpha], ['lch', l, c, h, alpha]
*   - '(empty)', NullObject
*/ var parseLch = (value, opt = {})=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) value = value.trim();
    else throw new TypeError(`${value} is not a string.`);
    const { format = "", nullable = false } = opt;
    if (!REG_LCH.test(value)) {
        const res = resolveInvalidColorValue(format, nullable);
        if (res instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) return res;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(res)) return res;
        return res;
    }
    const COEF_PCT = 1.5;
    const [, val] = value.match(REG_LCH);
    const [v1, v2, v3, v4 = ""] = val.match(/[^\s,/]+/g);
    let l, c, h;
    if (v1 === "none") l = 0;
    else {
        l = parseFloat(v1);
        if (l < 0) l = 0;
    }
    if (v2 === "none") c = 0;
    else c = v2.endsWith("%") ? parseFloat(v2) * COEF_PCT : parseFloat(v2);
    if (v3 === "none") h = 0;
    else h = angleToDeg(v3);
    const alpha = parseAlpha(v4);
    if (REG_SPEC.test(format)) return [
        "lch",
        v1 === "none" ? v1 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(l, HEX),
        v2 === "none" ? v2 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(c, HEX),
        v3 === "none" ? v3 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(h, HEX),
        v4 === "none" ? v4 : alpha
    ];
    const a = c * Math.cos(h * Math.PI / DEG_HALF);
    const b = c * Math.sin(h * Math.PI / DEG_HALF);
    const [, x, y, z] = parseLab(`lab(${l} ${a} ${b})`);
    return [
        "xyz-d50",
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(x, HEX),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(y, HEX),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(z, HEX),
        alpha
    ];
};
/**
* parse oklab()
* @param value - oklab color value
* @param [opt] - options
* @returns parsed color
*   - ['xyz-d65', x, y, z, alpha], ['oklab', l, a, b, alpha]
*   - '(empty)', NullObject
*/ var parseOklab = (value, opt = {})=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) value = value.trim();
    else throw new TypeError(`${value} is not a string.`);
    const { format = "", nullable = false } = opt;
    if (!REG_OKLAB.test(value)) {
        const res = resolveInvalidColorValue(format, nullable);
        if (res instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) return res;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(res)) return res;
        return res;
    }
    const COEF_PCT = .4;
    const [, val] = value.match(REG_OKLAB);
    const [v1, v2, v3, v4 = ""] = val.match(/[^\s,/]+/g);
    let l, a, b;
    if (v1 === "none") l = 0;
    else {
        l = v1.endsWith("%") ? parseFloat(v1) / MAX_PCT : parseFloat(v1);
        if (l < 0) l = 0;
    }
    if (v2 === "none") a = 0;
    else if (v2.endsWith("%")) a = parseFloat(v2) * COEF_PCT / MAX_PCT;
    else a = parseFloat(v2);
    if (v3 === "none") b = 0;
    else if (v3.endsWith("%")) b = parseFloat(v3) * COEF_PCT / MAX_PCT;
    else b = parseFloat(v3);
    const alpha = parseAlpha(v4);
    if (REG_SPEC.test(format)) return [
        "oklab",
        v1 === "none" ? v1 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(l, HEX),
        v2 === "none" ? v2 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(a, HEX),
        v3 === "none" ? v3 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(b, HEX),
        v4 === "none" ? v4 : alpha
    ];
    const [x, y, z] = transformMatrix(MATRIX_LMS_TO_XYZ, transformMatrix(MATRIX_OKLAB_TO_LMS, [
        l,
        a,
        b
    ]).map((c)=>Math.pow(c, POW_CUBE)), true);
    return [
        "xyz-d65",
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(x, HEX),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(y, HEX),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(z, HEX),
        alpha
    ];
};
/**
* parse oklch()
* @param value - oklch color value
* @param [opt] - options
* @returns parsed color
*   - ['xyz-d65', x, y, z, alpha], ['oklch', l, c, h, alpha]
*   - '(empty)', NullObject
*/ var parseOklch = (value, opt = {})=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) value = value.trim();
    else throw new TypeError(`${value} is not a string.`);
    const { format = "", nullable = false } = opt;
    if (!REG_OKLCH.test(value)) {
        const res = resolveInvalidColorValue(format, nullable);
        if (res instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) return res;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(res)) return res;
        return res;
    }
    const COEF_PCT = .4;
    const [, val] = value.match(REG_OKLCH);
    const [v1, v2, v3, v4 = ""] = val.match(/[^\s,/]+/g);
    let l, c, h;
    if (v1 === "none") l = 0;
    else {
        l = v1.endsWith("%") ? parseFloat(v1) / MAX_PCT : parseFloat(v1);
        if (l < 0) l = 0;
    }
    if (v2 === "none") c = 0;
    else {
        if (v2.endsWith("%")) c = parseFloat(v2) * COEF_PCT / MAX_PCT;
        else c = parseFloat(v2);
        if (c < 0) c = 0;
    }
    if (v3 === "none") h = 0;
    else h = angleToDeg(v3);
    const alpha = parseAlpha(v4);
    if (REG_SPEC.test(format)) return [
        "oklch",
        v1 === "none" ? v1 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(l, HEX),
        v2 === "none" ? v2 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(c, HEX),
        v3 === "none" ? v3 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(h, HEX),
        v4 === "none" ? v4 : alpha
    ];
    const a = c * Math.cos(h * Math.PI / DEG_HALF);
    const b = c * Math.sin(h * Math.PI / DEG_HALF);
    const [x, y, z] = transformMatrix(MATRIX_LMS_TO_XYZ, transformMatrix(MATRIX_OKLAB_TO_LMS, [
        l,
        a,
        b
    ]).map((cc)=>Math.pow(cc, POW_CUBE)), true);
    return [
        "xyz-d65",
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(x, HEX),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(y, HEX),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(z, HEX),
        alpha
    ];
};
/**
* parse color()
* @param value - color function value
* @param [opt] - options
* @returns parsed color
*   - ['xyz-(d50|d65)', x, y, z, alpha], [cs, r, g, b, alpha]
*   - '(empty)', NullObject
*/ var parseColorFunc = (value, opt = {})=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) value = value.trim();
    else throw new TypeError(`${value} is not a string.`);
    const { colorSpace = "", d50 = false, format = "", nullable = false } = opt;
    if (!REG_FN_COLOR.test(value)) {
        const res = resolveInvalidColorValue(format, nullable);
        if (res instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) return res;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(res)) return res;
        return res;
    }
    const [, val] = value.match(REG_FN_COLOR);
    let [cs, v1, v2, v3, v4 = ""] = val.match(/[^\s,/]+/g);
    let r, g, b;
    if (cs === "xyz") cs = "xyz-d65";
    if (v1 === "none") r = 0;
    else r = v1.endsWith("%") ? parseFloat(v1) / MAX_PCT : parseFloat(v1);
    if (v2 === "none") g = 0;
    else g = v2.endsWith("%") ? parseFloat(v2) / MAX_PCT : parseFloat(v2);
    if (v3 === "none") b = 0;
    else b = v3.endsWith("%") ? parseFloat(v3) / MAX_PCT : parseFloat(v3);
    const alpha = parseAlpha(v4);
    if (REG_SPEC.test(format) || format === "mixValue" && cs === colorSpace) return [
        cs,
        v1 === "none" ? v1 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(r, DEC),
        v2 === "none" ? v2 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(g, DEC),
        v3 === "none" ? v3 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(b, DEC),
        v4 === "none" ? v4 : alpha
    ];
    let x = 0;
    let y = 0;
    let z = 0;
    if (cs === "srgb-linear") {
        [x, y, z] = transformMatrix(MATRIX_L_RGB_TO_XYZ, [
            r,
            g,
            b
        ]);
        if (d50) [x, y, z] = transformMatrix(MATRIX_D65_TO_D50, [
            x,
            y,
            z
        ], true);
    } else if (cs === "display-p3") {
        const linearRgb = transformRgbToLinearRgb([
            r * MAX_RGB,
            g * MAX_RGB,
            b * MAX_RGB
        ]);
        [x, y, z] = transformMatrix(MATRIX_P3_TO_XYZ, linearRgb);
        if (d50) [x, y, z] = transformMatrix(MATRIX_D65_TO_D50, [
            x,
            y,
            z
        ], true);
    } else if (cs === "rec2020") {
        const ALPHA = 1.09929682680944;
        const BETA = .018053968510807;
        const REC_COEF = .45;
        const rgb = [
            r,
            g,
            b
        ].map((c)=>{
            let cl;
            if (c < BETA * REC_COEF * DEC) cl = c / (REC_COEF * DEC);
            else cl = Math.pow((c + ALPHA - 1) / ALPHA, 1 / REC_COEF);
            return cl;
        });
        [x, y, z] = transformMatrix(MATRIX_REC2020_TO_XYZ, rgb);
        if (d50) [x, y, z] = transformMatrix(MATRIX_D65_TO_D50, [
            x,
            y,
            z
        ], true);
    } else if (cs === "a98-rgb") {
        const POW_A98 = 563 / 256;
        const rgb = [
            r,
            g,
            b
        ].map((c)=>{
            return Math.pow(c, POW_A98);
        });
        [x, y, z] = transformMatrix(MATRIX_A98_TO_XYZ, rgb);
        if (d50) [x, y, z] = transformMatrix(MATRIX_D65_TO_D50, [
            x,
            y,
            z
        ], true);
    } else if (cs === "prophoto-rgb") {
        const POW_PROPHOTO = 1.8;
        const rgb = [
            r,
            g,
            b
        ].map((c)=>{
            let cl;
            if (c > 1 / (HEX * DUO)) cl = Math.pow(c, POW_PROPHOTO);
            else cl = c / HEX;
            return cl;
        });
        [x, y, z] = transformMatrix(MATRIX_PROPHOTO_TO_XYZ_D50, rgb);
        if (!d50) [x, y, z] = transformMatrix(MATRIX_D50_TO_D65, [
            x,
            y,
            z
        ], true);
    } else if (/^xyz(?:-d(?:50|65))?$/.test(cs)) {
        [x, y, z] = [
            r,
            g,
            b
        ];
        if (cs === "xyz-d50") {
            if (!d50) [x, y, z] = transformMatrix(MATRIX_D50_TO_D65, [
                x,
                y,
                z
            ]);
        } else if (d50) [x, y, z] = transformMatrix(MATRIX_D65_TO_D50, [
            x,
            y,
            z
        ], true);
    } else {
        [x, y, z] = transformRgbToXyz([
            r * MAX_RGB,
            g * MAX_RGB,
            b * MAX_RGB
        ]);
        if (d50) [x, y, z] = transformMatrix(MATRIX_D65_TO_D50, [
            x,
            y,
            z
        ], true);
    }
    return [
        d50 ? "xyz-d50" : "xyz-d65",
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(x, HEX),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(y, HEX),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(z, HEX),
        format === "mixValue" && v4 === "none" ? v4 : alpha
    ];
};
/**
* parse color value
* @param value - CSS color value
* @param [opt] - options
* @returns parsed color
*   - ['xyz-(d50|d65)', x, y, z, alpha], ['rgb', r, g, b, alpha]
*   - value, '(empty)', NullObject
*/ var parseColorValue = (value, opt = {})=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) value = value.toLowerCase().trim();
    else throw new TypeError(`${value} is not a string.`);
    const { d50 = false, format = "", nullable = false } = opt;
    if (!REG_COLOR.test(value)) {
        const res = resolveInvalidColorValue(format, nullable);
        if (res instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) return res;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(res)) return res;
        return res;
    }
    let x = 0;
    let y = 0;
    let z = 0;
    let alpha = 0;
    if (REG_CURRENT.test(value)) {
        if (format === "computedValue") return [
            "rgb",
            0,
            0,
            0,
            0
        ];
        if (format === "specifiedValue") return value;
    } else if (/^[a-z]+$/.test(value)) if (Object.hasOwn(NAMED_COLORS, value)) {
        if (format === "specifiedValue") return value;
        const [r, g, b] = NAMED_COLORS[value];
        alpha = 1;
        if (format === "computedValue") return [
            "rgb",
            r,
            g,
            b,
            alpha
        ];
        [x, y, z] = transformRgbToXyz([
            r,
            g,
            b
        ], true);
        if (d50) [x, y, z] = transformMatrix(MATRIX_D65_TO_D50, [
            x,
            y,
            z
        ], true);
    } else switch(format){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_COMP"]:
            if (nullable && value !== "transparent") return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]();
            return [
                "rgb",
                0,
                0,
                0,
                0
            ];
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_SPEC"]:
            if (value === "transparent") return value;
            return "";
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_MIX"]:
            if (value === "transparent") return [
                "rgb",
                0,
                0,
                0,
                0
            ];
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]();
        default:
    }
    else if (value[0] === "#") {
        if (REG_SPEC.test(format)) return [
            "rgb",
            ...convertHexToRgb(value)
        ];
        [x, y, z, alpha] = convertHexToXyz(value);
        if (d50) [x, y, z] = transformMatrix(MATRIX_D65_TO_D50, [
            x,
            y,
            z
        ], true);
    } else if (value.startsWith("lab")) {
        if (REG_SPEC.test(format)) return parseLab(value, opt);
        [, x, y, z, alpha] = parseLab(value);
        if (!d50) [x, y, z] = transformMatrix(MATRIX_D50_TO_D65, [
            x,
            y,
            z
        ], true);
    } else if (value.startsWith("lch")) {
        if (REG_SPEC.test(format)) return parseLch(value, opt);
        [, x, y, z, alpha] = parseLch(value);
        if (!d50) [x, y, z] = transformMatrix(MATRIX_D50_TO_D65, [
            x,
            y,
            z
        ], true);
    } else if (value.startsWith("oklab")) {
        if (REG_SPEC.test(format)) return parseOklab(value, opt);
        [, x, y, z, alpha] = parseOklab(value);
        if (d50) [x, y, z] = transformMatrix(MATRIX_D65_TO_D50, [
            x,
            y,
            z
        ], true);
    } else if (value.startsWith("oklch")) {
        if (REG_SPEC.test(format)) return parseOklch(value, opt);
        [, x, y, z, alpha] = parseOklch(value);
        if (d50) [x, y, z] = transformMatrix(MATRIX_D65_TO_D50, [
            x,
            y,
            z
        ], true);
    } else {
        let r, g, b;
        if (value.startsWith("hsl")) [, r, g, b, alpha] = parseHsl(value);
        else if (value.startsWith("hwb")) [, r, g, b, alpha] = parseHwb(value);
        else [, r, g, b, alpha] = parseRgb(value, opt);
        if (REG_SPEC.test(format)) return [
            "rgb",
            Math.round(r),
            Math.round(g),
            Math.round(b),
            alpha
        ];
        [x, y, z] = transformRgbToXyz([
            r,
            g,
            b
        ]);
        if (d50) [x, y, z] = transformMatrix(MATRIX_D65_TO_D50, [
            x,
            y,
            z
        ], true);
    }
    return [
        d50 ? "xyz-d50" : "xyz-d65",
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(x, HEX),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(y, HEX),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(z, HEX),
        alpha
    ];
};
/**
* resolve color value
* @param value - CSS color value
* @param [opt] - options
* @returns resolved color
*   - [cs, v1, v2, v3, alpha], value, '(empty)', NullObject
*/ var resolveColorValue = (value, opt = {})=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) value = value.toLowerCase().trim();
    else throw new TypeError(`${value} is not a string.`);
    const { colorSpace = "", format = "", nullable = false } = opt;
    const cacheKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCacheKey"])({
        namespace: NAMESPACE,
        name: "resolveColorValue",
        value
    }, opt);
    const cachedResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCache"])(cacheKey);
    if (cachedResult instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CacheItem"]) {
        if (cachedResult.isNull) return cachedResult;
        const cachedItem = cachedResult.item;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(cachedItem)) return cachedItem;
        return cachedItem;
    }
    if (!REG_COLOR.test(value)) {
        const res = resolveInvalidColorValue(format, nullable);
        if (res instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, null);
            return res;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, res);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(res)) return res;
        return res;
    }
    let cs = "";
    let r = 0;
    let g = 0;
    let b = 0;
    let alpha = 0;
    if (REG_CURRENT.test(value)) {
        if (format === "specifiedValue") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, value);
            return value;
        }
    } else if (/^[a-z]+$/.test(value)) if (Object.hasOwn(NAMED_COLORS, value)) {
        if (format === "specifiedValue") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, value);
            return value;
        }
        [r, g, b] = NAMED_COLORS[value];
        alpha = 1;
    } else switch(format){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_SPEC"]:
            {
                if (value === "transparent") {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, value);
                    return value;
                }
                const res = "";
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, res);
                return res;
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_MIX"]:
            if (value === "transparent") {
                const res = [
                    "rgb",
                    0,
                    0,
                    0,
                    0
                ];
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, res);
                return res;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, null);
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]();
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_COMP"]:
        default:
            {
                if (nullable && value !== "transparent") {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, null);
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]();
                }
                const res = [
                    "rgb",
                    0,
                    0,
                    0,
                    0
                ];
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, res);
                return res;
            }
    }
    else if (value[0] === "#") [r, g, b, alpha] = convertHexToRgb(value);
    else if (value.startsWith("hsl")) [, r, g, b, alpha] = parseHsl(value, opt);
    else if (value.startsWith("hwb")) [, r, g, b, alpha] = parseHwb(value, opt);
    else if (/^l(?:ab|ch)/.test(value)) {
        let x, y, z;
        if (value.startsWith("lab")) [cs, x, y, z, alpha] = parseLab(value, opt);
        else [cs, x, y, z, alpha] = parseLch(value, opt);
        if (REG_SPEC.test(format)) {
            const res = [
                cs,
                x,
                y,
                z,
                alpha
            ];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, res);
            return res;
        }
        [r, g, b] = transformXyzD50ToRgb([
            x,
            y,
            z
        ]);
    } else if (/^okl(?:ab|ch)/.test(value)) {
        let x, y, z;
        if (value.startsWith("oklab")) [cs, x, y, z, alpha] = parseOklab(value, opt);
        else [cs, x, y, z, alpha] = parseOklch(value, opt);
        if (REG_SPEC.test(format)) {
            const res = [
                cs,
                x,
                y,
                z,
                alpha
            ];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, res);
            return res;
        }
        [r, g, b] = transformXyzToRgb([
            x,
            y,
            z
        ]);
    } else [, r, g, b, alpha] = parseRgb(value, opt);
    if (format === "mixValue" && colorSpace === "srgb") {
        const res = [
            "srgb",
            r / MAX_RGB,
            g / MAX_RGB,
            b / MAX_RGB,
            alpha
        ];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, res);
        return res;
    }
    const res = [
        "rgb",
        Math.round(r),
        Math.round(g),
        Math.round(b),
        alpha
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, res);
    return res;
};
/**
* resolve color()
* @param value - color function value
* @param [opt] - options
* @returns resolved color - [cs, v1, v2, v3, alpha], '(empty)', NullObject
*/ var resolveColorFunc = (value, opt = {})=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) value = value.toLowerCase().trim();
    else throw new TypeError(`${value} is not a string.`);
    const { colorSpace = "", format = "", nullable = false } = opt;
    const cacheKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCacheKey"])({
        namespace: NAMESPACE,
        name: "resolveColorFunc",
        value
    }, opt);
    const cachedResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCache"])(cacheKey);
    if (cachedResult instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CacheItem"]) {
        if (cachedResult.isNull) return cachedResult;
        const cachedItem = cachedResult.item;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(cachedItem)) return cachedItem;
        return cachedItem;
    }
    if (!REG_FN_COLOR.test(value)) {
        const res = resolveInvalidColorValue(format, nullable);
        if (res instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, null);
            return res;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, res);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(res)) return res;
        return res;
    }
    const [cs, v1, v2, v3, v4] = parseColorFunc(value, opt);
    if (REG_SPEC.test(format) || format === "mixValue" && cs === colorSpace) {
        const res = [
            cs,
            v1,
            v2,
            v3,
            v4
        ];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, res);
        return res;
    }
    const x = parseFloat(`${v1}`);
    const y = parseFloat(`${v2}`);
    const z = parseFloat(`${v3}`);
    const alpha = parseAlpha(`${v4}`);
    const [r, g, b] = transformXyzToRgb([
        x,
        y,
        z
    ], true);
    const res = [
        "rgb",
        r,
        g,
        b,
        alpha
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, res);
    return res;
};
/**
* convert color value to linear rgb
* @param value - CSS color value
* @param [opt] - options
* @returns ColorChannels | NullObject - [r, g, b, alpha] r|g|b|alpha: 0..1
*/ var convertColorToLinearRgb = (value, opt = {})=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) value = value.trim();
    else throw new TypeError(`${value} is not a string.`);
    const { colorSpace = "", format = "" } = opt;
    let cs = "";
    let r, g, b, alpha, x, y, z;
    if (format === "mixValue") {
        let xyz;
        if (value.startsWith("color(")) xyz = parseColorFunc(value, opt);
        else xyz = parseColorValue(value, opt);
        if (xyz instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) return xyz;
        [cs, x, y, z, alpha] = xyz;
        if (cs === colorSpace) return [
            x,
            y,
            z,
            alpha
        ];
        [r, g, b] = transformMatrix(MATRIX_XYZ_TO_L_RGB, [
            x,
            y,
            z
        ], true);
    } else if (value.startsWith("color(")) {
        const [, val] = value.match(REG_FN_COLOR);
        const [cs] = val.match(/[^\s,/]+/g);
        if (cs === "srgb-linear") [, r, g, b, alpha] = resolveColorFunc(value, {
            format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_COMP"]
        });
        else {
            [, x, y, z, alpha] = parseColorFunc(value);
            [r, g, b] = transformMatrix(MATRIX_XYZ_TO_L_RGB, [
                x,
                y,
                z
            ], true);
        }
    } else {
        [, x, y, z, alpha] = parseColorValue(value);
        [r, g, b] = transformMatrix(MATRIX_XYZ_TO_L_RGB, [
            x,
            y,
            z
        ], true);
    }
    return [
        Math.min(Math.max(r, 0), 1),
        Math.min(Math.max(g, 0), 1),
        Math.min(Math.max(b, 0), 1),
        alpha
    ];
};
/**
* convert color value to rgb
* @param value - CSS color value
* @param [opt] - options
* @returns ColorChannels | NullObject
*   - [r, g, b, alpha] r|g|b: 0..255 alpha: 0..1
*/ var convertColorToRgb = (value, opt = {})=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) value = value.trim();
    else throw new TypeError(`${value} is not a string.`);
    const { format = "" } = opt;
    let r, g, b, alpha;
    if (format === "mixValue") {
        let rgb;
        if (value.startsWith("color(")) rgb = resolveColorFunc(value, opt);
        else rgb = resolveColorValue(value, opt);
        if (rgb instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) return rgb;
        [, r, g, b, alpha] = rgb;
    } else if (value.startsWith("color(")) {
        const [, val] = value.match(REG_FN_COLOR);
        const [cs] = val.match(/[^\s,/]+/g);
        if (cs === "srgb") {
            [, r, g, b, alpha] = resolveColorFunc(value, {
                format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_COMP"]
            });
            r *= MAX_RGB;
            g *= MAX_RGB;
            b *= MAX_RGB;
        } else [, r, g, b, alpha] = resolveColorFunc(value);
    } else if (/^(?:ok)?l(?:ab|ch)/.test(value)) {
        [r, g, b, alpha] = convertColorToLinearRgb(value);
        [r, g, b] = transformLinearRgbToRgb([
            r,
            g,
            b
        ]);
    } else [, r, g, b, alpha] = resolveColorValue(value, {
        format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_COMP"]
    });
    return [
        r,
        g,
        b,
        alpha
    ];
};
/**
* convert color value to xyz
* @param value - CSS color value
* @param [opt] - options
* @returns ColorChannels | NullObject - [x, y, z, alpha]
*/ var convertColorToXyz = (value, opt = {})=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) value = value.trim();
    else throw new TypeError(`${value} is not a string.`);
    const { d50 = false, format = "" } = opt;
    let x, y, z, alpha;
    if (format === "mixValue") {
        let xyz;
        if (value.startsWith("color(")) xyz = parseColorFunc(value, opt);
        else xyz = parseColorValue(value, opt);
        if (xyz instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) return xyz;
        [, x, y, z, alpha] = xyz;
    } else if (value.startsWith("color(")) {
        const [, val] = value.match(REG_FN_COLOR);
        const [cs] = val.match(/[^\s,/]+/g);
        if (d50) if (cs === "xyz-d50") [, x, y, z, alpha] = resolveColorFunc(value, {
            format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_COMP"]
        });
        else [, x, y, z, alpha] = parseColorFunc(value, opt);
        else if (/^xyz(?:-d65)?$/.test(cs)) [, x, y, z, alpha] = resolveColorFunc(value, {
            format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_COMP"]
        });
        else [, x, y, z, alpha] = parseColorFunc(value);
    } else [, x, y, z, alpha] = parseColorValue(value, opt);
    return [
        x,
        y,
        z,
        alpha
    ];
};
/**
* convert color value to hsl
* @param value - CSS color value
* @param [opt] - options
* @returns ColorChannels | NullObject - [h, s, l, alpha], hue may be powerless
*/ var convertColorToHsl = (value, opt = {})=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) value = value.trim();
    else throw new TypeError(`${value} is not a string.`);
    const { format = "" } = opt;
    let h, s, l, alpha;
    if (REG_HSL.test(value)) {
        [, h, s, l, alpha] = parseHsl(value, {
            format: "hsl"
        });
        if (format === "hsl") return [
            Math.round(h),
            Math.round(s),
            Math.round(l),
            alpha
        ];
        return [
            h,
            s,
            l,
            alpha
        ];
    }
    let x, y, z;
    if (format === "mixValue") {
        let xyz;
        if (value.startsWith("color(")) xyz = parseColorFunc(value, opt);
        else xyz = parseColorValue(value, opt);
        if (xyz instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) return xyz;
        [, x, y, z, alpha] = xyz;
    } else if (value.startsWith("color(")) [, x, y, z, alpha] = parseColorFunc(value);
    else [, x, y, z, alpha] = parseColorValue(value);
    [h, s, l] = transformXyzToHsl([
        x,
        y,
        z
    ], true);
    if (format === "hsl") return [
        Math.round(h),
        Math.round(s),
        Math.round(l),
        alpha
    ];
    return [
        format === "mixValue" && s === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"] : h,
        s,
        l,
        alpha
    ];
};
/**
* convert color value to hwb
* @param value - CSS color value
* @param [opt] - options
* @returns ColorChannels | NullObject - [h, w, b, alpha], hue may be powerless
*/ var convertColorToHwb = (value, opt = {})=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) value = value.trim();
    else throw new TypeError(`${value} is not a string.`);
    const { format = "" } = opt;
    let h, w, b, alpha;
    if (REG_HWB.test(value)) {
        [, h, w, b, alpha] = parseHwb(value, {
            format: "hwb"
        });
        if (format === "hwb") return [
            Math.round(h),
            Math.round(w),
            Math.round(b),
            alpha
        ];
        return [
            h,
            w,
            b,
            alpha
        ];
    }
    let x, y, z;
    if (format === "mixValue") {
        let xyz;
        if (value.startsWith("color(")) xyz = parseColorFunc(value, opt);
        else xyz = parseColorValue(value, opt);
        if (xyz instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) return xyz;
        [, x, y, z, alpha] = xyz;
    } else if (value.startsWith("color(")) [, x, y, z, alpha] = parseColorFunc(value);
    else [, x, y, z, alpha] = parseColorValue(value);
    [h, w, b] = transformXyzToHwb([
        x,
        y,
        z
    ], true);
    if (format === "hwb") return [
        Math.round(h),
        Math.round(w),
        Math.round(b),
        alpha
    ];
    return [
        format === "mixValue" && w + b >= 100 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"] : h,
        w,
        b,
        alpha
    ];
};
/**
* convert color value to lab
* @param value - CSS color value
* @param [opt] - options
* @returns ColorChannels | NullObject - [l, a, b, alpha]
*/ var convertColorToLab = (value, opt = {})=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) value = value.trim();
    else throw new TypeError(`${value} is not a string.`);
    const { format = "" } = opt;
    let l, a, b, alpha;
    if (REG_LAB.test(value)) {
        [, l, a, b, alpha] = parseLab(value, {
            format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_COMP"]
        });
        return [
            l,
            a,
            b,
            alpha
        ];
    }
    let x, y, z;
    if (format === "mixValue") {
        let xyz;
        opt.d50 = true;
        if (value.startsWith("color(")) xyz = parseColorFunc(value, opt);
        else xyz = parseColorValue(value, opt);
        if (xyz instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) return xyz;
        [, x, y, z, alpha] = xyz;
    } else if (value.startsWith("color(")) [, x, y, z, alpha] = parseColorFunc(value, {
        d50: true
    });
    else [, x, y, z, alpha] = parseColorValue(value, {
        d50: true
    });
    [l, a, b] = transformXyzD50ToLab([
        x,
        y,
        z
    ], true);
    return [
        l,
        a,
        b,
        alpha
    ];
};
/**
* convert color value to lch
* @param value - CSS color value
* @param [opt] - options
* @returns ColorChannels | NullObject - [l, c, h, alpha], hue may be powerless
*/ var convertColorToLch = (value, opt = {})=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) value = value.trim();
    else throw new TypeError(`${value} is not a string.`);
    const { format = "" } = opt;
    let l, c, h, alpha;
    if (REG_LCH.test(value)) {
        [, l, c, h, alpha] = parseLch(value, {
            format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_COMP"]
        });
        return [
            l,
            c,
            h,
            alpha
        ];
    }
    let x, y, z;
    if (format === "mixValue") {
        let xyz;
        opt.d50 = true;
        if (value.startsWith("color(")) xyz = parseColorFunc(value, opt);
        else xyz = parseColorValue(value, opt);
        if (xyz instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) return xyz;
        [, x, y, z, alpha] = xyz;
    } else if (value.startsWith("color(")) [, x, y, z, alpha] = parseColorFunc(value, {
        d50: true
    });
    else [, x, y, z, alpha] = parseColorValue(value, {
        d50: true
    });
    [l, c, h] = transformXyzD50ToLch([
        x,
        y,
        z
    ], true);
    return [
        l,
        c,
        format === "mixValue" && c === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"] : h,
        alpha
    ];
};
/**
* convert color value to oklab
* @param value - CSS color value
* @param [opt] - options
* @returns ColorChannels | NullObject - [l, a, b, alpha]
*/ var convertColorToOklab = (value, opt = {})=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) value = value.trim();
    else throw new TypeError(`${value} is not a string.`);
    const { format = "" } = opt;
    let l, a, b, alpha;
    if (REG_OKLAB.test(value)) {
        [, l, a, b, alpha] = parseOklab(value, {
            format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_COMP"]
        });
        return [
            l,
            a,
            b,
            alpha
        ];
    }
    let x, y, z;
    if (format === "mixValue") {
        let xyz;
        if (value.startsWith("color(")) xyz = parseColorFunc(value, opt);
        else xyz = parseColorValue(value, opt);
        if (xyz instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) return xyz;
        [, x, y, z, alpha] = xyz;
    } else if (value.startsWith("color(")) [, x, y, z, alpha] = parseColorFunc(value);
    else [, x, y, z, alpha] = parseColorValue(value);
    [l, a, b] = transformXyzToOklab([
        x,
        y,
        z
    ], true);
    return [
        l,
        a,
        b,
        alpha
    ];
};
/**
* convert color value to oklch
* @param value - CSS color value
* @param [opt] - options
* @returns ColorChannels | NullObject - [l, c, h, alpha], hue may be powerless
*/ var convertColorToOklch = (value, opt = {})=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) value = value.trim();
    else throw new TypeError(`${value} is not a string.`);
    const { format = "" } = opt;
    let l, c, h, alpha;
    if (REG_OKLCH.test(value)) {
        [, l, c, h, alpha] = parseOklch(value, {
            format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_COMP"]
        });
        return [
            l,
            c,
            h,
            alpha
        ];
    }
    let x, y, z;
    if (format === "mixValue") {
        let xyz;
        if (value.startsWith("color(")) xyz = parseColorFunc(value, opt);
        else xyz = parseColorValue(value, opt);
        if (xyz instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) return xyz;
        [, x, y, z, alpha] = xyz;
    } else if (value.startsWith("color(")) [, x, y, z, alpha] = parseColorFunc(value);
    else [, x, y, z, alpha] = parseColorValue(value);
    [l, c, h] = transformXyzToOklch([
        x,
        y,
        z
    ], true);
    return [
        l,
        c,
        format === "mixValue" && c === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"] : h,
        alpha
    ];
};
/**
* resolve color-mix()
* @param value - color-mix color value
* @param [opt] - options
* @returns resolved color - [cs, v1, v2, v3, alpha], '(empty)'
*/ var resolveColorMix = (value, opt = {})=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) value = value.toLowerCase().trim();
    else throw new TypeError(`${value} is not a string.`);
    const { format = "", nullable = false } = opt;
    const cacheKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCacheKey"])({
        namespace: NAMESPACE,
        name: "resolveColorMix",
        value
    }, opt);
    const cachedResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCache"])(cacheKey);
    if (cachedResult instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CacheItem"]) {
        if (cachedResult.isNull) return cachedResult;
        const cachedItem = cachedResult.item;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(cachedItem)) return cachedItem;
        return cachedItem;
    }
    const nestedItems = [];
    let colorSpace = "";
    let hueArc = "";
    let colorA = "";
    let pctA = "";
    let colorB = "";
    let pctB = "";
    let parsed = false;
    if (!REG_MIX.test(value)) if (value.startsWith("color-mix(") && REG_MIX_NEST.test(value)) {
        const items = value.match(REG_MIX_NEST);
        for (const item of items)if (item) {
            let val = resolveColorMix(item, {
                format: format === "specifiedValue" ? format : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_COMP"]
            });
            if (Array.isArray(val)) {
                const [cs, v1, v2, v3, v4] = val;
                if (v1 === 0 && v2 === 0 && v3 === 0 && v4 === 0) {
                    value = "";
                    break;
                }
                if (REG_MIX_CS_RGB_XYZ.test(cs)) if (v4 === 1) val = `color(${cs} ${v1} ${v2} ${v3})`;
                else val = `color(${cs} ${v1} ${v2} ${v3} / ${v4})`;
                else if (v4 === 1) val = `${cs}(${v1} ${v2} ${v3})`;
                else val = `${cs}(${v1} ${v2} ${v3} / ${v4})`;
            } else if (!REG_MIX.test(val)) {
                value = "";
                break;
            }
            nestedItems.push(val);
            value = value.replace(item, val);
        }
        if (!value) return cacheInvalidColorValue(cacheKey, format, nullable);
    } else if (value.startsWith("color-mix(") && value.endsWith(")") && value.includes("light-dark(")) {
        const [csPart = "", partA = "", partB = ""] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitValue"])(value.replace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FN_MIX"], "").replace(/\)$/, ""), {
            delimiter: ","
        });
        const [colorPartA = "", pctPartA = ""] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitValue"])(partA);
        const [colorPartB = "", pctPartB = ""] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitValue"])(partB);
        const specifiedColorA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$resolve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveColor"])(colorPartA, {
            format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_SPEC"]
        });
        const specifiedColorB = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$resolve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveColor"])(colorPartB, {
            format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_SPEC"]
        });
        if (REG_MIX_IN_CS.test(csPart) && specifiedColorA && specifiedColorB) if (format === "specifiedValue") {
            const [, cs] = csPart.match(REG_MIX_IN_CS);
            if (REG_CS_HUE.test(cs)) [, colorSpace, hueArc] = cs.match(REG_CS_HUE);
            else colorSpace = cs;
            colorA = specifiedColorA;
            if (pctPartA) pctA = pctPartA;
            colorB = specifiedColorB;
            if (pctPartB) pctB = pctPartB;
            value = value.replace(colorPartA, specifiedColorA).replace(colorPartB, specifiedColorB);
            parsed = true;
        } else {
            const resolvedColorA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$resolve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveColor"])(colorPartA, opt);
            const resolvedColorB = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$resolve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveColor"])(colorPartB, opt);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(resolvedColorA) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(resolvedColorB)) value = value.replace(colorPartA, resolvedColorA).replace(colorPartB, resolvedColorB);
        }
        else return cacheInvalidColorValue(cacheKey, format, nullable);
    } else return cacheInvalidColorValue(cacheKey, format, nullable);
    if (nestedItems.length && format === "specifiedValue") {
        const [, cs] = value.match(REG_MIX_START);
        if (REG_CS_HUE.test(cs)) [, colorSpace, hueArc] = cs.match(REG_CS_HUE);
        else colorSpace = cs;
        if (nestedItems.length === 2) {
            let [itemA, itemB] = nestedItems;
            itemA = itemA.replace(/(?=[()])/g, "\\");
            itemB = itemB.replace(/(?=[()])/g, "\\");
            const regA = new RegExp(`(${itemA})(?:\\s+(${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PCT"]}))?`);
            const regB = new RegExp(`(${itemB})(?:\\s+(${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PCT"]}))?`);
            [, colorA, pctA] = value.match(regA);
            [, colorB, pctB] = value.match(regB);
        } else {
            let [item] = nestedItems;
            item = item.replace(/(?=[()])/g, "\\");
            const itemPart = `${item}(?:\\s+${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PCT"]})?`;
            const itemPartCapt = `(${item})(?:\\s+(${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PCT"]}))?`;
            const regItemPart = new RegExp(`^${itemPartCapt}$`);
            if (new RegExp(`${itemPartCapt}\\s*\\)$`).test(value)) {
                const reg = new RegExp(`(${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYN_MIX_PART"]})\\s*,\\s*(${itemPart})\\s*\\)$`);
                const [, colorPartA, colorPartB] = value.match(reg);
                [, colorA, pctA] = colorPartA.match(REG_MIX_COLOR_PART);
                [, colorB, pctB] = colorPartB.match(regItemPart);
            } else {
                const reg = new RegExp(`(${itemPart})\\s*,\\s*(${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYN_MIX_PART"]})\\s*\\)$`);
                const [, colorPartA, colorPartB] = value.match(reg);
                [, colorA, pctA] = colorPartA.match(regItemPart);
                [, colorB, pctB] = colorPartB.match(REG_MIX_COLOR_PART);
            }
        }
    } else if (!parsed) {
        const [, cs, colorPartA, colorPartB] = value.match(REG_MIX_CAPT);
        [, colorA, pctA] = colorPartA.match(REG_MIX_COLOR_PART);
        [, colorB, pctB] = colorPartB.match(REG_MIX_COLOR_PART);
        if (REG_CS_HUE.test(cs)) [, colorSpace, hueArc] = cs.match(REG_CS_HUE);
        else colorSpace = cs;
    }
    let pA, pB, m;
    if (pctA && pctB) {
        const p1 = parseFloat(pctA) / MAX_PCT;
        const p2 = parseFloat(pctB) / MAX_PCT;
        if (p1 < 0 || p1 > 1 || p2 < 0 || p2 > 1 || p1 === 0 && p2 === 0) return cacheInvalidColorValue(cacheKey, format, nullable);
        const factor = p1 + p2;
        pA = p1 / factor;
        pB = p2 / factor;
        m = factor < 1 ? factor : 1;
    } else {
        if (pctA) {
            pA = parseFloat(pctA) / MAX_PCT;
            if (pA < 0 || pA > 1) return cacheInvalidColorValue(cacheKey, format, nullable);
            pB = 1 - pA;
        } else if (pctB) {
            pB = parseFloat(pctB) / MAX_PCT;
            if (pB < 0 || pB > 1) return cacheInvalidColorValue(cacheKey, format, nullable);
            pA = 1 - pB;
        } else {
            pA = HALF;
            pB = HALF;
        }
        m = 1;
    }
    if (colorSpace === "xyz") colorSpace = "xyz-d65";
    if (format === "specifiedValue") {
        let valueA = "";
        let valueB = "";
        if (colorA.startsWith("color-mix(") || colorA.startsWith("light-dark(")) valueA = colorA;
        else if (colorA.startsWith("color(")) {
            const [cs, v1, v2, v3, v4] = parseColorFunc(colorA, opt);
            if (v4 === 1) valueA = `color(${cs} ${v1} ${v2} ${v3})`;
            else valueA = `color(${cs} ${v1} ${v2} ${v3} / ${v4})`;
        } else {
            const val = parseColorValue(colorA, opt);
            if (Array.isArray(val)) {
                const [cs, v1, v2, v3, v4] = val;
                if (v4 === 1) if (cs === "rgb") valueA = `${cs}(${v1}, ${v2}, ${v3})`;
                else valueA = `${cs}(${v1} ${v2} ${v3})`;
                else if (cs === "rgb") valueA = `${cs}a(${v1}, ${v2}, ${v3}, ${v4})`;
                else valueA = `${cs}(${v1} ${v2} ${v3} / ${v4})`;
            } else {
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(val) || !val) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, "");
                    return "";
                }
                valueA = val;
            }
        }
        if (colorB.startsWith("color-mix(") || colorB.startsWith("light-dark(")) valueB = colorB;
        else if (colorB.startsWith("color(")) {
            const [cs, v1, v2, v3, v4] = parseColorFunc(colorB, opt);
            if (v4 === 1) valueB = `color(${cs} ${v1} ${v2} ${v3})`;
            else valueB = `color(${cs} ${v1} ${v2} ${v3} / ${v4})`;
        } else {
            const val = parseColorValue(colorB, opt);
            if (Array.isArray(val)) {
                const [cs, v1, v2, v3, v4] = val;
                if (v4 === 1) if (cs === "rgb") valueB = `${cs}(${v1}, ${v2}, ${v3})`;
                else valueB = `${cs}(${v1} ${v2} ${v3})`;
                else if (cs === "rgb") valueB = `${cs}a(${v1}, ${v2}, ${v3}, ${v4})`;
                else valueB = `${cs}(${v1} ${v2} ${v3} / ${v4})`;
            } else {
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(val) || !val) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, "");
                    return "";
                }
                valueB = val;
            }
        }
        if (pctA && pctB) {
            valueA += ` ${parseFloat(pctA)}%`;
            valueB += ` ${parseFloat(pctB)}%`;
        } else if (pctA) {
            const pA = parseFloat(pctA);
            if (pA !== MAX_PCT * HALF) valueA += ` ${pA}%`;
        } else if (pctB) {
            const pA = MAX_PCT - parseFloat(pctB);
            if (pA !== MAX_PCT * HALF) valueA += ` ${pA}%`;
        }
        if (hueArc) {
            const res = `color-mix(in ${colorSpace} ${hueArc} hue, ${valueA}, ${valueB})`;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, res);
            return res;
        } else {
            const res = `color-mix(in ${colorSpace}, ${valueA}, ${valueB})`;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, res);
            return res;
        }
    }
    let r = 0;
    let g = 0;
    let b = 0;
    let alpha = 0;
    if (/^srgb(?:-linear)?$/.test(colorSpace)) {
        let rgbA, rgbB;
        if (colorSpace === "srgb") {
            if (REG_CURRENT.test(colorA)) rgbA = [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"]
            ];
            else rgbA = convertColorToRgb(colorA, {
                colorSpace,
                format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_MIX"]
            });
            if (REG_CURRENT.test(colorB)) rgbB = [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"]
            ];
            else rgbB = convertColorToRgb(colorB, {
                colorSpace,
                format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_MIX"]
            });
        } else {
            if (REG_CURRENT.test(colorA)) rgbA = [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"]
            ];
            else rgbA = convertColorToLinearRgb(colorA, {
                colorSpace,
                format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_MIX"]
            });
            if (REG_CURRENT.test(colorB)) rgbB = [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"]
            ];
            else rgbB = convertColorToLinearRgb(colorB, {
                colorSpace,
                format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_MIX"]
            });
        }
        if (rgbA instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"] || rgbB instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) return cacheInvalidColorValue(cacheKey, format, nullable);
        const [rrA, ggA, bbA, aaA] = rgbA;
        const [rrB, ggB, bbB, aaB] = rgbB;
        const rNone = rrA === "none" && rrB === "none";
        const gNone = ggA === "none" && ggB === "none";
        const bNone = bbA === "none" && bbB === "none";
        const alphaNone = aaA === "none" && aaB === "none";
        const [[rA, gA, bA, alphaA], [rB, gB, bB, alphaB]] = normalizeColorComponents([
            rrA,
            ggA,
            bbA,
            aaA
        ], [
            rrB,
            ggB,
            bbB,
            aaB
        ], true);
        const factorA = alphaA * pA;
        const factorB = alphaB * pB;
        alpha = factorA + factorB;
        if (alpha === 0) {
            r = rA * pA + rB * pB;
            g = gA * pA + gB * pB;
            b = bA * pA + bB * pB;
        } else {
            r = (rA * factorA + rB * factorB) / alpha;
            g = (gA * factorA + gB * factorB) / alpha;
            b = (bA * factorA + bB * factorB) / alpha;
            alpha = parseFloat(alpha.toFixed(3));
        }
        if (format === "computedValue") {
            const res = [
                colorSpace,
                rNone ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(r, HEX),
                gNone ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(g, HEX),
                bNone ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(b, HEX),
                alphaNone ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"] : alpha * m
            ];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, res);
            return res;
        }
        r *= MAX_RGB;
        g *= MAX_RGB;
        b *= MAX_RGB;
    } else if (REG_CS_XYZ.test(colorSpace)) {
        let xyzA, xyzB;
        if (REG_CURRENT.test(colorA)) xyzA = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"]
        ];
        else xyzA = convertColorToXyz(colorA, {
            colorSpace,
            d50: colorSpace === "xyz-d50",
            format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_MIX"]
        });
        if (REG_CURRENT.test(colorB)) xyzB = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"]
        ];
        else xyzB = convertColorToXyz(colorB, {
            colorSpace,
            d50: colorSpace === "xyz-d50",
            format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_MIX"]
        });
        if (xyzA instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"] || xyzB instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) return cacheInvalidColorValue(cacheKey, format, nullable);
        const [xxA, yyA, zzA, aaA] = xyzA;
        const [xxB, yyB, zzB, aaB] = xyzB;
        const xNone = xxA === "none" && xxB === "none";
        const yNone = yyA === "none" && yyB === "none";
        const zNone = zzA === "none" && zzB === "none";
        const alphaNone = aaA === "none" && aaB === "none";
        const [[xA, yA, zA, alphaA], [xB, yB, zB, alphaB]] = normalizeColorComponents([
            xxA,
            yyA,
            zzA,
            aaA
        ], [
            xxB,
            yyB,
            zzB,
            aaB
        ], true);
        const factorA = alphaA * pA;
        const factorB = alphaB * pB;
        alpha = factorA + factorB;
        let x, y, z;
        if (alpha === 0) {
            x = xA * pA + xB * pB;
            y = yA * pA + yB * pB;
            z = zA * pA + zB * pB;
        } else {
            x = (xA * factorA + xB * factorB) / alpha;
            y = (yA * factorA + yB * factorB) / alpha;
            z = (zA * factorA + zB * factorB) / alpha;
            alpha = parseFloat(alpha.toFixed(3));
        }
        if (format === "computedValue") {
            const res = [
                colorSpace,
                xNone ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(x, HEX),
                yNone ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(y, HEX),
                zNone ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(z, HEX),
                alphaNone ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"] : alpha * m
            ];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, res);
            return res;
        }
        if (colorSpace === "xyz-d50") [r, g, b] = transformXyzD50ToRgb([
            x,
            y,
            z
        ], true);
        else [r, g, b] = transformXyzToRgb([
            x,
            y,
            z
        ], true);
    } else if (/^h(?:sl|wb)$/.test(colorSpace)) {
        let hslA, hslB;
        if (colorSpace === "hsl") {
            if (REG_CURRENT.test(colorA)) hslA = [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"]
            ];
            else hslA = convertColorToHsl(colorA, {
                colorSpace,
                format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_MIX"]
            });
            if (REG_CURRENT.test(colorB)) hslB = [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"]
            ];
            else hslB = convertColorToHsl(colorB, {
                colorSpace,
                format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_MIX"]
            });
        } else {
            if (REG_CURRENT.test(colorA)) hslA = [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"]
            ];
            else hslA = convertColorToHwb(colorA, {
                colorSpace,
                format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_MIX"]
            });
            if (REG_CURRENT.test(colorB)) hslB = [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"]
            ];
            else hslB = convertColorToHwb(colorB, {
                colorSpace,
                format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_MIX"]
            });
        }
        if (hslA instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"] || hslB instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) return cacheInvalidColorValue(cacheKey, format, nullable);
        const [hhA, ssA, llA, aaA] = hslA;
        const [hhB, ssB, llB, aaB] = hslB;
        const alphaNone = aaA === "none" && aaB === "none";
        let [[hA, sA, lA, alphaA], [hB, sB, lB, alphaB]] = normalizeColorComponents([
            hhA,
            ssA,
            llA,
            aaA
        ], [
            hhB,
            ssB,
            llB,
            aaB
        ], true);
        if (hueArc) [hA, hB] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolateHue"])(hA, hB, hueArc);
        const factorA = alphaA * pA;
        const factorB = alphaB * pB;
        alpha = factorA + factorB;
        const h = (hA * pA + hB * pB) % DEG;
        let s, l;
        if (alpha === 0) {
            s = sA * pA + sB * pB;
            l = lA * pA + lB * pB;
        } else {
            s = (sA * factorA + sB * factorB) / alpha;
            l = (lA * factorA + lB * factorB) / alpha;
            alpha = parseFloat(alpha.toFixed(3));
        }
        [r, g, b] = convertColorToRgb(`${colorSpace}(${h} ${s} ${l})`);
        if (format === "computedValue") {
            const res = [
                "srgb",
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(r / MAX_RGB, HEX),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(g / MAX_RGB, HEX),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(b / MAX_RGB, HEX),
                alphaNone ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"] : alpha * m
            ];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, res);
            return res;
        }
    } else if (/^(?:ok)?lch$/.test(colorSpace)) {
        let lchA, lchB;
        if (colorSpace === "lch") {
            if (REG_CURRENT.test(colorA)) lchA = [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"]
            ];
            else lchA = convertColorToLch(colorA, {
                colorSpace,
                format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_MIX"]
            });
            if (REG_CURRENT.test(colorB)) lchB = [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"]
            ];
            else lchB = convertColorToLch(colorB, {
                colorSpace,
                format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_MIX"]
            });
        } else {
            if (REG_CURRENT.test(colorA)) lchA = [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"]
            ];
            else lchA = convertColorToOklch(colorA, {
                colorSpace,
                format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_MIX"]
            });
            if (REG_CURRENT.test(colorB)) lchB = [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"]
            ];
            else lchB = convertColorToOklch(colorB, {
                colorSpace,
                format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_MIX"]
            });
        }
        if (lchA instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"] || lchB instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) return cacheInvalidColorValue(cacheKey, format, nullable);
        const [llA, ccA, hhA, aaA] = lchA;
        const [llB, ccB, hhB, aaB] = lchB;
        const lNone = llA === "none" && llB === "none";
        const cNone = ccA === "none" && ccB === "none";
        const hNone = hhA === "none" && hhB === "none";
        const alphaNone = aaA === "none" && aaB === "none";
        let [[lA, cA, hA, alphaA], [lB, cB, hB, alphaB]] = normalizeColorComponents([
            llA,
            ccA,
            hhA,
            aaA
        ], [
            llB,
            ccB,
            hhB,
            aaB
        ], true);
        if (hueArc) [hA, hB] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolateHue"])(hA, hB, hueArc);
        const factorA = alphaA * pA;
        const factorB = alphaB * pB;
        alpha = factorA + factorB;
        const h = (hA * pA + hB * pB) % DEG;
        let l, c;
        if (alpha === 0) {
            l = lA * pA + lB * pB;
            c = cA * pA + cB * pB;
        } else {
            l = (lA * factorA + lB * factorB) / alpha;
            c = (cA * factorA + cB * factorB) / alpha;
            alpha = parseFloat(alpha.toFixed(3));
        }
        if (format === "computedValue") {
            const res = [
                colorSpace,
                lNone ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(l, HEX),
                cNone ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(c, HEX),
                hNone ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(h, HEX),
                alphaNone ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"] : alpha * m
            ];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, res);
            return res;
        }
        [, r, g, b] = resolveColorValue(`${colorSpace}(${l} ${c} ${h})`);
    } else {
        let labA, labB;
        if (colorSpace === "lab") {
            if (REG_CURRENT.test(colorA)) labA = [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"]
            ];
            else labA = convertColorToLab(colorA, {
                colorSpace,
                format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_MIX"]
            });
            if (REG_CURRENT.test(colorB)) labB = [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"]
            ];
            else labB = convertColorToLab(colorB, {
                colorSpace,
                format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_MIX"]
            });
        } else {
            if (REG_CURRENT.test(colorA)) labA = [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"]
            ];
            else labA = convertColorToOklab(colorA, {
                colorSpace,
                format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_MIX"]
            });
            if (REG_CURRENT.test(colorB)) labB = [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"]
            ];
            else labB = convertColorToOklab(colorB, {
                colorSpace,
                format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_MIX"]
            });
        }
        if (labA instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"] || labB instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) return cacheInvalidColorValue(cacheKey, format, nullable);
        const [llA, aaA, bbA, alA] = labA;
        const [llB, aaB, bbB, alB] = labB;
        const lNone = llA === "none" && llB === "none";
        const aNone = aaA === "none" && aaB === "none";
        const bNone = bbA === "none" && bbB === "none";
        const alphaNone = alA === "none" && alB === "none";
        const [[lA, aA, bA, alphaA], [lB, aB, bB, alphaB]] = normalizeColorComponents([
            llA,
            aaA,
            bbA,
            alA
        ], [
            llB,
            aaB,
            bbB,
            alB
        ], true);
        const factorA = alphaA * pA;
        const factorB = alphaB * pB;
        alpha = factorA + factorB;
        let l, aO, bO;
        if (alpha === 0) {
            l = lA * pA + lB * pB;
            aO = aA * pA + aB * pB;
            bO = bA * pA + bB * pB;
        } else {
            l = (lA * factorA + lB * factorB) / alpha;
            aO = (aA * factorA + aB * factorB) / alpha;
            bO = (bA * factorA + bB * factorB) / alpha;
            alpha = parseFloat(alpha.toFixed(3));
        }
        if (format === "computedValue") {
            const res = [
                colorSpace,
                lNone ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(l, HEX),
                aNone ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(aO, HEX),
                bNone ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(bO, HEX),
                alphaNone ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"] : alpha * m
            ];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, res);
            return res;
        }
        [, r, g, b] = resolveColorValue(`${colorSpace}(${l} ${aO} ${bO})`);
    }
    const res = [
        "rgb",
        Math.round(r),
        Math.round(g),
        Math.round(b),
        parseFloat((alpha * m).toFixed(3))
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, res);
    return res;
};
;
 //# sourceMappingURL=color.js.map
}),
"[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/css-var.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cssVar",
    ()=>cssVar,
    "resolveVar",
    ()=>resolveVar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/cache.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/common.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/constant.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$css$2d$calc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/css-calc.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@csstools+css-tokenizer@4.0.0/node_modules/@csstools/css-tokenizer/dist/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
//#region src/js/css-var.ts
/**
* css-var
*/ var { CloseParen: PAREN_CLOSE, Comment: COMMENT, EOF, Ident: IDENT, Whitespace: W_SPACE } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"];
var NAMESPACE = "css-var";
var REG_FN_CALC = new RegExp(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYN_FN_CALC"]);
var REG_FN_VAR = new RegExp(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYN_FN_VAR"]);
var REG_CSS_WIDE_KEYWORD = /^(?:inherit|initial|revert(?:-layer)?|unset)$/;
/**
* resolve custom property
* @param tokens - CSS tokens
* @param [opt] - options
* @returns result - [tokens, resolvedValue]
*/ function resolveCustomProperty(tokens, opt = {}) {
    if (!Array.isArray(tokens)) throw new TypeError(`${tokens} is not an array.`);
    const { customProperty = {} } = opt;
    const items = [];
    while(tokens.length){
        const token = tokens.shift();
        if (!token) break;
        if (!Array.isArray(token)) throw new TypeError(`${token} is not an array.`);
        const [type, value] = token;
        if (type === PAREN_CLOSE) break;
        if (value === "var(") {
            const [, item] = resolveCustomProperty(tokens, opt);
            if (item) items.push(item);
        } else if (type === IDENT) {
            if (value.startsWith("--")) {
                let item;
                if (Object.hasOwn(customProperty, value)) item = customProperty[value];
                else if (typeof customProperty.callback === "function") item = customProperty.callback(value);
                if (item) items.push(item);
            } else if (value) items.push(value);
        }
    }
    let resolveAsColor = false;
    if (items.length > 1) resolveAsColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isColor"])(items[items.length - 1]);
    let resolvedValue = "";
    for (let item of items){
        item = item.trim();
        if (REG_FN_VAR.test(item)) {
            const resolvedItem = resolveVar(item, opt);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(resolvedItem)) {
                if (!resolveAsColor || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isColor"])(resolvedItem)) resolvedValue = resolvedItem;
            }
        } else if (REG_FN_CALC.test(item)) {
            item = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$css$2d$calc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cssCalc"])(item, opt);
            if (!resolveAsColor || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isColor"])(item)) resolvedValue = item;
        } else if (item && !REG_CSS_WIDE_KEYWORD.test(item)) {
            if (!resolveAsColor || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isColor"])(item)) resolvedValue = item;
        }
        if (resolvedValue) break;
    }
    return [
        tokens,
        resolvedValue
    ];
}
/**
* parse tokens
* @param tokens - CSS tokens
* @param [opt] - options
* @returns parsed tokens
*/ function parseTokens(tokens, opt = {}) {
    const res = [];
    while(tokens.length){
        const token = tokens.shift();
        if (!token) break;
        const [type = "", value = ""] = token;
        if (value === "var(") {
            const [, resolvedValue] = resolveCustomProperty(tokens, opt);
            if (!resolvedValue) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]();
            res.push(resolvedValue);
        } else switch(type){
            case PAREN_CLOSE:
                if (res.length) if (res[res.length - 1] === " ") res[res.length - 1] = value;
                else res.push(value);
                else res.push(value);
                break;
            case W_SPACE:
                if (res.length) {
                    const lastValue = res[res.length - 1];
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(lastValue) && !lastValue.endsWith("(") && lastValue !== " ") res.push(value);
                }
                break;
            default:
                if (type !== COMMENT && type !== EOF) res.push(value);
        }
    }
    return res;
}
/**
* resolve CSS var()
* @param value - CSS value including var()
* @param [opt] - options
* @returns resolved value
*/ function resolveVar(value, opt = {}) {
    const { format = "" } = opt;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) {
        if (!REG_FN_VAR.test(value) || format === "specifiedValue") return value;
        value = value.trim();
    } else throw new TypeError(`${value} is not a string.`);
    const cacheKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCacheKey"])({
        namespace: NAMESPACE,
        name: "resolveVar",
        value
    }, opt);
    const cachedResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCache"])(cacheKey);
    if (cachedResult instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CacheItem"]) {
        if (cachedResult.isNull) return cachedResult;
        return cachedResult.item;
    }
    const values = parseTokens((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokenize"])({
        css: value
    }), opt);
    if (Array.isArray(values)) {
        let color = values.join("");
        if (REG_FN_CALC.test(color)) color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$css$2d$calc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cssCalc"])(color, opt);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, color);
        return color;
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, null);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]();
    }
}
/**
* CSS var()
* @param value - CSS value including var()
* @param [opt] - options
* @returns resolved value
*/ var cssVar = (value, opt = {})=>{
    const resolvedValue = resolveVar(value, opt);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(resolvedValue)) return resolvedValue;
    return "";
};
;
 //# sourceMappingURL=css-var.js.map
}),
"[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/css-calc.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cssCalc",
    ()=>cssCalc,
    "resolveDimension",
    ()=>resolveDimension,
    "serializeCalc",
    ()=>serializeCalc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/cache.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/common.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/constant.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$css$2d$var$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/css-var.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$calc$40$3$2e$3$2e$0_$40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$_4dbc5b05e8dbfe1f32044d24572a798f$2f$node_modules$2f40$csstools$2f$css$2d$calc$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@csstools+css-calc@3.3.0_@csstools+css-parser-algorithms@4.0.0_@csstools+css-tokenizer@_4dbc5b05e8dbfe1f32044d24572a798f/node_modules/@csstools/css-calc/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@csstools+css-tokenizer@4.0.0/node_modules/@csstools/css-tokenizer/dist/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
//#region src/js/css-calc.ts
/**
* css-calc
*/ var { CloseParen: PAREN_CLOSE, Comment: COMMENT, Dimension: DIM, EOF, Function: FUNC, OpenParen: PAREN_OPEN, Whitespace: W_SPACE } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"];
var NAMESPACE = "css-calc";
var TRIA = 3;
var HEX = 16;
var MAX_PCT = 100;
var REG_FN_CALC = new RegExp(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYN_FN_CALC"]);
var REG_FN_CALC_NUM = new RegExp(`^calc\\((${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NUM"]})\\)$`);
var REG_FN_MATH_START = new RegExp(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYN_FN_MATH_START"]);
var REG_FN_VAR = new RegExp(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYN_FN_VAR"]);
var REG_FN_VAR_START = new RegExp(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYN_FN_VAR_START"]);
var REG_OPERATOR = /\s[*+/-]\s/;
var REG_PAREN_OPEN = /\($/;
var REG_TYPE_DIM = new RegExp(`^(${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NUM"]})(${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ANGLE"]}|${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LENGTH"]})$`);
var REG_TYPE_DIM_PCT = new RegExp(`^(${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NUM"]})(${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ANGLE"]}|${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LENGTH"]}|%)$`);
var REG_TYPE_PCT = new RegExp(`^(${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NUM"]})%$`);
/**
* Calclator
*/ var Calculator = class {
    #hasNum;
    #numSum;
    #numMul;
    #hasPct;
    #pctSum;
    #pctMul;
    #hasDim;
    #dimSum;
    #dimSub;
    #dimMul;
    #dimDiv;
    #hasEtc;
    #etcSum;
    #etcSub;
    #etcMul;
    #etcDiv;
    #calcOpts;
    /**
	* constructor
	*/ constructor(){
        this.#hasNum = false;
        this.#numSum = [];
        this.#numMul = [];
        this.#hasPct = false;
        this.#pctSum = [];
        this.#pctMul = [];
        this.#hasDim = false;
        this.#dimSum = [];
        this.#dimSub = [];
        this.#dimMul = [];
        this.#dimDiv = [];
        this.#hasEtc = false;
        this.#etcSum = [];
        this.#etcSub = [];
        this.#etcMul = [];
        this.#etcDiv = [];
        this.#calcOpts = {
            toCanonicalUnits: true
        };
    }
    get hasNum() {
        return this.#hasNum;
    }
    set hasNum(value) {
        this.#hasNum = !!value;
    }
    get numSum() {
        return this.#numSum;
    }
    get numMul() {
        return this.#numMul;
    }
    get hasPct() {
        return this.#hasPct;
    }
    set hasPct(value) {
        this.#hasPct = !!value;
    }
    get pctSum() {
        return this.#pctSum;
    }
    get pctMul() {
        return this.#pctMul;
    }
    get hasDim() {
        return this.#hasDim;
    }
    set hasDim(value) {
        this.#hasDim = !!value;
    }
    get dimSum() {
        return this.#dimSum;
    }
    get dimSub() {
        return this.#dimSub;
    }
    get dimMul() {
        return this.#dimMul;
    }
    get dimDiv() {
        return this.#dimDiv;
    }
    get hasEtc() {
        return this.#hasEtc;
    }
    set hasEtc(value) {
        this.#hasEtc = !!value;
    }
    get etcSum() {
        return this.#etcSum;
    }
    get etcSub() {
        return this.#etcSub;
    }
    get etcMul() {
        return this.#etcMul;
    }
    get etcDiv() {
        return this.#etcDiv;
    }
    /**
	* clear values
	* @returns void
	*/ clear() {
        this.#hasNum = false;
        this.#numSum.length = 0;
        this.#numMul.length = 0;
        this.#hasPct = false;
        this.#pctSum.length = 0;
        this.#pctMul.length = 0;
        this.#hasDim = false;
        this.#dimSum.length = 0;
        this.#dimSub.length = 0;
        this.#dimMul.length = 0;
        this.#dimDiv.length = 0;
        this.#hasEtc = false;
        this.#etcSum.length = 0;
        this.#etcSub.length = 0;
        this.#etcMul.length = 0;
        this.#etcDiv.length = 0;
    }
    /**
	* sort values
	* @param values - values
	* @returns sorted values
	*/ sort(values = []) {
        const arr = [
            ...values
        ];
        if (arr.length > 1) arr.sort((a, b)=>{
            let res;
            if (REG_TYPE_DIM_PCT.test(a) && REG_TYPE_DIM_PCT.test(b)) {
                const [, valA, unitA] = a.match(REG_TYPE_DIM_PCT);
                const [, valB, unitB] = b.match(REG_TYPE_DIM_PCT);
                if (unitA === unitB) if (Number(valA) === Number(valB)) res = 0;
                else if (Number(valA) > Number(valB)) res = 1;
                else res = -1;
                else if (unitA > unitB) res = 1;
                else res = -1;
            } else if (a === b) res = 0;
            else if (a > b) res = 1;
            else res = -1;
            return res;
        });
        return arr;
    }
    /**
	* multiply values
	* @returns resolved value
	*/ multiply() {
        const value = [];
        let num;
        if (this.#hasNum) {
            num = 1;
            for (const i of this.#numMul){
                num *= i;
                if (num === 0 || !Number.isFinite(num) || Number.isNaN(num)) break;
            }
            if (!this.#hasPct && !this.#hasDim && !this.hasEtc) {
                if (Number.isFinite(num)) num = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(num, HEX);
                value.push(num);
            }
        }
        if (this.#hasPct) {
            if (typeof num !== "number") num = 1;
            for (const i of this.#pctMul){
                num *= i;
                if (num === 0 || !Number.isFinite(num) || Number.isNaN(num)) break;
            }
            if (Number.isFinite(num)) num = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(num, HEX)}%`;
            if (!this.#hasDim && !this.hasEtc) value.push(num);
        }
        if (this.#hasDim) {
            let dim = "";
            let mul = "";
            let div = "";
            if (this.#dimMul.length) if (this.#dimMul.length === 1) [mul] = this.#dimMul;
            else mul = `${this.sort(this.#dimMul).join(" * ")}`;
            if (this.#dimDiv.length) if (this.#dimDiv.length === 1) [div] = this.#dimDiv;
            else div = `${this.sort(this.#dimDiv).join(" * ")}`;
            if (Number.isFinite(num)) {
                if (mul) if (div) if (div.includes("*")) dim = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$calc$40$3$2e$3$2e$0_$40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$_4dbc5b05e8dbfe1f32044d24572a798f$2f$node_modules$2f40$csstools$2f$css$2d$calc$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calc"])(`calc(${num} * ${mul} / (${div}))`, this.#calcOpts);
                else dim = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$calc$40$3$2e$3$2e$0_$40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$_4dbc5b05e8dbfe1f32044d24572a798f$2f$node_modules$2f40$csstools$2f$css$2d$calc$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calc"])(`calc(${num} * ${mul} / ${div})`, this.#calcOpts);
                else dim = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$calc$40$3$2e$3$2e$0_$40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$_4dbc5b05e8dbfe1f32044d24572a798f$2f$node_modules$2f40$csstools$2f$css$2d$calc$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calc"])(`calc(${num} * ${mul})`, this.#calcOpts);
                else if (div.includes("*")) dim = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$calc$40$3$2e$3$2e$0_$40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$_4dbc5b05e8dbfe1f32044d24572a798f$2f$node_modules$2f40$csstools$2f$css$2d$calc$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calc"])(`calc(${num} / (${div}))`, this.#calcOpts);
                else dim = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$calc$40$3$2e$3$2e$0_$40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$_4dbc5b05e8dbfe1f32044d24572a798f$2f$node_modules$2f40$csstools$2f$css$2d$calc$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calc"])(`calc(${num} / ${div})`, this.#calcOpts);
                value.push(dim.replace(/^calc/, ""));
            } else {
                if (!value.length && num !== void 0) value.push(num);
                if (mul) {
                    if (div) if (div.includes("*")) dim = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$calc$40$3$2e$3$2e$0_$40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$_4dbc5b05e8dbfe1f32044d24572a798f$2f$node_modules$2f40$csstools$2f$css$2d$calc$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calc"])(`calc(${mul} / (${div}))`, this.#calcOpts);
                    else dim = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$calc$40$3$2e$3$2e$0_$40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$_4dbc5b05e8dbfe1f32044d24572a798f$2f$node_modules$2f40$csstools$2f$css$2d$calc$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calc"])(`calc(${mul} / ${div})`, this.#calcOpts);
                    else dim = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$calc$40$3$2e$3$2e$0_$40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$_4dbc5b05e8dbfe1f32044d24572a798f$2f$node_modules$2f40$csstools$2f$css$2d$calc$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calc"])(`calc(${mul})`, this.#calcOpts);
                    if (value.length) value.push("*", dim.replace(/^calc/, ""));
                    else value.push(dim.replace(/^calc/, ""));
                } else {
                    dim = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$calc$40$3$2e$3$2e$0_$40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$_4dbc5b05e8dbfe1f32044d24572a798f$2f$node_modules$2f40$csstools$2f$css$2d$calc$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calc"])(`calc(${div})`, this.#calcOpts);
                    if (value.length) value.push("/", dim.replace(/^calc/, ""));
                    else value.push("1", "/", dim.replace(/^calc/, ""));
                }
            }
        }
        if (this.#hasEtc) {
            if (this.#etcMul.length) {
                if (!value.length && num !== void 0) value.push(num);
                const mul = this.sort(this.#etcMul).join(" * ");
                if (value.length) value.push(`* ${mul}`);
                else value.push(`${mul}`);
            }
            if (this.#etcDiv.length) {
                const div = this.sort(this.#etcDiv).join(" * ");
                if (div.includes("*")) if (value.length) value.push(`/ (${div})`);
                else value.push(`1 / (${div})`);
                else if (value.length) value.push(`/ ${div}`);
                else value.push(`1 / ${div}`);
            }
        }
        if (value.length) return value.join(" ");
        return "";
    }
    /**
	* sum values
	* @returns resolved value
	*/ sum() {
        const value = [];
        if (this.#hasNum) {
            let num = 0;
            for (const i of this.#numSum){
                num += i;
                if (!Number.isFinite(num) || Number.isNaN(num)) break;
            }
            value.push(num);
        }
        if (this.#hasPct) {
            let num = 0;
            for (const i of this.#pctSum){
                num += i;
                if (!Number.isFinite(num)) break;
            }
            if (Number.isFinite(num)) num = `${num}%`;
            if (value.length) value.push(`+ ${num}`);
            else value.push(num);
        }
        if (this.#hasDim) {
            let dim, sum, sub;
            if (this.#dimSum.length) sum = this.sort(this.#dimSum).join(" + ");
            if (this.#dimSub.length) sub = this.sort(this.#dimSub).join(" + ");
            if (sum) if (sub) if (sub.includes("-")) dim = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$calc$40$3$2e$3$2e$0_$40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$_4dbc5b05e8dbfe1f32044d24572a798f$2f$node_modules$2f40$csstools$2f$css$2d$calc$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calc"])(`calc(${sum} - (${sub}))`, this.#calcOpts);
            else dim = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$calc$40$3$2e$3$2e$0_$40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$_4dbc5b05e8dbfe1f32044d24572a798f$2f$node_modules$2f40$csstools$2f$css$2d$calc$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calc"])(`calc(${sum} - ${sub})`, this.#calcOpts);
            else dim = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$calc$40$3$2e$3$2e$0_$40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$_4dbc5b05e8dbfe1f32044d24572a798f$2f$node_modules$2f40$csstools$2f$css$2d$calc$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calc"])(`calc(${sum})`, this.#calcOpts);
            else dim = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$calc$40$3$2e$3$2e$0_$40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$_4dbc5b05e8dbfe1f32044d24572a798f$2f$node_modules$2f40$csstools$2f$css$2d$calc$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calc"])(`calc(-1 * (${sub}))`, this.#calcOpts);
            if (value.length) value.push("+", dim.replace(/^calc/, ""));
            else value.push(dim.replace(/^calc/, ""));
        }
        if (this.#hasEtc) {
            if (this.#etcSum.length) {
                const sum = this.sort(this.#etcSum).map((item)=>{
                    let res;
                    if (REG_OPERATOR.test(item) && !item.startsWith("(") && !item.endsWith(")")) res = `(${item})`;
                    else res = item;
                    return res;
                }).join(" + ");
                if (value.length) if (this.#etcSum.length > 1) value.push(`+ (${sum})`);
                else value.push(`+ ${sum}`);
                else value.push(`${sum}`);
            }
            if (this.#etcSub.length) {
                const sub = this.sort(this.#etcSub).map((item)=>{
                    let res;
                    if (REG_OPERATOR.test(item) && !item.startsWith("(") && !item.endsWith(")")) res = `(${item})`;
                    else res = item;
                    return res;
                }).join(" + ");
                if (value.length) if (this.#etcSub.length > 1) value.push(`- (${sub})`);
                else value.push(`- ${sub}`);
                else if (this.#etcSub.length > 1) value.push(`-1 * (${sub})`);
                else value.push(`-1 * ${sub}`);
            }
        }
        if (value.length) return value.join(" ");
        return "";
    }
};
/**
* sort calc values
* @param values - values to sort
* @param [finalize] - finalize values
* @returns sorted values
*/ var sortCalcValues = (values = [], finalize = false)=>{
    if (values.length < TRIA) throw new Error(`Unexpected array length ${values.length}.`);
    const start = values.shift();
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(start) || !start.endsWith("(")) throw new Error(`Unexpected token ${start}.`);
    const end = values.pop();
    if (end !== ")") throw new Error(`Unexpected token ${end}.`);
    if (values.length === 1) {
        const [value] = values;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStringOrNumber"])(value)) throw new Error(`Unexpected token ${value}.`);
        return `${start}${value}${end}`;
    }
    const sortedValues = [];
    const cal = new Calculator();
    let operator = "";
    const l = values.length;
    let hasAddSub = false;
    for(let i = 0; i < l; i++){
        const value = values[i];
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStringOrNumber"])(value)) throw new Error(`Unexpected token ${value}.`);
        if (value === "*" || value === "/") operator = value;
        else if (value === "+" || value === "-") {
            const sortedValue = cal.multiply();
            if (sortedValue) sortedValues.push(sortedValue, value);
            hasAddSub = true;
            cal.clear();
            operator = "";
        } else {
            const numValue = Number(value);
            const strValue = `${value}`;
            switch(operator){
                case "/":
                    if (Number.isFinite(numValue)) {
                        cal.hasNum = true;
                        cal.numMul.push(1 / numValue);
                    } else if (REG_TYPE_PCT.test(strValue)) {
                        const [, val] = strValue.match(REG_TYPE_PCT);
                        cal.hasPct = true;
                        cal.pctMul.push(MAX_PCT * MAX_PCT / Number(val));
                    } else if (REG_TYPE_DIM.test(strValue)) {
                        cal.hasDim = true;
                        cal.dimDiv.push(strValue);
                    } else {
                        cal.hasEtc = true;
                        cal.etcDiv.push(strValue);
                    }
                    break;
                default:
                    if (Number.isFinite(numValue)) {
                        cal.hasNum = true;
                        cal.numMul.push(numValue);
                    } else if (REG_TYPE_PCT.test(strValue)) {
                        const [, val] = strValue.match(REG_TYPE_PCT);
                        cal.hasPct = true;
                        cal.pctMul.push(Number(val));
                    } else if (REG_TYPE_DIM.test(strValue)) {
                        cal.hasDim = true;
                        cal.dimMul.push(strValue);
                    } else {
                        cal.hasEtc = true;
                        cal.etcMul.push(strValue);
                    }
            }
        }
        if (i === l - 1) {
            const sortedValue = cal.multiply();
            if (sortedValue) sortedValues.push(sortedValue);
            cal.clear();
            operator = "";
        }
    }
    let resolvedValue = "";
    if (finalize && hasAddSub) {
        const finalizedValues = [];
        cal.clear();
        operator = "";
        const l = sortedValues.length;
        for(let i = 0; i < l; i++){
            const value = sortedValues[i];
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStringOrNumber"])(value)) if (value === "+" || value === "-") operator = value;
            else {
                const numValue = Number(value);
                const strValue = `${value}`;
                switch(operator){
                    case "-":
                        if (Number.isFinite(numValue)) {
                            cal.hasNum = true;
                            cal.numSum.push(-1 * numValue);
                        } else if (REG_TYPE_PCT.test(strValue)) {
                            const [, val] = strValue.match(REG_TYPE_PCT);
                            cal.hasPct = true;
                            cal.pctSum.push(-1 * Number(val));
                        } else if (REG_TYPE_DIM.test(strValue)) {
                            cal.hasDim = true;
                            cal.dimSub.push(strValue);
                        } else {
                            cal.hasEtc = true;
                            cal.etcSub.push(strValue);
                        }
                        break;
                    default:
                        if (Number.isFinite(numValue)) {
                            cal.hasNum = true;
                            cal.numSum.push(numValue);
                        } else if (REG_TYPE_PCT.test(strValue)) {
                            const [, val] = strValue.match(REG_TYPE_PCT);
                            cal.hasPct = true;
                            cal.pctSum.push(Number(val));
                        } else if (REG_TYPE_DIM.test(strValue)) {
                            cal.hasDim = true;
                            cal.dimSum.push(strValue);
                        } else {
                            cal.hasEtc = true;
                            cal.etcSum.push(strValue);
                        }
                }
            }
            if (i === l - 1) {
                const sortedValue = cal.sum();
                if (sortedValue) finalizedValues.push(sortedValue);
                cal.clear();
                operator = "";
            }
        }
        resolvedValue = finalizedValues.join(" ").replace(/\+\s-/g, "- ");
    } else resolvedValue = sortedValues.join(" ").replace(/\+\s-/g, "- ");
    if (resolvedValue.startsWith("(") && resolvedValue.endsWith(")") && resolvedValue.lastIndexOf("(") === 0 && resolvedValue.indexOf(")") === resolvedValue.length - 1) resolvedValue = resolvedValue.substring(1, resolvedValue.length - 1);
    return `${start}${resolvedValue}${end}`;
};
/**
* resolve AST node
* @param node - AST node
* @param isRoot - is root node
* @returns resolved value
*/ var resolveNode = (node, isRoot)=>{
    const flatItems = [];
    for (const item of node)if (Array.isArray(item)) flatItems.push(resolveNode(item, false));
    else flatItems.push(item);
    if (isRoot) {
        if (flatItems.length >= TRIA) return sortCalcValues(flatItems, true);
        const joined = flatItems.join("");
        return joined.startsWith("calc(") ? joined : `calc(${joined})`;
    }
    if (flatItems.length >= TRIA) {
        let serialized = sortCalcValues(flatItems, false);
        if (REG_FN_VAR_START.test(serialized)) serialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$calc$40$3$2e$3$2e$0_$40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$_4dbc5b05e8dbfe1f32044d24572a798f$2f$node_modules$2f40$csstools$2f$css$2d$calc$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calc"])(serialized, {
            toCanonicalUnits: true
        });
        return serialized;
    }
    return flatItems.join("");
};
/**
* serialize calc
* @param value - CSS value
* @param [opt] - options
* @returns serialized value
*/ var serializeCalc = (value, opt = {})=>{
    const { format = "" } = opt;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) {
        if (!REG_FN_VAR_START.test(value) || format !== "specifiedValue") return value;
        value = value.toLowerCase().trim();
    } else throw new TypeError(`${value} is not a string.`);
    const cacheKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCacheKey"])({
        namespace: NAMESPACE,
        name: "serializeCalc",
        value
    }, opt);
    const cachedResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCache"])(cacheKey);
    if (cachedResult instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CacheItem"]) return cachedResult.item;
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokenize"])({
        css: value
    }).map((token)=>{
        const [type, val] = token;
        let res = "";
        if (type !== W_SPACE && type !== COMMENT) res = val;
        return res;
    }).filter((v)=>v);
    const stack = [
        []
    ];
    for (const item of items)if (REG_PAREN_OPEN.test(item)) {
        const newNode = [
            item
        ];
        const parent = stack[stack.length - 1];
        if (parent) parent.push(newNode);
        stack.push(newNode);
    } else if (item === ")") if (stack.length > 1) {
        const currentLevel = stack.pop();
        if (currentLevel) currentLevel.push(item);
    } else {
        const root = stack[0];
        if (root) root.push(item);
    }
    else {
        const parent = stack[stack.length - 1];
        if (parent) parent.push(item);
    }
    let serializedCalc = "";
    const rootItems = stack[0];
    if (rootItems) if (rootItems.length === 1 && Array.isArray(rootItems[0])) serializedCalc = resolveNode(rootItems[0], true);
    else {
        const flatItems = [];
        for (const item of rootItems)if (Array.isArray(item)) flatItems.push(resolveNode(item, false));
        else flatItems.push(item);
        if (flatItems.length >= TRIA) serializedCalc = sortCalcValues(flatItems, true);
        else {
            const firstItem = flatItems[0] || "";
            serializedCalc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(firstItem) && firstItem.startsWith("calc(") ? firstItem : `calc(${firstItem})`;
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, serializedCalc);
    return serializedCalc;
};
/**
* resolve dimension
* @param token - CSS token
* @param [opt] - options
* @returns resolved value
*/ var resolveDimension = (token, opt = {})=>{
    if (!Array.isArray(token)) throw new TypeError(`${token} is not an array.`);
    const [, , , , detail = {}] = token;
    const { unit, value } = detail;
    if (unit === "px") return `${value}${unit}`;
    const pixelValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveLengthInPixels"])(Number(value), unit, opt);
    if (Number.isFinite(pixelValue)) return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(pixelValue, HEX)}px`;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]();
};
/**
* parse tokens
* @param tokens - CSS tokens
* @param [opt] - options
* @returns parsed tokens
*/ var parseTokens = (tokens, opt = {})=>{
    if (!Array.isArray(tokens)) throw new TypeError(`${tokens} is not an array.`);
    const { format = "" } = opt;
    const mathFunc = /* @__PURE__ */ new Set();
    let nest = 0;
    const res = [];
    for (const token of tokens){
        if (!Array.isArray(token)) throw new TypeError(`${token} is not an array.`);
        const [type = "", value = ""] = token;
        switch(type){
            case DIM:
                if (format === "specifiedValue" && !mathFunc.has(nest)) res.push(value);
                else {
                    const resolvedValue = resolveDimension(token, opt);
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(resolvedValue)) res.push(resolvedValue);
                    else res.push(value);
                }
                break;
            case FUNC:
            case PAREN_OPEN:
                res.push(value);
                nest++;
                if (REG_FN_MATH_START.test(value)) mathFunc.add(nest);
                break;
            case PAREN_CLOSE:
                if (res.length) if (res[res.length - 1] === " ") res.splice(-1, 1, value);
                else res.push(value);
                else res.push(value);
                if (mathFunc.has(nest)) mathFunc.delete(nest);
                nest--;
                break;
            case W_SPACE:
                if (res.length) {
                    const lastValue = res[res.length - 1];
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(lastValue) && !lastValue.endsWith("(") && lastValue !== " ") res.push(value);
                }
                break;
            default:
                if (type !== COMMENT && type !== EOF) res.push(value);
        }
    }
    return res;
};
/**
* CSS calc()
* @param value - CSS value including calc()
* @param [opt] - options
* @returns resolved value
*/ var cssCalc = (value, opt = {})=>{
    const { format = "" } = opt;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) {
        if (REG_FN_VAR.test(value)) if (format === "specifiedValue") return value;
        else {
            const resolvedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$css$2d$var$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveVar"])(value, opt);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(resolvedValue)) return resolvedValue;
            else return "";
        }
        else if (!REG_FN_CALC.test(value)) return value;
        value = value.toLowerCase().trim();
    } else throw new TypeError(`${value} is not a string.`);
    const cacheKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCacheKey"])({
        namespace: NAMESPACE,
        name: "cssCalc",
        value
    }, opt);
    const cachedResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCache"])(cacheKey);
    if (cachedResult instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CacheItem"]) return cachedResult.item;
    let resolvedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$calc$40$3$2e$3$2e$0_$40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$_4dbc5b05e8dbfe1f32044d24572a798f$2f$node_modules$2f40$csstools$2f$css$2d$calc$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calc"])(parseTokens((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokenize"])({
        css: value
    }), opt).join(""), {
        toCanonicalUnits: true
    });
    if (REG_FN_VAR_START.test(value)) {
        if (REG_TYPE_DIM_PCT.test(resolvedValue)) {
            const [, val, unit] = resolvedValue.match(REG_TYPE_DIM_PCT);
            resolvedValue = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(Number(val), HEX)}${unit}`;
        }
        if (resolvedValue && !REG_FN_VAR_START.test(resolvedValue) && format === "specifiedValue") resolvedValue = `calc(${resolvedValue})`;
    }
    if (format === "specifiedValue") {
        if (/\s[-+*/]\s/.test(resolvedValue) && !resolvedValue.includes("NaN")) resolvedValue = serializeCalc(resolvedValue, opt);
        else if (REG_FN_CALC_NUM.test(resolvedValue)) {
            const [, val] = resolvedValue.match(REG_FN_CALC_NUM);
            resolvedValue = `calc(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(Number(val), HEX)})`;
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, resolvedValue);
    return resolvedValue;
};
;
 //# sourceMappingURL=css-calc.js.map
}),
"[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/relative-color.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveRelativeColor",
    ()=>resolveRelativeColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/cache.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/common.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/constant.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$resolve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/resolve.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$css$2d$calc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/css-calc.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@csstools+css-tokenizer@4.0.0/node_modules/@csstools/css-tokenizer/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$color$2d$parser$40$4$2e$1$2e$10_$40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$t_effeb5cd45da44eb6c8c04960cd886da$2f$node_modules$2f40$csstools$2f$css$2d$color$2d$parser$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@csstools+css-color-parser@4.1.10_@csstools+css-parser-algorithms@4.0.0_@csstools+css-t_effeb5cd45da44eb6c8c04960cd886da/node_modules/@csstools/css-color-parser/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@csstools+css-parser-algorithms@4.0.0_@csstools+css-tokenizer@4.0.0/node_modules/@csstools/css-parser-algorithms/dist/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
//#region src/js/relative-color.ts
/**
* relative-color
*/ var { CloseParen: PAREN_CLOSE, Comment: COMMENT, Delim: DELIM, Dimension: DIM, EOF, Function: FUNC, Ident: IDENT, Number: NUM, OpenParen: PAREN_OPEN, Percentage: PCT, Whitespace: W_SPACE } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"];
var { HasNoneKeywords: KEY_NONE } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$color$2d$parser$40$4$2e$1$2e$10_$40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$t_effeb5cd45da44eb6c8c04960cd886da$2f$node_modules$2f40$csstools$2f$css$2d$color$2d$parser$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SyntaxFlag"];
var NAMESPACE = "relative-color";
var OCT = 8;
var DEC = 10;
var HEX = 16;
var MAX_PCT = 100;
var MAX_RGB = 255;
var COLOR_CHANNELS = new Map([
    [
        "color",
        [
            "r",
            "g",
            "b",
            "alpha"
        ]
    ],
    [
        "hsl",
        [
            "h",
            "s",
            "l",
            "alpha"
        ]
    ],
    [
        "hsla",
        [
            "h",
            "s",
            "l",
            "alpha"
        ]
    ],
    [
        "hwb",
        [
            "h",
            "w",
            "b",
            "alpha"
        ]
    ],
    [
        "lab",
        [
            "l",
            "a",
            "b",
            "alpha"
        ]
    ],
    [
        "lch",
        [
            "l",
            "c",
            "h",
            "alpha"
        ]
    ],
    [
        "oklab",
        [
            "l",
            "a",
            "b",
            "alpha"
        ]
    ],
    [
        "oklch",
        [
            "l",
            "c",
            "h",
            "alpha"
        ]
    ],
    [
        "rgb",
        [
            "r",
            "g",
            "b",
            "alpha"
        ]
    ],
    [
        "rgba",
        [
            "r",
            "g",
            "b",
            "alpha"
        ]
    ]
]);
var REG_COLOR_CAPT = new RegExp(`^${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FN_REL"]}(${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYN_COLOR_TYPE"]}|${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYN_MIX"]})\\s+`);
var REG_CS_HSL = /(?:hsla?|hwb)$/;
var REG_CS_CIE = new RegExp(`^(?:${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CS_LAB"]}|${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CS_LCH"]})$`);
var REG_FN_CALC_SUM = /^(?:abs|sig?n|cos|tan)\(/;
var REG_FN_MATH_START = new RegExp(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYN_FN_MATH_START"]);
var REG_FN_REL = new RegExp(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FN_REL"]);
var REG_FN_REL_CAPT = new RegExp(`^${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FN_REL_CAPT"]}`);
var REG_FN_REL_START = new RegExp(`^${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FN_REL"]}`);
var REG_FN_VAR = new RegExp(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYN_FN_VAR"]);
/**
* resolve relative color channels
* @param value
*   - CSS color value
*   - system colors are not supported
* @param [opt] - options
* @param [opt.currentColor]
*   - color to use for `currentcolor` keyword
*   - if omitted, it will be treated as a missing color
*     i.e. `rgb(none none none / none)`
* @param [opt.customProperty]
*   - custom properties
*   - pair of `--` prefixed property name and value,
*     e.g. `customProperty: { '--some-color': '#0000ff' }`
*   - and/or `callback` function to get the value of the custom property,
*     e.g. `customProperty: { callback: someDeclaration.getPropertyValue }`
* @param [opt.dimension]
*   - dimension, convert relative length to pixels
*   - pair of unit and it's value as a number in pixels,
*     e.g. `dimension: { em: 12, rem: 16, vw: 10.26 }`
*   - and/or `callback` function to get the value as a number in pixels,
*     e.g. `dimension: { callback: convertUnitToPixel }`
* @param [opt.format]
*   - output format, one of below
*   - `computedValue` (default), [computed value][139] of the color
*   - `specifiedValue`, [specified value][140] of the color
*   - `hex`, hex color notation, i.e. `rrggbb`
*   - `hexAlpha`, hex color notation with alpha channel, i.e. `#rrggbbaa`
* @returns
*   - one of rgba?(), #rrggbb(aa)?, color-name, '(empty-string)',
*     color(color-space r g b / alpha), color(color-space x y z / alpha),
*     lab(l a b / alpha), lch(l c h / alpha), oklab(l a b / alpha),
*     oklch(l c h / alpha), null
*   - in `computedValue`, values are numbers, however `rgb()` values are
*     integers
*   - in `specifiedValue`, returns `empty string` for unknown and/or invalid
*     color
*   - in `hex`, returns `null` for `transparent`, and also returns `null` if
*     any of `r`, `g`, `b`, `alpha` is not a number
*   - in `hexAlpha`, returns `#00000000` for `transparent`,
*     however returns `null` if any of `r`, `g`, `b`, `alpha` is not a number
*/ function resolveColorChannels(tokens, opt = {}) {
    if (!Array.isArray(tokens)) throw new TypeError(`${tokens} is not an array.`);
    const { colorSpace = "", format = "" } = opt;
    const colorChannel = COLOR_CHANNELS.get(colorSpace);
    if (!colorChannel) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]();
    const mathFunc = /* @__PURE__ */ new Set();
    const channels = [
        [],
        [],
        [],
        []
    ];
    let i = 0;
    let nest = 0;
    let func = "";
    let precededPct = false;
    for (const token of tokens){
        if (!Array.isArray(token)) throw new TypeError(`${token} is not an array.`);
        const [type, value, , , detail] = token;
        const channel = channels[i];
        if (Array.isArray(channel)) switch(type){
            case DELIM:
                if (func) {
                    if ((value === "+" || value === "-") && precededPct && !REG_FN_CALC_SUM.test(func)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]();
                    precededPct = false;
                    channel.push(value);
                }
                break;
            case DIM:
                {
                    if (!func || !REG_FN_CALC_SUM.test(func)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]();
                    const resolvedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$css$2d$calc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveDimension"])(token, opt);
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(resolvedValue)) channel.push(resolvedValue);
                    else channel.push(value);
                    break;
                }
            case FUNC:
                channel.push(value);
                func = value;
                nest++;
                if (REG_FN_MATH_START.test(value)) mathFunc.add(nest);
                break;
            case IDENT:
                if (!colorChannel.includes(value)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]();
                channel.push(value);
                if (!func) i++;
                break;
            case NUM:
                channel.push(Number(detail?.value));
                if (!func) i++;
                break;
            case PAREN_OPEN:
                channel.push(value);
                nest++;
                break;
            case PAREN_CLOSE:
                if (func) {
                    if (channel[channel.length - 1] === " ") channel[channel.length - 1] = value;
                    else channel.push(value);
                    if (mathFunc.has(nest)) mathFunc.delete(nest);
                    nest--;
                    if (nest === 0) {
                        func = "";
                        i++;
                    }
                }
                break;
            case PCT:
                if (!func) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]();
                else if (!REG_FN_CALC_SUM.test(func)) {
                    let lastValue;
                    for(let j = channel.length - 1; j >= 0; j--)if (channel[j] !== " ") {
                        lastValue = channel[j];
                        break;
                    }
                    if (lastValue === "+" || lastValue === "-") return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]();
                    else if (lastValue === "*" || lastValue === "/") precededPct = false;
                    else precededPct = true;
                }
                channel.push(Number(detail?.value) / MAX_PCT);
                break;
            case W_SPACE:
                if (channel.length && func) {
                    const lastValue = channel[channel.length - 1];
                    if (typeof lastValue === "number") channel.push(value);
                    else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(lastValue) && !lastValue.endsWith("(") && lastValue !== " ") channel.push(value);
                }
                break;
            default:
                if (type !== COMMENT && type !== EOF && func) channel.push(value);
        }
    }
    const channelValues = [];
    for (const channel of channels)if (channel.length === 1) {
        const [resolvedValue] = channel;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStringOrNumber"])(resolvedValue)) channelValues.push(resolvedValue);
    } else if (channel.length) {
        const resolvedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$css$2d$calc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeCalc"])(channel.join(""), {
            format
        });
        channelValues.push(resolvedValue);
    }
    return channelValues;
}
/**
* extract origin color
* @param value - CSS color value
* @param [opt] - options
* @returns origin color value
*/ function extractOriginColor(value, opt = {}) {
    const { colorScheme = "normal", currentColor = "", format = "" } = opt;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) {
        value = value.toLowerCase().trim();
        if (!value) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]();
        if (!REG_FN_REL_START.test(value)) return value;
    } else return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]();
    const cacheKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCacheKey"])({
        namespace: NAMESPACE,
        name: "extractOriginColor",
        value
    }, opt);
    const cachedResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCache"])(cacheKey);
    if (cachedResult instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CacheItem"]) {
        if (cachedResult.isNull) return cachedResult;
        return cachedResult.item;
    }
    if (/currentcolor/.test(value)) if (currentColor) value = value.replace(/currentcolor/g, currentColor);
    else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, null);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]();
    }
    let colorSpace = "";
    if (REG_FN_REL_CAPT.test(value)) [, colorSpace] = value.match(REG_FN_REL_CAPT);
    opt.colorSpace = colorSpace;
    if (value.includes("light-dark(")) {
        const [, originColor = ""] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitValue"])(value.replace(new RegExp(`^${colorSpace}\\(`), "").replace(/\)$/, ""));
        const specifiedOriginColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$resolve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveColor"])(originColor, {
            colorScheme,
            format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_SPEC"]
        });
        if (specifiedOriginColor === "") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, null);
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]();
        }
        if (format === "specifiedValue") value = value.replace(originColor, specifiedOriginColor);
        else {
            const resolvedOriginColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$resolve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveColor"])(specifiedOriginColor, opt);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(resolvedOriginColor)) value = value.replace(originColor, resolvedOriginColor);
        }
    }
    if (REG_COLOR_CAPT.test(value)) {
        const [, originColor] = value.match(REG_COLOR_CAPT);
        const [, restValue] = value.split(originColor);
        if (/^[a-z]+$/.test(originColor)) {
            if (!/^transparent$/.test(originColor) && !Object.hasOwn(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAMED_COLORS"], originColor)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, null);
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]();
            }
        } else if (format === "specifiedValue") {
            const resolvedOriginColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$resolve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveColor"])(originColor, opt);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(resolvedOriginColor)) value = value.replace(originColor, resolvedOriginColor);
        }
        if (format === "specifiedValue") {
            const channelValues = resolveColorChannels((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokenize"])({
                css: restValue
            }), opt);
            if (channelValues instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, null);
                return channelValues;
            }
            const [v1, v2, v3, v4] = channelValues;
            let channelValue = "";
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStringOrNumber"])(v4)) channelValue = ` ${v1} ${v2} ${v3} / ${v4})`;
            else channelValue = ` ${channelValues.join(" ")})`;
            if (restValue !== channelValue) value = value.replace(restValue, channelValue);
        }
    } else {
        const [, restValue] = value.split(REG_FN_REL_START);
        const tokens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokenize"])({
            css: restValue
        });
        const originColor = [];
        let nest = 0;
        let tokenIndex = 0;
        for (const [type, tokenValue] of tokens){
            tokenIndex++;
            switch(type){
                case FUNC:
                case PAREN_OPEN:
                    originColor.push(tokenValue);
                    nest++;
                    break;
                case PAREN_CLOSE:
                    {
                        const lastValue = originColor[originColor.length - 1];
                        if (lastValue === " ") originColor[originColor.length - 1] = tokenValue;
                        else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(lastValue)) originColor.push(tokenValue);
                        nest--;
                        break;
                    }
                case W_SPACE:
                    {
                        const lastValue = originColor[originColor.length - 1];
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(lastValue) && !lastValue.endsWith("(") && lastValue !== " ") originColor.push(tokenValue);
                        break;
                    }
                default:
                    if (type !== COMMENT && type !== EOF) originColor.push(tokenValue);
            }
            if (nest === 0) break;
        }
        const resolvedOriginColor = resolveRelativeColor(originColor.join("").trim(), opt);
        if (resolvedOriginColor instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, null);
            return resolvedOriginColor;
        }
        const channelValues = resolveColorChannels(tokens.slice(tokenIndex), opt);
        if (channelValues instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, null);
            return channelValues;
        }
        const [v1, v2, v3, v4] = channelValues;
        let channelValue = "";
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStringOrNumber"])(v4)) channelValue = ` ${v1} ${v2} ${v3} / ${v4})`;
        else channelValue = ` ${channelValues.join(" ")})`;
        value = value.replace(restValue, `${resolvedOriginColor}${channelValue}`);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, value);
    return value;
}
/**
* resolve relative color
* @param value - CSS relative color value
* @param [opt] - options
* @returns resolved value
*/ function resolveRelativeColor(value, opt = {}) {
    const { format = "" } = opt;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) {
        if (REG_FN_VAR.test(value)) {
            if (format !== "specifiedValue") throw new SyntaxError(`Unexpected token ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FN_VAR"]} found.`);
            return value;
        } else if (!REG_FN_REL.test(value)) return value;
        value = value.toLowerCase().trim();
    } else throw new TypeError(`${value} is not a string.`);
    const cacheKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCacheKey"])({
        namespace: NAMESPACE,
        name: "resolveRelativeColor",
        value
    }, opt);
    const cachedResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCache"])(cacheKey);
    if (cachedResult instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CacheItem"]) {
        if (cachedResult.isNull) return cachedResult;
        return cachedResult.item;
    }
    const originColor = extractOriginColor(value, opt);
    if (originColor instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, null);
        return originColor;
    }
    value = originColor;
    if (format === "specifiedValue") {
        if (value.startsWith("rgba(")) value = value.replace("rgba(", "rgb(");
        else if (value.startsWith("hsla(")) value = value.replace("hsla(", "hsl(");
        return value;
    }
    const parsedComponents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$color$2d$parser$40$4$2e$1$2e$10_$40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$t_effeb5cd45da44eb6c8c04960cd886da$2f$node_modules$2f40$csstools$2f$css$2d$color$2d$parser$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["color"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseComponentValue"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokenize"])({
        css: value
    })));
    if (!parsedComponents) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, null);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]();
    }
    const { alpha: alphaComponent, channels: channelsComponent, colorNotation, syntaxFlags } = parsedComponents;
    let alpha;
    if (Number.isNaN(Number(alphaComponent))) if (syntaxFlags instanceof Set && syntaxFlags.has(KEY_NONE)) alpha = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"];
    else alpha = 0;
    else alpha = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(Number(alphaComponent), OCT);
    let v1;
    let v2;
    let v3;
    [v1, v2, v3] = channelsComponent;
    let resolvedValue;
    if (REG_CS_CIE.test(colorNotation)) {
        const hasNone = syntaxFlags instanceof Set && syntaxFlags.has(KEY_NONE);
        if (Number.isNaN(v1)) if (hasNone) v1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"];
        else v1 = 0;
        else v1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(v1, HEX);
        if (Number.isNaN(v2)) if (hasNone) v2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"];
        else v2 = 0;
        else v2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(v2, HEX);
        if (Number.isNaN(v3)) if (hasNone) v3 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"];
        else v3 = 0;
        else v3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(v3, HEX);
        if (alpha === 1) resolvedValue = `${colorNotation}(${v1} ${v2} ${v3})`;
        else resolvedValue = `${colorNotation}(${v1} ${v2} ${v3} / ${alpha})`;
    } else if (REG_CS_HSL.test(colorNotation)) {
        if (Number.isNaN(v1)) v1 = 0;
        if (Number.isNaN(v2)) v2 = 0;
        if (Number.isNaN(v3)) v3 = 0;
        let [r, g, b] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertColorToRgb"])(`${colorNotation}(${v1} ${v2} ${v3} / ${alpha})`);
        r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(r / MAX_RGB, DEC);
        g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(g / MAX_RGB, DEC);
        b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(b / MAX_RGB, DEC);
        if (alpha === 1) resolvedValue = `color(srgb ${r} ${g} ${b})`;
        else resolvedValue = `color(srgb ${r} ${g} ${b} / ${alpha})`;
    } else {
        const cs = colorNotation === "rgb" ? "srgb" : colorNotation;
        const hasNone = syntaxFlags instanceof Set && syntaxFlags.has(KEY_NONE);
        if (Number.isNaN(v1)) if (hasNone) v1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"];
        else v1 = 0;
        else v1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(v1, DEC);
        if (Number.isNaN(v2)) if (hasNone) v2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"];
        else v2 = 0;
        else v2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(v2, DEC);
        if (Number.isNaN(v3)) if (hasNone) v3 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"];
        else v3 = 0;
        else v3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundToPrecision"])(v3, DEC);
        if (alpha === 1) resolvedValue = `color(${cs} ${v1} ${v2} ${v3})`;
        else resolvedValue = `color(${cs} ${v1} ${v2} ${v3} / ${alpha})`;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, resolvedValue);
    return resolvedValue;
}
;
 //# sourceMappingURL=relative-color.js.map
}),
"[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/resolve.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolve",
    ()=>resolve,
    "resolveColor",
    ()=>resolveColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/cache.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/common.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/constant.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$relative$2d$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/relative-color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$css$2d$var$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/css-var.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$css$2d$calc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/css-calc.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
//#region src/js/resolve.ts
/**
* resolve
*/ var NAMESPACE = "resolve";
var RGB_TRANSPARENT = "rgba(0, 0, 0, 0)";
var REG_FN_CALC = new RegExp(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYN_FN_CALC"]);
var REG_FN_LIGHT_DARK = new RegExp(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYN_FN_LIGHT_DARK"]);
var REG_FN_REL = new RegExp(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYN_FN_REL"]);
var REG_FN_VAR = new RegExp(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYN_FN_VAR"]);
/**
* resolve color
* @param value - CSS color value
* @param [opt] - options
* @returns resolved color
*/ var resolveColor = (value, opt = {})=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) throw new TypeError(`${value} is not a string.`);
    value = value.trim();
    const { colorScheme = "normal", currentColor = "", format = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_COMP"], nullable = false } = opt;
    const cacheKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCacheKey"])({
        namespace: NAMESPACE,
        name: "resolve",
        value
    }, opt);
    const cachedResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCache"])(cacheKey);
    if (cachedResult instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CacheItem"]) {
        if (cachedResult.isNull) return cachedResult;
        return cachedResult.item;
    }
    if (REG_FN_VAR.test(value)) {
        if (format === "specifiedValue") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, value);
            return value;
        }
        const resolvedVar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$css$2d$var$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveVar"])(value, opt);
        if (resolvedVar instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) {
            const res = format === "hex" || format === "hexAlpha" || nullable ? resolvedVar : RGB_TRANSPARENT;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, res);
            return res;
        }
        value = resolvedVar;
    }
    if (opt.format !== format) opt.format = format;
    value = value.toLowerCase();
    if (REG_FN_LIGHT_DARK.test(value) && value.endsWith(")")) {
        const [light = "", dark = ""] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitValue"])(value.replace(REG_FN_LIGHT_DARK, "").replace(/\)$/, ""), {
            delimiter: ","
        });
        if (light && dark) {
            if (format === "specifiedValue") {
                const lightColor = resolveColor(light, opt);
                const darkColor = resolveColor(dark, opt);
                const res = lightColor && darkColor ? `light-dark(${lightColor}, ${darkColor})` : "";
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, res);
                return res;
            }
            const resolved = resolveColor(colorScheme === "dark" ? dark : light, opt);
            const res = resolved instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"] && !nullable ? RGB_TRANSPARENT : resolved;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, res);
            return res;
        }
        const invalidRes = format === "specifiedValue" ? "" : format === "hex" || format === "hexAlpha" ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]() : RGB_TRANSPARENT;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, invalidRes);
        return invalidRes;
    }
    if (REG_FN_REL.test(value)) {
        const resolvedRel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$relative$2d$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveRelativeColor"])(value, opt);
        if (format === "computedValue") {
            const res = resolvedRel instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"] && !nullable ? RGB_TRANSPARENT : resolvedRel;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, res);
            return res;
        }
        if (format === "specifiedValue") {
            const res = resolvedRel instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"] ? "" : resolvedRel;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, res);
            return res;
        }
        value = resolvedRel instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"] ? "" : resolvedRel;
    }
    if (REG_FN_CALC.test(value)) value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$css$2d$calc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cssCalc"])(value, opt);
    let cs = "";
    let r = NaN;
    let g = NaN;
    let b = NaN;
    let alpha = NaN;
    if (value === "transparent") {
        let res;
        switch(format){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_SPEC"]:
                res = value;
                break;
            case "hex":
                res = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]();
                break;
            case "hexAlpha":
                res = "#00000000";
                break;
            default:
                res = RGB_TRANSPARENT;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, res);
        return res;
    }
    if (value === "currentcolor") {
        if (format === "specifiedValue") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, value);
            return value;
        }
        if (currentColor) {
            let resolvedCurrent;
            if (currentColor.startsWith("color-mix(")) resolvedCurrent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveColorMix"])(currentColor, opt);
            else if (currentColor.startsWith("color(")) resolvedCurrent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveColorFunc"])(currentColor, opt);
            else resolvedCurrent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveColorValue"])(currentColor, opt);
            if (resolvedCurrent instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, resolvedCurrent);
                return resolvedCurrent;
            }
            [cs, r, g, b, alpha] = resolvedCurrent;
        } else {
            const res = format === "computedValue" ? RGB_TRANSPARENT : value;
            if (format === "computedValue") {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, res);
                return res;
            }
        }
    } else if (format === "specifiedValue") {
        let res = "";
        if (value.startsWith("color-mix(")) res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveColorMix"])(value, opt);
        else if (value.startsWith("color(")) {
            const [scs, rr, gg, bb, aa] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveColorFunc"])(value, opt);
            res = aa === 1 ? `color(${scs} ${rr} ${gg} ${bb})` : `color(${scs} ${rr} ${gg} ${bb} / ${aa})`;
        } else {
            const rgb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveColorValue"])(value, opt);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(rgb)) res = rgb;
            else {
                const [scs, rr, gg, bb, aa] = rgb;
                if (scs === "rgb") res = aa === 1 ? `${scs}(${rr}, ${gg}, ${bb})` : `${scs}a(${rr}, ${gg}, ${bb}, ${aa})`;
                else res = aa === 1 ? `${scs}(${rr} ${gg} ${bb})` : `${scs}(${rr} ${gg} ${bb} / ${aa})`;
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, res);
        return res;
    } else if (value.startsWith("color-mix(")) {
        if (currentColor) value = value.replace(/currentcolor/g, currentColor);
        value = value.replace(/transparent/g, RGB_TRANSPARENT);
        const resolvedMix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveColorMix"])(value, opt);
        if (resolvedMix instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, resolvedMix);
            return resolvedMix;
        }
        [cs, r, g, b, alpha] = resolvedMix;
    } else if (value.startsWith("color(")) {
        const resolvedFunc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveColorFunc"])(value, opt);
        if (resolvedFunc instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, resolvedFunc);
            return resolvedFunc;
        }
        [cs, r, g, b, alpha] = resolvedFunc;
    } else if (value) {
        const resolvedVal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveColorValue"])(value, opt);
        if (resolvedVal instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, resolvedVal);
            return resolvedVal;
        }
        [cs, r, g, b, alpha] = resolvedVal;
    }
    let finalRes = "";
    switch(format){
        case "hex":
        case "hexAlpha":
            if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b) || Number.isNaN(alpha) || format === "hex" && alpha === 0) finalRes = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]();
            else finalRes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertRgbToHex"])([
                r,
                g,
                b,
                format === "hex" ? 1 : alpha
            ]);
            break;
        default:
            if (cs === "rgb") finalRes = alpha === 1 ? `${cs}(${r}, ${g}, ${b})` : `${cs}a(${r}, ${g}, ${b}, ${alpha})`;
            else if ([
                "lab",
                "lch",
                "oklab",
                "oklch"
            ].includes(cs)) finalRes = alpha === 1 ? `${cs}(${r} ${g} ${b})` : `${cs}(${r} ${g} ${b} / ${alpha})`;
            else finalRes = alpha === 1 ? `color(${cs} ${r} ${g} ${b})` : `color(${cs} ${r} ${g} ${b} / ${alpha})`;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, finalRes);
    return finalRes;
};
/**
* resolve CSS color
* @param value - CSS color value. system colors are not supported
* @param [opt] - options
*/ var resolve = (value, opt = {})=>{
    opt.nullable = false;
    const resolvedValue = resolveColor(value, opt);
    return resolvedValue instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"] ? null : resolvedValue;
};
;
 //# sourceMappingURL=resolve.js.map
}),
"[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/css-gradient.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isGradient",
    ()=>isGradient,
    "resolveGradient",
    ()=>resolveGradient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/cache.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/common.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/constant.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$resolve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/resolve.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/util.js [app-ssr] (ecmascript)");
;
;
;
;
;
//#region src/js/css-gradient.ts
/**
* css-gradient
*/ var NAMESPACE = "css-gradient";
var DIM_ANGLE = `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NUM"]}(?:${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ANGLE"]})`;
var DIM_ANGLE_PCT = `${DIM_ANGLE}|${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PCT"]}`;
var DIM_LEN_PCT = `${`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NUM"]}(?:${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LENGTH"]})|0`}|${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PCT"]}`;
var DIM_LEN_PCT_POSI = `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NUM_POSITIVE"]}(?:${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LENGTH"]}|%)|0`;
var DIM_LEN_POSI = `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NUM_POSITIVE"]}(?:${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LENGTH"]})|0`;
var CTR = "center";
var L_R = "left|right";
var T_B = "top|bottom";
var S_E = "start|end";
var AXIS_X = `${L_R}|x-(?:${S_E})`;
var AXIS_Y = `${T_B}|y-(?:${S_E})`;
var BLOCK = `block-(?:${S_E})`;
var INLINE = `inline-(?:${S_E})`;
var POS_1 = `${CTR}|${AXIS_X}|${AXIS_Y}|${BLOCK}|${INLINE}|${DIM_LEN_PCT}`;
var POS_2 = [
    `(?:${CTR}|${AXIS_X})\\s+(?:${CTR}|${AXIS_Y})`,
    `(?:${CTR}|${AXIS_Y})\\s+(?:${CTR}|${AXIS_X})`,
    `(?:${CTR}|${AXIS_X}|${DIM_LEN_PCT})\\s+(?:${CTR}|${AXIS_Y}|${DIM_LEN_PCT})`,
    `(?:${CTR}|${BLOCK})\\s+(?:${CTR}|${INLINE})`,
    `(?:${CTR}|${INLINE})\\s+(?:${CTR}|${BLOCK})`,
    `(?:${CTR}|${S_E})\\s+(?:${CTR}|${S_E})`
].join("|");
var POS_4 = [
    `(?:${AXIS_X})\\s+(?:${DIM_LEN_PCT})\\s+(?:${AXIS_Y})\\s+(?:${DIM_LEN_PCT})`,
    `(?:${AXIS_Y})\\s+(?:${DIM_LEN_PCT})\\s+(?:${AXIS_X})\\s+(?:${DIM_LEN_PCT})`,
    `(?:${BLOCK})\\s+(?:${DIM_LEN_PCT})\\s+(?:${INLINE})\\s+(?:${DIM_LEN_PCT})`,
    `(?:${INLINE})\\s+(?:${DIM_LEN_PCT})\\s+(?:${BLOCK})\\s+(?:${DIM_LEN_PCT})`,
    `(?:${S_E})\\s+(?:${DIM_LEN_PCT})\\s+(?:${S_E})\\s+(?:${DIM_LEN_PCT})`
].join("|");
var RAD_EXTENT = "(?:clos|farth)est-(?:corner|side)";
var RAD_SIZE = [
    `${RAD_EXTENT}(?:\\s+${RAD_EXTENT})?`,
    `${DIM_LEN_POSI}`,
    `(?:${DIM_LEN_PCT_POSI})\\s+(?:${DIM_LEN_PCT_POSI})`
].join("|");
var RAD_SHAPE = "circle|ellipse";
var FROM_ANGLE = `from\\s+${DIM_ANGLE}`;
var AT_POSITION = `at\\s+(?:${POS_1}|${POS_2}|${POS_4})`;
var TO_SIDE_CORNER = `to\\s+(?:(?:${L_R})(?:\\s(?:${T_B}))?|(?:${T_B})(?:\\s(?:${L_R}))?)`;
var IN_COLOR_SPACE = `in\\s+(?:${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CS_RECT"]}|${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CS_HUE"]})`;
var LINE_SYNTAX_LINEAR = [
    `(?:${DIM_ANGLE}|${TO_SIDE_CORNER})(?:\\s+${IN_COLOR_SPACE})?`,
    `${IN_COLOR_SPACE}(?:\\s+(?:${DIM_ANGLE}|${TO_SIDE_CORNER}))?`
].join("|");
var LINE_SYNTAX_RADIAL = [
    `(?:${RAD_SHAPE})(?:\\s+(?:${RAD_SIZE}))?(?:\\s+${AT_POSITION})?(?:\\s+${IN_COLOR_SPACE})?`,
    `(?:${RAD_SIZE})(?:\\s+(?:${RAD_SHAPE}))?(?:\\s+${AT_POSITION})?(?:\\s+${IN_COLOR_SPACE})?`,
    `${AT_POSITION}(?:\\s+${IN_COLOR_SPACE})?`,
    `${IN_COLOR_SPACE}(?:\\s+${RAD_SHAPE})(?:\\s+(?:${RAD_SIZE}))?(?:\\s+${AT_POSITION})?`,
    `${IN_COLOR_SPACE}(?:\\s+${RAD_SIZE})(?:\\s+(?:${RAD_SHAPE}))?(?:\\s+${AT_POSITION})?`,
    `${IN_COLOR_SPACE}(?:\\s+${AT_POSITION})?`
].join("|");
var LINE_SYNTAX_CONIC = [
    `${FROM_ANGLE}(?:\\s+${AT_POSITION})?(?:\\s+${IN_COLOR_SPACE})?`,
    `${AT_POSITION}(?:\\s+${IN_COLOR_SPACE})?`,
    `${IN_COLOR_SPACE}(?:\\s+${FROM_ANGLE})?(?:\\s+${AT_POSITION})?`
].join("|");
var DEFAULT_LINEAR = [
    /to\s+bottom/
];
var DEFAULT_RADIAL = [
    /ellipse/,
    /farthest-corner/,
    /at\s+center/
];
var DEFAULT_CONIC = [
    /at\s+center/
];
var IS_CONIC = /^(?:repeating-)?conic-gradient$/;
var IS_LINEAR = /^(?:repeating-)?linear-gradient$/;
var IS_RADIAL = /^(?:repeating-)?radial-gradient$/;
var REG_COLOR_HINT_CONIC = new RegExp(`^(?:${DIM_ANGLE_PCT})$`);
var REG_COLOR_HINT_NON_CONIC = new RegExp(`^(?:${DIM_LEN_PCT})$`);
var REG_DIM_CONIC = new RegExp(`(?:\\s+(?:${DIM_ANGLE_PCT})){1,2}$`);
var REG_DIM_NON_CONIC = new RegExp(`(?:\\s+(?:${DIM_LEN_PCT})){1,2}$`);
var REG_GRAD = /^(?:repeating-)?(?:conic|linear|radial)-gradient\(/;
var REG_GRAD_CAPT = /^((?:repeating-)?(?:conic|linear|radial)-gradient)\(/;
var REG_LINE_CONIC = new RegExp(`^(?:${LINE_SYNTAX_CONIC})$`);
var REG_LINE_LINEAR = new RegExp(`^(?:${LINE_SYNTAX_LINEAR})$`);
var REG_LINE_RADIAL = new RegExp(`^(?:${LINE_SYNTAX_RADIAL})$`);
/**
* get gradient type
* @param value - gradient value
* @returns gradient type
*/ var getGradientType = (value)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) {
        value = value.trim();
        if (REG_GRAD.test(value)) {
            const [, type] = value.match(REG_GRAD_CAPT);
            return type;
        }
    }
    return "";
};
/**
* validate gradient line
* @param value - gradient line value
* @param type - gradient type
* @returns result
*/ var validateGradientLine = (value, type)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(type)) {
        value = value.trim();
        type = type.trim();
        let reg = null;
        let defaultValues = [];
        if (IS_LINEAR.test(type)) {
            reg = REG_LINE_LINEAR;
            defaultValues = DEFAULT_LINEAR;
        } else if (IS_RADIAL.test(type)) {
            reg = REG_LINE_RADIAL;
            defaultValues = DEFAULT_RADIAL;
        } else if (IS_CONIC.test(type)) {
            reg = REG_LINE_CONIC;
            defaultValues = DEFAULT_CONIC;
        }
        if (reg) {
            const valid = reg.test(value);
            if (valid) {
                let line = value;
                for (const defaultValue of defaultValues)line = line.replace(defaultValue, "");
                line = line.replace(/\s{2,}/g, " ").trim();
                return {
                    line,
                    valid
                };
            }
            return {
                valid,
                line: value
            };
        }
    }
    return {
        line: value,
        valid: false
    };
};
/**
* validate color stop list
* @param list
* @param type
* @param [opt]
* @returns result
*/ var validateColorStopList = (list, type, opt = {})=>{
    if (Array.isArray(list) && list.length > 1) {
        const isConic = IS_CONIC.test(type);
        const regColorHint = isConic ? REG_COLOR_HINT_CONIC : REG_COLOR_HINT_NON_CONIC;
        const regDimension = isConic ? REG_DIM_CONIC : REG_DIM_NON_CONIC;
        const valueList = [];
        let prevType = "";
        for(let i = 0; i < list.length; i++){
            const item = list[i];
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(item)) if (regColorHint.test(item)) {
                if (i === 0 || prevType === "hint") return {
                    colorStops: list,
                    valid: false
                };
                prevType = "hint";
                valueList.push(item);
            } else {
                const itemColor = item.replace(regDimension, "");
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isColor"])(itemColor, {
                    format: "specifiedValue"
                })) {
                    const resolvedColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$resolve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveColor"])(itemColor, opt);
                    prevType = "color";
                    valueList.push(item.replace(itemColor, resolvedColor));
                } else return {
                    colorStops: list,
                    valid: false
                };
            }
            else return {
                colorStops: list,
                valid: false
            };
        }
        if (prevType !== "color") return {
            colorStops: list,
            valid: false
        };
        return {
            valid: true,
            colorStops: valueList
        };
    }
    return {
        colorStops: list,
        valid: false
    };
};
/**
* parse CSS gradient
* @param value - gradient value
* @param [opt] - options
* @returns parsed result
*/ var parseGradient = (value, opt = {})=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) {
        value = value.trim();
        const cacheKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCacheKey"])({
            namespace: NAMESPACE,
            name: "parseGradient",
            value
        }, opt);
        const cachedResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCache"])(cacheKey);
        if (cachedResult instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CacheItem"]) {
            if (cachedResult.isNull) return null;
            return cachedResult.item;
        }
        const type = getGradientType(value);
        const gradValue = value.replace(REG_GRAD, "").replace(/\)$/, "");
        if (type && gradValue) {
            const [lineOrColorStop = "", ...itemList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitValue"])(gradValue, {
                delimiter: ","
            });
            const regDimension = IS_CONIC.test(type) ? REG_DIM_CONIC : REG_DIM_NON_CONIC;
            let colorStop = "";
            if (regDimension.test(lineOrColorStop)) {
                const itemColor = lineOrColorStop.replace(regDimension, "");
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isColor"])(itemColor, {
                    format: "specifiedValue"
                })) {
                    const resolvedColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$resolve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveColor"])(itemColor, opt);
                    colorStop = lineOrColorStop.replace(itemColor, resolvedColor);
                }
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isColor"])(lineOrColorStop, {
                format: "specifiedValue"
            })) colorStop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$resolve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveColor"])(lineOrColorStop, opt);
            if (colorStop) {
                itemList.unshift(colorStop);
                const { colorStops, valid } = validateColorStopList(itemList, type, opt);
                if (valid) {
                    const res = {
                        value,
                        type,
                        colorStopList: colorStops
                    };
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, res);
                    return res;
                }
            } else if (itemList.length > 1) {
                const { line: gradientLine, valid: validLine } = validateGradientLine(lineOrColorStop, type);
                const { colorStops, valid: validColorStops } = validateColorStopList(itemList, type, opt);
                if (validLine && validColorStops) {
                    const res = {
                        value,
                        type,
                        gradientLine,
                        colorStopList: colorStops
                    };
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, res);
                    return res;
                }
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, null);
        return null;
    }
    return null;
};
/**
* resolve CSS gradient
* @param value - CSS value
* @param [opt] - options
* @returns result
*/ var resolveGradient = (value, opt = {})=>{
    const { format = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_COMP"] } = opt;
    const gradient = parseGradient(value, opt);
    if (gradient) {
        const { type = "", gradientLine = "", colorStopList = [] } = gradient;
        if (type && Array.isArray(colorStopList) && colorStopList.length > 1) {
            if (gradientLine) return `${type}(${gradientLine}, ${colorStopList.join(", ")})`;
            return `${type}(${colorStopList.join(", ")})`;
        }
    }
    if (format === "specifiedValue") return "";
    return "none";
};
/**
* is CSS gradient
* @param value - CSS value
* @param [opt] - options
* @returns result
*/ var isGradient = (value, opt = {})=>{
    return parseGradient(value, opt) !== null;
};
;
 //# sourceMappingURL=css-gradient.js.map
}),
"[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/convert.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "convert",
    ()=>convert
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/cache.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/common.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/constant.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$relative$2d$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/relative-color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$resolve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/resolve.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$css$2d$var$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/css-var.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$css$2d$calc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/css-calc.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
//#region src/js/convert.ts
/**
* convert
*/ var NAMESPACE = "convert";
var REG_FN_CALC = new RegExp(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYN_FN_CALC"]);
var REG_FN_REL = new RegExp(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYN_FN_REL"]);
var REG_FN_VAR = new RegExp(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYN_FN_VAR"]);
/**
* pre process
* @param value - CSS color value
* @param [opt] - options
* @returns value
*/ var preProcess = (value, opt = {})=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]();
    value = value.trim();
    if (!value) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]();
    const cacheKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCacheKey"])({
        namespace: NAMESPACE,
        name: "preProcess",
        value
    }, opt);
    const cachedResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCache"])(cacheKey);
    if (cachedResult instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CacheItem"]) {
        if (cachedResult.isNull) return cachedResult;
        return cachedResult.item;
    }
    let res = value;
    if (REG_FN_VAR.test(value)) {
        const resolved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$css$2d$var$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveVar"])(value, opt);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(resolved)) res = resolved;
        else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, null);
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]();
        }
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(res)) {
        if (REG_FN_REL.test(res)) {
            const resolved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$relative$2d$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveRelativeColor"])(res, opt);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(resolved)) res = resolved;
            else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, null);
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]();
            }
        } else if (REG_FN_CALC.test(res)) res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$css$2d$calc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cssCalc"])(res, opt);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(res)) {
        if (res.startsWith("color-mix")) res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$resolve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveColor"])(res, {
            ...opt,
            format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAL_COMP"],
            nullable: true
        });
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, res);
    return res;
};
/**
* converter factory to reduce boilerplate
* @param name - function name for cache
* @param format - color format
* @param convertFn - conversion function
* @returns color converter function
*/ var createColorConverter = (name, format, convertFn)=>{
    const colorConverterFn = (value, opt = {})=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) throw new TypeError(`${value} is not a string.`);
        const resolved = preProcess(value, opt);
        if (resolved instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) return [
            0,
            0,
            0,
            0
        ];
        const val = resolved.toLowerCase();
        const cacheKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCacheKey"])({
            namespace: NAMESPACE,
            name,
            value: val
        }, opt);
        const cached = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCache"])(cacheKey);
        if (cached instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CacheItem"]) return cached.item;
        const result = convertFn(val, {
            ...opt,
            format
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, result);
        return result;
    };
    return colorConverterFn;
};
/**
* convert number to hex string
* @param value - numeric value
* @returns hex string: 00..ff
*/ var numberToHex = (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHexString"])(value);
/**
* convert color to hex
* @param value - CSS color value
* @param [opt] - options
* @param [opt.alpha] - enable alpha channel
* @returns #rrggbb | #rrggbbaa | null
*/ var colorToHex = (value, opt = {})=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) throw new TypeError(`${value} is not a string.`);
    const resolved = preProcess(value, opt);
    if (resolved instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) return null;
    const val = resolved.toLowerCase();
    const cacheKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCacheKey"])({
        namespace: NAMESPACE,
        name: "colorToHex",
        value: val
    }, opt);
    const cached = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCache"])(cacheKey);
    if (cached instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CacheItem"]) {
        if (cached.isNull) return null;
        return cached.item;
    }
    const hex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$resolve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveColor"])(val, {
        ...opt,
        nullable: true,
        format: opt.alpha ? "hexAlpha" : "hex"
    });
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(hex)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, hex);
        return hex;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, null);
    return null;
};
/**
* convert color to hsl
* @param value - CSS color value
* @param [opt] - options
* @returns ColorChannels - [h, s, l, alpha]
*/ var colorToHsl = createColorConverter("colorToHsl", "hsl", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertColorToHsl"]);
/**
* convert color to hwb
* @param value - CSS color value
* @param [opt] - options
* @returns ColorChannels - [h, w, b, alpha]
*/ var colorToHwb = createColorConverter("colorToHwb", "hwb", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertColorToHwb"]);
/**
* convert color to lab
* @param value - CSS color value
* @param [opt] - options
* @returns ColorChannels - [l, a, b, alpha]
*/ var colorToLab = createColorConverter("colorToLab", "lab", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertColorToLab"]);
/**
* convert color to lch
* @param value - CSS color value
* @param [opt] - options
* @returns ColorChannels - [l, c, h, alpha]
*/ var colorToLch = createColorConverter("colorToLch", "lch", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertColorToLch"]);
/**
* convert color to oklab
* @param value - CSS color value
* @param [opt] - options
* @returns ColorChannels - [l, a, b, alpha]
*/ var colorToOklab = createColorConverter("colorToOklab", "oklab", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertColorToOklab"]);
/**
* convert color to oklch
* @param value - CSS color value
* @param [opt] - options
* @returns ColorChannels - [l, c, h, alpha]
*/ var colorToOklch = createColorConverter("colorToOklch", "oklch", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertColorToOklch"]);
/**
* convert color to rgb
* @param value - CSS color value
* @param [opt] - options
* @returns ColorChannels - [r, g, b, alpha]
*/ var colorToRgb = createColorConverter("colorToRgb", "rgb", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertColorToRgb"]);
/**
* convert color to xyz
* @param value - CSS color value
* @param [opt] - options
* @returns ColorChannels - [x, y, z, alpha]
*/ var colorToXyz = (value, opt = {})=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(value)) throw new TypeError(`${value} is not a string.`);
    const resolved = preProcess(value, opt);
    if (resolved instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullObject"]) return [
        0,
        0,
        0,
        0
    ];
    const val = resolved.toLowerCase();
    const cacheKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCacheKey"])({
        namespace: NAMESPACE,
        name: "colorToXyz",
        value: val
    }, opt);
    const cached = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCache"])(cacheKey);
    if (cached instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CacheItem"]) return cached.item;
    let parsed;
    if (val.startsWith("color(")) parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseColorFunc"])(val, opt);
    else parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseColorValue"])(val, opt);
    const [, ...xyz] = parsed;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCache"])(cacheKey, xyz);
    return xyz;
};
/**
* convert color to xyz-d50
* @param value - CSS color value
* @param [opt] - options
* @returns ColorChannels - [x, y, z, alpha]
*/ var colorToXyzD50 = (value, opt = {})=>{
    opt.d50 = true;
    return colorToXyz(value, opt);
};
var convert = {
    colorToHex,
    colorToHsl,
    colorToHwb,
    colorToLab,
    colorToLch,
    colorToOklab,
    colorToOklch,
    colorToRgb,
    colorToXyz,
    colorToXyzD50,
    numberToHex
};
;
 //# sourceMappingURL=convert.js.map
}),
"[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "utils",
    ()=>utils
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$resolve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/resolve.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$css$2d$var$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/css-var.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$css$2d$calc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/css-calc.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$css$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/css-gradient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$convert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/convert.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
//#region src/index.ts
/*!
* CSS color - Resolve, parse, convert CSS color.
* @license MIT
* @copyright asamuzaK (Kazz)
* @see {@link https://github.com/asamuzaK/cssColor/blob/main/LICENSE}
*/ var utils = {
    cssCalc: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$css$2d$calc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cssCalc"],
    cssVar: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$css$2d$var$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cssVar"],
    extractDashedIdent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractDashedIdent"],
    isAbsoluteFontSize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAbsoluteFontSize"],
    isAbsoluteSizeOrLength: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAbsoluteSizeOrLength"],
    isColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isColor"],
    isGradient: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$css$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isGradient"],
    resolveGradient: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$css$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveGradient"],
    resolveLengthInPixels: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveLengthInPixels"],
    splitValue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitValue"]
};
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "convert",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$convert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convert"],
    "resolve",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$resolve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolve"],
    "utils",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["utils"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$resolve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/resolve.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$asamuzakjp$2b$css$2d$color$40$5$2e$1$2e$11$2f$node_modules$2f40$asamuzakjp$2f$css$2d$color$2f$dist$2f$esm$2f$js$2f$convert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/js/convert.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=a0fde_%40asamuzakjp_css-color_dist_esm_8d5fd47b._.js.map