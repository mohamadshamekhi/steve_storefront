module.exports = [
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/utils/strings.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Forked from https://github.com/jsdom/jsdom/blob/main/lib/jsdom/living/helpers/strings.js
/**
 * Converts a string to ASCII lowercase.
 *
 * @see https://infra.spec.whatwg.org/#ascii-lowercase
 * @param {string} s - The string to convert.
 * @returns {string} The converted string.
 */ function asciiLowercase(s) {
    if (!/[^\x00-\x7f]/.test(s)) {
        return s.toLowerCase();
    }
    const len = s.length;
    const out = new Array(len);
    for(let i = 0; i < len; i++){
        const code = s.charCodeAt(i);
        // If the character is between 'A' (65) and 'Z' (90), convert using bitwise OR with 32
        out[i] = code >= 65 && code <= 90 ? String.fromCharCode(code | 32) : s[i];
    }
    return out.join("");
}
module.exports = {
    asciiLowercase
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/utils/propertyDescriptors.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
// Constants
const { AST_TYPES } = parsers;
/**
 * Creates a generic property descriptor for a given property. Such descriptors are used whenever we don't have a
 * specific handler in `./properties/*.js`. They perform some basic logic that works as a fallback, and is correct for
 * simple properties, but properties with more complex grammars will need their own handlers.
 *
 * @param {string} property - The canonical CSS property name (e.g. "backdrop-filter", not "backdropFilter").
 * @param {object} opts - The options object.
 * @param {boolean} opts.caseSensitive - True if value is case-sensitive, false otherwise.
 * @param {object} [opts.dimensionTypes={}] - An object containing information about the dimension types used by this
 * property, if any. Keys are a type of dimension, which determines which serializer to use, and values are the
 * information used by the serializer to serialize a parsed value.
 * @param {object} [opts.functionTypes={}] - An object containing information about the function types used by this
 * property, if any. Keys are a type of function, which determines which function to use; values are ignored.
 * @returns {object} The property descriptor object.
 */ function createGenericPropertyDescriptor(property, { caseSensitive, dimensionTypes = {}, functionTypes = {} }) {
    return {
        set (v) {
            const value = parsers.prepareValue(v);
            if (parsers.hasVarFunc(value)) {
                this._setProperty(property, value);
            } else {
                const parsedValue = parsers.parsePropertyValue(property, v, {
                    caseSensitive
                });
                const priority = this._priorities.get(property) ?? "";
                if (Array.isArray(parsedValue)) {
                    if (parsedValue.length === 1) {
                        const { angle: angleType, dimension: dimensionType, length: lengthType, number: numberType, percentage: percentageType } = dimensionTypes;
                        const { color: colorType, image: imageType, paint: paintType } = functionTypes;
                        const [{ name, type, value: itemValue }] = parsedValue;
                        switch(type){
                            case AST_TYPES.CALC:
                                {
                                    this._setProperty(property, `${name}(${itemValue})`, priority);
                                    break;
                                }
                            case AST_TYPES.DIMENSION:
                                {
                                    let val;
                                    if (dimensionType && lengthType) {
                                        val = parsers.serializeLength(parsedValue, lengthType);
                                        if (!val) {
                                            val = parsers.serializeDimension(parsedValue, dimensionType);
                                        }
                                    } else if (lengthType) {
                                        val = parsers.serializeLength(parsedValue, lengthType);
                                    } else {
                                        val = parsers.serializeDimension(parsedValue, dimensionType);
                                    }
                                    this._setProperty(property, val, priority);
                                    break;
                                }
                            case AST_TYPES.HASH:
                                {
                                    this._setProperty(property, parsers.serializeColor(parsedValue), priority);
                                    break;
                                }
                            case AST_TYPES.NUMBER:
                                {
                                    let val;
                                    if (numberType) {
                                        val = parsers.serializeNumber(parsedValue, numberType);
                                    } else if (angleType) {
                                        val = parsers.serializeAngle(parsedValue, angleType);
                                    } else if (lengthType) {
                                        val = parsers.serializeLength(parsedValue, lengthType);
                                    } else if (percentageType) {
                                        val = parsers.serializePercentage(parsedValue, percentageType);
                                    }
                                    this._setProperty(property, val, priority);
                                    break;
                                }
                            case AST_TYPES.GLOBAL_KEYWORD:
                            case AST_TYPES.IDENTIFIER:
                                {
                                    this._setProperty(property, name, priority);
                                    break;
                                }
                            case AST_TYPES.PERCENTAGE:
                                {
                                    let numericType;
                                    if (percentageType) {
                                        numericType = percentageType;
                                    } else if (dimensionType) {
                                        numericType = dimensionType;
                                    } else if (angleType) {
                                        numericType = angleType;
                                    } else if (lengthType) {
                                        numericType = lengthType;
                                    }
                                    if (numericType) {
                                        this._setProperty(property, parsers.resolveNumericValue(parsedValue, numericType), priority);
                                    }
                                    break;
                                }
                            case AST_TYPES.STRING:
                                {
                                    this._setProperty(property, parsers.serializeString(parsedValue), priority);
                                    break;
                                }
                            case AST_TYPES.URL:
                                {
                                    this._setProperty(property, parsers.serializeURL(parsedValue), priority);
                                    break;
                                }
                            case AST_TYPES.FUNCTION:
                            default:
                                {
                                    if (colorType || paintType) {
                                        this._setProperty(property, parsers.serializeColor(parsedValue), priority);
                                    } else if (imageType) {
                                        this._setProperty(property, parsers.serializeGradient(parsedValue), priority);
                                    } else {
                                        this._setProperty(property, value, priority);
                                    }
                                }
                        }
                    } else {
                        // Set the prepared value for lists containing multiple values.
                        this._setProperty(property, value, priority);
                    }
                } else if (typeof parsedValue === "string") {
                    this._setProperty(property, parsedValue, priority);
                }
            }
        },
        get () {
            return this.getPropertyValue(property);
        },
        enumerable: true,
        configurable: true
    };
}
module.exports = {
    createGenericPropertyDescriptor
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { resolve: resolveColor, utils: { cssCalc, resolveGradient, splitValue } } = __turbopack_context__.r("[project]/node_modules/.pnpm/@asamuzakjp+css-color@5.1.11/node_modules/@asamuzakjp/css-color/dist/esm/index.js [app-ssr] (ecmascript)");
const { next: syntaxes } = __turbopack_context__.r("[project]/node_modules/.pnpm/@csstools+css-syntax-patches-for-csstree@1.1.7_css-tree@3.2.1/node_modules/@csstools/css-syntax-patches-for-csstree/dist/index.json (json)");
const csstree = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/index.cjs [app-ssr] (ecmascript)");
const { LRUCache } = __turbopack_context__.r("[project]/node_modules/.pnpm/lru-cache@11.5.2/node_modules/lru-cache/dist/commonjs/node/index.min.js [app-ssr] (ecmascript)");
const propertyDefinitions = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/generated/propertyDefinitions.js [app-ssr] (ecmascript)");
const { asciiLowercase } = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/utils/strings.js [app-ssr] (ecmascript)");
// Constants
const CALC_FUNC_NAMES = "(?:a?(?:cos|sin|tan)|abs|atan2|calc|clamp|exp|hypot|log|max|min|mod|pow|rem|round|sign|sqrt)";
// CSS global keywords
// @see https://drafts.csswg.org/css-cascade-5/#defaulting-keywords
const GLOBAL_KEYS = new Set([
    "initial",
    "inherit",
    "unset",
    "revert",
    "revert-layer"
]);
// System colors
// @see https://drafts.csswg.org/css-color/#css-system-colors
// @see https://drafts.csswg.org/css-color/#deprecated-system-colors
const SYS_COLORS = new Set([
    "accentcolor",
    "accentcolortext",
    "activeborder",
    "activecaption",
    "activetext",
    "appworkspace",
    "background",
    "buttonborder",
    "buttonface",
    "buttonhighlight",
    "buttonshadow",
    "buttontext",
    "canvas",
    "canvastext",
    "captiontext",
    "field",
    "fieldtext",
    "graytext",
    "highlight",
    "highlighttext",
    "inactiveborder",
    "inactivecaption",
    "inactivecaptiontext",
    "infobackground",
    "infotext",
    "linktext",
    "mark",
    "marktext",
    "menu",
    "menutext",
    "scrollbar",
    "selecteditem",
    "selecteditemtext",
    "threeddarkshadow",
    "threedface",
    "threedhighlight",
    "threedlightshadow",
    "threedshadow",
    "visitedtext",
    "window",
    "windowframe",
    "windowtext"
]);
// AST node types
const AST_TYPES = Object.freeze({
    CALC: "Calc",
    DIMENSION: "Dimension",
    FUNCTION: "Function",
    GLOBAL_KEYWORD: "GlobalKeyword",
    HASH: "Hash",
    IDENTIFIER: "Identifier",
    NUMBER: "Number",
    PERCENTAGE: "Percentage",
    STRING: "String",
    URL: "Url"
});
// Regular expressions
const calcRegEx = new RegExp(`^${CALC_FUNC_NAMES}\\(`);
const calcContainedRegEx = new RegExp(`(?<=[*/\\s(])${CALC_FUNC_NAMES}\\(`);
const calcNameRegEx = new RegExp(`^${CALC_FUNC_NAMES}$`);
const varRegEx = /^var\(/;
const varContainedRegEx = /(?<=[*/\s(])var\(/;
// Patched css-tree
const cssTree = csstree.fork(syntaxes);
// Instance of the LRU Cache. Stores up to 4096 items.
const lruCache = new LRUCache({
    max: 4096
});
/**
 * Prepares a stringified value.
 *
 * @param {string|number|null|undefined} value - The value to prepare.
 * @returns {string} The prepared value.
 */ function prepareValue(value) {
    // `null` is converted to an empty string.
    // @see https://webidl.spec.whatwg.org/#LegacyNullToEmptyString
    if (value === null) {
        return "";
    }
    return `${value}`.trim();
}
/**
 * Checks if the value is a global keyword.
 *
 * @param {string} val - The value to check.
 * @returns {boolean} True if the value is a global keyword, false otherwise.
 */ function isGlobalKeyword(val) {
    return GLOBAL_KEYS.has(asciiLowercase(val));
}
/**
 * Checks if the value starts with or contains a CSS var() function.
 *
 * @param {string} val - The value to check.
 * @returns {boolean} True if the value contains a var() function, false otherwise.
 */ function hasVarFunc(val) {
    return varRegEx.test(val) || varContainedRegEx.test(val);
}
/**
 * Checks if the value starts with or contains CSS calc() or math functions.
 *
 * @param {string} val - The value to check.
 * @returns {boolean} True if the value contains calc() or math functions, false otherwise.
 */ function hasCalcFunc(val) {
    return calcRegEx.test(val) || calcContainedRegEx.test(val);
}
/**
 * Parses a CSS string into an AST.
 *
 * @param {string} val - The CSS string to parse.
 * @param {object} opt - The options for parsing.
 * @returns {object} The AST.
 */ function parseCSS(val, opt) {
    return cssTree.parse(prepareValue(val), opt);
}
/**
 * Checks if the value is a valid property value.
 * Returns false for custom properties or values containing var().
 *
 * @param {string} prop - The property name.
 * @param {string} val - The property value.
 * @returns {boolean} True if the value is valid, false otherwise.
 */ function isValidPropertyValue(prop, val) {
    if (!propertyDefinitions.has(prop)) {
        return false;
    }
    val = prepareValue(val);
    if (val === "") {
        return true;
    }
    const cacheKey = `isValidPropertyValue_${prop}_${val}`;
    const cachedValue = lruCache.get(cacheKey);
    if (typeof cachedValue === "boolean") {
        return cachedValue;
    }
    let result;
    try {
        const ast = parseCSS(val, {
            context: "value"
        });
        const { error, matched } = cssTree.lexer.matchProperty(prop, ast);
        result = error === null && matched !== null;
    } catch  {
        result = false;
    }
    lruCache.set(cacheKey, result);
    return result;
}
/**
 * Resolves CSS math functions.
 *
 * @param {string} val - The value to resolve.
 * @param {object} [opt={ format: "specifiedValue" }] - The options for resolving.
 * @returns {string|undefined} The resolved value.
 */ function resolveCalc(val, opt = {
    format: "specifiedValue"
}) {
    val = prepareValue(val);
    if (val === "" || hasVarFunc(val) || !hasCalcFunc(val)) {
        return val;
    }
    const cacheKey = `resolveCalc_${val}`;
    const cachedValue = lruCache.get(cacheKey);
    if (typeof cachedValue === "string") {
        return cachedValue;
    }
    const ast = parseCSS(val, {
        context: "value"
    });
    if (!ast?.children) {
        return;
    }
    const values = [];
    for (const item of ast.children){
        const { type: itemType, name: itemName, value: itemValue } = item;
        if (itemType === AST_TYPES.FUNCTION) {
            const value = cssTree.generate(item).replace(/\)(?!\)|\s|,)/g, ") ").trim();
            if (calcNameRegEx.test(itemName)) {
                const newValue = cssCalc(value, opt);
                values.push(newValue);
            } else {
                values.push(value);
            }
        } else if (itemType === AST_TYPES.STRING) {
            values.push(`"${itemValue}"`);
        } else {
            values.push(itemName ?? itemValue);
        }
    }
    const resolvedValue = values.join(" ");
    lruCache.set(cacheKey, resolvedValue);
    return resolvedValue;
}
/**
 * Parses a property value.
 * Returns a string or an array of parsed objects.
 *
 * @param {string} prop - The property name.
 * @param {string} val - The property value.
 * @param {object} [opt={}] - The options for parsing.
 * @returns {string|Array<object>|undefined} The parsed value.
 */ function parsePropertyValue(prop, val, opt = {}) {
    if (!propertyDefinitions.has(prop)) {
        return;
    }
    const { caseSensitive } = opt;
    val = prepareValue(val);
    if (val === "" || hasVarFunc(val)) {
        return val;
    } else if (hasCalcFunc(val)) {
        const calculatedValue = resolveCalc(val, {
            format: "specifiedValue"
        });
        if (typeof calculatedValue !== "string") {
            return;
        }
        val = calculatedValue;
    }
    const cacheKey = `parsePropertyValue_${prop}_${val}_${caseSensitive}`;
    const cachedValue = lruCache.get(cacheKey);
    if (cachedValue === false) {
        return;
    } else if (cachedValue !== undefined) {
        return cachedValue;
    }
    let parsedValue;
    const lowerCasedValue = asciiLowercase(val);
    if (GLOBAL_KEYS.has(lowerCasedValue)) {
        parsedValue = [
            {
                type: AST_TYPES.GLOBAL_KEYWORD,
                name: lowerCasedValue
            }
        ];
    } else {
        try {
            const ast = parseCSS(val, {
                context: "value"
            });
            const { error, matched } = cssTree.lexer.matchProperty(prop, ast);
            if (error || !matched) {
                parsedValue = false;
            } else {
                const items = ast.children;
                const itemCount = items.size;
                const values = [];
                for (const item of items){
                    const { children, name, type, value, unit } = item;
                    switch(type){
                        case AST_TYPES.DIMENSION:
                            {
                                values.push({
                                    type,
                                    value,
                                    unit: asciiLowercase(unit)
                                });
                                break;
                            }
                        case AST_TYPES.FUNCTION:
                            {
                                const raw = itemCount === 1 ? val : cssTree.generate(item).replace(/\)(?!\)|\s|,)/g, ") ");
                                // Remove "${name}(" from the start and ")" from the end
                                const itemValue = raw.trim().slice(name.length + 1, -1);
                                if (name === "calc") {
                                    if (children.size === 1) {
                                        const child = children.first;
                                        if (child.type === AST_TYPES.NUMBER) {
                                            values.push({
                                                type: AST_TYPES.CALC,
                                                name,
                                                isNumber: true,
                                                value: `${parseFloat(child.value)}`
                                            });
                                        } else {
                                            values.push({
                                                type: AST_TYPES.CALC,
                                                name,
                                                isNumber: false,
                                                value: asciiLowercase(itemValue)
                                            });
                                        }
                                    } else {
                                        values.push({
                                            type: AST_TYPES.CALC,
                                            name,
                                            isNumber: false,
                                            value: asciiLowercase(itemValue)
                                        });
                                    }
                                } else {
                                    values.push({
                                        type,
                                        name,
                                        value: caseSensitive ? itemValue : asciiLowercase(itemValue)
                                    });
                                }
                                break;
                            }
                        case AST_TYPES.IDENTIFIER:
                            {
                                if (caseSensitive) {
                                    values.push(item);
                                } else {
                                    values.push({
                                        type,
                                        name: asciiLowercase(name)
                                    });
                                }
                                break;
                            }
                        default:
                            {
                                values.push(item);
                            }
                    }
                }
                parsedValue = values;
            }
        } catch  {
            parsedValue = false;
        }
    }
    lruCache.set(cacheKey, parsedValue);
    if (parsedValue === false) {
        return;
    }
    return parsedValue;
}
/**
 * Parses a numeric value (number, dimension, percentage).
 * Helper function for serializeNumber, serializeLength, etc.
 *
 * @param {Array<object>} val - The AST value.
 * @param {object} [opt={}] - The options for parsing.
 * @param {Function} validateType - Function to validate the node type.
 * @returns {object|undefined} The parsed result containing num and unit, or undefined.
 */ function parseNumericValue(val, opt, validateType) {
    const [item] = val;
    const { type, value, unit } = item ?? {};
    if (!validateType(type, value, unit)) {
        return;
    }
    const { clamp } = opt || {};
    const max = opt?.max ?? Number.INFINITY;
    const min = opt?.min ?? Number.NEGATIVE_INFINITY;
    let num = parseFloat(value);
    if (clamp) {
        if (num > max) {
            num = max;
        } else if (num < min) {
            num = min;
        }
    } else if (num > max || num < min) {
        return;
    }
    return {
        num,
        unit: unit ? asciiLowercase(unit) : null,
        type
    };
}
/**
 * Serializes a <number> value.
 *
 * @param {Array<object>} val - The AST value.
 * @param {object} [opt={}] - The options for parsing.
 * @returns {string|undefined} The parsed number.
 */ function serializeNumber(val, opt = {}) {
    const res = parseNumericValue(val, opt, (type)=>type === AST_TYPES.NUMBER);
    if (!res) {
        return;
    }
    return `${res.num}`;
}
/**
 * Serializes an <angle> value.
 *
 * @param {Array<object>} val - The AST value.
 * @param {object} [opt={}] - The options for parsing.
 * @returns {string|undefined} The serialized angle.
 */ function serializeAngle(val, opt = {}) {
    const res = parseNumericValue(val, opt, (type, value)=>type === AST_TYPES.DIMENSION || type === AST_TYPES.NUMBER && value === "0");
    if (!res) {
        return;
    }
    const { num, unit } = res;
    if (unit) {
        if (!/^(?:deg|g?rad|turn)$/i.test(unit)) {
            return;
        }
        return `${num}${unit}`;
    } else if (num === 0) {
        return `${num}deg`;
    }
}
/**
 * Serializes a <length> value.
 *
 * @param {Array<object>} val - The AST value.
 * @param {object} [opt={}] - The options for parsing.
 * @returns {string|undefined} The serialized length.
 */ function serializeLength(val, opt = {}) {
    const res = parseNumericValue(val, opt, (type, value)=>type === AST_TYPES.DIMENSION || type === AST_TYPES.NUMBER && value === "0");
    if (!res) {
        return;
    }
    const { num, unit } = res;
    if (num === 0 && !unit) {
        return `${num}px`;
    } else if (unit) {
        return `${num}${unit}`;
    }
}
/**
 * Serializes a <dimension> value, e.g. <frequency>, <time> and <resolution>.
 *
 * @param {Array<object>} val - The AST value.
 * @param {object} [opt={}] - The options for parsing.
 * @returns {string|undefined} The serialized dimension.
 */ function serializeDimension(val, opt = {}) {
    const res = parseNumericValue(val, opt, (type)=>type === AST_TYPES.DIMENSION);
    if (!res) {
        return;
    }
    const { num, unit } = res;
    if (unit) {
        return `${num}${unit}`;
    }
}
/**
 * Serializes a <percentage> value.
 *
 * @param {Array<object>} val - The AST value.
 * @param {object} [opt={}] - The options for parsing.
 * @returns {string|undefined} The serialized percentage.
 */ function serializePercentage(val, opt = {}) {
    const res = parseNumericValue(val, opt, (type, value)=>type === AST_TYPES.PERCENTAGE || type === AST_TYPES.NUMBER && value === "0");
    if (!res) {
        return;
    }
    const { num } = res;
    return `${num}%`;
}
/**
 * Serializes a <url> value.
 *
 * @param {Array<object>} val - The AST value.
 * @returns {string|undefined} The serialized url.
 */ function serializeURL(val) {
    const [item] = val;
    const { type, value } = item ?? {};
    if (type !== AST_TYPES.URL) {
        return;
    }
    const str = value.replace(/\\\\/g, "\\").replaceAll('"', '\\"');
    return `url("${str}")`;
}
/**
 * Serializes a <string> value.
 *
 * @param {Array<object>} val - The AST value.
 * @returns {string|undefined} The serialized string.
 */ function serializeString(val) {
    const [item] = val;
    const { type, value } = item ?? {};
    if (type !== AST_TYPES.STRING) {
        return;
    }
    const str = value.replace(/\\\\/g, "\\").replaceAll('"', '\\"');
    return `"${str}"`;
}
/**
 * Serializes a <color> value.
 *
 * @param {Array<object>} val - The AST value.
 * @returns {string|undefined} The serialized color.
 */ function serializeColor(val) {
    const [item] = val;
    const { name, type, value } = item ?? {};
    switch(type){
        case AST_TYPES.FUNCTION:
            {
                const res = resolveColor(`${name}(${value})`, {
                    format: "specifiedValue"
                });
                if (res) {
                    return res;
                }
                break;
            }
        case AST_TYPES.HASH:
            {
                const res = resolveColor(`#${value}`, {
                    format: "specifiedValue"
                });
                if (res) {
                    return res;
                }
                break;
            }
        case AST_TYPES.IDENTIFIER:
            {
                if (SYS_COLORS.has(name)) {
                    return name;
                }
                const res = resolveColor(name, {
                    format: "specifiedValue"
                });
                if (res) {
                    return res;
                }
                break;
            }
        default:
    }
}
/**
 * Serializes a <gradient> value.
 *
 * @param {Array<object>} val - The AST value.
 * @returns {string|undefined} The serialized gradient.
 */ function serializeGradient(val) {
    const [item] = val;
    const { name, type, value } = item ?? {};
    if (type !== AST_TYPES.FUNCTION) {
        return;
    }
    const res = resolveGradient(`${name}(${value})`, {
        format: "specifiedValue"
    });
    if (res) {
        return res;
    }
}
/**
 * Resolves a keyword value.
 *
 * @param {Array<object>} value - The AST node array containing the keyword value.
 * @param {object} [opt={}] - The options for parsing.
 * @returns {string|undefined} The resolved keyword or undefined.
 */ function resolveKeywordValue(value, opt = {}) {
    const [{ name, type }] = value;
    const { length } = opt;
    switch(type){
        case AST_TYPES.GLOBAL_KEYWORD:
            {
                if (length > 1) {
                    return;
                }
                return name;
            }
        case AST_TYPES.IDENTIFIER:
            {
                return name;
            }
        default:
    }
}
/**
 * Resolves a function value.
 *
 * @param {Array<object>} value - The AST node array containing the function value.
 * @param {object} [opt={}] - The options for parsing.
 * @returns {string|undefined} The resolved function or undefined.
 */ function resolveFunctionValue(value, opt = {}) {
    const [{ name, type, value: itemValue }] = value;
    const { length } = opt;
    switch(type){
        case AST_TYPES.FUNCTION:
            {
                return `${name}(${itemValue})`;
            }
        case AST_TYPES.GLOBAL_KEYWORD:
            {
                if (length > 1) {
                    return;
                }
                return name;
            }
        case AST_TYPES.IDENTIFIER:
            {
                return name;
            }
        default:
    }
}
/**
 * Resolves a numeric value.
 *
 * @param {Array<object>} value - The AST node array containing the numeric value.
 * @param {object} [opt={}] - The options for parsing.
 * @returns {string|undefined} The resolved length/percentage/number or undefined.
 */ function resolveNumericValue(value, opt = {}) {
    const [{ name, type: itemType, value: itemValue }] = value;
    const { length, type } = opt;
    switch(itemType){
        case AST_TYPES.CALC:
            {
                return `${name}(${itemValue})`;
            }
        case AST_TYPES.DIMENSION:
            {
                if (type === "angle") {
                    return serializeAngle(value, opt);
                } else if (type === "length") {
                    return serializeLength(value, opt);
                }
                return serializeDimension(value, opt);
            }
        case AST_TYPES.GLOBAL_KEYWORD:
            {
                if (length > 1) {
                    return;
                }
                return name;
            }
        case AST_TYPES.IDENTIFIER:
            {
                return name;
            }
        case AST_TYPES.NUMBER:
            {
                switch(type){
                    case "angle":
                        {
                            return serializeAngle(value, opt);
                        }
                    case "length":
                        {
                            return serializeLength(value, opt);
                        }
                    case "percentage":
                        {
                            return serializePercentage(value, opt);
                        }
                    default:
                        {
                            return serializeNumber(value, opt);
                        }
                }
            }
        case AST_TYPES.PERCENTAGE:
            {
                return serializePercentage(value, opt);
            }
        default:
    }
}
/**
 * Resolves a color value.
 *
 * @param {Array<object>} value - The AST node array containing the color value.
 * @param {object} [opt={}] - The options for parsing.
 * @returns {string|undefined} The resolved color or undefined.
 */ function resolveColorValue(value, opt = {}) {
    const [{ name, type }] = value;
    const { length } = opt;
    switch(type){
        case AST_TYPES.GLOBAL_KEYWORD:
            {
                if (length > 1) {
                    return;
                }
                return name;
            }
        default:
            {
                return serializeColor(value, opt);
            }
    }
}
/**
 * Resolves an image value.
 *
 * @param {Array<object>} value - The AST node array containing the image value.
 * @param {object} [opt={}] - The options for parsing.
 * @returns {string|undefined} The resolved gradient/url or undefined.
 */ function resolveImageValue(value, opt = {}) {
    const [{ name, type }] = value;
    const { length } = opt;
    switch(type){
        case AST_TYPES.GLOBAL_KEYWORD:
            {
                if (length > 1) {
                    return;
                }
                return name;
            }
        case AST_TYPES.IDENTIFIER:
            {
                return name;
            }
        case AST_TYPES.URL:
            {
                return serializeURL(value, opt);
            }
        default:
            {
                return serializeGradient(value, opt);
            }
    }
}
/**
 * Resolves a border shorthand value.
 *
 * @param {Array<object>} value - The AST node array containing the shorthand value.
 * @param {object} subProps - The sub properties object.
 * @param {Map} parsedValues - The Map of parsed values.
 * @returns {Array|string|undefined} - The resolved [prop, value] pair, keyword or undefined.
 */ function resolveBorderShorthandValue(value, subProps, parsedValues) {
    const [{ isNumber, name, type, value: itemValue }] = value;
    const { color: colorProp, style: styleProp, width: widthProp } = subProps;
    switch(type){
        case AST_TYPES.CALC:
            {
                if (isNumber || parsedValues.has(widthProp)) {
                    return;
                }
                return [
                    widthProp,
                    `${name}(${itemValue}`
                ];
            }
        case AST_TYPES.DIMENSION:
        case AST_TYPES.NUMBER:
            {
                if (parsedValues.has(widthProp)) {
                    return;
                }
                const parsedValue = serializeLength(value, {
                    min: 0
                });
                if (!parsedValue) {
                    return;
                }
                return [
                    widthProp,
                    parsedValue
                ];
            }
        case AST_TYPES.FUNCTION:
        case AST_TYPES.HASH:
            {
                if (parsedValues.has(colorProp)) {
                    return;
                }
                const parsedValue = serializeColor(value);
                if (!parsedValue) {
                    return;
                }
                return [
                    colorProp,
                    parsedValue
                ];
            }
        case AST_TYPES.GLOBAL_KEYWORD:
            {
                return name;
            }
        case AST_TYPES.IDENTIFIER:
            {
                if (isValidPropertyValue(widthProp, name)) {
                    if (parsedValues.has(widthProp)) {
                        return;
                    }
                    return [
                        widthProp,
                        name
                    ];
                } else if (isValidPropertyValue(styleProp, name)) {
                    if (parsedValues.has(styleProp)) {
                        return;
                    }
                    return [
                        styleProp,
                        name
                    ];
                } else if (isValidPropertyValue(colorProp, name)) {
                    if (parsedValues.has(colorProp)) {
                        return;
                    }
                    return [
                        colorProp,
                        name
                    ];
                }
                break;
            }
        default:
    }
}
module.exports = {
    AST_TYPES,
    hasCalcFunc,
    hasVarFunc,
    isGlobalKeyword,
    isValidPropertyValue,
    parseCSS,
    parsePropertyValue,
    prepareValue,
    resolveBorderShorthandValue,
    resolveCalc,
    resolveColorValue,
    resolveFunctionValue,
    resolveImageValue,
    resolveKeywordValue,
    resolveNumericValue,
    serializeAngle,
    serializeColor,
    serializeDimension,
    serializeGradient,
    serializeLength,
    serializeNumber,
    serializePercentage,
    serializeString,
    serializeURL,
    splitValue
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/normalize.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const propertyDefinitions = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/generated/propertyDefinitions.js [app-ssr] (ecmascript)");
const { hasVarFunc, isGlobalKeyword, isValidPropertyValue, splitValue } = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const background = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/background.js [app-ssr] (ecmascript)");
const backgroundColor = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/backgroundColor.js [app-ssr] (ecmascript)");
const backgroundSize = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/backgroundSize.js [app-ssr] (ecmascript)");
const border = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/border.js [app-ssr] (ecmascript)");
const borderWidth = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderWidth.js [app-ssr] (ecmascript)");
const borderStyle = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderStyle.js [app-ssr] (ecmascript)");
const borderColor = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderColor.js [app-ssr] (ecmascript)");
const borderTop = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderTop.js [app-ssr] (ecmascript)");
const borderRight = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderRight.js [app-ssr] (ecmascript)");
const borderBottom = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderBottom.js [app-ssr] (ecmascript)");
const borderLeft = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderLeft.js [app-ssr] (ecmascript)");
const flex = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/flex.js [app-ssr] (ecmascript)");
const font = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/font.js [app-ssr] (ecmascript)");
const margin = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/margin.js [app-ssr] (ecmascript)");
const padding = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/padding.js [app-ssr] (ecmascript)");
// Constants
const BORDER_IMAGE = "border-image";
const TOP = "top";
const RIGHT = "right";
const BOTTOM = "bottom";
const LEFT = "left";
const WIDTH = "width";
const STYLE = "style";
const COLOR = "color";
const NONE = "none";
const TRBL_INDICES = {
    [TOP]: 0,
    [RIGHT]: 1,
    [BOTTOM]: 2,
    [LEFT]: 3
};
const shorthandProperties = new Map([
    [
        background.property,
        background
    ],
    [
        border.property,
        {
            descriptor: border.descriptor,
            parse: border.parse,
            shorthandFor: new Map([
                ...border.shorthandFor,
                ...border.positionShorthandFor,
                [
                    BORDER_IMAGE,
                    null
                ]
            ])
        }
    ],
    [
        borderWidth.property,
        borderWidth
    ],
    [
        borderStyle.property,
        borderStyle
    ],
    [
        borderColor.property,
        borderColor
    ],
    [
        borderTop.property,
        borderTop
    ],
    [
        borderRight.property,
        borderRight
    ],
    [
        borderBottom.property,
        borderBottom
    ],
    [
        borderLeft.property,
        borderLeft
    ],
    [
        "flex",
        flex
    ],
    [
        "font",
        font
    ],
    [
        "margin",
        margin
    ],
    [
        "padding",
        padding
    ]
]);
const borderProperties = new Set([
    border.property,
    BORDER_IMAGE,
    ...border.shorthandFor.keys(),
    ...border.positionShorthandFor.keys(),
    ...borderTop.shorthandFor.keys(),
    ...borderRight.shorthandFor.keys(),
    ...borderBottom.shorthandFor.keys(),
    ...borderLeft.shorthandFor.keys()
]);
const borderLines = new Set([
    WIDTH,
    STYLE,
    COLOR
]);
const borderPositions = new Set([
    TOP,
    RIGHT,
    BOTTOM,
    LEFT
]);
const borderCollectionConfig = {
    [WIDTH]: {
        shorthand: borderWidth.property,
        generator: generateBorderLineShorthand
    },
    [STYLE]: {
        shorthand: borderStyle.property,
        generator: generateBorderLineShorthand
    },
    [COLOR]: {
        shorthand: borderColor.property,
        generator: generateBorderLineShorthand
    },
    [TOP]: {
        shorthand: borderTop.property,
        generator: generateBorderPositionShorthand
    },
    [RIGHT]: {
        shorthand: borderRight.property,
        generator: generateBorderPositionShorthand
    },
    [BOTTOM]: {
        shorthand: borderBottom.property,
        generator: generateBorderPositionShorthand
    },
    [LEFT]: {
        shorthand: borderLeft.property,
        generator: generateBorderPositionShorthand
    }
};
/**
 * Ensures consistent object shape.
 *
 * @param {string} property - The property name.
 * @param {string} [value=""] - The property value.
 * @param {string} [priority=""] - The priority.
 * @returns {object} The property item object.
 */ function createPropertyItem(property, value = "", priority = "") {
    return {
        property,
        value,
        priority
    };
}
/**
 * Retrieves a property item from the map or creates a default one if it doesn't exist.
 *
 * @param {string} property - The name of the property.
 * @param {Map} properties - The map containing all properties.
 * @returns {object} The property item containing name, value, and priority.
 */ function getPropertyItem(property, properties) {
    const propertyItem = properties.get(property) ?? createPropertyItem(property);
    return propertyItem;
}
/**
 * Calculates the value for a specific position from shorthand values.
 *
 * @param {string[]} positionValues - The values extracted from the shorthand property.
 * @param {string} position - The specific position (top, right, bottom, left) to retrieve.
 * @returns {string} The calculated value for the position.
 */ function getPositionValue(positionValues, position) {
    const [val1, val2, val3, val4] = positionValues;
    const index = TRBL_INDICES[position] ?? -1;
    // If a specific position (top, right, bottom, left) is requested.
    if (index !== -1) {
        switch(positionValues.length){
            case 2:
                {
                    // Index 0 (Top) & 2 (Bottom) -> val1
                    // Index 1 (Right) & 3 (Left) -> val2
                    return index % 2 === 0 ? val1 : val2;
                }
            case 3:
                {
                    // Index 0 (Top) -> val1
                    // Index 1 (Right) & 3 (Left) -> val2
                    // Index 2 (Bottom) -> val3
                    if (index === 2) {
                        return val3;
                    }
                    return index % 2 === 0 ? val1 : val2;
                }
            case 4:
                {
                    return positionValues[index];
                }
            case 1:
            default:
                {
                    return val1;
                }
        }
    }
    // Fallback logic for when no specific position is requested.
    switch(positionValues.length){
        case 2:
            {
                if (val1 === val2) {
                    return val1;
                }
                return `${val1} ${val2}`;
            }
        case 3:
            {
                if (val1 === val3) {
                    if (val1 === val2) {
                        return val1;
                    }
                    return `${val1} ${val2}`;
                }
                return `${val1} ${val2} ${val3}`;
            }
        case 4:
            {
                if (val2 === val4) {
                    if (val1 === val3) {
                        if (val1 === val2) {
                            return val1;
                        }
                        return `${val1} ${val2}`;
                    }
                    return `${val1} ${val2} ${val3}`;
                }
                return `${val1} ${val2} ${val3} ${val4}`;
            }
        case 1:
        default:
            {
                return val1;
            }
    }
}
/**
 * Replaces the background shorthand property based on individual longhand values.
 *
 * @param {string} property - The specific background longhand property being updated.
 * @param {Map} properties - The map of all properties.
 * @returns {string} The constructed background shorthand string.
 */ function replaceBackgroundShorthand(property, properties) {
    const { value: propertyValue } = properties.get(property);
    const parsedValue = background.shorthandFor.get(property).parse(propertyValue);
    const values = splitValue(parsedValue, {
        delimiter: ","
    });
    const { value: shorthandValue } = properties.get(background.property);
    const bgValues = background.parse(shorthandValue);
    const bgLength = bgValues.length;
    if (property === backgroundColor.property) {
        bgValues[bgLength - 1][property] = parsedValue[0];
    } else {
        for(let i = 0; i < bgLength; i++){
            bgValues[i][property] = values[i];
        }
    }
    const backgrounds = [];
    for (const bgValue of bgValues){
        const bg = [];
        for (const [longhand, value] of Object.entries(bgValue)){
            if (!value || value === background.initialValues.get(longhand)) {
                continue;
            }
            if (longhand === backgroundSize.property) {
                bg.push(`/ ${value}`);
            } else {
                bg.push(value);
            }
        }
        backgrounds.push(bg.join(" "));
    }
    return backgrounds.join(", ");
}
/**
 * Checks if a property value matches the value within a border shorthand.
 *
 * @param {string} property - The property to check.
 * @param {string} value - The value to compare.
 * @param {string} shorthandValue - The shorthand string to parse and compare against.
 * @returns {boolean} True if the value matches the shorthand's value.
 */ function matchesBorderShorthandValue(property, value, shorthandValue) {
    const obj = border.parse(shorthandValue);
    if (Object.hasOwn(obj, property)) {
        return value === obj[property];
    }
    return value === border.initialValues.get(property);
}
/**
 * Replaces or updates a value within a border shorthand string.
 *
 * @param {string} value - The new value to insert.
 * @param {string} shorthandValue - The existing shorthand string.
 * @returns {string} The updated border shorthand string.
 */ function replaceBorderShorthandValue(value, shorthandValue) {
    const borderFirstInitialKey = border.initialValues.keys().next().value;
    const borderFirstInitialValue = border.initialValues.get(borderFirstInitialKey);
    const valueObj = border.parse(value);
    const shorthandObj = shorthandValue ? border.parse(shorthandValue) : {
        [borderFirstInitialKey]: borderFirstInitialValue
    };
    const keys = border.shorthandFor.keys();
    for (const key of keys){
        const initialValue = border.initialValues.get(key);
        let parsedValue = initialValue;
        if (Object.hasOwn(valueObj, key)) {
            parsedValue = valueObj[key];
        }
        if (parsedValue === initialValue) {
            if (key === borderFirstInitialKey) {
                if (!Object.hasOwn(shorthandObj, key)) {
                    shorthandObj[key] = parsedValue;
                }
            } else {
                delete shorthandObj[key];
            }
        } else {
            shorthandObj[key] = parsedValue;
            if (shorthandObj[borderFirstInitialKey] && shorthandObj[borderFirstInitialKey] === borderFirstInitialValue) {
                delete shorthandObj[borderFirstInitialKey];
            }
        }
    }
    return Object.values(shorthandObj).join(" ");
}
/**
 * Replaces a value at a specific position (top, right, bottom, left) within a position shorthand.
 *
 * @param {string} value - The new value to set.
 * @param {string[]} positionValues - The array of existing position values.
 * @param {string} position - The position to update.
 * @returns {string} The updated shorthand string.
 */ function replacePositionValue(value, positionValues, position) {
    const index = TRBL_INDICES[position] ?? -1;
    let currentValues = positionValues;
    if (index !== -1) {
        // Loop for reducing array length (instead of recursion)
        while(true){
            const [val1, val2, val3, val4] = currentValues;
            switch(currentValues.length){
                case 2:
                    {
                        if (val1 === val2) {
                            currentValues = [
                                val1
                            ];
                            continue;
                        }
                        switch(index){
                            // Top
                            case 0:
                                {
                                    if (val1 === value) {
                                        return currentValues.join(" ");
                                    }
                                    return `${value} ${val2} ${val1}`;
                                }
                            // Right
                            case 1:
                                {
                                    if (val2 === value) {
                                        return currentValues.join(" ");
                                    }
                                    return `${val1} ${value} ${val1} ${val2}`;
                                }
                            // Bottom
                            case 2:
                                {
                                    if (val1 === value) {
                                        return currentValues.join(" ");
                                    }
                                    return `${val1} ${val2} ${value}`;
                                }
                            // Left
                            case 3:
                            default:
                                {
                                    if (val2 === value) {
                                        return currentValues.join(" ");
                                    }
                                    return `${val1} ${val2} ${val1} ${value}`;
                                }
                        }
                    }
                case 3:
                    {
                        if (val1 === val3) {
                            currentValues = [
                                val1,
                                val2
                            ];
                            continue;
                        }
                        switch(index){
                            // Top
                            case 0:
                                {
                                    if (val1 === value) {
                                        return currentValues.join(" ");
                                    } else if (val3 === value) {
                                        return `${value} ${val2}`;
                                    }
                                    return `${value} ${val2} ${val3}`;
                                }
                            // Right
                            case 1:
                                {
                                    if (val2 === value) {
                                        return currentValues.join(" ");
                                    }
                                    return `${val1} ${value} ${val3} ${val2}`;
                                }
                            // Bottom
                            case 2:
                                {
                                    if (val3 === value) {
                                        return currentValues.join(" ");
                                    } else if (val1 === value) {
                                        return `${val1} ${val2}`;
                                    }
                                    return `${val1} ${val2} ${value}`;
                                }
                            // Left
                            case 3:
                            default:
                                {
                                    if (val2 === value) {
                                        return currentValues.join(" ");
                                    }
                                    return `${val1} ${val2} ${val3} ${value}`;
                                }
                        }
                    }
                case 4:
                    {
                        if (val2 === val4) {
                            currentValues = [
                                val1,
                                val2,
                                val3
                            ];
                            continue;
                        }
                        switch(index){
                            // Top
                            case 0:
                                {
                                    if (val1 === value) {
                                        return currentValues.join(" ");
                                    }
                                    return `${value} ${val2} ${val3} ${val4}`;
                                }
                            // Right
                            case 1:
                                {
                                    if (val2 === value) {
                                        return currentValues.join(" ");
                                    } else if (val4 === value) {
                                        return `${val1} ${value} ${val3}`;
                                    }
                                    return `${val1} ${value} ${val3} ${val4}`;
                                }
                            // Bottom
                            case 2:
                                {
                                    if (val3 === value) {
                                        return currentValues.join(" ");
                                    }
                                    return `${val1} ${val2} ${value} ${val4}`;
                                }
                            // Left
                            case 3:
                            default:
                                {
                                    if (val4 === value) {
                                        return currentValues.join(" ");
                                    } else if (val2 === value) {
                                        return `${val1} ${val2} ${val3}`;
                                    }
                                    return `${val1} ${val2} ${val3} ${value}`;
                                }
                        }
                    }
                case 1:
                default:
                    {
                        const [val] = currentValues;
                        if (val === value) {
                            return currentValues.join(" ");
                        }
                        switch(index){
                            // Top
                            case 0:
                                {
                                    return `${value} ${val} ${val}`;
                                }
                            // Right
                            case 1:
                                {
                                    return `${val} ${value} ${val} ${val}`;
                                }
                            // Bottom
                            case 2:
                                {
                                    return `${val} ${val} ${value}`;
                                }
                            // Left
                            case 3:
                            default:
                                {
                                    return `${val} ${val} ${val} ${value}`;
                                }
                        }
                    }
            }
        }
    }
    // Fallback logic for when no specific position is requested.
    const [val1, val2, val3, val4] = currentValues;
    switch(currentValues.length){
        case 2:
            {
                if (val1 === val2) {
                    return val1;
                }
                return `${val1} ${val2}`;
            }
        case 3:
            {
                if (val1 === val3) {
                    if (val1 === val2) {
                        return val1;
                    }
                    return `${val1} ${val2}`;
                }
                return `${val1} ${val2} ${val3}`;
            }
        case 4:
            {
                if (val2 === val4) {
                    if (val1 === val3) {
                        if (val1 === val2) {
                            return val1;
                        }
                        return `${val1} ${val2}`;
                    }
                    return `${val1} ${val2} ${val3}`;
                }
                return `${val1} ${val2} ${val3} ${val4}`;
            }
        case 1:
        default:
            {
                return val1;
            }
    }
}
/**
 * Handles border property preparation when the value is a string.
 *
 * @param {object} params - The parameters object.
 * @param {string} params.property - The property name.
 * @param {string} params.value - The property value.
 * @param {string} params.priority - The property priority.
 * @param {Map} params.properties - The map of properties.
 * @param {object} params.parts - The split property name parts.
 * @param {Map} params.borderItems - The map to store processed border items.
 */ function prepareBorderStringValue({ property, value, priority, properties, parts, borderItems }) {
    const { prop1, prop2, prop3 } = parts;
    const shorthandItem = getPropertyItem(border.property, properties);
    const imageItem = getPropertyItem(BORDER_IMAGE, properties);
    // Handle longhand properties.
    if (prop3) {
        const lineProperty = `${prop1}-${prop3}`;
        const lineItem = getPropertyItem(lineProperty, properties);
        const positionProperty = `${prop1}-${prop2}`;
        const positionItem = getPropertyItem(positionProperty, properties);
        const longhandProperty = `${prop1}-${prop2}-${prop3}`;
        const longhandItem = getPropertyItem(longhandProperty, properties);
        longhandItem.value = value;
        longhandItem.priority = priority;
        const propertyValue = hasVarFunc(value) ? "" : value;
        if (propertyValue === "") {
            shorthandItem.value = "";
            lineItem.value = "";
            positionItem.value = "";
        } else if (isGlobalKeyword(propertyValue)) {
            if (shorthandItem.value !== propertyValue) {
                shorthandItem.value = "";
            }
            if (lineItem.value !== propertyValue) {
                lineItem.value = "";
            }
            if (positionItem.value !== propertyValue) {
                positionItem.value = "";
            }
        } else {
            if (shorthandItem.value && !matchesBorderShorthandValue(lineProperty, propertyValue, shorthandItem.value)) {
                shorthandItem.value = "";
            }
            if (lineItem.value) {
                lineItem.value = replacePositionValue(propertyValue, splitValue(lineItem.value), prop2);
            }
            if (positionItem.value && !matchesBorderShorthandValue(lineProperty, propertyValue, positionItem.value)) {
                positionItem.value = "";
            }
        }
        borderItems.set(border.property, shorthandItem);
        borderItems.set(BORDER_IMAGE, imageItem);
        borderItems.set(lineProperty, lineItem);
        borderItems.set(positionProperty, positionItem);
        borderItems.set(longhandProperty, longhandItem);
    // Handle side-specific border shorthands (border-top, border-right, border-bottom, border-left).
    } else if (prop2 && borderPositions.has(prop2)) {
        const lineWidthProperty = `${prop1}-width`;
        const lineWidthItem = getPropertyItem(lineWidthProperty, properties);
        const lineStyleProperty = `${prop1}-style`;
        const lineStyleItem = getPropertyItem(lineStyleProperty, properties);
        const lineColorProperty = `${prop1}-color`;
        const lineColorItem = getPropertyItem(lineColorProperty, properties);
        const positionProperty = `${prop1}-${prop2}`;
        const positionItem = getPropertyItem(positionProperty, properties);
        positionItem.value = value;
        positionItem.priority = priority;
        const propertyValue = hasVarFunc(value) ? "" : value;
        if (propertyValue === "") {
            shorthandItem.value = "";
            lineWidthItem.value = "";
            lineStyleItem.value = "";
            lineColorItem.value = "";
        } else if (isGlobalKeyword(propertyValue)) {
            if (shorthandItem.value !== propertyValue) {
                shorthandItem.value = "";
            }
            if (lineWidthItem.value !== propertyValue) {
                lineWidthItem.value = "";
            }
            if (lineStyleItem.value !== propertyValue) {
                lineStyleItem.value = "";
            }
            if (lineColorItem.value !== propertyValue) {
                lineColorItem.value = "";
            }
        } else {
            if (shorthandItem.value && !matchesBorderShorthandValue(property, propertyValue, shorthandItem.value)) {
                shorthandItem.value = "";
            }
            if (lineWidthItem.value && isValidPropertyValue(lineWidthProperty, propertyValue)) {
                lineWidthItem.value = propertyValue;
            }
            if (lineStyleItem.value && isValidPropertyValue(lineStyleProperty, propertyValue)) {
                lineStyleItem.value = propertyValue;
            }
            if (lineColorItem.value && isValidPropertyValue(lineColorProperty, propertyValue)) {
                lineColorItem.value = propertyValue;
            }
        }
        for (const line of borderLines){
            const longhandProperty = `${prop1}-${prop2}-${line}`;
            const longhandItem = getPropertyItem(longhandProperty, properties);
            longhandItem.value = propertyValue;
            longhandItem.priority = priority;
            borderItems.set(longhandProperty, longhandItem);
        }
        borderItems.set(border.property, shorthandItem);
        borderItems.set(BORDER_IMAGE, imageItem);
        borderItems.set(lineWidthProperty, lineWidthItem);
        borderItems.set(lineStyleProperty, lineStyleItem);
        borderItems.set(lineColorProperty, lineColorItem);
        borderItems.set(positionProperty, positionItem);
    // Handle property-specific border shorthands (border-width, border-style, border-color).
    } else if (prop2 && borderLines.has(prop2)) {
        const lineProperty = `${prop1}-${prop2}`;
        const lineItem = getPropertyItem(lineProperty, properties);
        lineItem.value = value;
        lineItem.priority = priority;
        const propertyValue = hasVarFunc(value) ? "" : value;
        if (propertyValue === "") {
            shorthandItem.value = "";
        } else if (isGlobalKeyword(propertyValue)) {
            if (shorthandItem.value !== propertyValue) {
                shorthandItem.value = "";
            }
        }
        for (const position of borderPositions){
            const positionProperty = `${prop1}-${position}`;
            const positionItem = getPropertyItem(positionProperty, properties);
            const longhandProperty = `${prop1}-${position}-${prop2}`;
            const longhandItem = getPropertyItem(longhandProperty, properties);
            if (propertyValue) {
                positionItem.value = replaceBorderShorthandValue(propertyValue, positionItem.value);
            } else {
                positionItem.value = "";
            }
            longhandItem.value = propertyValue;
            longhandItem.priority = priority;
            borderItems.set(positionProperty, positionItem);
            borderItems.set(longhandProperty, longhandItem);
        }
        borderItems.set(border.property, shorthandItem);
        borderItems.set(BORDER_IMAGE, imageItem);
        borderItems.set(lineProperty, lineItem);
    // Handle border shorthand.
    } else {
        const propertyValue = hasVarFunc(value) ? "" : value;
        imageItem.value = propertyValue ? NONE : "";
        for (const line of borderLines){
            const lineProperty = `${prop1}-${line}`;
            const lineItem = getPropertyItem(lineProperty, properties);
            lineItem.value = propertyValue;
            lineItem.priority = priority;
            borderItems.set(lineProperty, lineItem);
        }
        for (const position of borderPositions){
            const positionProperty = `${prop1}-${position}`;
            const positionItem = getPropertyItem(positionProperty, properties);
            positionItem.value = propertyValue;
            positionItem.priority = priority;
            borderItems.set(positionProperty, positionItem);
            for (const line of borderLines){
                const longhandProperty = `${positionProperty}-${line}`;
                const longhandItem = getPropertyItem(longhandProperty, properties);
                longhandItem.value = propertyValue;
                longhandItem.priority = priority;
                borderItems.set(longhandProperty, longhandItem);
            }
        }
        borderItems.set(property, shorthandItem);
        borderItems.set(BORDER_IMAGE, imageItem);
    }
}
/**
 * Handles border property preparation when the value is an array.
 *
 * @param {object} params - The parameters object.
 * @param {Array} params.value - The property value.
 * @param {string} params.priority - The property priority.
 * @param {Map} params.properties - The map of properties.
 * @param {object} params.parts - The split property name parts.
 * @param {Map} params.borderItems - The map to store processed border items.
 */ function prepareBorderArrayValue({ value, priority, properties, parts, borderItems }) {
    const { prop1, prop2 } = parts;
    if (!value.length || !borderLines.has(prop2)) {
        return;
    }
    const shorthandItem = getPropertyItem(border.property, properties);
    const imageItem = getPropertyItem(BORDER_IMAGE, properties);
    const lineProperty = `${prop1}-${prop2}`;
    const lineItem = getPropertyItem(lineProperty, properties);
    if (value.length === 1) {
        const [propertyValue] = value;
        if (shorthandItem.value) {
            if (hasVarFunc(shorthandItem.value)) {
                shorthandItem.value = "";
            } else if (propertyValue) {
                shorthandItem.value = replaceBorderShorthandValue(propertyValue, shorthandItem.value);
            }
        }
    } else {
        shorthandItem.value = "";
    }
    lineItem.value = value.join(" ");
    lineItem.priority = priority;
    const positionValues = {};
    const [val1, val2, val3, val4] = value;
    switch(value.length){
        case 2:
            {
                positionValues.top = val1;
                positionValues.right = val2;
                positionValues.bottom = val1;
                positionValues.left = val2;
                break;
            }
        case 3:
            {
                positionValues.top = val1;
                positionValues.right = val2;
                positionValues.bottom = val3;
                positionValues.left = val2;
                break;
            }
        case 4:
            {
                positionValues.top = val1;
                positionValues.right = val2;
                positionValues.bottom = val3;
                positionValues.left = val4;
                break;
            }
        case 1:
        default:
            {
                positionValues.top = val1;
                positionValues.right = val1;
                positionValues.bottom = val1;
                positionValues.left = val1;
            }
    }
    for (const position of borderPositions){
        const positionProperty = `${prop1}-${position}`;
        const positionItem = getPropertyItem(positionProperty, properties);
        if (positionItem.value && positionValues[position]) {
            positionItem.value = replaceBorderShorthandValue(positionValues[position], positionItem.value);
        }
        const longhandProperty = `${positionProperty}-${prop2}`;
        const longhandItem = getPropertyItem(longhandProperty, properties);
        longhandItem.value = positionValues[position];
        longhandItem.priority = priority;
        borderItems.set(positionProperty, positionItem);
        borderItems.set(longhandProperty, longhandItem);
    }
    borderItems.set(border.property, shorthandItem);
    borderItems.set(BORDER_IMAGE, imageItem);
    borderItems.set(lineProperty, lineItem);
}
/**
 * Handles border property preparation when the value is an object.
 *
 * @param {object} params - The parameters object.
 * @param {string} params.property - The property name.
 * @param {object} params.value - The property value.
 * @param {string} params.priority - The property priority.
 * @param {Map} params.properties - The map of properties.
 * @param {object} params.parts - The split property name parts.
 * @param {Map} params.borderItems - The map to store processed border items.
 */ function prepareBorderObjectValue({ property, value, priority, properties, parts, borderItems }) {
    const { prop1, prop2 } = parts;
    const imageItem = getPropertyItem(BORDER_IMAGE, properties);
    // Handle position shorthands.
    if (prop2) {
        if (!borderPositions.has(prop2)) {
            return;
        }
        const shorthandItem = getPropertyItem(border.property, properties);
        const lineWidthProperty = `${prop1}-width`;
        const lineWidthItem = getPropertyItem(lineWidthProperty, properties);
        const lineStyleProperty = `${prop1}-style`;
        const lineStyleItem = getPropertyItem(lineStyleProperty, properties);
        const lineColorProperty = `${prop1}-color`;
        const lineColorItem = getPropertyItem(lineColorProperty, properties);
        const positionProperty = `${prop1}-${prop2}`;
        const positionItem = getPropertyItem(positionProperty, properties);
        if (shorthandItem.value) {
            for (const positionValue of Object.values(value)){
                if (!matchesBorderShorthandValue(property, positionValue, shorthandItem.value)) {
                    shorthandItem.value = "";
                    break;
                }
            }
        }
        positionItem.value = Object.values(value).join(" ");
        positionItem.priority = priority;
        for (const line of borderLines){
            const longhandProperty = `${prop1}-${prop2}-${line}`;
            const longhandItem = getPropertyItem(longhandProperty, properties);
            const itemValue = Object.hasOwn(value, longhandProperty) ? value[longhandProperty] : border.initialValues.get(`${prop1}-${line}`);
            if (line === WIDTH && lineWidthItem.value) {
                lineWidthItem.value = replacePositionValue(itemValue, splitValue(lineWidthItem.value), prop2);
            } else if (line === STYLE && lineStyleItem.value) {
                lineStyleItem.value = replacePositionValue(itemValue, splitValue(lineStyleItem.value), prop2);
            } else if (line === COLOR && lineColorItem.value) {
                lineColorItem.value = replacePositionValue(itemValue, splitValue(lineColorItem.value), prop2);
            }
            longhandItem.value = itemValue;
            longhandItem.priority = priority;
            borderItems.set(longhandProperty, longhandItem);
        }
        borderItems.set(border.property, shorthandItem);
        borderItems.set(BORDER_IMAGE, imageItem);
        borderItems.set(lineWidthProperty, lineWidthItem);
        borderItems.set(lineStyleProperty, lineStyleItem);
        borderItems.set(lineColorProperty, lineColorItem);
        borderItems.set(positionProperty, positionItem);
    // Handle border shorthand.
    } else {
        const shorthandItem = getPropertyItem(prop1, properties);
        const lineWidthProperty = `${prop1}-width`;
        const lineWidthItem = getPropertyItem(lineWidthProperty, properties);
        const lineStyleProperty = `${prop1}-style`;
        const lineStyleItem = getPropertyItem(lineStyleProperty, properties);
        const lineColorProperty = `${prop1}-color`;
        const lineColorItem = getPropertyItem(lineColorProperty, properties);
        const propertyValue = Object.values(value).join(" ");
        shorthandItem.value = propertyValue;
        shorthandItem.priority = priority;
        imageItem.value = propertyValue ? NONE : "";
        if (Object.hasOwn(value, lineWidthProperty)) {
            lineWidthItem.value = value[lineWidthProperty];
        } else {
            lineWidthItem.value = border.initialValues.get(lineWidthProperty);
        }
        lineWidthItem.priority = priority;
        if (Object.hasOwn(value, lineStyleProperty)) {
            lineStyleItem.value = value[lineStyleProperty];
        } else {
            lineStyleItem.value = border.initialValues.get(lineStyleProperty);
        }
        lineStyleItem.priority = priority;
        if (Object.hasOwn(value, lineColorProperty)) {
            lineColorItem.value = value[lineColorProperty];
        } else {
            lineColorItem.value = border.initialValues.get(lineColorProperty);
        }
        lineColorItem.priority = priority;
        for (const position of borderPositions){
            const positionProperty = `${prop1}-${position}`;
            const positionItem = getPropertyItem(positionProperty, properties);
            positionItem.value = propertyValue;
            positionItem.priority = priority;
            for (const line of borderLines){
                const longhandProperty = `${positionProperty}-${line}`;
                const longhandItem = getPropertyItem(longhandProperty, properties);
                const lineProperty = `${prop1}-${line}`;
                if (Object.hasOwn(value, lineProperty)) {
                    longhandItem.value = value[lineProperty];
                } else {
                    longhandItem.value = border.initialValues.get(lineProperty);
                }
                longhandItem.priority = priority;
                borderItems.set(longhandProperty, longhandItem);
            }
            borderItems.set(positionProperty, positionItem);
        }
        borderItems.set(property, shorthandItem);
        borderItems.set(BORDER_IMAGE, imageItem);
        borderItems.set(lineWidthProperty, lineWidthItem);
        borderItems.set(lineStyleProperty, lineStyleItem);
        borderItems.set(lineColorProperty, lineColorItem);
    }
}
/**
 * Prepares border properties by splitting shorthands and handling updates.
 *
 * @param {string} property - The border property name.
 * @param {string|Array|object} value - The value of the property.
 * @param {string} priority - The priority of the property (e.g., "important").
 * @param {Map} properties - The map of all properties.
 * @returns {Map|undefined} A map of expanded or updated border properties.
 */ function prepareBorderProperties(property, value, priority, properties) {
    if (typeof property !== "string" || value === null) {
        return;
    }
    if (!property.startsWith(border.property)) {
        return;
    }
    let prop2, prop3;
    if (property.length > border.property.length) {
        // Check if next char is '-'
        if (property.charCodeAt(border.property.length) !== 45) {
            return;
        }
        // property is like "border-..."
        const remainder = property.substring(border.property.length + 1);
        const hyphenIndex = remainder.indexOf("-");
        if (hyphenIndex !== -1) {
            prop2 = remainder.substring(0, hyphenIndex);
            prop3 = remainder.substring(hyphenIndex + 1);
        } else {
            prop2 = remainder;
        }
    }
    if (borderPositions.has(prop2) && prop3 && !borderLines.has(prop3) || borderLines.has(prop2) && prop3) {
        return;
    }
    const parts = {
        prop1: border.property,
        prop2,
        prop3
    };
    const borderItems = new Map();
    if (typeof value === "string") {
        prepareBorderStringValue({
            property,
            value,
            priority,
            properties,
            parts,
            borderItems
        });
    } else if (Array.isArray(value)) {
        prepareBorderArrayValue({
            value,
            priority,
            properties,
            parts,
            borderItems
        });
    } else if (value && typeof value === "object") {
        prepareBorderObjectValue({
            property,
            value,
            priority,
            properties,
            parts,
            borderItems
        });
    }
    if (!borderItems.has(border.property)) {
        return;
    }
    const borderProps = new Map([
        [
            border.property,
            borderItems.get(border.property)
        ]
    ]);
    for (const line of borderLines){
        const lineProperty = `${border.property}-${line}`;
        const lineItem = borderItems.get(lineProperty) ?? getPropertyItem(lineProperty, properties);
        borderProps.set(lineProperty, lineItem);
    }
    for (const position of borderPositions){
        const positionProperty = `${border.property}-${position}`;
        const positionItem = borderItems.get(positionProperty) ?? getPropertyItem(positionProperty, properties);
        borderProps.set(positionProperty, positionItem);
        for (const line of borderLines){
            const longhandProperty = `${border.property}-${position}-${line}`;
            const longhandItem = borderItems.get(longhandProperty) ?? getPropertyItem(longhandProperty, properties);
            borderProps.set(longhandProperty, longhandItem);
        }
    }
    const borderImageItem = borderItems.get(BORDER_IMAGE) ?? createPropertyItem(BORDER_IMAGE);
    borderProps.set(BORDER_IMAGE, borderImageItem);
    return borderProps;
}
/**
 * Generates a border line shorthand property if all line components are present.
 *
 * @param {Map} items - The map of collected property items.
 * @param {string} property - The shorthand property name to generate.
 * @param {string} [priority=""] - The priority of the property.
 * @returns {Array} A key-value pair for the generated property.
 */ function generateBorderLineShorthand(items, property, priority = "") {
    const values = [];
    for (const [, item] of items){
        const { value: itemValue } = item;
        values.push(itemValue);
    }
    const value = getPositionValue(values);
    return [
        property,
        createPropertyItem(property, value, priority)
    ];
}
/**
 * Generates a border position shorthand property if all position components are present.
 *
 * @param {Map} items - The map of collected property items.
 * @param {string} property - The shorthand property name to generate.
 * @param {string} [priority=""] - The priority of the property.
 * @returns {Array} A key-value pair for the generated property.
 */ function generateBorderPositionShorthand(items, property, priority = "") {
    const values = [];
    for (const [, item] of items){
        const { value: itemValue } = item;
        values.push(itemValue);
    }
    const value = values.join(" ");
    return [
        property,
        createPropertyItem(property, value, priority)
    ];
}
/**
 * Generates a border shorthand property if all components match.
 *
 * @param {Array} items - The collection of property values.
 * @param {string} property - The shorthand property name to generate.
 * @param {string} [priority=""] - The priority of the property.
 * @returns {Array|undefined} A key-value pair for the generated property or undefined.
 */ function generateBorderShorthand(items, property, priority = "") {
    const values = new Set(items);
    if (values.size === 1) {
        const { value } = values.keys().next();
        return [
            property,
            createPropertyItem(property, value, priority)
        ];
    }
}
/**
 * Processes and consolidates border-related longhands into shorthands where possible.
 *
 * @param {Map} properties - The map of current properties.
 * @returns {Map} The updated map with consolidated border properties.
 */ function prepareBorderShorthands(properties) {
    const borderCollections = {};
    for (const key of Object.keys(borderCollectionConfig)){
        borderCollections[key] = {
            ...borderCollectionConfig[key],
            items: new Map(),
            priorityItems: new Map()
        };
    }
    for (const [property, item] of properties){
        const { priority, value } = item;
        let positionPart, linePart;
        // We can assume property starts with "border-"
        const firstHyphen = property.indexOf("-");
        if (firstHyphen !== -1) {
            const remainder = property.substring(firstHyphen + 1);
            const secondHyphen = remainder.indexOf("-");
            if (secondHyphen !== -1) {
                positionPart = remainder.substring(0, secondHyphen);
                linePart = remainder.substring(secondHyphen + 1);
            } else {
                positionPart = remainder;
                linePart = undefined;
            }
        }
        if (linePart && borderCollections[linePart]) {
            const collection = borderCollections[linePart];
            if (priority) {
                collection.priorityItems.set(property, {
                    property,
                    value,
                    priority
                });
            } else {
                collection.items.set(property, {
                    property,
                    value,
                    priority
                });
            }
        }
        if (positionPart && borderCollections[positionPart]) {
            const collection = borderCollections[positionPart];
            if (priority) {
                collection.priorityItems.set(property, {
                    property,
                    value,
                    priority
                });
            } else {
                collection.items.set(property, {
                    property,
                    value,
                    priority
                });
            }
        }
    }
    const shorthandItems = [];
    const shorthandPriorityItems = [];
    for (const [key, collection] of Object.entries(borderCollections)){
        const { shorthand, generator, items, priorityItems } = collection;
        const requiredSize = borderLines.has(key) ? 4 : 3;
        if (items.size === requiredSize) {
            const [property, item] = generator(items, shorthand) ?? [];
            if (property && item) {
                properties.set(property, item);
                if (borderPositions.has(key) && properties.has(BORDER_IMAGE)) {
                    const { value: imageValue } = properties.get(BORDER_IMAGE);
                    if (imageValue === NONE) {
                        shorthandItems.push(item.value);
                    }
                }
            }
        } else if (priorityItems.size === requiredSize) {
            const [property, item] = generator(priorityItems, shorthand, "important") ?? [];
            if (property && item) {
                properties.set(property, item);
                if (borderPositions.has(key) && properties.has(BORDER_IMAGE)) {
                    const { value: imageValue } = properties.get(BORDER_IMAGE);
                    if (imageValue === NONE) {
                        shorthandPriorityItems.push(item.value);
                    }
                }
            }
        }
    }
    const mixedPriorities = shorthandItems.length && shorthandPriorityItems.length;
    const imageItem = createPropertyItem(BORDER_IMAGE, NONE);
    if (shorthandItems.length === 4) {
        const [property, item] = generateBorderShorthand(shorthandItems, border.property) ?? [];
        if (property && item) {
            properties.set(property, item);
            properties.delete(BORDER_IMAGE);
            properties.set(BORDER_IMAGE, imageItem);
        }
    } else if (shorthandPriorityItems.length === 4) {
        const [property, item] = generateBorderShorthand(shorthandPriorityItems, border.property, "important") ?? [];
        if (property && item) {
            properties.set(property, item);
            properties.delete(BORDER_IMAGE);
            properties.set(BORDER_IMAGE, imageItem);
        }
    } else if (properties.has(BORDER_IMAGE)) {
        const { value: imageValue } = properties.get(BORDER_IMAGE);
        if (imageValue === NONE) {
            if (mixedPriorities) {
                properties.delete(BORDER_IMAGE);
                properties.set(BORDER_IMAGE, imageItem);
            } else {
                properties.delete(BORDER_IMAGE);
            }
        }
    }
    if (mixedPriorities) {
        const items = [];
        const priorityItems = [];
        for (const item of properties){
            const [, { priority }] = item;
            if (priority) {
                priorityItems.push(item);
            } else {
                items.push(item);
            }
        }
        const firstPropertyKey = properties.keys().next().value;
        const { priority: firstPropertyPriority } = properties.get(firstPropertyKey);
        if (firstPropertyPriority) {
            return new Map([
                ...priorityItems,
                ...items
            ]);
        }
        return new Map([
            ...items,
            ...priorityItems
        ]);
    }
    if (properties.has(BORDER_IMAGE)) {
        properties.delete(BORDER_IMAGE);
        properties.set(BORDER_IMAGE, imageItem);
    }
    return properties;
}
/**
 * Processes shorthand properties from the shorthands map.
 *
 * @param {Map} shorthands - The map containing shorthand property groups.
 * @returns {Map} A map of processed shorthand properties.
 */ function processShorthandProperties(shorthands) {
    const shorthandItems = new Map();
    for (const [property, item] of shorthands){
        const shorthandItem = shorthandProperties.get(property);
        if (item.size === shorthandItem.shorthandFor.size && shorthandItem.position) {
            const positionValues = [];
            let priority = "";
            for (const { value: longhandValue, priority: longhandPriority } of item.values()){
                positionValues.push(longhandValue);
                if (longhandPriority) {
                    priority = longhandPriority;
                }
            }
            const value = getPositionValue(positionValues, shorthandItem.position);
            shorthandItems.set(property, createPropertyItem(property, value, priority));
        }
    }
    return shorthandItems;
}
/**
 * Updates the longhand properties map with a new property item.
 * If a property with normal priority already exists, it will be overwritten by the new item.
 * If the existing property has "important" priority, it will not be overwritten.
 *
 * @param {string} property - The CSS property name.
 * @param {object} item - The property item object containing value and priority.
 * @param {Map} longhandProperties - The map of longhand properties to update.
 */ function updateLonghandProperties(property, item, longhandProperties) {
    if (longhandProperties.has(property)) {
        const { priority: longhandPriority } = longhandProperties.get(property);
        if (!longhandPriority) {
            longhandProperties.delete(property);
            longhandProperties.set(property, item);
        }
    } else {
        longhandProperties.set(property, item);
    }
}
/**
 * Processes border properties from the borders map, expanding and normalizing them.
 *
 * @param {Map} borders - The map containing accumulated border properties.
 * @returns {Map} A map of fully processed and normalized border properties.
 */ function processBorderProperties(borders) {
    const longhandProperties = new Map();
    for (const [property, item] of borders){
        if (shorthandProperties.has(property)) {
            const { value, priority } = item;
            if (property === border.property) {
                const lineItems = border.parse(value);
                for (const [key, initialValue] of border.initialValues){
                    if (!Object.hasOwn(lineItems, key)) {
                        lineItems[key] = initialValue;
                    }
                }
                for (const lineProperty of Object.keys(lineItems)){
                    let namePart, linePart;
                    const hyphenIndex = lineProperty.indexOf("-");
                    if (hyphenIndex !== -1) {
                        namePart = lineProperty.substring(0, hyphenIndex);
                        linePart = lineProperty.substring(hyphenIndex + 1);
                    } else {
                        // fallback for safety, though lineProperty from border.parse keys
                        // should have hyphen
                        namePart = lineProperty;
                        linePart = "";
                    }
                    const lineValue = lineItems[lineProperty];
                    for (const position of borderPositions){
                        const longhandProperty = `${namePart}-${position}-${linePart}`;
                        const longhandItem = createPropertyItem(longhandProperty, lineValue, priority);
                        updateLonghandProperties(longhandProperty, longhandItem, longhandProperties);
                    }
                }
                if (value) {
                    longhandProperties.set(BORDER_IMAGE, createPropertyItem(BORDER_IMAGE, NONE, priority));
                }
            } else {
                const shorthandItem = shorthandProperties.get(property);
                const parsedItem = shorthandItem.parse(value);
                if (Array.isArray(parsedItem)) {
                    let namePart, linePart;
                    const hyphenIndex = property.indexOf("-");
                    if (hyphenIndex !== -1) {
                        namePart = property.substring(0, hyphenIndex);
                        linePart = property.substring(hyphenIndex + 1);
                    } else {
                        namePart = property;
                    }
                    for (const position of borderPositions){
                        const longhandProperty = `${namePart}-${position}-${linePart}`;
                        const longhandValue = getPositionValue(parsedItem, position);
                        const longhandItem = createPropertyItem(longhandProperty, longhandValue, priority);
                        updateLonghandProperties(longhandProperty, longhandItem, longhandProperties);
                    }
                } else if (parsedItem) {
                    for (const [key, initialValue] of shorthandItem.initialValues){
                        if (!Object.hasOwn(parsedItem, key)) {
                            parsedItem[key] = initialValue;
                        }
                    }
                    for (const longhandProperty of Object.keys(parsedItem)){
                        const longhandValue = parsedItem[longhandProperty];
                        const longhandItem = createPropertyItem(longhandProperty, longhandValue, priority);
                        updateLonghandProperties(longhandProperty, longhandItem, longhandProperties);
                    }
                }
            }
        } else if (longhandProperties.has(property)) {
            const { priority } = longhandProperties.get(property);
            if (!priority) {
                longhandProperties.delete(property);
                longhandProperties.set(property, item);
            }
        } else {
            longhandProperties.set(property, item);
        }
    }
    const borderItems = prepareBorderShorthands(longhandProperties);
    return borderItems;
}
/**
 * Normalize and prepare CSS properties, handling shorthands and longhands.
 *
 * @param {Map} properties - The initial map of properties.
 * @returns {Map} The normalized map of properties.
 */ function prepareProperties(properties) {
    const parsedProperties = new Map();
    const shorthands = new Map();
    const borders = new Map();
    let hasPrecedingBackground = false;
    for (const [property, item] of properties){
        const { value, priority } = item;
        const { logicalPropertyGroup: shorthandProperty } = propertyDefinitions.get(property) ?? {};
        if (borderProperties.has(property)) {
            borders.set(property, {
                property,
                value,
                priority
            });
        } else if (shorthandProperties.has(shorthandProperty)) {
            if (!shorthands.has(shorthandProperty)) {
                shorthands.set(shorthandProperty, new Map());
            }
            const longhandItems = shorthands.get(shorthandProperty);
            if (longhandItems.size) {
                const firstPropertyKey = longhandItems.keys().next().value;
                const { priority: firstPropertyPriority } = longhandItems.get(firstPropertyKey);
                if (priority === firstPropertyPriority) {
                    longhandItems.set(property, {
                        property,
                        value,
                        priority
                    });
                    shorthands.set(shorthandProperty, longhandItems);
                } else {
                    parsedProperties.delete(shorthandProperty);
                }
            } else {
                longhandItems.set(property, {
                    property,
                    value,
                    priority
                });
                shorthands.set(shorthandProperty, longhandItems);
            }
            parsedProperties.set(property, item);
        } else if (shorthandProperties.has(property)) {
            const shorthandItem = shorthandProperties.get(property);
            const parsedValues = shorthandItem.parse(value);
            let omitShorthandProperty = false;
            if (Array.isArray(parsedValues)) {
                const [parsedValue] = parsedValues;
                if (typeof parsedValue === "string") {
                    for (const [longhandProperty, longhandItem] of shorthandItem.shorthandFor){
                        if (!priority && properties.has(longhandProperty)) {
                            const { priority: longhandPriority } = properties.get(longhandProperty);
                            if (longhandPriority) {
                                omitShorthandProperty = true;
                                continue;
                            }
                        }
                        const { position } = longhandItem;
                        const longhandValue = getPositionValue([
                            parsedValue
                        ], position);
                        parsedProperties.set(longhandProperty, createPropertyItem(longhandProperty, longhandValue, priority));
                    }
                } else if (parsedValue) {
                    for (const longhandProperty of Object.keys(parsedValue)){
                        const longhandValue = parsedValue[longhandProperty];
                        parsedProperties.set(longhandProperty, createPropertyItem(longhandProperty, longhandValue, priority));
                    }
                }
            } else if (parsedValues && typeof parsedValues !== "string") {
                for (const longhandProperty of Object.keys(parsedValues)){
                    const longhandValue = parsedValues[longhandProperty];
                    parsedProperties.set(longhandProperty, createPropertyItem(longhandProperty, longhandValue, priority));
                }
            }
            if (!omitShorthandProperty) {
                if (property === background.property) {
                    hasPrecedingBackground = true;
                }
                parsedProperties.set(property, createPropertyItem(property, value, priority));
            }
        } else {
            parsedProperties.set(property, createPropertyItem(property, value, priority));
            if (hasPrecedingBackground) {
                const { value: shorthandValue, priority: shorthandPriority } = properties.get(background.property);
                if ((!shorthandPriority || priority) && !hasVarFunc(shorthandValue)) {
                    const replacedShorthandValue = replaceBackgroundShorthand(property, parsedProperties);
                    properties.delete(background.property);
                    properties.set(background.property, createPropertyItem(background.property, replacedShorthandValue, shorthandPriority));
                }
            }
        }
    }
    if (shorthands.size) {
        const shorthandItems = processShorthandProperties(shorthands);
        for (const [property, item] of shorthandItems){
            parsedProperties.set(property, item);
        }
    }
    if (borders.size) {
        const borderItems = processBorderProperties(borders);
        for (const [property, item] of borderItems){
            parsedProperties.set(property, item);
        }
    }
    return parsedProperties;
}
/**
 * Cleans up redundancy in border properties by removing longhands that are covered by shorthands.
 *
 * @param {Map} properties - The map of properties to normalize.
 * @returns {Map} The normalized properties map.
 */ function normalizeProperties(properties) {
    if (properties.has(border.property)) {
        for (const line of borderLines){
            properties.delete(`${border.property}-${line}`);
        }
        for (const position of borderPositions){
            properties.delete(`${border.property}-${position}`);
            for (const line of borderLines){
                properties.delete(`${border.property}-${position}-${line}`);
            }
        }
        properties.delete(`${border.property}-image`);
    }
    for (const line of borderLines){
        const lineProperty = `${border.property}-${line}`;
        if (properties.has(lineProperty)) {
            for (const position of borderPositions){
                const positionProperty = `${border.property}-${position}`;
                const longhandProperty = `${border.property}-${position}-${line}`;
                properties.delete(positionProperty);
                properties.delete(longhandProperty);
            }
        }
    }
    for (const position of borderPositions){
        const positionProperty = `${border.property}-${position}`;
        if (properties.has(positionProperty)) {
            const longhandProperties = [];
            for (const line of borderLines){
                const longhandProperty = `${border.property}-${position}-${line}`;
                longhandProperties.push(longhandProperty);
            }
            if (longhandProperties.length === 3) {
                for (const longhandProperty of longhandProperties){
                    properties.delete(longhandProperty);
                }
            } else {
                properties.delete(positionProperty);
            }
        }
    }
    return properties;
}
module.exports = {
    borderProperties,
    getPositionValue,
    normalizeProperties,
    prepareBorderProperties,
    prepareProperties,
    shorthandProperties
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/CSSStyleDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * This is a fork from the CSS Style Declaration part of
 * https://github.com/NV/CSSOM
 */ const propertyDescriptors = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/generated/propertyDescriptors.js [app-ssr] (ecmascript)");
const { borderProperties, getPositionValue, normalizeProperties, prepareBorderProperties, prepareProperties, shorthandProperties } = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/normalize.js [app-ssr] (ecmascript)");
const { hasVarFunc, isGlobalKeyword, parseCSS, parsePropertyValue, prepareValue } = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const { asciiLowercase } = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/utils/strings.js [app-ssr] (ecmascript)");
/**
 * @see https://drafts.csswg.org/cssom/#the-cssstyledeclaration-interface
 */ class CSSStyleDeclaration {
    /**
   * Creates a new CSSStyleDeclaration instance.
   *
   * @param {Function} [onChangeCallback] - Callback triggered when style changes.
   * @param {object} [opt] - Options.
   * @param {object} [opt.context] - The context object (Window, Element, or CSSRule).
   */ constructor(onChangeCallback, { context } = {}){
        // Internals for jsdom
        this._global = globalThis;
        this._onChange = onChangeCallback;
        // Internals for CSS declaration block
        // @see https://drafts.csswg.org/cssom/#css-declaration-blocks
        this._computed = false;
        this._ownerNode = null;
        this._parentRule = null;
        this._readonly = false;
        this._updating = false;
        // Other internals
        this._length = 0;
        this._propertyIndices = new Map();
        this._priorities = new Map();
        this._values = new Map();
        if (context) {
            if (typeof context.getComputedStyle === "function") {
                this._global = context;
                this._computed = true;
            // FIXME: The `_readonly` flag should initially be `false` to be editable,
            // but should eventually be set to `true`.
            // this._readonly = true;
            } else if (context.nodeType === 1 && Object.hasOwn(context, "style")) {
                this._global = context.ownerDocument.defaultView;
                this._ownerNode = context;
            } else if (Object.hasOwn(context, "parentRule")) {
                this._parentRule = context;
                // Find Window from the owner node of the StyleSheet.
                const window = context?.parentStyleSheet?.ownerNode?.ownerDocument?.defaultView;
                if (window) {
                    this._global = window;
                }
            }
        }
    }
    /**
   * Returns the textual representation of the declaration block.
   *
   * @returns {string} The serialized CSS text.
   */ get cssText() {
        if (this._computed) {
            return "";
        }
        const properties = new Map();
        for(let i = 0; i < this._length; i++){
            const property = this[i];
            const value = this.getPropertyValue(property);
            const priority = this._priorities.get(property) ?? "";
            if (shorthandProperties.has(property)) {
                const { shorthandFor } = shorthandProperties.get(property);
                for (const [longhand] of shorthandFor){
                    if (priority || !this._priorities.get(longhand)) {
                        properties.delete(longhand);
                    }
                }
            }
            properties.set(property, {
                property,
                value,
                priority
            });
        }
        const normalizedProperties = normalizeProperties(properties);
        const parts = [];
        for (const { property, value, priority } of normalizedProperties.values()){
            if (priority) {
                parts.push(`${property}: ${value} !${priority};`);
            } else {
                parts.push(`${property}: ${value};`);
            }
        }
        return parts.join(" ");
    }
    /**
   * Sets the textual representation of the declaration block.
   * This clears all existing properties and parses the new CSS text.
   *
   * @param {string} text - The new CSS text.
   */ set cssText(text) {
        if (this._readonly) {
            const msg = "cssText can not be modified.";
            const name = "NoModificationAllowedError";
            throw new this._global.DOMException(msg, name);
        }
        this._clearIndexedProperties();
        this._values.clear();
        this._priorities.clear();
        if (this._parentRule || this._ownerNode && this._updating) {
            return;
        }
        try {
            this._updating = true;
            const valueObj = parseCSS(text, {
                context: "declarationList",
                parseValue: false
            });
            if (valueObj?.children) {
                const properties = new Map();
                let shouldSkipNext = false;
                for (const item of valueObj.children){
                    if (item.type === "Atrule") {
                        continue;
                    }
                    if (item.type === "Rule") {
                        shouldSkipNext = true;
                        continue;
                    }
                    if (shouldSkipNext === true) {
                        shouldSkipNext = false;
                        continue;
                    }
                    const { important, property, value: { value } } = item;
                    if (typeof property === "string" && typeof value === "string") {
                        const priority = important ? "important" : "";
                        const isCustomProperty = property.startsWith("--");
                        if (isCustomProperty || hasVarFunc(value)) {
                            if (properties.has(property)) {
                                const { priority: itemPriority } = properties.get(property);
                                if (!itemPriority) {
                                    properties.set(property, {
                                        property,
                                        value,
                                        priority
                                    });
                                }
                            } else {
                                properties.set(property, {
                                    property,
                                    value,
                                    priority
                                });
                            }
                        } else {
                            const parsedValue = parsePropertyValue(property, value);
                            if (parsedValue) {
                                if (properties.has(property)) {
                                    const { priority: itemPriority } = properties.get(property);
                                    if (!itemPriority) {
                                        properties.set(property, {
                                            property,
                                            value,
                                            priority
                                        });
                                    }
                                } else {
                                    properties.set(property, {
                                        property,
                                        value,
                                        priority
                                    });
                                }
                            } else {
                                this.removeProperty(property);
                            }
                        }
                    }
                }
                const parsedProperties = prepareProperties(properties);
                for (const [property, item] of parsedProperties){
                    const { priority, value } = item;
                    this._priorities.set(property, priority);
                    this.setProperty(property, value, priority);
                }
            }
        } catch  {
            return;
        } finally{
            this._updating = false;
        }
        if (this._onChange) {
            this._onChange(this.cssText);
        }
    }
    /**
   * Returns the number of properties in the declaration block.
   *
   * @returns {number} The property count.
   */ get length() {
        return this._length;
    }
    /**
   * Returns the CSSRule that is the parent of this declaration block.
   *
   * @returns {object|null} The parent CSSRule or null.
   */ get parentRule() {
        return this._parentRule;
    }
    /**
   * Alias for the "float" property.
   *
   * @returns {string} The value of the "float" property.
   */ get cssFloat() {
        return this.getPropertyValue("float");
    }
    /**
   * Sets the "float" property.
   *
   * @param {string} value - The new value for "float".
   */ set cssFloat(value) {
        this._setProperty("float", value);
    }
    /**
   * Returns the priority of the specified property (e.g. "important").
   *
   * @param {string} property - The property name.
   * @returns {string} The priority string, or empty string if not set.
   */ getPropertyPriority(property) {
        return this._priorities.get(property) || "";
    }
    /**
   * Returns the value of the specified property.
   *
   * @param {string} property - The property name.
   * @returns {string} The property value, or empty string if not set.
   */ getPropertyValue(property) {
        if (this._values.has(property)) {
            return this._values.get(property).toString();
        }
        return "";
    }
    /**
   * Returns the property name at the specified index.
   *
   * @param {...number} args - The index (only the first argument is used).
   * @returns {string} The property name, or empty string if index is invalid.
   */ item(...args) {
        if (!args.length) {
            const msg = "1 argument required, but only 0 present.";
            throw new this._global.TypeError(msg);
        }
        const [value] = args;
        const index = parseInt(value);
        if (Number.isNaN(index) || index < 0 || index >= this._length) {
            return "";
        }
        return this[index];
    }
    /**
   * Removes the specified property from the declaration block.
   *
   * @param {string} property - The property name to remove.
   * @returns {string} The value of the removed property.
   */ removeProperty(property) {
        if (this._readonly) {
            const msg = `Property ${property} can not be modified.`;
            const name = "NoModificationAllowedError";
            throw new this._global.DOMException(msg, name);
        }
        if (!this._values.has(property)) {
            return "";
        }
        const prevValue = this._values.get(property);
        this._values.delete(property);
        this._priorities.delete(property);
        const index = this._getIndexOf(property);
        if (index >= 0) {
            this._removeIndexedProperty(index);
            if (this._onChange) {
                this._onChange(this.cssText);
            }
        }
        return prevValue;
    }
    /**
   * Sets a property value with an optional priority.
   *
   * @param {string} property - The property name.
   * @param {string} value - The property value.
   * @param {string} [priority=""] - The priority (e.g. "important").
   */ setProperty(property, value, priority = "") {
        if (this._readonly) {
            const msg = `Property ${property} can not be modified.`;
            const name = "NoModificationAllowedError";
            throw new this._global.DOMException(msg, name);
        }
        value = prepareValue(value);
        if (value === "") {
            if (Object.hasOwn(propertyDescriptors, property)) {
                // TODO: Refactor handlers to not require `.call()`.
                propertyDescriptors[property].set.call(this, value);
            }
            this.removeProperty(property);
            return;
        }
        // Custom property
        if (property.startsWith("--")) {
            this._setProperty(property, value, priority);
            return;
        }
        property = asciiLowercase(property);
        if (!Object.hasOwn(propertyDescriptors, property)) {
            return;
        }
        if (priority) {
            this._priorities.set(property, priority);
        } else {
            this._priorities.delete(property);
        }
        propertyDescriptors[property].set.call(this, value);
    }
    /**
   * Clears all indexed properties, properties indices and resets length to 0.
   *
   * @private
   */ _clearIndexedProperties() {
        this._propertyIndices.clear();
        for(let i = 0; i < this._length; i++){
            delete this[i];
        }
        this._length = 0;
    }
    /**
   * Removes an indexed property at the specified index, shifts others, and updates indices.
   *
   * @private
   * @param {number} index - The index of the property to remove.
   */ _removeIndexedProperty(index) {
        this._propertyIndices.delete(this[index]);
        for(let i = index; i < this._length - 1; i++){
            const property = this[i + 1];
            this[i] = property;
            this._propertyIndices.set(property, i);
        }
        delete this[this._length - 1];
        this._length--;
    }
    /**
   * Returns the index of the specified property.
   *
   * @private
   * @param {string} property - The property name to search for.
   * @returns {number} The index of the property, or -1 if not found.
   */ _getIndexOf(property) {
        return this._propertyIndices.get(property) ?? -1;
    }
    /**
   * Sets a property and update indices.
   *
   * @private
   * @param {string} property - The property name.
   * @param {string} value - The property value.
   * @param {string} priority - The priority.
   */ _setProperty(property, value, priority) {
        if (typeof value !== "string") {
            return;
        }
        if (value === "") {
            this.removeProperty(property);
            return;
        }
        let originalText = "";
        if (this._onChange && !this._updating) {
            originalText = this.cssText;
        }
        if (!this._values.has(property)) {
            // New property.
            this[this._length] = property;
            this._propertyIndices.set(property, this._length);
            this._length++;
        }
        if (priority === "important") {
            this._priorities.set(property, priority);
        } else {
            this._priorities.delete(property);
        }
        this._values.set(property, value);
        if (this._onChange && !this._updating && this.cssText !== originalText) {
            this._onChange(this.cssText);
        }
    }
    /**
   * Helper to handle border property expansion.
   *
   * @private
   * @param {string} property - The property name (e.g. "border").
   * @param {object|Array|string} value - The value to set.
   * @param {string} priority - The priority.
   */ _borderSetter(property, value, priority) {
        const properties = new Map();
        if (typeof priority !== "string") {
            priority = this._priorities.get(property) ?? "";
        }
        if (property === "border") {
            properties.set(property, {
                propery: property,
                value,
                priority
            });
        } else {
            for(let i = 0; i < this._length; i++){
                const itemProperty = this[i];
                if (borderProperties.has(itemProperty)) {
                    const itemValue = this.getPropertyValue(itemProperty);
                    const longhandPriority = this._priorities.get(itemProperty) ?? "";
                    let itemPriority = longhandPriority;
                    if (itemProperty === property) {
                        itemPriority = priority;
                    }
                    properties.set(itemProperty, {
                        property: itemProperty,
                        value: itemValue,
                        priority: itemPriority
                    });
                }
            }
        }
        const parsedProperties = prepareBorderProperties(property, value, priority, properties);
        for (const [itemProperty, item] of parsedProperties){
            const { priority: itemPriority, value: itemValue } = item;
            this._setProperty(itemProperty, itemValue, itemPriority);
        }
    }
    /**
   * Helper to handle flexbox shorthand expansion.
   *
   * @private
   * @param {string} property - The property name.
   * @param {string} value - The property value.
   * @param {string} priority - The priority.
   * @param {string} shorthandProperty - The shorthand property name.
   */ _flexBoxSetter(property, value, priority, shorthandProperty) {
        if (!shorthandProperty || !shorthandProperties.has(shorthandProperty)) {
            return;
        }
        const shorthandPriority = this._priorities.get(shorthandProperty);
        this.removeProperty(shorthandProperty);
        if (typeof priority !== "string") {
            priority = this._priorities.get(property) ?? "";
        }
        this.removeProperty(property);
        if (shorthandPriority && priority) {
            this._setProperty(property, value);
        } else {
            this._setProperty(property, value, priority);
        }
        if (value && !hasVarFunc(value)) {
            const longhandValues = [];
            const shorthandItem = shorthandProperties.get(shorthandProperty);
            let hasGlobalKeyword = false;
            for (const [longhandProperty] of shorthandItem.shorthandFor){
                if (longhandProperty === property) {
                    if (isGlobalKeyword(value)) {
                        hasGlobalKeyword = true;
                    }
                    longhandValues.push(value);
                } else {
                    const longhandValue = this.getPropertyValue(longhandProperty);
                    const longhandPriority = this._priorities.get(longhandProperty) ?? "";
                    if (!longhandValue || longhandPriority !== priority) {
                        break;
                    }
                    if (isGlobalKeyword(longhandValue)) {
                        hasGlobalKeyword = true;
                    }
                    longhandValues.push(longhandValue);
                }
            }
            if (longhandValues.length === shorthandItem.shorthandFor.size) {
                if (hasGlobalKeyword) {
                    const [firstValue, ...restValues] = longhandValues;
                    if (restValues.every((val)=>val === firstValue)) {
                        this._setProperty(shorthandProperty, firstValue, priority);
                    }
                } else {
                    const parsedValue = shorthandItem.parse(longhandValues.join(" "));
                    const shorthandValue = Object.values(parsedValue).join(" ");
                    this._setProperty(shorthandProperty, shorthandValue, priority);
                }
            }
        }
    }
    /**
   * Helper to handle position shorthand expansion.
   *
   * @private
   * @param {string} property - The property name.
   * @param {Array|string} value - The property value.
   * @param {string} priority - The priority.
   */ _positionShorthandSetter(property, value, priority) {
        if (!shorthandProperties.has(property)) {
            return;
        }
        const shorthandValues = [];
        if (Array.isArray(value)) {
            shorthandValues.push(...value);
        } else if (typeof value === "string") {
            shorthandValues.push(value);
        } else {
            return;
        }
        if (typeof priority !== "string") {
            priority = this._priorities.get(property) ?? "";
        }
        const { position, shorthandFor } = shorthandProperties.get(property);
        let hasPriority = false;
        for (const [longhandProperty, longhandItem] of shorthandFor){
            const { position: longhandPosition } = longhandItem;
            const longhandValue = getPositionValue(shorthandValues, longhandPosition);
            if (priority) {
                this._setProperty(longhandProperty, longhandValue, priority);
            } else {
                const longhandPriority = this._priorities.get(longhandProperty) ?? "";
                if (longhandPriority) {
                    hasPriority = true;
                } else {
                    this._setProperty(longhandProperty, longhandValue, priority);
                }
            }
        }
        if (hasPriority) {
            this.removeProperty(property);
        } else {
            const shorthandValue = getPositionValue(shorthandValues, position);
            this._setProperty(property, shorthandValue, priority);
        }
    }
    /**
   * Helper to handle position longhand updates affecting shorthands.
   *
   * @private
   * @param {string} property - The property name.
   * @param {string} value - The property value.
   * @param {string} priority - The priority.
   * @param {string} shorthandProperty - The shorthand property name.
   */ _positionLonghandSetter(property, value, priority, shorthandProperty) {
        if (!shorthandProperty || !shorthandProperties.has(shorthandProperty)) {
            return;
        }
        const shorthandPriority = this._priorities.get(shorthandProperty);
        this.removeProperty(shorthandProperty);
        if (typeof priority !== "string") {
            priority = this._priorities.get(property) ?? "";
        }
        this.removeProperty(property);
        if (shorthandPriority && priority) {
            this._setProperty(property, value);
        } else {
            this._setProperty(property, value, priority);
        }
        if (value && !hasVarFunc(value)) {
            const longhandValues = [];
            const { shorthandFor, position: shorthandPosition } = shorthandProperties.get(shorthandProperty);
            for (const [longhandProperty] of shorthandFor){
                const longhandValue = this.getPropertyValue(longhandProperty);
                const longhandPriority = this._priorities.get(longhandProperty) ?? "";
                if (!longhandValue || longhandPriority !== priority) {
                    return;
                }
                longhandValues.push(longhandValue);
            }
            if (longhandValues.length === shorthandFor.size) {
                const replacedValue = getPositionValue(longhandValues, shorthandPosition);
                this._setProperty(shorthandProperty, replacedValue);
            }
        }
    }
}
// TODO: Remove once the CSSStyleDeclaration is fully spec-compliant.
// @see https://github.com/jsdom/cssstyle/issues/255#issuecomment-3630183207
Object.defineProperties(CSSStyleDeclaration.prototype, propertyDescriptors);
module.exports = {
    CSSStyleDeclaration
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { CSSStyleDeclaration } = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/CSSStyleDeclaration.js [app-ssr] (ecmascript)");
const propertyDefinitions = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/generated/propertyDefinitions.js [app-ssr] (ecmascript)");
const { parsePropertyValue } = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
module.exports = {
    CSSStyleDeclaration,
    parsePropertyValue,
    propertyDefinitions
};
}),
];

//# sourceMappingURL=f5b39_cssstyle_lib_a8ee6ce6._.js.map