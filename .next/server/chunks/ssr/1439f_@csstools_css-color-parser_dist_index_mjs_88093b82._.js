module.exports = [
"[project]/node_modules/.pnpm/@csstools+css-color-parser@4.1.10_@csstools+css-parser-algorithms@4.0.0_@csstools+css-t_effeb5cd45da44eb6c8c04960cd886da/node_modules/@csstools/css-color-parser/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ColorNotation",
    ()=>De,
    "SyntaxFlag",
    ()=>Le,
    "color",
    ()=>color,
    "colorDataFitsDisplayP3_Gamut",
    ()=>colorDataFitsDisplayP3_Gamut,
    "colorDataFitsRGB_Gamut",
    ()=>colorDataFitsRGB_Gamut,
    "serializeHSL",
    ()=>serializeHSL,
    "serializeOKLCH",
    ()=>serializeOKLCH,
    "serializeP3",
    ()=>serializeP3,
    "serializeRGB",
    ()=>serializeRGB
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@csstools+css-tokenizer@4.0.0/node_modules/@csstools/css-tokenizer/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@csstools+color-helpers@6.1.0/node_modules/@csstools/color-helpers/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@csstools+css-parser-algorithms@4.0.0_@csstools+css-tokenizer@4.0.0/node_modules/@csstools/css-parser-algorithms/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$calc$40$3$2e$3$2e$0_$40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$_4dbc5b05e8dbfe1f32044d24572a798f$2f$node_modules$2f40$csstools$2f$css$2d$calc$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@csstools+css-calc@3.3.0_@csstools+css-parser-algorithms@4.0.0_@csstools+css-tokenizer@_4dbc5b05e8dbfe1f32044d24572a798f/node_modules/@csstools/css-calc/dist/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
var De, Le;
function normalize(e, a, n, r) {
    return Math.min(Math.max(e / a, n), r);
}
function convertNaNToZero(e) {
    return [
        Number.isNaN(e[0]) ? 0 : e[0],
        Number.isNaN(e[1]) ? 0 : e[1],
        Number.isNaN(e[2]) ? 0 : e[2]
    ];
}
function colorData_to_XYZ_D50(e) {
    switch(e.colorNotation){
        case De.HEX:
        case De.RGB:
        case De.sRGB:
            return {
                ...e,
                colorNotation: De.XYZ_D50,
                channels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sRGB_to_XYZ_D50"])(convertNaNToZero(e.channels))
            };
        case De.Linear_sRGB:
            return {
                ...e,
                colorNotation: De.XYZ_D50,
                channels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lin_sRGB_to_XYZ_D50"])(convertNaNToZero(e.channels))
            };
        case De.Display_P3:
            return {
                ...e,
                colorNotation: De.XYZ_D50,
                channels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["P3_to_XYZ_D50"])(convertNaNToZero(e.channels))
            };
        case De.Linear_Display_P3:
            return {
                ...e,
                colorNotation: De.XYZ_D50,
                channels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lin_P3_to_XYZ_D50"])(convertNaNToZero(e.channels))
            };
        case De.Rec2020:
            return {
                ...e,
                colorNotation: De.XYZ_D50,
                channels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rec_2020_to_XYZ_D50"])(convertNaNToZero(e.channels))
            };
        case De.A98_RGB:
            return {
                ...e,
                colorNotation: De.XYZ_D50,
                channels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a98_RGB_to_XYZ_D50"])(convertNaNToZero(e.channels))
            };
        case De.ProPhoto_RGB:
            return {
                ...e,
                colorNotation: De.XYZ_D50,
                channels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProPhoto_RGB_to_XYZ_D50"])(convertNaNToZero(e.channels))
            };
        case De.HSL:
            return {
                ...e,
                colorNotation: De.XYZ_D50,
                channels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HSL_to_XYZ_D50"])(convertNaNToZero(e.channels))
            };
        case De.HWB:
            return {
                ...e,
                colorNotation: De.XYZ_D50,
                channels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HWB_to_XYZ_D50"])(convertNaNToZero(e.channels))
            };
        case De.Lab:
            return {
                ...e,
                colorNotation: De.XYZ_D50,
                channels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Lab_to_XYZ_D50"])(convertNaNToZero(e.channels))
            };
        case De.OKLab:
            return {
                ...e,
                colorNotation: De.XYZ_D50,
                channels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OKLab_to_XYZ_D50"])(convertNaNToZero(e.channels))
            };
        case De.LCH:
            return {
                ...e,
                colorNotation: De.XYZ_D50,
                channels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LCH_to_XYZ_D50"])(convertNaNToZero(e.channels))
            };
        case De.OKLCH:
            return {
                ...e,
                colorNotation: De.XYZ_D50,
                channels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OKLCH_to_XYZ_D50"])(convertNaNToZero(e.channels))
            };
        case De.XYZ_D50:
            return {
                ...e,
                colorNotation: De.XYZ_D50,
                channels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XYZ_D50_to_XYZ_D50"])(convertNaNToZero(e.channels))
            };
        case De.XYZ_D65:
            return {
                ...e,
                colorNotation: De.XYZ_D50,
                channels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XYZ_D65_to_XYZ_D50"])(convertNaNToZero(e.channels))
            };
        default:
            throw new Error("Unsupported color notation");
    }
}
function colorData_to_XYZ_D65(e) {
    switch(e.colorNotation){
        case De.HEX:
        case De.RGB:
        case De.sRGB:
            return {
                ...e,
                colorNotation: De.XYZ_D65,
                channels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sRGB_to_XYZ_D65"])(convertNaNToZero(e.channels))
            };
        case De.Linear_sRGB:
            return {
                ...e,
                colorNotation: De.XYZ_D65,
                channels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lin_sRGB_to_XYZ_D65"])(convertNaNToZero(e.channels))
            };
        case De.Display_P3:
            return {
                ...e,
                colorNotation: De.XYZ_D65,
                channels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["P3_to_XYZ_D65"])(convertNaNToZero(e.channels))
            };
        case De.Linear_Display_P3:
            return {
                ...e,
                colorNotation: De.XYZ_D65,
                channels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lin_P3_to_XYZ_D65"])(convertNaNToZero(e.channels))
            };
        case De.Rec2020:
            return {
                ...e,
                colorNotation: De.XYZ_D65,
                channels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rec_2020_to_XYZ_D65"])(convertNaNToZero(e.channels))
            };
        case De.A98_RGB:
            return {
                ...e,
                colorNotation: De.XYZ_D65,
                channels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a98_RGB_to_XYZ_D65"])(convertNaNToZero(e.channels))
            };
        case De.ProPhoto_RGB:
            return {
                ...e,
                colorNotation: De.XYZ_D65,
                channels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProPhoto_RGB_to_XYZ_D65"])(convertNaNToZero(e.channels))
            };
        case De.HSL:
            return {
                ...e,
                colorNotation: De.XYZ_D65,
                channels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HSL_to_XYZ_D65"])(convertNaNToZero(e.channels))
            };
        case De.HWB:
            return {
                ...e,
                colorNotation: De.XYZ_D65,
                channels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HWB_to_XYZ_D65"])(convertNaNToZero(e.channels))
            };
        case De.Lab:
            return {
                ...e,
                colorNotation: De.XYZ_D65,
                channels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Lab_to_XYZ_D65"])(convertNaNToZero(e.channels))
            };
        case De.OKLab:
            return {
                ...e,
                colorNotation: De.XYZ_D65,
                channels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OKLab_to_XYZ_D65"])(convertNaNToZero(e.channels))
            };
        case De.LCH:
            return {
                ...e,
                colorNotation: De.XYZ_D65,
                channels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LCH_to_XYZ_D65"])(convertNaNToZero(e.channels))
            };
        case De.OKLCH:
            return {
                ...e,
                colorNotation: De.XYZ_D65,
                channels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OKLCH_to_XYZ_D65"])(convertNaNToZero(e.channels))
            };
        case De.XYZ_D50:
            return {
                ...e,
                colorNotation: De.XYZ_D65,
                channels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XYZ_D50_to_XYZ_D65"])(convertNaNToZero(e.channels))
            };
        case De.XYZ_D65:
            return {
                ...e,
                colorNotation: De.XYZ_D65,
                channels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XYZ_D65_to_XYZ_D65"])(convertNaNToZero(e.channels))
            };
        default:
            throw new Error("Unsupported color notation");
    }
}
!function(e) {
    e.A98_RGB = "a98-rgb", e.Display_P3 = "display-p3", e.Linear_Display_P3 = "display-p3-linear", e.HEX = "hex", e.HSL = "hsl", e.HWB = "hwb", e.LCH = "lch", e.Lab = "lab", e.Linear_sRGB = "srgb-linear", e.OKLCH = "oklch", e.OKLab = "oklab", e.ProPhoto_RGB = "prophoto-rgb", e.RGB = "rgb", e.sRGB = "srgb", e.Rec2020 = "rec2020", e.XYZ_D50 = "xyz-d50", e.XYZ_D65 = "xyz-d65";
}(De || (De = {})), function(e) {
    e.ColorKeyword = "color-keyword", e.HasAlpha = "has-alpha", e.HasDimensionValues = "has-dimension-values", e.HasNoneKeywords = "has-none-keywords", e.HasNumberValues = "has-number-values", e.HasPercentageAlpha = "has-percentage-alpha", e.HasPercentageValues = "has-percentage-values", e.HasVariableAlpha = "has-variable-alpha", e.Hex = "hex", e.LegacyHSL = "legacy-hsl", e.LegacyRGB = "legacy-rgb", e.NamedColor = "named-color", e.RelativeColorSyntax = "relative-color-syntax", e.ColorMix = "color-mix", e.ColorMixVariadic = "color-mix-variadic", e.ContrastColor = "contrast-color", e.RelativeAlphaSyntax = "relative-alpha-syntax", e.Experimental = "experimental";
}(Le || (Le = {}));
const Ze = new Set([
    De.A98_RGB,
    De.Display_P3,
    De.Linear_Display_P3,
    De.HEX,
    De.Linear_sRGB,
    De.ProPhoto_RGB,
    De.RGB,
    De.sRGB,
    De.Rec2020,
    De.XYZ_D50,
    De.XYZ_D65
]);
function colorDataToForInterpolation(e, a) {
    const n = [
        ...e.channels
    ];
    let r = {
        ...e
    };
    return r.channels = convertPowerlessComponentsToMissingComponents(r.channels, e.colorNotation), r = convertToDestination(r, a), r.channels = carryForwardMissingComponentsForColorAndNotation(r, e.colorNotation, a, n), r;
}
function colorDataToForRelativeColorSyntax(e, a) {
    if (e.colorNotation === a) return {
        ...e
    };
    const n = [
        ...e.channels
    ];
    let r = {
        ...e
    };
    return r.channels = convertPowerlessComponentsToMissingComponents(r.channels, e.colorNotation), r = convertToDestination(r, a), r.channels = carryForwardMissingComponentsForColorAndNotation(r, e.colorNotation, a, n), r;
}
function convertToDestination(e, a) {
    if (e.colorNotation === a) return e.channels = convertNaNToZero(e.channels), e.channels = convertPowerlessComponentsToMissingComponents(e.channels, a), e;
    switch(a){
        case De.HEX:
        case De.RGB:
            {
                const a = colorData_to_XYZ_D65(e);
                e.colorNotation = De.RGB, e.channels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XYZ_D65_to_sRGB"])(a.channels), e.channels = e.channels.map((e)=>reducePrecisionOrNaN(e, 8)), e.channels = normalizeAfterColorConversion(e.channels);
                break;
            }
        case De.sRGB:
            {
                const a = colorData_to_XYZ_D65(e);
                e.colorNotation = De.sRGB, e.channels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XYZ_D65_to_sRGB"])(a.channels), e.channels = normalizeAfterColorConversion(e.channels);
                break;
            }
        case De.Linear_sRGB:
            {
                const a = colorData_to_XYZ_D65(e);
                e.colorNotation = De.Linear_sRGB, e.channels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XYZ_D65_to_lin_sRGB"])(a.channels), e.channels = normalizeAfterColorConversion(e.channels);
                break;
            }
        case De.Display_P3:
            {
                const a = colorData_to_XYZ_D65(e);
                e.colorNotation = De.Display_P3, e.channels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XYZ_D65_to_P3"])(a.channels), e.channels = normalizeAfterColorConversion(e.channels);
                break;
            }
        case De.Linear_Display_P3:
            {
                const a = colorData_to_XYZ_D65(e);
                e.colorNotation = De.Linear_Display_P3, e.channels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XYZ_D65_to_lin_P3"])(a.channels), e.channels = normalizeAfterColorConversion(e.channels);
                break;
            }
        case De.Rec2020:
            {
                const a = colorData_to_XYZ_D65(e);
                e.colorNotation = De.Rec2020, e.channels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XYZ_D65_to_rec_2020"])(a.channels), e.channels = normalizeAfterColorConversion(e.channels);
                break;
            }
        case De.ProPhoto_RGB:
            {
                const a = colorData_to_XYZ_D50(e);
                e.colorNotation = De.ProPhoto_RGB, e.channels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XYZ_D50_to_ProPhoto"])(a.channels), e.channels = normalizeAfterColorConversion(e.channels);
                break;
            }
        case De.A98_RGB:
            {
                const a = colorData_to_XYZ_D65(e);
                e.colorNotation = De.A98_RGB, e.channels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XYZ_D65_to_a98_RGB"])(a.channels), e.channels = normalizeAfterColorConversion(e.channels);
                break;
            }
        case De.HSL:
            {
                const n = colorData_to_XYZ_D65(e);
                e.colorNotation = De.HSL, e.channels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XYZ_D65_to_HSL"])(n.channels), e.channels = e.channels.map((e)=>reducePrecisionOrNaN(e, 8)), e.channels = normalizeAfterColorConversion(e.channels, 0), e.channels = convertPowerlessComponentsToMissingComponents(e.channels, a);
                break;
            }
        case De.HWB:
            {
                const n = colorData_to_XYZ_D65(e);
                e.colorNotation = De.HWB, e.channels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XYZ_D65_to_HWB"])(n.channels), e.channels = e.channels.map((e)=>reducePrecisionOrNaN(e, 8)), e.channels = normalizeAfterColorConversion(e.channels, 0), e.channels = convertPowerlessComponentsToMissingComponents(e.channels, a);
                break;
            }
        case De.Lab:
            {
                const a = colorData_to_XYZ_D50(e);
                e.colorNotation = De.Lab, e.channels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XYZ_D50_to_Lab"])(a.channels), e.channels = normalizeAfterColorConversion(e.channels);
                break;
            }
        case De.LCH:
            {
                const n = colorData_to_XYZ_D50(e);
                e.colorNotation = De.LCH, e.channels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XYZ_D50_to_LCH"])(n.channels), e.channels = normalizeAfterColorConversion(e.channels, 2), e.channels = convertPowerlessComponentsToMissingComponents(e.channels, a);
                break;
            }
        case De.OKLCH:
            {
                const n = colorData_to_XYZ_D65(e);
                e.colorNotation = De.OKLCH, e.channels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XYZ_D65_to_OKLCH"])(n.channels), e.channels = normalizeAfterColorConversion(e.channels, 2), e.channels = convertPowerlessComponentsToMissingComponents(e.channels, a);
                break;
            }
        case De.OKLab:
            {
                const a = colorData_to_XYZ_D65(e);
                e.colorNotation = De.OKLab, e.channels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XYZ_D65_to_OKLab"])(a.channels), e.channels = normalizeAfterColorConversion(e.channels);
                break;
            }
        case De.XYZ_D50:
            {
                const a = colorData_to_XYZ_D50(e);
                e.colorNotation = De.XYZ_D50, e.channels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XYZ_D50_to_XYZ_D50"])(a.channels), e.channels = normalizeAfterColorConversion(e.channels);
                break;
            }
        case De.XYZ_D65:
            {
                const a = colorData_to_XYZ_D65(e);
                e.colorNotation = De.XYZ_D65, e.channels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XYZ_D65_to_XYZ_D65"])(a.channels), e.channels = normalizeAfterColorConversion(e.channels);
                break;
            }
        default:
            throw new Error("Unsupported color notation");
    }
    return e;
}
function carryForwardMissingComponentsForColorAndNotation(e, a, n, r) {
    if (a === n) return carryForwardMissingComponents(r, [
        0,
        1,
        2
    ], [], e.channels, [
        0,
        1,
        2
    ], []);
    if (Ze.has(n) && Ze.has(a)) return carryForwardMissingComponents(r, [
        0,
        1,
        2
    ], [], e.channels, [
        0,
        1,
        2
    ], []);
    switch(n){
        case De.HSL:
            switch(a){
                case De.HWB:
                    return carryForwardMissingComponents(r, [
                        0
                    ], [
                        1,
                        2
                    ], e.channels, [
                        0
                    ], [
                        1,
                        2
                    ]);
                case De.Lab:
                case De.OKLab:
                    return carryForwardMissingComponents(r, [
                        0
                    ], [
                        1,
                        2
                    ], e.channels, [
                        2
                    ], [
                        0,
                        1
                    ]);
                case De.LCH:
                case De.OKLCH:
                    return carryForwardMissingComponents(r, [
                        0,
                        1,
                        2
                    ], [], e.channels, [
                        2,
                        1,
                        0
                    ], []);
                default:
                    return carryForwardMissingComponents(r, [], [], e.channels, [], []);
            }
        case De.HWB:
            switch(a){
                case De.HSL:
                    return carryForwardMissingComponents(r, [
                        0
                    ], [
                        1,
                        2
                    ], e.channels, [
                        0
                    ], [
                        1,
                        2
                    ]);
                case De.LCH:
                case De.OKLCH:
                    return carryForwardMissingComponents(r, [
                        2
                    ], [
                        0,
                        1
                    ], e.channels, [
                        0
                    ], [
                        1,
                        2
                    ]);
                default:
                    return carryForwardMissingComponents(r, [], [], e.channels, [], []);
            }
        case De.Lab:
        case De.OKLab:
            switch(a){
                case De.HSL:
                    return carryForwardMissingComponents(r, [
                        2
                    ], [
                        0,
                        1
                    ], e.channels, [
                        0
                    ], [
                        1,
                        2
                    ]);
                case De.Lab:
                case De.OKLab:
                    return carryForwardMissingComponents(r, [
                        0,
                        1,
                        2
                    ], [], e.channels, [
                        0,
                        1,
                        2
                    ], []);
                case De.LCH:
                case De.OKLCH:
                    return carryForwardMissingComponents(r, [
                        0
                    ], [
                        1,
                        2
                    ], e.channels, [
                        0
                    ], [
                        1,
                        2
                    ]);
                default:
                    return carryForwardMissingComponents(r, [], [], e.channels, [], []);
            }
        case De.LCH:
        case De.OKLCH:
            switch(a){
                case De.HSL:
                    return carryForwardMissingComponents(r, [
                        0,
                        1,
                        2
                    ], [], e.channels, [
                        2,
                        1,
                        0
                    ], []);
                case De.HWB:
                    return carryForwardMissingComponents(r, [
                        0
                    ], [
                        1,
                        2
                    ], e.channels, [
                        2
                    ], [
                        0,
                        1
                    ]);
                case De.Lab:
                case De.OKLab:
                    return carryForwardMissingComponents(r, [
                        0
                    ], [
                        1,
                        2
                    ], e.channels, [
                        0
                    ], [
                        1,
                        2
                    ]);
                case De.LCH:
                case De.OKLCH:
                    return carryForwardMissingComponents(r, [
                        0,
                        1,
                        2
                    ], [], e.channels, [
                        0,
                        1,
                        2
                    ], []);
                default:
                    return carryForwardMissingComponents(r, [], [], e.channels, [], []);
            }
        default:
            return carryForwardMissingComponents(r, [], [], e.channels, [], []);
    }
}
function convertPowerlessComponentsToMissingComponents(e, a) {
    const n = [
        ...e
    ];
    switch(a){
        case De.HSL:
            (Number.isNaN(n[1]) ? 0 : n[1]) <= .001 && (n[0] = Number.NaN, !Number.isNaN(n[1]) && n[1] > 0 && (n[1] = 0));
            break;
        case De.HWB:
            Math.max(0, Number.isNaN(n[1]) ? 0 : n[1]) + Math.max(0, Number.isNaN(n[2]) ? 0 : n[2]) >= 99.999 && (n[0] = Number.NaN, Math.max(0, Number.isNaN(n[1]) ? 0 : n[1]) + Math.max(0, Number.isNaN(n[2]) ? 0 : n[2]) < 100 && (Number.isNaN(n[1]) || Number.isNaN(n[2]) ? Number.isNaN(n[1]) ? Number.isNaN(n[2]) || (n[2] = 100) : n[1] = 100 : n[2] = 100 - n[1]));
            break;
        case De.LCH:
            (Number.isNaN(n[1]) ? 0 : n[1]) <= .0015 && (n[2] = Number.NaN, !Number.isNaN(n[1]) && n[1] > 0 && (n[1] = 0));
            break;
        case De.OKLCH:
            (Number.isNaN(n[1]) ? 0 : n[1]) <= 4e-6 && (n[2] = Number.NaN, !Number.isNaN(n[1]) && n[1] > 0 && (n[1] = 0));
    }
    return n;
}
function convertPowerlessComponentsToZeroValuesForDisplay(e, a) {
    const n = [
        ...e
    ];
    switch(a){
        case De.HSL:
            (Number.isNaN(n[1]) ? 0 : n[1]) <= .001 && (n[0] = Number.NaN), (reducePrecision(n[2]) <= 0 || reducePrecision(n[2]) >= 100) && (n[0] = Number.NaN, n[1] = Number.NaN);
            break;
        case De.HWB:
            Math.max(0, Number.isNaN(n[1]) ? 0 : n[1]) + Math.max(0, Number.isNaN(n[2]) ? 0 : n[2]) >= 99.999 && (n[0] = Number.NaN);
            break;
        case De.Lab:
            (reducePrecision(n[0]) <= 0 || reducePrecision(n[0]) >= 100) && (n[1] = Number.NaN, n[2] = Number.NaN);
            break;
        case De.LCH:
            (Number.isNaN(n[1]) ? 0 : n[1]) <= .0015 && (n[2] = Number.NaN), (reducePrecision(n[0]) <= 0 || reducePrecision(n[0]) >= 100) && (n[1] = Number.NaN, n[2] = Number.NaN);
            break;
        case De.OKLab:
            (reducePrecision(n[0]) <= 0 || reducePrecision(n[0]) >= 1) && (n[1] = Number.NaN, n[2] = Number.NaN);
            break;
        case De.OKLCH:
            (Number.isNaN(n[1]) ? 0 : n[1]) <= 4e-6 && (n[2] = Number.NaN), (reducePrecision(n[0]) <= 0 || reducePrecision(n[0]) >= 1) && (n[1] = Number.NaN, n[2] = Number.NaN);
    }
    return n;
}
function carryForwardMissingComponents(e, a, n, r, o, t) {
    if (a.length < 3 && e.every(Number.isNaN)) return [
        Number.NaN,
        Number.NaN,
        Number.NaN
    ];
    const l = [
        ...r
    ];
    for(let n = 0; n < a.length; n++)Number.isNaN(e[a[n]]) && (l[o[n]] = Number.NaN);
    if (n.length && n.every((a)=>Number.isNaN(e[a]))) for(let e = 0; e < t.length; e++)l[t[e]] = Number.NaN;
    return l;
}
function normalizeRelativeColorDataChannels(e) {
    const a = new Map;
    switch(e.colorNotation){
        case De.RGB:
        case De.HEX:
            a.set("r", dummyNumberToken(255 * e.channels[0])), a.set("g", dummyNumberToken(255 * e.channels[1])), a.set("b", dummyNumberToken(255 * e.channels[2])), "number" == typeof e.alpha && a.set("alpha", dummyNumberToken(e.alpha));
            break;
        case De.HSL:
            a.set("h", dummyNumberToken(e.channels[0])), a.set("s", dummyNumberToken(e.channels[1])), a.set("l", dummyNumberToken(e.channels[2])), "number" == typeof e.alpha && a.set("alpha", dummyNumberToken(e.alpha));
            break;
        case De.HWB:
            a.set("h", dummyNumberToken(e.channels[0])), a.set("w", dummyNumberToken(e.channels[1])), a.set("b", dummyNumberToken(e.channels[2])), "number" == typeof e.alpha && a.set("alpha", dummyNumberToken(e.alpha));
            break;
        case De.Lab:
        case De.OKLab:
            a.set("l", dummyNumberToken(e.channels[0])), a.set("a", dummyNumberToken(e.channels[1])), a.set("b", dummyNumberToken(e.channels[2])), "number" == typeof e.alpha && a.set("alpha", dummyNumberToken(e.alpha));
            break;
        case De.LCH:
        case De.OKLCH:
            a.set("l", dummyNumberToken(e.channels[0])), a.set("c", dummyNumberToken(e.channels[1])), a.set("h", dummyNumberToken(e.channels[2])), "number" == typeof e.alpha && a.set("alpha", dummyNumberToken(e.alpha));
            break;
        case De.sRGB:
        case De.A98_RGB:
        case De.Display_P3:
        case De.Linear_Display_P3:
        case De.Rec2020:
        case De.Linear_sRGB:
        case De.ProPhoto_RGB:
            a.set("r", dummyNumberToken(e.channels[0])), a.set("g", dummyNumberToken(e.channels[1])), a.set("b", dummyNumberToken(e.channels[2])), "number" == typeof e.alpha && a.set("alpha", dummyNumberToken(e.alpha));
            break;
        case De.XYZ_D50:
        case De.XYZ_D65:
            a.set("x", dummyNumberToken(e.channels[0])), a.set("y", dummyNumberToken(e.channels[1])), a.set("z", dummyNumberToken(e.channels[2])), "number" == typeof e.alpha && a.set("alpha", dummyNumberToken(e.alpha));
    }
    return a;
}
function noneToZeroInRelativeColorDataChannels(e) {
    const a = new Map(e);
    for (const [n, r] of e)Number.isNaN(r[4].value) && a.set(n, dummyNumberToken(0));
    return a;
}
function normalizeAfterColorConversion(e, a = -1) {
    return e = convertNaNToZero(e), e = [
        0 === a ? e[0] : normalize(e[0], 1, -2147483647, 2147483647),
        1 === a ? e[1] : normalize(e[1], 1, -2147483647, 2147483647),
        2 === a ? e[2] : normalize(e[2], 1, -2147483647, 2147483647)
    ], Number.isNaN(e[a]) || Number.isFinite(e[a]) || (e[a] = 0), e;
}
function dummyNumberToken(n) {
    return Number.isNaN(n) ? [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
        "none",
        -1,
        -1,
        {
            value: Number.NaN,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
        }
    ] : [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
        n.toString(),
        -1,
        -1,
        {
            value: n,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
        }
    ];
}
function reducePrecisionOrNaN(e, a = 7) {
    if (Number.isNaN(e)) return e;
    const n = Math.pow(10, a);
    return Math.round(e * n) / n;
}
function reducePrecision(e, a = 7) {
    if (Number.isNaN(e)) return 0;
    const n = Math.pow(10, a);
    return Math.round(e * n) / n;
}
function colorDataFitsRGB_Gamut(e) {
    const a = {
        ...e,
        channels: [
            ...e.channels
        ]
    };
    a.channels = convertPowerlessComponentsToZeroValuesForDisplay(a.channels, a.colorNotation);
    return !colorDataToForRelativeColorSyntax(a, De.RGB).channels.find((e)=>e < -1e-5 || e > 1.00001);
}
function colorDataFitsDisplayP3_Gamut(e) {
    const a = {
        ...e,
        channels: [
            ...e.channels
        ]
    };
    a.channels = convertPowerlessComponentsToZeroValuesForDisplay(a.channels, a.colorNotation);
    return !colorDataToForRelativeColorSyntax(a, De.Display_P3).channels.find((e)=>e < -1e-5 || e > 1.00001);
}
const He = /[A-Z]/g;
function toLowerCaseAZ(e) {
    return e.replace(He, (e)=>String.fromCharCode(e.charCodeAt(0) + 32));
}
function normalize_Color_ChannelValues(t, l, s) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenIdent"])(t) && "none" === toLowerCaseAZ(t[4].value)) return s.syntaxFlags.add(Le.HasNoneKeywords), [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
        "none",
        t[2],
        t[3],
        {
            value: Number.NaN,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
        }
    ];
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenPercentage"])(t)) {
        let n;
        return 3 !== l && s.syntaxFlags.add(Le.HasPercentageValues), n = 3 === l ? normalize(t[4].value, 100, 0, 1) : normalize(t[4].value, 100, -2147483647, 2147483647), [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
            n.toString(),
            t[2],
            t[3],
            {
                value: n,
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
            }
        ];
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNumber"])(t)) {
        let n;
        return 3 !== l && s.syntaxFlags.add(Le.HasNumberValues), n = 3 === l ? normalize(t[4].value, 1, 0, 1) : normalize(t[4].value, 1, -2147483647, 2147483647), [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
            n.toString(),
            t[2],
            t[3],
            {
                value: n,
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
            }
        ];
    }
    return !1;
}
const Pe = new Set([
    "srgb",
    "srgb-linear",
    "display-p3",
    "display-p3-linear",
    "a98-rgb",
    "prophoto-rgb",
    "rec2020",
    "xyz",
    "xyz-d50",
    "xyz-d65"
]);
function color$1(e, a) {
    const r = [], s = [], c = [], i = [];
    let u, h, m = !1, N = !1;
    const p = {
        colorNotation: De.sRGB,
        channels: [
            0,
            0,
            0
        ],
        alpha: 1,
        syntaxFlags: new Set([])
    };
    let b = r;
    for(let o = 0; o < e.value.length; o++){
        let v = e.value[o];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWhitespaceNode"])(v) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCommentNode"])(v)) for(; (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWhitespaceNode"])(e.value[o + 1]) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCommentNode"])(e.value[o + 1]);)o++;
        else if (b === r && r.length && (b = s), b === s && s.length && (b = c), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(v) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenDelim"])(v.value) && "/" === v.value[4].value) {
            if (b === i) return !1;
            b = i;
        } else {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunctionNode"])(v)) {
                if (b === i && "var" === toLowerCaseAZ(v.getName())) {
                    p.syntaxFlags.add(Le.HasVariableAlpha), b.push(v);
                    continue;
                }
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$calc$40$3$2e$3$2e$0_$40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$_4dbc5b05e8dbfe1f32044d24572a798f$2f$node_modules$2f40$csstools$2f$css$2d$calc$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mathFunctionNames"].has(toLowerCaseAZ(v.getName()))) return !1;
                const [[e]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$calc$40$3$2e$3$2e$0_$40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$_4dbc5b05e8dbfe1f32044d24572a798f$2f$node_modules$2f40$csstools$2f$css$2d$calc$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcFromComponentValues"])([
                    [
                        v
                    ]
                ], {
                    censorIntoStandardRepresentableValues: !0,
                    globals: h,
                    precision: -1,
                    toCanonicalUnits: !0,
                    rawPercentages: !0
                });
                if (!e || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(e) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNumeric"])(e.value)) return !1;
                Number.isNaN(e.value[4].value) && (e.value[4].value = 0), v = e;
            }
            if (b === r && 0 === r.length && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(v) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenIdent"])(v.value) && Pe.has(toLowerCaseAZ(v.value[4].value))) {
                if (m) return !1;
                m = toLowerCaseAZ(v.value[4].value), p.colorNotation = colorSpaceNameToColorNotation(m), N && (N = colorDataToForRelativeColorSyntax(N, p.colorNotation), u = normalizeRelativeColorDataChannels(N), h = noneToZeroInRelativeColorDataChannels(u));
            } else if (b === r && 0 === r.length && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(v) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenIdent"])(v.value) && "from" === toLowerCaseAZ(v.value[4].value)) {
                if (N) return !1;
                if (m) return !1;
                for(; (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWhitespaceNode"])(e.value[o + 1]) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCommentNode"])(e.value[o + 1]);)o++;
                if (o++, v = e.value[o], N = a(v), !1 === N) return !1;
                N.syntaxFlags.has(Le.Experimental) && p.syntaxFlags.add(Le.Experimental), p.syntaxFlags.add(Le.RelativeColorSyntax);
            } else {
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(v)) return !1;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenIdent"])(v.value) && u && u.has(toLowerCaseAZ(v.value[4].value))) {
                    b.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenNode"](u.get(toLowerCaseAZ(v.value[4].value))));
                    continue;
                }
                b.push(v);
            }
        }
    }
    if (!m) return !1;
    if (1 !== b.length) return !1;
    if (1 !== r.length || 1 !== s.length || 1 !== c.length) return !1;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(r[0]) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(s[0]) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(c[0])) return !1;
    if (u && !u.has("alpha")) return !1;
    const v = normalize_Color_ChannelValues(r[0].value, 0, p);
    if (!v || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNumber"])(v)) return !1;
    const f = normalize_Color_ChannelValues(s[0].value, 1, p);
    if (!f || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNumber"])(f)) return !1;
    const g = normalize_Color_ChannelValues(c[0].value, 2, p);
    if (!g || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNumber"])(g)) return !1;
    const d = [
        v,
        f,
        g
    ];
    if (1 === i.length) if (p.syntaxFlags.add(Le.HasAlpha), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(i[0])) {
        const e = normalize_Color_ChannelValues(i[0].value, 3, p);
        if (!e || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNumber"])(e)) return !1;
        d.push(e);
    } else p.alpha = i[0];
    else if (u && u.has("alpha")) {
        const e = normalize_Color_ChannelValues(u.get("alpha"), 3, p);
        if (!e || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNumber"])(e)) return !1;
        d.push(e);
    }
    return p.channels = [
        d[0][4].value,
        d[1][4].value,
        d[2][4].value
    ], 4 === d.length && (p.alpha = d[3][4].value), p;
}
function colorSpaceNameToColorNotation(e) {
    switch(e){
        case "srgb":
            return De.sRGB;
        case "srgb-linear":
            return De.Linear_sRGB;
        case "display-p3":
            return De.Display_P3;
        case "display-p3-linear":
            return De.Linear_Display_P3;
        case "a98-rgb":
            return De.A98_RGB;
        case "prophoto-rgb":
            return De.ProPhoto_RGB;
        case "rec2020":
            return De.Rec2020;
        case "xyz":
        case "xyz-d65":
            return De.XYZ_D65;
        case "xyz-d50":
            return De.XYZ_D50;
        default:
            throw new Error("Unknown color space name: " + e);
    }
}
const Fe = new Set([
    "srgb",
    "srgb-linear",
    "display-p3",
    "display-p3-linear",
    "a98-rgb",
    "prophoto-rgb",
    "rec2020",
    "lab",
    "oklab",
    "xyz",
    "xyz-d50",
    "xyz-d65"
]), Me = new Set([
    "hsl",
    "hwb",
    "lch",
    "oklch"
]), Se = new Set([
    "shorter",
    "longer",
    "increasing",
    "decreasing"
]);
function colorMix(e, a) {
    let r = null, o = null, t = null, l = !1;
    for(let c = 0; c < e.value.length; c++){
        const i = e.value[c];
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWhiteSpaceOrCommentNode"])(i)) {
            if (!(r || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(i) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenIdent"])(i.value) && "in" === toLowerCaseAZ(i.value[4].value))) return colorMixRectangular("oklab", colorMixComponents(e.value, a));
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(i) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenIdent"])(i.value)) {
                if (!r && "in" === toLowerCaseAZ(i.value[4].value)) {
                    r = i;
                    continue;
                }
                if (r && !o) {
                    o = toLowerCaseAZ(i.value[4].value);
                    continue;
                }
                if (r && o && !t && Me.has(o)) {
                    t = toLowerCaseAZ(i.value[4].value);
                    continue;
                }
                if (r && o && t && !l && "hue" === toLowerCaseAZ(i.value[4].value)) {
                    l = !0;
                    continue;
                }
                return !1;
            }
            return !(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(i) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenComma"])(i.value)) && !!o && (t || l ? !!(t && l && Me.has(o) && Se.has(t)) && colorMixPolar(o, t, colorMixComponents(e.value.slice(c + 1), a)) : Fe.has(o) ? colorMixRectangular(o, colorMixComponents(e.value.slice(c + 1), a)) : !!Me.has(o) && colorMixPolar(o, "shorter", colorMixComponents(e.value.slice(c + 1), a)));
        }
    }
    return !1;
}
function colorMixComponents(e, a) {
    const n = [];
    let o = !1, t = !1;
    for(let c = 0; c < e.length; c++){
        let i = e[c];
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWhiteSpaceOrCommentNode"])(i)) {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(i) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenComma"])(i.value)) {
                if (!o) {
                    const e = a(i);
                    if (e) {
                        o = e;
                        continue;
                    }
                }
                if (!t) {
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunctionNode"])(i) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$calc$40$3$2e$3$2e$0_$40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$_4dbc5b05e8dbfe1f32044d24572a798f$2f$node_modules$2f40$csstools$2f$css$2d$calc$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mathFunctionNames"].has(toLowerCaseAZ(i.getName()))) {
                        if ([[i]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$calc$40$3$2e$3$2e$0_$40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$_4dbc5b05e8dbfe1f32044d24572a798f$2f$node_modules$2f40$csstools$2f$css$2d$calc$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcFromComponentValues"])([
                            [
                                i
                            ]
                        ], {
                            censorIntoStandardRepresentableValues: !0,
                            precision: -1,
                            toCanonicalUnits: !0,
                            rawPercentages: !0
                        }), !i || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(i) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNumeric"])(i.value)) return !1;
                        Number.isNaN(i.value[4].value) && (i.value[4].value = 0);
                    }
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(i) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenPercentage"])(i.value) && i.value[4].value >= 0) {
                        t = i.value[4].value;
                        continue;
                    }
                }
                return !1;
            }
            if (!o) return !1;
            n.push({
                color: o,
                percentage: t
            }), o = !1, t = !1;
        }
    }
    return !!o && (n.push({
        color: o,
        percentage: t
    }), n);
}
function colorMixRectangular(e, a) {
    if (!a || !a.length) return !1;
    for (const e of a)if (e.percentage && (e.percentage < 0 || e.percentage > 100)) return !1;
    const { items: n, leftover: r } = normalizeMixPercentages(a, !0), o = 1 - r / 100;
    let t;
    switch(e){
        case "srgb":
            t = De.RGB;
            break;
        case "srgb-linear":
            t = De.Linear_sRGB;
            break;
        case "display-p3":
            t = De.Display_P3;
            break;
        case "display-p3-linear":
            t = De.Linear_Display_P3;
            break;
        case "a98-rgb":
            t = De.A98_RGB;
            break;
        case "prophoto-rgb":
            t = De.ProPhoto_RGB;
            break;
        case "rec2020":
            t = De.Rec2020;
            break;
        case "lab":
            t = De.Lab;
            break;
        case "oklab":
            t = De.OKLab;
            break;
        case "xyz-d50":
            t = De.XYZ_D50;
            break;
        case "xyz":
        case "xyz-d65":
            t = De.XYZ_D65;
            break;
        default:
            return !1;
    }
    if (1 === n.length) {
        const e = colorDataToForInterpolation(n[0].color, t);
        return e.colorNotation = t, e.syntaxFlags.add(Le.ColorMixVariadic), e.syntaxFlags.add(Le.ColorMix), "number" != typeof e.alpha ? !1 : (e.alpha = e.alpha * o, e);
    }
    for(n.reverse(); n.length >= 2;){
        const e = n.pop(), a = n.pop();
        if (!e || !a) return !1;
        const r = e.percentage + a.percentage, o = r > 0 ? a.percentage / r : .5, l = colorMixRectangularPair(t, e.color, a.color, o);
        if (!l) return !1;
        n.push({
            color: l,
            percentage: r
        });
    }
    const l = n[0]?.color;
    return !!l && "number" == typeof l.alpha && (l.alpha = l.alpha * o, a.some((e)=>e.color.syntaxFlags.has(Le.Experimental)) && l.syntaxFlags.add(Le.Experimental), 2 !== a.length && l.syntaxFlags.add(Le.ColorMixVariadic), l);
}
function colorMixRectangularPair(e, a, n, r) {
    let o = a.alpha;
    if ("number" != typeof o) return !1;
    let t = n.alpha;
    if ("number" != typeof t) return !1;
    o = Number.isNaN(o) ? t : o, t = Number.isNaN(t) ? o : t;
    const l = colorDataToForInterpolation(a, e).channels, s = colorDataToForInterpolation(n, e).channels;
    l[0] = fillInMissingComponent(l[0], s[0]), s[0] = fillInMissingComponent(s[0], l[0]), l[1] = fillInMissingComponent(l[1], s[1]), s[1] = fillInMissingComponent(s[1], l[1]), l[2] = fillInMissingComponent(l[2], s[2]), s[2] = fillInMissingComponent(s[2], l[2]), l[0] = premultiply(l[0], o), l[1] = premultiply(l[1], o), l[2] = premultiply(l[2], o), s[0] = premultiply(s[0], t), s[1] = premultiply(s[1], t), s[2] = premultiply(s[2], t);
    const c = interpolate(o, t, r);
    return {
        colorNotation: e,
        channels: [
            un_premultiply(interpolate(l[0], s[0], r), c),
            un_premultiply(interpolate(l[1], s[1], r), c),
            un_premultiply(interpolate(l[2], s[2], r), c)
        ],
        alpha: c,
        syntaxFlags: new Set([
            Le.ColorMix
        ])
    };
}
function colorMixPolar(e, a, n) {
    if (!n || !n.length) return !1;
    for (const e of n)if (e.percentage && (e.percentage < 0 || e.percentage > 100)) return !1;
    const { items: r, leftover: o } = normalizeMixPercentages(n, !0), t = 1 - o / 100;
    let l;
    switch(e){
        case "hsl":
            l = De.HSL;
            break;
        case "hwb":
            l = De.HWB;
            break;
        case "lch":
            l = De.LCH;
            break;
        case "oklch":
            l = De.OKLCH;
            break;
        default:
            return !1;
    }
    if (1 === r.length) {
        const e = colorDataToForInterpolation(r[0].color, l);
        return e.colorNotation = l, e.syntaxFlags.add(Le.ColorMixVariadic), e.syntaxFlags.add(Le.ColorMix), "number" != typeof e.alpha ? !1 : (e.alpha = e.alpha * t, e);
    }
    for(r.reverse(); r.length >= 2;){
        const e = r.pop(), n = r.pop();
        if (!e || !n) return !1;
        const o = e.percentage + n.percentage, t = o > 0 ? n.percentage / o : .5, s = colorMixPolarPair(l, a, e.color, n.color, t);
        if (!s) return !1;
        r.push({
            color: s,
            percentage: o
        });
    }
    const s = r[0]?.color;
    return !!s && "number" == typeof s.alpha && (s.alpha = s.alpha * t, n.some((e)=>e.color.syntaxFlags.has(Le.Experimental)) && s.syntaxFlags.add(Le.Experimental), 2 !== n.length && s.syntaxFlags.add(Le.ColorMixVariadic), s);
}
function colorMixPolarPair(e, a, n, r, o) {
    let t = 0, l = 0, s = 0, c = 0, i = 0, u = 0, h = n.alpha;
    if ("number" != typeof h) return !1;
    let m = r.alpha;
    if ("number" != typeof m) return !1;
    h = Number.isNaN(h) ? m : h, m = Number.isNaN(m) ? h : m;
    const N = colorDataToForInterpolation(n, e).channels, p = colorDataToForInterpolation(r, e).channels;
    switch(e){
        case De.HSL:
        case De.HWB:
            t = N[0], l = p[0], s = N[1], c = p[1], i = N[2], u = p[2];
            break;
        case De.LCH:
        case De.OKLCH:
            s = N[0], c = p[0], i = N[1], u = p[1], t = N[2], l = p[2];
    }
    if (s = fillInMissingComponent(s, c), c = fillInMissingComponent(c, s), i = fillInMissingComponent(i, u), u = fillInMissingComponent(u, i), t = fillInMissingComponent(t, l), l = fillInMissingComponent(l, t), Number.isNaN(t) && Number.isNaN(l)) ;
    else {
        Number.isNaN(t) ? t = 0 : Number.isNaN(l) && (l = 0);
        const e = l - t;
        switch(a){
            case "shorter":
                e > 180 ? t += 360 : e < -180 && (l += 360);
                break;
            case "longer":
                -180 < e && e < 180 && (e > 0 ? t += 360 : l += 360);
                break;
            case "increasing":
                e < 0 && (l += 360);
                break;
            case "decreasing":
                e > 0 && (t += 360);
                break;
            default:
                throw new Error("Unknown hue interpolation method");
        }
    }
    s = premultiply(s, h), i = premultiply(i, h), c = premultiply(c, m), u = premultiply(u, m);
    let b = [
        0,
        0,
        0
    ];
    const v = interpolate(h, m, o);
    switch(e){
        case De.HSL:
        case De.HWB:
            b = [
                interpolate(t, l, o),
                un_premultiply(interpolate(s, c, o), v),
                un_premultiply(interpolate(i, u, o), v)
            ];
            break;
        case De.LCH:
        case De.OKLCH:
            b = [
                un_premultiply(interpolate(s, c, o), v),
                un_premultiply(interpolate(i, u, o), v),
                interpolate(t, l, o)
            ];
    }
    return {
        colorNotation: e,
        channels: b,
        alpha: v,
        syntaxFlags: new Set([
            Le.ColorMix
        ])
    };
}
function fillInMissingComponent(e, a) {
    return Number.isNaN(e) ? a : e;
}
function interpolate(e, a, n) {
    return e * (1 - n) + a * n;
}
function premultiply(e, a) {
    return Number.isNaN(a) ? e : Number.isNaN(e) ? Number.NaN : e * a;
}
function un_premultiply(e, a) {
    return 0 === a || Number.isNaN(a) ? e : Number.isNaN(e) ? Number.NaN : e / a;
}
function normalizeMixPercentages(e, a = !1) {
    let n = 0, r = 0;
    for (const a of e)a.percentage && (n += a.percentage), !1 === a.percentage && r++;
    n = Math.min(100, n);
    for (const a of e)!1 === a.percentage && (a.percentage = (100 - n) / r);
    const o = e.slice();
    let t = 0;
    for (const e of o)t += e.percentage;
    if (t > 100 || t > 0 && a) for (const e of o)e.percentage = e.percentage * (100 / t);
    let l = 0;
    return t < 100 && (l = 100 - t), {
        items: o,
        leftover: l
    };
}
function hex(e) {
    const a = toLowerCaseAZ(e[4].value);
    if (a.match(/[^a-f0-9]/)) return !1;
    const n = {
        colorNotation: De.HEX,
        channels: [
            0,
            0,
            0
        ],
        alpha: 1,
        syntaxFlags: new Set([
            Le.Hex
        ])
    }, r = a.length;
    if (3 === r) {
        const e = a[0], r = a[1], o = a[2];
        return n.channels = [
            parseInt(e + e, 16) / 255,
            parseInt(r + r, 16) / 255,
            parseInt(o + o, 16) / 255
        ], n;
    }
    if (6 === r) {
        const e = a[0] + a[1], r = a[2] + a[3], o = a[4] + a[5];
        return n.channels = [
            parseInt(e, 16) / 255,
            parseInt(r, 16) / 255,
            parseInt(o, 16) / 255
        ], n;
    }
    if (4 === r) {
        const e = a[0], r = a[1], o = a[2], t = a[3];
        return n.channels = [
            parseInt(e + e, 16) / 255,
            parseInt(r + r, 16) / 255,
            parseInt(o + o, 16) / 255
        ], n.alpha = parseInt(t + t, 16) / 255, n.syntaxFlags.add(Le.HasAlpha), n;
    }
    if (8 === r) {
        const e = a[0] + a[1], r = a[2] + a[3], o = a[4] + a[5], t = a[6] + a[7];
        return n.channels = [
            parseInt(e, 16) / 255,
            parseInt(r, 16) / 255,
            parseInt(o, 16) / 255
        ], n.alpha = parseInt(t, 16) / 255, n.syntaxFlags.add(Le.HasAlpha), n;
    }
    return !1;
}
function normalizeHue(n) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNumber"])(n)) return Number.isNaN(n[4].value) || Number.isFinite(n[4].value) || (n[4].value = 0), n[4].value = n[4].value % 360, n[4].value < 0 && (n[4].value += 360), n[1] = n[4].value.toString(), n;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenDimension"])(n)) {
        let r = n[4].value;
        switch(toLowerCaseAZ(n[4].unit)){
            case "deg":
                break;
            case "rad":
                r = 180 * n[4].value / Math.PI;
                break;
            case "grad":
                r = .9 * n[4].value;
                break;
            case "turn":
                r = 360 * n[4].value;
                break;
            default:
                return !1;
        }
        return Number.isNaN(n[4].value) || Number.isFinite(n[4].value) || (n[4].value = 0), r %= 360, r < 0 && (r += 360), [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
            r.toString(),
            n[2],
            n[3],
            {
                value: r,
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
            }
        ];
    }
    return !1;
}
function normalize_legacy_HSL_ChannelValues(n, t, l) {
    if (0 === t) {
        const e = normalizeHue(n);
        return !1 !== e && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenDimension"])(n) && l.syntaxFlags.add(Le.HasDimensionValues), e);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenPercentage"])(n)) {
        let r;
        return 3 === t ? l.syntaxFlags.add(Le.HasPercentageAlpha) : l.syntaxFlags.add(Le.HasPercentageValues), r = 3 === t ? normalize(n[4].value, 100, 0, 1) : normalize(n[4].value, 1, 0, 100), [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
            r.toString(),
            n[2],
            n[3],
            {
                value: r,
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
            }
        ];
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNumber"])(n)) {
        if (3 !== t) return !1;
        let r;
        return r = normalize(n[4].value, 1, 0, 3 === t ? 1 : 100), [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
            r.toString(),
            n[2],
            n[3],
            {
                value: r,
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
            }
        ];
    }
    return !1;
}
function normalize_modern_HSL_ChannelValues(t, l, s) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenIdent"])(t) && "none" === toLowerCaseAZ(t[4].value)) return s.syntaxFlags.add(Le.HasNoneKeywords), [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
        "none",
        t[2],
        t[3],
        {
            value: Number.NaN,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
        }
    ];
    if (0 === l) {
        const e = normalizeHue(t);
        return !1 !== e && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenDimension"])(t) && s.syntaxFlags.add(Le.HasDimensionValues), e);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenPercentage"])(t)) {
        let n;
        return 3 === l ? s.syntaxFlags.add(Le.HasPercentageAlpha) : s.syntaxFlags.add(Le.HasPercentageValues), n = 3 === l ? normalize(t[4].value, 100, 0, 1) : normalize(t[4].value, 1, 1 === l ? 0 : -2147483647, 2147483647), [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
            n.toString(),
            t[2],
            t[3],
            {
                value: n,
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
            }
        ];
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNumber"])(t)) {
        let n;
        return 3 !== l && s.syntaxFlags.add(Le.HasNumberValues), n = 3 === l ? normalize(t[4].value, 1, 0, 1) : normalize(t[4].value, 1, 1 === l ? 0 : -2147483647, 2147483647), [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
            n.toString(),
            t[2],
            t[3],
            {
                value: n,
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
            }
        ];
    }
    return !1;
}
function threeChannelLegacySyntax(e, a, n, r) {
    const t = [], c = [], i = [], u = [], h = {
        colorNotation: n,
        channels: [
            0,
            0,
            0
        ],
        alpha: 1,
        syntaxFlags: new Set(r)
    };
    let m = t;
    for(let a = 0; a < e.value.length; a++){
        let n = e.value[a];
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWhitespaceNode"])(n) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCommentNode"])(n)) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(n) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenComma"])(n.value)) {
                if (m === t) {
                    m = c;
                    continue;
                }
                if (m === c) {
                    m = i;
                    continue;
                }
                if (m === i) {
                    m = u;
                    continue;
                }
                if (m === u) return !1;
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunctionNode"])(n)) {
                if (m === u && "var" === n.getName().toLowerCase()) {
                    h.syntaxFlags.add(Le.HasVariableAlpha), m.push(n);
                    continue;
                }
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$calc$40$3$2e$3$2e$0_$40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$_4dbc5b05e8dbfe1f32044d24572a798f$2f$node_modules$2f40$csstools$2f$css$2d$calc$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mathFunctionNames"].has(n.getName().toLowerCase())) return !1;
                const [[e]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$calc$40$3$2e$3$2e$0_$40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$_4dbc5b05e8dbfe1f32044d24572a798f$2f$node_modules$2f40$csstools$2f$css$2d$calc$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcFromComponentValues"])([
                    [
                        n
                    ]
                ], {
                    censorIntoStandardRepresentableValues: !0,
                    precision: -1,
                    toCanonicalUnits: !0,
                    rawPercentages: !0
                });
                if (!e || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(e) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNumeric"])(e.value)) return !1;
                Number.isNaN(e.value[4].value) && (e.value[4].value = 0), n = e;
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(n)) return !1;
            m.push(n);
        }
    }
    if (1 !== m.length) return !1;
    if (1 !== t.length || 1 !== c.length || 1 !== i.length) return !1;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(t[0]) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(c[0]) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(i[0])) return !1;
    const N = a(t[0].value, 0, h);
    if (!N || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNumber"])(N)) return !1;
    const p = a(c[0].value, 1, h);
    if (!p || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNumber"])(p)) return !1;
    const b = a(i[0].value, 2, h);
    if (!b || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNumber"])(b)) return !1;
    const v = [
        N,
        p,
        b
    ];
    if (1 === u.length) if (h.syntaxFlags.add(Le.HasAlpha), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(u[0])) {
        const e = a(u[0].value, 3, h);
        if (!e || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNumber"])(e)) return !1;
        v.push(e);
    } else h.alpha = u[0];
    return h.channels = [
        v[0][4].value,
        v[1][4].value,
        v[2][4].value
    ], 4 === v.length && (h.alpha = v[3][4].value), h;
}
function threeChannelSpaceSeparated(e, a, r, s, c) {
    const i = [], u = [], h = [], m = [];
    let N, p, b = !1;
    const v = {
        colorNotation: r,
        channels: [
            0,
            0,
            0
        ],
        alpha: 1,
        syntaxFlags: new Set(s)
    };
    let f = i;
    for(let a = 0; a < e.value.length; a++){
        let o = e.value[a];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWhitespaceNode"])(o) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCommentNode"])(o)) for(; (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWhitespaceNode"])(e.value[a + 1]) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCommentNode"])(e.value[a + 1]);)a++;
        else if (f === i && i.length && (f = u), f === u && u.length && (f = h), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(o) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenDelim"])(o.value) && "/" === o.value[4].value) {
            if (f === m) return !1;
            f = m;
        } else {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunctionNode"])(o)) {
                if (f === m && "var" === o.getName().toLowerCase()) {
                    v.syntaxFlags.add(Le.HasVariableAlpha), f.push(o);
                    continue;
                }
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$calc$40$3$2e$3$2e$0_$40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$_4dbc5b05e8dbfe1f32044d24572a798f$2f$node_modules$2f40$csstools$2f$css$2d$calc$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mathFunctionNames"].has(o.getName().toLowerCase())) return !1;
                const [[e]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$calc$40$3$2e$3$2e$0_$40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$_4dbc5b05e8dbfe1f32044d24572a798f$2f$node_modules$2f40$csstools$2f$css$2d$calc$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcFromComponentValues"])([
                    [
                        o
                    ]
                ], {
                    censorIntoStandardRepresentableValues: !0,
                    globals: p,
                    precision: -1,
                    toCanonicalUnits: !0,
                    rawPercentages: !0
                });
                if (!e || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(e) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNumeric"])(e.value)) return !1;
                Number.isNaN(e.value[4].value) && (e.value[4].value = 0), o = e;
            }
            if (f === i && 0 === i.length && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(o) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenIdent"])(o.value) && "from" === o.value[4].value.toLowerCase()) {
                if (b) return !1;
                for(; (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWhitespaceNode"])(e.value[a + 1]) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCommentNode"])(e.value[a + 1]);)a++;
                if (a++, o = e.value[a], b = c(o), !1 === b) return !1;
                b.syntaxFlags.has(Le.Experimental) && v.syntaxFlags.add(Le.Experimental), v.syntaxFlags.add(Le.RelativeColorSyntax), b = colorDataToForRelativeColorSyntax(b, r), N = normalizeRelativeColorDataChannels(b), p = noneToZeroInRelativeColorDataChannels(N);
            } else {
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(o)) return !1;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenIdent"])(o.value) && N) {
                    const e = o.value[4].value.toLowerCase();
                    if (N.has(e)) {
                        f.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenNode"](N.get(e)));
                        continue;
                    }
                }
                f.push(o);
            }
        }
    }
    if (1 !== f.length) return !1;
    if (1 !== i.length || 1 !== u.length || 1 !== h.length) return !1;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(i[0]) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(u[0]) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(h[0])) return !1;
    if (N && !N.has("alpha")) return !1;
    const g = a(i[0].value, 0, v);
    if (!g || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNumber"])(g)) return !1;
    const d = a(u[0].value, 1, v);
    if (!d || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNumber"])(d)) return !1;
    const y = a(h[0].value, 2, v);
    if (!y || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNumber"])(y)) return !1;
    const _ = [
        g,
        d,
        y
    ];
    if (1 === m.length) if (v.syntaxFlags.add(Le.HasAlpha), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(m[0])) {
        const e = a(m[0].value, 3, v);
        if (!e || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNumber"])(e)) return !1;
        _.push(e);
    } else v.alpha = m[0];
    else if (N && N.has("alpha")) {
        const e = a(N.get("alpha"), 3, v);
        if (!e || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNumber"])(e)) return !1;
        _.push(e);
    }
    return v.channels = [
        _[0][4].value,
        _[1][4].value,
        _[2][4].value
    ], 4 === _.length && (v.alpha = _[3][4].value), v;
}
function hsl(e, a) {
    if (e.value.some((e)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(e) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenComma"])(e.value))) {
        const a = hslCommaSeparated(e);
        if (!1 !== a) return a;
    }
    {
        const n = hslSpaceSeparated(e, a);
        if (!1 !== n) return n;
    }
    return !1;
}
function hslCommaSeparated(e) {
    return threeChannelLegacySyntax(e, normalize_legacy_HSL_ChannelValues, De.HSL, [
        Le.LegacyHSL
    ]);
}
function hslSpaceSeparated(e, a) {
    return threeChannelSpaceSeparated(e, normalize_modern_HSL_ChannelValues, De.HSL, [], a);
}
function normalize_HWB_ChannelValues(t, l, s) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenIdent"])(t) && "none" === toLowerCaseAZ(t[4].value)) return s.syntaxFlags.add(Le.HasNoneKeywords), [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
        "none",
        t[2],
        t[3],
        {
            value: Number.NaN,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
        }
    ];
    if (0 === l) {
        const e = normalizeHue(t);
        return !1 !== e && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenDimension"])(t) && s.syntaxFlags.add(Le.HasDimensionValues), e);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenPercentage"])(t)) {
        let n;
        return 3 === l ? s.syntaxFlags.add(Le.HasPercentageAlpha) : s.syntaxFlags.add(Le.HasPercentageValues), n = 3 === l ? normalize(t[4].value, 100, 0, 1) : normalize(t[4].value, 1, -2147483647, 2147483647), [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
            n.toString(),
            t[2],
            t[3],
            {
                value: n,
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
            }
        ];
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNumber"])(t)) {
        let n;
        return 3 !== l && s.syntaxFlags.add(Le.HasNumberValues), n = 3 === l ? normalize(t[4].value, 1, 0, 1) : normalize(t[4].value, 1, -2147483647, 2147483647), [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
            n.toString(),
            t[2],
            t[3],
            {
                value: n,
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
            }
        ];
    }
    return !1;
}
function normalize_Lab_ChannelValues(t, l, s) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenIdent"])(t) && "none" === toLowerCaseAZ(t[4].value)) return s.syntaxFlags.add(Le.HasNoneKeywords), [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
        "none",
        t[2],
        t[3],
        {
            value: Number.NaN,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
        }
    ];
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenPercentage"])(t)) {
        let n;
        return 3 !== l && s.syntaxFlags.add(Le.HasPercentageValues), n = 1 === l || 2 === l ? normalize(t[4].value, .8, -2147483647, 2147483647) : 3 === l ? normalize(t[4].value, 100, 0, 1) : normalize(t[4].value, 1, 0, 100), [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
            n.toString(),
            t[2],
            t[3],
            {
                value: n,
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
            }
        ];
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNumber"])(t)) {
        let n;
        return 3 !== l && s.syntaxFlags.add(Le.HasNumberValues), n = 1 === l || 2 === l ? normalize(t[4].value, 1, -2147483647, 2147483647) : normalize(t[4].value, 1, 0, 3 === l ? 1 : 100), [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
            n.toString(),
            t[2],
            t[3],
            {
                value: n,
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
            }
        ];
    }
    return !1;
}
function lab(e, a) {
    return threeChannelSpaceSeparated(e, normalize_Lab_ChannelValues, De.Lab, [], a);
}
function normalize_LCH_ChannelValues(t, l, s) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenIdent"])(t) && "none" === toLowerCaseAZ(t[4].value)) return s.syntaxFlags.add(Le.HasNoneKeywords), [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
        "none",
        t[2],
        t[3],
        {
            value: Number.NaN,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
        }
    ];
    if (2 === l) {
        const e = normalizeHue(t);
        return !1 !== e && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenDimension"])(t) && s.syntaxFlags.add(Le.HasDimensionValues), e);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenPercentage"])(t)) {
        let n;
        return 3 !== l && s.syntaxFlags.add(Le.HasPercentageValues), n = 1 === l ? normalize(t[4].value, 100 / 150, 0, 2147483647) : 3 === l ? normalize(t[4].value, 100, 0, 1) : normalize(t[4].value, 1, 0, 100), [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
            n.toString(),
            t[2],
            t[3],
            {
                value: n,
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
            }
        ];
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNumber"])(t)) {
        let n;
        return 3 !== l && s.syntaxFlags.add(Le.HasNumberValues), n = normalize(t[4].value, 1, 0, 1 === l ? 2147483647 : 3 === l ? 1 : 100), [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
            n.toString(),
            t[2],
            t[3],
            {
                value: n,
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
            }
        ];
    }
    return !1;
}
function lch(e, a) {
    return threeChannelSpaceSeparated(e, normalize_LCH_ChannelValues, De.LCH, [], a);
}
const ze = new Map;
for (const [e, a] of Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["namedColors"]))ze.set(e, a);
function namedColor(e) {
    const a = ze.get(toLowerCaseAZ(e));
    return !!a && {
        colorNotation: De.RGB,
        channels: [
            a[0] / 255,
            a[1] / 255,
            a[2] / 255
        ],
        alpha: 1,
        syntaxFlags: new Set([
            Le.ColorKeyword,
            Le.NamedColor
        ])
    };
}
function normalize_OKLab_ChannelValues(t, l, s) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenIdent"])(t) && "none" === toLowerCaseAZ(t[4].value)) return s.syntaxFlags.add(Le.HasNoneKeywords), [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
        "none",
        t[2],
        t[3],
        {
            value: Number.NaN,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
        }
    ];
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenPercentage"])(t)) {
        let n;
        return 3 !== l && s.syntaxFlags.add(Le.HasPercentageValues), n = 1 === l || 2 === l ? normalize(t[4].value, 250, -2147483647, 2147483647) : normalize(t[4].value, 100, 0, 1), [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
            n.toString(),
            t[2],
            t[3],
            {
                value: n,
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
            }
        ];
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNumber"])(t)) {
        let n;
        return 3 !== l && s.syntaxFlags.add(Le.HasNumberValues), n = 1 === l || 2 === l ? normalize(t[4].value, 1, -2147483647, 2147483647) : normalize(t[4].value, 1, 0, 1), [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
            n.toString(),
            t[2],
            t[3],
            {
                value: n,
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
            }
        ];
    }
    return !1;
}
function oklab(e, a) {
    return threeChannelSpaceSeparated(e, normalize_OKLab_ChannelValues, De.OKLab, [], a);
}
function normalize_OKLCH_ChannelValues(t, l, s) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenIdent"])(t) && "none" === toLowerCaseAZ(t[4].value)) return s.syntaxFlags.add(Le.HasNoneKeywords), [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
        "none",
        t[2],
        t[3],
        {
            value: Number.NaN,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
        }
    ];
    if (2 === l) {
        const e = normalizeHue(t);
        return !1 !== e && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenDimension"])(t) && s.syntaxFlags.add(Le.HasDimensionValues), e);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenPercentage"])(t)) {
        let n;
        return 3 !== l && s.syntaxFlags.add(Le.HasPercentageValues), n = 1 === l ? normalize(t[4].value, 250, 0, 2147483647) : normalize(t[4].value, 100, 0, 1), [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
            n.toString(),
            t[2],
            t[3],
            {
                value: n,
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
            }
        ];
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNumber"])(t)) {
        let n;
        return 3 !== l && s.syntaxFlags.add(Le.HasNumberValues), n = normalize(t[4].value, 1, 0, 1 === l ? 2147483647 : 1), [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
            n.toString(),
            t[2],
            t[3],
            {
                value: n,
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
            }
        ];
    }
    return !1;
}
function oklch(e, a) {
    return threeChannelSpaceSeparated(e, normalize_OKLCH_ChannelValues, De.OKLCH, [], a);
}
function normalize_legacy_sRGB_ChannelValues(n, t, l) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenPercentage"])(n)) {
        3 === t ? l.syntaxFlags.add(Le.HasPercentageAlpha) : l.syntaxFlags.add(Le.HasPercentageValues);
        const r = normalize(n[4].value, 100, 0, 1);
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
            r.toString(),
            n[2],
            n[3],
            {
                value: r,
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
            }
        ];
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNumber"])(n)) {
        let r;
        return 3 !== t && l.syntaxFlags.add(Le.HasNumberValues), r = normalize(n[4].value, 3 === t ? 1 : 255, 0, 1), [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
            r.toString(),
            n[2],
            n[3],
            {
                value: r,
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
            }
        ];
    }
    return !1;
}
function normalize_modern_sRGB_ChannelValues(t, l, s) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenIdent"])(t) && "none" === t[4].value.toLowerCase()) return s.syntaxFlags.add(Le.HasNoneKeywords), [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
        "none",
        t[2],
        t[3],
        {
            value: Number.NaN,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
        }
    ];
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenPercentage"])(t)) {
        let n;
        return 3 !== l && s.syntaxFlags.add(Le.HasPercentageValues), n = 3 === l ? normalize(t[4].value, 100, 0, 1) : normalize(t[4].value, 100, -2147483647, 2147483647), [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
            n.toString(),
            t[2],
            t[3],
            {
                value: n,
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
            }
        ];
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNumber"])(t)) {
        let n;
        return 3 !== l && s.syntaxFlags.add(Le.HasNumberValues), n = 3 === l ? normalize(t[4].value, 1, 0, 1) : normalize(t[4].value, 255, -2147483647, 2147483647), [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
            n.toString(),
            t[2],
            t[3],
            {
                value: n,
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
            }
        ];
    }
    return !1;
}
function rgb(e, a) {
    if (e.value.some((e)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(e) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenComma"])(e.value))) {
        const a = rgbCommaSeparated(e);
        if (!1 !== a) return (!a.syntaxFlags.has(Le.HasNumberValues) || !a.syntaxFlags.has(Le.HasPercentageValues)) && a;
    } else {
        const n = rgbSpaceSeparated(e, a);
        if (!1 !== n) return n;
    }
    return !1;
}
function rgbCommaSeparated(e) {
    return threeChannelLegacySyntax(e, normalize_legacy_sRGB_ChannelValues, De.RGB, [
        Le.LegacyRGB
    ]);
}
function rgbSpaceSeparated(e, a) {
    return threeChannelSpaceSeparated(e, normalize_modern_sRGB_ChannelValues, De.RGB, [], a);
}
function XYZ_D65_to_sRGB_Gamut(e) {
    const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XYZ_D65_to_sRGB"])(e);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inGamut"])(a)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clip"])(a);
    let n = e;
    return n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XYZ_D65_to_OKLCH"])(n), n[0] < 1e-6 && (n = [
        0,
        0,
        0
    ]), n[0] > .999999 && (n = [
        1,
        0,
        0
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gam_sRGB"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapGamutRayTrace"])(n, oklch_to_lin_srgb, lin_srgb_to_oklch));
}
function oklch_to_lin_srgb(e) {
    return e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OKLCH_to_OKLab"])(e), e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OKLab_to_XYZ"])(e), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XYZ_to_lin_sRGB"])(e);
}
function lin_srgb_to_oklch(e) {
    return e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lin_sRGB_to_XYZ"])(e), e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XYZ_to_OKLab"])(e), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OKLab_to_OKLCH"])(e);
}
function contrastColor(e, a) {
    let n = !1;
    for(let r = 0; r < e.value.length; r++){
        const o = e.value[r];
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWhitespaceNode"])(o) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCommentNode"])(o) && (n || (n = a(o), !n))) return !1;
    }
    if (!n) return !1;
    n.channels = convertNaNToZero(n.channels), n.channels = XYZ_D65_to_sRGB_Gamut(colorData_to_XYZ_D65(n).channels), n.colorNotation = De.sRGB;
    const r = {
        colorNotation: De.RGB,
        channels: [
            0,
            0,
            0
        ],
        alpha: 1,
        syntaxFlags: new Set([
            Le.ContrastColor,
            Le.Experimental
        ])
    }, o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contrast_ratio_wcag_2_1"])(n.channels, [
        1,
        1,
        1
    ]), t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contrast_ratio_wcag_2_1"])(n.channels, [
        0,
        0,
        0
    ]);
    return r.channels = o > t ? [
        1,
        1,
        1
    ] : [
        0,
        0,
        0
    ], r;
}
function alpha(e, a) {
    let r, s, c = !1, i = !1, u = !1;
    const h = {
        colorNotation: De.sRGB,
        channels: [
            0,
            0,
            0
        ],
        alpha: 1,
        syntaxFlags: new Set([])
    };
    for(let m = 0; m < e.value.length; m++){
        let N = e.value[m];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWhitespaceNode"])(N) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCommentNode"])(N)) for(; (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWhitespaceNode"])(e.value[m + 1]) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCommentNode"])(e.value[m + 1]);)m++;
        else if (u && !c && !i && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(N) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenDelim"])(N.value) && "/" === N.value[4].value) c = !0;
        else {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunctionNode"])(N) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$calc$40$3$2e$3$2e$0_$40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$_4dbc5b05e8dbfe1f32044d24572a798f$2f$node_modules$2f40$csstools$2f$css$2d$calc$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mathFunctionNames"].has(toLowerCaseAZ(N.getName()))) {
                const [[e]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$calc$40$3$2e$3$2e$0_$40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$_4dbc5b05e8dbfe1f32044d24572a798f$2f$node_modules$2f40$csstools$2f$css$2d$calc$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcFromComponentValues"])([
                    [
                        N
                    ]
                ], {
                    censorIntoStandardRepresentableValues: !0,
                    globals: s,
                    precision: -1,
                    toCanonicalUnits: !0,
                    rawPercentages: !0
                });
                if (!e || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(e) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNumeric"])(e.value)) return !1;
                Number.isNaN(e.value[4].value) && (e.value[4].value = 0), N = e;
            }
            if (c || i || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(N) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenIdent"])(N.value) || "from" !== toLowerCaseAZ(N.value[4].value)) {
                if (!c) return !1;
                if (i) return !1;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(N)) {
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenIdent"])(N.value) && "alpha" === toLowerCaseAZ(N.value[4].value) && r && r.has("alpha")) {
                        h.alpha = r.get("alpha")[4].value, i = !0;
                        continue;
                    }
                    const e = normalize_Color_ChannelValues(N.value, 3, h);
                    if (!e || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNumber"])(e)) return !1;
                    h.alpha = e[4].value, i = !0;
                    continue;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunctionNode"])(N)) {
                    const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replaceComponentValues"])([
                        [
                            N
                        ]
                    ], (e)=>{
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(e) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenIdent"])(e.value) && "alpha" === toLowerCaseAZ(e.value[4].value) && r && r.has("alpha")) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenNode"](r.get("alpha"));
                    });
                    h.alpha = e[0][0], i = !0;
                    continue;
                }
                return !1;
            }
            if (u) return !1;
            for(; (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWhitespaceNode"])(e.value[m + 1]) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCommentNode"])(e.value[m + 1]);)m++;
            if (m++, N = e.value[m], u = a(N), !1 === u) return !1;
            r = normalizeRelativeColorDataChannels(u), s = noneToZeroInRelativeColorDataChannels(r), h.syntaxFlags = new Set(u.syntaxFlags), h.syntaxFlags.add(Le.RelativeAlphaSyntax), h.channels = [
                ...u.channels
            ], h.colorNotation = u.colorNotation, h.alpha = u.alpha;
        }
    }
    return !!r && h;
}
function XYZ_D65_to_P3_Gamut(e) {
    const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XYZ_D65_to_P3"])(e);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inGamut"])(a)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clip"])(a);
    let n = e;
    return n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XYZ_D65_to_OKLCH"])(n), n[0] < 1e-6 && (n = [
        0,
        0,
        0
    ]), n[0] > .999999 && (n = [
        1,
        0,
        0
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gam_P3"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapGamutRayTrace"])(n, oklch_to_lin_p3, lin_p3_to_oklch));
}
function oklch_to_lin_p3(e) {
    return e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OKLCH_to_OKLab"])(e), e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OKLab_to_XYZ"])(e), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XYZ_to_lin_P3"])(e);
}
function lin_p3_to_oklch(e) {
    return e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lin_P3_to_XYZ"])(e), e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XYZ_to_OKLab"])(e), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OKLab_to_OKLCH"])(e);
}
function toPrecision(e, a = 7) {
    e = +e, a = +a;
    const n = (Math.floor(Math.abs(e)) + "").length;
    if (a > n) return +e.toFixed(a - n);
    {
        const r = 10 ** (n - a);
        return Math.round(e / r) * r;
    }
}
function serializeWithAlpha(n, r, o, t) {
    const l = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].CloseParen,
        ")",
        -1,
        -1,
        void 0
    ];
    if ("number" == typeof n.alpha) {
        const s = Math.min(1, Math.max(0, toPrecision(Number.isNaN(n.alpha) ? 0 : n.alpha)));
        return 1 === toPrecision(s, 4) ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FunctionNode"](r, l, t) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FunctionNode"](r, l, [
            ...t,
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WhitespaceNode"]([
                o
            ]),
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenNode"]([
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Delim,
                "/",
                -1,
                -1,
                {
                    value: "/"
                }
            ]),
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WhitespaceNode"]([
                o
            ]),
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenNode"]([
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
                toPrecision(s, 4).toString(),
                -1,
                -1,
                {
                    value: n.alpha,
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Integer
                }
            ])
        ]);
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FunctionNode"](r, l, [
        ...t,
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WhitespaceNode"]([
            o
        ]),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenNode"]([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Delim,
            "/",
            -1,
            -1,
            {
                value: "/"
            }
        ]),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WhitespaceNode"]([
            o
        ]),
        n.alpha
    ]);
}
function serializeP3(n, r = !0) {
    n.channels = convertPowerlessComponentsToZeroValuesForDisplay(n.channels, n.colorNotation);
    let o = n.channels.map((e)=>Number.isNaN(e) ? 0 : e);
    r ? o = XYZ_D65_to_P3_Gamut(colorData_to_XYZ_D65(n).channels) : n.colorNotation !== De.Display_P3 && (o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XYZ_D65_to_P3"])(colorData_to_XYZ_D65(n).channels));
    const t = r ? Math.min(1, Math.max(0, toPrecision(o[0], 6))) : toPrecision(o[0], 6), l = r ? Math.min(1, Math.max(0, toPrecision(o[1], 6))) : toPrecision(o[1], 6), s = r ? Math.min(1, Math.max(0, toPrecision(o[2], 6))) : toPrecision(o[2], 6), c = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Function,
        "color(",
        -1,
        -1,
        {
            value: "color"
        }
    ], i = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Whitespace,
        " ",
        -1,
        -1,
        void 0
    ];
    return serializeWithAlpha(n, c, i, [
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenNode"]([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Ident,
            "display-p3",
            -1,
            -1,
            {
                value: "display-p3"
            }
        ]),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WhitespaceNode"]([
            i
        ]),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenNode"]([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
            t.toString(),
            -1,
            -1,
            {
                value: o[0],
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
            }
        ]),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WhitespaceNode"]([
            i
        ]),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenNode"]([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
            l.toString(),
            -1,
            -1,
            {
                value: o[1],
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
            }
        ]),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WhitespaceNode"]([
            i
        ]),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenNode"]([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
            s.toString(),
            -1,
            -1,
            {
                value: o[2],
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
            }
        ])
    ]);
}
function serializeRGB(n, r = !0) {
    let o;
    n.channels = convertPowerlessComponentsToZeroValuesForDisplay(n.channels, n.colorNotation), o = r ? XYZ_D65_to_sRGB_Gamut(colorData_to_XYZ_D65(n).channels) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XYZ_D65_to_sRGB"])(colorData_to_XYZ_D65(n).channels);
    const t = Math.min(255, Math.max(0, Math.round(255 * toPrecision(o[0])))), l = Math.min(255, Math.max(0, Math.round(255 * toPrecision(o[1])))), s = Math.min(255, Math.max(0, Math.round(255 * toPrecision(o[2])))), c = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].CloseParen,
        ")",
        -1,
        -1,
        void 0
    ], i = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Whitespace,
        " ",
        -1,
        -1,
        void 0
    ], u = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Comma,
        ",",
        -1,
        -1,
        void 0
    ], h = [
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenNode"]([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
            t.toString(),
            -1,
            -1,
            {
                value: Math.min(255, 255 * Math.max(0, o[0])),
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Integer
            }
        ]),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenNode"](u),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WhitespaceNode"]([
            i
        ]),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenNode"]([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
            l.toString(),
            -1,
            -1,
            {
                value: Math.min(255, 255 * Math.max(0, o[1])),
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Integer
            }
        ]),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenNode"](u),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WhitespaceNode"]([
            i
        ]),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenNode"]([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
            s.toString(),
            -1,
            -1,
            {
                value: Math.min(255, 255 * Math.max(0, o[2])),
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Integer
            }
        ])
    ];
    if ("number" == typeof n.alpha) {
        const r = Math.min(1, Math.max(0, toPrecision(Number.isNaN(n.alpha) ? 0 : n.alpha)));
        return 1 === toPrecision(r, 4) ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FunctionNode"]([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Function,
            "rgb(",
            -1,
            -1,
            {
                value: "rgb"
            }
        ], c, h) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FunctionNode"]([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Function,
            "rgba(",
            -1,
            -1,
            {
                value: "rgba"
            }
        ], c, [
            ...h,
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenNode"](u),
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WhitespaceNode"]([
                i
            ]),
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenNode"]([
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
                toPrecision(r, 4).toString(),
                -1,
                -1,
                {
                    value: n.alpha,
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
                }
            ])
        ]);
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FunctionNode"]([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Function,
        "rgba(",
        -1,
        -1,
        {
            value: "rgba"
        }
    ], c, [
        ...h,
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenNode"](u),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WhitespaceNode"]([
            i
        ]),
        n.alpha
    ]);
}
function serializeHSL(n, r = !0) {
    let o;
    n.channels = convertPowerlessComponentsToZeroValuesForDisplay(n.channels, n.colorNotation), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XYZ_D65_to_HSL"])(r ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sRGB_to_XYZ_D65"])(XYZ_D65_to_sRGB_Gamut(colorData_to_XYZ_D65(n).channels)) : colorData_to_XYZ_D65(n).channels), o = o.map((e)=>Number.isNaN(e) ? 0 : e);
    const t = Math.min(360, Math.max(0, Math.round(toPrecision(o[0])))) % 360, l = Math.min(100, Math.max(0, Math.round(toPrecision(o[1])))), s = Math.min(100, Math.max(0, Math.round(toPrecision(o[2])))), c = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].CloseParen,
        ")",
        -1,
        -1,
        void 0
    ], i = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Whitespace,
        " ",
        -1,
        -1,
        void 0
    ], u = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Comma,
        ",",
        -1,
        -1,
        void 0
    ], h = [
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenNode"]([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
            t.toString(),
            -1,
            -1,
            {
                value: o[0],
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Integer
            }
        ]),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenNode"](u),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WhitespaceNode"]([
            i
        ]),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenNode"]([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Percentage,
            l.toString() + "%",
            -1,
            -1,
            {
                value: o[1]
            }
        ]),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenNode"](u),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WhitespaceNode"]([
            i
        ]),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenNode"]([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Percentage,
            s.toString() + "%",
            -1,
            -1,
            {
                value: o[2]
            }
        ])
    ];
    if ("number" == typeof n.alpha) {
        const r = Math.min(1, Math.max(0, toPrecision(Number.isNaN(n.alpha) ? 0 : n.alpha)));
        return 1 === toPrecision(r, 4) ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FunctionNode"]([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Function,
            "hsl(",
            -1,
            -1,
            {
                value: "hsl"
            }
        ], c, h) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FunctionNode"]([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Function,
            "hsla(",
            -1,
            -1,
            {
                value: "hsla"
            }
        ], c, [
            ...h,
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenNode"](u),
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WhitespaceNode"]([
                i
            ]),
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenNode"]([
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
                toPrecision(r, 4).toString(),
                -1,
                -1,
                {
                    value: n.alpha,
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
                }
            ])
        ]);
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FunctionNode"]([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Function,
        "hsla(",
        -1,
        -1,
        {
            value: "hsla"
        }
    ], c, [
        ...h,
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenNode"](u),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WhitespaceNode"]([
            i
        ]),
        n.alpha
    ]);
}
function serializeOKLCH(n) {
    n.channels = convertPowerlessComponentsToZeroValuesForDisplay(n.channels, n.colorNotation);
    let r = n.channels.map((e)=>Number.isNaN(e) ? 0 : e);
    n.colorNotation !== De.OKLCH && (r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$color$2d$helpers$40$6$2e$1$2e$0$2f$node_modules$2f40$csstools$2f$color$2d$helpers$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XYZ_D65_to_OKLCH"])(colorData_to_XYZ_D65(n).channels));
    const o = toPrecision(r[0], 6), t = toPrecision(r[1], 6), l = toPrecision(r[2], 6), s = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Function,
        "oklch(",
        -1,
        -1,
        {
            value: "oklch"
        }
    ], c = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Whitespace,
        " ",
        -1,
        -1,
        void 0
    ];
    return serializeWithAlpha(n, s, c, [
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenNode"]([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
            o.toString(),
            -1,
            -1,
            {
                value: r[0],
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
            }
        ]),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WhitespaceNode"]([
            c
        ]),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenNode"]([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
            t.toString(),
            -1,
            -1,
            {
                value: r[1],
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
            }
        ]),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WhitespaceNode"]([
            c
        ]),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenNode"]([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenType"].Number,
            l.toString(),
            -1,
            -1,
            {
                value: r[2],
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberType"].Number
            }
        ])
    ]);
}
function color(e) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunctionNode"])(e)) {
        switch(toLowerCaseAZ(e.getName())){
            case "rgb":
            case "rgba":
                return rgb(e, color);
            case "hsl":
            case "hsla":
                return hsl(e, color);
            case "hwb":
                return a = color, threeChannelSpaceSeparated(e, normalize_HWB_ChannelValues, De.HWB, [], a);
            case "lab":
                return lab(e, color);
            case "lch":
                return lch(e, color);
            case "oklab":
                return oklab(e, color);
            case "oklch":
                return oklch(e, color);
            case "color":
                return color$1(e, color);
            case "color-mix":
                return colorMix(e, color);
            case "contrast-color":
                return contrastColor(e, color);
            case "alpha":
                return alpha(e, color);
        }
    }
    var a;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$parser$2d$algorithms$40$4$2e$0$2e$0_$40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$parser$2d$algorithms$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenNode"])(e)) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenHash"])(e.value)) return hex(e.value);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$csstools$2b$css$2d$tokenizer$40$4$2e$0$2e$0$2f$node_modules$2f40$csstools$2f$css$2d$tokenizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTokenIdent"])(e.value)) {
            const a = namedColor(e.value[4].value);
            return !1 !== a ? a : "transparent" === toLowerCaseAZ(e.value[4].value) && {
                colorNotation: De.RGB,
                channels: [
                    0,
                    0,
                    0
                ],
                alpha: 0,
                syntaxFlags: new Set([
                    Le.ColorKeyword
                ])
            };
        }
    }
    return !1;
}
;
}),
];

//# sourceMappingURL=1439f_%40csstools_css-color-parser_dist_index_mjs_88093b82._.js.map