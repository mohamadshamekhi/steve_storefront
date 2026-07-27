module.exports = [
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/backgroundImage.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "background-image";
const shorthand = "background";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(shorthand, "");
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = !this._priorities.get(shorthand) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the background-image property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const values = parsers.splitValue(v, {
        delimiter: ","
    });
    const parsedValues = [];
    for (const val of values){
        const value = parsers.parsePropertyValue(property, val);
        if (Array.isArray(value) && value.length === 1) {
            const parsedValue = parsers.resolveImageValue(value);
            if (!parsedValue) {
                return;
            }
            parsedValues.push(parsedValue);
        } else if (typeof value === "string") {
            parsedValues.push(value);
        } else {
            return;
        }
    }
    if (parsedValues.length) {
        return parsedValues.join(", ");
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/backgroundPosition.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
// Constants
const { AST_TYPES } = parsers;
const property = "background-position";
const shorthand = "background";
const keyX = [
    "left",
    "right"
];
const keyY = [
    "top",
    "bottom"
];
const keywordsX = [
    "center",
    ...keyX
];
const keywordsY = [
    "center",
    ...keyY
];
const keywords = [
    "center",
    ...keyX,
    ...keyY
];
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(shorthand, "");
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = !this._priorities.get(shorthand) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the background-position property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const values = parsers.splitValue(v, {
        delimiter: ","
    });
    const parsedValues = [];
    for (const val of values){
        const value = parsers.parsePropertyValue(property, val);
        if (Array.isArray(value) && value.length) {
            const [part1, part2, part3, part4] = value;
            let parsedValue = "";
            switch(value.length){
                case 1:
                    {
                        if (part1.type === AST_TYPES.GLOBAL_KEYWORD) {
                            parsedValue = part1.name;
                        } else {
                            const val1 = part1.type === AST_TYPES.IDENTIFIER ? part1.name : parsers.resolveNumericValue([
                                part1
                            ], {
                                type: "length"
                            });
                            if (val1) {
                                if (val1 === "center") {
                                    parsedValue = `${val1} ${val1}`;
                                } else if (val1 === "top" || val1 === "bottom") {
                                    parsedValue = `center ${val1}`;
                                } else {
                                    parsedValue = `${val1} center`;
                                }
                            }
                        }
                        break;
                    }
                case 2:
                    {
                        const val1 = part1.type === AST_TYPES.IDENTIFIER ? part1.name : parsers.resolveNumericValue([
                            part1
                        ], {
                            type: "length"
                        });
                        const val2 = part2.type === AST_TYPES.IDENTIFIER ? part2.name : parsers.resolveNumericValue([
                            part2
                        ], {
                            type: "length"
                        });
                        if (val1 && val2) {
                            if (keywordsX.includes(val1) && keywordsY.includes(val2)) {
                                parsedValue = `${val1} ${val2}`;
                            } else if (keywordsY.includes(val1) && keywordsX.includes(val2)) {
                                parsedValue = `${val2} ${val1}`;
                            } else if (keywordsX.includes(val1)) {
                                if (val2 === "center" || !keywordsX.includes(val2)) {
                                    parsedValue = `${val1} ${val2}`;
                                }
                            } else if (keywordsY.includes(val2)) {
                                if (!keywordsY.includes(val1)) {
                                    parsedValue = `${val1} ${val2}`;
                                }
                            } else if (!keywordsY.includes(val1) && !keywordsX.includes(val2)) {
                                parsedValue = `${val1} ${val2}`;
                            }
                        }
                        break;
                    }
                case 3:
                    {
                        const val1 = part1.type === AST_TYPES.IDENTIFIER && part1.name;
                        const val2 = part2.type === AST_TYPES.IDENTIFIER ? part2.name : parsers.resolveNumericValue([
                            part2
                        ], {
                            type: "length"
                        });
                        const val3 = part3.type === AST_TYPES.IDENTIFIER ? part3.name : parsers.resolveNumericValue([
                            part3
                        ], {
                            type: "length"
                        });
                        if (val1 && val2 && val3) {
                            let posX = "";
                            let offX = "";
                            let posY = "";
                            let offY = "";
                            if (keywordsX.includes(val1)) {
                                if (keyY.includes(val2)) {
                                    if (!keywords.includes(val3)) {
                                        posX = val1;
                                        posY = val2;
                                        offY = val3;
                                    }
                                } else if (keyY.includes(val3)) {
                                    if (!keywords.includes(val2)) {
                                        posX = val1;
                                        offX = val2;
                                        posY = val3;
                                    }
                                }
                            } else if (keywordsY.includes(val1)) {
                                if (keyX.includes(val2)) {
                                    if (!keywords.includes(val3)) {
                                        posX = val2;
                                        offX = val3;
                                        posY = val1;
                                    }
                                } else if (keyX.includes(val3)) {
                                    if (!keywords.includes(val2)) {
                                        posX = val3;
                                        posY = val1;
                                        offY = val2;
                                    }
                                }
                            }
                            if (posX && posY) {
                                if (offX) {
                                    parsedValue = `${posX} ${offX} ${posY}`;
                                } else if (offY) {
                                    parsedValue = `${posX} ${posY} ${offY}`;
                                }
                            }
                        }
                        break;
                    }
                case 4:
                    {
                        const val1 = part1.type === AST_TYPES.IDENTIFIER && part1.name;
                        const val2 = parsers.resolveNumericValue([
                            part2
                        ], {
                            type: "length"
                        });
                        const val3 = part3.type === AST_TYPES.IDENTIFIER && part3.name;
                        const val4 = parsers.resolveNumericValue([
                            part4
                        ], {
                            type: "length"
                        });
                        if (val1 && val2 && val3 && val4) {
                            let posX = "";
                            let offX = "";
                            let posY = "";
                            let offY = "";
                            if (keywordsX.includes(val1) && keyY.includes(val3)) {
                                posX = val1;
                                offX = val2;
                                posY = val3;
                                offY = val4;
                            } else if (keyX.includes(val1) && keywordsY.includes(val3)) {
                                posX = val1;
                                offX = val2;
                                posY = val3;
                                offY = val4;
                            } else if (keyY.includes(val1) && keywordsX.includes(val3)) {
                                posX = val3;
                                offX = val4;
                                posY = val1;
                                offY = val2;
                            }
                            if (posX && offX && posY && offY) {
                                parsedValue = `${posX} ${offX} ${posY} ${offY}`;
                            }
                        }
                        break;
                    }
                default:
            }
            if (parsedValue) {
                parsedValues.push(parsedValue);
            } else {
                return;
            }
        } else if (typeof value === "string") {
            parsedValues.push(value);
        }
    }
    if (parsedValues.length) {
        return parsedValues.join(", ");
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/backgroundSize.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
// Constants
const { AST_TYPES } = parsers;
const property = "background-size";
const shorthand = "background";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(shorthand, "");
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = !this._priorities.get(shorthand) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the background-size property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const values = parsers.splitValue(v, {
        delimiter: ","
    });
    const parsedValues = [];
    for (const val of values){
        const value = parsers.parsePropertyValue(property, val);
        if (Array.isArray(value) && value.length) {
            if (value.length === 1) {
                const [{ isNumber, name, type, value: itemValue }] = value;
                switch(type){
                    case AST_TYPES.CALC:
                        {
                            if (isNumber) {
                                return;
                            }
                            parsedValues.push(`${name}(${itemValue})`);
                            break;
                        }
                    case AST_TYPES.GLOBAL_KEYWORD:
                    case AST_TYPES.IDENTIFIER:
                        {
                            parsedValues.push(name);
                            break;
                        }
                    default:
                        {
                            const parsedValue = parsers.resolveNumericValue(value, {
                                type: "length"
                            });
                            if (!parsedValue) {
                                return;
                            }
                            parsedValues.push(parsedValue);
                        }
                }
            } else {
                const [val1, val2] = value;
                const parts = [];
                if (val1.type === AST_TYPES.CALC && !val1.isNumber) {
                    parts.push(`${val1.name}(${val1.value})`);
                } else if (val1.type === AST_TYPES.IDENTIFIER) {
                    parts.push(val1.name);
                } else if (val1.type === AST_TYPES.DIMENSION) {
                    parts.push(`${val1.value}${val1.unit}`);
                } else if (val1.type === AST_TYPES.PERCENTAGE) {
                    parts.push(`${val1.value}%`);
                } else {
                    return;
                }
                switch(val2.type){
                    case AST_TYPES.CALC:
                        {
                            if (val2.isNumber) {
                                return;
                            }
                            parts.push(`${val2.name}(${val2.value})`);
                            break;
                        }
                    case AST_TYPES.DIMENSION:
                        {
                            parts.push(`${val2.value}${val2.unit}`);
                            break;
                        }
                    case AST_TYPES.IDENTIFIER:
                        {
                            if (val2.name !== "auto") {
                                parts.push(val2.name);
                            }
                            break;
                        }
                    case AST_TYPES.PERCENTAGE:
                        {
                            parts.push(`${val2.value}%`);
                            break;
                        }
                    default:
                        {
                            return;
                        }
                }
                parsedValues.push(parts.join(" "));
            }
        } else if (typeof value === "string") {
            parsedValues.push(value);
        }
    }
    if (parsedValues.length) {
        return parsedValues.join(", ");
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/backgroundRepeat.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
// Constants
const { AST_TYPES } = parsers;
const property = "background-repeat";
const shorthand = "background";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(shorthand, "");
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = !this._priorities.get(shorthand) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the background-repeat property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const values = parsers.splitValue(v, {
        delimiter: ","
    });
    const parsedValues = [];
    for (const val of values){
        const value = parsers.parsePropertyValue(property, val);
        if (Array.isArray(value) && value.length) {
            let parsedValue = "";
            switch(value.length){
                case 1:
                    {
                        const [part1] = value;
                        if (part1.type === AST_TYPES.GLOBAL_KEYWORD || part1.type === AST_TYPES.IDENTIFIER) {
                            parsedValue = part1.name;
                        }
                        break;
                    }
                case 2:
                    {
                        const [part1, part2] = value;
                        const val1 = part1.type === AST_TYPES.IDENTIFIER && part1.name;
                        const val2 = part2.type === AST_TYPES.IDENTIFIER && part2.name;
                        if (val1 && val2) {
                            if (val1 === "repeat" && val2 === "no-repeat") {
                                parsedValue = "repeat-x";
                            } else if (val1 === "no-repeat" && val2 === "repeat") {
                                parsedValue = "repeat-y";
                            } else if (val1 === val2) {
                                parsedValue = val1;
                            } else {
                                parsedValue = `${val1} ${val2}`;
                            }
                        }
                        break;
                    }
                default:
            }
            if (parsedValue) {
                parsedValues.push(parsedValue);
            } else {
                return;
            }
        } else if (typeof value === "string") {
            parsedValues.push(value);
        }
    }
    if (parsedValues.length) {
        return parsedValues.join(", ");
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/backgroundOrigin.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "background-origin";
const shorthand = "background";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(shorthand, "");
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = !this._priorities.get(shorthand) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the background-origin property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const values = parsers.splitValue(v, {
        delimiter: ","
    });
    const parsedValues = [];
    for (const val of values){
        const value = parsers.parsePropertyValue(property, val);
        if (Array.isArray(value) && value.length === 1) {
            const parsedValue = parsers.resolveKeywordValue(value);
            if (!parsedValue) {
                return;
            }
            parsedValues.push(parsedValue);
        } else if (typeof value === "string") {
            parsedValues.push(value);
        }
    }
    if (parsedValues.length) {
        return parsedValues.join(", ");
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/backgroundClip.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "background-clip";
const shorthand = "background";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(shorthand, "");
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = !this._priorities.get(shorthand) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the background-clip property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const values = parsers.splitValue(v, {
        delimiter: ","
    });
    const parsedValues = [];
    for (const val of values){
        const value = parsers.parsePropertyValue(property, val);
        if (Array.isArray(value) && value.length === 1) {
            const parsedValue = parsers.resolveKeywordValue(value);
            if (!parsedValue) {
                return;
            }
            parsedValues.push(parsedValue);
        } else if (typeof value === "string") {
            parsedValues.push(value);
        }
    }
    if (parsedValues.length) {
        return parsedValues.join(", ");
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/backgroundAttachment.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "background-attachment";
const shorthand = "background";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(shorthand, "");
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = !this._priorities.get(shorthand) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the background-attachment property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const values = parsers.splitValue(v, {
        delimiter: ","
    });
    const parsedValues = [];
    for (const val of values){
        const value = parsers.parsePropertyValue(property, val);
        if (Array.isArray(value) && value.length === 1) {
            const parsedValue = parsers.resolveKeywordValue(value);
            if (!parsedValue) {
                return;
            }
            parsedValues.push(parsedValue);
        } else if (typeof value === "string") {
            parsedValues.push(value);
        }
    }
    if (parsedValues.length) {
        return parsedValues.join(", ");
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/backgroundColor.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "background-color";
const shorthand = "background";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(shorthand, "");
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = !this._priorities.get(shorthand) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the background-color property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveColorValue(value);
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/background.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const backgroundImage = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/backgroundImage.js [app-ssr] (ecmascript)");
const backgroundPosition = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/backgroundPosition.js [app-ssr] (ecmascript)");
const backgroundSize = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/backgroundSize.js [app-ssr] (ecmascript)");
const backgroundRepeat = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/backgroundRepeat.js [app-ssr] (ecmascript)");
const backgroundOrigin = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/backgroundOrigin.js [app-ssr] (ecmascript)");
const backgroundClip = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/backgroundClip.js [app-ssr] (ecmascript)");
const backgroundAttachment = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/backgroundAttachment.js [app-ssr] (ecmascript)");
const backgroundColor = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/backgroundColor.js [app-ssr] (ecmascript)");
const property = "background";
const initialValues = new Map([
    [
        backgroundImage.property,
        "none"
    ],
    [
        backgroundPosition.property,
        "0% 0%"
    ],
    [
        backgroundSize.property,
        "auto"
    ],
    [
        backgroundRepeat.property,
        "repeat"
    ],
    [
        backgroundOrigin.property,
        "padding-box"
    ],
    [
        backgroundClip.property,
        "border-box"
    ],
    [
        backgroundAttachment.property,
        "scroll"
    ],
    [
        backgroundColor.property,
        "transparent"
    ]
]);
const shorthandFor = new Map([
    [
        backgroundImage.property,
        backgroundImage
    ],
    [
        backgroundPosition.property,
        backgroundPosition
    ],
    [
        backgroundSize.property,
        backgroundSize
    ],
    [
        backgroundRepeat.property,
        backgroundRepeat
    ],
    [
        backgroundOrigin.property,
        backgroundOrigin
    ],
    [
        backgroundClip.property,
        backgroundClip
    ],
    [
        backgroundAttachment.property,
        backgroundAttachment
    ],
    [
        backgroundColor.property,
        backgroundColor
    ]
]);
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (v === "" || parsers.hasVarFunc(v)) {
            for (const [key] of shorthandFor){
                this._setProperty(key, "");
            }
            this._setProperty(property, v);
        } else {
            const bgValues = parse(v);
            if (!Array.isArray(bgValues)) {
                return;
            }
            const bgMap = new Map([
                [
                    backgroundImage.property,
                    []
                ],
                [
                    backgroundPosition.property,
                    []
                ],
                [
                    backgroundSize.property,
                    []
                ],
                [
                    backgroundRepeat.property,
                    []
                ],
                [
                    backgroundOrigin.property,
                    []
                ],
                [
                    backgroundClip.property,
                    []
                ],
                [
                    backgroundAttachment.property,
                    []
                ],
                [
                    backgroundColor.property,
                    []
                ]
            ]);
            const backgrounds = [];
            for (const bgValue of bgValues){
                const bg = [];
                for (const [longhand, value] of Object.entries(bgValue)){
                    if (value) {
                        const arr = bgMap.get(longhand);
                        arr.push(value);
                        bgMap.set(longhand, arr);
                        if (value !== initialValues.get(longhand)) {
                            if (longhand === backgroundSize.property) {
                                bg.push(`/ ${value}`);
                            } else {
                                bg.push(value);
                            }
                        } else if (longhand === backgroundImage.property) {
                            if (v === "none") {
                                bg.push(value);
                            }
                        } else if (longhand === backgroundColor.property) {
                            if (v === "transparent") {
                                bg.push(value);
                            }
                        }
                    }
                }
                backgrounds.push(bg.join(" "));
            }
            const priority = this._priorities.get(property) ?? "";
            for (const [longhand, value] of bgMap){
                this._setProperty(longhand, value.join(", "), priority);
            }
            this._setProperty(property, backgrounds.join(", "), priority);
        }
    },
    get () {
        const v = this.getPropertyValue(property);
        if (parsers.hasVarFunc(v)) {
            return v;
        }
        const bgMap = new Map();
        let l = 0;
        for (const [longhand] of shorthandFor){
            const val = this.getPropertyValue(longhand);
            if (longhand === backgroundImage.property) {
                if (val === "none" && v === "none" && this.getPropertyValue(backgroundColor.property) === "transparent") {
                    return val;
                }
                if (val !== initialValues.get(longhand)) {
                    const imgValues = parsers.splitValue(val, {
                        delimiter: ","
                    });
                    l = imgValues.length;
                    bgMap.set(longhand, imgValues);
                }
            } else if (longhand === backgroundColor.property) {
                if (val !== initialValues.get(longhand) || v.includes(val)) {
                    bgMap.set(longhand, [
                        val
                    ]);
                }
            } else if (val !== initialValues.get(longhand)) {
                bgMap.set(longhand, parsers.splitValue(val, {
                    delimiter: ","
                }));
            }
        }
        if (l === 0) {
            const bgColArr = bgMap.get(backgroundColor.property);
            const background = bgColArr ? bgColArr[0] : null;
            if (background) {
                return background;
            }
            return "";
        }
        const bgValues = [];
        for(let i = 0; i < l; i++){
            bgValues[i] = [];
        }
        for (const [longhand, values] of bgMap){
            for(let i = 0; i < l; i++){
                switch(longhand){
                    case backgroundColor.property:
                        {
                            if (i === l - 1) {
                                const value = values[0];
                                if (parsers.hasVarFunc(value)) {
                                    return "";
                                }
                                if (value && value !== initialValues.get(longhand)) {
                                    const bgValue = bgValues[i];
                                    bgValue.push(value);
                                }
                            }
                            break;
                        }
                    case backgroundSize.property:
                        {
                            const value = values[i];
                            if (parsers.hasVarFunc(value)) {
                                return "";
                            }
                            if (value && value !== initialValues.get(longhand)) {
                                const bgValue = bgValues[i];
                                bgValue.push(`/ ${value}`);
                            }
                            break;
                        }
                    default:
                        {
                            const value = values[i];
                            if (parsers.hasVarFunc(value)) {
                                return "";
                            }
                            if (value && value !== initialValues.get(longhand)) {
                                const bgValue = bgValues[i];
                                bgValue.push(value);
                            }
                        }
                }
            }
        }
        const backgrounds = [];
        for (const bgValue of bgValues){
            backgrounds.push(bgValue.join(" "));
        }
        return backgrounds.join(", ");
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the background property value.
 *
 * @param {string} v - The value to parse.
 * @returns {Array<object>|undefined} The parsed background values or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    } else if (parsers.hasCalcFunc(v)) {
        v = parsers.resolveCalc(v);
    }
    if (!parsers.isValidPropertyValue(property, v)) {
        return;
    }
    const values = parsers.splitValue(v, {
        delimiter: ","
    });
    const bgValues = [];
    const l = values.length;
    for(let i = 0; i < l; i++){
        let bg = {
            [backgroundImage.property]: initialValues.get(backgroundImage.property),
            [backgroundPosition.property]: initialValues.get(backgroundPosition.property),
            [backgroundSize.property]: initialValues.get(backgroundSize.property),
            [backgroundRepeat.property]: initialValues.get(backgroundRepeat.property),
            [backgroundOrigin.property]: initialValues.get(backgroundOrigin.property),
            [backgroundClip.property]: initialValues.get(backgroundClip.property),
            [backgroundAttachment.property]: initialValues.get(backgroundAttachment.property),
            [backgroundColor.property]: initialValues.get(backgroundColor.property)
        };
        if (l > 1 && i !== l - 1) {
            bg = {
                [backgroundImage.property]: initialValues.get(backgroundImage.property),
                [backgroundPosition.property]: initialValues.get(backgroundPosition.property),
                [backgroundSize.property]: initialValues.get(backgroundSize.property),
                [backgroundRepeat.property]: initialValues.get(backgroundRepeat.property),
                [backgroundOrigin.property]: initialValues.get(backgroundOrigin.property),
                [backgroundClip.property]: initialValues.get(backgroundClip.property),
                [backgroundAttachment.property]: initialValues.get(backgroundAttachment.property)
            };
        }
        const bgPosition = [];
        const bgSize = [];
        const bgRepeat = [];
        const bgBox = [];
        const bgParts = parsers.splitValue(values[i], {
            delimiter: "/"
        });
        if (!bgParts.length || bgParts.length > 2) {
            return;
        }
        const [bgPart1, bgPart2 = ""] = bgParts;
        const parts1 = parsers.splitValue(bgPart1);
        for (const part of parts1){
            let partValid = false;
            for (const [longhand, value] of shorthandFor){
                if (parsers.isValidPropertyValue(longhand, part)) {
                    partValid = true;
                    switch(longhand){
                        case backgroundClip.property:
                        case backgroundOrigin.property:
                            {
                                const parsedValue = value.parse(part);
                                if (parsedValue) {
                                    bgBox.push(parsedValue);
                                }
                                break;
                            }
                        case backgroundColor.property:
                            {
                                if (i !== values.length - 1) {
                                    return;
                                }
                                const parsedValue = value.parse(part);
                                if (parsedValue) {
                                    bg[longhand] = parsedValue;
                                }
                                break;
                            }
                        case backgroundPosition.property:
                            {
                                const parsedValue = value.parse(part);
                                if (parsedValue) {
                                    bgPosition.push(parsedValue);
                                }
                                break;
                            }
                        case backgroundRepeat.property:
                            {
                                const parsedValue = value.parse(part);
                                if (parsedValue) {
                                    bgRepeat.push(parsedValue);
                                }
                                break;
                            }
                        case backgroundSize.property:
                            {
                                break;
                            }
                        default:
                            {
                                const parsedValue = value.parse(part);
                                if (parsedValue) {
                                    bg[longhand] = parsedValue;
                                }
                            }
                    }
                }
            }
            if (!partValid) {
                return;
            }
        }
        if (bgPart2) {
            const parts2 = parsers.splitValue(bgPart2);
            for (const part of parts2){
                let partValid = false;
                for (const [longhand, value] of shorthandFor){
                    if (parsers.isValidPropertyValue(longhand, part)) {
                        partValid = true;
                        switch(longhand){
                            case backgroundClip.property:
                            case backgroundOrigin.property:
                                {
                                    const parsedValue = value.parse(part);
                                    if (parsedValue) {
                                        bgBox.push(parsedValue);
                                    }
                                    break;
                                }
                            case backgroundColor.property:
                                {
                                    if (i !== l - 1) {
                                        return;
                                    }
                                    const parsedValue = value.parse(part);
                                    if (parsedValue) {
                                        bg[longhand] = parsedValue;
                                    }
                                    break;
                                }
                            case backgroundPosition.property:
                                {
                                    break;
                                }
                            case backgroundRepeat.property:
                                {
                                    const parsedValue = value.parse(part);
                                    if (parsedValue) {
                                        bgRepeat.push(parsedValue);
                                    }
                                    break;
                                }
                            case backgroundSize.property:
                                {
                                    const parsedValue = value.parse(part);
                                    if (parsedValue) {
                                        bgSize.push(parsedValue);
                                    }
                                    break;
                                }
                            default:
                                {
                                    const parsedValue = value.parse(part);
                                    if (parsedValue) {
                                        bg[longhand] = parsedValue;
                                    }
                                }
                        }
                    }
                }
                if (!partValid) {
                    return;
                }
            }
        }
        if (bgPosition.length) {
            const { parse: parser } = shorthandFor.get(backgroundPosition.property);
            const value = parser(bgPosition.join(" "));
            if (value) {
                bg[backgroundPosition.property] = value;
            }
        }
        if (bgSize.length) {
            const { parse: parser } = shorthandFor.get(backgroundSize.property);
            const value = parser(bgSize.join(" "));
            if (value) {
                bg[backgroundSize.property] = value;
            }
        }
        if (bgRepeat.length) {
            const { parse: parser } = shorthandFor.get(backgroundRepeat.property);
            const value = parser(bgRepeat.join(" "));
            if (value) {
                bg[backgroundRepeat.property] = value;
            }
        }
        if (bgBox.length) {
            switch(bgBox.length){
                case 1:
                    {
                        const [value] = bgBox;
                        bg[backgroundOrigin.property] = value;
                        bg[backgroundClip.property] = value;
                        break;
                    }
                case 2:
                    {
                        const [value1, value2] = bgBox;
                        bg[backgroundOrigin.property] = value1;
                        bg[backgroundClip.property] = value2;
                        break;
                    }
                default:
                    {
                        return;
                    }
            }
        }
        bgValues.push(bg);
    }
    return bgValues;
}
module.exports = {
    descriptor,
    initialValues,
    parse,
    property,
    shorthandFor
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderTopWidth.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "border-top-width";
const lineShorthand = "border-width";
const positionShorthand = "border-top";
const shorthand = "border";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._borderSetter(property, v, "");
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const shorthandPriority = this._priorities.get(shorthand);
                const linePriority = this._priorities.get(lineShorthand);
                const positionPriority = this._priorities.get(positionShorthand);
                const priority = !(shorthandPriority || linePriority || positionPriority) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._borderSetter(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the border-top-width property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveNumericValue(value, {
            min: 0,
            type: "length"
        });
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderRightWidth.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "border-right-width";
const lineShorthand = "border-width";
const positionShorthand = "border-right";
const shorthand = "border";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._borderSetter(property, v, "");
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const shorthandPriority = this._priorities.get(shorthand);
                const linePriority = this._priorities.get(lineShorthand);
                const positionPriority = this._priorities.get(positionShorthand);
                const priority = !(shorthandPriority || linePriority || positionPriority) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._borderSetter(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the border-right-width property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveNumericValue(value, {
            min: 0,
            type: "length"
        });
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderBottomWidth.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "border-bottom-width";
const lineShorthand = "border-width";
const positionShorthand = "border-bottom";
const shorthand = "border";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._borderSetter(property, v, "");
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const shorthandPriority = this._priorities.get(shorthand);
                const linePriority = this._priorities.get(lineShorthand);
                const positionPriority = this._priorities.get(positionShorthand);
                const priority = !(shorthandPriority || linePriority || positionPriority) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._borderSetter(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the border-bottom-width property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveNumericValue(value, {
            min: 0,
            type: "length"
        });
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderLeftWidth.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "border-left-width";
const lineShorthand = "border-width";
const positionShorthand = "border-left";
const shorthand = "border";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._borderSetter(property, v, "");
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const shorthandPriority = this._priorities.get(shorthand);
                const linePriority = this._priorities.get(lineShorthand);
                const positionPriority = this._priorities.get(positionShorthand);
                const priority = !(shorthandPriority || linePriority || positionPriority) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._borderSetter(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the border-left-width property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveNumericValue(value, {
            min: 0,
            type: "length"
        });
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderWidth.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const borderTopWidth = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderTopWidth.js [app-ssr] (ecmascript)");
const borderRightWidth = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderRightWidth.js [app-ssr] (ecmascript)");
const borderBottomWidth = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderBottomWidth.js [app-ssr] (ecmascript)");
const borderLeftWidth = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderLeftWidth.js [app-ssr] (ecmascript)");
const property = "border-width";
const shorthand = "border";
const shorthandFor = new Map([
    [
        borderTopWidth.property,
        borderTopWidth
    ],
    [
        borderRightWidth.property,
        borderRightWidth
    ],
    [
        borderBottomWidth.property,
        borderBottomWidth
    ],
    [
        borderLeftWidth.property,
        borderLeftWidth
    ]
]);
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._borderSetter(property, v, "");
        } else {
            const val = parse(v);
            if (Array.isArray(val) || typeof val === "string") {
                const priority = !this._priorities.get(shorthand) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._borderSetter(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the border-width property value.
 *
 * @param {string} v - The value to parse.
 * @returns {Array<string>|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const values = parsers.parsePropertyValue(property, v);
    const parsedValues = [];
    if (Array.isArray(values) && values.length) {
        if (values.length > 4) {
            return;
        }
        for (const value of values){
            const parsedValue = parsers.resolveNumericValue([
                value
            ], {
                length: values.length,
                type: "length"
            });
            if (!parsedValue) {
                return;
            }
            parsedValues.push(parsedValue);
        }
    } else if (typeof values === "string") {
        parsedValues.push(values);
    }
    if (parsedValues.length) {
        switch(parsedValues.length){
            case 1:
                {
                    return parsedValues;
                }
            case 2:
                {
                    const [val1, val2] = parsedValues;
                    if (val1 === val2) {
                        return [
                            val1
                        ];
                    }
                    return parsedValues;
                }
            case 3:
                {
                    const [val1, val2, val3] = parsedValues;
                    if (val1 === val3) {
                        if (val1 === val2) {
                            return [
                                val1
                            ];
                        }
                        return [
                            val1,
                            val2
                        ];
                    }
                    return parsedValues;
                }
            case 4:
                {
                    const [val1, val2, val3, val4] = parsedValues;
                    if (val2 === val4) {
                        if (val1 === val3) {
                            if (val1 === val2) {
                                return [
                                    val1
                                ];
                            }
                            return [
                                val1,
                                val2
                            ];
                        }
                        return [
                            val1,
                            val2,
                            val3
                        ];
                    }
                    return parsedValues;
                }
            default:
        }
    }
}
module.exports = {
    descriptor,
    parse,
    property,
    shorthandFor
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderTopStyle.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "border-top-style";
const lineShorthand = "border-style";
const positionShorthand = "border-top";
const shorthand = "border";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._borderSetter(property, v, "");
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const shorthandPriority = this._priorities.get(shorthand);
                const linePriority = this._priorities.get(lineShorthand);
                const positionPriority = this._priorities.get(positionShorthand);
                const priority = !(shorthandPriority || linePriority || positionPriority) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._borderSetter(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the border-top-style property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveKeywordValue(value);
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderRightStyle.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "border-right-style";
const lineShorthand = "border-style";
const positionShorthand = "border-right";
const shorthand = "border";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._borderSetter(property, v, "");
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const shorthandPriority = this._priorities.get(shorthand);
                const linePriority = this._priorities.get(lineShorthand);
                const positionPriority = this._priorities.get(positionShorthand);
                const priority = !(shorthandPriority || linePriority || positionPriority) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._borderSetter(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the border-right-style property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveKeywordValue(value);
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderBottomStyle.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "border-bottom-style";
const lineShorthand = "border-style";
const positionShorthand = "border-bottom";
const shorthand = "border";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._borderSetter(property, v, "");
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const shorthandPriority = this._priorities.get(shorthand);
                const linePriority = this._priorities.get(lineShorthand);
                const positionPriority = this._priorities.get(positionShorthand);
                const priority = !(shorthandPriority || linePriority || positionPriority) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._borderSetter(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the border-bottom-style property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveKeywordValue(value);
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderLeftStyle.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "border-left-style";
const lineShorthand = "border-style";
const positionShorthand = "border-left";
const shorthand = "border";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._borderSetter(property, v, "");
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const shorthandPriority = this._priorities.get(shorthand);
                const linePriority = this._priorities.get(lineShorthand);
                const positionPriority = this._priorities.get(positionShorthand);
                const priority = !(shorthandPriority || linePriority || positionPriority) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._borderSetter(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the border-left-style property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveKeywordValue(value);
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderStyle.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const borderTopStyle = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderTopStyle.js [app-ssr] (ecmascript)");
const borderRightStyle = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderRightStyle.js [app-ssr] (ecmascript)");
const borderBottomStyle = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderBottomStyle.js [app-ssr] (ecmascript)");
const borderLeftStyle = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderLeftStyle.js [app-ssr] (ecmascript)");
const property = "border-style";
const shorthand = "border";
const shorthandFor = new Map([
    [
        borderTopStyle.property,
        borderTopStyle
    ],
    [
        borderRightStyle.property,
        borderRightStyle
    ],
    [
        borderBottomStyle.property,
        borderBottomStyle
    ],
    [
        borderLeftStyle.property,
        borderLeftStyle
    ]
]);
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._borderSetter(property, v, "");
        } else {
            const val = parse(v);
            if (Array.isArray(val) || typeof val === "string") {
                const priority = !this._priorities.get(shorthand) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._borderSetter(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the border-style property value.
 *
 * @param {string} v - The value to parse.
 * @returns {Array<string>|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const values = parsers.parsePropertyValue(property, v);
    const parsedValues = [];
    if (Array.isArray(values) && values.length) {
        if (values.length > 4) {
            return;
        }
        for (const value of values){
            const parsedValue = parsers.resolveKeywordValue([
                value
            ], {
                length: values.length
            });
            if (!parsedValue) {
                return;
            }
            parsedValues.push(parsedValue);
        }
    } else if (typeof values === "string") {
        parsedValues.push(values);
    }
    if (parsedValues.length) {
        switch(parsedValues.length){
            case 1:
                {
                    return parsedValues;
                }
            case 2:
                {
                    const [val1, val2] = parsedValues;
                    if (val1 === val2) {
                        return [
                            val1
                        ];
                    }
                    return parsedValues;
                }
            case 3:
                {
                    const [val1, val2, val3] = parsedValues;
                    if (val1 === val3) {
                        if (val1 === val2) {
                            return [
                                val1
                            ];
                        }
                        return [
                            val1,
                            val2
                        ];
                    }
                    return parsedValues;
                }
            case 4:
                {
                    const [val1, val2, val3, val4] = parsedValues;
                    if (val2 === val4) {
                        if (val1 === val3) {
                            if (val1 === val2) {
                                return [
                                    val1
                                ];
                            }
                            return [
                                val1,
                                val2
                            ];
                        }
                        return [
                            val1,
                            val2,
                            val3
                        ];
                    }
                    return parsedValues;
                }
            default:
        }
    }
}
module.exports = {
    descriptor,
    parse,
    property,
    shorthandFor
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderTopColor.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "border-top-color";
const lineShorthand = "border-color";
const positionShorthand = "border-top";
const shorthand = "border";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._borderSetter(property, v, "");
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const shorthandPriority = this._priorities.get(shorthand);
                const linePriority = this._priorities.get(lineShorthand);
                const positionPriority = this._priorities.get(positionShorthand);
                const priority = !(shorthandPriority || linePriority || positionPriority) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._borderSetter(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the border-top-color property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveColorValue(value);
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderRightColor.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "border-right-color";
const lineShorthand = "border-color";
const positionShorthand = "border-right";
const shorthand = "border";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._borderSetter(property, v, "");
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const shorthandPriority = this._priorities.get(shorthand);
                const linePriority = this._priorities.get(lineShorthand);
                const positionPriority = this._priorities.get(positionShorthand);
                const priority = !(shorthandPriority || linePriority || positionPriority) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._borderSetter(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the border-right-color property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveColorValue(value);
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderBottomColor.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "border-bottom-color";
const lineShorthand = "border-color";
const positionShorthand = "border-bottom";
const shorthand = "border";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._borderSetter(property, v, "");
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const shorthandPriority = this._priorities.get(shorthand);
                const linePriority = this._priorities.get(lineShorthand);
                const positionPriority = this._priorities.get(positionShorthand);
                const priority = !(shorthandPriority || linePriority || positionPriority) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._borderSetter(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the border-bottom-color property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveColorValue(value);
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderLeftColor.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "border-left-color";
const lineShorthand = "border-color";
const positionShorthand = "border-left";
const shorthand = "border";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._borderSetter(property, v, "");
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const shorthandPriority = this._priorities.get(shorthand);
                const linePriority = this._priorities.get(lineShorthand);
                const positionPriority = this._priorities.get(positionShorthand);
                const priority = !(shorthandPriority || linePriority || positionPriority) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._borderSetter(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the border-left-color property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveColorValue(value);
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderColor.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const borderTopColor = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderTopColor.js [app-ssr] (ecmascript)");
const borderRightColor = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderRightColor.js [app-ssr] (ecmascript)");
const borderBottomColor = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderBottomColor.js [app-ssr] (ecmascript)");
const borderLeftColor = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderLeftColor.js [app-ssr] (ecmascript)");
const property = "border-color";
const shorthand = "border";
const shorthandFor = new Map([
    [
        borderTopColor.property,
        borderTopColor
    ],
    [
        borderRightColor.property,
        borderRightColor
    ],
    [
        borderBottomColor.property,
        borderBottomColor
    ],
    [
        borderLeftColor.property,
        borderLeftColor
    ]
]);
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._borderSetter(property, v, "");
        } else {
            const val = parse(v);
            if (Array.isArray(val) || typeof val === "string") {
                const priority = !this._priorities.get(shorthand) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._borderSetter(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the border-color property value.
 *
 * @param {string} v - The value to parse.
 * @returns {Array<string>|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const values = parsers.parsePropertyValue(property, v);
    const parsedValues = [];
    if (Array.isArray(values) && values.length) {
        if (values.length > 4) {
            return;
        }
        for (const value of values){
            const parsedValue = parsers.resolveColorValue([
                value
            ], {
                length: values.length
            });
            if (!parsedValue) {
                return;
            }
            parsedValues.push(parsedValue);
        }
    } else if (typeof values === "string") {
        parsedValues.push(values);
    }
    if (parsedValues.length) {
        switch(parsedValues.length){
            case 1:
                {
                    return parsedValues;
                }
            case 2:
                {
                    const [val1, val2] = parsedValues;
                    if (val1 === val2) {
                        return [
                            val1
                        ];
                    }
                    return parsedValues;
                }
            case 3:
                {
                    const [val1, val2, val3] = parsedValues;
                    if (val1 === val3) {
                        if (val1 === val2) {
                            return [
                                val1
                            ];
                        }
                        return [
                            val1,
                            val2
                        ];
                    }
                    return parsedValues;
                }
            case 4:
                {
                    const [val1, val2, val3, val4] = parsedValues;
                    if (val2 === val4) {
                        if (val1 === val3) {
                            if (val1 === val2) {
                                return [
                                    val1
                                ];
                            }
                            return [
                                val1,
                                val2
                            ];
                        }
                        return [
                            val1,
                            val2,
                            val3
                        ];
                    }
                    return parsedValues;
                }
            default:
        }
    }
}
module.exports = {
    descriptor,
    parse,
    property,
    shorthandFor
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderTop.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const borderTopWidth = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderTopWidth.js [app-ssr] (ecmascript)");
const borderTopStyle = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderTopStyle.js [app-ssr] (ecmascript)");
const borderTopColor = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderTopColor.js [app-ssr] (ecmascript)");
const property = "border-top";
const shorthand = "border";
const subProps = {
    width: borderTopWidth.property,
    style: borderTopStyle.property,
    color: borderTopColor.property
};
const initialValues = new Map([
    [
        borderTopWidth.property,
        "medium"
    ],
    [
        borderTopStyle.property,
        "none"
    ],
    [
        borderTopColor.property,
        "currentcolor"
    ]
]);
const shorthandFor = new Map([
    [
        borderTopWidth.property,
        borderTopWidth
    ],
    [
        borderTopStyle.property,
        borderTopStyle
    ],
    [
        borderTopColor.property,
        borderTopColor
    ]
]);
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._borderSetter(property, v, "");
        } else {
            const val = parse(v);
            if (val || typeof val === "string") {
                const priority = !this._priorities.get(shorthand) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._borderSetter(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the border-top property value.
 *
 * @param {string} v - The value to parse.
 * @returns {object|string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const values = parsers.splitValue(v);
    const parsedValues = new Map();
    for (const val of values){
        const value = parsers.parsePropertyValue(property, val);
        if (Array.isArray(value) && value.length === 1) {
            const parsedValue = parsers.resolveBorderShorthandValue(value, subProps, parsedValues);
            if (typeof parsedValue === "string") {
                return parsedValue;
            } else if (Array.isArray(parsedValue)) {
                const [key, resolvedVal] = parsedValue;
                parsedValues.set(key, resolvedVal);
            } else {
                return;
            }
        } else {
            return;
        }
    }
    if (parsedValues.size) {
        const keys = shorthandFor.keys();
        const obj = {
            [borderTopWidth.property]: "medium"
        };
        for (const key of keys){
            if (parsedValues.has(key)) {
                const parsedValue = parsedValues.get(key);
                if (parsedValue !== initialValues.get(key)) {
                    obj[key] = parsedValues.get(key);
                    if (obj[borderTopWidth.property] && obj[borderTopWidth.property] === "medium") {
                        delete obj[borderTopWidth.property];
                    }
                }
            }
        }
        return obj;
    }
}
module.exports = {
    descriptor,
    initialValues,
    parse,
    property,
    shorthandFor
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderRight.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const borderRightWidth = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderRightWidth.js [app-ssr] (ecmascript)");
const borderRightStyle = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderRightStyle.js [app-ssr] (ecmascript)");
const borderRightColor = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderRightColor.js [app-ssr] (ecmascript)");
const property = "border-right";
const shorthand = "border";
const subProps = {
    width: borderRightWidth.property,
    style: borderRightStyle.property,
    color: borderRightColor.property
};
const initialValues = new Map([
    [
        borderRightWidth.property,
        "medium"
    ],
    [
        borderRightStyle.property,
        "none"
    ],
    [
        borderRightColor.property,
        "currentcolor"
    ]
]);
const shorthandFor = new Map([
    [
        borderRightWidth.property,
        borderRightWidth
    ],
    [
        borderRightStyle.property,
        borderRightStyle
    ],
    [
        borderRightColor.property,
        borderRightColor
    ]
]);
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._borderSetter(property, v, "");
        } else {
            const val = parse(v);
            if (val || typeof val === "string") {
                const priority = !this._priorities.get(shorthand) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._borderSetter(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the border-right property value.
 *
 * @param {string} v - The value to parse.
 * @returns {object|string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const values = parsers.splitValue(v);
    const parsedValues = new Map();
    for (const val of values){
        const value = parsers.parsePropertyValue(property, val);
        if (Array.isArray(value) && value.length === 1) {
            const parsedValue = parsers.resolveBorderShorthandValue(value, subProps, parsedValues);
            if (typeof parsedValue === "string") {
                return parsedValue;
            } else if (Array.isArray(parsedValue)) {
                const [key, resolvedVal] = parsedValue;
                parsedValues.set(key, resolvedVal);
            } else {
                return;
            }
        } else {
            return;
        }
    }
    if (parsedValues.size) {
        const keys = shorthandFor.keys();
        const obj = {
            [borderRightWidth.property]: "medium"
        };
        for (const key of keys){
            if (parsedValues.has(key)) {
                const parsedValue = parsedValues.get(key);
                if (parsedValue !== initialValues.get(key)) {
                    obj[key] = parsedValues.get(key);
                    if (obj[borderRightWidth.property] && obj[borderRightWidth.property] === "medium") {
                        delete obj[borderRightWidth.property];
                    }
                }
            }
        }
        return obj;
    }
}
module.exports = {
    descriptor,
    initialValues,
    parse,
    property,
    shorthandFor
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderBottom.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const borderBottomWidth = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderBottomWidth.js [app-ssr] (ecmascript)");
const borderBottomStyle = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderBottomStyle.js [app-ssr] (ecmascript)");
const borderBottomColor = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderBottomColor.js [app-ssr] (ecmascript)");
const property = "border-bottom";
const shorthand = "border";
const subProps = {
    width: borderBottomWidth.property,
    style: borderBottomStyle.property,
    color: borderBottomColor.property
};
const initialValues = new Map([
    [
        borderBottomWidth.property,
        "medium"
    ],
    [
        borderBottomStyle.property,
        "none"
    ],
    [
        borderBottomColor.property,
        "currentcolor"
    ]
]);
const shorthandFor = new Map([
    [
        borderBottomWidth.property,
        borderBottomWidth
    ],
    [
        borderBottomStyle.property,
        borderBottomStyle
    ],
    [
        borderBottomColor.property,
        borderBottomColor
    ]
]);
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._borderSetter(property, v, "");
        } else {
            const val = parse(v);
            if (val || typeof val === "string") {
                const priority = !this._priorities.get(shorthand) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._borderSetter(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the border-bottom property value.
 *
 * @param {string} v - The value to parse.
 * @returns {object|string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const values = parsers.splitValue(v);
    const parsedValues = new Map();
    for (const val of values){
        const value = parsers.parsePropertyValue(property, val);
        if (Array.isArray(value) && value.length === 1) {
            const parsedValue = parsers.resolveBorderShorthandValue(value, subProps, parsedValues);
            if (typeof parsedValue === "string") {
                return parsedValue;
            } else if (Array.isArray(parsedValue)) {
                const [key, resolvedVal] = parsedValue;
                parsedValues.set(key, resolvedVal);
            } else {
                return;
            }
        } else {
            return;
        }
    }
    if (parsedValues.size) {
        const keys = shorthandFor.keys();
        const obj = {
            [borderBottomWidth.property]: "medium"
        };
        for (const key of keys){
            if (parsedValues.has(key)) {
                const parsedValue = parsedValues.get(key);
                if (parsedValue !== initialValues.get(key)) {
                    obj[key] = parsedValues.get(key);
                    if (obj[borderBottomWidth.property] && obj[borderBottomWidth.property] === "medium") {
                        delete obj[borderBottomWidth.property];
                    }
                }
            }
        }
        return obj;
    }
}
module.exports = {
    descriptor,
    initialValues,
    parse,
    property,
    shorthandFor
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderLeft.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const borderLeftWidth = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderLeftWidth.js [app-ssr] (ecmascript)");
const borderLeftStyle = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderLeftStyle.js [app-ssr] (ecmascript)");
const borderLeftColor = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderLeftColor.js [app-ssr] (ecmascript)");
const property = "border-left";
const shorthand = "border";
const subProps = {
    width: borderLeftWidth.property,
    style: borderLeftStyle.property,
    color: borderLeftColor.property
};
const initialValues = new Map([
    [
        borderLeftWidth.property,
        "medium"
    ],
    [
        borderLeftStyle.property,
        "none"
    ],
    [
        borderLeftColor.property,
        "currentcolor"
    ]
]);
const shorthandFor = new Map([
    [
        borderLeftWidth.property,
        borderLeftWidth
    ],
    [
        borderLeftStyle.property,
        borderLeftStyle
    ],
    [
        borderLeftColor.property,
        borderLeftColor
    ]
]);
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._borderSetter(property, v, "");
        } else {
            const val = parse(v);
            if (val || typeof val === "string") {
                const priority = !this._priorities.get(shorthand) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._borderSetter(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the border-left property value.
 *
 * @param {string} v - The value to parse.
 * @returns {object|string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const values = parsers.splitValue(v);
    const parsedValues = new Map();
    for (const val of values){
        const value = parsers.parsePropertyValue(property, val);
        if (Array.isArray(value) && value.length === 1) {
            const parsedValue = parsers.resolveBorderShorthandValue(value, subProps, parsedValues);
            if (typeof parsedValue === "string") {
                return parsedValue;
            } else if (Array.isArray(parsedValue)) {
                const [key, resolvedVal] = parsedValue;
                parsedValues.set(key, resolvedVal);
            } else {
                return;
            }
        } else {
            return;
        }
    }
    if (parsedValues.size) {
        const keys = shorthandFor.keys();
        const obj = {
            [borderLeftWidth.property]: "medium"
        };
        for (const key of keys){
            if (parsedValues.has(key)) {
                const parsedValue = parsedValues.get(key);
                if (parsedValue !== initialValues.get(key)) {
                    obj[key] = parsedValues.get(key);
                    if (obj[borderLeftWidth.property] && obj[borderLeftWidth.property] === "medium") {
                        delete obj[borderLeftWidth.property];
                    }
                }
            }
        }
        return obj;
    }
}
module.exports = {
    descriptor,
    initialValues,
    parse,
    property,
    shorthandFor
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/border.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const borderWidth = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderWidth.js [app-ssr] (ecmascript)");
const borderStyle = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderStyle.js [app-ssr] (ecmascript)");
const borderColor = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderColor.js [app-ssr] (ecmascript)");
const borderTop = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderTop.js [app-ssr] (ecmascript)");
const borderRight = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderRight.js [app-ssr] (ecmascript)");
const borderBottom = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderBottom.js [app-ssr] (ecmascript)");
const borderLeft = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderLeft.js [app-ssr] (ecmascript)");
const property = "border";
const subProps = {
    width: borderWidth.property,
    style: borderStyle.property,
    color: borderColor.property
};
const initialValues = new Map([
    [
        borderWidth.property,
        "medium"
    ],
    [
        borderStyle.property,
        "none"
    ],
    [
        borderColor.property,
        "currentcolor"
    ]
]);
const shorthandFor = new Map([
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
    ]
]);
const positionShorthandFor = new Map([
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
    ]
]);
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._borderSetter(property, v, "");
        } else {
            const val = parse(v);
            if (val || typeof val === "string") {
                const priority = this._priorities.get(property) ?? "";
                this._borderSetter(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the border property value.
 *
 * @param {string} v - The value to parse.
 * @returns {object|string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "" || parsers.hasVarFunc(v)) {
        return v;
    }
    const values = parsers.splitValue(v);
    const parsedValues = new Map();
    for (const val of values){
        const value = parsers.parsePropertyValue(property, val);
        if (Array.isArray(value) && value.length === 1) {
            const parsedValue = parsers.resolveBorderShorthandValue(value, subProps, parsedValues);
            if (typeof parsedValue === "string") {
                return parsedValue;
            } else if (Array.isArray(parsedValue)) {
                const [key, resolvedVal] = parsedValue;
                parsedValues.set(key, resolvedVal);
            } else {
                return;
            }
        } else {
            return;
        }
    }
    if (parsedValues.size) {
        const keys = shorthandFor.keys();
        const obj = {
            [borderWidth.property]: "medium"
        };
        for (const key of keys){
            if (parsedValues.has(key)) {
                const parsedValue = parsedValues.get(key);
                if (parsedValue !== initialValues.get(key)) {
                    obj[key] = parsedValues.get(key);
                    if (obj[borderWidth.property] && obj[borderWidth.property] === "medium") {
                        delete obj[borderWidth.property];
                    }
                }
            }
        }
        return obj;
    }
}
module.exports = {
    descriptor,
    initialValues,
    parse,
    positionShorthandFor,
    property,
    shorthandFor
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderBlockEndColor.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "border-block-end-color";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = this._priorities.get(property) ?? "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the border-block-end-color property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveColorValue(value);
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderBlockStartColor.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "border-block-start-color";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = this._priorities.get(property) ?? "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the border-block-start-color property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveColorValue(value);
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderCollapse.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "border-collapse";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = this._priorities.get(property) ?? "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the border-collapse property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveKeywordValue(value);
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderInlineEndColor.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "border-inline-end-color";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = this._priorities.get(property) ?? "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the border-inline-end-color property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveColorValue(value);
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderInlineStartColor.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "border-inline-start-color";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = this._priorities.get(property) ?? "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the border-inline-start-color property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveColorValue(value);
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/borderSpacing.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "border-spacing";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = this._priorities.get(property) ?? "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the border-spacing property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length) {
        switch(value.length){
            case 1:
                {
                    return parsers.resolveNumericValue(value, {
                        type: "length"
                    });
                }
            case 2:
                {
                    const [part1, part2] = value;
                    const val1 = parsers.resolveNumericValue([
                        part1
                    ], {
                        type: "length"
                    });
                    const val2 = parsers.resolveNumericValue([
                        part2
                    ], {
                        type: "length"
                    });
                    if (val1 && val2) {
                        return `${val1} ${val2}`;
                    }
                    break;
                }
            default:
        }
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/bottom.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "bottom";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = this._priorities.get(property) ?? "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the bottom property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveNumericValue(value, {
            type: "length"
        });
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/clear.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "clear";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = this._priorities.get(property) ?? "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the clear property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveKeywordValue(value);
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/clip.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// deprecated
// @see https://drafts.csswg.org/css-masking-1/#clip-property
const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
// Constants
const { AST_TYPES } = parsers;
const property = "clip";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = this._priorities.get(property) ?? "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the clip property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        const [{ name, type, value: itemValue }] = value;
        switch(type){
            case AST_TYPES.FUNCTION:
                {
                    const values = parsers.splitValue(itemValue, {
                        delimiter: ","
                    });
                    const parsedValues = [];
                    for (const item of values){
                        const parsedValue = parsers.parseCSS(item, {
                            context: "value"
                        });
                        const val = parsers.resolveNumericValue(parsedValue.children, {
                            type: "length"
                        });
                        if (val) {
                            parsedValues.push(val);
                        } else {
                            return;
                        }
                    }
                    return `${name}(${parsedValues.join(", ")})`;
                }
            case AST_TYPES.GLOBAL_KEYWORD:
            case AST_TYPES.IDENTIFIER:
                {
                    return name;
                }
            default:
        }
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/color.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "color";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = this._priorities.get(property) ?? "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the color property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveColorValue(value);
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/display.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
// Constants
const { AST_TYPES } = parsers;
const property = "display";
/* keywords */ const displayOutside = [
    "block",
    "inline",
    "run-in"
];
const displayFlow = [
    "flow",
    "flow-root"
];
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = this._priorities.get(property) ?? "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the display property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length) {
        switch(value.length){
            case 1:
                {
                    const [{ name, type }] = value;
                    switch(type){
                        case AST_TYPES.GLOBAL_KEYWORD:
                            {
                                return name;
                            }
                        case AST_TYPES.IDENTIFIER:
                            {
                                if (name === "flow") {
                                    return "block";
                                }
                                return name;
                            }
                        default:
                    }
                    break;
                }
            case 2:
                {
                    const [part1, part2] = value;
                    const val1 = part1.type === AST_TYPES.IDENTIFIER && part1.name;
                    const val2 = part2.type === AST_TYPES.IDENTIFIER && part2.name;
                    if (val1 && val2) {
                        let outerValue = "";
                        let innerValue = "";
                        if (val1 === "list-item") {
                            outerValue = val2;
                            innerValue = val1;
                        } else if (val2 === "list-item") {
                            outerValue = val1;
                            innerValue = val2;
                        } else if (displayOutside.includes(val1)) {
                            outerValue = val1;
                            innerValue = val2;
                        } else if (displayOutside.includes(val2)) {
                            outerValue = val2;
                            innerValue = val1;
                        }
                        if (innerValue === "list-item") {
                            switch(outerValue){
                                case "block":
                                case "flow":
                                    {
                                        return innerValue;
                                    }
                                case "flow-root":
                                case "inline":
                                case "run-in":
                                    {
                                        return `${outerValue} ${innerValue}`;
                                    }
                                default:
                            }
                        } else if (outerValue === "block") {
                            switch(innerValue){
                                case "flow":
                                    {
                                        return outerValue;
                                    }
                                case "flow-root":
                                case "flex":
                                case "grid":
                                case "table":
                                    {
                                        return innerValue;
                                    }
                                case "ruby":
                                    {
                                        return `${outerValue} ${innerValue}`;
                                    }
                                default:
                            }
                        } else if (outerValue === "inline") {
                            switch(innerValue){
                                case "flow":
                                    {
                                        return outerValue;
                                    }
                                case "flow-root":
                                    {
                                        return `${outerValue}-block`;
                                    }
                                case "flex":
                                case "grid":
                                case "table":
                                    {
                                        return `${outerValue}-${innerValue}`;
                                    }
                                case "ruby":
                                    {
                                        return innerValue;
                                    }
                                default:
                            }
                        } else if (outerValue === "run-in") {
                            switch(innerValue){
                                case "flow":
                                    {
                                        return outerValue;
                                    }
                                case "flow-root":
                                case "flex":
                                case "grid":
                                case "table":
                                case "ruby":
                                    {
                                        return `${outerValue} ${innerValue}`;
                                    }
                                default:
                            }
                        }
                    }
                    break;
                }
            case 3:
                {
                    const [part1, part2, part3] = value;
                    const val1 = part1.type === AST_TYPES.IDENTIFIER && part1.name;
                    const val2 = part2.type === AST_TYPES.IDENTIFIER && part2.name;
                    const val3 = part3.type === AST_TYPES.IDENTIFIER && part3.name;
                    if (val1 && val2 && part3) {
                        let outerValue = "";
                        let flowValue = "";
                        let listItemValue = "";
                        if (val1 === "list-item") {
                            listItemValue = val1;
                            if (displayFlow.includes(val2)) {
                                flowValue = val2;
                                outerValue = val3;
                            } else if (displayFlow.includes(val3)) {
                                flowValue = val3;
                                outerValue = val2;
                            }
                        } else if (val2 === "list-item") {
                            listItemValue = val2;
                            if (displayFlow.includes(val1)) {
                                flowValue = val1;
                                outerValue = val3;
                            } else if (displayFlow.includes(val3)) {
                                flowValue = val3;
                                outerValue = val1;
                            }
                        } else if (val3 === "list-item") {
                            listItemValue = val3;
                            if (displayFlow.includes(val1)) {
                                flowValue = val1;
                                outerValue = val2;
                            } else if (displayFlow.includes(val2)) {
                                flowValue = val2;
                                outerValue = val1;
                            }
                        }
                        if (outerValue && flowValue && listItemValue) {
                            switch(outerValue){
                                case "block":
                                    {
                                        if (flowValue === "flow") {
                                            return listItemValue;
                                        }
                                        return `${flowValue} ${listItemValue}`;
                                    }
                                case "inline":
                                case "run-in":
                                    {
                                        if (flowValue === "flow") {
                                            return `${outerValue} ${listItemValue}`;
                                        }
                                        return `${outerValue} ${flowValue} ${listItemValue}`;
                                    }
                            }
                        }
                    }
                    break;
                }
            default:
        }
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/flexGrow.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "flex-grow";
const shorthand = "flex";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(shorthand, "");
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = !this._priorities.get(shorthand) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._flexBoxSetter(property, val, priority, shorthand);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the flex-grow property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue("flex-grow", v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveNumericValue(value, {
            min: 0
        });
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/flexShrink.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "flex-shrink";
const shorthand = "flex";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(shorthand, "");
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = !this._priorities.get(shorthand) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._flexBoxSetter(property, val, priority, shorthand);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the flex-shrink property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveNumericValue(value, {
            min: 0
        });
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/flexBasis.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "flex-basis";
const shorthand = "flex";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(shorthand, "");
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = !this._priorities.get(shorthand) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._flexBoxSetter(property, val, priority, shorthand);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the flex-basis property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveNumericValue(value, {
            type: "length"
        });
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/flex.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const flexGrow = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/flexGrow.js [app-ssr] (ecmascript)");
const flexShrink = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/flexShrink.js [app-ssr] (ecmascript)");
const flexBasis = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/flexBasis.js [app-ssr] (ecmascript)");
// Constants
const { AST_TYPES } = parsers;
const property = "flex";
const initialValues = new Map([
    [
        flexGrow.property,
        "0"
    ],
    [
        flexShrink.property,
        "1"
    ],
    [
        flexBasis.property,
        "auto"
    ]
]);
const shorthandFor = new Map([
    [
        flexGrow.property,
        flexGrow
    ],
    [
        flexShrink.property,
        flexShrink
    ],
    [
        flexBasis.property,
        flexBasis
    ]
]);
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            for (const [longhand] of shorthandFor){
                this._setProperty(longhand, "");
            }
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            const priority = this._priorities.get(property) ?? "";
            if (typeof val === "string") {
                for (const [longhand] of shorthandFor){
                    this._setProperty(longhand, val, priority);
                }
                this._setProperty(property, val, priority);
            } else if (val) {
                const values = [];
                for (const [longhand, value] of Object.entries(val)){
                    values.push(value);
                    this._setProperty(longhand, value, priority);
                }
                this._setProperty(property, values.join(" "), priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the flex property value.
 *
 * @param {string} v - The value to parse.
 * @returns {object|string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length) {
        const flex = {
            [flexGrow.property]: "1",
            [flexShrink.property]: "1",
            [flexBasis.property]: "0%"
        };
        if (value.length === 1) {
            const [{ isNumber, name, type, unit, value: itemValue }] = value;
            switch(type){
                case AST_TYPES.CALC:
                    {
                        if (isNumber) {
                            flex[flexGrow.property] = `${name}(${itemValue})`;
                            return flex;
                        }
                        flex[flexBasis.property] = `${name}(${itemValue})`;
                        return flex;
                    }
                case AST_TYPES.DIMENSION:
                    {
                        flex[flexBasis.property] = `${itemValue}${unit}`;
                        return flex;
                    }
                case AST_TYPES.GLOBAL_KEYWORD:
                    {
                        return name;
                    }
                case AST_TYPES.IDENTIFIER:
                    {
                        if (name === "none") {
                            return {
                                [flexGrow.property]: "0",
                                [flexShrink.property]: "0",
                                [flexBasis.property]: "auto"
                            };
                        }
                        flex[flexBasis.property] = name;
                        return flex;
                    }
                case AST_TYPES.NUMBER:
                    {
                        flex[flexGrow.property] = itemValue;
                        return flex;
                    }
                case AST_TYPES.PERCENTAGE:
                    {
                        flex[flexBasis.property] = `${itemValue}%`;
                        return flex;
                    }
                default:
            }
        } else {
            const [val1, val2, val3] = value;
            if (val1.type === AST_TYPES.CALC && val1.isNumber) {
                flex[flexGrow.property] = `${val1.name}(${val1.value})`;
            } else if (val1.type === AST_TYPES.NUMBER) {
                flex[flexGrow.property] = val1.value;
            } else {
                return;
            }
            if (val3) {
                if (val2.type === AST_TYPES.CALC && val2.isNumber) {
                    flex[flexShrink.property] = `${val2.name}(${val2.value})`;
                } else if (val2.type === AST_TYPES.NUMBER) {
                    flex[flexShrink.property] = val2.value;
                } else {
                    return;
                }
                if (val3.type === AST_TYPES.GLOBAL_KEYWORD || val3.type === AST_TYPES.IDENTIFIER) {
                    flex[flexBasis.property] = val3.name;
                } else if (val3.type === AST_TYPES.CALC && !val3.isNumber) {
                    flex[flexBasis.property] = `${val3.name}(${val3.value})`;
                } else if (val3.type === AST_TYPES.DIMENSION) {
                    flex[flexBasis.property] = `${val3.value}${val3.unit}`;
                } else if (val3.type === AST_TYPES.PERCENTAGE) {
                    flex[flexBasis.property] = `${val3.value}%`;
                } else {
                    return;
                }
            } else {
                switch(val2.type){
                    case AST_TYPES.CALC:
                        {
                            if (val2.isNumber) {
                                flex[flexShrink.property] = `${val2.name}(${val2.value})`;
                            } else {
                                flex[flexBasis.property] = `${val2.name}(${val2.value})`;
                            }
                            break;
                        }
                    case AST_TYPES.DIMENSION:
                        {
                            flex[flexBasis.property] = `${val2.value}${val2.unit}`;
                            break;
                        }
                    case AST_TYPES.NUMBER:
                        {
                            flex[flexShrink.property] = val2.value;
                            break;
                        }
                    case AST_TYPES.PERCENTAGE:
                        {
                            flex[flexBasis.property] = `${val2.value}%`;
                            break;
                        }
                    case AST_TYPES.IDENTIFIER:
                        {
                            flex[flexBasis.property] = val2.name;
                            break;
                        }
                    default:
                        {
                            return;
                        }
                }
            }
            return flex;
        }
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    initialValues,
    parse,
    property,
    shorthandFor
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/float.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "float";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = this._priorities.get(property) ?? "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the float property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveKeywordValue(value);
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/floodColor.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "flood-color";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = this._priorities.get(property) ?? "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the flood-color property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveColorValue(value);
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/fontStyle.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
// Constants
const { AST_TYPES } = parsers;
const property = "font-style";
const shorthand = "font";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(shorthand, "");
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = !this._priorities.get(shorthand) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the font-style property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length) {
        if (value.length === 1) {
            const [{ name, type }] = value;
            switch(type){
                case AST_TYPES.GLOBAL_KEYWORD:
                case AST_TYPES.IDENTIFIER:
                    {
                        return name;
                    }
                default:
            }
        } else if (value.length === 2) {
            const [part1, part2] = value;
            const val1 = part1.type === AST_TYPES.IDENTIFIER && part1.name;
            const val2 = parsers.resolveNumericValue([
                part2
            ], {
                type: "angle"
            });
            if (val1 && val1 === "oblique" && val2) {
                return `${val1} ${val2}`;
            }
        }
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/fontVariant.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "font-variant";
const shorthand = "font";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(shorthand, "");
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = !this._priorities.get(shorthand) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the font-variant property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const values = parsers.splitValue(v);
    const parsedValues = [];
    for (const val of values){
        const value = parsers.parsePropertyValue(property, val);
        if (Array.isArray(value) && value.length === 1) {
            const parsedValue = parsers.resolveFunctionValue(value);
            if (!parsedValue) {
                return;
            }
            parsedValues.push(parsedValue);
        } else if (typeof value === "string") {
            parsedValues.push(value);
        }
    }
    if (parsedValues.length) {
        if (parsedValues.length > 1) {
            if (parsedValues.includes("normal") || parsedValues.includes("none")) {
                return;
            }
        }
        return parsedValues.join(" ");
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/fontWeight.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "font-weight";
const shorthand = "font";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(shorthand, "");
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = !this._priorities.get(shorthand) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the font-weight property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        const parsedValue = parsers.resolveNumericValue(value, {
            min: 1,
            max: 1000
        });
        if (!parsedValue) {
            return;
        }
        return parsedValue;
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/fontSize.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "font-size";
const shorthand = "font";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(shorthand, "");
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = !this._priorities.get(shorthand) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the font-size property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveNumericValue(value, {
            min: 0,
            type: "length"
        });
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/lineHeight.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "line-height";
const shorthand = "font";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(shorthand, "");
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = !this._priorities.get(shorthand) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the line-height property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveNumericValue(value, {
            min: 0
        });
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/fontFamily.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
// Constants
const { AST_TYPES } = parsers;
const property = "font-family";
const shorthand = "font";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(shorthand, "");
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = !this._priorities.get(shorthand) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the font-family property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const values = parsers.splitValue(v, {
        delimiter: ","
    });
    const parsedValues = [];
    for (const val of values){
        if (!val) {
            return "";
        }
        const value = parsers.parsePropertyValue(property, val, {
            caseSensitive: true
        });
        if (Array.isArray(value) && value.length) {
            if (value.length === 1) {
                const [{ name, type, value: itemValue }] = value;
                switch(type){
                    case AST_TYPES.FUNCTION:
                        {
                            parsedValues.push(`${name}(${itemValue})`);
                            break;
                        }
                    case AST_TYPES.GLOBAL_KEYWORD:
                    case AST_TYPES.IDENTIFIER:
                        {
                            if (name === "undefined") {
                                return;
                            }
                            parsedValues.push(name);
                            break;
                        }
                    case "String":
                        {
                            const parsedValue = itemValue.replaceAll("\\", "").replaceAll('"', '\\"');
                            parsedValues.push(`"${parsedValue}"`);
                            break;
                        }
                    default:
                        {
                            return;
                        }
                }
            } else {
                const parts = [];
                for (const item of value){
                    const { name, type } = item;
                    if (type !== AST_TYPES.IDENTIFIER) {
                        return;
                    }
                    parts.push(name);
                }
                const parsedValue = parts.join(" ").replaceAll("\\", "").replaceAll('"', '\\"');
                parsedValues.push(`"${parsedValue}"`);
            }
        } else if (typeof value === "string") {
            parsedValues.push(value);
        } else {
            return;
        }
    }
    if (parsedValues.length) {
        return parsedValues.join(", ");
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/font.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const fontStyle = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/fontStyle.js [app-ssr] (ecmascript)");
const fontVariant = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/fontVariant.js [app-ssr] (ecmascript)");
const fontWeight = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/fontWeight.js [app-ssr] (ecmascript)");
const fontSize = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/fontSize.js [app-ssr] (ecmascript)");
const lineHeight = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/lineHeight.js [app-ssr] (ecmascript)");
const fontFamily = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/fontFamily.js [app-ssr] (ecmascript)");
// Constants
const { AST_TYPES } = parsers;
const property = "font";
const shorthandFor = new Map([
    [
        fontStyle.property,
        fontStyle
    ],
    [
        fontVariant.property,
        fontVariant
    ],
    [
        fontWeight.property,
        fontWeight
    ],
    [
        fontSize.property,
        fontSize
    ],
    [
        lineHeight.property,
        lineHeight
    ],
    [
        fontFamily.property,
        fontFamily
    ]
]);
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (v === "" || parsers.hasVarFunc(v)) {
            for (const [key] of shorthandFor){
                this._setProperty(key, "");
            }
            this._setProperty(property, v);
        } else {
            const obj = parse(v);
            if (!obj) {
                return;
            }
            const priority = this._priorities.get(property) ?? "";
            const str = new Set();
            for (const [key] of shorthandFor){
                const val = obj[key];
                if (typeof val === "string") {
                    this._setProperty(key, val, priority);
                    if (val && val !== "normal" && !str.has(val)) {
                        if (key === lineHeight.property) {
                            str.add(`/ ${val}`);
                        } else {
                            str.add(val);
                        }
                    }
                }
            }
            this._setProperty(property, [
                ...str
            ].join(" "), priority);
        }
    },
    get () {
        const val = this.getPropertyValue(property);
        if (parsers.hasVarFunc(val)) {
            return val;
        }
        const str = new Set();
        for (const [key] of shorthandFor){
            const v = this.getPropertyValue(key);
            if (parsers.hasVarFunc(v)) {
                return "";
            }
            if (v && v !== "normal" && !str.has(v)) {
                if (key === lineHeight.property) {
                    str.add(`/ ${v}`);
                } else {
                    str.add(`${v}`);
                }
            }
        }
        return [
            ...str
        ].join(" ");
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the font property value.
 *
 * @param {string} v - The value to parse.
 * @returns {object|undefined} The parsed value object or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    } else if (parsers.hasCalcFunc(v)) {
        v = parsers.resolveCalc(v);
    }
    if (!parsers.isValidPropertyValue(property, v)) {
        return;
    }
    const [fontBlock, ...families] = parsers.splitValue(v, {
        delimiter: ","
    });
    const [fontBlockA, fontBlockB] = parsers.splitValue(fontBlock, {
        delimiter: "/"
    });
    const font = {
        [fontStyle.property]: "normal",
        [fontVariant.property]: "normal",
        [fontWeight.property]: "normal"
    };
    const fontFamilies = new Set();
    if (fontBlockB) {
        const [lineB, ...familiesB] = fontBlockB.trim().split(" ");
        if (!lineB || !familiesB.length) {
            return;
        }
        const lineHeightB = lineHeight.parse(lineB);
        if (typeof lineHeightB !== "string") {
            return;
        }
        const familyB = fontFamily.parse(familiesB.join(" "));
        if (typeof familyB === "string") {
            fontFamilies.add(familyB);
        } else {
            return;
        }
        const parts = parsers.splitValue(fontBlockA.trim());
        const properties = [
            fontStyle.property,
            fontVariant.property,
            fontWeight.property,
            fontSize.property
        ];
        for (const part of parts){
            if (part === "normal") {
                continue;
            } else {
                for (const longhand of properties){
                    switch(longhand){
                        case fontSize.property:
                            {
                                const parsedValue = fontSize.parse(part);
                                if (typeof parsedValue === "string") {
                                    font[longhand] = parsedValue;
                                }
                                break;
                            }
                        case fontStyle.property:
                        case fontWeight.property:
                            {
                                if (font[longhand] === "normal") {
                                    const longhandItem = shorthandFor.get(longhand);
                                    const parsedValue = longhandItem.parse(part);
                                    if (typeof parsedValue === "string") {
                                        font[longhand] = parsedValue;
                                    }
                                }
                                break;
                            }
                        case fontVariant.property:
                            {
                                if (font[longhand] === "normal") {
                                    const parsedValue = fontVariant.parse(part);
                                    if (typeof parsedValue === "string") {
                                        if (parsedValue === "small-cap") {
                                            font[longhand] = parsedValue;
                                        } else if (parsedValue !== "normal") {
                                            return;
                                        }
                                    }
                                }
                                break;
                            }
                        default:
                    }
                }
            }
        }
        if (Object.hasOwn(font, fontSize.property)) {
            font[lineHeight.property] = lineHeightB;
        } else {
            return;
        }
    } else {
        const revParts = parsers.splitValue(fontBlockA.trim()).toReversed();
        if (revParts.length === 1) {
            const [part] = revParts;
            const value = parsers.parsePropertyValue(property, part);
            if (Array.isArray(value) && value.length === 1) {
                const [{ name, type }] = value;
                if (type === AST_TYPES.GLOBAL_KEYWORD) {
                    return {
                        [fontStyle.property]: name,
                        [fontVariant.property]: name,
                        [fontWeight.property]: name,
                        [fontSize.property]: name,
                        [lineHeight.property]: name,
                        [fontFamily.property]: name
                    };
                }
            }
            return;
        }
        const properties = [
            fontStyle.property,
            fontVariant.property,
            fontWeight.property,
            lineHeight.property
        ];
        for (const longhand of properties){
            font[longhand] = "normal";
        }
        const revFontFamily = [];
        let fontSizeA;
        for (const part of revParts){
            if (fontSizeA) {
                if (/^normal$/i.test(part)) {
                    continue;
                } else {
                    for (const longhand of properties){
                        switch(longhand){
                            case fontStyle.property:
                            case fontWeight.property:
                            case lineHeight.property:
                                {
                                    if (font[longhand] === "normal") {
                                        const longhandItem = shorthandFor.get(longhand);
                                        const parsedValue = longhandItem.parse(part);
                                        if (typeof parsedValue === "string") {
                                            font[longhand] = parsedValue;
                                        }
                                    }
                                    break;
                                }
                            case fontVariant.property:
                                {
                                    if (font[longhand] === "normal") {
                                        const parsedValue = fontVariant.parse(part);
                                        if (typeof parsedValue === "string") {
                                            if (parsedValue === "small-cap") {
                                                font[longhand] = parsedValue;
                                            } else if (parsedValue !== "normal") {
                                                return;
                                            }
                                        }
                                    }
                                    break;
                                }
                            default:
                        }
                    }
                }
            } else {
                const parsedFontSize = fontSize.parse(part);
                if (typeof parsedFontSize === "string") {
                    fontSizeA = parsedFontSize;
                } else {
                    const parsedFontFamily = fontFamily.parse(part);
                    if (typeof parsedFontFamily === "string") {
                        revFontFamily.push(parsedFontFamily);
                    } else {
                        return;
                    }
                }
            }
        }
        const family = fontFamily.parse(revFontFamily.toReversed().join(" "));
        if (fontSizeA && family) {
            font[fontSize.property] = fontSizeA;
            fontFamilies.add(fontFamily.parse(family));
        } else {
            return;
        }
    }
    for (const family of families){
        const parsedFontFamily = fontFamily.parse(family);
        if (parsedFontFamily) {
            fontFamilies.add(parsedFontFamily);
        } else {
            return;
        }
    }
    font[fontFamily.property] = [
        ...fontFamilies
    ].join(", ");
    return font;
}
module.exports = {
    descriptor,
    parse,
    property,
    shorthandFor
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/height.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "height";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = this._priorities.get(property) ?? "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the height property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveNumericValue(value, {
            min: 0,
            type: "length"
        });
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/left.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "left";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = this._priorities.get(property) ?? "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the left property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveNumericValue(value, {
            type: "length"
        });
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/lightingColor.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "lighting-color";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = this._priorities.get(property) ?? "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the lighting-color property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveColorValue(value);
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/marginTop.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "margin-top";
const shorthand = "margin";
const position = "top";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(shorthand, "");
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = !this._priorities.get(shorthand) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._positionLonghandSetter(property, val, priority, shorthand);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the margin-top property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveNumericValue(value, {
            type: "length"
        });
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    position,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/marginRight.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "margin-right";
const shorthand = "margin";
const position = "right";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(shorthand, "");
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = !this._priorities.get(shorthand) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._positionLonghandSetter(property, val, priority, shorthand);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the margin-right property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveNumericValue(value, {
            type: "length"
        });
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    position,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/marginBottom.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "margin-bottom";
const shorthand = "margin";
const position = "bottom";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(shorthand, "");
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = !this._priorities.get(shorthand) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._positionLonghandSetter(property, val, priority, shorthand);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the margin-bottom property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveNumericValue(value, {
            type: "length"
        });
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    position,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/marginLeft.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "margin-left";
const shorthand = "margin";
const position = "left";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(shorthand, "");
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = !this._priorities.get(shorthand) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._positionLonghandSetter(property, val, priority, shorthand);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the margin-left property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveNumericValue(value, {
            type: "length"
        });
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    position,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/margin.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const marginTop = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/marginTop.js [app-ssr] (ecmascript)");
const marginRight = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/marginRight.js [app-ssr] (ecmascript)");
const marginBottom = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/marginBottom.js [app-ssr] (ecmascript)");
const marginLeft = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/marginLeft.js [app-ssr] (ecmascript)");
const property = "margin";
const position = "edges";
const shorthandFor = new Map([
    [
        marginTop.property,
        marginTop
    ],
    [
        marginRight.property,
        marginRight
    ],
    [
        marginBottom.property,
        marginBottom
    ],
    [
        marginLeft.property,
        marginLeft
    ]
]);
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            for (const [longhand] of shorthandFor){
                this._setProperty(longhand, "");
            }
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (Array.isArray(val) || typeof val === "string") {
                const priority = this._priorities.get(property) ?? "";
                this._positionShorthandSetter(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the margin property value.
 *
 * @param {string} v - The value to parse.
 * @returns {Array<string>|string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const values = parsers.parsePropertyValue(property, v);
    const parsedValues = [];
    if (Array.isArray(values) && values.length) {
        if (values.length > 4) {
            return;
        }
        for (const value of values){
            const parsedValue = parsers.resolveNumericValue([
                value
            ], {
                length: values.length,
                type: "length"
            });
            if (!parsedValue) {
                return;
            }
            parsedValues.push(parsedValue);
        }
    } else if (typeof values === "string") {
        parsedValues.push(values);
    }
    if (parsedValues.length) {
        return parsedValues;
    }
}
module.exports = {
    descriptor,
    parse,
    position,
    property,
    shorthandFor
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/opacity.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "opacity";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = this._priorities.get(property) ?? "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the opacity property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveNumericValue(value, {
            clamp: true
        });
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/outlineColor.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "outline-color";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = this._priorities.get(property) ?? "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the outline-color property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveColorValue(value);
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/paddingTop.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "padding-top";
const shorthand = "padding";
const position = "top";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(shorthand, "");
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = !this._priorities.get(shorthand) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._positionLonghandSetter(property, val, priority, shorthand);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the padding-top property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveNumericValue(value, {
            min: 0,
            type: "length"
        });
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    position,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/paddingRight.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "padding-right";
const shorthand = "padding";
const position = "right";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(shorthand, "");
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = !this._priorities.get(shorthand) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._positionLonghandSetter(property, val, priority, shorthand);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the padding-right property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveNumericValue(value, {
            min: 0,
            type: "length"
        });
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    position,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/paddingBottom.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "padding-bottom";
const shorthand = "padding";
const position = "bottom";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(shorthand, "");
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = !this._priorities.get(shorthand) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._positionLonghandSetter(property, val, priority, shorthand);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the padding-bottom property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveNumericValue(value, {
            min: 0,
            type: "length"
        });
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    position,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/paddingLeft.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "padding-left";
const shorthand = "padding";
const position = "left";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(shorthand, "");
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = !this._priorities.get(shorthand) && this._priorities.has(property) ? this._priorities.get(property) : "";
                this._positionLonghandSetter(property, val, priority, shorthand);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the padding-left property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveNumericValue(value, {
            min: 0,
            type: "length"
        });
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    position,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/padding.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const paddingTop = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/paddingTop.js [app-ssr] (ecmascript)");
const paddingRight = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/paddingRight.js [app-ssr] (ecmascript)");
const paddingBottom = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/paddingBottom.js [app-ssr] (ecmascript)");
const paddingLeft = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/paddingLeft.js [app-ssr] (ecmascript)");
const property = "padding";
const position = "edges";
const shorthandFor = new Map([
    [
        paddingTop.property,
        paddingTop
    ],
    [
        paddingRight.property,
        paddingRight
    ],
    [
        paddingBottom.property,
        paddingBottom
    ],
    [
        paddingLeft.property,
        paddingLeft
    ]
]);
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            for (const [longhand] of shorthandFor){
                this._setProperty(longhand, "");
            }
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (Array.isArray(val) || typeof val === "string") {
                const priority = this._priorities.get(property) ?? "";
                this._positionShorthandSetter(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the padding property value.
 *
 * @param {string} v - The value to parse.
 * @returns {Array<string>|string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const values = parsers.parsePropertyValue(property, v);
    const parsedValues = [];
    if (Array.isArray(values) && values.length) {
        if (values.length > 4) {
            return;
        }
        for (const value of values){
            const parsedValue = parsers.resolveNumericValue([
                value
            ], {
                length: values.length,
                min: 0,
                type: "length"
            });
            if (!parsedValue) {
                return;
            }
            parsedValues.push(parsedValue);
        }
    } else if (typeof values === "string") {
        parsedValues.push(values);
    }
    if (parsedValues.length) {
        return parsedValues;
    }
}
module.exports = {
    descriptor,
    parse,
    position,
    property,
    shorthandFor
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/right.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "right";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = this._priorities.get(property) ?? "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the right property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveNumericValue(value, {
            type: "length"
        });
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/stopColor.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "stop-color";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = this._priorities.get(property) ?? "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the stop-color property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveColorValue(value);
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/textEmphasisColor.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "text-emphasis-color";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = this._priorities.get(property) ?? "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the text-emphasis-color property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveColorValue(value);
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/top.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "top";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = this._priorities.get(property) ?? "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the top property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveNumericValue(value, {
            type: "length"
        });
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/webkitTextFillColor.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "-webkit-text-fill-color";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = this._priorities.get(property) ?? "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the -webkit-text-fill-color property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveColorValue(value);
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/webkitTextStrokeColor.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "-webkit-text-stroke-color";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = this._priorities.get(property) ?? "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the -webkit-text-stroke-color property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveColorValue(value);
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
"[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/properties/width.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parsers = __turbopack_context__.r("[project]/node_modules/.pnpm/cssstyle@6.2.0/node_modules/cssstyle/lib/parsers.js [app-ssr] (ecmascript)");
const property = "width";
const descriptor = {
    set (v) {
        v = parsers.prepareValue(v);
        if (parsers.hasVarFunc(v)) {
            this._setProperty(property, v);
        } else {
            const val = parse(v);
            if (typeof val === "string") {
                const priority = this._priorities.get(property) ?? "";
                this._setProperty(property, val, priority);
            }
        }
    },
    get () {
        return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
};
/**
 * Parses the width property value.
 *
 * @param {string} v - The value to parse.
 * @returns {string|undefined} The parsed value or undefined if invalid.
 */ function parse(v) {
    if (v === "") {
        return v;
    }
    const value = parsers.parsePropertyValue(property, v);
    if (Array.isArray(value) && value.length === 1) {
        return parsers.resolveNumericValue(value, {
            min: 0,
            type: "length"
        });
    } else if (typeof value === "string") {
        return value;
    }
}
module.exports = {
    descriptor,
    parse,
    property
};
}),
];

//# sourceMappingURL=f5b39_cssstyle_lib_properties_f6c116df._.js.map