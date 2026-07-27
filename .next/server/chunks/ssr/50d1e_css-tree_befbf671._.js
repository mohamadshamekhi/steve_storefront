module.exports = [
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// CSS Syntax Module Level 3
// https://www.w3.org/TR/css-syntax-3/
const EOF = 0; // <EOF-token>
const Ident = 1; // <ident-token>
const Function = 2; // <function-token>
const AtKeyword = 3; // <at-keyword-token>
const Hash = 4; // <hash-token>
const String = 5; // <string-token>
const BadString = 6; // <bad-string-token>
const Url = 7; // <url-token>
const BadUrl = 8; // <bad-url-token>
const Delim = 9; // <delim-token>
const Number = 10; // <number-token>
const Percentage = 11; // <percentage-token>
const Dimension = 12; // <dimension-token>
const WhiteSpace = 13; // <whitespace-token>
const CDO = 14; // <CDO-token>
const CDC = 15; // <CDC-token>
const Colon = 16; // <colon-token>     :
const Semicolon = 17; // <semicolon-token> ;
const Comma = 18; // <comma-token>     ,
const LeftSquareBracket = 19; // <[-token>
const RightSquareBracket = 20; // <]-token>
const LeftParenthesis = 21; // <(-token>
const RightParenthesis = 22; // <)-token>
const LeftCurlyBracket = 23; // <{-token>
const RightCurlyBracket = 24; // <}-token>
const Comment = 25;
exports.AtKeyword = AtKeyword;
exports.BadString = BadString;
exports.BadUrl = BadUrl;
exports.CDC = CDC;
exports.CDO = CDO;
exports.Colon = Colon;
exports.Comma = Comma;
exports.Comment = Comment;
exports.Delim = Delim;
exports.Dimension = Dimension;
exports.EOF = EOF;
exports.Function = Function;
exports.Hash = Hash;
exports.Ident = Ident;
exports.LeftCurlyBracket = LeftCurlyBracket;
exports.LeftParenthesis = LeftParenthesis;
exports.LeftSquareBracket = LeftSquareBracket;
exports.Number = Number;
exports.Percentage = Percentage;
exports.RightCurlyBracket = RightCurlyBracket;
exports.RightParenthesis = RightParenthesis;
exports.RightSquareBracket = RightSquareBracket;
exports.Semicolon = Semicolon;
exports.String = String;
exports.Url = Url;
exports.WhiteSpace = WhiteSpace;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/char-code-definitions.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const EOF = 0;
// https://drafts.csswg.org/css-syntax-3/
// § 4.2. Definitions
// digit
// A code point between U+0030 DIGIT ZERO (0) and U+0039 DIGIT NINE (9).
function isDigit(code) {
    return code >= 0x0030 && code <= 0x0039;
}
// hex digit
// A digit, or a code point between U+0041 LATIN CAPITAL LETTER A (A) and U+0046 LATIN CAPITAL LETTER F (F),
// or a code point between U+0061 LATIN SMALL LETTER A (a) and U+0066 LATIN SMALL LETTER F (f).
function isHexDigit(code) {
    return isDigit(code) || code >= 0x0041 && code <= 0x0046 || code >= 0x0061 && code <= 0x0066 // a .. f
    ;
}
// uppercase letter
// A code point between U+0041 LATIN CAPITAL LETTER A (A) and U+005A LATIN CAPITAL LETTER Z (Z).
function isUppercaseLetter(code) {
    return code >= 0x0041 && code <= 0x005A;
}
// lowercase letter
// A code point between U+0061 LATIN SMALL LETTER A (a) and U+007A LATIN SMALL LETTER Z (z).
function isLowercaseLetter(code) {
    return code >= 0x0061 && code <= 0x007A;
}
// letter
// An uppercase letter or a lowercase letter.
function isLetter(code) {
    return isUppercaseLetter(code) || isLowercaseLetter(code);
}
// non-ASCII code point
// A code point with a value equal to or greater than U+0080 <control>.
//
// 2024-09-02: The latest spec narrows the range for non-ASCII characters (see https://github.com/csstree/csstree/issues/188).
// However, all modern browsers support a wider range, and strictly following the latest spec could result
// in some CSS being parsed incorrectly, even though it works in the browser. Therefore, this function adheres
// to the previous, broader definition of non-ASCII characters.
function isNonAscii(code) {
    return code >= 0x0080;
}
// name-start code point
// A letter, a non-ASCII code point, or U+005F LOW LINE (_).
function isNameStart(code) {
    return isLetter(code) || isNonAscii(code) || code === 0x005F;
}
// name code point
// A name-start code point, a digit, or U+002D HYPHEN-MINUS (-).
function isName(code) {
    return isNameStart(code) || isDigit(code) || code === 0x002D;
}
// non-printable code point
// A code point between U+0000 NULL and U+0008 BACKSPACE, or U+000B LINE TABULATION,
// or a code point between U+000E SHIFT OUT and U+001F INFORMATION SEPARATOR ONE, or U+007F DELETE.
function isNonPrintable(code) {
    return code >= 0x0000 && code <= 0x0008 || code === 0x000B || code >= 0x000E && code <= 0x001F || code === 0x007F;
}
// newline
// U+000A LINE FEED. Note that U+000D CARRIAGE RETURN and U+000C FORM FEED are not included in this definition,
// as they are converted to U+000A LINE FEED during preprocessing.
// TODO: we doesn't do a preprocessing, so check a code point for U+000D CARRIAGE RETURN and U+000C FORM FEED
function isNewline(code) {
    return code === 0x000A || code === 0x000D || code === 0x000C;
}
// whitespace
// A newline, U+0009 CHARACTER TABULATION, or U+0020 SPACE.
function isWhiteSpace(code) {
    return isNewline(code) || code === 0x0020 || code === 0x0009;
}
// § 4.3.8. Check if two code points are a valid escape
function isValidEscape(first, second) {
    // If the first code point is not U+005C REVERSE SOLIDUS (\), return false.
    if (first !== 0x005C) {
        return false;
    }
    // Otherwise, if the second code point is a newline or EOF, return false.
    if (isNewline(second) || second === EOF) {
        return false;
    }
    // Otherwise, return true.
    return true;
}
// § 4.3.9. Check if three code points would start an identifier
function isIdentifierStart(first, second, third) {
    // Look at the first code point:
    // U+002D HYPHEN-MINUS
    if (first === 0x002D) {
        // If the second code point is a name-start code point or a U+002D HYPHEN-MINUS,
        // or the second and third code points are a valid escape, return true. Otherwise, return false.
        return isNameStart(second) || second === 0x002D || isValidEscape(second, third);
    }
    // name-start code point
    if (isNameStart(first)) {
        // Return true.
        return true;
    }
    // U+005C REVERSE SOLIDUS (\)
    if (first === 0x005C) {
        // If the first and second code points are a valid escape, return true. Otherwise, return false.
        return isValidEscape(first, second);
    }
    // anything else
    // Return false.
    return false;
}
// § 4.3.10. Check if three code points would start a number
function isNumberStart(first, second, third) {
    // Look at the first code point:
    // U+002B PLUS SIGN (+)
    // U+002D HYPHEN-MINUS (-)
    if (first === 0x002B || first === 0x002D) {
        // If the second code point is a digit, return true.
        if (isDigit(second)) {
            return 2;
        }
        // Otherwise, if the second code point is a U+002E FULL STOP (.)
        // and the third code point is a digit, return true.
        // Otherwise, return false.
        return second === 0x002E && isDigit(third) ? 3 : 0;
    }
    // U+002E FULL STOP (.)
    if (first === 0x002E) {
        // If the second code point is a digit, return true. Otherwise, return false.
        return isDigit(second) ? 2 : 0;
    }
    // digit
    if (isDigit(first)) {
        // Return true.
        return 1;
    }
    // anything else
    // Return false.
    return 0;
}
//
// Misc
//
// detect BOM (https://en.wikipedia.org/wiki/Byte_order_mark)
function isBOM(code) {
    // UTF-16BE
    if (code === 0xFEFF) {
        return 1;
    }
    // UTF-16LE
    if (code === 0xFFFE) {
        return 1;
    }
    return 0;
}
// Fast code category
// Only ASCII code points has a special meaning, that's why we define a maps for 0..127 codes only
const CATEGORY = new Array(0x80);
const EofCategory = 0x80;
const WhiteSpaceCategory = 0x82;
const DigitCategory = 0x83;
const NameStartCategory = 0x84;
const NonPrintableCategory = 0x85;
for(let i = 0; i < CATEGORY.length; i++){
    CATEGORY[i] = isWhiteSpace(i) && WhiteSpaceCategory || isDigit(i) && DigitCategory || isNameStart(i) && NameStartCategory || isNonPrintable(i) && NonPrintableCategory || i || EofCategory;
}
function charCodeCategory(code) {
    return code < 0x80 ? CATEGORY[code] : NameStartCategory;
}
exports.DigitCategory = DigitCategory;
exports.EofCategory = EofCategory;
exports.NameStartCategory = NameStartCategory;
exports.NonPrintableCategory = NonPrintableCategory;
exports.WhiteSpaceCategory = WhiteSpaceCategory;
exports.charCodeCategory = charCodeCategory;
exports.isBOM = isBOM;
exports.isDigit = isDigit;
exports.isHexDigit = isHexDigit;
exports.isIdentifierStart = isIdentifierStart;
exports.isLetter = isLetter;
exports.isLowercaseLetter = isLowercaseLetter;
exports.isName = isName;
exports.isNameStart = isNameStart;
exports.isNewline = isNewline;
exports.isNonAscii = isNonAscii;
exports.isNonPrintable = isNonPrintable;
exports.isNumberStart = isNumberStart;
exports.isUppercaseLetter = isUppercaseLetter;
exports.isValidEscape = isValidEscape;
exports.isWhiteSpace = isWhiteSpace;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/utils.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const charCodeDefinitions = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/char-code-definitions.cjs [app-ssr] (ecmascript)");
function getCharCode(source, offset) {
    return offset < source.length ? source.charCodeAt(offset) : 0;
}
function getNewlineLength(source, offset, code) {
    if (code === 13 /* \r */  && getCharCode(source, offset + 1) === 10 /* \n */ ) {
        return 2;
    }
    return 1;
}
function cmpChar(testStr, offset, referenceCode) {
    let code = testStr.charCodeAt(offset);
    // code.toLowerCase() for A..Z
    if (charCodeDefinitions.isUppercaseLetter(code)) {
        code = code | 32;
    }
    return code === referenceCode;
}
function cmpStr(testStr, start, end, referenceStr) {
    if (end - start !== referenceStr.length) {
        return false;
    }
    if (start < 0 || end > testStr.length) {
        return false;
    }
    for(let i = start; i < end; i++){
        const referenceCode = referenceStr.charCodeAt(i - start);
        let testCode = testStr.charCodeAt(i);
        // testCode.toLowerCase() for A..Z
        if (charCodeDefinitions.isUppercaseLetter(testCode)) {
            testCode = testCode | 32;
        }
        if (testCode !== referenceCode) {
            return false;
        }
    }
    return true;
}
function findWhiteSpaceStart(source, offset) {
    for(; offset >= 0; offset--){
        if (!charCodeDefinitions.isWhiteSpace(source.charCodeAt(offset))) {
            break;
        }
    }
    return offset + 1;
}
function findWhiteSpaceEnd(source, offset) {
    for(; offset < source.length; offset++){
        if (!charCodeDefinitions.isWhiteSpace(source.charCodeAt(offset))) {
            break;
        }
    }
    return offset;
}
function findDecimalNumberEnd(source, offset) {
    for(; offset < source.length; offset++){
        if (!charCodeDefinitions.isDigit(source.charCodeAt(offset))) {
            break;
        }
    }
    return offset;
}
// § 4.3.7. Consume an escaped code point
function consumeEscaped(source, offset) {
    // It assumes that the U+005C REVERSE SOLIDUS (\) has already been consumed and
    // that the next input code point has already been verified to be part of a valid escape.
    offset += 2;
    // hex digit
    if (charCodeDefinitions.isHexDigit(getCharCode(source, offset - 1))) {
        // Consume as many hex digits as possible, but no more than 5.
        // Note that this means 1-6 hex digits have been consumed in total.
        for(const maxOffset = Math.min(source.length, offset + 5); offset < maxOffset; offset++){
            if (!charCodeDefinitions.isHexDigit(getCharCode(source, offset))) {
                break;
            }
        }
        // If the next input code point is whitespace, consume it as well.
        const code = getCharCode(source, offset);
        if (charCodeDefinitions.isWhiteSpace(code)) {
            offset += getNewlineLength(source, offset, code);
        }
    }
    return offset;
}
// §4.3.11. Consume a name
// Note: This algorithm does not do the verification of the first few code points that are necessary
// to ensure the returned code points would constitute an <ident-token>. If that is the intended use,
// ensure that the stream starts with an identifier before calling this algorithm.
function consumeName(source, offset) {
    // Let result initially be an empty string.
    // Repeatedly consume the next input code point from the stream:
    for(; offset < source.length; offset++){
        const code = source.charCodeAt(offset);
        // name code point
        if (charCodeDefinitions.isName(code)) {
            continue;
        }
        // the stream starts with a valid escape
        if (charCodeDefinitions.isValidEscape(code, getCharCode(source, offset + 1))) {
            // Consume an escaped code point. Append the returned code point to result.
            offset = consumeEscaped(source, offset) - 1;
            continue;
        }
        break;
    }
    return offset;
}
// §4.3.12. Consume a number
function consumeNumber(source, offset) {
    let code = source.charCodeAt(offset);
    // 2. If the next input code point is U+002B PLUS SIGN (+) or U+002D HYPHEN-MINUS (-),
    // consume it and append it to repr.
    if (code === 0x002B || code === 0x002D) {
        code = source.charCodeAt(offset += 1);
    }
    // 3. While the next input code point is a digit, consume it and append it to repr.
    if (charCodeDefinitions.isDigit(code)) {
        offset = findDecimalNumberEnd(source, offset + 1);
        code = source.charCodeAt(offset);
    }
    // 4. If the next 2 input code points are U+002E FULL STOP (.) followed by a digit, then:
    if (code === 0x002E && charCodeDefinitions.isDigit(source.charCodeAt(offset + 1))) {
        // 4.1 Consume them.
        // 4.2 Append them to repr.
        offset += 2;
        // 4.3 Set type to "number".
        // TODO
        // 4.4 While the next input code point is a digit, consume it and append it to repr.
        offset = findDecimalNumberEnd(source, offset);
    }
    // 5. If the next 2 or 3 input code points are U+0045 LATIN CAPITAL LETTER E (E)
    // or U+0065 LATIN SMALL LETTER E (e), ... , followed by a digit, then:
    if (cmpChar(source, offset, 101 /* e */ )) {
        let sign = 0;
        code = source.charCodeAt(offset + 1);
        // ... optionally followed by U+002D HYPHEN-MINUS (-) or U+002B PLUS SIGN (+) ...
        if (code === 0x002D || code === 0x002B) {
            sign = 1;
            code = source.charCodeAt(offset + 2);
        }
        // ... followed by a digit
        if (charCodeDefinitions.isDigit(code)) {
            // 5.1 Consume them.
            // 5.2 Append them to repr.
            // 5.3 Set type to "number".
            // TODO
            // 5.4 While the next input code point is a digit, consume it and append it to repr.
            offset = findDecimalNumberEnd(source, offset + 1 + sign + 1);
        }
    }
    return offset;
}
// § 4.3.14. Consume the remnants of a bad url
// ... its sole use is to consume enough of the input stream to reach a recovery point
// where normal tokenizing can resume.
function consumeBadUrlRemnants(source, offset) {
    // Repeatedly consume the next input code point from the stream:
    for(; offset < source.length; offset++){
        const code = source.charCodeAt(offset);
        // U+0029 RIGHT PARENTHESIS ())
        // EOF
        if (code === 0x0029) {
            // Return.
            offset++;
            break;
        }
        if (charCodeDefinitions.isValidEscape(code, getCharCode(source, offset + 1))) {
            // Consume an escaped code point.
            // Note: This allows an escaped right parenthesis ("\)") to be encountered
            // without ending the <bad-url-token>. This is otherwise identical to
            // the "anything else" clause.
            offset = consumeEscaped(source, offset);
        }
    }
    return offset;
}
// § 4.3.7. Consume an escaped code point
// Note: This algorithm assumes that escaped is valid without leading U+005C REVERSE SOLIDUS (\)
function decodeEscaped(escaped) {
    // Single char escaped that's not a hex digit
    if (escaped.length === 1 && !charCodeDefinitions.isHexDigit(escaped.charCodeAt(0))) {
        return escaped[0];
    }
    // Interpret the hex digits as a hexadecimal number.
    let code = parseInt(escaped, 16);
    if (code === 0 || code >= 0xD800 && code <= 0xDFFF || code > 0x10FFFF // or is greater than the maximum allowed code point
    ) {
        // ... return U+FFFD REPLACEMENT CHARACTER
        code = 0xFFFD;
    }
    // Otherwise, return the code point with that value.
    return String.fromCodePoint(code);
}
exports.cmpChar = cmpChar;
exports.cmpStr = cmpStr;
exports.consumeBadUrlRemnants = consumeBadUrlRemnants;
exports.consumeEscaped = consumeEscaped;
exports.consumeName = consumeName;
exports.consumeNumber = consumeNumber;
exports.decodeEscaped = decodeEscaped;
exports.findDecimalNumberEnd = findDecimalNumberEnd;
exports.findWhiteSpaceEnd = findWhiteSpaceEnd;
exports.findWhiteSpaceStart = findWhiteSpaceStart;
exports.getNewlineLength = getNewlineLength;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/names.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const tokenNames = [
    'EOF-token',
    'ident-token',
    'function-token',
    'at-keyword-token',
    'hash-token',
    'string-token',
    'bad-string-token',
    'url-token',
    'bad-url-token',
    'delim-token',
    'number-token',
    'percentage-token',
    'dimension-token',
    'whitespace-token',
    'CDO-token',
    'CDC-token',
    'colon-token',
    'semicolon-token',
    'comma-token',
    '[-token',
    ']-token',
    '(-token',
    ')-token',
    '{-token',
    '}-token',
    'comment-token'
];
module.exports = tokenNames;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/adopt-buffer.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const MIN_SIZE = 16 * 1024;
function adoptBuffer(buffer = null, size) {
    if (buffer === null || buffer.length < size) {
        return new Uint32Array(Math.max(size + 1024, MIN_SIZE));
    }
    return buffer;
}
exports.adoptBuffer = adoptBuffer;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/OffsetToLocation.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const adoptBuffer = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/adopt-buffer.cjs [app-ssr] (ecmascript)");
const charCodeDefinitions = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/char-code-definitions.cjs [app-ssr] (ecmascript)");
const N = 10;
const F = 12;
const R = 13;
function computeLinesAndColumns(host) {
    const source = host.source;
    const sourceLength = source.length;
    const startOffset = source.length > 0 ? charCodeDefinitions.isBOM(source.charCodeAt(0)) : 0;
    const lines = adoptBuffer.adoptBuffer(host.lines, sourceLength);
    const columns = adoptBuffer.adoptBuffer(host.columns, sourceLength);
    let line = host.startLine;
    let column = host.startColumn;
    for(let i = startOffset; i < sourceLength; i++){
        const code = source.charCodeAt(i);
        lines[i] = line;
        columns[i] = column++;
        if (code === N || code === R || code === F) {
            if (code === R && i + 1 < sourceLength && source.charCodeAt(i + 1) === N) {
                i++;
                lines[i] = line;
                columns[i] = column;
            }
            line++;
            column = 1;
        }
    }
    lines[sourceLength] = line;
    columns[sourceLength] = column;
    host.lines = lines;
    host.columns = columns;
    host.computed = true;
}
class OffsetToLocation {
    constructor(source, startOffset, startLine, startColumn){
        this.setSource(source, startOffset, startLine, startColumn);
        this.lines = null;
        this.columns = null;
    }
    setSource(source = '', startOffset = 0, startLine = 1, startColumn = 1) {
        this.source = source;
        this.startOffset = startOffset;
        this.startLine = startLine;
        this.startColumn = startColumn;
        this.computed = false;
    }
    getLocation(offset, filename) {
        if (!this.computed) {
            computeLinesAndColumns(this);
        }
        return {
            source: filename,
            offset: this.startOffset + offset,
            line: this.lines[offset],
            column: this.columns[offset]
        };
    }
    getLocationRange(start, end, filename) {
        if (!this.computed) {
            computeLinesAndColumns(this);
        }
        return {
            source: filename,
            start: {
                offset: this.startOffset + start,
                line: this.lines[start],
                column: this.columns[start]
            },
            end: {
                offset: this.startOffset + end,
                line: this.lines[end],
                column: this.columns[end]
            }
        };
    }
}
exports.OffsetToLocation = OffsetToLocation;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/TokenStream.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const adoptBuffer = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/adopt-buffer.cjs [app-ssr] (ecmascript)");
const utils = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/utils.cjs [app-ssr] (ecmascript)");
const names = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/names.cjs [app-ssr] (ecmascript)");
const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const OFFSET_MASK = 0x00FFFFFF;
const TYPE_SHIFT = 24;
const BLOCK_OPEN_TOKEN = 1;
const BLOCK_CLOSE_TOKEN = 2;
const balancePair = new Uint8Array(32); // 32b of memory ought to be enough for anyone (any number of tokens)
balancePair[types.Function] = types.RightParenthesis;
balancePair[types.LeftParenthesis] = types.RightParenthesis;
balancePair[types.LeftSquareBracket] = types.RightSquareBracket;
balancePair[types.LeftCurlyBracket] = types.RightCurlyBracket;
const blockTokens = new Uint8Array(32);
blockTokens[types.Function] = BLOCK_OPEN_TOKEN;
blockTokens[types.LeftParenthesis] = BLOCK_OPEN_TOKEN;
blockTokens[types.LeftSquareBracket] = BLOCK_OPEN_TOKEN;
blockTokens[types.LeftCurlyBracket] = BLOCK_OPEN_TOKEN;
blockTokens[types.RightParenthesis] = BLOCK_CLOSE_TOKEN;
blockTokens[types.RightSquareBracket] = BLOCK_CLOSE_TOKEN;
blockTokens[types.RightCurlyBracket] = BLOCK_CLOSE_TOKEN;
function boundIndex(index, min, max) {
    return index < min ? min : index > max ? max : index;
}
class TokenStream {
    constructor(source, tokenize){
        this.setSource(source, tokenize);
    }
    reset() {
        this.eof = false;
        this.tokenIndex = -1;
        this.tokenType = 0;
        this.tokenStart = this.firstCharOffset;
        this.tokenEnd = this.firstCharOffset;
    }
    setSource(source = '', tokenize = ()=>{}) {
        source = String(source || '');
        const sourceLength = source.length;
        const offsetAndType = adoptBuffer.adoptBuffer(this.offsetAndType, source.length + 1); // +1 because of eof-token
        const balance = adoptBuffer.adoptBuffer(this.balance, source.length + 1);
        let tokenCount = 0;
        let firstCharOffset = -1;
        let balanceCloseType = 0;
        let balanceStart = source.length;
        // capture buffers
        this.offsetAndType = null;
        this.balance = null;
        balance.fill(0);
        tokenize(source, (type, start, end)=>{
            const index = tokenCount++;
            // type & offset
            offsetAndType[index] = type << TYPE_SHIFT | end;
            if (firstCharOffset === -1) {
                firstCharOffset = start;
            }
            // balance
            balance[index] = balanceStart;
            if (type === balanceCloseType) {
                const prevBalanceStart = balance[balanceStart];
                // set reference to balance end for a block opener
                balance[balanceStart] = index;
                // pop state
                balanceStart = prevBalanceStart;
                balanceCloseType = balancePair[offsetAndType[prevBalanceStart] >> TYPE_SHIFT];
            } else if (this.isBlockOpenerTokenType(type)) {
                // push state
                balanceStart = index;
                balanceCloseType = balancePair[type];
            }
        });
        // finalize buffers
        offsetAndType[tokenCount] = types.EOF << TYPE_SHIFT | sourceLength; // <EOF-token>
        balance[tokenCount] = tokenCount; // prevents false positive balance match with any token
        // reverse references from balance start to end
        // tokens
        //   token:   a ( [ b c ] d e ) {
        //   index:   0 1 2 3 4 5 6 7 8 9
        // before
        //   balance: 0 8 5 2 2 2 1 1 1 0
        //            - > > < < < < < < -
        // after
        //   balance: 9 8 5 5 5 2 8 8 1 9
        //            > > > > > < > > < >
        for(let i = 0; i < tokenCount; i++){
            const balanceStart = balance[i];
            if (balanceStart <= i) {
                const balanceEnd = balance[balanceStart];
                if (balanceEnd !== i) {
                    balance[i] = balanceEnd;
                }
            } else if (balanceStart > tokenCount) {
                balance[i] = tokenCount;
            }
        }
        // balance[0] = tokenCount;
        this.source = source;
        this.firstCharOffset = firstCharOffset === -1 ? 0 : firstCharOffset;
        this.tokenCount = tokenCount;
        this.offsetAndType = offsetAndType;
        this.balance = balance;
        this.reset();
        this.next();
    }
    lookupType(offset) {
        offset += this.tokenIndex;
        if (offset < this.tokenCount) {
            return this.offsetAndType[offset] >> TYPE_SHIFT;
        }
        return types.EOF;
    }
    lookupTypeNonSC(idx) {
        for(let offset = this.tokenIndex; offset < this.tokenCount; offset++){
            const tokenType = this.offsetAndType[offset] >> TYPE_SHIFT;
            if (tokenType !== types.WhiteSpace && tokenType !== types.Comment) {
                if (idx-- === 0) {
                    return tokenType;
                }
            }
        }
        return types.EOF;
    }
    lookupOffset(offset) {
        offset += this.tokenIndex;
        if (offset < this.tokenCount) {
            return this.offsetAndType[offset - 1] & OFFSET_MASK;
        }
        return this.source.length;
    }
    lookupOffsetNonSC(idx) {
        for(let offset = this.tokenIndex; offset < this.tokenCount; offset++){
            const tokenType = this.offsetAndType[offset] >> TYPE_SHIFT;
            if (tokenType !== types.WhiteSpace && tokenType !== types.Comment) {
                if (idx-- === 0) {
                    return offset - this.tokenIndex;
                }
            }
        }
        return types.EOF;
    }
    lookupValue(offset, referenceStr) {
        offset += this.tokenIndex;
        if (offset < this.tokenCount) {
            return utils.cmpStr(this.source, this.offsetAndType[offset - 1] & OFFSET_MASK, this.offsetAndType[offset] & OFFSET_MASK, referenceStr);
        }
        return false;
    }
    getTokenStart(tokenIndex) {
        if (tokenIndex === this.tokenIndex) {
            return this.tokenStart;
        }
        if (tokenIndex > 0) {
            return tokenIndex < this.tokenCount ? this.offsetAndType[tokenIndex - 1] & OFFSET_MASK : this.offsetAndType[this.tokenCount] & OFFSET_MASK;
        }
        return this.firstCharOffset;
    }
    getTokenEnd(tokenIndex) {
        if (tokenIndex === this.tokenIndex) {
            return this.tokenEnd;
        }
        return this.offsetAndType[boundIndex(tokenIndex, 0, this.tokenCount)] & OFFSET_MASK;
    }
    getTokenType(tokenIndex) {
        if (tokenIndex === this.tokenIndex) {
            return this.tokenType;
        }
        return this.offsetAndType[boundIndex(tokenIndex, 0, this.tokenCount)] >> TYPE_SHIFT;
    }
    substrToCursor(start) {
        return this.source.substring(start, this.tokenStart);
    }
    isBlockOpenerTokenType(tokenType) {
        return blockTokens[tokenType] === BLOCK_OPEN_TOKEN;
    }
    isBlockCloserTokenType(tokenType) {
        return blockTokens[tokenType] === BLOCK_CLOSE_TOKEN;
    }
    getBlockTokenPairIndex(tokenIndex) {
        const type = this.getTokenType(tokenIndex);
        if (blockTokens[type] === 1) {
            // block open token
            const pairIndex = this.balance[tokenIndex];
            const closeType = this.getTokenType(pairIndex);
            return balancePair[type] === closeType ? pairIndex : -1;
        } else if (blockTokens[type] === 2) {
            // block close token
            const pairIndex = this.balance[tokenIndex];
            const openType = this.getTokenType(pairIndex);
            return balancePair[openType] === type ? pairIndex : -1;
        }
        return -1;
    }
    isBalanceEdge(tokenIndex) {
        return this.balance[this.tokenIndex] < tokenIndex;
    }
    isDelim(code, offset) {
        if (offset) {
            return this.lookupType(offset) === types.Delim && this.source.charCodeAt(this.lookupOffset(offset)) === code;
        }
        return this.tokenType === types.Delim && this.source.charCodeAt(this.tokenStart) === code;
    }
    skip(tokenCount) {
        let next = this.tokenIndex + tokenCount;
        if (next < this.tokenCount) {
            this.tokenIndex = next;
            this.tokenStart = this.offsetAndType[next - 1] & OFFSET_MASK;
            next = this.offsetAndType[next];
            this.tokenType = next >> TYPE_SHIFT;
            this.tokenEnd = next & OFFSET_MASK;
        } else {
            this.tokenIndex = this.tokenCount;
            this.next();
        }
    }
    next() {
        let next = this.tokenIndex + 1;
        if (next < this.tokenCount) {
            this.tokenIndex = next;
            this.tokenStart = this.tokenEnd;
            next = this.offsetAndType[next];
            this.tokenType = next >> TYPE_SHIFT;
            this.tokenEnd = next & OFFSET_MASK;
        } else {
            this.eof = true;
            this.tokenIndex = this.tokenCount;
            this.tokenType = types.EOF;
            this.tokenStart = this.tokenEnd = this.source.length;
        }
    }
    skipSC() {
        while(this.tokenType === types.WhiteSpace || this.tokenType === types.Comment){
            this.next();
        }
    }
    skipUntilBalanced(startToken, stopConsume) {
        let cursor = startToken;
        let balanceEnd = 0;
        let offset = 0;
        loop: for(; cursor < this.tokenCount; cursor++){
            balanceEnd = this.balance[cursor];
            // stop scanning on balance edge that points to offset before start token
            if (balanceEnd < startToken) {
                break loop;
            }
            offset = cursor > 0 ? this.offsetAndType[cursor - 1] & OFFSET_MASK : this.firstCharOffset;
            // check stop condition
            switch(stopConsume(this.source.charCodeAt(offset))){
                case 1:
                    break loop;
                case 2:
                    cursor++;
                    break loop;
                default:
                    // fast forward to the end of balanced block for an open block tokens
                    if (this.isBlockOpenerTokenType(this.offsetAndType[cursor] >> TYPE_SHIFT)) {
                        cursor = balanceEnd;
                    }
            }
        }
        this.skip(cursor - this.tokenIndex);
    }
    forEachToken(fn) {
        for(let i = 0, offset = this.firstCharOffset; i < this.tokenCount; i++){
            const start = offset;
            const item = this.offsetAndType[i];
            const end = item & OFFSET_MASK;
            const type = item >> TYPE_SHIFT;
            offset = end;
            fn(type, start, end, i);
        }
    }
    dump() {
        const tokens = new Array(this.tokenCount);
        this.forEachToken((type, start, end, index)=>{
            tokens[index] = {
                idx: index,
                type: names[type],
                chunk: this.source.substring(start, end),
                balance: this.balance[index]
            };
        });
        return tokens;
    }
}
exports.TokenStream = TokenStream;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/index.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const charCodeDefinitions = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/char-code-definitions.cjs [app-ssr] (ecmascript)");
const utils = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/utils.cjs [app-ssr] (ecmascript)");
const names = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/names.cjs [app-ssr] (ecmascript)");
const OffsetToLocation = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/OffsetToLocation.cjs [app-ssr] (ecmascript)");
const TokenStream = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/TokenStream.cjs [app-ssr] (ecmascript)");
function tokenize(source, onToken) {
    function getCharCode(offset) {
        return offset < sourceLength ? source.charCodeAt(offset) : 0;
    }
    // § 4.3.3. Consume a numeric token
    function consumeNumericToken() {
        // Consume a number and let number be the result.
        offset = utils.consumeNumber(source, offset);
        // If the next 3 input code points would start an identifier, then:
        if (charCodeDefinitions.isIdentifierStart(getCharCode(offset), getCharCode(offset + 1), getCharCode(offset + 2))) {
            // Create a <dimension-token> with the same value and type flag as number, and a unit set initially to the empty string.
            // Consume a name. Set the <dimension-token>’s unit to the returned value.
            // Return the <dimension-token>.
            type = types.Dimension;
            offset = utils.consumeName(source, offset);
            return;
        }
        // Otherwise, if the next input code point is U+0025 PERCENTAGE SIGN (%), consume it.
        if (getCharCode(offset) === 0x0025) {
            // Create a <percentage-token> with the same value as number, and return it.
            type = types.Percentage;
            offset++;
            return;
        }
        // Otherwise, create a <number-token> with the same value and type flag as number, and return it.
        type = types.Number;
    }
    // § 4.3.4. Consume an ident-like token
    function consumeIdentLikeToken() {
        const nameStartOffset = offset;
        // Consume a name, and let string be the result.
        offset = utils.consumeName(source, offset);
        // If string’s value is an ASCII case-insensitive match for "url",
        // and the next input code point is U+0028 LEFT PARENTHESIS ((), consume it.
        if (utils.cmpStr(source, nameStartOffset, offset, 'url') && getCharCode(offset) === 0x0028) {
            // While the next two input code points are whitespace, consume the next input code point.
            offset = utils.findWhiteSpaceEnd(source, offset + 1);
            // If the next one or two input code points are U+0022 QUOTATION MARK ("), U+0027 APOSTROPHE ('),
            // or whitespace followed by U+0022 QUOTATION MARK (") or U+0027 APOSTROPHE ('),
            // then create a <function-token> with its value set to string and return it.
            if (getCharCode(offset) === 0x0022 || getCharCode(offset) === 0x0027) {
                type = types.Function;
                offset = nameStartOffset + 4;
                return;
            }
            // Otherwise, consume a url token, and return it.
            consumeUrlToken();
            return;
        }
        // Otherwise, if the next input code point is U+0028 LEFT PARENTHESIS ((), consume it.
        // Create a <function-token> with its value set to string and return it.
        if (getCharCode(offset) === 0x0028) {
            type = types.Function;
            offset++;
            return;
        }
        // Otherwise, create an <ident-token> with its value set to string and return it.
        type = types.Ident;
    }
    // § 4.3.5. Consume a string token
    function consumeStringToken(endingCodePoint) {
        // This algorithm may be called with an ending code point, which denotes the code point
        // that ends the string. If an ending code point is not specified,
        // the current input code point is used.
        if (!endingCodePoint) {
            endingCodePoint = getCharCode(offset++);
        }
        // Initially create a <string-token> with its value set to the empty string.
        type = types.String;
        // Repeatedly consume the next input code point from the stream:
        for(; offset < source.length; offset++){
            const code = source.charCodeAt(offset);
            switch(charCodeDefinitions.charCodeCategory(code)){
                // ending code point
                case endingCodePoint:
                    // Return the <string-token>.
                    offset++;
                    return;
                // EOF
                // case EofCategory:
                // This is a parse error. Return the <string-token>.
                // return;
                // newline
                case charCodeDefinitions.WhiteSpaceCategory:
                    if (charCodeDefinitions.isNewline(code)) {
                        // This is a parse error. Reconsume the current input code point,
                        // create a <bad-string-token>, and return it.
                        offset += utils.getNewlineLength(source, offset, code);
                        type = types.BadString;
                        return;
                    }
                    break;
                // U+005C REVERSE SOLIDUS (\)
                case 0x005C:
                    // If the next input code point is EOF, do nothing.
                    if (offset === source.length - 1) {
                        break;
                    }
                    const nextCode = getCharCode(offset + 1);
                    // Otherwise, if the next input code point is a newline, consume it.
                    if (charCodeDefinitions.isNewline(nextCode)) {
                        offset += utils.getNewlineLength(source, offset + 1, nextCode);
                    } else if (charCodeDefinitions.isValidEscape(code, nextCode)) {
                        // Otherwise, (the stream starts with a valid escape) consume
                        // an escaped code point and append the returned code point to
                        // the <string-token>’s value.
                        offset = utils.consumeEscaped(source, offset) - 1;
                    }
                    break;
            }
        }
    }
    // § 4.3.6. Consume a url token
    // Note: This algorithm assumes that the initial "url(" has already been consumed.
    // This algorithm also assumes that it’s being called to consume an "unquoted" value, like url(foo).
    // A quoted value, like url("foo"), is parsed as a <function-token>. Consume an ident-like token
    // automatically handles this distinction; this algorithm shouldn’t be called directly otherwise.
    function consumeUrlToken() {
        // Initially create a <url-token> with its value set to the empty string.
        type = types.Url;
        // Consume as much whitespace as possible.
        offset = utils.findWhiteSpaceEnd(source, offset);
        // Repeatedly consume the next input code point from the stream:
        for(; offset < source.length; offset++){
            const code = source.charCodeAt(offset);
            switch(charCodeDefinitions.charCodeCategory(code)){
                // U+0029 RIGHT PARENTHESIS ())
                case 0x0029:
                    // Return the <url-token>.
                    offset++;
                    return;
                // EOF
                // case EofCategory:
                // This is a parse error. Return the <url-token>.
                // return;
                // whitespace
                case charCodeDefinitions.WhiteSpaceCategory:
                    // Consume as much whitespace as possible.
                    offset = utils.findWhiteSpaceEnd(source, offset);
                    // If the next input code point is U+0029 RIGHT PARENTHESIS ()) or EOF,
                    // consume it and return the <url-token>
                    // (if EOF was encountered, this is a parse error);
                    if (getCharCode(offset) === 0x0029 || offset >= source.length) {
                        if (offset < source.length) {
                            offset++;
                        }
                        return;
                    }
                    // otherwise, consume the remnants of a bad url, create a <bad-url-token>,
                    // and return it.
                    offset = utils.consumeBadUrlRemnants(source, offset);
                    type = types.BadUrl;
                    return;
                // U+0022 QUOTATION MARK (")
                // U+0027 APOSTROPHE (')
                // U+0028 LEFT PARENTHESIS (()
                // non-printable code point
                case 0x0022:
                case 0x0027:
                case 0x0028:
                case charCodeDefinitions.NonPrintableCategory:
                    // This is a parse error. Consume the remnants of a bad url,
                    // create a <bad-url-token>, and return it.
                    offset = utils.consumeBadUrlRemnants(source, offset);
                    type = types.BadUrl;
                    return;
                // U+005C REVERSE SOLIDUS (\)
                case 0x005C:
                    // If the stream starts with a valid escape, consume an escaped code point and
                    // append the returned code point to the <url-token>’s value.
                    if (charCodeDefinitions.isValidEscape(code, getCharCode(offset + 1))) {
                        offset = utils.consumeEscaped(source, offset) - 1;
                        break;
                    }
                    // Otherwise, this is a parse error. Consume the remnants of a bad url,
                    // create a <bad-url-token>, and return it.
                    offset = utils.consumeBadUrlRemnants(source, offset);
                    type = types.BadUrl;
                    return;
            }
        }
    }
    // ensure source is a string
    source = String(source || '');
    const sourceLength = source.length;
    let start = charCodeDefinitions.isBOM(getCharCode(0));
    let offset = start;
    let type;
    // https://drafts.csswg.org/css-syntax-3/#consume-token
    // § 4.3.1. Consume a token
    while(offset < sourceLength){
        const code = source.charCodeAt(offset);
        switch(charCodeDefinitions.charCodeCategory(code)){
            // whitespace
            case charCodeDefinitions.WhiteSpaceCategory:
                // Consume as much whitespace as possible. Return a <whitespace-token>.
                type = types.WhiteSpace;
                offset = utils.findWhiteSpaceEnd(source, offset + 1);
                break;
            // U+0022 QUOTATION MARK (")
            case 0x0022:
                // Consume a string token and return it.
                consumeStringToken();
                break;
            // U+0023 NUMBER SIGN (#)
            case 0x0023:
                // If the next input code point is a name code point or the next two input code points are a valid escape, then:
                if (charCodeDefinitions.isName(getCharCode(offset + 1)) || charCodeDefinitions.isValidEscape(getCharCode(offset + 1), getCharCode(offset + 2))) {
                    // Create a <hash-token>.
                    type = types.Hash;
                    // If the next 3 input code points would start an identifier, set the <hash-token>’s type flag to "id".
                    // if (isIdentifierStart(getCharCode(offset + 1), getCharCode(offset + 2), getCharCode(offset + 3))) {
                    //     // TODO: set id flag
                    // }
                    // Consume a name, and set the <hash-token>’s value to the returned string.
                    offset = utils.consumeName(source, offset + 1);
                // Return the <hash-token>.
                } else {
                    // Otherwise, return a <delim-token> with its value set to the current input code point.
                    type = types.Delim;
                    offset++;
                }
                break;
            // U+0027 APOSTROPHE (')
            case 0x0027:
                // Consume a string token and return it.
                consumeStringToken();
                break;
            // U+0028 LEFT PARENTHESIS (()
            case 0x0028:
                // Return a <(-token>.
                type = types.LeftParenthesis;
                offset++;
                break;
            // U+0029 RIGHT PARENTHESIS ())
            case 0x0029:
                // Return a <)-token>.
                type = types.RightParenthesis;
                offset++;
                break;
            // U+002B PLUS SIGN (+)
            case 0x002B:
                // If the input stream starts with a number, ...
                if (charCodeDefinitions.isNumberStart(code, getCharCode(offset + 1), getCharCode(offset + 2))) {
                    // ... reconsume the current input code point, consume a numeric token, and return it.
                    consumeNumericToken();
                } else {
                    // Otherwise, return a <delim-token> with its value set to the current input code point.
                    type = types.Delim;
                    offset++;
                }
                break;
            // U+002C COMMA (,)
            case 0x002C:
                // Return a <comma-token>.
                type = types.Comma;
                offset++;
                break;
            // U+002D HYPHEN-MINUS (-)
            case 0x002D:
                // If the input stream starts with a number, reconsume the current input code point, consume a numeric token, and return it.
                if (charCodeDefinitions.isNumberStart(code, getCharCode(offset + 1), getCharCode(offset + 2))) {
                    consumeNumericToken();
                } else {
                    // Otherwise, if the next 2 input code points are U+002D HYPHEN-MINUS U+003E GREATER-THAN SIGN (->), consume them and return a <CDC-token>.
                    if (getCharCode(offset + 1) === 0x002D && getCharCode(offset + 2) === 0x003E) {
                        type = types.CDC;
                        offset = offset + 3;
                    } else {
                        // Otherwise, if the input stream starts with an identifier, ...
                        if (charCodeDefinitions.isIdentifierStart(code, getCharCode(offset + 1), getCharCode(offset + 2))) {
                            // ... reconsume the current input code point, consume an ident-like token, and return it.
                            consumeIdentLikeToken();
                        } else {
                            // Otherwise, return a <delim-token> with its value set to the current input code point.
                            type = types.Delim;
                            offset++;
                        }
                    }
                }
                break;
            // U+002E FULL STOP (.)
            case 0x002E:
                // If the input stream starts with a number, ...
                if (charCodeDefinitions.isNumberStart(code, getCharCode(offset + 1), getCharCode(offset + 2))) {
                    // ... reconsume the current input code point, consume a numeric token, and return it.
                    consumeNumericToken();
                } else {
                    // Otherwise, return a <delim-token> with its value set to the current input code point.
                    type = types.Delim;
                    offset++;
                }
                break;
            // U+002F SOLIDUS (/)
            case 0x002F:
                // If the next two input code point are U+002F SOLIDUS (/) followed by a U+002A ASTERISK (*),
                if (getCharCode(offset + 1) === 0x002A) {
                    // ... consume them and all following code points up to and including the first U+002A ASTERISK (*)
                    // followed by a U+002F SOLIDUS (/), or up to an EOF code point.
                    type = types.Comment;
                    offset = source.indexOf('*/', offset + 2);
                    offset = offset === -1 ? source.length : offset + 2;
                } else {
                    type = types.Delim;
                    offset++;
                }
                break;
            // U+003A COLON (:)
            case 0x003A:
                // Return a <colon-token>.
                type = types.Colon;
                offset++;
                break;
            // U+003B SEMICOLON (;)
            case 0x003B:
                // Return a <semicolon-token>.
                type = types.Semicolon;
                offset++;
                break;
            // U+003C LESS-THAN SIGN (<)
            case 0x003C:
                // If the next 3 input code points are U+0021 EXCLAMATION MARK U+002D HYPHEN-MINUS U+002D HYPHEN-MINUS (!--), ...
                if (getCharCode(offset + 1) === 0x0021 && getCharCode(offset + 2) === 0x002D && getCharCode(offset + 3) === 0x002D) {
                    // ... consume them and return a <CDO-token>.
                    type = types.CDO;
                    offset = offset + 4;
                } else {
                    // Otherwise, return a <delim-token> with its value set to the current input code point.
                    type = types.Delim;
                    offset++;
                }
                break;
            // U+0040 COMMERCIAL AT (@)
            case 0x0040:
                // If the next 3 input code points would start an identifier, ...
                if (charCodeDefinitions.isIdentifierStart(getCharCode(offset + 1), getCharCode(offset + 2), getCharCode(offset + 3))) {
                    // ... consume a name, create an <at-keyword-token> with its value set to the returned value, and return it.
                    type = types.AtKeyword;
                    offset = utils.consumeName(source, offset + 1);
                } else {
                    // Otherwise, return a <delim-token> with its value set to the current input code point.
                    type = types.Delim;
                    offset++;
                }
                break;
            // U+005B LEFT SQUARE BRACKET ([)
            case 0x005B:
                // Return a <[-token>.
                type = types.LeftSquareBracket;
                offset++;
                break;
            // U+005C REVERSE SOLIDUS (\)
            case 0x005C:
                // If the input stream starts with a valid escape, ...
                if (charCodeDefinitions.isValidEscape(code, getCharCode(offset + 1))) {
                    // ... reconsume the current input code point, consume an ident-like token, and return it.
                    consumeIdentLikeToken();
                } else {
                    // Otherwise, this is a parse error. Return a <delim-token> with its value set to the current input code point.
                    type = types.Delim;
                    offset++;
                }
                break;
            // U+005D RIGHT SQUARE BRACKET (])
            case 0x005D:
                // Return a <]-token>.
                type = types.RightSquareBracket;
                offset++;
                break;
            // U+007B LEFT CURLY BRACKET ({)
            case 0x007B:
                // Return a <{-token>.
                type = types.LeftCurlyBracket;
                offset++;
                break;
            // U+007D RIGHT CURLY BRACKET (})
            case 0x007D:
                // Return a <}-token>.
                type = types.RightCurlyBracket;
                offset++;
                break;
            // digit
            case charCodeDefinitions.DigitCategory:
                // Reconsume the current input code point, consume a numeric token, and return it.
                consumeNumericToken();
                break;
            // name-start code point
            case charCodeDefinitions.NameStartCategory:
                // Reconsume the current input code point, consume an ident-like token, and return it.
                consumeIdentLikeToken();
                break;
            // EOF
            // case EofCategory:
            // Return an <EOF-token>.
            // break;
            // anything else
            default:
                // Return a <delim-token> with its value set to the current input code point.
                type = types.Delim;
                offset++;
        }
        // put token to stream
        onToken(type, start, start = offset);
    }
}
exports.AtKeyword = types.AtKeyword;
exports.BadString = types.BadString;
exports.BadUrl = types.BadUrl;
exports.CDC = types.CDC;
exports.CDO = types.CDO;
exports.Colon = types.Colon;
exports.Comma = types.Comma;
exports.Comment = types.Comment;
exports.Delim = types.Delim;
exports.Dimension = types.Dimension;
exports.EOF = types.EOF;
exports.Function = types.Function;
exports.Hash = types.Hash;
exports.Ident = types.Ident;
exports.LeftCurlyBracket = types.LeftCurlyBracket;
exports.LeftParenthesis = types.LeftParenthesis;
exports.LeftSquareBracket = types.LeftSquareBracket;
exports.Number = types.Number;
exports.Percentage = types.Percentage;
exports.RightCurlyBracket = types.RightCurlyBracket;
exports.RightParenthesis = types.RightParenthesis;
exports.RightSquareBracket = types.RightSquareBracket;
exports.Semicolon = types.Semicolon;
exports.String = types.String;
exports.Url = types.Url;
exports.WhiteSpace = types.WhiteSpace;
exports.tokenTypes = types;
exports.DigitCategory = charCodeDefinitions.DigitCategory;
exports.EofCategory = charCodeDefinitions.EofCategory;
exports.NameStartCategory = charCodeDefinitions.NameStartCategory;
exports.NonPrintableCategory = charCodeDefinitions.NonPrintableCategory;
exports.WhiteSpaceCategory = charCodeDefinitions.WhiteSpaceCategory;
exports.charCodeCategory = charCodeDefinitions.charCodeCategory;
exports.isBOM = charCodeDefinitions.isBOM;
exports.isDigit = charCodeDefinitions.isDigit;
exports.isHexDigit = charCodeDefinitions.isHexDigit;
exports.isIdentifierStart = charCodeDefinitions.isIdentifierStart;
exports.isLetter = charCodeDefinitions.isLetter;
exports.isLowercaseLetter = charCodeDefinitions.isLowercaseLetter;
exports.isName = charCodeDefinitions.isName;
exports.isNameStart = charCodeDefinitions.isNameStart;
exports.isNewline = charCodeDefinitions.isNewline;
exports.isNonAscii = charCodeDefinitions.isNonAscii;
exports.isNonPrintable = charCodeDefinitions.isNonPrintable;
exports.isNumberStart = charCodeDefinitions.isNumberStart;
exports.isUppercaseLetter = charCodeDefinitions.isUppercaseLetter;
exports.isValidEscape = charCodeDefinitions.isValidEscape;
exports.isWhiteSpace = charCodeDefinitions.isWhiteSpace;
exports.cmpChar = utils.cmpChar;
exports.cmpStr = utils.cmpStr;
exports.consumeBadUrlRemnants = utils.consumeBadUrlRemnants;
exports.consumeEscaped = utils.consumeEscaped;
exports.consumeName = utils.consumeName;
exports.consumeNumber = utils.consumeNumber;
exports.decodeEscaped = utils.decodeEscaped;
exports.findDecimalNumberEnd = utils.findDecimalNumberEnd;
exports.findWhiteSpaceEnd = utils.findWhiteSpaceEnd;
exports.findWhiteSpaceStart = utils.findWhiteSpaceStart;
exports.getNewlineLength = utils.getNewlineLength;
exports.tokenNames = names;
exports.OffsetToLocation = OffsetToLocation.OffsetToLocation;
exports.TokenStream = TokenStream.TokenStream;
exports.tokenize = tokenize;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/utils/List.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

//
//                              list
//                            ┌──────┐
//             ┌──────────────┼─head │
//             │              │ tail─┼──────────────┐
//             │              └──────┘              │
//             ▼                                    ▼
//            item        item        item        item
//          ┌──────┐    ┌──────┐    ┌──────┐    ┌──────┐
//  null ◀──┼─prev │◀───┼─prev │◀───┼─prev │◀───┼─prev │
//          │ next─┼───▶│ next─┼───▶│ next─┼───▶│ next─┼──▶ null
//          ├──────┤    ├──────┤    ├──────┤    ├──────┤
//          │ data │    │ data │    │ data │    │ data │
//          └──────┘    └──────┘    └──────┘    └──────┘
//
let releasedCursors = null;
class List {
    static createItem(data) {
        return {
            prev: null,
            next: null,
            data
        };
    }
    constructor(){
        this.head = null;
        this.tail = null;
        this.cursor = null;
    }
    createItem(data) {
        return List.createItem(data);
    }
    // cursor helpers
    allocateCursor(prev, next) {
        let cursor;
        if (releasedCursors !== null) {
            cursor = releasedCursors;
            releasedCursors = releasedCursors.cursor;
            cursor.prev = prev;
            cursor.next = next;
            cursor.cursor = this.cursor;
        } else {
            cursor = {
                prev,
                next,
                cursor: this.cursor
            };
        }
        this.cursor = cursor;
        return cursor;
    }
    releaseCursor() {
        const { cursor } = this;
        this.cursor = cursor.cursor;
        cursor.prev = null;
        cursor.next = null;
        cursor.cursor = releasedCursors;
        releasedCursors = cursor;
    }
    updateCursors(prevOld, prevNew, nextOld, nextNew) {
        let { cursor } = this;
        while(cursor !== null){
            if (cursor.prev === prevOld) {
                cursor.prev = prevNew;
            }
            if (cursor.next === nextOld) {
                cursor.next = nextNew;
            }
            cursor = cursor.cursor;
        }
    }
    *[Symbol.iterator]() {
        for(let cursor = this.head; cursor !== null; cursor = cursor.next){
            yield cursor.data;
        }
    }
    // getters
    get size() {
        let size = 0;
        for(let cursor = this.head; cursor !== null; cursor = cursor.next){
            size++;
        }
        return size;
    }
    get isEmpty() {
        return this.head === null;
    }
    get first() {
        return this.head && this.head.data;
    }
    get last() {
        return this.tail && this.tail.data;
    }
    // convertors
    fromArray(array) {
        let cursor = null;
        this.head = null;
        for (let data of array){
            const item = List.createItem(data);
            if (cursor !== null) {
                cursor.next = item;
            } else {
                this.head = item;
            }
            item.prev = cursor;
            cursor = item;
        }
        this.tail = cursor;
        return this;
    }
    toArray() {
        return [
            ...this
        ];
    }
    toJSON() {
        return [
            ...this
        ];
    }
    // array-like methods
    forEach(fn, thisArg = this) {
        // push cursor
        const cursor = this.allocateCursor(null, this.head);
        while(cursor.next !== null){
            const item = cursor.next;
            cursor.next = item.next;
            fn.call(thisArg, item.data, item, this);
        }
        // pop cursor
        this.releaseCursor();
    }
    forEachRight(fn, thisArg = this) {
        // push cursor
        const cursor = this.allocateCursor(this.tail, null);
        while(cursor.prev !== null){
            const item = cursor.prev;
            cursor.prev = item.prev;
            fn.call(thisArg, item.data, item, this);
        }
        // pop cursor
        this.releaseCursor();
    }
    reduce(fn, initialValue, thisArg = this) {
        // push cursor
        let cursor = this.allocateCursor(null, this.head);
        let acc = initialValue;
        let item;
        while(cursor.next !== null){
            item = cursor.next;
            cursor.next = item.next;
            acc = fn.call(thisArg, acc, item.data, item, this);
        }
        // pop cursor
        this.releaseCursor();
        return acc;
    }
    reduceRight(fn, initialValue, thisArg = this) {
        // push cursor
        let cursor = this.allocateCursor(this.tail, null);
        let acc = initialValue;
        let item;
        while(cursor.prev !== null){
            item = cursor.prev;
            cursor.prev = item.prev;
            acc = fn.call(thisArg, acc, item.data, item, this);
        }
        // pop cursor
        this.releaseCursor();
        return acc;
    }
    some(fn, thisArg = this) {
        for(let cursor = this.head; cursor !== null; cursor = cursor.next){
            if (fn.call(thisArg, cursor.data, cursor, this)) {
                return true;
            }
        }
        return false;
    }
    map(fn, thisArg = this) {
        const result = new List();
        for(let cursor = this.head; cursor !== null; cursor = cursor.next){
            result.appendData(fn.call(thisArg, cursor.data, cursor, this));
        }
        return result;
    }
    filter(fn, thisArg = this) {
        const result = new List();
        for(let cursor = this.head; cursor !== null; cursor = cursor.next){
            if (fn.call(thisArg, cursor.data, cursor, this)) {
                result.appendData(cursor.data);
            }
        }
        return result;
    }
    nextUntil(start, fn, thisArg = this) {
        if (start === null) {
            return;
        }
        // push cursor
        const cursor = this.allocateCursor(null, start);
        while(cursor.next !== null){
            const item = cursor.next;
            cursor.next = item.next;
            if (fn.call(thisArg, item.data, item, this)) {
                break;
            }
        }
        // pop cursor
        this.releaseCursor();
    }
    prevUntil(start, fn, thisArg = this) {
        if (start === null) {
            return;
        }
        // push cursor
        const cursor = this.allocateCursor(start, null);
        while(cursor.prev !== null){
            const item = cursor.prev;
            cursor.prev = item.prev;
            if (fn.call(thisArg, item.data, item, this)) {
                break;
            }
        }
        // pop cursor
        this.releaseCursor();
    }
    // mutation
    clear() {
        this.head = null;
        this.tail = null;
    }
    copy() {
        const result = new List();
        for (let data of this){
            result.appendData(data);
        }
        return result;
    }
    prepend(item) {
        //      head
        //    ^
        // item
        this.updateCursors(null, item, this.head, item);
        // insert to the beginning of the list
        if (this.head !== null) {
            // new item <- first item
            this.head.prev = item;
            // new item -> first item
            item.next = this.head;
        } else {
            // if list has no head, then it also has no tail
            // in this case tail points to the new item
            this.tail = item;
        }
        // head always points to new item
        this.head = item;
        return this;
    }
    prependData(data) {
        return this.prepend(List.createItem(data));
    }
    append(item) {
        return this.insert(item);
    }
    appendData(data) {
        return this.insert(List.createItem(data));
    }
    insert(item, before = null) {
        if (before !== null) {
            // prev   before
            //      ^
            //     item
            this.updateCursors(before.prev, item, before, item);
            if (before.prev === null) {
                // insert to the beginning of list
                if (this.head !== before) {
                    throw new Error('before doesn\'t belong to list');
                }
                // since head points to before therefore list doesn't empty
                // no need to check tail
                this.head = item;
                before.prev = item;
                item.next = before;
                this.updateCursors(null, item);
            } else {
                // insert between two items
                before.prev.next = item;
                item.prev = before.prev;
                before.prev = item;
                item.next = before;
            }
        } else {
            // tail
            //      ^
            //      item
            this.updateCursors(this.tail, item, null, item);
            // insert to the ending of the list
            if (this.tail !== null) {
                // last item -> new item
                this.tail.next = item;
                // last item <- new item
                item.prev = this.tail;
            } else {
                // if list has no tail, then it also has no head
                // in this case head points to new item
                this.head = item;
            }
            // tail always points to new item
            this.tail = item;
        }
        return this;
    }
    insertData(data, before) {
        return this.insert(List.createItem(data), before);
    }
    remove(item) {
        //      item
        //       ^
        // prev     next
        this.updateCursors(item, item.prev, item, item.next);
        if (item.prev !== null) {
            item.prev.next = item.next;
        } else {
            if (this.head !== item) {
                throw new Error('item doesn\'t belong to list');
            }
            this.head = item.next;
        }
        if (item.next !== null) {
            item.next.prev = item.prev;
        } else {
            if (this.tail !== item) {
                throw new Error('item doesn\'t belong to list');
            }
            this.tail = item.prev;
        }
        item.prev = null;
        item.next = null;
        return item;
    }
    push(data) {
        this.insert(List.createItem(data));
    }
    pop() {
        return this.tail !== null ? this.remove(this.tail) : null;
    }
    unshift(data) {
        this.prepend(List.createItem(data));
    }
    shift() {
        return this.head !== null ? this.remove(this.head) : null;
    }
    prependList(list) {
        return this.insertList(list, this.head);
    }
    appendList(list) {
        return this.insertList(list);
    }
    insertList(list, before) {
        // ignore empty lists
        if (list.head === null) {
            return this;
        }
        if (before !== undefined && before !== null) {
            this.updateCursors(before.prev, list.tail, before, list.head);
            // insert in the middle of dist list
            if (before.prev !== null) {
                // before.prev <-> list.head
                before.prev.next = list.head;
                list.head.prev = before.prev;
            } else {
                this.head = list.head;
            }
            before.prev = list.tail;
            list.tail.next = before;
        } else {
            this.updateCursors(this.tail, list.tail, null, list.head);
            // insert to end of the list
            if (this.tail !== null) {
                // if destination list has a tail, then it also has a head,
                // but head doesn't change
                // dest tail -> source head
                this.tail.next = list.head;
                // dest tail <- source head
                list.head.prev = this.tail;
            } else {
                // if list has no a tail, then it also has no a head
                // in this case points head to new item
                this.head = list.head;
            }
            // tail always start point to new item
            this.tail = list.tail;
        }
        list.head = null;
        list.tail = null;
        return this;
    }
    replace(oldItem, newItemOrList) {
        if ('head' in newItemOrList) {
            this.insertList(newItemOrList, oldItem);
        } else {
            this.insert(newItemOrList, oldItem);
        }
        this.remove(oldItem);
    }
}
exports.List = List;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/utils/create-custom-error.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function createCustomError(name, message) {
    // use Object.create(), because some VMs prevent setting line/column otherwise
    // (iOS Safari 10 even throws an exception)
    const error = Object.create(SyntaxError.prototype);
    const errorStack = new Error();
    return Object.assign(error, {
        name,
        message,
        get stack () {
            return (errorStack.stack || '').replace(/^(.+\n){1,3}/, `${name}: ${message}\n`);
        }
    });
}
exports.createCustomError = createCustomError;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/parser/SyntaxError.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const createCustomError = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/utils/create-custom-error.cjs [app-ssr] (ecmascript)");
const MAX_LINE_LENGTH = 100;
const OFFSET_CORRECTION = 60;
const TAB_REPLACEMENT = '    ';
function sourceFragment({ source, line, column, baseLine, baseColumn }, extraLines) {
    function processLines(start, end) {
        return lines.slice(start, end).map((line, idx)=>String(start + idx + 1).padStart(maxNumLength) + ' |' + line).join('\n');
    }
    const prelines = '\n'.repeat(Math.max(baseLine - 1, 0));
    const precolumns = ' '.repeat(Math.max(baseColumn - 1, 0));
    const lines = (prelines + precolumns + source).split(/\r\n?|\n|\f/);
    const startLine = Math.max(1, line - extraLines) - 1;
    const endLine = Math.min(line + extraLines, lines.length + 1);
    const maxNumLength = Math.max(4, String(endLine).length) + 1;
    let cutLeft = 0;
    // column correction according to replaced tab before column
    column += (TAB_REPLACEMENT.length - 1) * (lines[line - 1].substr(0, column - 1).match(/\t/g) || []).length;
    if (column > MAX_LINE_LENGTH) {
        cutLeft = column - OFFSET_CORRECTION + 3;
        column = OFFSET_CORRECTION - 2;
    }
    for(let i = startLine; i <= endLine; i++){
        if (i >= 0 && i < lines.length) {
            lines[i] = lines[i].replace(/\t/g, TAB_REPLACEMENT);
            lines[i] = (cutLeft > 0 && lines[i].length > cutLeft ? '\u2026' : '') + lines[i].substr(cutLeft, MAX_LINE_LENGTH - 2) + (lines[i].length > cutLeft + MAX_LINE_LENGTH - 1 ? '\u2026' : '');
        }
    }
    return [
        processLines(startLine, line),
        new Array(column + maxNumLength + 2).join('-') + '^',
        processLines(line, endLine)
    ].filter(Boolean).join('\n').replace(/^(\s+\d+\s+\|\n)+/, '').replace(/\n(\s+\d+\s+\|)+$/, '');
}
function SyntaxError(message, source, offset, line, column, baseLine = 1, baseColumn = 1) {
    const error = Object.assign(createCustomError.createCustomError('SyntaxError', message), {
        source,
        offset,
        line,
        column,
        sourceFragment (extraLines) {
            return sourceFragment({
                source,
                line,
                column,
                baseLine,
                baseColumn
            }, isNaN(extraLines) ? 0 : extraLines);
        },
        get formattedMessage () {
            return `Parse error: ${message}\n` + sourceFragment({
                source,
                line,
                column,
                baseLine,
                baseColumn
            }, 2);
        }
    });
    return error;
}
exports.SyntaxError = SyntaxError;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/parser/sequence.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
function readSequence(recognizer) {
    const children = this.createList();
    let space = false;
    const context = {
        recognizer
    };
    while(!this.eof){
        switch(this.tokenType){
            case types.Comment:
                this.next();
                continue;
            case types.WhiteSpace:
                space = true;
                this.next();
                continue;
        }
        let child = recognizer.getNode.call(this, context);
        if (child === undefined) {
            break;
        }
        if (space) {
            if (recognizer.onWhiteSpace) {
                recognizer.onWhiteSpace.call(this, child, children, context);
            }
            space = false;
        }
        children.push(child);
    }
    if (space && recognizer.onWhiteSpace) {
        recognizer.onWhiteSpace.call(this, null, children, context);
    }
    return children;
}
exports.readSequence = readSequence;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/parser/create.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const List = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/utils/List.cjs [app-ssr] (ecmascript)");
const SyntaxError = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/parser/SyntaxError.cjs [app-ssr] (ecmascript)");
const index = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/index.cjs [app-ssr] (ecmascript)");
const sequence = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/parser/sequence.cjs [app-ssr] (ecmascript)");
const OffsetToLocation = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/OffsetToLocation.cjs [app-ssr] (ecmascript)");
const TokenStream = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/TokenStream.cjs [app-ssr] (ecmascript)");
const utils = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/utils.cjs [app-ssr] (ecmascript)");
const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const names = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/names.cjs [app-ssr] (ecmascript)");
const NOOP = ()=>{};
const EXCLAMATIONMARK = 0x0021; // U+0021 EXCLAMATION MARK (!)
const NUMBERSIGN = 0x0023; // U+0023 NUMBER SIGN (#)
const SEMICOLON = 0x003B; // U+003B SEMICOLON (;)
const LEFTCURLYBRACKET = 0x007B; // U+007B LEFT CURLY BRACKET ({)
const NULL = 0;
const arrayMethods = {
    createList () {
        return [];
    },
    createSingleNodeList (node) {
        return [
            node
        ];
    },
    getFirstListNode (list) {
        return list && list[0] || null;
    },
    getLastListNode (list) {
        return list && list.length > 0 ? list[list.length - 1] : null;
    }
};
const listMethods = {
    createList () {
        return new List.List();
    },
    createSingleNodeList (node) {
        return new List.List().appendData(node);
    },
    getFirstListNode (list) {
        return list && list.first;
    },
    getLastListNode (list) {
        return list && list.last;
    }
};
function createParseContext(name) {
    return function() {
        return this[name]();
    };
}
function fetchParseValues(dict) {
    const result = Object.create(null);
    for (const name of Object.keys(dict)){
        const item = dict[name];
        const fn = item.parse || item;
        if (fn) {
            result[name] = fn;
        }
    }
    return result;
}
function processConfig(config) {
    const parseConfig = {
        context: Object.create(null),
        features: Object.assign(Object.create(null), config.features),
        scope: Object.assign(Object.create(null), config.scope),
        atrule: fetchParseValues(config.atrule),
        pseudo: fetchParseValues(config.pseudo),
        node: fetchParseValues(config.node)
    };
    for (const [name, context] of Object.entries(config.parseContext)){
        switch(typeof context){
            case 'function':
                parseConfig.context[name] = context;
                break;
            case 'string':
                parseConfig.context[name] = createParseContext(context);
                break;
        }
    }
    return {
        config: parseConfig,
        ...parseConfig,
        ...parseConfig.node
    };
}
function createParser(config) {
    let source = '';
    let filename = '<unknown>';
    let needPositions = false;
    let onParseError = NOOP;
    let onParseErrorThrow = false;
    const locationMap = new OffsetToLocation.OffsetToLocation();
    const parser = Object.assign(new TokenStream.TokenStream(), processConfig(config || {}), {
        parseAtrulePrelude: true,
        parseRulePrelude: true,
        parseValue: true,
        parseCustomProperty: false,
        readSequence: sequence.readSequence,
        consumeUntilBalanceEnd: ()=>0,
        consumeUntilLeftCurlyBracket (code) {
            return code === LEFTCURLYBRACKET ? 1 : 0;
        },
        consumeUntilLeftCurlyBracketOrSemicolon (code) {
            return code === LEFTCURLYBRACKET || code === SEMICOLON ? 1 : 0;
        },
        consumeUntilExclamationMarkOrSemicolon (code) {
            return code === EXCLAMATIONMARK || code === SEMICOLON ? 1 : 0;
        },
        consumeUntilSemicolonIncluded (code) {
            return code === SEMICOLON ? 2 : 0;
        },
        createList: NOOP,
        createSingleNodeList: NOOP,
        getFirstListNode: NOOP,
        getLastListNode: NOOP,
        parseWithFallback (consumer, fallback) {
            const startIndex = this.tokenIndex;
            try {
                return consumer.call(this);
            } catch (e) {
                if (onParseErrorThrow) {
                    throw e;
                }
                this.skip(startIndex - this.tokenIndex);
                const fallbackNode = fallback.call(this);
                onParseErrorThrow = true;
                onParseError(e, fallbackNode);
                onParseErrorThrow = false;
                return fallbackNode;
            }
        },
        lookupNonWSType (offset) {
            let type;
            do {
                type = this.lookupType(offset++);
                if (type !== types.WhiteSpace && type !== types.Comment) {
                    return type;
                }
            }while (type !== NULL)
            return NULL;
        },
        charCodeAt (offset) {
            return offset >= 0 && offset < source.length ? source.charCodeAt(offset) : 0;
        },
        substring (offsetStart, offsetEnd) {
            return source.substring(offsetStart, offsetEnd);
        },
        substrToCursor (start) {
            return this.source.substring(start, this.tokenStart);
        },
        cmpChar (offset, charCode) {
            return utils.cmpChar(source, offset, charCode);
        },
        cmpStr (offsetStart, offsetEnd, str) {
            return utils.cmpStr(source, offsetStart, offsetEnd, str);
        },
        consume (tokenType) {
            const start = this.tokenStart;
            this.eat(tokenType);
            return this.substrToCursor(start);
        },
        consumeFunctionName () {
            const name = source.substring(this.tokenStart, this.tokenEnd - 1);
            this.eat(types.Function);
            return name;
        },
        consumeNumber (type) {
            const number = source.substring(this.tokenStart, utils.consumeNumber(source, this.tokenStart));
            this.eat(type);
            return number;
        },
        eat (tokenType) {
            if (this.tokenType !== tokenType) {
                const tokenName = names[tokenType].slice(0, -6).replace(/-/g, ' ').replace(/^./, (m)=>m.toUpperCase());
                let message = `${/[[\](){}]/.test(tokenName) ? `"${tokenName}"` : tokenName} is expected`;
                let offset = this.tokenStart;
                // tweak message and offset
                switch(tokenType){
                    case types.Ident:
                        // when identifier is expected but there is a function or url
                        if (this.tokenType === types.Function || this.tokenType === types.Url) {
                            offset = this.tokenEnd - 1;
                            message = 'Identifier is expected but function found';
                        } else {
                            message = 'Identifier is expected';
                        }
                        break;
                    case types.Hash:
                        if (this.isDelim(NUMBERSIGN)) {
                            this.next();
                            offset++;
                            message = 'Name is expected';
                        }
                        break;
                    case types.Percentage:
                        if (this.tokenType === types.Number) {
                            offset = this.tokenEnd;
                            message = 'Percent sign is expected';
                        }
                        break;
                }
                this.error(message, offset);
            }
            this.next();
        },
        eatIdent (name) {
            if (this.tokenType !== types.Ident || this.lookupValue(0, name) === false) {
                this.error(`Identifier "${name}" is expected`);
            }
            this.next();
        },
        eatDelim (code) {
            if (!this.isDelim(code)) {
                this.error(`Delim "${String.fromCharCode(code)}" is expected`);
            }
            this.next();
        },
        getLocation (start, end) {
            if (needPositions) {
                return locationMap.getLocationRange(start, end, filename);
            }
            return null;
        },
        getLocationFromList (list) {
            if (needPositions) {
                const head = this.getFirstListNode(list);
                const tail = this.getLastListNode(list);
                return locationMap.getLocationRange(head !== null ? head.loc.start.offset - locationMap.startOffset : this.tokenStart, tail !== null ? tail.loc.end.offset - locationMap.startOffset : this.tokenStart, filename);
            }
            return null;
        },
        error (message, offset) {
            const location = typeof offset !== 'undefined' && offset < source.length ? locationMap.getLocation(offset) : this.eof ? locationMap.getLocation(utils.findWhiteSpaceStart(source, source.length - 1)) : locationMap.getLocation(this.tokenStart);
            throw new SyntaxError.SyntaxError(message || 'Unexpected input', source, location.offset, location.line, location.column, locationMap.startLine, locationMap.startColumn);
        }
    });
    const createTokenIterateAPI = ()=>({
            filename,
            source,
            tokenCount: parser.tokenCount,
            getTokenType: (index)=>parser.getTokenType(index),
            getTokenTypeName: (index)=>names[parser.getTokenType(index)],
            getTokenStart: (index)=>parser.getTokenStart(index),
            getTokenEnd: (index)=>parser.getTokenEnd(index),
            getTokenValue: (index)=>parser.source.substring(parser.getTokenStart(index), parser.getTokenEnd(index)),
            substring: (start, end)=>parser.source.substring(start, end),
            balance: parser.balance.subarray(0, parser.tokenCount + 1),
            isBlockOpenerTokenType: parser.isBlockOpenerTokenType,
            isBlockCloserTokenType: parser.isBlockCloserTokenType,
            getBlockTokenPairIndex: (index)=>parser.getBlockTokenPairIndex(index),
            getLocation: (offset)=>locationMap.getLocation(offset, filename),
            getRangeLocation: (start, end)=>locationMap.getLocationRange(start, end, filename)
        });
    const parse = function(source_, options) {
        source = source_;
        options = options || {};
        parser.setSource(source, index.tokenize);
        locationMap.setSource(source, options.offset, options.line, options.column);
        filename = options.filename || '<unknown>';
        needPositions = Boolean(options.positions);
        onParseError = typeof options.onParseError === 'function' ? options.onParseError : NOOP;
        onParseErrorThrow = false;
        parser.parseAtrulePrelude = 'parseAtrulePrelude' in options ? Boolean(options.parseAtrulePrelude) : true;
        parser.parseRulePrelude = 'parseRulePrelude' in options ? Boolean(options.parseRulePrelude) : true;
        parser.parseValue = 'parseValue' in options ? Boolean(options.parseValue) : true;
        parser.parseCustomProperty = 'parseCustomProperty' in options ? Boolean(options.parseCustomProperty) : false;
        const { context = 'default', list = true, onComment, onToken } = options;
        if (context in parser.context === false) {
            throw new Error('Unknown context `' + context + '`');
        }
        Object.assign(parser, list ? listMethods : arrayMethods);
        if (Array.isArray(onToken)) {
            parser.forEachToken((type, start, end)=>{
                onToken.push({
                    type,
                    start,
                    end
                });
            });
        } else if (typeof onToken === 'function') {
            parser.forEachToken(onToken.bind(createTokenIterateAPI()));
        }
        if (typeof onComment === 'function') {
            parser.forEachToken((type, start, end)=>{
                if (type === types.Comment) {
                    const loc = parser.getLocation(start, end);
                    const value = utils.cmpStr(source, end - 2, end, '*/') ? source.slice(start + 2, end - 2) : source.slice(start + 2, end);
                    onComment(value, loc);
                }
            });
        }
        const ast = parser.context[context].call(parser, options);
        if (!parser.eof) {
            parser.error();
        }
        return ast;
    };
    return Object.assign(parse, {
        SyntaxError: SyntaxError.SyntaxError,
        config: parser.config
    });
}
exports.createParser = createParser;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/generator/sourceMap.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const sourceMapGenerator_js = __turbopack_context__.r("[project]/node_modules/.pnpm/source-map-js@1.2.1/node_modules/source-map-js/lib/source-map-generator.js [app-ssr] (ecmascript)");
const trackNodes = new Set([
    'Atrule',
    'Selector',
    'Declaration'
]);
function generateSourceMap(handlers) {
    const map = new sourceMapGenerator_js.SourceMapGenerator();
    const generated = {
        line: 1,
        column: 0
    };
    const original = {
        line: 0,
        column: 0
    };
    const activatedGenerated = {
        line: 1,
        column: 0
    };
    const activatedMapping = {
        generated: activatedGenerated
    };
    let line = 1;
    let column = 0;
    let sourceMappingActive = false;
    const origHandlersNode = handlers.node;
    handlers.node = function(node) {
        if (node.loc && node.loc.start && trackNodes.has(node.type)) {
            const nodeLine = node.loc.start.line;
            const nodeColumn = node.loc.start.column - 1;
            if (original.line !== nodeLine || original.column !== nodeColumn) {
                original.line = nodeLine;
                original.column = nodeColumn;
                generated.line = line;
                generated.column = column;
                if (sourceMappingActive) {
                    sourceMappingActive = false;
                    if (generated.line !== activatedGenerated.line || generated.column !== activatedGenerated.column) {
                        map.addMapping(activatedMapping);
                    }
                }
                sourceMappingActive = true;
                map.addMapping({
                    source: node.loc.source,
                    original,
                    generated
                });
            }
        }
        origHandlersNode.call(this, node);
        if (sourceMappingActive && trackNodes.has(node.type)) {
            activatedGenerated.line = line;
            activatedGenerated.column = column;
        }
    };
    const origHandlersEmit = handlers.emit;
    handlers.emit = function(value, type, auto) {
        for(let i = 0; i < value.length; i++){
            if (value.charCodeAt(i) === 10) {
                line++;
                column = 0;
            } else {
                column++;
            }
        }
        origHandlersEmit(value, type, auto);
    };
    const origHandlersResult = handlers.result;
    handlers.result = function() {
        if (sourceMappingActive) {
            map.addMapping(activatedMapping);
        }
        return {
            css: origHandlersResult(),
            map
        };
    };
    return handlers;
}
exports.generateSourceMap = generateSourceMap;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/generator/token-before.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const PLUSSIGN = 0x002B; // U+002B PLUS SIGN (+)
const HYPHENMINUS = 0x002D; // U+002D HYPHEN-MINUS (-)
// code:
// 0xxxxxxx x0000000 - char code (0x80 for non-ASCII) or delim value
// 00000000 0xxxxxx0 - token type (0 for delim, 1 for token)
// 00000000 0000000x - reserved for carriage emit flag (0 for no space, 1 for space)
const code = (type, value)=>{
    if (type === types.Delim) {
        type = value;
    }
    if (typeof type === 'string') {
        type = Math.min(type.charCodeAt(0), 0x80) << 6; // replace non-ASCII with 0x80
    }
    return type << 1;
};
// https://www.w3.org/TR/css-syntax-3/#serialization
// The only requirement for serialization is that it must "round-trip" with parsing,
// that is, parsing the stylesheet must produce the same data structures as parsing,
// serializing, and parsing again, except for consecutive <whitespace-token>s,
// which may be collapsed into a single token.
const specPairs = [
    [
        types.Ident,
        types.Ident
    ],
    [
        types.Ident,
        types.Function
    ],
    [
        types.Ident,
        types.Url
    ],
    [
        types.Ident,
        types.BadUrl
    ],
    [
        types.Ident,
        '-'
    ],
    [
        types.Ident,
        types.Number
    ],
    [
        types.Ident,
        types.Percentage
    ],
    [
        types.Ident,
        types.Dimension
    ],
    [
        types.Ident,
        types.CDC
    ],
    [
        types.Ident,
        types.LeftParenthesis
    ],
    [
        types.AtKeyword,
        types.Ident
    ],
    [
        types.AtKeyword,
        types.Function
    ],
    [
        types.AtKeyword,
        types.Url
    ],
    [
        types.AtKeyword,
        types.BadUrl
    ],
    [
        types.AtKeyword,
        '-'
    ],
    [
        types.AtKeyword,
        types.Number
    ],
    [
        types.AtKeyword,
        types.Percentage
    ],
    [
        types.AtKeyword,
        types.Dimension
    ],
    [
        types.AtKeyword,
        types.CDC
    ],
    [
        types.Hash,
        types.Ident
    ],
    [
        types.Hash,
        types.Function
    ],
    [
        types.Hash,
        types.Url
    ],
    [
        types.Hash,
        types.BadUrl
    ],
    [
        types.Hash,
        '-'
    ],
    [
        types.Hash,
        types.Number
    ],
    [
        types.Hash,
        types.Percentage
    ],
    [
        types.Hash,
        types.Dimension
    ],
    [
        types.Hash,
        types.CDC
    ],
    [
        types.Dimension,
        types.Ident
    ],
    [
        types.Dimension,
        types.Function
    ],
    [
        types.Dimension,
        types.Url
    ],
    [
        types.Dimension,
        types.BadUrl
    ],
    [
        types.Dimension,
        '-'
    ],
    [
        types.Dimension,
        types.Number
    ],
    [
        types.Dimension,
        types.Percentage
    ],
    [
        types.Dimension,
        types.Dimension
    ],
    [
        types.Dimension,
        types.CDC
    ],
    [
        '#',
        types.Ident
    ],
    [
        '#',
        types.Function
    ],
    [
        '#',
        types.Url
    ],
    [
        '#',
        types.BadUrl
    ],
    [
        '#',
        '-'
    ],
    [
        '#',
        types.Number
    ],
    [
        '#',
        types.Percentage
    ],
    [
        '#',
        types.Dimension
    ],
    [
        '#',
        types.CDC
    ],
    [
        '-',
        types.Ident
    ],
    [
        '-',
        types.Function
    ],
    [
        '-',
        types.Url
    ],
    [
        '-',
        types.BadUrl
    ],
    [
        '-',
        '-'
    ],
    [
        '-',
        types.Number
    ],
    [
        '-',
        types.Percentage
    ],
    [
        '-',
        types.Dimension
    ],
    [
        '-',
        types.CDC
    ],
    [
        types.Number,
        types.Ident
    ],
    [
        types.Number,
        types.Function
    ],
    [
        types.Number,
        types.Url
    ],
    [
        types.Number,
        types.BadUrl
    ],
    [
        types.Number,
        types.Number
    ],
    [
        types.Number,
        types.Percentage
    ],
    [
        types.Number,
        types.Dimension
    ],
    [
        types.Number,
        '%'
    ],
    [
        types.Number,
        types.CDC
    ],
    [
        '@',
        types.Ident
    ],
    [
        '@',
        types.Function
    ],
    [
        '@',
        types.Url
    ],
    [
        '@',
        types.BadUrl
    ],
    [
        '@',
        '-'
    ],
    [
        '@',
        types.CDC
    ],
    [
        '.',
        types.Number
    ],
    [
        '.',
        types.Percentage
    ],
    [
        '.',
        types.Dimension
    ],
    [
        '+',
        types.Number
    ],
    [
        '+',
        types.Percentage
    ],
    [
        '+',
        types.Dimension
    ],
    [
        '/',
        '*'
    ]
];
// validate with scripts/generate-safe
const safePairs = specPairs.concat([
    [
        types.Ident,
        types.Hash
    ],
    [
        types.Dimension,
        types.Hash
    ],
    [
        types.Hash,
        types.Hash
    ],
    [
        types.AtKeyword,
        types.LeftParenthesis
    ],
    [
        types.AtKeyword,
        types.String
    ],
    [
        types.AtKeyword,
        types.Colon
    ],
    [
        types.Percentage,
        types.Percentage
    ],
    [
        types.Percentage,
        types.Dimension
    ],
    [
        types.Percentage,
        types.Function
    ],
    [
        types.Percentage,
        '-'
    ],
    [
        types.RightParenthesis,
        types.Ident
    ],
    [
        types.RightParenthesis,
        types.Function
    ],
    [
        types.RightParenthesis,
        types.Percentage
    ],
    [
        types.RightParenthesis,
        types.Dimension
    ],
    [
        types.RightParenthesis,
        types.Hash
    ],
    [
        types.RightParenthesis,
        '-'
    ]
]);
function createMap(pairs) {
    const isWhiteSpaceRequired = new Set(pairs.map(([prev, next])=>code(prev) << 16 | code(next)));
    return function(prevCode, type, value) {
        const nextCode = code(type, value);
        const nextCharCode = value.charCodeAt(0);
        const emitWs = nextCharCode === HYPHENMINUS && type !== types.Ident && type !== types.Function && type !== types.CDC || nextCharCode === PLUSSIGN ? isWhiteSpaceRequired.has((prevCode & 0xFFFE) << 16 | nextCharCode << 7) : isWhiteSpaceRequired.has((prevCode & 0xFFFE) << 16 | nextCode);
        return nextCode | emitWs;
    };
}
const spec = createMap(specPairs);
const safe = createMap(safePairs);
exports.safe = safe;
exports.spec = spec;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/generator/create.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const index = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/index.cjs [app-ssr] (ecmascript)");
const sourceMap = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/generator/sourceMap.cjs [app-ssr] (ecmascript)");
const tokenBefore = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/generator/token-before.cjs [app-ssr] (ecmascript)");
const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const REVERSESOLIDUS = 0x005c; // U+005C REVERSE SOLIDUS (\)
function processChildren(node, delimeter) {
    if (typeof delimeter === 'function') {
        let prev = null;
        node.children.forEach((node)=>{
            if (prev !== null) {
                delimeter.call(this, prev);
            }
            this.node(node);
            prev = node;
        });
        return;
    }
    node.children.forEach(this.node, this);
}
function createGenerator(config) {
    const types$1 = new Map();
    for (let [name, item] of Object.entries(config.node)){
        const fn = item.generate || item;
        if (typeof fn === 'function') {
            types$1.set(name, item.generate || item);
        }
    }
    return function(node, options) {
        let buffer = '';
        let prevCode = 0;
        let handlers = {
            node (node) {
                if (types$1.has(node.type)) {
                    types$1.get(node.type).call(publicApi, node);
                } else {
                    throw new Error('Unknown node type: ' + node.type);
                }
            },
            tokenBefore: tokenBefore.safe,
            token (type, value, suppressAutoWhiteSpace) {
                prevCode = this.tokenBefore(prevCode, type, value);
                if (!suppressAutoWhiteSpace && prevCode & 1) {
                    this.emit(' ', types.WhiteSpace, true);
                }
                this.emit(value, type, false);
                if (type === types.Delim && value.charCodeAt(0) === REVERSESOLIDUS) {
                    this.emit('\n', types.WhiteSpace, true);
                }
            },
            emit (value) {
                buffer += value;
            },
            result () {
                return buffer;
            }
        };
        if (options) {
            if (typeof options.decorator === 'function') {
                handlers = options.decorator(handlers);
            }
            if (options.sourceMap) {
                handlers = sourceMap.generateSourceMap(handlers);
            }
            if (options.mode in tokenBefore) {
                handlers.tokenBefore = tokenBefore[options.mode];
            }
        }
        const publicApi = {
            node: (node)=>handlers.node(node),
            children: processChildren,
            token: (type, value)=>handlers.token(type, value),
            tokenize: (raw)=>index.tokenize(raw, (type, start, end)=>{
                    handlers.token(type, raw.slice(start, end), start !== 0 // suppress auto whitespace for internal value tokens
                    );
                })
        };
        handlers.node(node);
        return handlers.result();
    };
}
exports.createGenerator = createGenerator;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/convertor/create.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const List = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/utils/List.cjs [app-ssr] (ecmascript)");
function createConvertor(walk) {
    return {
        fromPlainObject (ast) {
            walk(ast, {
                enter (node) {
                    if (node.children && node.children instanceof List.List === false) {
                        node.children = new List.List().fromArray(node.children);
                    }
                }
            });
            return ast;
        },
        toPlainObject (ast) {
            walk(ast, {
                leave (node) {
                    if (node.children && node.children instanceof List.List) {
                        node.children = node.children.toArray();
                    }
                }
            });
            return ast;
        }
    };
}
exports.createConvertor = createConvertor;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/walker/create.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { hasOwnProperty } = Object.prototype;
const noop = function() {};
function ensureFunction(value) {
    return typeof value === 'function' ? value : noop;
}
function invokeForType(fn, type) {
    return function(node, item, list) {
        if (node.type === type) {
            fn.call(this, node, item, list);
        }
    };
}
function getWalkersFromStructure(name, nodeType) {
    const structure = nodeType.structure;
    const walkers = [];
    for(const key in structure){
        if (hasOwnProperty.call(structure, key) === false) {
            continue;
        }
        let fieldTypes = structure[key];
        const walker = {
            name: key,
            type: false,
            nullable: false
        };
        if (!Array.isArray(fieldTypes)) {
            fieldTypes = [
                fieldTypes
            ];
        }
        for (const fieldType of fieldTypes){
            if (fieldType === null) {
                walker.nullable = true;
            } else if (typeof fieldType === 'string') {
                walker.type = 'node';
            } else if (Array.isArray(fieldType)) {
                walker.type = 'list';
            }
        }
        if (walker.type) {
            walkers.push(walker);
        }
    }
    if (walkers.length) {
        return {
            context: nodeType.walkContext,
            fields: walkers
        };
    }
    return null;
}
function getTypesFromConfig(config) {
    const types = {};
    for(const name in config.node){
        if (hasOwnProperty.call(config.node, name)) {
            const nodeType = config.node[name];
            if (!nodeType.structure) {
                throw new Error('Missed `structure` field in `' + name + '` node type definition');
            }
            types[name] = getWalkersFromStructure(name, nodeType);
        }
    }
    return types;
}
function createTypeIterator(config, reverse) {
    const fields = config.fields.slice();
    const contextName = config.context;
    const useContext = typeof contextName === 'string';
    if (reverse) {
        fields.reverse();
    }
    return function(node, context, walk, walkReducer) {
        let prevContextValue;
        if (useContext) {
            prevContextValue = context[contextName];
            context[contextName] = node;
        }
        for (const field of fields){
            const ref = node[field.name];
            if (!field.nullable || ref) {
                if (field.type === 'list') {
                    const breakWalk = reverse ? ref.reduceRight(walkReducer, false) : ref.reduce(walkReducer, false);
                    if (breakWalk) {
                        return true;
                    }
                } else if (walk(ref)) {
                    return true;
                }
            }
        }
        if (useContext) {
            context[contextName] = prevContextValue;
        }
    };
}
function createFastTraveralMap({ StyleSheet, Atrule, Rule, Block, DeclarationList }) {
    return {
        Atrule: {
            StyleSheet,
            Atrule,
            Rule,
            Block
        },
        Rule: {
            StyleSheet,
            Atrule,
            Rule,
            Block
        },
        Declaration: {
            StyleSheet,
            Atrule,
            Rule,
            Block,
            DeclarationList
        }
    };
}
function createWalker(config) {
    const types = getTypesFromConfig(config);
    const iteratorsNatural = {};
    const iteratorsReverse = {};
    const breakWalk = Symbol('break-walk');
    const skipNode = Symbol('skip-node');
    for(const name in types){
        if (hasOwnProperty.call(types, name) && types[name] !== null) {
            iteratorsNatural[name] = createTypeIterator(types[name], false);
            iteratorsReverse[name] = createTypeIterator(types[name], true);
        }
    }
    const fastTraversalIteratorsNatural = createFastTraveralMap(iteratorsNatural);
    const fastTraversalIteratorsReverse = createFastTraveralMap(iteratorsReverse);
    const walk = function(root, options) {
        function walkNode(node, item, list) {
            const enterRet = enter.call(context, node, item, list);
            if (enterRet === breakWalk) {
                return true;
            }
            if (enterRet === skipNode) {
                return false;
            }
            if (iterators.hasOwnProperty(node.type)) {
                if (iterators[node.type](node, context, walkNode, walkReducer)) {
                    return true;
                }
            }
            if (leave.call(context, node, item, list) === breakWalk) {
                return true;
            }
            return false;
        }
        let enter = noop;
        let leave = noop;
        let iterators = iteratorsNatural;
        let walkReducer = (ret, data, item, list)=>ret || walkNode(data, item, list);
        const context = {
            break: breakWalk,
            skip: skipNode,
            root,
            stylesheet: null,
            atrule: null,
            atrulePrelude: null,
            rule: null,
            selector: null,
            block: null,
            declaration: null,
            function: null
        };
        if (typeof options === 'function') {
            enter = options;
        } else if (options) {
            enter = ensureFunction(options.enter);
            leave = ensureFunction(options.leave);
            if (options.reverse) {
                iterators = iteratorsReverse;
            }
            if (options.visit) {
                if (fastTraversalIteratorsNatural.hasOwnProperty(options.visit)) {
                    iterators = options.reverse ? fastTraversalIteratorsReverse[options.visit] : fastTraversalIteratorsNatural[options.visit];
                } else if (!types.hasOwnProperty(options.visit)) {
                    throw new Error('Bad value `' + options.visit + '` for `visit` option (should be: ' + Object.keys(types).sort().join(', ') + ')');
                }
                enter = invokeForType(enter, options.visit);
                leave = invokeForType(leave, options.visit);
            }
        }
        if (enter === noop && leave === noop) {
            throw new Error('Neither `enter` nor `leave` walker handler is set or both aren\'t a function');
        }
        walkNode(root);
    };
    walk.break = breakWalk;
    walk.skip = skipNode;
    walk.find = function(ast, fn) {
        let found = null;
        walk(ast, function(node, item, list) {
            if (fn.call(this, node, item, list)) {
                found = node;
                return breakWalk;
            }
        });
        return found;
    };
    walk.findLast = function(ast, fn) {
        let found = null;
        walk(ast, {
            reverse: true,
            enter (node, item, list) {
                if (fn.call(this, node, item, list)) {
                    found = node;
                    return breakWalk;
                }
            }
        });
        return found;
    };
    walk.findAll = function(ast, fn) {
        const found = [];
        walk(ast, function(node, item, list) {
            if (fn.call(this, node, item, list)) {
                found.push(node);
            }
        });
        return found;
    };
    return walk;
}
exports.createWalker = createWalker;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/definition-syntax/generate.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function noop(value) {
    return value;
}
function generateMultiplier(multiplier) {
    const { min, max, comma } = multiplier;
    if (min === 0 && max === 0) {
        return comma ? '#?' : '*';
    }
    if (min === 0 && max === 1) {
        return '?';
    }
    if (min === 1 && max === 0) {
        return comma ? '#' : '+';
    }
    if (min === 1 && max === 1) {
        return '';
    }
    return (comma ? '#' : '') + (min === max ? '{' + min + '}' : '{' + min + ',' + (max !== 0 ? max : '') + '}');
}
function generateTypeOpts(node) {
    switch(node.type){
        case 'Range':
            return ' [' + (node.min === null ? '-∞' : node.min) + ',' + (node.max === null ? '∞' : node.max) + ']';
        default:
            throw new Error('Unknown node type `' + node.type + '`');
    }
}
function generateSequence(node, decorate, forceBraces, compact) {
    const combinator = node.combinator === ' ' || compact ? node.combinator : ' ' + node.combinator + ' ';
    const result = node.terms.map((term)=>internalGenerate(term, decorate, forceBraces, compact)).join(combinator);
    if (node.explicit || forceBraces) {
        return (compact || result[0] === ',' ? '[' : '[ ') + result + (compact ? ']' : ' ]');
    }
    return result;
}
function internalGenerate(node, decorate, forceBraces, compact) {
    let result;
    switch(node.type){
        case 'Group':
            result = generateSequence(node, decorate, forceBraces, compact) + (node.disallowEmpty ? '!' : '');
            break;
        case 'Multiplier':
            // return since node is a composition
            return internalGenerate(node.term, decorate, forceBraces, compact) + decorate(generateMultiplier(node), node);
        case 'Boolean':
            result = '<boolean-expr[' + internalGenerate(node.term, decorate, forceBraces, compact) + ']>';
            break;
        case 'Type':
            result = '<' + node.name + (node.opts ? decorate(generateTypeOpts(node.opts), node.opts) : '') + '>';
            break;
        case 'Property':
            result = '<\'' + node.name + '\'>';
            break;
        case 'Keyword':
            result = node.name;
            break;
        case 'AtKeyword':
            result = '@' + node.name;
            break;
        case 'Function':
            result = node.name + '(';
            break;
        case 'String':
        case 'Token':
            result = node.value;
            break;
        case 'Comma':
            result = ',';
            break;
        default:
            throw new Error('Unknown node type `' + node.type + '`');
    }
    return decorate(result, node);
}
function generate(node, options) {
    let decorate = noop;
    let forceBraces = false;
    let compact = false;
    if (typeof options === 'function') {
        decorate = options;
    } else if (options) {
        forceBraces = Boolean(options.forceBraces);
        compact = Boolean(options.compact);
        if (typeof options.decorate === 'function') {
            decorate = options.decorate;
        }
    }
    return internalGenerate(node, decorate, forceBraces, compact);
}
exports.generate = generate;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/lexer/error.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const createCustomError = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/utils/create-custom-error.cjs [app-ssr] (ecmascript)");
const generate = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/definition-syntax/generate.cjs [app-ssr] (ecmascript)");
const defaultLoc = {
    offset: 0,
    line: 1,
    column: 1
};
function locateMismatch(matchResult, node) {
    const tokens = matchResult.tokens;
    const longestMatch = matchResult.longestMatch;
    const mismatchNode = longestMatch < tokens.length ? tokens[longestMatch].node || null : null;
    const badNode = mismatchNode !== node ? mismatchNode : null;
    let mismatchOffset = 0;
    let mismatchLength = 0;
    let entries = 0;
    let css = '';
    let start;
    let end;
    for(let i = 0; i < tokens.length; i++){
        const token = tokens[i].value;
        if (i === longestMatch) {
            mismatchLength = token.length;
            mismatchOffset = css.length;
        }
        if (badNode !== null && tokens[i].node === badNode) {
            if (i <= longestMatch) {
                entries++;
            } else {
                entries = 0;
            }
        }
        css += token;
    }
    if (longestMatch === tokens.length || entries > 1) {
        start = fromLoc(badNode || node, 'end') || buildLoc(defaultLoc, css);
        end = buildLoc(start);
    } else {
        start = fromLoc(badNode, 'start') || buildLoc(fromLoc(node, 'start') || defaultLoc, css.slice(0, mismatchOffset));
        end = fromLoc(badNode, 'end') || buildLoc(start, css.substr(mismatchOffset, mismatchLength));
    }
    return {
        css,
        mismatchOffset,
        mismatchLength,
        start,
        end
    };
}
function fromLoc(node, point) {
    const value = node && node.loc && node.loc[point];
    if (value) {
        return 'line' in value ? buildLoc(value) : value;
    }
    return null;
}
function buildLoc({ offset, line, column }, extra) {
    const loc = {
        offset,
        line,
        column
    };
    if (extra) {
        const lines = extra.split(/\n|\r\n?|\f/);
        loc.offset += extra.length;
        loc.line += lines.length - 1;
        loc.column = lines.length === 1 ? loc.column + extra.length : lines.pop().length + 1;
    }
    return loc;
}
const SyntaxReferenceError = function(type, referenceName) {
    const error = createCustomError.createCustomError('SyntaxReferenceError', type + (referenceName ? ' `' + referenceName + '`' : ''));
    error.reference = referenceName;
    return error;
};
const SyntaxMatchError = function(message, syntax, node, matchResult) {
    const error = createCustomError.createCustomError('SyntaxMatchError', message);
    const { css, mismatchOffset, mismatchLength, start, end } = locateMismatch(matchResult, node);
    error.rawMessage = message;
    error.syntax = syntax ? generate.generate(syntax) : '<generic>';
    error.css = css;
    error.mismatchOffset = mismatchOffset;
    error.mismatchLength = mismatchLength;
    error.message = message + '\n' + '  syntax: ' + error.syntax + '\n' + '   value: ' + (css || '<empty string>') + '\n' + '  --------' + new Array(error.mismatchOffset + 1).join('-') + '^';
    Object.assign(error, start);
    error.loc = {
        source: node && node.loc && node.loc.source || '<unknown>',
        start,
        end
    };
    return error;
};
exports.SyntaxMatchError = SyntaxMatchError;
exports.SyntaxReferenceError = SyntaxReferenceError;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/utils/names.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const keywords = new Map();
const properties = new Map();
const HYPHENMINUS = 45; // '-'.charCodeAt()
const keyword = getKeywordDescriptor;
const property = getPropertyDescriptor;
const vendorPrefix = getVendorPrefix;
function isCustomProperty(str, offset) {
    offset = offset || 0;
    return str.length - offset >= 2 && str.charCodeAt(offset) === HYPHENMINUS && str.charCodeAt(offset + 1) === HYPHENMINUS;
}
function getVendorPrefix(str, offset) {
    offset = offset || 0;
    // verdor prefix should be at least 3 chars length
    if (str.length - offset >= 3) {
        // vendor prefix starts with hyper minus following non-hyper minus
        if (str.charCodeAt(offset) === HYPHENMINUS && str.charCodeAt(offset + 1) !== HYPHENMINUS) {
            // vendor prefix should contain a hyper minus at the ending
            const secondDashIndex = str.indexOf('-', offset + 2);
            if (secondDashIndex !== -1) {
                return str.substring(offset, secondDashIndex + 1);
            }
        }
    }
    return '';
}
function getKeywordDescriptor(keyword) {
    if (keywords.has(keyword)) {
        return keywords.get(keyword);
    }
    const name = keyword.toLowerCase();
    let descriptor = keywords.get(name);
    if (descriptor === undefined) {
        const custom = isCustomProperty(name, 0);
        const vendor = !custom ? getVendorPrefix(name, 0) : '';
        descriptor = Object.freeze({
            basename: name.substr(vendor.length),
            name,
            prefix: vendor,
            vendor,
            custom
        });
    }
    keywords.set(keyword, descriptor);
    return descriptor;
}
function getPropertyDescriptor(property) {
    if (properties.has(property)) {
        return properties.get(property);
    }
    let name = property;
    let hack = property[0];
    if (hack === '/') {
        hack = property[1] === '/' ? '//' : '/';
    } else if (hack !== '_' && hack !== '*' && hack !== '$' && hack !== '#' && hack !== '+' && hack !== '&') {
        hack = '';
    }
    const custom = isCustomProperty(name, hack.length);
    // re-use result when possible (the same as for lower case)
    if (!custom) {
        name = name.toLowerCase();
        if (properties.has(name)) {
            const descriptor = properties.get(name);
            properties.set(property, descriptor);
            return descriptor;
        }
    }
    const vendor = !custom ? getVendorPrefix(name, hack.length) : '';
    const prefix = name.substr(0, hack.length + vendor.length);
    const descriptor = Object.freeze({
        basename: name.substr(prefix.length),
        name: name.substr(hack.length),
        hack,
        vendor,
        prefix,
        custom
    });
    properties.set(property, descriptor);
    return descriptor;
}
exports.isCustomProperty = isCustomProperty;
exports.keyword = keyword;
exports.property = property;
exports.vendorPrefix = vendorPrefix;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/lexer/generic-const.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// https://drafts.csswg.org/css-cascade-5/
const cssWideKeywords = [
    'initial',
    'inherit',
    'unset',
    'revert',
    'revert-layer'
];
exports.cssWideKeywords = cssWideKeywords;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/lexer/generic-an-plus-b.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const charCodeDefinitions = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/char-code-definitions.cjs [app-ssr] (ecmascript)");
const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const utils = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/utils.cjs [app-ssr] (ecmascript)");
const PLUSSIGN = 0x002B; // U+002B PLUS SIGN (+)
const HYPHENMINUS = 0x002D; // U+002D HYPHEN-MINUS (-)
const N = 0x006E; // U+006E LATIN SMALL LETTER N (n)
const DISALLOW_SIGN = true;
const ALLOW_SIGN = false;
function isDelim(token, code) {
    return token !== null && token.type === types.Delim && token.value.charCodeAt(0) === code;
}
function skipSC(token, offset, getNextToken) {
    while(token !== null && (token.type === types.WhiteSpace || token.type === types.Comment)){
        token = getNextToken(++offset);
    }
    return offset;
}
function checkInteger(token, valueOffset, disallowSign, offset) {
    if (!token) {
        return 0;
    }
    const code = token.value.charCodeAt(valueOffset);
    if (code === PLUSSIGN || code === HYPHENMINUS) {
        if (disallowSign) {
            // Number sign is not allowed
            return 0;
        }
        valueOffset++;
    }
    for(; valueOffset < token.value.length; valueOffset++){
        if (!charCodeDefinitions.isDigit(token.value.charCodeAt(valueOffset))) {
            // Integer is expected
            return 0;
        }
    }
    return offset + 1;
}
// ... <signed-integer>
// ... ['+' | '-'] <signless-integer>
function consumeB(token, offset_, getNextToken) {
    let sign = false;
    let offset = skipSC(token, offset_, getNextToken);
    token = getNextToken(offset);
    if (token === null) {
        return offset_;
    }
    if (token.type !== types.Number) {
        if (isDelim(token, PLUSSIGN) || isDelim(token, HYPHENMINUS)) {
            sign = true;
            offset = skipSC(getNextToken(++offset), offset, getNextToken);
            token = getNextToken(offset);
            if (token === null || token.type !== types.Number) {
                return 0;
            }
        } else {
            return offset_;
        }
    }
    if (!sign) {
        const code = token.value.charCodeAt(0);
        if (code !== PLUSSIGN && code !== HYPHENMINUS) {
            // Number sign is expected
            return 0;
        }
    }
    return checkInteger(token, sign ? 0 : 1, sign, offset);
}
// An+B microsyntax https://www.w3.org/TR/css-syntax-3/#anb
function anPlusB(token, getNextToken) {
    /* eslint-disable brace-style*/ let offset = 0;
    if (!token) {
        return 0;
    }
    // <integer>
    if (token.type === types.Number) {
        return checkInteger(token, 0, ALLOW_SIGN, offset); // b
    } else if (token.type === types.Ident && token.value.charCodeAt(0) === HYPHENMINUS) {
        // expect 1st char is N
        if (!utils.cmpChar(token.value, 1, N)) {
            return 0;
        }
        switch(token.value.length){
            // -n
            // -n <signed-integer>
            // -n ['+' | '-'] <signless-integer>
            case 2:
                return consumeB(getNextToken(++offset), offset, getNextToken);
            // -n- <signless-integer>
            case 3:
                if (token.value.charCodeAt(2) !== HYPHENMINUS) {
                    return 0;
                }
                offset = skipSC(getNextToken(++offset), offset, getNextToken);
                token = getNextToken(offset);
                return checkInteger(token, 0, DISALLOW_SIGN, offset);
            // <dashndashdigit-ident>
            default:
                if (token.value.charCodeAt(2) !== HYPHENMINUS) {
                    return 0;
                }
                return checkInteger(token, 3, DISALLOW_SIGN, offset);
        }
    } else if (token.type === types.Ident || isDelim(token, PLUSSIGN) && getNextToken(offset + 1).type === types.Ident) {
        // just ignore a plus
        if (token.type !== types.Ident) {
            token = getNextToken(++offset);
        }
        if (token === null || !utils.cmpChar(token.value, 0, N)) {
            return 0;
        }
        switch(token.value.length){
            // '+'? n
            // '+'? n <signed-integer>
            // '+'? n ['+' | '-'] <signless-integer>
            case 1:
                return consumeB(getNextToken(++offset), offset, getNextToken);
            // '+'? n- <signless-integer>
            case 2:
                if (token.value.charCodeAt(1) !== HYPHENMINUS) {
                    return 0;
                }
                offset = skipSC(getNextToken(++offset), offset, getNextToken);
                token = getNextToken(offset);
                return checkInteger(token, 0, DISALLOW_SIGN, offset);
            // '+'? <ndashdigit-ident>
            default:
                if (token.value.charCodeAt(1) !== HYPHENMINUS) {
                    return 0;
                }
                return checkInteger(token, 2, DISALLOW_SIGN, offset);
        }
    } else if (token.type === types.Dimension) {
        let code = token.value.charCodeAt(0);
        let sign = code === PLUSSIGN || code === HYPHENMINUS ? 1 : 0;
        let i = sign;
        for(; i < token.value.length; i++){
            if (!charCodeDefinitions.isDigit(token.value.charCodeAt(i))) {
                break;
            }
        }
        if (i === sign) {
            // Integer is expected
            return 0;
        }
        if (!utils.cmpChar(token.value, i, N)) {
            return 0;
        }
        // <n-dimension>
        // <n-dimension> <signed-integer>
        // <n-dimension> ['+' | '-'] <signless-integer>
        if (i + 1 === token.value.length) {
            return consumeB(getNextToken(++offset), offset, getNextToken);
        } else {
            if (token.value.charCodeAt(i + 1) !== HYPHENMINUS) {
                return 0;
            }
            // <ndash-dimension> <signless-integer>
            if (i + 2 === token.value.length) {
                offset = skipSC(getNextToken(++offset), offset, getNextToken);
                token = getNextToken(offset);
                return checkInteger(token, 0, DISALLOW_SIGN, offset);
            } else {
                return checkInteger(token, i + 2, DISALLOW_SIGN, offset);
            }
        }
    }
    return 0;
}
module.exports = anPlusB;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/lexer/generic-urange.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const charCodeDefinitions = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/char-code-definitions.cjs [app-ssr] (ecmascript)");
const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const utils = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/utils.cjs [app-ssr] (ecmascript)");
const PLUSSIGN = 0x002B; // U+002B PLUS SIGN (+)
const HYPHENMINUS = 0x002D; // U+002D HYPHEN-MINUS (-)
const QUESTIONMARK = 0x003F; // U+003F QUESTION MARK (?)
const U = 0x0075; // U+0075 LATIN SMALL LETTER U (u)
function isDelim(token, code) {
    return token !== null && token.type === types.Delim && token.value.charCodeAt(0) === code;
}
function startsWith(token, code) {
    return token.value.charCodeAt(0) === code;
}
function hexSequence(token, offset, allowDash) {
    let hexlen = 0;
    for(let pos = offset; pos < token.value.length; pos++){
        const code = token.value.charCodeAt(pos);
        if (code === HYPHENMINUS && allowDash && hexlen !== 0) {
            hexSequence(token, offset + hexlen + 1, false);
            return 6; // dissallow following question marks
        }
        if (!charCodeDefinitions.isHexDigit(code)) {
            return 0; // not a hex digit
        }
        if (++hexlen > 6) {
            return 0; // too many hex digits
        }
    }
    return hexlen;
}
function withQuestionMarkSequence(consumed, length, getNextToken) {
    if (!consumed) {
        return 0; // nothing consumed
    }
    while(isDelim(getNextToken(length), QUESTIONMARK)){
        if (++consumed > 6) {
            return 0; // too many question marks
        }
        length++;
    }
    return length;
}
// https://drafts.csswg.org/css-syntax/#urange
// Informally, the <urange> production has three forms:
// U+0001
//      Defines a range consisting of a single code point, in this case the code point "1".
// U+0001-00ff
//      Defines a range of codepoints between the first and the second value, in this case
//      the range between "1" and "ff" (255 in decimal) inclusive.
// U+00??
//      Defines a range of codepoints where the "?" characters range over all hex digits,
//      in this case defining the same as the value U+0000-00ff.
// In each form, a maximum of 6 digits is allowed for each hexadecimal number (if you treat "?" as a hexadecimal digit).
//
// <urange> =
//   u '+' <ident-token> '?'* |
//   u <dimension-token> '?'* |
//   u <number-token> '?'* |
//   u <number-token> <dimension-token> |
//   u <number-token> <number-token> |
//   u '+' '?'+
function urange(token, getNextToken) {
    let length = 0;
    // should start with `u` or `U`
    if (token === null || token.type !== types.Ident || !utils.cmpChar(token.value, 0, U)) {
        return 0;
    }
    token = getNextToken(++length);
    if (token === null) {
        return 0;
    }
    // u '+' <ident-token> '?'*
    // u '+' '?'+
    if (isDelim(token, PLUSSIGN)) {
        token = getNextToken(++length);
        if (token === null) {
            return 0;
        }
        if (token.type === types.Ident) {
            // u '+' <ident-token> '?'*
            return withQuestionMarkSequence(hexSequence(token, 0, true), ++length, getNextToken);
        }
        if (isDelim(token, QUESTIONMARK)) {
            // u '+' '?'+
            return withQuestionMarkSequence(1, ++length, getNextToken);
        }
        // Hex digit or question mark is expected
        return 0;
    }
    // u <number-token> '?'*
    // u <number-token> <dimension-token>
    // u <number-token> <number-token>
    if (token.type === types.Number) {
        const consumedHexLength = hexSequence(token, 1, true);
        if (consumedHexLength === 0) {
            return 0;
        }
        token = getNextToken(++length);
        if (token === null) {
            // u <number-token> <eof>
            return length;
        }
        if (token.type === types.Dimension || token.type === types.Number) {
            // u <number-token> <dimension-token>
            // u <number-token> <number-token>
            if (!startsWith(token, HYPHENMINUS) || !hexSequence(token, 1, false)) {
                return 0;
            }
            return length + 1;
        }
        // u <number-token> '?'*
        return withQuestionMarkSequence(consumedHexLength, length, getNextToken);
    }
    // u <dimension-token> '?'*
    if (token.type === types.Dimension) {
        return withQuestionMarkSequence(hexSequence(token, 1, true), ++length, getNextToken);
    }
    return 0;
}
module.exports = urange;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/lexer/generic.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const genericConst = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/lexer/generic-const.cjs [app-ssr] (ecmascript)");
const genericAnPlusB = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/lexer/generic-an-plus-b.cjs [app-ssr] (ecmascript)");
const genericUrange = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/lexer/generic-urange.cjs [app-ssr] (ecmascript)");
const charCodeDefinitions = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/char-code-definitions.cjs [app-ssr] (ecmascript)");
const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const utils = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/utils.cjs [app-ssr] (ecmascript)");
// CSS mathematical functions categorized by return type behavior
// See: https://www.w3.org/TR/css-values-4/#math
// Calculation functions that return different types depending on input
const calcFunctionNames = [
    'calc(',
    '-moz-calc(',
    '-webkit-calc('
];
// Comparison functions that return different types depending on input
const comparisonFunctionNames = [
    'min(',
    'max(',
    'clamp('
];
// Functions that return a stepped value, i.e. a value that is rounded to the nearest step
const steppedValueFunctionNames = [
    'round(',
    'mod(',
    'rem('
];
// Trigonometrical functions that return a <number>
const trigNumberFunctionNames = [
    'sin(',
    'cos(',
    'tan('
];
// Trigonometrical functions that return a <angle>
const trigAngleFunctionNames = [
    'asin(',
    'acos(',
    'atan(',
    'atan2('
];
// Other functions that return a <number>
const otherNumberFunctionNames = [
    'pow(',
    'sqrt(',
    'log(',
    'exp(',
    'sign('
];
// Exponential functions that return a <number> or <dimension> or <percentage>
const expNumberDimensionPercentageFunctionNames = [
    'hypot('
];
// Return the same type as the input
const signFunctionNames = [
    'abs('
];
const numberFunctionNames = [
    ...calcFunctionNames,
    ...comparisonFunctionNames,
    ...steppedValueFunctionNames,
    ...trigNumberFunctionNames,
    ...otherNumberFunctionNames,
    ...expNumberDimensionPercentageFunctionNames,
    ...signFunctionNames
];
const percentageFunctionNames = [
    ...calcFunctionNames,
    ...comparisonFunctionNames,
    ...steppedValueFunctionNames,
    ...expNumberDimensionPercentageFunctionNames,
    ...signFunctionNames
];
const dimensionFunctionNames = [
    ...calcFunctionNames,
    ...comparisonFunctionNames,
    ...steppedValueFunctionNames,
    ...trigAngleFunctionNames,
    ...expNumberDimensionPercentageFunctionNames,
    ...signFunctionNames
];
const balancePair = new Map([
    [
        types.Function,
        types.RightParenthesis
    ],
    [
        types.LeftParenthesis,
        types.RightParenthesis
    ],
    [
        types.LeftSquareBracket,
        types.RightSquareBracket
    ],
    [
        types.LeftCurlyBracket,
        types.RightCurlyBracket
    ]
]);
// safe char code getter
function charCodeAt(str, index) {
    return index < str.length ? str.charCodeAt(index) : 0;
}
function eqStr(actual, expected) {
    return utils.cmpStr(actual, 0, actual.length, expected);
}
function eqStrAny(actual, expected) {
    for(let i = 0; i < expected.length; i++){
        if (eqStr(actual, expected[i])) {
            return true;
        }
    }
    return false;
}
// IE postfix hack, i.e. 123\0 or 123px\9
function isPostfixIeHack(str, offset) {
    if (offset !== str.length - 2) {
        return false;
    }
    return charCodeAt(str, offset) === 0x005C && // U+005C REVERSE SOLIDUS (\)
    charCodeDefinitions.isDigit(charCodeAt(str, offset + 1));
}
function outOfRange(opts, value, numEnd) {
    if (opts && opts.type === 'Range') {
        const num = Number(numEnd !== undefined && numEnd !== value.length ? value.substr(0, numEnd) : value);
        if (isNaN(num)) {
            return true;
        }
        // FIXME: when opts.min is a string it's a dimension, skip a range validation
        // for now since it requires a type covertation which is not implmented yet
        if (opts.min !== null && num < opts.min && typeof opts.min !== 'string') {
            return true;
        }
        // FIXME: when opts.max is a string it's a dimension, skip a range validation
        // for now since it requires a type covertation which is not implmented yet
        if (opts.max !== null && num > opts.max && typeof opts.max !== 'string') {
            return true;
        }
    }
    return false;
}
function consumeFunction(token, getNextToken) {
    let balanceCloseType = 0;
    let balanceStash = [];
    let length = 0;
    // balanced token consuming
    scan: do {
        switch(token.type){
            case types.RightCurlyBracket:
            case types.RightParenthesis:
            case types.RightSquareBracket:
                if (token.type !== balanceCloseType) {
                    break scan;
                }
                balanceCloseType = balanceStash.pop();
                if (balanceStash.length === 0) {
                    length++;
                    break scan;
                }
                break;
            case types.Function:
            case types.LeftParenthesis:
            case types.LeftSquareBracket:
            case types.LeftCurlyBracket:
                balanceStash.push(balanceCloseType);
                balanceCloseType = balancePair.get(token.type);
                break;
        }
        length++;
    }while (token = getNextToken(length))
    return length;
}
// TODO: implement
// can be used wherever <length>, <frequency>, <angle>, <time>, <percentage>, <number>, or <integer> values are allowed
// https://drafts.csswg.org/css-values/#calc-notation
function math(next, functionNames) {
    return function(token, getNextToken, opts) {
        if (token === null) {
            return 0;
        }
        if (token.type === types.Function && eqStrAny(token.value, functionNames)) {
            return consumeFunction(token, getNextToken);
        }
        return next(token, getNextToken, opts);
    };
}
function tokenType(expectedTokenType) {
    return function(token) {
        if (token === null || token.type !== expectedTokenType) {
            return 0;
        }
        return 1;
    };
}
// =========================
// Complex types
//
// https://drafts.csswg.org/css-values-4/#custom-idents
// 4.2. Author-defined Identifiers: the <custom-ident> type
// Some properties accept arbitrary author-defined identifiers as a component value.
// This generic data type is denoted by <custom-ident>, and represents any valid CSS identifier
// that would not be misinterpreted as a pre-defined keyword in that property’s value definition.
//
// See also: https://developer.mozilla.org/en-US/docs/Web/CSS/custom-ident
function customIdent(token) {
    if (token === null || token.type !== types.Ident) {
        return 0;
    }
    const name = token.value.toLowerCase();
    // The CSS-wide keywords are not valid <custom-ident>s
    if (eqStrAny(name, genericConst.cssWideKeywords)) {
        return 0;
    }
    // The default keyword is reserved and is also not a valid <custom-ident>
    if (eqStr(name, 'default')) {
        return 0;
    }
    // TODO: ignore property specific keywords (as described https://developer.mozilla.org/en-US/docs/Web/CSS/custom-ident)
    // Specifications using <custom-ident> must specify clearly what other keywords
    // are excluded from <custom-ident>, if any—for example by saying that any pre-defined keywords
    // in that property’s value definition are excluded. Excluded keywords are excluded
    // in all ASCII case permutations.
    return 1;
}
// https://drafts.csswg.org/css-values-4/#dashed-idents
// The <dashed-ident> production is a <custom-ident>, with all the case-sensitivity that implies,
// with the additional restriction that it must start with two dashes (U+002D HYPHEN-MINUS).
function dashedIdent(token) {
    if (token === null || token.type !== types.Ident) {
        return 0;
    }
    // ... must start with two dashes (U+002D HYPHEN-MINUS)
    if (charCodeAt(token.value, 0) !== 0x002D || charCodeAt(token.value, 1) !== 0x002D) {
        return 0;
    }
    return 1;
}
// https://drafts.csswg.org/css-variables/#typedef-custom-property-name
// A custom property is any property whose name starts with two dashes (U+002D HYPHEN-MINUS), like --foo.
// The <custom-property-name> production corresponds to this: it’s defined as any <dashed-ident>
// (a valid identifier that starts with two dashes), except -- itself, which is reserved for future use by CSS.
function customPropertyName(token) {
    // ... it’s defined as any <dashed-ident>
    if (!dashedIdent(token)) {
        return 0;
    }
    // ... except -- itself, which is reserved for future use by CSS
    if (token.value === '--') {
        return 0;
    }
    return 1;
}
// https://drafts.csswg.org/css-color-4/#hex-notation
// The syntax of a <hex-color> is a <hash-token> token whose value consists of 3, 4, 6, or 8 hexadecimal digits.
// In other words, a hex color is written as a hash character, "#", followed by some number of digits 0-9 or
// letters a-f (the case of the letters doesn’t matter - #00ff00 is identical to #00FF00).
function hexColor(token) {
    if (token === null || token.type !== types.Hash) {
        return 0;
    }
    const length = token.value.length;
    // valid values (length): #rgb (4), #rgba (5), #rrggbb (7), #rrggbbaa (9)
    if (length !== 4 && length !== 5 && length !== 7 && length !== 9) {
        return 0;
    }
    for(let i = 1; i < length; i++){
        if (!charCodeDefinitions.isHexDigit(charCodeAt(token.value, i))) {
            return 0;
        }
    }
    return 1;
}
function idSelector(token) {
    if (token === null || token.type !== types.Hash) {
        return 0;
    }
    if (!charCodeDefinitions.isIdentifierStart(charCodeAt(token.value, 1), charCodeAt(token.value, 2), charCodeAt(token.value, 3))) {
        return 0;
    }
    return 1;
}
// https://drafts.csswg.org/css-syntax/#any-value
// It represents the entirety of what a valid declaration can have as its value.
function declarationValue(token, getNextToken) {
    if (!token) {
        return 0;
    }
    let balanceCloseType = 0;
    let balanceStash = [];
    let length = 0;
    // The <declaration-value> production matches any sequence of one or more tokens,
    // so long as the sequence does not contain ...
    scan: do {
        switch(token.type){
            // ... <bad-string-token>, <bad-url-token>,
            case types.BadString:
            case types.BadUrl:
                break scan;
            // ... unmatched <)-token>, <]-token>, or <}-token>,
            case types.RightCurlyBracket:
            case types.RightParenthesis:
            case types.RightSquareBracket:
                if (token.type !== balanceCloseType) {
                    break scan;
                }
                balanceCloseType = balanceStash.pop();
                break;
            // ... or top-level <semicolon-token> tokens
            case types.Semicolon:
                if (balanceCloseType === 0) {
                    break scan;
                }
                break;
            // ... or <delim-token> tokens with a value of "!"
            case types.Delim:
                if (balanceCloseType === 0 && token.value === '!') {
                    break scan;
                }
                break;
            case types.Function:
            case types.LeftParenthesis:
            case types.LeftSquareBracket:
            case types.LeftCurlyBracket:
                balanceStash.push(balanceCloseType);
                balanceCloseType = balancePair.get(token.type);
                break;
        }
        length++;
    }while (token = getNextToken(length))
    return length;
}
// https://drafts.csswg.org/css-syntax/#any-value
// The <any-value> production is identical to <declaration-value>, but also
// allows top-level <semicolon-token> tokens and <delim-token> tokens
// with a value of "!". It represents the entirety of what valid CSS can be in any context.
function anyValue(token, getNextToken) {
    if (!token) {
        return 0;
    }
    let balanceCloseType = 0;
    let balanceStash = [];
    let length = 0;
    // The <any-value> production matches any sequence of one or more tokens,
    // so long as the sequence ...
    scan: do {
        switch(token.type){
            // ... does not contain <bad-string-token>, <bad-url-token>,
            case types.BadString:
            case types.BadUrl:
                break scan;
            // ... unmatched <)-token>, <]-token>, or <}-token>,
            case types.RightCurlyBracket:
            case types.RightParenthesis:
            case types.RightSquareBracket:
                if (token.type !== balanceCloseType) {
                    break scan;
                }
                balanceCloseType = balanceStash.pop();
                break;
            case types.Function:
            case types.LeftParenthesis:
            case types.LeftSquareBracket:
            case types.LeftCurlyBracket:
                balanceStash.push(balanceCloseType);
                balanceCloseType = balancePair.get(token.type);
                break;
        }
        length++;
    }while (token = getNextToken(length))
    return length;
}
// =========================
// Dimensions
//
function dimension(type) {
    if (type) {
        type = new Set(type);
    }
    return function(token, getNextToken, opts) {
        if (token === null || token.type !== types.Dimension) {
            return 0;
        }
        const numberEnd = utils.consumeNumber(token.value, 0);
        // check unit
        if (type !== null) {
            // check for IE postfix hack, i.e. 123px\0 or 123px\9
            const reverseSolidusOffset = token.value.indexOf('\\', numberEnd);
            const unit = reverseSolidusOffset === -1 || !isPostfixIeHack(token.value, reverseSolidusOffset) ? token.value.substr(numberEnd) : token.value.substring(numberEnd, reverseSolidusOffset);
            if (type.has(unit.toLowerCase()) === false) {
                return 0;
            }
        }
        // check range if specified
        if (outOfRange(opts, token.value, numberEnd)) {
            return 0;
        }
        return 1;
    };
}
// =========================
// Percentage
//
// §5.5. Percentages: the <percentage> type
// https://drafts.csswg.org/css-values-4/#percentages
function percentage(token, getNextToken, opts) {
    // ... corresponds to the <percentage-token> production
    if (token === null || token.type !== types.Percentage) {
        return 0;
    }
    // check range if specified
    if (outOfRange(opts, token.value, token.value.length - 1)) {
        return 0;
    }
    return 1;
}
// =========================
// Numeric
//
// https://drafts.csswg.org/css-values-4/#numbers
// The value <zero> represents a literal number with the value 0. Expressions that merely
// evaluate to a <number> with the value 0 (for example, calc(0)) do not match <zero>;
// only literal <number-token>s do.
function zero(next) {
    if (typeof next !== 'function') {
        next = function() {
            return 0;
        };
    }
    return function(token, getNextToken, opts) {
        if (token !== null && token.type === types.Number) {
            if (Number(token.value) === 0) {
                return 1;
            }
        }
        return next(token, getNextToken, opts);
    };
}
// § 5.3. Real Numbers: the <number> type
// https://drafts.csswg.org/css-values-4/#numbers
// Number values are denoted by <number>, and represent real numbers, possibly with a fractional component.
// ... It corresponds to the <number-token> production
function number(token, getNextToken, opts) {
    if (token === null) {
        return 0;
    }
    const numberEnd = utils.consumeNumber(token.value, 0);
    const isNumber = numberEnd === token.value.length;
    if (!isNumber && !isPostfixIeHack(token.value, numberEnd)) {
        return 0;
    }
    // check range if specified
    if (outOfRange(opts, token.value, numberEnd)) {
        return 0;
    }
    return 1;
}
// §5.2. Integers: the <integer> type
// https://drafts.csswg.org/css-values-4/#integers
function integer(token, getNextToken, opts) {
    // ... corresponds to a subset of the <number-token> production
    if (token === null || token.type !== types.Number) {
        return 0;
    }
    // The first digit of an integer may be immediately preceded by `-` or `+` to indicate the integer’s sign.
    let i = charCodeAt(token.value, 0) === 0x002B || // U+002B PLUS SIGN (+)
    charCodeAt(token.value, 0) === 0x002D ? 1 : 0; // U+002D HYPHEN-MINUS (-)
    // When written literally, an integer is one or more decimal digits 0 through 9 ...
    for(; i < token.value.length; i++){
        if (!charCodeDefinitions.isDigit(charCodeAt(token.value, i))) {
            return 0;
        }
    }
    // check range if specified
    if (outOfRange(opts, token.value, i)) {
        return 0;
    }
    return 1;
}
// token types
const tokenTypes = {
    'ident-token': tokenType(types.Ident),
    'function-token': tokenType(types.Function),
    'at-keyword-token': tokenType(types.AtKeyword),
    'hash-token': tokenType(types.Hash),
    'string-token': tokenType(types.String),
    'bad-string-token': tokenType(types.BadString),
    'url-token': tokenType(types.Url),
    'bad-url-token': tokenType(types.BadUrl),
    'delim-token': tokenType(types.Delim),
    'number-token': tokenType(types.Number),
    'percentage-token': tokenType(types.Percentage),
    'dimension-token': tokenType(types.Dimension),
    'whitespace-token': tokenType(types.WhiteSpace),
    'CDO-token': tokenType(types.CDO),
    'CDC-token': tokenType(types.CDC),
    'colon-token': tokenType(types.Colon),
    'semicolon-token': tokenType(types.Semicolon),
    'comma-token': tokenType(types.Comma),
    '[-token': tokenType(types.LeftSquareBracket),
    ']-token': tokenType(types.RightSquareBracket),
    '(-token': tokenType(types.LeftParenthesis),
    ')-token': tokenType(types.RightParenthesis),
    '{-token': tokenType(types.LeftCurlyBracket),
    '}-token': tokenType(types.RightCurlyBracket)
};
// token production types
const productionTypes = {
    // token type aliases
    'string': tokenType(types.String),
    'ident': tokenType(types.Ident),
    // percentage
    'percentage': math(percentage, percentageFunctionNames),
    // numeric
    'zero': zero(),
    'number': math(number, numberFunctionNames),
    'integer': math(integer, numberFunctionNames),
    // complex types
    'custom-ident': customIdent,
    'dashed-ident': dashedIdent,
    'custom-property-name': customPropertyName,
    'hex-color': hexColor,
    'id-selector': idSelector,
    'an-plus-b': genericAnPlusB,
    'urange': genericUrange,
    'declaration-value': declarationValue,
    'any-value': anyValue
};
const unitGroups = [
    'length',
    'angle',
    'time',
    'frequency',
    'resolution',
    'flex',
    'decibel',
    'semitones'
];
// dimensions types depend on units set
function createDemensionTypes(units) {
    const { angle, decibel, frequency, flex, length, resolution, semitones, time } = units || {};
    return {
        'dimension': math(dimension(null), dimensionFunctionNames),
        'angle': math(dimension(angle), dimensionFunctionNames),
        'decibel': math(dimension(decibel), dimensionFunctionNames),
        'frequency': math(dimension(frequency), dimensionFunctionNames),
        'flex': math(dimension(flex), dimensionFunctionNames),
        'length': math(zero(dimension(length)), dimensionFunctionNames),
        'resolution': math(dimension(resolution), dimensionFunctionNames),
        'semitones': math(dimension(semitones), dimensionFunctionNames),
        'time': math(dimension(time), dimensionFunctionNames)
    };
}
// The <attr-unit> production matches any identifier that is an ASCII case-insensitive
// match for the name of a CSS dimension unit, such as px, or the <delim-token> %.
function createAttrUnit(units) {
    const unitSet = new Set();
    for (const group of unitGroups){
        if (Array.isArray(units[group])) {
            for (const unit of units[group]){
                unitSet.add(unit.toLowerCase());
            }
        }
    }
    return function attrUnit(token) {
        if (token === null) {
            return 0;
        }
        if (token.type === types.Delim && token.value === '%') {
            return 1;
        }
        if (token.type === types.Ident && unitSet.has(token.value.toLowerCase())) {
            return 1;
        }
        return 0;
    };
}
function createGenericTypes(units) {
    return {
        ...tokenTypes,
        ...productionTypes,
        ...createDemensionTypes(units),
        'attr-unit': createAttrUnit(units)
    };
}
exports.createDemensionTypes = createDemensionTypes;
exports.createGenericTypes = createGenericTypes;
exports.productionTypes = productionTypes;
exports.tokenTypes = tokenTypes;
exports.unitGroups = unitGroups;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/lexer/units.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const length = [
    // absolute length units https://www.w3.org/TR/css-values-3/#lengths
    'cm',
    'mm',
    'q',
    'in',
    'pt',
    'pc',
    'px',
    // font-relative length units https://drafts.csswg.org/css-values-4/#font-relative-lengths
    'em',
    'rem',
    'ex',
    'rex',
    'cap',
    'rcap',
    'ch',
    'rch',
    'ic',
    'ric',
    'lh',
    'rlh',
    // viewport-percentage lengths https://drafts.csswg.org/css-values-4/#viewport-relative-lengths
    'vw',
    'svw',
    'lvw',
    'dvw',
    'vh',
    'svh',
    'lvh',
    'dvh',
    'vi',
    'svi',
    'lvi',
    'dvi',
    'vb',
    'svb',
    'lvb',
    'dvb',
    'vmin',
    'svmin',
    'lvmin',
    'dvmin',
    'vmax',
    'svmax',
    'lvmax',
    'dvmax',
    // container relative lengths https://drafts.csswg.org/css-contain-3/#container-lengths
    'cqw',
    'cqh',
    'cqi',
    'cqb',
    'cqmin',
    'cqmax'
];
const angle = [
    'deg',
    'grad',
    'rad',
    'turn'
]; // https://www.w3.org/TR/css-values-3/#angles
const time = [
    's',
    'ms'
]; // https://www.w3.org/TR/css-values-3/#time
const frequency = [
    'hz',
    'khz'
]; // https://www.w3.org/TR/css-values-3/#frequency
const resolution = [
    'dpi',
    'dpcm',
    'dppx',
    'x'
]; // https://www.w3.org/TR/css-values-3/#resolution
const flex = [
    'fr'
]; // https://drafts.csswg.org/css-grid/#fr-unit
const decibel = [
    'db'
]; // https://www.w3.org/TR/css3-speech/#mixing-props-voice-volume
const semitones = [
    'st'
]; // https://www.w3.org/TR/css3-speech/#voice-props-voice-pitch
exports.angle = angle;
exports.decibel = decibel;
exports.flex = flex;
exports.frequency = frequency;
exports.length = length;
exports.resolution = resolution;
exports.semitones = semitones;
exports.time = time;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/lexer/prepare-tokens.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const index = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/index.cjs [app-ssr] (ecmascript)");
const astToTokens = {
    decorator (handlers) {
        const tokens = [];
        let curNode = null;
        return {
            ...handlers,
            node (node) {
                const tmp = curNode;
                curNode = node;
                handlers.node.call(this, node);
                curNode = tmp;
            },
            emit (value, type, auto) {
                tokens.push({
                    type,
                    value,
                    node: auto ? null : curNode
                });
            },
            result () {
                return tokens;
            }
        };
    }
};
function stringToTokens(str) {
    const tokens = [];
    index.tokenize(str, (type, start, end)=>tokens.push({
            type,
            value: str.slice(start, end),
            node: null
        }));
    return tokens;
}
function prepareTokens(value, syntax) {
    if (typeof value === 'string') {
        return stringToTokens(value);
    }
    return syntax.generate(value, astToTokens);
}
module.exports = prepareTokens;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/definition-syntax/SyntaxError.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const createCustomError = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/utils/create-custom-error.cjs [app-ssr] (ecmascript)");
function SyntaxError(message, input, offset) {
    return Object.assign(createCustomError.createCustomError('SyntaxError', message), {
        input,
        offset,
        rawMessage: message,
        message: message + '\n' + '  ' + input + '\n' + '--' + new Array((offset || input.length) + 1).join('-') + '^'
    });
}
exports.SyntaxError = SyntaxError;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/definition-syntax/scanner.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SyntaxError = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/definition-syntax/SyntaxError.cjs [app-ssr] (ecmascript)");
const TAB = 9;
const N = 10;
const F = 12;
const R = 13;
const SPACE = 32;
const NAME_CHAR = new Uint8Array(128).map((_, idx)=>/[a-zA-Z0-9\-]/.test(String.fromCharCode(idx)) ? 1 : 0);
class Scanner {
    constructor(str){
        this.str = str;
        this.pos = 0;
    }
    charCodeAt(pos) {
        return pos < this.str.length ? this.str.charCodeAt(pos) : 0;
    }
    charCode() {
        return this.charCodeAt(this.pos);
    }
    isNameCharCode(code = this.charCode()) {
        return code < 128 && NAME_CHAR[code] === 1;
    }
    nextCharCode() {
        return this.charCodeAt(this.pos + 1);
    }
    nextNonWsCode(pos) {
        return this.charCodeAt(this.findWsEnd(pos));
    }
    skipWs() {
        this.pos = this.findWsEnd(this.pos);
    }
    findWsEnd(pos) {
        for(; pos < this.str.length; pos++){
            const code = this.str.charCodeAt(pos);
            if (code !== R && code !== N && code !== F && code !== SPACE && code !== TAB) {
                break;
            }
        }
        return pos;
    }
    substringToPos(end) {
        return this.str.substring(this.pos, this.pos = end);
    }
    eat(code) {
        if (this.charCode() !== code) {
            this.error('Expect `' + String.fromCharCode(code) + '`');
        }
        this.pos++;
    }
    peek() {
        return this.pos < this.str.length ? this.str.charAt(this.pos++) : '';
    }
    error(message) {
        throw new SyntaxError.SyntaxError(message, this.str, this.pos);
    }
    scanSpaces() {
        return this.substringToPos(this.findWsEnd(this.pos));
    }
    scanWord() {
        let end = this.pos;
        for(; end < this.str.length; end++){
            const code = this.str.charCodeAt(end);
            if (code >= 128 || NAME_CHAR[code] === 0) {
                break;
            }
        }
        if (this.pos === end) {
            this.error('Expect a keyword');
        }
        return this.substringToPos(end);
    }
    scanNumber() {
        let end = this.pos;
        for(; end < this.str.length; end++){
            const code = this.str.charCodeAt(end);
            if (code < 48 || code > 57) {
                break;
            }
        }
        if (this.pos === end) {
            this.error('Expect a number');
        }
        return this.substringToPos(end);
    }
    scanString() {
        const end = this.str.indexOf('\'', this.pos + 1);
        if (end === -1) {
            this.pos = this.str.length;
            this.error('Expect an apostrophe');
        }
        return this.substringToPos(end + 1);
    }
}
exports.Scanner = Scanner;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/definition-syntax/parse.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const scanner = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/definition-syntax/scanner.cjs [app-ssr] (ecmascript)");
const TAB = 9;
const N = 10;
const F = 12;
const R = 13;
const SPACE = 32;
const EXCLAMATIONMARK = 33; // !
const NUMBERSIGN = 35; // #
const AMPERSAND = 38; // &
const APOSTROPHE = 39; // '
const LEFTPARENTHESIS = 40; // (
const RIGHTPARENTHESIS = 41; // )
const ASTERISK = 42; // *
const PLUSSIGN = 43; // +
const COMMA = 44; // ,
const HYPERMINUS = 45; // -
const LESSTHANSIGN = 60; // <
const GREATERTHANSIGN = 62; // >
const QUESTIONMARK = 63; // ?
const COMMERCIALAT = 64; // @
const LEFTSQUAREBRACKET = 91; // [
const RIGHTSQUAREBRACKET = 93; // ]
const LEFTCURLYBRACKET = 123; // {
const VERTICALLINE = 124; // |
const RIGHTCURLYBRACKET = 125; // }
const INFINITY = 8734; // ∞
const COMBINATOR_PRECEDENCE = {
    ' ': 1,
    '&&': 2,
    '||': 3,
    '|': 4
};
function readMultiplierRange(scanner) {
    let min = null;
    let max = null;
    scanner.eat(LEFTCURLYBRACKET);
    scanner.skipWs();
    min = scanner.scanNumber(scanner);
    scanner.skipWs();
    if (scanner.charCode() === COMMA) {
        scanner.pos++;
        scanner.skipWs();
        if (scanner.charCode() !== RIGHTCURLYBRACKET) {
            max = scanner.scanNumber(scanner);
            scanner.skipWs();
        }
    } else {
        max = min;
    }
    scanner.eat(RIGHTCURLYBRACKET);
    return {
        min: Number(min),
        max: max ? Number(max) : 0
    };
}
function readMultiplier(scanner) {
    let range = null;
    let comma = false;
    switch(scanner.charCode()){
        case ASTERISK:
            scanner.pos++;
            range = {
                min: 0,
                max: 0
            };
            break;
        case PLUSSIGN:
            scanner.pos++;
            range = {
                min: 1,
                max: 0
            };
            break;
        case QUESTIONMARK:
            scanner.pos++;
            range = {
                min: 0,
                max: 1
            };
            break;
        case NUMBERSIGN:
            scanner.pos++;
            comma = true;
            if (scanner.charCode() === LEFTCURLYBRACKET) {
                range = readMultiplierRange(scanner);
            } else if (scanner.charCode() === QUESTIONMARK) {
                // https://www.w3.org/TR/css-values-4/#component-multipliers
                // > the # and ? multipliers may be stacked as #?
                // In this case just treat "#?" as a single multiplier
                // { min: 0, max: 0, comma: true }
                scanner.pos++;
                range = {
                    min: 0,
                    max: 0
                };
            } else {
                range = {
                    min: 1,
                    max: 0
                };
            }
            break;
        case LEFTCURLYBRACKET:
            range = readMultiplierRange(scanner);
            break;
        default:
            return null;
    }
    return {
        type: 'Multiplier',
        comma,
        min: range.min,
        max: range.max,
        term: null
    };
}
function maybeMultiplied(scanner, node) {
    const multiplier = readMultiplier(scanner);
    if (multiplier !== null) {
        multiplier.term = node;
        // https://www.w3.org/TR/css-values-4/#component-multipliers
        // > The + and # multipliers may be stacked as +#;
        // Represent "+#" as nested multipliers:
        // { ...<multiplier #>,
        //   term: {
        //     ...<multipler +>,
        //     term: node
        //   }
        // }
        if (scanner.charCode() === NUMBERSIGN && scanner.charCodeAt(scanner.pos - 1) === PLUSSIGN) {
            return maybeMultiplied(scanner, multiplier);
        }
        // https://www.w3.org/TR/css-values-4/#component-multipliers
        // > the # and ? multipliers, {A} and ? multipliers, and {A,B} and ? multipliers
        // > may be stacked as #?, {A}?, and {A,B}?, respectively
        // Represent "{}?" as nested multipliers as well as "+#".
        // The "#?" case is already handled above, in maybeMultiplied()
        if (scanner.charCode() === QUESTIONMARK && scanner.charCodeAt(scanner.pos - 1) === RIGHTCURLYBRACKET) {
            return maybeMultiplied(scanner, multiplier);
        }
        return multiplier;
    }
    return node;
}
function maybeToken(scanner) {
    const ch = scanner.peek();
    if (ch === '') {
        return null;
    }
    return maybeMultiplied(scanner, {
        type: 'Token',
        value: ch
    });
}
function readProperty(scanner) {
    let name;
    scanner.eat(LESSTHANSIGN);
    scanner.eat(APOSTROPHE);
    name = scanner.scanWord();
    scanner.eat(APOSTROPHE);
    scanner.eat(GREATERTHANSIGN);
    return maybeMultiplied(scanner, {
        type: 'Property',
        name
    });
}
// https://drafts.csswg.org/css-values-3/#numeric-ranges
// 4.1. Range Restrictions and Range Definition Notation
//
// Range restrictions can be annotated in the numeric type notation using CSS bracketed
// range notation—[min,max]—within the angle brackets, after the identifying keyword,
// indicating a closed range between (and including) min and max.
// For example, <integer [0, 10]> indicates an integer between 0 and 10, inclusive.
function readTypeRange(scanner) {
    // use null for Infinity to make AST format JSON serializable/deserializable
    let min = null; // -Infinity
    let max = null; // Infinity
    let sign = 1;
    scanner.eat(LEFTSQUAREBRACKET);
    if (scanner.charCode() === HYPERMINUS) {
        scanner.peek();
        sign = -1;
    }
    if (sign == -1 && scanner.charCode() === INFINITY) {
        scanner.peek();
    } else {
        min = sign * Number(scanner.scanNumber(scanner));
        if (scanner.isNameCharCode()) {
            min += scanner.scanWord();
        }
    }
    scanner.skipWs();
    scanner.eat(COMMA);
    scanner.skipWs();
    if (scanner.charCode() === INFINITY) {
        scanner.peek();
    } else {
        sign = 1;
        if (scanner.charCode() === HYPERMINUS) {
            scanner.peek();
            sign = -1;
        }
        max = sign * Number(scanner.scanNumber(scanner));
        if (scanner.isNameCharCode()) {
            max += scanner.scanWord();
        }
    }
    scanner.eat(RIGHTSQUAREBRACKET);
    return {
        type: 'Range',
        min,
        max
    };
}
function readType(scanner) {
    let name;
    let opts = null;
    scanner.eat(LESSTHANSIGN);
    name = scanner.scanWord();
    // https://drafts.csswg.org/css-values-5/#boolean
    if (name === 'boolean-expr') {
        scanner.eat(LEFTSQUAREBRACKET);
        const implicitGroup = readImplicitGroup(scanner, RIGHTSQUAREBRACKET);
        scanner.eat(RIGHTSQUAREBRACKET);
        scanner.eat(GREATERTHANSIGN);
        return maybeMultiplied(scanner, {
            type: 'Boolean',
            term: implicitGroup.terms.length === 1 ? implicitGroup.terms[0] : implicitGroup
        });
    }
    if (scanner.charCode() === LEFTPARENTHESIS && scanner.nextCharCode() === RIGHTPARENTHESIS) {
        scanner.pos += 2;
        name += '()';
    }
    if (scanner.charCodeAt(scanner.findWsEnd(scanner.pos)) === LEFTSQUAREBRACKET) {
        scanner.skipWs();
        opts = readTypeRange(scanner);
    }
    scanner.eat(GREATERTHANSIGN);
    return maybeMultiplied(scanner, {
        type: 'Type',
        name,
        opts
    });
}
function readKeywordOrFunction(scanner) {
    const name = scanner.scanWord();
    if (scanner.charCode() === LEFTPARENTHESIS) {
        scanner.pos++;
        return {
            type: 'Function',
            name
        };
    }
    return maybeMultiplied(scanner, {
        type: 'Keyword',
        name
    });
}
function regroupTerms(terms, combinators) {
    function createGroup(terms, combinator) {
        return {
            type: 'Group',
            terms,
            combinator,
            disallowEmpty: false,
            explicit: false
        };
    }
    let combinator;
    combinators = Object.keys(combinators).sort((a, b)=>COMBINATOR_PRECEDENCE[a] - COMBINATOR_PRECEDENCE[b]);
    while(combinators.length > 0){
        combinator = combinators.shift();
        let i = 0;
        let subgroupStart = 0;
        for(; i < terms.length; i++){
            const term = terms[i];
            if (term.type === 'Combinator') {
                if (term.value === combinator) {
                    if (subgroupStart === -1) {
                        subgroupStart = i - 1;
                    }
                    terms.splice(i, 1);
                    i--;
                } else {
                    if (subgroupStart !== -1 && i - subgroupStart > 1) {
                        terms.splice(subgroupStart, i - subgroupStart, createGroup(terms.slice(subgroupStart, i), combinator));
                        i = subgroupStart + 1;
                    }
                    subgroupStart = -1;
                }
            }
        }
        if (subgroupStart !== -1 && combinators.length) {
            terms.splice(subgroupStart, i - subgroupStart, createGroup(terms.slice(subgroupStart, i), combinator));
        }
    }
    return combinator;
}
function readImplicitGroup(scanner, stopCharCode = -1) {
    const combinators = Object.create(null);
    const terms = [];
    let prevToken = null;
    let prevTokenPos = scanner.pos;
    let prevTokenIsFunction = false;
    while(scanner.charCode() !== stopCharCode){
        let token = prevTokenIsFunction ? readImplicitGroup(scanner, RIGHTPARENTHESIS) : peek(scanner);
        if (!token) {
            break;
        }
        if (token.type === 'Spaces') {
            continue;
        }
        if (prevTokenIsFunction) {
            if (token.terms.length === 0) {
                prevTokenIsFunction = false;
                continue;
            }
            if (token.combinator === ' ') {
                while(token.terms.length > 1){
                    combinators[' '] = true; // a b
                    terms.push({
                        type: 'Combinator',
                        value: ' '
                    }, token.terms.shift());
                }
                token = token.terms[0];
            }
        }
        if (token.type === 'Combinator') {
            // check for combinator in group beginning and double combinator sequence
            if (prevToken === null || prevToken.type === 'Combinator') {
                scanner.pos = prevTokenPos;
                scanner.error('Unexpected combinator');
            }
            combinators[token.value] = true;
        } else if (prevToken !== null && prevToken.type !== 'Combinator') {
            combinators[' '] = true; // a b
            terms.push({
                type: 'Combinator',
                value: ' '
            });
        }
        terms.push(token);
        prevToken = token;
        prevTokenPos = scanner.pos;
        prevTokenIsFunction = token.type === 'Function';
    }
    // check for combinator in group ending
    if (prevToken !== null && prevToken.type === 'Combinator') {
        scanner.pos -= prevTokenPos;
        scanner.error('Unexpected combinator');
    }
    return {
        type: 'Group',
        terms,
        combinator: regroupTerms(terms, combinators) || ' ',
        disallowEmpty: false,
        explicit: false
    };
}
function readGroup(scanner) {
    let result;
    scanner.eat(LEFTSQUAREBRACKET);
    result = readImplicitGroup(scanner, RIGHTSQUAREBRACKET);
    scanner.eat(RIGHTSQUAREBRACKET);
    result.explicit = true;
    if (scanner.charCode() === EXCLAMATIONMARK) {
        scanner.pos++;
        result.disallowEmpty = true;
    }
    return result;
}
function peek(scanner) {
    let code = scanner.charCode();
    switch(code){
        case RIGHTSQUAREBRACKET:
            break;
        case LEFTSQUAREBRACKET:
            return maybeMultiplied(scanner, readGroup(scanner));
        case LESSTHANSIGN:
            return scanner.nextCharCode() === APOSTROPHE ? readProperty(scanner) : readType(scanner);
        case VERTICALLINE:
            return {
                type: 'Combinator',
                value: scanner.substringToPos(scanner.pos + (scanner.nextCharCode() === VERTICALLINE ? 2 : 1))
            };
        case AMPERSAND:
            scanner.pos++;
            scanner.eat(AMPERSAND);
            return {
                type: 'Combinator',
                value: '&&'
            };
        case COMMA:
            scanner.pos++;
            return {
                type: 'Comma'
            };
        case APOSTROPHE:
            return maybeMultiplied(scanner, {
                type: 'String',
                value: scanner.scanString()
            });
        case SPACE:
        case TAB:
        case N:
        case R:
        case F:
            return {
                type: 'Spaces',
                value: scanner.scanSpaces()
            };
        case COMMERCIALAT:
            code = scanner.nextCharCode();
            if (scanner.isNameCharCode(code)) {
                scanner.pos++;
                return {
                    type: 'AtKeyword',
                    name: scanner.scanWord()
                };
            }
            return maybeToken(scanner);
        case ASTERISK:
        case PLUSSIGN:
        case QUESTIONMARK:
        case NUMBERSIGN:
        case EXCLAMATIONMARK:
            break;
        case LEFTCURLYBRACKET:
            // LEFTCURLYBRACKET is allowed since mdn/data uses it w/o quoting
            // check next char isn't a number, because it's likely a disjoined multiplier
            code = scanner.nextCharCode();
            if (code < 48 || code > 57) {
                return maybeToken(scanner);
            }
            break;
        default:
            if (scanner.isNameCharCode(code)) {
                return readKeywordOrFunction(scanner);
            }
            return maybeToken(scanner);
    }
}
function parse(source) {
    const scanner$1 = new scanner.Scanner(source);
    const result = readImplicitGroup(scanner$1);
    if (scanner$1.pos !== source.length) {
        scanner$1.error('Unexpected input');
    }
    // reduce redundant groups with single group term
    if (result.terms.length === 1 && result.terms[0].type === 'Group') {
        return result.terms[0];
    }
    return result;
}
exports.parse = parse;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/lexer/match-graph.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parse = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/definition-syntax/parse.cjs [app-ssr] (ecmascript)");
const MATCH = {
    type: 'Match'
};
const MISMATCH = {
    type: 'Mismatch'
};
const DISALLOW_EMPTY = {
    type: 'DisallowEmpty'
};
const LEFTPARENTHESIS = 40; // (
const RIGHTPARENTHESIS = 41; // )
function createCondition(match, thenBranch, elseBranch) {
    // reduce node count
    if (thenBranch === MATCH && elseBranch === MISMATCH) {
        return match;
    }
    if (match === MATCH && thenBranch === MATCH && elseBranch === MATCH) {
        return match;
    }
    if (match.type === 'If' && match.else === MISMATCH && thenBranch === MATCH) {
        thenBranch = match.then;
        match = match.match;
    }
    return {
        type: 'If',
        match,
        then: thenBranch,
        else: elseBranch
    };
}
function isFunctionType(name) {
    return name.length > 2 && name.charCodeAt(name.length - 2) === LEFTPARENTHESIS && name.charCodeAt(name.length - 1) === RIGHTPARENTHESIS;
}
function isEnumCapatible(term) {
    return term.type === 'Keyword' || term.type === 'AtKeyword' || term.type === 'Function' || term.type === 'Type' && isFunctionType(term.name);
}
function groupNode(terms, combinator = ' ', explicit = false) {
    return {
        type: 'Group',
        terms,
        combinator,
        disallowEmpty: false,
        explicit
    };
}
function replaceTypeInGraph(node, replacements, visited = new Set()) {
    if (!visited.has(node)) {
        visited.add(node);
        switch(node.type){
            case 'If':
                node.match = replaceTypeInGraph(node.match, replacements, visited);
                node.then = replaceTypeInGraph(node.then, replacements, visited);
                node.else = replaceTypeInGraph(node.else, replacements, visited);
                break;
            case 'Type':
                return replacements[node.name] || node;
        }
    }
    return node;
}
function buildGroupMatchGraph(combinator, terms, atLeastOneTermMatched) {
    switch(combinator){
        case ' ':
            {
                // Juxtaposing components means that all of them must occur, in the given order.
                //
                // a b c
                // =
                // match a
                //   then match b
                //     then match c
                //       then MATCH
                //       else MISMATCH
                //     else MISMATCH
                //   else MISMATCH
                let result = MATCH;
                for(let i = terms.length - 1; i >= 0; i--){
                    const term = terms[i];
                    result = createCondition(term, result, MISMATCH);
                }
                return result;
            }
        case '|':
            {
                // A bar (|) separates two or more alternatives: exactly one of them must occur.
                //
                // a | b | c
                // =
                // match a
                //   then MATCH
                //   else match b
                //     then MATCH
                //     else match c
                //       then MATCH
                //       else MISMATCH
                let result = MISMATCH;
                let map = null;
                for(let i = terms.length - 1; i >= 0; i--){
                    let term = terms[i];
                    // reduce sequence of keywords into a Enum
                    if (isEnumCapatible(term)) {
                        if (map === null && i > 0 && isEnumCapatible(terms[i - 1])) {
                            map = Object.create(null);
                            result = createCondition({
                                type: 'Enum',
                                map
                            }, MATCH, result);
                        }
                        if (map !== null) {
                            const key = (isFunctionType(term.name) ? term.name.slice(0, -1) : term.name).toLowerCase();
                            if (key in map === false) {
                                map[key] = term;
                                continue;
                            }
                        }
                    }
                    map = null;
                    // create a new conditonal node
                    result = createCondition(term, MATCH, result);
                }
                return result;
            }
        case '&&':
            {
                // A double ampersand (&&) separates two or more components,
                // all of which must occur, in any order.
                // Use MatchOnce for groups with a large number of terms,
                // since &&-groups produces at least N!-node trees
                if (terms.length > 5) {
                    return {
                        type: 'MatchOnce',
                        terms,
                        all: true
                    };
                }
                // Use a combination tree for groups with small number of terms
                //
                // a && b && c
                // =
                // match a
                //   then [b && c]
                //   else match b
                //     then [a && c]
                //     else match c
                //       then [a && b]
                //       else MISMATCH
                //
                // a && b
                // =
                // match a
                //   then match b
                //     then MATCH
                //     else MISMATCH
                //   else match b
                //     then match a
                //       then MATCH
                //       else MISMATCH
                //     else MISMATCH
                let result = MISMATCH;
                for(let i = terms.length - 1; i >= 0; i--){
                    const term = terms[i];
                    let thenClause;
                    if (terms.length > 1) {
                        thenClause = buildGroupMatchGraph(combinator, terms.filter(function(newGroupTerm) {
                            return newGroupTerm !== term;
                        }), false);
                    } else {
                        thenClause = MATCH;
                    }
                    result = createCondition(term, thenClause, result);
                }
                return result;
            }
        case '||':
            {
                // A double bar (||) separates two or more options:
                // one or more of them must occur, in any order.
                // Use MatchOnce for groups with a large number of terms,
                // since ||-groups produces at least N!-node trees
                if (terms.length > 5) {
                    return {
                        type: 'MatchOnce',
                        terms,
                        all: false
                    };
                }
                // Use a combination tree for groups with small number of terms
                //
                // a || b || c
                // =
                // match a
                //   then [b || c]
                //   else match b
                //     then [a || c]
                //     else match c
                //       then [a || b]
                //       else MISMATCH
                //
                // a || b
                // =
                // match a
                //   then match b
                //     then MATCH
                //     else MATCH
                //   else match b
                //     then match a
                //       then MATCH
                //       else MATCH
                //     else MISMATCH
                let result = atLeastOneTermMatched ? MATCH : MISMATCH;
                for(let i = terms.length - 1; i >= 0; i--){
                    const term = terms[i];
                    let thenClause;
                    if (terms.length > 1) {
                        thenClause = buildGroupMatchGraph(combinator, terms.filter(function(newGroupTerm) {
                            return newGroupTerm !== term;
                        }), true);
                    } else {
                        thenClause = MATCH;
                    }
                    result = createCondition(term, thenClause, result);
                }
                return result;
            }
    }
}
function buildMultiplierMatchGraph(node) {
    let result = MATCH;
    let matchTerm = buildMatchGraphInternal(node.term);
    if (node.max === 0) {
        // disable repeating of empty match to prevent infinite loop
        matchTerm = createCondition(matchTerm, DISALLOW_EMPTY, MISMATCH);
        // an occurrence count is not limited, make a cycle;
        // to collect more terms on each following matching mismatch
        result = createCondition(matchTerm, null, MISMATCH);
        result.then = createCondition(MATCH, MATCH, result // make a loop
        );
        if (node.comma) {
            result.then.else = createCondition({
                type: 'Comma',
                syntax: node
            }, result, MISMATCH);
        }
    } else {
        // create a match node chain for [min .. max] interval with optional matches
        for(let i = node.min || 1; i <= node.max; i++){
            if (node.comma && result !== MATCH) {
                result = createCondition({
                    type: 'Comma',
                    syntax: node
                }, result, MISMATCH);
            }
            result = createCondition(matchTerm, createCondition(MATCH, MATCH, result), MISMATCH);
        }
    }
    if (node.min === 0) {
        // allow zero match
        result = createCondition(MATCH, MATCH, result);
    } else {
        // create a match node chain to collect [0 ... min - 1] required matches
        for(let i = 0; i < node.min - 1; i++){
            if (node.comma && result !== MATCH) {
                result = createCondition({
                    type: 'Comma',
                    syntax: node
                }, result, MISMATCH);
            }
            result = createCondition(matchTerm, result, MISMATCH);
        }
    }
    return result;
}
function buildMatchGraphInternal(node) {
    if (typeof node === 'function') {
        return {
            type: 'Generic',
            fn: node
        };
    }
    switch(node.type){
        case 'Group':
            {
                let result = buildGroupMatchGraph(node.combinator, node.terms.map(buildMatchGraphInternal), false);
                if (node.disallowEmpty) {
                    result = createCondition(result, DISALLOW_EMPTY, MISMATCH);
                }
                return result;
            }
        case 'Multiplier':
            return buildMultiplierMatchGraph(node);
        // https://drafts.csswg.org/css-values-5/#boolean
        case 'Boolean':
            {
                const term = buildMatchGraphInternal(node.term);
                // <boolean-expr[ <test> ]> = not <boolean-expr-group> | <boolean-expr-group> [ [ and <boolean-expr-group> ]* | [ or <boolean-expr-group> ]* ]
                const matchNode = buildMatchGraphInternal(groupNode([
                    groupNode([
                        {
                            type: 'Keyword',
                            name: 'not'
                        },
                        {
                            type: 'Type',
                            name: '!boolean-group'
                        }
                    ]),
                    groupNode([
                        {
                            type: 'Type',
                            name: '!boolean-group'
                        },
                        groupNode([
                            {
                                type: 'Multiplier',
                                comma: false,
                                min: 0,
                                max: 0,
                                term: groupNode([
                                    {
                                        type: 'Keyword',
                                        name: 'and'
                                    },
                                    {
                                        type: 'Type',
                                        name: '!boolean-group'
                                    }
                                ])
                            },
                            {
                                type: 'Multiplier',
                                comma: false,
                                min: 0,
                                max: 0,
                                term: groupNode([
                                    {
                                        type: 'Keyword',
                                        name: 'or'
                                    },
                                    {
                                        type: 'Type',
                                        name: '!boolean-group'
                                    }
                                ])
                            }
                        ], '|')
                    ])
                ], '|'));
                // <boolean-expr-group> = <test> | ( <boolean-expr[ <test> ]> ) | <general-enclosed>
                const booleanGroup = buildMatchGraphInternal(groupNode([
                    {
                        type: 'Type',
                        name: '!term'
                    },
                    groupNode([
                        {
                            type: 'Token',
                            value: '('
                        },
                        {
                            type: 'Type',
                            name: '!self'
                        },
                        {
                            type: 'Token',
                            value: ')'
                        }
                    ]),
                    {
                        type: 'Type',
                        name: 'general-enclosed'
                    }
                ], '|'));
                replaceTypeInGraph(booleanGroup, {
                    '!term': term,
                    '!self': matchNode
                });
                replaceTypeInGraph(matchNode, {
                    '!boolean-group': booleanGroup
                });
                return matchNode;
            }
        case 'Type':
        case 'Property':
            return {
                type: node.type,
                name: node.name,
                syntax: node
            };
        case 'Keyword':
            return {
                type: node.type,
                name: node.name.toLowerCase(),
                syntax: node
            };
        case 'AtKeyword':
            return {
                type: node.type,
                name: '@' + node.name.toLowerCase(),
                syntax: node
            };
        case 'Function':
            return {
                type: node.type,
                name: node.name.toLowerCase() + '(',
                syntax: node
            };
        case 'String':
            // convert a one char length String to a Token
            if (node.value.length === 3) {
                return {
                    type: 'Token',
                    value: node.value.charAt(1),
                    syntax: node
                };
            }
            // otherwise use it as is
            return {
                type: node.type,
                value: node.value.substr(1, node.value.length - 2).replace(/\\'/g, '\''),
                syntax: node
            };
        case 'Token':
            return {
                type: node.type,
                value: node.value,
                syntax: node
            };
        case 'Comma':
            return {
                type: node.type,
                syntax: node
            };
        default:
            throw new Error('Unknown node type:', node.type);
    }
}
function buildMatchGraph(syntaxTree, ref) {
    if (typeof syntaxTree === 'string') {
        syntaxTree = parse.parse(syntaxTree);
    }
    return {
        type: 'MatchGraph',
        match: buildMatchGraphInternal(syntaxTree),
        syntax: ref || null,
        source: syntaxTree
    };
}
exports.DISALLOW_EMPTY = DISALLOW_EMPTY;
exports.MATCH = MATCH;
exports.MISMATCH = MISMATCH;
exports.buildMatchGraph = buildMatchGraph;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/lexer/match.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const matchGraph = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/lexer/match-graph.cjs [app-ssr] (ecmascript)");
const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const { hasOwnProperty } = Object.prototype;
const STUB = 0;
const TOKEN = 1;
const OPEN_SYNTAX = 2;
const CLOSE_SYNTAX = 3;
const EXIT_REASON_MATCH = 'Match';
const EXIT_REASON_MISMATCH = 'Mismatch';
const EXIT_REASON_ITERATION_LIMIT = 'Maximum iteration number exceeded (please fill an issue on https://github.com/csstree/csstree/issues)';
const ITERATION_LIMIT = 15000;
function reverseList(list) {
    let prev = null;
    let next = null;
    let item = list;
    while(item !== null){
        next = item.prev;
        item.prev = prev;
        prev = item;
        item = next;
    }
    return prev;
}
function areStringsEqualCaseInsensitive(testStr, referenceStr) {
    if (testStr.length !== referenceStr.length) {
        return false;
    }
    for(let i = 0; i < testStr.length; i++){
        const referenceCode = referenceStr.charCodeAt(i);
        let testCode = testStr.charCodeAt(i);
        // testCode.toLowerCase() for U+0041 LATIN CAPITAL LETTER A (A) .. U+005A LATIN CAPITAL LETTER Z (Z).
        if (testCode >= 0x0041 && testCode <= 0x005A) {
            testCode = testCode | 32;
        }
        if (testCode !== referenceCode) {
            return false;
        }
    }
    return true;
}
function isContextEdgeDelim(token) {
    if (token.type !== types.Delim) {
        return false;
    }
    // Fix matching for unicode-range: U+30??, U+FF00-FF9F
    // Probably we need to check out previous match instead
    return token.value !== '?';
}
function isCommaContextStart(token) {
    if (token === null) {
        return true;
    }
    return token.type === types.Comma || token.type === types.Function || token.type === types.LeftParenthesis || token.type === types.LeftSquareBracket || token.type === types.LeftCurlyBracket || isContextEdgeDelim(token);
}
function isCommaContextEnd(token) {
    if (token === null) {
        return true;
    }
    return token.type === types.RightParenthesis || token.type === types.RightSquareBracket || token.type === types.RightCurlyBracket || token.type === types.Delim && token.value === '/';
}
function internalMatch(tokens, state, syntaxes) {
    function moveToNextToken() {
        do {
            tokenIndex++;
            token = tokenIndex < tokens.length ? tokens[tokenIndex] : null;
        }while (token !== null && (token.type === types.WhiteSpace || token.type === types.Comment))
    }
    function getNextToken(offset) {
        const nextIndex = tokenIndex + offset;
        return nextIndex < tokens.length ? tokens[nextIndex] : null;
    }
    function stateSnapshotFromSyntax(nextState, prev) {
        return {
            nextState,
            matchStack,
            syntaxStack,
            thenStack,
            tokenIndex,
            prev
        };
    }
    function pushThenStack(nextState) {
        thenStack = {
            nextState,
            matchStack,
            syntaxStack,
            prev: thenStack
        };
    }
    function pushElseStack(nextState) {
        elseStack = stateSnapshotFromSyntax(nextState, elseStack);
    }
    function addTokenToMatch() {
        matchStack = {
            type: TOKEN,
            syntax: state.syntax,
            token,
            prev: matchStack
        };
        moveToNextToken();
        syntaxStash = null;
        if (tokenIndex > longestMatch) {
            longestMatch = tokenIndex;
        }
    }
    function openSyntax() {
        syntaxStack = {
            syntax: state.syntax,
            opts: state.syntax.opts || syntaxStack !== null && syntaxStack.opts || null,
            prev: syntaxStack
        };
        matchStack = {
            type: OPEN_SYNTAX,
            syntax: state.syntax,
            token: matchStack.token,
            prev: matchStack
        };
    }
    function closeSyntax() {
        if (matchStack.type === OPEN_SYNTAX) {
            matchStack = matchStack.prev;
        } else {
            matchStack = {
                type: CLOSE_SYNTAX,
                syntax: syntaxStack.syntax,
                token: matchStack.token,
                prev: matchStack
            };
        }
        syntaxStack = syntaxStack.prev;
    }
    let syntaxStack = null;
    let thenStack = null;
    let elseStack = null;
    // null – stashing allowed, nothing stashed
    // false – stashing disabled, nothing stashed
    // anithing else – fail stashable syntaxes, some syntax stashed
    let syntaxStash = null;
    let iterationCount = 0; // count iterations and prevent infinite loop
    let exitReason = null;
    let token = null;
    let tokenIndex = -1;
    let longestMatch = 0;
    let matchStack = {
        type: STUB,
        syntax: null,
        token: null,
        prev: null
    };
    moveToNextToken();
    while(exitReason === null && ++iterationCount < ITERATION_LIMIT){
        // function mapList(list, fn) {
        //     const result = [];
        //     while (list) {
        //         result.unshift(fn(list));
        //         list = list.prev;
        //     }
        //     return result;
        // }
        // console.log('--\n',
        //     '#' + iterationCount,
        //     require('util').inspect({
        //         match: mapList(matchStack, x => x.type === TOKEN ? x.token && x.token.value : x.syntax ? ({ [OPEN_SYNTAX]: '<', [CLOSE_SYNTAX]: '</' }[x.type] || x.type) + '!' + x.syntax.name : null),
        //         token: token && token.value,
        //         tokenIndex,
        //         syntax: syntax.type + (syntax.id ? ' #' + syntax.id : '')
        //     }, { depth: null })
        // );
        switch(state.type){
            case 'Match':
                if (thenStack === null) {
                    // turn to MISMATCH when some tokens left unmatched
                    if (token !== null) {
                        // doesn't mismatch if just one token left and it's an IE hack
                        if (tokenIndex !== tokens.length - 1 || token.value !== '\\0' && token.value !== '\\9') {
                            state = matchGraph.MISMATCH;
                            break;
                        }
                    }
                    // break the main loop, return a result - MATCH
                    exitReason = EXIT_REASON_MATCH;
                    break;
                }
                // go to next syntax (`then` branch)
                state = thenStack.nextState;
                // check match is not empty
                if (state === matchGraph.DISALLOW_EMPTY) {
                    if (thenStack.matchStack === matchStack) {
                        state = matchGraph.MISMATCH;
                        break;
                    } else {
                        state = matchGraph.MATCH;
                    }
                }
                // close syntax if needed
                while(thenStack.syntaxStack !== syntaxStack){
                    closeSyntax();
                }
                // pop stack
                thenStack = thenStack.prev;
                break;
            case 'Mismatch':
                // when some syntax is stashed
                if (syntaxStash !== null && syntaxStash !== false) {
                    // there is no else branches or a branch reduce match stack
                    if (elseStack === null || tokenIndex > elseStack.tokenIndex) {
                        // restore state from the stash
                        elseStack = syntaxStash;
                        syntaxStash = false; // disable stashing
                    }
                } else if (elseStack === null) {
                    // no else branches -> break the main loop
                    // return a result - MISMATCH
                    exitReason = EXIT_REASON_MISMATCH;
                    break;
                }
                // go to next syntax (`else` branch)
                state = elseStack.nextState;
                // restore all the rest stack states
                thenStack = elseStack.thenStack;
                syntaxStack = elseStack.syntaxStack;
                matchStack = elseStack.matchStack;
                tokenIndex = elseStack.tokenIndex;
                token = tokenIndex < tokens.length ? tokens[tokenIndex] : null;
                // pop stack
                elseStack = elseStack.prev;
                break;
            case 'MatchGraph':
                state = state.match;
                break;
            case 'If':
                // IMPORTANT: else stack push must go first,
                // since it stores the state of thenStack before changes
                if (state.else !== matchGraph.MISMATCH) {
                    pushElseStack(state.else);
                }
                if (state.then !== matchGraph.MATCH) {
                    pushThenStack(state.then);
                }
                state = state.match;
                break;
            case 'MatchOnce':
                state = {
                    type: 'MatchOnceBuffer',
                    syntax: state,
                    index: 0,
                    mask: 0
                };
                break;
            case 'MatchOnceBuffer':
                {
                    const terms = state.syntax.terms;
                    if (state.index === terms.length) {
                        // no matches at all or it's required all terms to be matched
                        if (state.mask === 0 || state.syntax.all) {
                            state = matchGraph.MISMATCH;
                            break;
                        }
                        // a partial match is ok
                        state = matchGraph.MATCH;
                        break;
                    }
                    // all terms are matched
                    if (state.mask === (1 << terms.length) - 1) {
                        state = matchGraph.MATCH;
                        break;
                    }
                    for(; state.index < terms.length; state.index++){
                        const matchFlag = 1 << state.index;
                        if ((state.mask & matchFlag) === 0) {
                            // IMPORTANT: else stack push must go first,
                            // since it stores the state of thenStack before changes
                            pushElseStack(state);
                            pushThenStack({
                                type: 'AddMatchOnce',
                                syntax: state.syntax,
                                mask: state.mask | matchFlag
                            });
                            // match
                            state = terms[state.index++];
                            break;
                        }
                    }
                    break;
                }
            case 'AddMatchOnce':
                state = {
                    type: 'MatchOnceBuffer',
                    syntax: state.syntax,
                    index: 0,
                    mask: state.mask
                };
                break;
            case 'Enum':
                if (token !== null) {
                    let name = token.value.toLowerCase();
                    // drop \0 and \9 hack from keyword name
                    if (name.indexOf('\\') !== -1) {
                        name = name.replace(/\\[09].*$/, '');
                    }
                    if (hasOwnProperty.call(state.map, name)) {
                        state = state.map[name];
                        break;
                    }
                }
                state = matchGraph.MISMATCH;
                break;
            case 'Generic':
                {
                    const opts = syntaxStack !== null ? syntaxStack.opts : null;
                    const lastTokenIndex = tokenIndex + Math.floor(state.fn(token, getNextToken, opts));
                    if (!isNaN(lastTokenIndex) && lastTokenIndex > tokenIndex) {
                        while(tokenIndex < lastTokenIndex){
                            addTokenToMatch();
                        }
                        state = matchGraph.MATCH;
                    } else {
                        state = matchGraph.MISMATCH;
                    }
                    break;
                }
            case 'Type':
            case 'Property':
                {
                    const syntaxDict = state.type === 'Type' ? 'types' : 'properties';
                    const dictSyntax = hasOwnProperty.call(syntaxes, syntaxDict) ? syntaxes[syntaxDict][state.name] : null;
                    if (!dictSyntax || !dictSyntax.match) {
                        throw new Error('Bad syntax reference: ' + (state.type === 'Type' ? '<' + state.name + '>' : '<\'' + state.name + '\'>'));
                    }
                    // stash a syntax for types with low priority
                    if (syntaxStash !== false && token !== null && state.type === 'Type') {
                        const lowPriorityMatching = // https://drafts.csswg.org/css-values-4/#custom-idents
                        // When parsing positionally-ambiguous keywords in a property value, a <custom-ident> production
                        // can only claim the keyword if no other unfulfilled production can claim it.
                        state.name === 'custom-ident' && token.type === types.Ident || state.name === 'length' && token.value === '0';
                        if (lowPriorityMatching) {
                            if (syntaxStash === null) {
                                syntaxStash = stateSnapshotFromSyntax(state, elseStack);
                            }
                            state = matchGraph.MISMATCH;
                            break;
                        }
                    }
                    openSyntax();
                    state = dictSyntax.matchRef || dictSyntax.match;
                    break;
                }
            case 'Keyword':
                {
                    const name = state.name;
                    if (token !== null) {
                        let keywordName = token.value;
                        // drop \0 and \9 hack from keyword name
                        if (keywordName.indexOf('\\') !== -1) {
                            keywordName = keywordName.replace(/\\[09].*$/, '');
                        }
                        if (areStringsEqualCaseInsensitive(keywordName, name)) {
                            addTokenToMatch();
                            state = matchGraph.MATCH;
                            break;
                        }
                    }
                    state = matchGraph.MISMATCH;
                    break;
                }
            case 'AtKeyword':
            case 'Function':
                if (token !== null && areStringsEqualCaseInsensitive(token.value, state.name)) {
                    addTokenToMatch();
                    state = matchGraph.MATCH;
                    break;
                }
                state = matchGraph.MISMATCH;
                break;
            case 'Token':
                if (token !== null && token.value === state.value) {
                    addTokenToMatch();
                    state = matchGraph.MATCH;
                    break;
                }
                state = matchGraph.MISMATCH;
                break;
            case 'Comma':
                if (token !== null && token.type === types.Comma) {
                    if (isCommaContextStart(matchStack.token)) {
                        state = matchGraph.MISMATCH;
                    } else {
                        addTokenToMatch();
                        state = isCommaContextEnd(token) ? matchGraph.MISMATCH : matchGraph.MATCH;
                    }
                } else {
                    state = isCommaContextStart(matchStack.token) || isCommaContextEnd(token) ? matchGraph.MATCH : matchGraph.MISMATCH;
                }
                break;
            case 'String':
                let string = '';
                let lastTokenIndex = tokenIndex;
                for(; lastTokenIndex < tokens.length && string.length < state.value.length; lastTokenIndex++){
                    string += tokens[lastTokenIndex].value;
                }
                if (areStringsEqualCaseInsensitive(string, state.value)) {
                    while(tokenIndex < lastTokenIndex){
                        addTokenToMatch();
                    }
                    state = matchGraph.MATCH;
                } else {
                    state = matchGraph.MISMATCH;
                }
                break;
            default:
                throw new Error('Unknown node type: ' + state.type);
        }
    }
    switch(exitReason){
        case null:
            console.warn('[csstree-match] BREAK after ' + ITERATION_LIMIT + ' iterations');
            exitReason = EXIT_REASON_ITERATION_LIMIT;
            matchStack = null;
            break;
        case EXIT_REASON_MATCH:
            while(syntaxStack !== null){
                closeSyntax();
            }
            break;
        default:
            matchStack = null;
    }
    return {
        tokens,
        reason: exitReason,
        iterations: iterationCount,
        match: matchStack,
        longestMatch
    };
}
function matchAsList(tokens, matchGraph, syntaxes) {
    const matchResult = internalMatch(tokens, matchGraph, syntaxes || {});
    if (matchResult.match !== null) {
        let item = reverseList(matchResult.match).prev;
        matchResult.match = [];
        while(item !== null){
            switch(item.type){
                case OPEN_SYNTAX:
                case CLOSE_SYNTAX:
                    matchResult.match.push({
                        type: item.type,
                        syntax: item.syntax
                    });
                    break;
                default:
                    matchResult.match.push({
                        token: item.token.value,
                        node: item.token.node
                    });
                    break;
            }
            item = item.prev;
        }
    }
    return matchResult;
}
function matchAsTree(tokens, matchGraph, syntaxes) {
    const matchResult = internalMatch(tokens, matchGraph, syntaxes || {});
    if (matchResult.match === null) {
        return matchResult;
    }
    let item = matchResult.match;
    let host = matchResult.match = {
        syntax: matchGraph.syntax || null,
        match: []
    };
    const hostStack = [
        host
    ];
    // revert a list and start with 2nd item since 1st is a stub item
    item = reverseList(item).prev;
    // build a tree
    while(item !== null){
        switch(item.type){
            case OPEN_SYNTAX:
                host.match.push(host = {
                    syntax: item.syntax,
                    match: []
                });
                hostStack.push(host);
                break;
            case CLOSE_SYNTAX:
                hostStack.pop();
                host = hostStack[hostStack.length - 1];
                break;
            default:
                host.match.push({
                    syntax: item.syntax || null,
                    token: item.token.value,
                    node: item.token.node
                });
        }
        item = item.prev;
    }
    return matchResult;
}
exports.matchAsList = matchAsList;
exports.matchAsTree = matchAsTree;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/lexer/trace.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function getTrace(node) {
    function shouldPutToTrace(syntax) {
        if (syntax === null) {
            return false;
        }
        return syntax.type === 'Type' || syntax.type === 'Property' || syntax.type === 'Keyword';
    }
    function hasMatch(matchNode) {
        if (Array.isArray(matchNode.match)) {
            // use for-loop for better perfomance
            for(let i = 0; i < matchNode.match.length; i++){
                if (hasMatch(matchNode.match[i])) {
                    if (shouldPutToTrace(matchNode.syntax)) {
                        result.unshift(matchNode.syntax);
                    }
                    return true;
                }
            }
        } else if (matchNode.node === node) {
            result = shouldPutToTrace(matchNode.syntax) ? [
                matchNode.syntax
            ] : [];
            return true;
        }
        return false;
    }
    let result = null;
    if (this.matched !== null) {
        hasMatch(this.matched);
    }
    return result;
}
function isType(node, type) {
    return testNode(this, node, (match)=>match.type === 'Type' && match.name === type);
}
function isProperty(node, property) {
    return testNode(this, node, (match)=>match.type === 'Property' && match.name === property);
}
function isKeyword(node) {
    return testNode(this, node, (match)=>match.type === 'Keyword');
}
function testNode(match, node, fn) {
    const trace = getTrace.call(match, node);
    if (trace === null) {
        return false;
    }
    return trace.some(fn);
}
exports.getTrace = getTrace;
exports.isKeyword = isKeyword;
exports.isProperty = isProperty;
exports.isType = isType;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/lexer/search.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const List = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/utils/List.cjs [app-ssr] (ecmascript)");
function getFirstMatchNode(matchNode) {
    if ('node' in matchNode) {
        return matchNode.node;
    }
    return getFirstMatchNode(matchNode.match[0]);
}
function getLastMatchNode(matchNode) {
    if ('node' in matchNode) {
        return matchNode.node;
    }
    return getLastMatchNode(matchNode.match[matchNode.match.length - 1]);
}
function matchFragments(lexer, ast, match, type, name) {
    function findFragments(matchNode) {
        if (matchNode.syntax !== null && matchNode.syntax.type === type && matchNode.syntax.name === name) {
            const start = getFirstMatchNode(matchNode);
            const end = getLastMatchNode(matchNode);
            lexer.syntax.walk(ast, function(node, item, list) {
                if (node === start) {
                    const nodes = new List.List();
                    do {
                        nodes.appendData(item.data);
                        if (item.data === end) {
                            break;
                        }
                        item = item.next;
                    }while (item !== null)
                    fragments.push({
                        parent: list,
                        nodes
                    });
                }
            });
        }
        if (Array.isArray(matchNode.match)) {
            matchNode.match.forEach(findFragments);
        }
    }
    const fragments = [];
    if (match.matched !== null) {
        findFragments(match.matched);
    }
    return fragments;
}
exports.matchFragments = matchFragments;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/lexer/structure.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const List = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/utils/List.cjs [app-ssr] (ecmascript)");
const { hasOwnProperty } = Object.prototype;
function isValidNumber(value) {
    // Number.isInteger(value) && value >= 0
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value && value >= 0;
}
function isValidLocation(loc) {
    return Boolean(loc) && isValidNumber(loc.offset) && isValidNumber(loc.line) && isValidNumber(loc.column);
}
function createNodeStructureChecker(type, fields) {
    return function checkNode(node, warn) {
        if (!node || node.constructor !== Object) {
            return warn(node, 'Type of node should be an Object');
        }
        for(let key in node){
            let valid = true;
            if (hasOwnProperty.call(node, key) === false) {
                continue;
            }
            if (key === 'type') {
                if (node.type !== type) {
                    warn(node, 'Wrong node type `' + node.type + '`, expected `' + type + '`');
                }
            } else if (key === 'loc') {
                if (node.loc === null) {
                    continue;
                } else if (node.loc && node.loc.constructor === Object) {
                    if (typeof node.loc.source !== 'string') {
                        key += '.source';
                    } else if (!isValidLocation(node.loc.start)) {
                        key += '.start';
                    } else if (!isValidLocation(node.loc.end)) {
                        key += '.end';
                    } else {
                        continue;
                    }
                }
                valid = false;
            } else if (fields.hasOwnProperty(key)) {
                valid = false;
                for(let i = 0; !valid && i < fields[key].length; i++){
                    const fieldType = fields[key][i];
                    switch(fieldType){
                        case String:
                            valid = typeof node[key] === 'string';
                            break;
                        case Boolean:
                            valid = typeof node[key] === 'boolean';
                            break;
                        case null:
                            valid = node[key] === null;
                            break;
                        default:
                            if (typeof fieldType === 'string') {
                                valid = node[key] && node[key].type === fieldType;
                            } else if (Array.isArray(fieldType)) {
                                valid = node[key] instanceof List.List;
                            }
                    }
                }
            } else {
                warn(node, 'Unknown field `' + key + '` for ' + type + ' node type');
            }
            if (!valid) {
                warn(node, 'Bad value for `' + type + '.' + key + '`');
            }
        }
        for(const key in fields){
            if (hasOwnProperty.call(fields, key) && hasOwnProperty.call(node, key) === false) {
                warn(node, 'Field `' + type + '.' + key + '` is missed');
            }
        }
    };
}
function genTypesList(fieldTypes, path) {
    const docsTypes = [];
    for(let i = 0; i < fieldTypes.length; i++){
        const fieldType = fieldTypes[i];
        if (fieldType === String || fieldType === Boolean) {
            docsTypes.push(fieldType.name.toLowerCase());
        } else if (fieldType === null) {
            docsTypes.push('null');
        } else if (typeof fieldType === 'string') {
            docsTypes.push(fieldType);
        } else if (Array.isArray(fieldType)) {
            docsTypes.push('List<' + (genTypesList(fieldType, path) || 'any') + '>'); // TODO: use type enum
        } else {
            throw new Error('Wrong value `' + fieldType + '` in `' + path + '` structure definition');
        }
    }
    return docsTypes.join(' | ');
}
function processStructure(name, nodeType) {
    const structure = nodeType.structure;
    const fields = {
        type: String,
        loc: true
    };
    const docs = {
        type: '"' + name + '"'
    };
    for(const key in structure){
        if (hasOwnProperty.call(structure, key) === false) {
            continue;
        }
        const fieldTypes = fields[key] = Array.isArray(structure[key]) ? structure[key].slice() : [
            structure[key]
        ];
        docs[key] = genTypesList(fieldTypes, name + '.' + key);
    }
    return {
        docs,
        check: createNodeStructureChecker(name, fields)
    };
}
function getStructureFromConfig(config) {
    const structure = {};
    if (config.node) {
        for(const name in config.node){
            if (hasOwnProperty.call(config.node, name)) {
                const nodeType = config.node[name];
                if (nodeType.structure) {
                    structure[name] = processStructure(name, nodeType);
                } else {
                    throw new Error('Missed `structure` field in `' + name + '` node type definition');
                }
            }
        }
    }
    return structure;
}
exports.getStructureFromConfig = getStructureFromConfig;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/definition-syntax/walk.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const noop = function() {};
function ensureFunction(value) {
    return typeof value === 'function' ? value : noop;
}
function walk(node, options, context) {
    function walk(node) {
        enter.call(context, node);
        switch(node.type){
            case 'Group':
                node.terms.forEach(walk);
                break;
            case 'Multiplier':
            case 'Boolean':
                walk(node.term);
                break;
            case 'Type':
            case 'Property':
            case 'Keyword':
            case 'AtKeyword':
            case 'Function':
            case 'String':
            case 'Token':
            case 'Comma':
                break;
            default:
                throw new Error('Unknown type: ' + node.type);
        }
        leave.call(context, node);
    }
    let enter = noop;
    let leave = noop;
    if (typeof options === 'function') {
        enter = options;
    } else if (options) {
        enter = ensureFunction(options.enter);
        leave = ensureFunction(options.leave);
    }
    if (enter === noop && leave === noop) {
        throw new Error('Neither `enter` nor `leave` walker handler is set or both aren\'t a function');
    }
    walk(node);
}
exports.walk = walk;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/lexer/Lexer.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const error = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/lexer/error.cjs [app-ssr] (ecmascript)");
const names = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/utils/names.cjs [app-ssr] (ecmascript)");
const genericConst = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/lexer/generic-const.cjs [app-ssr] (ecmascript)");
const generic = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/lexer/generic.cjs [app-ssr] (ecmascript)");
const units = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/lexer/units.cjs [app-ssr] (ecmascript)");
const prepareTokens = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/lexer/prepare-tokens.cjs [app-ssr] (ecmascript)");
const matchGraph = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/lexer/match-graph.cjs [app-ssr] (ecmascript)");
const match = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/lexer/match.cjs [app-ssr] (ecmascript)");
const trace = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/lexer/trace.cjs [app-ssr] (ecmascript)");
const search = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/lexer/search.cjs [app-ssr] (ecmascript)");
const structure = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/lexer/structure.cjs [app-ssr] (ecmascript)");
const parse = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/definition-syntax/parse.cjs [app-ssr] (ecmascript)");
const generate = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/definition-syntax/generate.cjs [app-ssr] (ecmascript)");
const walk = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/definition-syntax/walk.cjs [app-ssr] (ecmascript)");
function dumpMapSyntax(map, compact, syntaxAsAst) {
    const result = {};
    for(const name in map){
        if (map[name].syntax) {
            result[name] = syntaxAsAst ? map[name].syntax : generate.generate(map[name].syntax, {
                compact
            });
        }
    }
    return result;
}
function dumpAtruleMapSyntax(map, compact, syntaxAsAst) {
    const result = {};
    for (const [name, atrule] of Object.entries(map)){
        result[name] = {
            prelude: atrule.prelude && (syntaxAsAst ? atrule.prelude.syntax : generate.generate(atrule.prelude.syntax, {
                compact
            })),
            descriptors: atrule.descriptors && dumpMapSyntax(atrule.descriptors, compact, syntaxAsAst)
        };
    }
    return result;
}
function valueHasVar(tokens) {
    for(let i = 0; i < tokens.length; i++){
        if (tokens[i].value.toLowerCase() === 'var(') {
            return true;
        }
    }
    return false;
}
function syntaxHasTopLevelCommaMultiplier(syntax) {
    const singleTerm = syntax.terms[0];
    return syntax.explicit === false && syntax.terms.length === 1 && singleTerm.type === 'Multiplier' && singleTerm.comma === true;
}
function buildMatchResult(matched, error, iterations) {
    return {
        matched,
        iterations,
        error,
        ...trace
    };
}
function matchSyntax(lexer, syntax, value, useCssWideKeywords) {
    const tokens = prepareTokens(value, lexer.syntax);
    let result;
    if (valueHasVar(tokens)) {
        return buildMatchResult(null, new Error('Matching for a tree with var() is not supported'));
    }
    if (useCssWideKeywords) {
        result = match.matchAsTree(tokens, lexer.cssWideKeywordsSyntax, lexer);
    }
    if (!useCssWideKeywords || !result.match) {
        result = match.matchAsTree(tokens, syntax.match, lexer);
        if (!result.match) {
            return buildMatchResult(null, new error.SyntaxMatchError(result.reason, syntax.syntax, value, result), result.iterations);
        }
    }
    return buildMatchResult(result.match, null, result.iterations);
}
class Lexer {
    constructor(config, syntax, structure$1){
        this.cssWideKeywords = genericConst.cssWideKeywords;
        this.syntax = syntax;
        this.generic = false;
        this.units = {
            ...units
        };
        this.atrules = Object.create(null);
        this.properties = Object.create(null);
        this.types = Object.create(null);
        this.structure = structure$1 || structure.getStructureFromConfig(config);
        if (config) {
            if (config.cssWideKeywords) {
                this.cssWideKeywords = config.cssWideKeywords;
            }
            if (config.units) {
                for (const group of Object.keys(units)){
                    if (Array.isArray(config.units[group])) {
                        this.units[group] = config.units[group];
                    }
                }
            }
            if (config.types) {
                for (const [name, type] of Object.entries(config.types)){
                    this.addType_(name, type);
                }
            }
            if (config.generic) {
                this.generic = true;
                for (const [name, value] of Object.entries(generic.createGenericTypes(this.units))){
                    this.addType_(name, value);
                }
            }
            if (config.atrules) {
                for (const [name, atrule] of Object.entries(config.atrules)){
                    this.addAtrule_(name, atrule);
                }
            }
            if (config.properties) {
                for (const [name, property] of Object.entries(config.properties)){
                    this.addProperty_(name, property);
                }
            }
        }
        this.cssWideKeywordsSyntax = matchGraph.buildMatchGraph(this.cssWideKeywords.join(' |  '));
    }
    checkStructure(ast) {
        function collectWarning(node, message) {
            warns.push({
                node,
                message
            });
        }
        const structure = this.structure;
        const warns = [];
        this.syntax.walk(ast, function(node) {
            if (structure.hasOwnProperty(node.type)) {
                structure[node.type].check(node, collectWarning);
            } else {
                collectWarning(node, 'Unknown node type `' + node.type + '`');
            }
        });
        return warns.length ? warns : false;
    }
    createDescriptor(syntax, type, name, parent = null) {
        const ref = {
            type,
            name
        };
        const descriptor = {
            type,
            name,
            parent,
            serializable: typeof syntax === 'string' || syntax && typeof syntax.type === 'string',
            syntax: null,
            match: null,
            matchRef: null // used for properties when a syntax referenced as <'property'> in other syntax definitions
        };
        if (typeof syntax === 'function') {
            descriptor.match = matchGraph.buildMatchGraph(syntax, ref);
        } else {
            if (typeof syntax === 'string') {
                // lazy parsing on first access
                Object.defineProperty(descriptor, 'syntax', {
                    get () {
                        Object.defineProperty(descriptor, 'syntax', {
                            value: parse.parse(syntax)
                        });
                        return descriptor.syntax;
                    }
                });
            } else {
                descriptor.syntax = syntax;
            }
            // lazy graph build on first access
            Object.defineProperty(descriptor, 'match', {
                get () {
                    Object.defineProperty(descriptor, 'match', {
                        value: matchGraph.buildMatchGraph(descriptor.syntax, ref)
                    });
                    return descriptor.match;
                }
            });
            if (type === 'Property') {
                Object.defineProperty(descriptor, 'matchRef', {
                    get () {
                        const syntax = descriptor.syntax;
                        const value = syntaxHasTopLevelCommaMultiplier(syntax) ? matchGraph.buildMatchGraph({
                            ...syntax,
                            terms: [
                                syntax.terms[0].term
                            ]
                        }, ref) : null;
                        Object.defineProperty(descriptor, 'matchRef', {
                            value
                        });
                        return value;
                    }
                });
            }
        }
        return descriptor;
    }
    addAtrule_(name, syntax) {
        if (!syntax) {
            return;
        }
        this.atrules[name] = {
            type: 'Atrule',
            name: name,
            prelude: syntax.prelude ? this.createDescriptor(syntax.prelude, 'AtrulePrelude', name) : null,
            descriptors: syntax.descriptors ? Object.keys(syntax.descriptors).reduce((map, descName)=>{
                map[descName] = this.createDescriptor(syntax.descriptors[descName], 'AtruleDescriptor', descName, name);
                return map;
            }, Object.create(null)) : null
        };
    }
    addProperty_(name, syntax) {
        if (!syntax) {
            return;
        }
        this.properties[name] = this.createDescriptor(syntax, 'Property', name);
    }
    addType_(name, syntax) {
        if (!syntax) {
            return;
        }
        this.types[name] = this.createDescriptor(syntax, 'Type', name);
    }
    checkAtruleName(atruleName) {
        if (!this.getAtrule(atruleName)) {
            return new error.SyntaxReferenceError('Unknown at-rule', '@' + atruleName);
        }
    }
    checkAtrulePrelude(atruleName, prelude) {
        const error = this.checkAtruleName(atruleName);
        if (error) {
            return error;
        }
        const atrule = this.getAtrule(atruleName);
        if (!atrule.prelude && prelude) {
            return new SyntaxError('At-rule `@' + atruleName + '` should not contain a prelude');
        }
        if (atrule.prelude && !prelude) {
            if (!matchSyntax(this, atrule.prelude, '', false).matched) {
                return new SyntaxError('At-rule `@' + atruleName + '` should contain a prelude');
            }
        }
    }
    checkAtruleDescriptorName(atruleName, descriptorName) {
        const error$1 = this.checkAtruleName(atruleName);
        if (error$1) {
            return error$1;
        }
        const atrule = this.getAtrule(atruleName);
        const descriptor = names.keyword(descriptorName);
        if (!atrule.descriptors) {
            return new SyntaxError('At-rule `@' + atruleName + '` has no known descriptors');
        }
        if (!atrule.descriptors[descriptor.name] && !atrule.descriptors[descriptor.basename]) {
            return new error.SyntaxReferenceError('Unknown at-rule descriptor', descriptorName);
        }
    }
    checkPropertyName(propertyName) {
        if (!this.getProperty(propertyName)) {
            return new error.SyntaxReferenceError('Unknown property', propertyName);
        }
    }
    matchAtrulePrelude(atruleName, prelude) {
        const error = this.checkAtrulePrelude(atruleName, prelude);
        if (error) {
            return buildMatchResult(null, error);
        }
        const atrule = this.getAtrule(atruleName);
        if (!atrule.prelude) {
            return buildMatchResult(null, null);
        }
        return matchSyntax(this, atrule.prelude, prelude || '', false);
    }
    matchAtruleDescriptor(atruleName, descriptorName, value) {
        const error = this.checkAtruleDescriptorName(atruleName, descriptorName);
        if (error) {
            return buildMatchResult(null, error);
        }
        const atrule = this.getAtrule(atruleName);
        const descriptor = names.keyword(descriptorName);
        return matchSyntax(this, atrule.descriptors[descriptor.name] || atrule.descriptors[descriptor.basename], value, false);
    }
    matchDeclaration(node) {
        if (node.type !== 'Declaration') {
            return buildMatchResult(null, new Error('Not a Declaration node'));
        }
        return this.matchProperty(node.property, node.value);
    }
    matchProperty(propertyName, value) {
        // don't match syntax for a custom property at the moment
        if (names.property(propertyName).custom) {
            return buildMatchResult(null, new Error('Lexer matching doesn\'t applicable for custom properties'));
        }
        const error = this.checkPropertyName(propertyName);
        if (error) {
            return buildMatchResult(null, error);
        }
        return matchSyntax(this, this.getProperty(propertyName), value, true);
    }
    matchType(typeName, value) {
        const typeSyntax = this.getType(typeName);
        if (!typeSyntax) {
            return buildMatchResult(null, new error.SyntaxReferenceError('Unknown type', typeName));
        }
        return matchSyntax(this, typeSyntax, value, false);
    }
    match(syntax, value) {
        if (typeof syntax !== 'string' && (!syntax || !syntax.type)) {
            return buildMatchResult(null, new error.SyntaxReferenceError('Bad syntax'));
        }
        if (typeof syntax === 'string' || !syntax.match) {
            syntax = this.createDescriptor(syntax, 'Type', 'anonymous');
        }
        return matchSyntax(this, syntax, value, false);
    }
    findValueFragments(propertyName, value, type, name) {
        return search.matchFragments(this, value, this.matchProperty(propertyName, value), type, name);
    }
    findDeclarationValueFragments(declaration, type, name) {
        return search.matchFragments(this, declaration.value, this.matchDeclaration(declaration), type, name);
    }
    findAllFragments(ast, type, name) {
        const result = [];
        this.syntax.walk(ast, {
            visit: 'Declaration',
            enter: (declaration)=>{
                result.push.apply(result, this.findDeclarationValueFragments(declaration, type, name));
            }
        });
        return result;
    }
    getAtrule(atruleName, fallbackBasename = true) {
        const atrule = names.keyword(atruleName);
        const atruleEntry = atrule.vendor && fallbackBasename ? this.atrules[atrule.name] || this.atrules[atrule.basename] : this.atrules[atrule.name];
        return atruleEntry || null;
    }
    getAtrulePrelude(atruleName, fallbackBasename = true) {
        const atrule = this.getAtrule(atruleName, fallbackBasename);
        return atrule && atrule.prelude || null;
    }
    getAtruleDescriptor(atruleName, name) {
        return this.atrules.hasOwnProperty(atruleName) && this.atrules.declarators ? this.atrules[atruleName].declarators[name] || null : null;
    }
    getProperty(propertyName, fallbackBasename = true) {
        const property = names.property(propertyName);
        const propertyEntry = property.vendor && fallbackBasename ? this.properties[property.name] || this.properties[property.basename] : this.properties[property.name];
        return propertyEntry || null;
    }
    getType(name) {
        return hasOwnProperty.call(this.types, name) ? this.types[name] : null;
    }
    validate() {
        function syntaxRef(name, isType) {
            return isType ? `<${name}>` : `<'${name}'>`;
        }
        function validate(syntax, name, broken, descriptor) {
            if (broken.has(name)) {
                return broken.get(name);
            }
            broken.set(name, false);
            if (descriptor.syntax !== null) {
                walk.walk(descriptor.syntax, function(node) {
                    if (node.type !== 'Type' && node.type !== 'Property') {
                        return;
                    }
                    const map = node.type === 'Type' ? syntax.types : syntax.properties;
                    const brokenMap = node.type === 'Type' ? brokenTypes : brokenProperties;
                    if (!hasOwnProperty.call(map, node.name)) {
                        errors.push(`${syntaxRef(name, broken === brokenTypes)} used missed syntax definition ${syntaxRef(node.name, node.type === 'Type')}`);
                        broken.set(name, true);
                    } else if (validate(syntax, node.name, brokenMap, map[node.name])) {
                        errors.push(`${syntaxRef(name, broken === brokenTypes)} used broken syntax definition ${syntaxRef(node.name, node.type === 'Type')}`);
                        broken.set(name, true);
                    }
                }, this);
            }
        }
        const errors = [];
        let brokenTypes = new Map();
        let brokenProperties = new Map();
        for(const key in this.types){
            validate(this, key, brokenTypes, this.types[key]);
        }
        for(const key in this.properties){
            validate(this, key, brokenProperties, this.properties[key]);
        }
        const brokenTypesArray = [
            ...brokenTypes.keys()
        ].filter((name)=>brokenTypes.get(name));
        const brokenPropertiesArray = [
            ...brokenProperties.keys()
        ].filter((name)=>brokenProperties.get(name));
        if (brokenTypesArray.length || brokenPropertiesArray.length) {
            return {
                errors,
                types: brokenTypesArray,
                properties: brokenPropertiesArray
            };
        }
        return null;
    }
    dump(syntaxAsAst, pretty) {
        return {
            generic: this.generic,
            cssWideKeywords: this.cssWideKeywords,
            units: this.units,
            types: dumpMapSyntax(this.types, !pretty, syntaxAsAst),
            properties: dumpMapSyntax(this.properties, !pretty, syntaxAsAst),
            atrules: dumpAtruleMapSyntax(this.atrules, !pretty, syntaxAsAst)
        };
    }
    toString() {
        return JSON.stringify(this.dump());
    }
}
exports.Lexer = Lexer;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/config/mix.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function appendOrSet(a, b) {
    if (typeof b === 'string' && /^\s*\|/.test(b)) {
        return typeof a === 'string' ? a + b : b.replace(/^\s*\|\s*/, '');
    }
    return b || null;
}
function extractProps(obj, props) {
    const result = Object.create(null);
    for (const prop of Object.keys(obj)){
        if (props.includes(prop)) {
            result[prop] = obj[prop];
        }
    }
    return result;
}
function mergeDicts(base, ext, fields) {
    const result = {
        ...base
    };
    for (const [key, props] of Object.entries(ext)){
        result[key] = {
            ...result[key],
            ...fields ? extractProps(props, fields) : props
        };
    }
    return result;
}
function mix(dest, src) {
    const result = {
        ...dest
    };
    for (const [prop, value] of Object.entries(src)){
        switch(prop){
            case 'generic':
                result[prop] = Boolean(value);
                break;
            case 'cssWideKeywords':
                result[prop] = dest[prop] ? [
                    ...dest[prop],
                    ...value
                ] : value || [];
                break;
            case 'units':
                result[prop] = {
                    ...dest[prop]
                };
                for (const [name, patch] of Object.entries(value)){
                    result[prop][name] = Array.isArray(patch) ? patch : [];
                }
                break;
            case 'atrules':
                result[prop] = {
                    ...dest[prop]
                };
                for (const [name, atrule] of Object.entries(value)){
                    const exists = result[prop][name] || {};
                    const current = result[prop][name] = {
                        prelude: exists.prelude || null,
                        descriptors: {
                            ...exists.descriptors
                        }
                    };
                    if (!atrule) {
                        continue;
                    }
                    current.prelude = atrule.prelude ? appendOrSet(current.prelude, atrule.prelude) : current.prelude || null;
                    for (const [descriptorName, descriptorValue] of Object.entries(atrule.descriptors || {})){
                        current.descriptors[descriptorName] = descriptorValue ? appendOrSet(current.descriptors[descriptorName], descriptorValue) : null;
                    }
                    if (!Object.keys(current.descriptors).length) {
                        current.descriptors = null;
                    }
                }
                break;
            case 'types':
            case 'properties':
                result[prop] = {
                    ...dest[prop]
                };
                for (const [name, syntax] of Object.entries(value)){
                    result[prop][name] = appendOrSet(result[prop][name], syntax);
                }
                break;
            case 'parseContext':
                result[prop] = {
                    ...dest[prop],
                    ...value
                };
                break;
            case 'scope':
            case 'features':
                result[prop] = mergeDicts(dest[prop], value);
                break;
            case 'atrule':
            case 'pseudo':
                result[prop] = mergeDicts(dest[prop], value, [
                    'parse'
                ]);
                break;
            case 'node':
                result[prop] = mergeDicts(dest[prop], value, [
                    'name',
                    'structure',
                    'parse',
                    'generate',
                    'walkContext'
                ]);
                break;
        }
    }
    return result;
}
module.exports = mix;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/create.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const index = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/index.cjs [app-ssr] (ecmascript)");
const create = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/parser/create.cjs [app-ssr] (ecmascript)");
const create$2 = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/generator/create.cjs [app-ssr] (ecmascript)");
const create$3 = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/convertor/create.cjs [app-ssr] (ecmascript)");
const create$1 = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/walker/create.cjs [app-ssr] (ecmascript)");
const Lexer = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/lexer/Lexer.cjs [app-ssr] (ecmascript)");
const mix = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/config/mix.cjs [app-ssr] (ecmascript)");
function createSyntax(config) {
    const parse = create.createParser(config);
    const walk = create$1.createWalker(config);
    const generate = create$2.createGenerator(config);
    const { fromPlainObject, toPlainObject } = create$3.createConvertor(walk);
    const syntax = {
        lexer: null,
        createLexer: (config)=>new Lexer.Lexer(config, syntax, syntax.lexer.structure),
        tokenize: index.tokenize,
        parse,
        generate,
        walk,
        find: walk.find,
        findLast: walk.findLast,
        findAll: walk.findAll,
        fromPlainObject,
        toPlainObject,
        fork (extension) {
            const base = mix({}, config); // copy of config
            return createSyntax(typeof extension === 'function' ? extension(base) // TODO: remove Object.assign as second parameter
             : mix(base, extension));
        }
    };
    syntax.lexer = new Lexer.Lexer({
        generic: config.generic,
        cssWideKeywords: config.cssWideKeywords,
        units: config.units,
        types: config.types,
        atrules: config.atrules,
        properties: config.properties,
        node: config.node
    }, syntax);
    return syntax;
}
const createSyntax$1 = (config)=>createSyntax(mix({}, config));
module.exports = createSyntax$1;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/data/patch.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"atrules\":{\"charset\":{\"prelude\":\"<string>\"},\"container\":{\"prelude\":\"[ <container-name> ]? <container-condition>\"},\"font-face\":{\"descriptors\":{\"unicode-range\":{\"comment\":\"replaces <unicode-range>, an old production name\",\"syntax\":\"<urange>#\"}}},\"font-features-values\":{\"comment\":\"The features values syntax is defined in https://www.w3.org/TR/css-fonts-4/#at-ruledef-font-feature-values\",\"prelude\":\"[<string> | <custom-ident>]+\",\"descriptors\":{\"font-display\":\"auto | block | swap | fallback | optional\"}},\"scope\":{\"prelude\":\"[ ( <scope-start> ) ]? [ to ( <scope-end> ) ]?\"},\"position-try\":{\"comment\":\"The list of descriptors: https://developer.mozilla.org/en-US/docs/Web/CSS/@position-try\",\"descriptors\":{\"top\":\"<'top'>\",\"left\":\"<'left'>\",\"bottom\":\"<'bottom'>\",\"right\":\"<'right'>\",\"inset-block-start\":\"<'inset-block-start'>\",\"inset-block-end\":\"<'inset-block-end'>\",\"inset-inline-start\":\"<'inset-inline-start'>\",\"inset-inline-end\":\"<'inset-inline-end'>\",\"inset-block\":\"<'inset-block'>\",\"inset-inline\":\"<'inset-inline'>\",\"inset\":\"<'inset'>\",\"margin-top\":\"<'margin-top'>\",\"margin-left\":\"<'margin-left'>\",\"margin-bottom\":\"<'margin-bottom'>\",\"margin-right\":\"<'margin-right'>\",\"margin-block-start\":\"<'margin-block-start'>\",\"margin-block-end\":\"<'margin-block-end'>\",\"margin-inline-start\":\"<'margin-inline-start'>\",\"margin-inline-end\":\"<'margin-inline-end'>\",\"margin\":\"<'margin'>\",\"margin-block\":\"<'margin-block'>\",\"margin-inline\":\"<'margin-inline'>\",\"width\":\"<'width'>\",\"height\":\"<'height'>\",\"min-width\":\"<'min-width'>\",\"min-height\":\"<'min-height'>\",\"max-width\":\"<'max-width'>\",\"max-height\":\"<'max-height'>\",\"block-size\":\"<'block-size'>\",\"inline-size\":\"<'inline-size'>\",\"min-block-size\":\"<'min-block-size'>\",\"min-inline-size\":\"<'min-inline-size'>\",\"max-block-size\":\"<'max-block-size'>\",\"max-inline-size\":\"<'max-inline-size'>\",\"align-self\":\"<'align-self'> | anchor-center\",\"justify-self\":\"<'justify-self'> | anchor-center\"}}},\"properties\":{\"-moz-background-clip\":{\"comment\":\"deprecated syntax in old Firefox, https://developer.mozilla.org/en/docs/Web/CSS/background-clip\",\"syntax\":\"padding | border\"},\"-moz-border-radius-bottomleft\":{\"comment\":\"https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius\",\"syntax\":\"<'border-bottom-left-radius'>\"},\"-moz-border-radius-bottomright\":{\"comment\":\"https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius\",\"syntax\":\"<'border-bottom-right-radius'>\"},\"-moz-border-radius-topleft\":{\"comment\":\"https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius\",\"syntax\":\"<'border-top-left-radius'>\"},\"-moz-border-radius-topright\":{\"comment\":\"https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius\",\"syntax\":\"<'border-bottom-right-radius'>\"},\"-moz-control-character-visibility\":{\"comment\":\"firefox specific keywords, https://bugzilla.mozilla.org/show_bug.cgi?id=947588\",\"syntax\":\"visible | hidden\"},\"-moz-osx-font-smoothing\":{\"comment\":\"misssed old syntax https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth\",\"syntax\":\"auto | grayscale\"},\"-moz-user-select\":{\"comment\":\"https://developer.mozilla.org/en-US/docs/Web/CSS/user-select\",\"syntax\":\"none | text | all | -moz-none\"},\"-ms-flex-align\":{\"comment\":\"misssed old syntax implemented in IE, https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/#flex-align\",\"syntax\":\"start | end | center | baseline | stretch\"},\"-ms-flex-item-align\":{\"comment\":\"misssed old syntax implemented in IE, https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/#flex-align\",\"syntax\":\"auto | start | end | center | baseline | stretch\"},\"-ms-flex-line-pack\":{\"comment\":\"misssed old syntax implemented in IE, https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/#flex-line-pack\",\"syntax\":\"start | end | center | justify | distribute | stretch\"},\"-ms-flex-negative\":{\"comment\":\"misssed old syntax implemented in IE; TODO: find references for comfirmation\",\"syntax\":\"<'flex-shrink'>\"},\"-ms-flex-pack\":{\"comment\":\"misssed old syntax implemented in IE, https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/#flex-pack\",\"syntax\":\"start | end | center | justify | distribute\"},\"-ms-flex-order\":{\"comment\":\"misssed old syntax implemented in IE; https://msdn.microsoft.com/en-us/library/jj127303(v=vs.85).aspx\",\"syntax\":\"<integer>\"},\"-ms-flex-positive\":{\"comment\":\"misssed old syntax implemented in IE; TODO: find references for comfirmation\",\"syntax\":\"<'flex-grow'>\"},\"-ms-flex-preferred-size\":{\"comment\":\"misssed old syntax implemented in IE; TODO: find references for comfirmation\",\"syntax\":\"<'flex-basis'>\"},\"-ms-interpolation-mode\":{\"comment\":\"https://msdn.microsoft.com/en-us/library/ff521095(v=vs.85).aspx\",\"syntax\":\"nearest-neighbor | bicubic\"},\"-ms-grid-column-align\":{\"comment\":\"add this property first since it uses as fallback for flexbox, https://msdn.microsoft.com/en-us/library/windows/apps/hh466338.aspx\",\"syntax\":\"start | end | center | stretch\"},\"-ms-grid-row-align\":{\"comment\":\"add this property first since it uses as fallback for flexbox, https://msdn.microsoft.com/en-us/library/windows/apps/hh466348.aspx\",\"syntax\":\"start | end | center | stretch\"},\"-ms-hyphenate-limit-last\":{\"comment\":\"misssed old syntax implemented in IE; https://www.w3.org/TR/css-text-4/#hyphenate-line-limits\",\"syntax\":\"none | always | column | page | spread\"},\"-webkit-appearance\":{\"comment\":\"webkit specific keywords\",\"references\":[\"http://css-infos.net/property/-webkit-appearance\"],\"syntax\":\"none | button | button-bevel | caps-lock-indicator | caret | checkbox | default-button | inner-spin-button | listbox | listitem | media-controls-background | media-controls-fullscreen-background | media-current-time-display | media-enter-fullscreen-button | media-exit-fullscreen-button | media-fullscreen-button | media-mute-button | media-overlay-play-button | media-play-button | media-seek-back-button | media-seek-forward-button | media-slider | media-sliderthumb | media-time-remaining-display | media-toggle-closed-captions-button | media-volume-slider | media-volume-slider-container | media-volume-sliderthumb | menulist | menulist-button | menulist-text | menulist-textfield | meter | progress-bar | progress-bar-value | push-button | radio | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbargripper-horizontal | scrollbargripper-vertical | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | searchfield-cancel-button | searchfield-decoration | searchfield-results-button | searchfield-results-decoration | slider-horizontal | slider-vertical | sliderthumb-horizontal | sliderthumb-vertical | square-button | textarea | textfield | -apple-pay-button\"},\"-webkit-background-clip\":{\"comment\":\"https://developer.mozilla.org/en/docs/Web/CSS/background-clip\",\"syntax\":\"[ <visual-box> | border | padding | content | text ]#\"},\"-webkit-column-break-after\":{\"comment\":\"added, http://help.dottoro.com/lcrthhhv.php\",\"syntax\":\"always | auto | avoid\"},\"-webkit-column-break-before\":{\"comment\":\"added, http://help.dottoro.com/lcxquvkf.php\",\"syntax\":\"always | auto | avoid\"},\"-webkit-column-break-inside\":{\"comment\":\"added, http://help.dottoro.com/lclhnthl.php\",\"syntax\":\"always | auto | avoid\"},\"-webkit-font-smoothing\":{\"comment\":\"https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth\",\"syntax\":\"auto | none | antialiased | subpixel-antialiased\"},\"-webkit-mask-box-image\":{\"comment\":\"missed; https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-mask-box-image\",\"syntax\":\"[ <url> | <gradient> | none ] [ <length-percentage>{4} <-webkit-mask-box-repeat>{2} ]?\"},\"-webkit-print-color-adjust\":{\"comment\":\"missed\",\"references\":[\"https://developer.mozilla.org/en/docs/Web/CSS/-webkit-print-color-adjust\"],\"syntax\":\"economy | exact\"},\"-webkit-text-security\":{\"comment\":\"missed; http://help.dottoro.com/lcbkewgt.php\",\"syntax\":\"none | circle | disc | square\"},\"-webkit-user-drag\":{\"comment\":\"missed; http://help.dottoro.com/lcbixvwm.php\",\"syntax\":\"none | element | auto\"},\"-webkit-user-select\":{\"comment\":\"auto is supported by old webkit, https://developer.mozilla.org/en-US/docs/Web/CSS/user-select\",\"syntax\":\"auto | none | text | all\"},\"alignment-baseline\":{\"comment\":\"added SVG property\",\"references\":[\"https://www.w3.org/TR/SVG/text.html#AlignmentBaselineProperty\"],\"syntax\":\"auto | baseline | before-edge | text-before-edge | middle | central | after-edge | text-after-edge | ideographic | alphabetic | hanging | mathematical\"},\"baseline-shift\":{\"comment\":\"added SVG property\",\"references\":[\"https://www.w3.org/TR/SVG/text.html#BaselineShiftProperty\"],\"syntax\":\"baseline | sub | super | <svg-length>\"},\"behavior\":{\"comment\":\"added old IE property https://msdn.microsoft.com/en-us/library/ms530723(v=vs.85).aspx\",\"syntax\":\"<url>+\"},\"container-type\":{\"comment\":\"https://www.w3.org/TR/css-contain-3/#propdef-container-type\",\"syntax\":\"normal || [ size | inline-size ]\"},\"cue\":{\"comment\":\"https://www.w3.org/TR/css3-speech/#property-index\",\"syntax\":\"<'cue-before'> <'cue-after'>?\"},\"cue-after\":{\"comment\":\"https://www.w3.org/TR/css3-speech/#property-index\",\"syntax\":\"<url> <decibel>? | none\"},\"cue-before\":{\"comment\":\"https://www.w3.org/TR/css3-speech/#property-index\",\"syntax\":\"<url> <decibel>? | none\"},\"cursor\":{\"comment\":\"added legacy keywords: hand, -webkit-grab. -webkit-grabbing, -webkit-zoom-in, -webkit-zoom-out, -moz-grab, -moz-grabbing, -moz-zoom-in, -moz-zoom-out\",\"references\":[\"https://www.sitepoint.com/css3-cursor-styles/\"],\"syntax\":\"[ [ <url> [ <x> <y> ]? , ]* [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out | grab | grabbing | hand | -webkit-grab | -webkit-grabbing | -webkit-zoom-in | -webkit-zoom-out | -moz-grab | -moz-grabbing | -moz-zoom-in | -moz-zoom-out ] ]\"},\"display\":{\"comment\":\"extended with -ms-flexbox\",\"syntax\":\"| <-non-standard-display>\"},\"position\":{\"comment\":\"extended with -webkit-sticky\",\"syntax\":\"| -webkit-sticky\"},\"dominant-baseline\":{\"comment\":\"added SVG property\",\"references\":[\"https://www.w3.org/TR/SVG/text.html#DominantBaselineProperty\"],\"syntax\":\"auto | use-script | no-change | reset-size | ideographic | alphabetic | hanging | mathematical | central | middle | text-after-edge | text-before-edge\"},\"image-rendering\":{\"comment\":\"extended with <-non-standard-image-rendering>, added SVG keywords optimizeSpeed and optimizeQuality\",\"references\":[\"https://developer.mozilla.org/en/docs/Web/CSS/image-rendering\",\"https://www.w3.org/TR/SVG/painting.html#ImageRenderingProperty\"],\"syntax\":\"| optimizeSpeed | optimizeQuality | <-non-standard-image-rendering>\"},\"fill-opacity\":{\"comment\":\"added SVG property\",\"references\":[\"https://developer.mozilla.org/en-US/docs/Web/CSS/fill-opacity\",\"https://www.w3.org/TR/SVG/painting.html#FillProperty\"],\"syntax\":\"<number-zero-one> | <percentage>\"},\"filter\":{\"comment\":\"extend with IE legacy syntaxes\",\"syntax\":\"| <-ms-filter-function-list>\"},\"font\":{\"comment\":\"align with font-4, fix <'font-family'>#, add non standard fonts\",\"references\":[\"https://drafts.csswg.org/css-fonts-4/#font-prop\",\"https://github.com/w3c/csswg-drafts/pull/10832\",\"https://webkit.org/blog/3709/using-the-system-font-in-web-content/\"],\"syntax\":\"[ [ <'font-style'> || <font-variant-css2> || <'font-weight'> || <font-width-css3> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'># ] | <system-family-name> | <-non-standard-font>\"},\"glyph-orientation-horizontal\":{\"comment\":\"added SVG property\",\"references\":[\"https://www.w3.org/TR/SVG/text.html#GlyphOrientationHorizontalProperty\"],\"syntax\":\"<angle>\"},\"glyph-orientation-vertical\":{\"comment\":\"added SVG property\",\"references\":[\"https://www.w3.org/TR/SVG/text.html#GlyphOrientationVerticalProperty\"],\"syntax\":\"<angle>\"},\"kerning\":{\"comment\":\"added SVG property\",\"references\":[\"https://www.w3.org/TR/SVG/text.html#KerningProperty\"],\"syntax\":\"auto | <svg-length>\"},\"letter-spacing\":{\"comment\":\"fix syntax <length> -> <length-percentage>\",\"references\":[\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/letter-spacing\"],\"syntax\":\"normal | <length-percentage>\"},\"max-width\":{\"comment\":\"extend by non-standard size keywords https://developer.mozilla.org/en-US/docs/Web/CSS/width\",\"syntax\":\"| stretch | <-non-standard-size>\"},\"max-height\":{\"comment\":\"extend by non-standard size keywords https://developer.mozilla.org/en-US/docs/Web/CSS/width\",\"syntax\":\"| stretch | <-non-standard-size>\"},\"width\":{\"references\":[\"https://developer.mozilla.org/en-US/docs/Web/CSS/width\",\"https://github.com/csstree/stylelint-validator/issues/29\"],\"syntax\":\"| stretch | <-non-standard-size>\"},\"height\":{\"syntax\":\"| stretch | <-non-standard-size>\"},\"min-width\":{\"comment\":\"extend by non-standard width keywords https://developer.mozilla.org/en-US/docs/Web/CSS/width\",\"syntax\":\"| stretch | <-non-standard-size>\"},\"min-height\":{\"syntax\":\"| stretch | <-non-standard-size>\"},\"overflow\":{\"comment\":\"extend by vendor keywords https://developer.mozilla.org/en-US/docs/Web/CSS/overflow\",\"syntax\":\"| <-non-standard-overflow>\"},\"overflow-x\":{\"comment\":\"extend by vendor keywords https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x\",\"syntax\":\"| <-non-standard-overflow>\"},\"overflow-y\":{\"comment\":\"extend by vendor keywords https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y\",\"syntax\":\"| <-non-standard-overflow>\"},\"overflow-block\":{\"comment\":\"extend by vendor keywords https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y\",\"syntax\":\"| <-non-standard-overflow>\"},\"overflow-inline\":{\"comment\":\"extend by vendor keywords https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x\",\"syntax\":\"| <-non-standard-overflow>\"},\"pause\":{\"comment\":\"https://www.w3.org/TR/css3-speech/#property-index\",\"syntax\":\"<'pause-before'> <'pause-after'>?\"},\"pause-after\":{\"comment\":\"https://www.w3.org/TR/css3-speech/#property-index\",\"syntax\":\"<time> | none | x-weak | weak | medium | strong | x-strong\"},\"pause-before\":{\"comment\":\"https://www.w3.org/TR/css3-speech/#property-index\",\"syntax\":\"<time> | none | x-weak | weak | medium | strong | x-strong\"},\"position-try-options\":{\"comment\":\"https://developer.mozilla.org/en-US/docs/Web/CSS/position-try-fallbacks\",\"syntax\":\"<'position-try-fallbacks'>\"},\"rest\":{\"comment\":\"https://www.w3.org/TR/css3-speech/#property-index\",\"syntax\":\"<'rest-before'> <'rest-after'>?\"},\"rest-after\":{\"comment\":\"https://www.w3.org/TR/css3-speech/#property-index\",\"syntax\":\"<time> | none | x-weak | weak | medium | strong | x-strong\"},\"rest-before\":{\"comment\":\"https://www.w3.org/TR/css3-speech/#property-index\",\"syntax\":\"<time> | none | x-weak | weak | medium | strong | x-strong\"},\"speak\":{\"comment\":\"https://www.w3.org/TR/css3-speech/#property-index\",\"syntax\":\"auto | never | always\"},\"stroke-dasharray\":{\"comment\":\"added SVG property; a list of comma and/or white space separated <length>s and <percentage>s\",\"references\":[\"https://www.w3.org/TR/SVG/painting.html#StrokeProperties\"],\"syntax\":\"none | [ <svg-length>+ ]#\"},\"stroke-dashoffset\":{\"comment\":\"added SVG property\",\"references\":[\"https://www.w3.org/TR/SVG/painting.html#StrokeProperties\"],\"syntax\":\"<svg-length>\"},\"stroke-linejoin\":{\"comment\":\"added SVG property\",\"references\":[\"https://www.w3.org/TR/SVG/painting.html#StrokeProperties\"],\"syntax\":\"miter | round | bevel\"},\"stroke-miterlimit\":{\"comment\":\"added SVG property (<miterlimit> = <number-one-or-greater>) \",\"references\":[\"https://www.w3.org/TR/SVG/painting.html#StrokeProperties\"],\"syntax\":\"<number-one-or-greater>\"},\"stroke-width\":{\"comment\":\"added SVG property\",\"references\":[\"https://www.w3.org/TR/SVG/painting.html#StrokeProperties\"],\"syntax\":\"<svg-length>\"},\"unicode-bidi\":{\"comment\":\"added prefixed keywords https://developer.mozilla.org/en-US/docs/Web/CSS/unicode-bidi\",\"syntax\":\"| -moz-isolate | -moz-isolate-override | -moz-plaintext | -webkit-isolate | -webkit-isolate-override | -webkit-plaintext\"},\"voice-balance\":{\"comment\":\"https://www.w3.org/TR/css3-speech/#property-index\",\"syntax\":\"<number> | left | center | right | leftwards | rightwards\"},\"voice-duration\":{\"comment\":\"https://www.w3.org/TR/css3-speech/#property-index\",\"syntax\":\"auto | <time>\"},\"voice-family\":{\"comment\":\"<name> -> <family-name>, https://www.w3.org/TR/css3-speech/#property-index\",\"syntax\":\"[ [ <family-name> | <generic-voice> ] , ]* [ <family-name> | <generic-voice> ] | preserve\"},\"voice-pitch\":{\"comment\":\"https://www.w3.org/TR/css3-speech/#property-index\",\"syntax\":\"<frequency> && absolute | [ [ x-low | low | medium | high | x-high ] || [ <frequency> | <semitones> | <percentage> ] ]\"},\"voice-range\":{\"comment\":\"https://www.w3.org/TR/css3-speech/#property-index\",\"syntax\":\"<frequency> && absolute | [ [ x-low | low | medium | high | x-high ] || [ <frequency> | <semitones> | <percentage> ] ]\"},\"voice-rate\":{\"comment\":\"https://www.w3.org/TR/css3-speech/#property-index\",\"syntax\":\"[ normal | x-slow | slow | medium | fast | x-fast ] || <percentage>\"},\"voice-stress\":{\"comment\":\"https://www.w3.org/TR/css3-speech/#property-index\",\"syntax\":\"normal | strong | moderate | none | reduced\"},\"voice-volume\":{\"comment\":\"https://www.w3.org/TR/css3-speech/#property-index\",\"syntax\":\"silent | [ [ x-soft | soft | medium | loud | x-loud ] || <decibel> ]\"},\"writing-mode\":{\"comment\":\"extend with SVG keywords\",\"syntax\":\"| <svg-writing-mode>\"},\"white-space-trim\":{\"syntax\":\"none | discard-before || discard-after || discard-inner\",\"comment\":\"missed, https://www.w3.org/TR/css-text-4/#white-space-trim\"}},\"types\":{\"-legacy-gradient\":{\"comment\":\"added collection of legacy gradient syntaxes\",\"syntax\":\"<-webkit-gradient()> | <-legacy-linear-gradient> | <-legacy-repeating-linear-gradient> | <-legacy-radial-gradient> | <-legacy-repeating-radial-gradient>\"},\"-legacy-linear-gradient\":{\"comment\":\"like standard syntax but w/o `to` keyword https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient\",\"syntax\":\"-moz-linear-gradient( <-legacy-linear-gradient-arguments> ) | -webkit-linear-gradient( <-legacy-linear-gradient-arguments> ) | -o-linear-gradient( <-legacy-linear-gradient-arguments> )\"},\"-legacy-repeating-linear-gradient\":{\"comment\":\"like standard syntax but w/o `to` keyword https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient\",\"syntax\":\"-moz-repeating-linear-gradient( <-legacy-linear-gradient-arguments> ) | -webkit-repeating-linear-gradient( <-legacy-linear-gradient-arguments> ) | -o-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )\"},\"-legacy-linear-gradient-arguments\":{\"comment\":\"like standard syntax but w/o `to` keyword https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient\",\"syntax\":\"[ <angle> | <side-or-corner> ]? , <color-stop-list>\"},\"-legacy-radial-gradient\":{\"comment\":\"deprecated syntax that implemented by some browsers https://www.w3.org/TR/2011/WD-css3-images-20110908/#radial-gradients\",\"syntax\":\"-moz-radial-gradient( <-legacy-radial-gradient-arguments> ) | -webkit-radial-gradient( <-legacy-radial-gradient-arguments> ) | -o-radial-gradient( <-legacy-radial-gradient-arguments> )\"},\"-legacy-repeating-radial-gradient\":{\"comment\":\"deprecated syntax that implemented by some browsers https://www.w3.org/TR/2011/WD-css3-images-20110908/#radial-gradients\",\"syntax\":\"-moz-repeating-radial-gradient( <-legacy-radial-gradient-arguments> ) | -webkit-repeating-radial-gradient( <-legacy-radial-gradient-arguments> ) | -o-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )\"},\"-legacy-radial-gradient-arguments\":{\"comment\":\"deprecated syntax that implemented by some browsers https://www.w3.org/TR/2011/WD-css3-images-20110908/#radial-gradients\",\"syntax\":\"[ <position> , ]? [ [ [ <-legacy-radial-gradient-shape> || <-legacy-radial-gradient-size> ] | [ <length> | <percentage> ]{2} ] , ]? <color-stop-list>\"},\"-legacy-radial-gradient-size\":{\"comment\":\"before a standard it contains 2 extra keywords (`contain` and `cover`) https://www.w3.org/TR/2011/WD-css3-images-20110908/#ltsize\",\"syntax\":\"closest-side | closest-corner | farthest-side | farthest-corner | contain | cover\"},\"-legacy-radial-gradient-shape\":{\"comment\":\"define to double sure it doesn't extends in future https://www.w3.org/TR/2011/WD-css3-images-20110908/#ltshape\",\"syntax\":\"circle | ellipse\"},\"-non-standard-font\":{\"comment\":\"non standard fonts\",\"references\":[\"https://webkit.org/blog/3709/using-the-system-font-in-web-content/\"],\"syntax\":\"-apple-system-body | -apple-system-headline | -apple-system-subheadline | -apple-system-caption1 | -apple-system-caption2 | -apple-system-footnote | -apple-system-short-body | -apple-system-short-headline | -apple-system-short-subheadline | -apple-system-short-caption1 | -apple-system-short-footnote | -apple-system-tall-body\"},\"-non-standard-color\":{\"comment\":\"non standard colors\",\"references\":[\"http://cssdot.ru/%D0%A1%D0%BF%D1%80%D0%B0%D0%B2%D0%BE%D1%87%D0%BD%D0%B8%D0%BA_CSS/color-i305.html\",\"https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Mozilla_Color_Preference_Extensions\"],\"syntax\":\"-moz-ButtonDefault | -moz-ButtonHoverFace | -moz-ButtonHoverText | -moz-CellHighlight | -moz-CellHighlightText | -moz-Combobox | -moz-ComboboxText | -moz-Dialog | -moz-DialogText | -moz-dragtargetzone | -moz-EvenTreeRow | -moz-Field | -moz-FieldText | -moz-html-CellHighlight | -moz-html-CellHighlightText | -moz-mac-accentdarkestshadow | -moz-mac-accentdarkshadow | -moz-mac-accentface | -moz-mac-accentlightesthighlight | -moz-mac-accentlightshadow | -moz-mac-accentregularhighlight | -moz-mac-accentregularshadow | -moz-mac-chrome-active | -moz-mac-chrome-inactive | -moz-mac-focusring | -moz-mac-menuselect | -moz-mac-menushadow | -moz-mac-menutextselect | -moz-MenuHover | -moz-MenuHoverText | -moz-MenuBarText | -moz-MenuBarHoverText | -moz-nativehyperlinktext | -moz-OddTreeRow | -moz-win-communicationstext | -moz-win-mediatext | -moz-activehyperlinktext | -moz-default-background-color | -moz-default-color | -moz-hyperlinktext | -moz-visitedhyperlinktext | -webkit-activelink | -webkit-focus-ring-color | -webkit-link | -webkit-text\"},\"-non-standard-image-rendering\":{\"comment\":\"non-standard keywords http://phrogz.net/tmp/canvas_image_zoom.html\",\"syntax\":\"optimize-contrast | -moz-crisp-edges | -o-crisp-edges | -webkit-optimize-contrast\"},\"-non-standard-overflow\":{\"comment\":\"non-standard keywords https://developer.mozilla.org/en-US/docs/Web/CSS/overflow\",\"syntax\":\"overlay | -moz-scrollbars-none | -moz-scrollbars-horizontal | -moz-scrollbars-vertical | -moz-hidden-unscrollable\"},\"-non-standard-size\":{\"comment\":\"non-standard keywords https://developer.mozilla.org/en-US/docs/Web/CSS/width\",\"syntax\":\"intrinsic | min-intrinsic | -webkit-fill-available | -webkit-fit-content | -webkit-min-content | -webkit-max-content  | -moz-available | -moz-fit-content | -moz-min-content | -moz-max-content\"},\"-webkit-gradient()\":{\"comment\":\"first Apple proposal gradient syntax https://webkit.org/blog/175/introducing-css-gradients/ - TODO: simplify when after match algorithm improvement ( [, point, radius | , point] -> [, radius]? , point )\",\"syntax\":\"-webkit-gradient( <-webkit-gradient-type>, <-webkit-gradient-point> [, <-webkit-gradient-point> | , <-webkit-gradient-radius>, <-webkit-gradient-point> ] [, <-webkit-gradient-radius>]? [, <-webkit-gradient-color-stop>]* )\"},\"-webkit-gradient-color-stop\":{\"comment\":\"first Apple proposal gradient syntax https://webkit.org/blog/175/introducing-css-gradients/\",\"syntax\":\"from( <color> ) | color-stop( [ <number-zero-one> | <percentage> ] , <color> ) | to( <color> )\"},\"-webkit-gradient-point\":{\"comment\":\"first Apple proposal gradient syntax https://webkit.org/blog/175/introducing-css-gradients/\",\"syntax\":\"[ left | center | right | <length-percentage> ] [ top | center | bottom | <length-percentage> ]\"},\"-webkit-gradient-radius\":{\"comment\":\"first Apple proposal gradient syntax https://webkit.org/blog/175/introducing-css-gradients/\",\"syntax\":\"<length> | <percentage>\"},\"-webkit-gradient-type\":{\"comment\":\"first Apple proposal gradient syntax https://webkit.org/blog/175/introducing-css-gradients/\",\"syntax\":\"linear | radial\"},\"-webkit-mask-box-repeat\":{\"comment\":\"missed; https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-mask-box-image\",\"syntax\":\"repeat | stretch | round\"},\"-ms-filter-function-list\":{\"comment\":\"https://developer.mozilla.org/en-US/docs/Web/CSS/-ms-filter\",\"syntax\":\"<-ms-filter-function>+\"},\"-ms-filter-function\":{\"comment\":\"https://developer.mozilla.org/en-US/docs/Web/CSS/-ms-filter\",\"syntax\":\"<-ms-filter-function-progid> | <-ms-filter-function-legacy>\"},\"-ms-filter-function-progid\":{\"comment\":\"https://developer.mozilla.org/en-US/docs/Web/CSS/-ms-filter\",\"syntax\":\"'progid:' [ <ident-token> '.' ]* [ <ident-token> | <function-token> <any-value>? ) ]\"},\"-ms-filter-function-legacy\":{\"comment\":\"https://developer.mozilla.org/en-US/docs/Web/CSS/-ms-filter\",\"syntax\":\"<ident-token> | <function-token> <any-value>? )\"},\"age\":{\"comment\":\"https://www.w3.org/TR/css3-speech/#voice-family\",\"syntax\":\"child | young | old\"},\"attr-name\":{\"syntax\":\"<wq-name>\"},\"attr-fallback\":{\"syntax\":\"<any-value>\"},\"autospace\":{\"syntax\":\"no-autospace | [ ideograph-alpha || ideograph-numeric || punctuation ] || [ insert | replace ]\"},\"bottom\":{\"comment\":\"missed; not sure we should add it, but no others except `shape` is using it so it's ok for now; https://drafts.fxtf.org/css-masking-1/#funcdef-clip-rect\",\"syntax\":\"<length> | auto\"},\"content-list\":{\"comment\":\"added attr(), see https://github.com/csstree/csstree/issues/201\",\"syntax\":\"[ <string> | contents | <image> | <counter> | <quote> | <target> | <leader()> | <attr()> ]+\"},\"container-condition\":{\"comment\":\"missed, https://drafts.csswg.org/css-contain-3/#container-rule\",\"syntax\":\"not <query-in-parens> | <query-in-parens> [ [ and <query-in-parens> ]* | [ or <query-in-parens> ]* ]\"},\"coord-box\":{\"syntax\":\"content-box | padding-box | border-box | fill-box | stroke-box | view-box\"},\"cubic-bezier-easing-function\":{\"comment\":\"missed, https://drafts.csswg.org/css-easing-1/#cubic-bezier-easing-function\",\"syntax\":\"ease | ease-in | ease-out | ease-in-out | cubic-bezier( <number [0,1]> , <number> , <number [0,1]> , <number> )\"},\"element()\":{\"comment\":\"https://drafts.csswg.org/css-gcpm/#element-syntax & https://drafts.csswg.org/css-images-4/#element-notation\",\"syntax\":\"element( <custom-ident> , [ first | start | last | first-except ]? ) | element( <id-selector> )\"},\"generic-voice\":{\"comment\":\"https://www.w3.org/TR/css3-speech/#voice-family\",\"syntax\":\"[ <age>? <gender> <integer>? ]\"},\"gender\":{\"comment\":\"https://www.w3.org/TR/css3-speech/#voice-family\",\"syntax\":\"male | female | neutral\"},\"general-enclosed\":{\"comment\":\"remove ident-token, optional any-value, brackets (see https://drafts.csswg.org/mediaqueries-5/#typedef-general-enclosed)\",\"syntax\":\"[ <function-token> <any-value>? ) ] | [ ( <any-value>? ) ]\"},\"generic-family\":{\"comment\":\"new definition on font-4, https://drafts.csswg.org/css-fonts-4/#typedef-generic-family\",\"syntax\":\"<generic-script-specific>| <generic-complete> | <generic-incomplete> | <-non-standard-generic-family>\"},\"generic-script-specific\":{\"syntax\":\"generic(kai) | generic(fangsong) | generic(nastaliq)\"},\"-non-standard-generic-family\":{\"syntax\":\"-apple-system | BlinkMacSystemFont\",\"references\":[\"https://css-tricks.com/snippets/css/system-font-stack/\",\"https://webkit.org/blog/3709/using-the-system-font-in-web-content/\"]},\"gradient\":{\"comment\":\"added legacy syntaxes support\",\"syntax\":\"| <-legacy-gradient>\"},\"intrinsic-size-keyword\":{\"comment\":\"Missing from mdn-data. 4.3. Intrinsic Size Keywords https://www.w3.org/TR/css-sizing-4/#intrinsic-size-keywords\",\"syntax\":\"min-content | max-content | fit-content\"},\"left\":{\"comment\":\"missed; not sure we should add it, but no others except `shape` is using it so it's ok for now; https://drafts.fxtf.org/css-masking-1/#funcdef-clip-rect\",\"syntax\":\"<length> | auto\"},\"color\":{\"comment\":\"css-color-5, added non standard color names\",\"syntax\":\"<color-base> | currentColor | <system-color> | <device-cmyk()>  | <light-dark()> | <-non-standard-color>\"},\"device-cmyk()\":{\"syntax\":\"<legacy-device-cmyk-syntax> | <modern-device-cmyk-syntax>\"},\"legacy-device-cmyk-syntax\":{\"syntax\":\"device-cmyk( <number>#{4} )\"},\"modern-device-cmyk-syntax\":{\"syntax\":\"device-cmyk( <cmyk-component>{4} [ / [ <alpha-value> | none ] ]? )\"},\"cmyk-component\":{\"syntax\":\"<number> | <percentage> | none\"},\"color-mix()\":{\"syntax\":\"color-mix( <color-interpolation-method> , [ <color> && <percentage [0,100]>? ]#{2} )\"},\"color-space\":{\"syntax\":\"<rectangular-color-space> | <polar-color-space> | <custom-color-space>\"},\"paint\":{\"comment\":\"used by SVG https://www.w3.org/TR/SVG/painting.html#SpecifyingPaint\",\"syntax\":\"none | <color> | <url> [ none | <color> ]? | context-fill | context-stroke\"},\"right\":{\"comment\":\"missed; not sure we should add it, but no others except `shape` is using it so it's ok for now; https://drafts.fxtf.org/css-masking-1/#funcdef-clip-rect\",\"syntax\":\"<length> | auto\"},\"shape\":{\"comment\":\"missed spaces in function body and add backwards compatible syntax\",\"syntax\":\"rect( <top>, <right>, <bottom>, <left> ) | rect( <top> <right> <bottom> <left> )\"},\"scope-start\":{\"syntax\":\"<forgiving-selector-list>\"},\"scope-end\":{\"syntax\":\"<forgiving-selector-list>\"},\"forgiving-selector-list\":{\"syntax\":\"<complex-real-selector-list>\"},\"forgiving-relative-selector-list\":{\"syntax\":\"<relative-real-selector-list>\"},\"complex-real-selector-list\":{\"syntax\":\"<complex-real-selector>#\"},\"simple-selector-list\":{\"syntax\":\"<simple-selector>#\"},\"relative-real-selector-list\":{\"syntax\":\"<relative-real-selector>#\"},\"complex-selector\":{\"syntax\":\"<complex-selector-unit> [ <combinator>? <complex-selector-unit> ]*\"},\"complex-selector-unit\":{\"syntax\":\"[ <compound-selector>? <pseudo-compound-selector>* ]!\"},\"complex-real-selector\":{\"syntax\":\"<compound-selector> [ <combinator>? <compound-selector> ]*\"},\"relative-real-selector\":{\"syntax\":\"<combinator>? <complex-real-selector>\"},\"compound-selector\":{\"syntax\":\"[ <type-selector>? <subclass-selector>* ]!\"},\"pseudo-compound-selector\":{\"syntax\":\" <pseudo-element-selector> <pseudo-class-selector>*\"},\"simple-selector\":{\"syntax\":\"<type-selector> | <subclass-selector>\"},\"combinator\":{\"syntax\":\"'>' | '+' | '~' | [ '|' '|' ]\"},\"pseudo-element-selector\":{\"syntax\":\"':' <pseudo-class-selector> | <legacy-pseudo-element-selector>\"},\"legacy-pseudo-element-selector\":{\"syntax\":\" ':' [before | after | first-line | first-letter]\"},\"svg-length\":{\"comment\":\"All coordinates and lengths in SVG can be specified with or without a unit identifier\",\"references\":[\"https://www.w3.org/TR/SVG11/coords.html#Units\"],\"syntax\":\"<percentage> | <length> | <number>\"},\"svg-writing-mode\":{\"comment\":\"SVG specific keywords (deprecated for CSS)\",\"references\":[\"https://developer.mozilla.org/en/docs/Web/CSS/writing-mode\",\"https://www.w3.org/TR/SVG/text.html#WritingModeProperty\"],\"syntax\":\"lr-tb | rl-tb | tb-rl | lr | rl | tb\"},\"top\":{\"comment\":\"missed; not sure we should add it, but no others except `shape` is using it so it's ok for now; https://drafts.fxtf.org/css-masking-1/#funcdef-clip-rect\",\"syntax\":\"<length> | auto\"},\"x\":{\"comment\":\"missed; not sure we should add it, but no others except `cursor` is using it so it's ok for now; https://drafts.csswg.org/css-ui-3/#cursor\",\"syntax\":\"<number>\"},\"y\":{\"comment\":\"missed; not sure we should add it, but no others except `cursor` is using so it's ok for now; https://drafts.csswg.org/css-ui-3/#cursor\",\"syntax\":\"<number>\"},\"declaration\":{\"comment\":\"missed, restored by https://drafts.csswg.org/css-syntax\",\"syntax\":\"<ident-token> : <declaration-value>? [ '!' important ]?\"},\"declaration-list\":{\"comment\":\"missed, restored by https://drafts.csswg.org/css-syntax\",\"syntax\":\"[ <declaration>? ';' ]* <declaration>?\"},\"url\":{\"comment\":\"https://drafts.csswg.org/css-values-4/#urls\",\"syntax\":\"url( <string> <url-modifier>* ) | <url-token>\"},\"url-modifier\":{\"comment\":\"https://drafts.csswg.org/css-values-4/#typedef-url-modifier\",\"syntax\":\"<ident> | <function-token> <any-value> )\"},\"number-zero-one\":{\"syntax\":\"<number [0,1]>\"},\"number-one-or-greater\":{\"syntax\":\"<number [1,∞]>\"},\"color()\":{\"syntax\":\"color( <colorspace-params> [ / [ <alpha-value> | none ] ]? )\"},\"colorspace-params\":{\"syntax\":\"[ <predefined-rgb-params> | <xyz-params>]\"},\"xyz-params\":{\"syntax\":\"<xyz-space> [ <number> | <percentage> | none ]{3}\"},\"xyz-space\":{\"syntax\":\"xyz | xyz-d50 | xyz-d65\"},\"query-in-parens\":{\"comment\":\"missed, https://drafts.csswg.org/css-contain-3/#container-rule\",\"syntax\":\"( <container-condition> ) | ( <size-feature> ) | style( <style-query> ) | <general-enclosed>\"},\"size-feature\":{\"comment\":\"missed, https://drafts.csswg.org/css-contain-3/#typedef-size-feature\",\"syntax\":\"<mf-plain> | <mf-boolean> | <mf-range>\"},\"style-query\":{\"comment\":\"missed, https://drafts.csswg.org/css-contain-3/#container-rule\",\"syntax\":\"<style-condition> | <style-feature>\"},\"style-condition\":{\"comment\":\"missed, https://drafts.csswg.org/css-contain-3/#container-rule\",\"syntax\":\"not <style-in-parens> | <style-in-parens> [ [ and <style-in-parens> ]* | [ or <style-in-parens> ]* ]\"},\"style-in-parens\":{\"comment\":\"missed, https://drafts.csswg.org/css-contain-3/#container-rule\",\"syntax\":\"( <style-condition> ) | ( <style-feature> ) | <general-enclosed>\"},\"-non-standard-display\":{\"syntax\":\"-ms-inline-flexbox | -ms-grid | -ms-inline-grid | -webkit-flex | -webkit-inline-flex | -webkit-box | -webkit-inline-box | -moz-inline-stack | -moz-box | -moz-inline-box\"},\"inset-area\":{\"syntax\":\"[ [ left | center | right | span-left | span-right | x-start | x-end | span-x-start | span-x-end | x-self-start | x-self-end | span-x-self-start | span-x-self-end | span-all ] || [ top | center | bottom | span-top | span-bottom | y-start | y-end | span-y-start | span-y-end | y-self-start | y-self-end | span-y-self-start | span-y-self-end | span-all ] | [ block-start | center | block-end | span-block-start | span-block-end | span-all ] || [ inline-start | center | inline-end | span-inline-start | span-inline-end | span-all ] | [ self-block-start | self-block-end | span-self-block-start | span-self-block-end | span-all ] || [ self-inline-start | self-inline-end | span-self-inline-start | span-self-inline-end | span-all ] | [ start | center | end | span-start | span-end | span-all ]{1,2} | [ self-start | center | self-end | span-self-start | span-self-end | span-all ]{1,2} ]\",\"comment\":\"initial name for <position-area> before renamed\",\"references\":[\"https://www.w3.org/TR/css-anchor-position-1/#inset-area\"]},\"position-area\":{\"syntax\":\"[ [ left | center | right | span-left | span-right | x-start | x-end | span-x-start | span-x-end | x-self-start | x-self-end | span-x-self-start | span-x-self-end | span-all ] || [ top | center | bottom | span-top | span-bottom | y-start | y-end | span-y-start | span-y-end | y-self-start | y-self-end | span-y-self-start | span-y-self-end | span-all ] | [ block-start | center | block-end | span-block-start | span-block-end | span-all ] || [ inline-start | center | inline-end | span-inline-start | span-inline-end | span-all ] | [ self-block-start | center | self-block-end | span-self-block-start | span-self-block-end | span-all ] || [ self-inline-start | center | self-inline-end | span-self-inline-start | span-self-inline-end | span-all ] | [ start | center | end | span-start | span-end | span-all ]{1,2} | [ self-start | center | self-end | span-self-start | span-self-end | span-all ]{1,2} ]\",\"comment\":\"replaced <inset-area>\",\"references\":[\"https://drafts.csswg.org/css-anchor-position-1/#typedef-position-area\"]},\"syntax\":{\"syntax\":\"'*' | <syntax-component> [ <syntax-combinator> <syntax-component> ]* | <syntax-string>\"},\"syntax-component\":{\"syntax\":\"<syntax-single-component> <syntax-multiplier>? | '<' transform-list '>'\"},\"syntax-single-component\":{\"syntax\":\"'<' <syntax-type-name> '>' | <ident>\"},\"syntax-type-name\":{\"syntax\":\"angle | color | custom-ident | image | integer | length | length-percentage | number | percentage | resolution | string | time | url | transform-function\"},\"syntax-combinator\":{\"syntax\":\"'|'\"},\"syntax-multiplier\":{\"syntax\":\"'#' | '+'\"},\"syntax-string\":{\"syntax\":\"<string>\"}}}"));}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/data-patch.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const patch = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/data/patch.json (json)");
const patch$1 = patch;
module.exports = patch$1;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/data.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const dataPatch = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/data-patch.cjs [app-ssr] (ecmascript)");
const mdnAtrules = __turbopack_context__.r("[project]/node_modules/.pnpm/mdn-data@2.27.1/node_modules/mdn-data/css/at-rules.json (json)");
const mdnProperties = __turbopack_context__.r("[project]/node_modules/.pnpm/mdn-data@2.27.1/node_modules/mdn-data/css/properties.json (json)");
const mdnSyntaxes = __turbopack_context__.r("[project]/node_modules/.pnpm/mdn-data@2.27.1/node_modules/mdn-data/css/syntaxes.json (json)");
const hasOwn = Object.hasOwn || ((object, property)=>Object.prototype.hasOwnProperty.call(object, property));
const extendSyntax = /^\s*\|\s*/;
function preprocessAtrules(dict) {
    const result = Object.create(null);
    for (const [atruleName, atrule] of Object.entries(dict)){
        let descriptors = null;
        if (atrule.descriptors) {
            descriptors = Object.create(null);
            for (const [name, descriptor] of Object.entries(atrule.descriptors)){
                descriptors[name] = descriptor.syntax;
            }
        }
        result[atruleName.substr(1)] = {
            prelude: atrule.syntax.trim().replace(/\{(.|\s)+\}/, '').match(/^@\S+\s+([^;\{]*)/)[1].trim() || null,
            descriptors
        };
    }
    return result;
}
function patchDictionary(dict, patchDict) {
    const result = Object.create(null);
    // copy all syntaxes for an original dict
    for (const [key, value] of Object.entries(dict)){
        if (value) {
            result[key] = value.syntax || value;
        }
    }
    // apply a patch
    for (const key of Object.keys(patchDict)){
        if (hasOwn(dict, key)) {
            if (patchDict[key].syntax) {
                result[key] = extendSyntax.test(patchDict[key].syntax) ? result[key] + ' ' + patchDict[key].syntax.trim() : patchDict[key].syntax;
            } else {
                delete result[key];
            }
        } else {
            if (patchDict[key].syntax) {
                result[key] = patchDict[key].syntax.replace(extendSyntax, '');
            }
        }
    }
    return result;
}
function preprocessPatchAtrulesDescritors(declarations) {
    const result = {};
    for (const [key, value] of Object.entries(declarations || {})){
        result[key] = typeof value === 'string' ? {
            syntax: value
        } : value;
    }
    return result;
}
function patchAtrules(dict, patchDict) {
    const result = {};
    // copy all syntaxes for an original dict
    for(const key in dict){
        if (patchDict[key] === null) {
            continue;
        }
        const atrulePatch = patchDict[key] || {};
        result[key] = {
            prelude: key in patchDict && 'prelude' in atrulePatch ? atrulePatch.prelude : dict[key].prelude || null,
            descriptors: patchDictionary(dict[key].descriptors || {}, preprocessPatchAtrulesDescritors(atrulePatch.descriptors))
        };
    }
    // apply a patch
    for (const [key, atrulePatch] of Object.entries(patchDict)){
        if (atrulePatch && !hasOwn(dict, key)) {
            result[key] = {
                prelude: atrulePatch.prelude || null,
                descriptors: atrulePatch.descriptors ? patchDictionary({}, preprocessPatchAtrulesDescritors(atrulePatch.descriptors)) : null
            };
        }
    }
    return result;
}
const definitions = {
    types: patchDictionary(mdnSyntaxes, dataPatch.types),
    atrules: patchAtrules(preprocessAtrules(mdnAtrules), dataPatch.atrules),
    properties: patchDictionary(mdnProperties, dataPatch.properties)
};
module.exports = definitions;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/AnPlusB.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const charCodeDefinitions = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/char-code-definitions.cjs [app-ssr] (ecmascript)");
const PLUSSIGN = 0x002B; // U+002B PLUS SIGN (+)
const HYPHENMINUS = 0x002D; // U+002D HYPHEN-MINUS (-)
const N = 0x006E; // U+006E LATIN SMALL LETTER N (n)
const DISALLOW_SIGN = true;
const ALLOW_SIGN = false;
function checkInteger(offset, disallowSign) {
    let pos = this.tokenStart + offset;
    const code = this.charCodeAt(pos);
    if (code === PLUSSIGN || code === HYPHENMINUS) {
        if (disallowSign) {
            this.error('Number sign is not allowed');
        }
        pos++;
    }
    for(; pos < this.tokenEnd; pos++){
        if (!charCodeDefinitions.isDigit(this.charCodeAt(pos))) {
            this.error('Integer is expected', pos);
        }
    }
}
function checkTokenIsInteger(disallowSign) {
    return checkInteger.call(this, 0, disallowSign);
}
function expectCharCode(offset, code) {
    if (!this.cmpChar(this.tokenStart + offset, code)) {
        let msg = '';
        switch(code){
            case N:
                msg = 'N is expected';
                break;
            case HYPHENMINUS:
                msg = 'HyphenMinus is expected';
                break;
        }
        this.error(msg, this.tokenStart + offset);
    }
}
// ... <signed-integer>
// ... ['+' | '-'] <signless-integer>
function consumeB() {
    let offset = 0;
    let sign = 0;
    let type = this.tokenType;
    while(type === types.WhiteSpace || type === types.Comment){
        type = this.lookupType(++offset);
    }
    if (type !== types.Number) {
        if (this.isDelim(PLUSSIGN, offset) || this.isDelim(HYPHENMINUS, offset)) {
            sign = this.isDelim(PLUSSIGN, offset) ? PLUSSIGN : HYPHENMINUS;
            do {
                type = this.lookupType(++offset);
            }while (type === types.WhiteSpace || type === types.Comment)
            if (type !== types.Number) {
                this.skip(offset);
                checkTokenIsInteger.call(this, DISALLOW_SIGN);
            }
        } else {
            return null;
        }
    }
    if (offset > 0) {
        this.skip(offset);
    }
    if (sign === 0) {
        type = this.charCodeAt(this.tokenStart);
        if (type !== PLUSSIGN && type !== HYPHENMINUS) {
            this.error('Number sign is expected');
        }
    }
    checkTokenIsInteger.call(this, sign !== 0);
    return sign === HYPHENMINUS ? '-' + this.consume(types.Number) : this.consume(types.Number);
}
// An+B microsyntax https://www.w3.org/TR/css-syntax-3/#anb
const name = 'AnPlusB';
const structure = {
    a: [
        String,
        null
    ],
    b: [
        String,
        null
    ]
};
function parse() {
    /* eslint-disable brace-style*/ const start = this.tokenStart;
    let a = null;
    let b = null;
    // <integer>
    if (this.tokenType === types.Number) {
        checkTokenIsInteger.call(this, ALLOW_SIGN);
        b = this.consume(types.Number);
    } else if (this.tokenType === types.Ident && this.cmpChar(this.tokenStart, HYPHENMINUS)) {
        a = '-1';
        expectCharCode.call(this, 1, N);
        switch(this.tokenEnd - this.tokenStart){
            // -n
            // -n <signed-integer>
            // -n ['+' | '-'] <signless-integer>
            case 2:
                this.next();
                b = consumeB.call(this);
                break;
            // -n- <signless-integer>
            case 3:
                expectCharCode.call(this, 2, HYPHENMINUS);
                this.next();
                this.skipSC();
                checkTokenIsInteger.call(this, DISALLOW_SIGN);
                b = '-' + this.consume(types.Number);
                break;
            // <dashndashdigit-ident>
            default:
                expectCharCode.call(this, 2, HYPHENMINUS);
                checkInteger.call(this, 3, DISALLOW_SIGN);
                this.next();
                b = this.substrToCursor(start + 2);
        }
    } else if (this.tokenType === types.Ident || this.isDelim(PLUSSIGN) && this.lookupType(1) === types.Ident) {
        let sign = 0;
        a = '1';
        // just ignore a plus
        if (this.isDelim(PLUSSIGN)) {
            sign = 1;
            this.next();
        }
        expectCharCode.call(this, 0, N);
        switch(this.tokenEnd - this.tokenStart){
            // '+'? n
            // '+'? n <signed-integer>
            // '+'? n ['+' | '-'] <signless-integer>
            case 1:
                this.next();
                b = consumeB.call(this);
                break;
            // '+'? n- <signless-integer>
            case 2:
                expectCharCode.call(this, 1, HYPHENMINUS);
                this.next();
                this.skipSC();
                checkTokenIsInteger.call(this, DISALLOW_SIGN);
                b = '-' + this.consume(types.Number);
                break;
            // '+'? <ndashdigit-ident>
            default:
                expectCharCode.call(this, 1, HYPHENMINUS);
                checkInteger.call(this, 2, DISALLOW_SIGN);
                this.next();
                b = this.substrToCursor(start + sign + 1);
        }
    } else if (this.tokenType === types.Dimension) {
        const code = this.charCodeAt(this.tokenStart);
        const sign = code === PLUSSIGN || code === HYPHENMINUS;
        let i = this.tokenStart + sign;
        for(; i < this.tokenEnd; i++){
            if (!charCodeDefinitions.isDigit(this.charCodeAt(i))) {
                break;
            }
        }
        if (i === this.tokenStart + sign) {
            this.error('Integer is expected', this.tokenStart + sign);
        }
        expectCharCode.call(this, i - this.tokenStart, N);
        a = this.substring(start, i);
        // <n-dimension>
        // <n-dimension> <signed-integer>
        // <n-dimension> ['+' | '-'] <signless-integer>
        if (i + 1 === this.tokenEnd) {
            this.next();
            b = consumeB.call(this);
        } else {
            expectCharCode.call(this, i - this.tokenStart + 1, HYPHENMINUS);
            // <ndash-dimension> <signless-integer>
            if (i + 2 === this.tokenEnd) {
                this.next();
                this.skipSC();
                checkTokenIsInteger.call(this, DISALLOW_SIGN);
                b = '-' + this.consume(types.Number);
            } else {
                checkInteger.call(this, i - this.tokenStart + 2, DISALLOW_SIGN);
                this.next();
                b = this.substrToCursor(i + 1);
            }
        }
    } else {
        this.error();
    }
    if (a !== null && a.charCodeAt(0) === PLUSSIGN) {
        a = a.substr(1);
    }
    if (b !== null && b.charCodeAt(0) === PLUSSIGN) {
        b = b.substr(1);
    }
    return {
        type: 'AnPlusB',
        loc: this.getLocation(start, this.tokenStart),
        a,
        b
    };
}
function generate(node) {
    if (node.a) {
        const a = node.a === '+1' && 'n' || node.a === '1' && 'n' || node.a === '-1' && '-n' || node.a + 'n';
        if (node.b) {
            const b = node.b[0] === '-' || node.b[0] === '+' ? node.b : '+' + node.b;
            this.tokenize(a + b);
        } else {
            this.tokenize(a);
        }
    } else {
        this.tokenize(node.b);
    }
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Atrule.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
function consumeRaw() {
    return this.Raw(this.consumeUntilLeftCurlyBracketOrSemicolon, true);
}
function isDeclarationBlockAtrule() {
    for(let offset = 1, type; type = this.lookupType(offset); offset++){
        if (type === types.RightCurlyBracket) {
            return true;
        }
        if (type === types.LeftCurlyBracket || type === types.AtKeyword) {
            return false;
        }
    }
    return false;
}
const name = 'Atrule';
const walkContext = 'atrule';
const structure = {
    name: String,
    prelude: [
        'AtrulePrelude',
        'Raw',
        null
    ],
    block: [
        'Block',
        null
    ]
};
function parse(isDeclaration = false) {
    const start = this.tokenStart;
    let name;
    let nameLowerCase;
    let prelude = null;
    let block = null;
    this.eat(types.AtKeyword);
    name = this.substrToCursor(start + 1);
    nameLowerCase = name.toLowerCase();
    this.skipSC();
    // parse prelude
    if (this.eof === false && this.tokenType !== types.LeftCurlyBracket && this.tokenType !== types.Semicolon) {
        if (this.parseAtrulePrelude) {
            prelude = this.parseWithFallback(this.AtrulePrelude.bind(this, name, isDeclaration), consumeRaw);
        } else {
            prelude = consumeRaw.call(this, this.tokenIndex);
        }
        this.skipSC();
    }
    switch(this.tokenType){
        case types.Semicolon:
            this.next();
            break;
        case types.LeftCurlyBracket:
            if (hasOwnProperty.call(this.atrule, nameLowerCase) && typeof this.atrule[nameLowerCase].block === 'function') {
                block = this.atrule[nameLowerCase].block.call(this, isDeclaration);
            } else {
                // TODO: should consume block content as Raw?
                block = this.Block(isDeclarationBlockAtrule.call(this));
            }
            break;
    }
    return {
        type: 'Atrule',
        loc: this.getLocation(start, this.tokenStart),
        name,
        prelude,
        block
    };
}
function generate(node) {
    this.token(types.AtKeyword, '@' + node.name);
    if (node.prelude !== null) {
        this.node(node.prelude);
    }
    if (node.block) {
        this.node(node.block);
    } else {
        this.token(types.Semicolon, ';');
    }
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
exports.walkContext = walkContext;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/AtrulePrelude.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const name = 'AtrulePrelude';
const walkContext = 'atrulePrelude';
const structure = {
    children: [
        []
    ]
};
function parse(name) {
    let children = null;
    if (name !== null) {
        name = name.toLowerCase();
    }
    this.skipSC();
    if (hasOwnProperty.call(this.atrule, name) && typeof this.atrule[name].prelude === 'function') {
        // custom consumer
        children = this.atrule[name].prelude.call(this);
    } else {
        // default consumer
        children = this.readSequence(this.scope.AtrulePrelude);
    }
    this.skipSC();
    if (this.eof !== true && this.tokenType !== types.LeftCurlyBracket && this.tokenType !== types.Semicolon) {
        this.error('Semicolon or block is expected');
    }
    return {
        type: 'AtrulePrelude',
        loc: this.getLocationFromList(children),
        children
    };
}
function generate(node) {
    this.children(node);
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
exports.walkContext = walkContext;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/AttributeSelector.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const DOLLARSIGN = 0x0024; // U+0024 DOLLAR SIGN ($)
const ASTERISK = 0x002A; // U+002A ASTERISK (*)
const EQUALSSIGN = 0x003D; // U+003D EQUALS SIGN (=)
const CIRCUMFLEXACCENT = 0x005E; // U+005E (^)
const VERTICALLINE = 0x007C; // U+007C VERTICAL LINE (|)
const TILDE = 0x007E; // U+007E TILDE (~)
function getAttributeName() {
    if (this.eof) {
        this.error('Unexpected end of input');
    }
    const start = this.tokenStart;
    let expectIdent = false;
    if (this.isDelim(ASTERISK)) {
        expectIdent = true;
        this.next();
    } else if (!this.isDelim(VERTICALLINE)) {
        this.eat(types.Ident);
    }
    if (this.isDelim(VERTICALLINE)) {
        if (this.charCodeAt(this.tokenStart + 1) !== EQUALSSIGN) {
            this.next();
            this.eat(types.Ident);
        } else if (expectIdent) {
            this.error('Identifier is expected', this.tokenEnd);
        }
    } else if (expectIdent) {
        this.error('Vertical line is expected');
    }
    return {
        type: 'Identifier',
        loc: this.getLocation(start, this.tokenStart),
        name: this.substrToCursor(start)
    };
}
function getOperator() {
    const start = this.tokenStart;
    const code = this.charCodeAt(start);
    if (code !== EQUALSSIGN && // =
    code !== TILDE && // ~=
    code !== CIRCUMFLEXACCENT && // ^=
    code !== DOLLARSIGN && // $=
    code !== ASTERISK && // *=
    code !== VERTICALLINE // |=
    ) {
        this.error('Attribute selector (=, ~=, ^=, $=, *=, |=) is expected');
    }
    this.next();
    if (code !== EQUALSSIGN) {
        if (!this.isDelim(EQUALSSIGN)) {
            this.error('Equal sign is expected');
        }
        this.next();
    }
    return this.substrToCursor(start);
}
// '[' <wq-name> ']'
// '[' <wq-name> <attr-matcher> [ <string-token> | <ident-token> ] <attr-modifier>? ']'
const name = 'AttributeSelector';
const structure = {
    name: 'Identifier',
    matcher: [
        String,
        null
    ],
    value: [
        'String',
        'Identifier',
        null
    ],
    flags: [
        String,
        null
    ]
};
function parse() {
    const start = this.tokenStart;
    let name;
    let matcher = null;
    let value = null;
    let flags = null;
    this.eat(types.LeftSquareBracket);
    this.skipSC();
    name = getAttributeName.call(this);
    this.skipSC();
    if (this.tokenType !== types.RightSquareBracket) {
        // avoid case `[name i]`
        if (this.tokenType !== types.Ident) {
            matcher = getOperator.call(this);
            this.skipSC();
            value = this.tokenType === types.String ? this.String() : this.Identifier();
            this.skipSC();
        }
        // attribute flags
        if (this.tokenType === types.Ident) {
            flags = this.consume(types.Ident);
            this.skipSC();
        }
    }
    this.eat(types.RightSquareBracket);
    return {
        type: 'AttributeSelector',
        loc: this.getLocation(start, this.tokenStart),
        name,
        matcher,
        value,
        flags
    };
}
function generate(node) {
    this.token(types.Delim, '[');
    this.node(node.name);
    if (node.matcher !== null) {
        this.tokenize(node.matcher);
        this.node(node.value);
    }
    if (node.flags !== null) {
        this.token(types.Ident, node.flags);
    }
    this.token(types.Delim, ']');
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Block.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const AMPERSAND = 0x0026; // U+0026 AMPERSAND (&)
function consumeRaw() {
    return this.Raw(null, true);
}
function consumeRule() {
    return this.parseWithFallback(this.Rule, consumeRaw);
}
function consumeRawDeclaration() {
    return this.Raw(this.consumeUntilSemicolonIncluded, true);
}
function consumeDeclaration() {
    if (this.tokenType === types.Semicolon) {
        return consumeRawDeclaration.call(this, this.tokenIndex);
    }
    const node = this.parseWithFallback(this.Declaration, consumeRawDeclaration);
    if (this.tokenType === types.Semicolon) {
        this.next();
    }
    return node;
}
const name = 'Block';
const walkContext = 'block';
const structure = {
    children: [
        [
            'Atrule',
            'Rule',
            'Declaration'
        ]
    ]
};
function parse(isStyleBlock) {
    const consumer = isStyleBlock ? consumeDeclaration : consumeRule;
    const start = this.tokenStart;
    let children = this.createList();
    this.eat(types.LeftCurlyBracket);
    scan: while(!this.eof){
        switch(this.tokenType){
            case types.RightCurlyBracket:
                break scan;
            case types.WhiteSpace:
            case types.Comment:
                this.next();
                break;
            case types.AtKeyword:
                children.push(this.parseWithFallback(this.Atrule.bind(this, isStyleBlock), consumeRaw));
                break;
            default:
                if (isStyleBlock && this.isDelim(AMPERSAND)) {
                    children.push(consumeRule.call(this));
                } else {
                    children.push(consumer.call(this));
                }
        }
    }
    if (!this.eof) {
        this.eat(types.RightCurlyBracket);
    }
    return {
        type: 'Block',
        loc: this.getLocation(start, this.tokenStart),
        children
    };
}
function generate(node) {
    this.token(types.LeftCurlyBracket, '{');
    this.children(node, (prev)=>{
        if (prev.type === 'Declaration') {
            this.token(types.Semicolon, ';');
        }
    });
    this.token(types.RightCurlyBracket, '}');
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
exports.walkContext = walkContext;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Brackets.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const name = 'Brackets';
const structure = {
    children: [
        []
    ]
};
function parse(readSequence, recognizer) {
    const start = this.tokenStart;
    let children = null;
    this.eat(types.LeftSquareBracket);
    children = readSequence.call(this, recognizer);
    if (!this.eof) {
        this.eat(types.RightSquareBracket);
    }
    return {
        type: 'Brackets',
        loc: this.getLocation(start, this.tokenStart),
        children
    };
}
function generate(node) {
    this.token(types.Delim, '[');
    this.children(node);
    this.token(types.Delim, ']');
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/CDC.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const name = 'CDC';
const structure = [];
function parse() {
    const start = this.tokenStart;
    this.eat(types.CDC); // -->
    return {
        type: 'CDC',
        loc: this.getLocation(start, this.tokenStart)
    };
}
function generate() {
    this.token(types.CDC, '-->');
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/CDO.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const name = 'CDO';
const structure = [];
function parse() {
    const start = this.tokenStart;
    this.eat(types.CDO); // <!--
    return {
        type: 'CDO',
        loc: this.getLocation(start, this.tokenStart)
    };
}
function generate() {
    this.token(types.CDO, '<!--');
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/ClassSelector.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const FULLSTOP = 0x002E; // U+002E FULL STOP (.)
// '.' ident
const name = 'ClassSelector';
const structure = {
    name: String
};
function parse() {
    this.eatDelim(FULLSTOP);
    return {
        type: 'ClassSelector',
        loc: this.getLocation(this.tokenStart - 1, this.tokenEnd),
        name: this.consume(types.Ident)
    };
}
function generate(node) {
    this.token(types.Delim, '.');
    this.token(types.Ident, node.name);
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Combinator.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const PLUSSIGN = 0x002B; // U+002B PLUS SIGN (+)
const SOLIDUS = 0x002F; // U+002F SOLIDUS (/)
const GREATERTHANSIGN = 0x003E; // U+003E GREATER-THAN SIGN (>)
const TILDE = 0x007E; // U+007E TILDE (~)
const name = 'Combinator';
const structure = {
    name: String
};
// + | > | ~ | /deep/
function parse() {
    const start = this.tokenStart;
    let name;
    switch(this.tokenType){
        case types.WhiteSpace:
            name = ' ';
            break;
        case types.Delim:
            switch(this.charCodeAt(this.tokenStart)){
                case GREATERTHANSIGN:
                case PLUSSIGN:
                case TILDE:
                    this.next();
                    break;
                case SOLIDUS:
                    this.next();
                    this.eatIdent('deep');
                    this.eatDelim(SOLIDUS);
                    break;
                default:
                    this.error('Combinator is expected');
            }
            name = this.substrToCursor(start);
            break;
    }
    return {
        type: 'Combinator',
        loc: this.getLocation(start, this.tokenStart),
        name
    };
}
function generate(node) {
    this.tokenize(node.name);
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Comment.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const ASTERISK = 0x002A; // U+002A ASTERISK (*)
const SOLIDUS = 0x002F; // U+002F SOLIDUS (/)
const name = 'Comment';
const structure = {
    value: String
};
function parse() {
    const start = this.tokenStart;
    let end = this.tokenEnd;
    this.eat(types.Comment);
    if (end - start + 2 >= 2 && this.charCodeAt(end - 2) === ASTERISK && this.charCodeAt(end - 1) === SOLIDUS) {
        end -= 2;
    }
    return {
        type: 'Comment',
        loc: this.getLocation(start, this.tokenStart),
        value: this.substring(start + 2, end)
    };
}
function generate(node) {
    this.token(types.Comment, '/*' + node.value + '*/');
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Condition.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const likelyFeatureToken = new Set([
    types.Colon,
    types.RightParenthesis,
    types.EOF
]);
const name = 'Condition';
const structure = {
    kind: String,
    children: [
        [
            'Identifier',
            'Feature',
            'FeatureFunction',
            'FeatureRange',
            'SupportsDeclaration'
        ]
    ]
};
function featureOrRange(kind) {
    if (this.lookupTypeNonSC(1) === types.Ident && likelyFeatureToken.has(this.lookupTypeNonSC(2))) {
        return this.Feature(kind);
    }
    return this.FeatureRange(kind);
}
const parentheses = {
    media: featureOrRange,
    container: featureOrRange,
    supports () {
        return this.SupportsDeclaration();
    }
};
function parse(kind = 'media') {
    const children = this.createList();
    scan: while(!this.eof){
        switch(this.tokenType){
            case types.Comment:
            case types.WhiteSpace:
                this.next();
                continue;
            case types.Ident:
                children.push(this.Identifier());
                break;
            case types.LeftParenthesis:
                {
                    let term = this.parseWithFallback(()=>parentheses[kind].call(this, kind), ()=>null);
                    if (!term) {
                        term = this.parseWithFallback(()=>{
                            this.eat(types.LeftParenthesis);
                            const res = this.Condition(kind);
                            this.eat(types.RightParenthesis);
                            return res;
                        }, ()=>{
                            return this.GeneralEnclosed(kind);
                        });
                    }
                    children.push(term);
                    break;
                }
            case types.Function:
                {
                    let term = this.parseWithFallback(()=>this.FeatureFunction(kind), ()=>null);
                    if (!term) {
                        term = this.GeneralEnclosed(kind);
                    }
                    children.push(term);
                    break;
                }
            default:
                break scan;
        }
    }
    if (children.isEmpty) {
        this.error('Condition is expected');
    }
    return {
        type: 'Condition',
        loc: this.getLocationFromList(children),
        kind,
        children
    };
}
function generate(node) {
    node.children.forEach((child)=>{
        if (child.type === 'Condition') {
            this.token(types.LeftParenthesis, '(');
            this.node(child);
            this.token(types.RightParenthesis, ')');
        } else {
            this.node(child);
        }
    });
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Declaration.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const names = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/utils/names.cjs [app-ssr] (ecmascript)");
const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const EXCLAMATIONMARK = 0x0021; // U+0021 EXCLAMATION MARK (!)
const NUMBERSIGN = 0x0023; // U+0023 NUMBER SIGN (#)
const DOLLARSIGN = 0x0024; // U+0024 DOLLAR SIGN ($)
const AMPERSAND = 0x0026; // U+0026 AMPERSAND (&)
const ASTERISK = 0x002A; // U+002A ASTERISK (*)
const PLUSSIGN = 0x002B; // U+002B PLUS SIGN (+)
const SOLIDUS = 0x002F; // U+002F SOLIDUS (/)
function consumeValueRaw() {
    return this.Raw(this.consumeUntilExclamationMarkOrSemicolon, true);
}
function consumeCustomPropertyRaw() {
    return this.Raw(this.consumeUntilExclamationMarkOrSemicolon, false);
}
function consumeValue() {
    const startValueToken = this.tokenIndex;
    const value = this.Value();
    if (value.type !== 'Raw' && this.eof === false && this.tokenType !== types.Semicolon && this.isDelim(EXCLAMATIONMARK) === false && this.isBalanceEdge(startValueToken) === false) {
        this.error();
    }
    return value;
}
const name = 'Declaration';
const walkContext = 'declaration';
const structure = {
    important: [
        Boolean,
        String
    ],
    property: String,
    value: [
        'Value',
        'Raw'
    ]
};
function parse() {
    const start = this.tokenStart;
    const startToken = this.tokenIndex;
    const property = readProperty.call(this);
    const customProperty = names.isCustomProperty(property);
    const parseValue = customProperty ? this.parseCustomProperty : this.parseValue;
    const consumeRaw = customProperty ? consumeCustomPropertyRaw : consumeValueRaw;
    let important = false;
    let value;
    this.skipSC();
    this.eat(types.Colon);
    const valueStart = this.tokenIndex;
    if (!customProperty) {
        this.skipSC();
    }
    if (parseValue) {
        value = this.parseWithFallback(consumeValue, consumeRaw);
    } else {
        value = consumeRaw.call(this, this.tokenIndex);
    }
    if (customProperty && value.type === 'Value' && value.children.isEmpty) {
        for(let offset = valueStart - this.tokenIndex; offset <= 0; offset++){
            if (this.lookupType(offset) === types.WhiteSpace) {
                value.children.appendData({
                    type: 'WhiteSpace',
                    loc: null,
                    value: ' '
                });
                break;
            }
        }
    }
    if (this.isDelim(EXCLAMATIONMARK)) {
        important = getImportant.call(this);
        this.skipSC();
    }
    // Do not include semicolon to range per spec
    // https://drafts.csswg.org/css-syntax/#declaration-diagram
    if (this.eof === false && this.tokenType !== types.Semicolon && this.isBalanceEdge(startToken) === false) {
        this.error();
    }
    return {
        type: 'Declaration',
        loc: this.getLocation(start, this.tokenStart),
        important,
        property,
        value
    };
}
function generate(node) {
    this.token(types.Ident, node.property);
    this.token(types.Colon, ':');
    this.node(node.value);
    if (node.important) {
        this.token(types.Delim, '!');
        this.token(types.Ident, node.important === true ? 'important' : node.important);
    }
}
function readProperty() {
    const start = this.tokenStart;
    // hacks
    if (this.tokenType === types.Delim) {
        switch(this.charCodeAt(this.tokenStart)){
            case ASTERISK:
            case DOLLARSIGN:
            case PLUSSIGN:
            case NUMBERSIGN:
            case AMPERSAND:
                this.next();
                break;
            // TODO: not sure we should support this hack
            case SOLIDUS:
                this.next();
                if (this.isDelim(SOLIDUS)) {
                    this.next();
                }
                break;
        }
    }
    if (this.tokenType === types.Hash) {
        this.eat(types.Hash);
    } else {
        this.eat(types.Ident);
    }
    return this.substrToCursor(start);
}
// ! ws* important
function getImportant() {
    this.eat(types.Delim);
    this.skipSC();
    const important = this.consume(types.Ident);
    // store original value in case it differ from `important`
    // for better original source restoring and hacks like `!ie` support
    return important === 'important' ? true : important;
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
exports.walkContext = walkContext;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/DeclarationList.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const AMPERSAND = 0x0026; // U+0026 AMPERSAND (&)
function consumeRaw() {
    return this.Raw(this.consumeUntilSemicolonIncluded, true);
}
const name = 'DeclarationList';
const structure = {
    children: [
        [
            'Declaration',
            'Atrule',
            'Rule'
        ]
    ]
};
function parse() {
    const children = this.createList();
    while(!this.eof){
        switch(this.tokenType){
            case types.WhiteSpace:
            case types.Comment:
            case types.Semicolon:
                this.next();
                break;
            case types.AtKeyword:
                children.push(this.parseWithFallback(this.Atrule.bind(this, true), consumeRaw));
                break;
            default:
                if (this.isDelim(AMPERSAND)) {
                    children.push(this.parseWithFallback(this.Rule, consumeRaw));
                } else {
                    children.push(this.parseWithFallback(this.Declaration, consumeRaw));
                }
        }
    }
    return {
        type: 'DeclarationList',
        loc: this.getLocationFromList(children),
        children
    };
}
function generate(node) {
    this.children(node, (prev)=>{
        if (prev.type === 'Declaration') {
            this.token(types.Semicolon, ';');
        }
    });
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Dimension.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const name = 'Dimension';
const structure = {
    value: String,
    unit: String
};
function parse() {
    const start = this.tokenStart;
    const value = this.consumeNumber(types.Dimension);
    return {
        type: 'Dimension',
        loc: this.getLocation(start, this.tokenStart),
        value,
        unit: this.substring(start + value.length, this.tokenStart)
    };
}
function generate(node) {
    this.token(types.Dimension, node.value + node.unit);
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Feature.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const SOLIDUS = 0x002F; // U+002F SOLIDUS (/)
const name = 'Feature';
const structure = {
    kind: String,
    name: String,
    value: [
        'Identifier',
        'Number',
        'Dimension',
        'Ratio',
        'Function',
        null
    ]
};
function parse(kind) {
    const start = this.tokenStart;
    let name;
    let value = null;
    this.eat(types.LeftParenthesis);
    this.skipSC();
    name = this.consume(types.Ident);
    this.skipSC();
    if (this.tokenType !== types.RightParenthesis) {
        this.eat(types.Colon);
        this.skipSC();
        switch(this.tokenType){
            case types.Number:
                if (this.lookupNonWSType(1) === types.Delim) {
                    value = this.Ratio();
                } else {
                    value = this.Number();
                }
                break;
            case types.Dimension:
                value = this.Dimension();
                break;
            case types.Ident:
                value = this.Identifier();
                break;
            case types.Function:
                value = this.parseWithFallback(()=>{
                    const res = this.Function(this.readSequence, this.scope.Value);
                    this.skipSC();
                    if (this.isDelim(SOLIDUS)) {
                        this.error();
                    }
                    return res;
                }, ()=>{
                    return this.Ratio();
                });
                break;
            default:
                this.error('Number, dimension, ratio or identifier is expected');
        }
        this.skipSC();
    }
    if (!this.eof) {
        this.eat(types.RightParenthesis);
    }
    return {
        type: 'Feature',
        loc: this.getLocation(start, this.tokenStart),
        kind,
        name,
        value
    };
}
function generate(node) {
    this.token(types.LeftParenthesis, '(');
    this.token(types.Ident, node.name);
    if (node.value !== null) {
        this.token(types.Colon, ':');
        this.node(node.value);
    }
    this.token(types.RightParenthesis, ')');
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/FeatureFunction.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const name = 'FeatureFunction';
const structure = {
    kind: String,
    feature: String,
    value: [
        'Declaration',
        'Selector'
    ]
};
function getFeatureParser(kind, name) {
    const featuresOfKind = this.features[kind] || {};
    const parser = featuresOfKind[name];
    if (typeof parser !== 'function') {
        this.error(`Unknown feature ${name}()`);
    }
    return parser;
}
function parse(kind = 'unknown') {
    const start = this.tokenStart;
    const functionName = this.consumeFunctionName();
    const valueParser = getFeatureParser.call(this, kind, functionName.toLowerCase());
    this.skipSC();
    const value = this.parseWithFallback(()=>{
        const startValueToken = this.tokenIndex;
        const value = valueParser.call(this);
        if (this.eof === false && this.isBalanceEdge(startValueToken) === false) {
            this.error();
        }
        return value;
    }, ()=>this.Raw(null, false));
    if (!this.eof) {
        this.eat(types.RightParenthesis);
    }
    return {
        type: 'FeatureFunction',
        loc: this.getLocation(start, this.tokenStart),
        kind,
        feature: functionName,
        value
    };
}
function generate(node) {
    this.token(types.Function, node.feature + '(');
    this.node(node.value);
    this.token(types.RightParenthesis, ')');
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/FeatureRange.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const SOLIDUS = 0x002F; // U+002F SOLIDUS (/)
const LESSTHANSIGN = 0x003C; // U+003C LESS-THAN SIGN (<)
const EQUALSSIGN = 0x003D; // U+003D EQUALS SIGN (=)
const GREATERTHANSIGN = 0x003E; // U+003E GREATER-THAN SIGN (>)
const name = 'FeatureRange';
const structure = {
    kind: String,
    left: [
        'Identifier',
        'Number',
        'Dimension',
        'Ratio',
        'Function'
    ],
    leftComparison: String,
    middle: [
        'Identifier',
        'Number',
        'Dimension',
        'Ratio',
        'Function'
    ],
    rightComparison: [
        String,
        null
    ],
    right: [
        'Identifier',
        'Number',
        'Dimension',
        'Ratio',
        'Function',
        null
    ]
};
function readTerm() {
    this.skipSC();
    switch(this.tokenType){
        case types.Number:
            if (this.isDelim(SOLIDUS, this.lookupOffsetNonSC(1))) {
                return this.Ratio();
            } else {
                return this.Number();
            }
        case types.Dimension:
            return this.Dimension();
        case types.Ident:
            return this.Identifier();
        case types.Function:
            return this.parseWithFallback(()=>{
                const res = this.Function(this.readSequence, this.scope.Value);
                this.skipSC();
                if (this.isDelim(SOLIDUS)) {
                    this.error();
                }
                return res;
            }, ()=>{
                return this.Ratio();
            });
        default:
            this.error('Number, dimension, ratio or identifier is expected');
    }
}
function readComparison(expectColon) {
    this.skipSC();
    if (this.isDelim(LESSTHANSIGN) || this.isDelim(GREATERTHANSIGN)) {
        const value = this.source[this.tokenStart];
        this.next();
        if (this.isDelim(EQUALSSIGN)) {
            this.next();
            return value + '=';
        }
        return value;
    }
    if (this.isDelim(EQUALSSIGN)) {
        return '=';
    }
    this.error(`Expected ${expectColon ? '":", ' : ''}"<", ">", "=" or ")"`);
}
function parse(kind = 'unknown') {
    const start = this.tokenStart;
    this.skipSC();
    this.eat(types.LeftParenthesis);
    const left = readTerm.call(this);
    const leftComparison = readComparison.call(this, left.type === 'Identifier');
    const middle = readTerm.call(this);
    let rightComparison = null;
    let right = null;
    if (this.lookupNonWSType(0) !== types.RightParenthesis) {
        rightComparison = readComparison.call(this);
        right = readTerm.call(this);
    }
    this.skipSC();
    this.eat(types.RightParenthesis);
    return {
        type: 'FeatureRange',
        loc: this.getLocation(start, this.tokenStart),
        kind,
        left,
        leftComparison,
        middle,
        rightComparison,
        right
    };
}
function generate(node) {
    this.token(types.LeftParenthesis, '(');
    this.node(node.left);
    this.tokenize(node.leftComparison);
    this.node(node.middle);
    if (node.right) {
        this.tokenize(node.rightComparison);
        this.node(node.right);
    }
    this.token(types.RightParenthesis, ')');
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Function.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const name = 'Function';
const walkContext = 'function';
const structure = {
    name: String,
    children: [
        []
    ]
};
// <function-token> <sequence> )
function parse(readSequence, recognizer) {
    const start = this.tokenStart;
    const name = this.consumeFunctionName();
    const nameLowerCase = name.toLowerCase();
    let children;
    children = recognizer.hasOwnProperty(nameLowerCase) ? recognizer[nameLowerCase].call(this, recognizer) : readSequence.call(this, recognizer);
    if (!this.eof) {
        this.eat(types.RightParenthesis);
    }
    return {
        type: 'Function',
        loc: this.getLocation(start, this.tokenStart),
        name,
        children
    };
}
function generate(node) {
    this.token(types.Function, node.name + '(');
    this.children(node);
    this.token(types.RightParenthesis, ')');
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
exports.walkContext = walkContext;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/GeneralEnclosed.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const name = 'GeneralEnclosed';
const structure = {
    kind: String,
    function: [
        String,
        null
    ],
    children: [
        []
    ]
};
// <function-token> <any-value> )
// ( <any-value> )
function parse(kind) {
    const start = this.tokenStart;
    let functionName = null;
    if (this.tokenType === types.Function) {
        functionName = this.consumeFunctionName();
    } else {
        this.eat(types.LeftParenthesis);
    }
    const children = this.parseWithFallback(()=>{
        const startValueToken = this.tokenIndex;
        const children = this.readSequence(this.scope.Value);
        if (this.eof === false && this.isBalanceEdge(startValueToken) === false) {
            this.error();
        }
        return children;
    }, ()=>this.createSingleNodeList(this.Raw(null, false)));
    if (!this.eof) {
        this.eat(types.RightParenthesis);
    }
    return {
        type: 'GeneralEnclosed',
        loc: this.getLocation(start, this.tokenStart),
        kind,
        function: functionName,
        children
    };
}
function generate(node) {
    if (node.function) {
        this.token(types.Function, node.function + '(');
    } else {
        this.token(types.LeftParenthesis, '(');
    }
    this.children(node);
    this.token(types.RightParenthesis, ')');
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Hash.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
// '#' ident
const xxx = 'XXX';
const name = 'Hash';
const structure = {
    value: String
};
function parse() {
    const start = this.tokenStart;
    this.eat(types.Hash);
    return {
        type: 'Hash',
        loc: this.getLocation(start, this.tokenStart),
        value: this.substrToCursor(start + 1)
    };
}
function generate(node) {
    this.token(types.Hash, '#' + node.value);
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
exports.xxx = xxx;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Identifier.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const name = 'Identifier';
const structure = {
    name: String
};
function parse() {
    return {
        type: 'Identifier',
        loc: this.getLocation(this.tokenStart, this.tokenEnd),
        name: this.consume(types.Ident)
    };
}
function generate(node) {
    this.token(types.Ident, node.name);
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/IdSelector.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const name = 'IdSelector';
const structure = {
    name: String
};
function parse() {
    const start = this.tokenStart;
    // TODO: check value is an ident
    this.eat(types.Hash);
    return {
        type: 'IdSelector',
        loc: this.getLocation(start, this.tokenStart),
        name: this.substrToCursor(start + 1)
    };
}
function generate(node) {
    // Using Delim instead of Hash is a hack to avoid for a whitespace between ident and id-selector
    // in safe mode (e.g. "a#id"), because IE11 doesn't allow a sequence <ident-token> <hash-token>
    // without a whitespace in values (e.g. "1px solid#000")
    this.token(types.Delim, '#' + node.name);
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Layer.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const FULLSTOP = 0x002E; // U+002E FULL STOP (.)
const name = 'Layer';
const structure = {
    name: String
};
function parse() {
    let tokenStart = this.tokenStart;
    let name = this.consume(types.Ident);
    while(this.isDelim(FULLSTOP)){
        this.eat(types.Delim);
        name += '.' + this.consume(types.Ident);
    }
    return {
        type: 'Layer',
        loc: this.getLocation(tokenStart, this.tokenStart),
        name
    };
}
function generate(node) {
    this.tokenize(node.name);
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/LayerList.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const name = 'LayerList';
const structure = {
    children: [
        [
            'Layer'
        ]
    ]
};
function parse() {
    const children = this.createList();
    this.skipSC();
    while(!this.eof){
        children.push(this.Layer());
        if (this.lookupTypeNonSC(0) !== types.Comma) {
            break;
        }
        this.skipSC();
        this.next();
        this.skipSC();
    }
    return {
        type: 'LayerList',
        loc: this.getLocationFromList(children),
        children
    };
}
function generate(node) {
    this.children(node, ()=>this.token(types.Comma, ','));
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/MediaQuery.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const name = 'MediaQuery';
const structure = {
    modifier: [
        String,
        null
    ],
    mediaType: [
        String,
        null
    ],
    condition: [
        'Condition',
        null
    ]
};
function parse() {
    const start = this.tokenStart;
    let modifier = null;
    let mediaType = null;
    let condition = null;
    this.skipSC();
    if (this.tokenType === types.Ident && this.lookupTypeNonSC(1) !== types.LeftParenthesis) {
        // [ not | only ]? <media-type>
        const ident = this.consume(types.Ident);
        const identLowerCase = ident.toLowerCase();
        if (identLowerCase === 'not' || identLowerCase === 'only') {
            this.skipSC();
            modifier = identLowerCase;
            mediaType = this.consume(types.Ident);
        } else {
            mediaType = ident;
        }
        switch(this.lookupTypeNonSC(0)){
            case types.Ident:
                {
                    // and <media-condition-without-or>
                    this.skipSC();
                    this.eatIdent('and');
                    condition = this.Condition('media');
                    break;
                }
            case types.LeftCurlyBracket:
            case types.Semicolon:
            case types.Comma:
            case types.EOF:
                break;
            default:
                this.error('Identifier or parenthesis is expected');
        }
    } else {
        switch(this.tokenType){
            case types.Ident:
            case types.LeftParenthesis:
            case types.Function:
                {
                    // <media-condition>
                    condition = this.Condition('media');
                    break;
                }
            case types.LeftCurlyBracket:
            case types.Semicolon:
            case types.EOF:
                break;
            default:
                this.error('Identifier or parenthesis is expected');
        }
    }
    return {
        type: 'MediaQuery',
        loc: this.getLocation(start, this.tokenStart),
        modifier,
        mediaType,
        condition
    };
}
function generate(node) {
    if (node.mediaType) {
        if (node.modifier) {
            this.token(types.Ident, node.modifier);
        }
        this.token(types.Ident, node.mediaType);
        if (node.condition) {
            this.token(types.Ident, 'and');
            this.node(node.condition);
        }
    } else if (node.condition) {
        this.node(node.condition);
    }
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/MediaQueryList.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const name = 'MediaQueryList';
const structure = {
    children: [
        [
            'MediaQuery'
        ]
    ]
};
function parse() {
    const children = this.createList();
    this.skipSC();
    while(!this.eof){
        children.push(this.MediaQuery());
        if (this.tokenType !== types.Comma) {
            break;
        }
        this.next();
    }
    return {
        type: 'MediaQueryList',
        loc: this.getLocationFromList(children),
        children
    };
}
function generate(node) {
    this.children(node, ()=>this.token(types.Comma, ','));
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/NestingSelector.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const AMPERSAND = 0x0026; // U+0026 AMPERSAND (&)
const name = 'NestingSelector';
const structure = {};
function parse() {
    const start = this.tokenStart;
    this.eatDelim(AMPERSAND);
    return {
        type: 'NestingSelector',
        loc: this.getLocation(start, this.tokenStart)
    };
}
function generate() {
    this.token(types.Delim, '&');
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Nth.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const name = 'Nth';
const structure = {
    nth: [
        'AnPlusB',
        'Identifier'
    ],
    selector: [
        'SelectorList',
        null
    ]
};
function parse() {
    this.skipSC();
    const start = this.tokenStart;
    let end = start;
    let selector = null;
    let nth;
    if (this.lookupValue(0, 'odd') || this.lookupValue(0, 'even')) {
        nth = this.Identifier();
    } else {
        nth = this.AnPlusB();
    }
    end = this.tokenStart;
    this.skipSC();
    if (this.lookupValue(0, 'of')) {
        this.next();
        selector = this.SelectorList();
        end = this.tokenStart;
    }
    return {
        type: 'Nth',
        loc: this.getLocation(start, end),
        nth,
        selector
    };
}
function generate(node) {
    this.node(node.nth);
    if (node.selector !== null) {
        this.token(types.Ident, 'of');
        this.node(node.selector);
    }
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Number.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const name = 'Number';
const structure = {
    value: String
};
function parse() {
    return {
        type: 'Number',
        loc: this.getLocation(this.tokenStart, this.tokenEnd),
        value: this.consume(types.Number)
    };
}
function generate(node) {
    this.token(types.Number, node.value);
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Operator.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// '/' | '*' | ',' | ':' | '+' | '-'
const name = 'Operator';
const structure = {
    value: String
};
function parse() {
    const start = this.tokenStart;
    this.next();
    return {
        type: 'Operator',
        loc: this.getLocation(start, this.tokenStart),
        value: this.substrToCursor(start)
    };
}
function generate(node) {
    this.tokenize(node.value);
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Parentheses.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const name = 'Parentheses';
const structure = {
    children: [
        []
    ]
};
function parse(readSequence, recognizer) {
    const start = this.tokenStart;
    let children = null;
    this.eat(types.LeftParenthesis);
    children = readSequence.call(this, recognizer);
    if (!this.eof) {
        this.eat(types.RightParenthesis);
    }
    return {
        type: 'Parentheses',
        loc: this.getLocation(start, this.tokenStart),
        children
    };
}
function generate(node) {
    this.token(types.LeftParenthesis, '(');
    this.children(node);
    this.token(types.RightParenthesis, ')');
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Percentage.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const name = 'Percentage';
const structure = {
    value: String
};
function parse() {
    return {
        type: 'Percentage',
        loc: this.getLocation(this.tokenStart, this.tokenEnd),
        value: this.consumeNumber(types.Percentage)
    };
}
function generate(node) {
    this.token(types.Percentage, node.value + '%');
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/PseudoClassSelector.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const name = 'PseudoClassSelector';
const walkContext = 'function';
const structure = {
    name: String,
    children: [
        [
            'Raw'
        ],
        null
    ]
};
// : [ <ident> | <function-token> <any-value>? ) ]
function parse() {
    const start = this.tokenStart;
    let children = null;
    let name;
    let nameLowerCase;
    this.eat(types.Colon);
    if (this.tokenType === types.Function) {
        name = this.consumeFunctionName();
        nameLowerCase = name.toLowerCase();
        if (this.lookupNonWSType(0) == types.RightParenthesis) {
            children = this.createList();
        } else if (hasOwnProperty.call(this.pseudo, nameLowerCase)) {
            this.skipSC();
            children = this.pseudo[nameLowerCase].call(this);
            this.skipSC();
        } else {
            children = this.createList();
            children.push(this.Raw(null, false));
        }
        this.eat(types.RightParenthesis);
    } else {
        name = this.consume(types.Ident);
    }
    return {
        type: 'PseudoClassSelector',
        loc: this.getLocation(start, this.tokenStart),
        name,
        children
    };
}
function generate(node) {
    this.token(types.Colon, ':');
    if (node.children === null) {
        this.token(types.Ident, node.name);
    } else {
        this.token(types.Function, node.name + '(');
        this.children(node);
        this.token(types.RightParenthesis, ')');
    }
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
exports.walkContext = walkContext;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/PseudoElementSelector.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const name = 'PseudoElementSelector';
const walkContext = 'function';
const structure = {
    name: String,
    children: [
        [
            'Raw'
        ],
        null
    ]
};
// :: [ <ident> | <function-token> <any-value>? ) ]
function parse() {
    const start = this.tokenStart;
    let children = null;
    let name;
    let nameLowerCase;
    this.eat(types.Colon);
    this.eat(types.Colon);
    if (this.tokenType === types.Function) {
        name = this.consumeFunctionName();
        nameLowerCase = name.toLowerCase();
        if (this.lookupNonWSType(0) == types.RightParenthesis) {
            children = this.createList();
        } else if (hasOwnProperty.call(this.pseudo, nameLowerCase)) {
            this.skipSC();
            children = this.pseudo[nameLowerCase].call(this);
            this.skipSC();
        } else {
            children = this.createList();
            children.push(this.Raw(null, false));
        }
        this.eat(types.RightParenthesis);
    } else {
        name = this.consume(types.Ident);
    }
    return {
        type: 'PseudoElementSelector',
        loc: this.getLocation(start, this.tokenStart),
        name,
        children
    };
}
function generate(node) {
    this.token(types.Colon, ':');
    this.token(types.Colon, ':');
    if (node.children === null) {
        this.token(types.Ident, node.name);
    } else {
        this.token(types.Function, node.name + '(');
        this.children(node);
        this.token(types.RightParenthesis, ')');
    }
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
exports.walkContext = walkContext;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Ratio.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const SOLIDUS = 0x002F; // U+002F SOLIDUS (/)
// Media Queries Level 3 defines terms of <ratio> as a positive (not zero or negative)
// integers (see https://drafts.csswg.org/mediaqueries-3/#values)
// However, Media Queries Level 4 removes any definition of values
// (see https://drafts.csswg.org/mediaqueries-4/#values) and refers to
// CSS Values and Units for detail. In CSS Values and Units Level 4 a <ratio>
// definition was added (see https://drafts.csswg.org/css-values-4/#ratios) which
// defines ratio as "<number [0,∞]> [ / <number [0,∞]> ]?" and based on it
// any constrains on terms were removed. Parser also doesn't test numbers
// in any way to make possible for linting and fixing them by the tools using CSSTree.
// An additional syntax examination may be applied by a lexer.
function consumeTerm() {
    this.skipSC();
    switch(this.tokenType){
        case types.Number:
            return this.Number();
        case types.Function:
            return this.Function(this.readSequence, this.scope.Value);
        default:
            this.error('Number of function is expected');
    }
}
const name = 'Ratio';
const structure = {
    left: [
        'Number',
        'Function'
    ],
    right: [
        'Number',
        'Function',
        null
    ]
};
// <number [0,∞]> [ / <number [0,∞]> ]?
function parse() {
    const start = this.tokenStart;
    const left = consumeTerm.call(this);
    let right = null;
    this.skipSC();
    if (this.isDelim(SOLIDUS)) {
        this.eatDelim(SOLIDUS);
        right = consumeTerm.call(this);
    }
    return {
        type: 'Ratio',
        loc: this.getLocation(start, this.tokenStart),
        left,
        right
    };
}
function generate(node) {
    this.node(node.left);
    this.token(types.Delim, '/');
    if (node.right) {
        this.node(node.right);
    } else {
        this.node(types.Number, 1);
    }
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Raw.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
function getOffsetExcludeWS() {
    if (this.tokenIndex > 0) {
        if (this.lookupType(-1) === types.WhiteSpace) {
            return this.tokenIndex > 1 ? this.getTokenStart(this.tokenIndex - 1) : this.firstCharOffset;
        }
    }
    return this.tokenStart;
}
const name = 'Raw';
const structure = {
    value: String
};
function parse(consumeUntil, excludeWhiteSpace) {
    const startOffset = this.getTokenStart(this.tokenIndex);
    let endOffset;
    this.skipUntilBalanced(this.tokenIndex, consumeUntil || this.consumeUntilBalanceEnd);
    if (excludeWhiteSpace && this.tokenStart > startOffset) {
        endOffset = getOffsetExcludeWS.call(this);
    } else {
        endOffset = this.tokenStart;
    }
    return {
        type: 'Raw',
        loc: this.getLocation(startOffset, endOffset),
        value: this.substring(startOffset, endOffset)
    };
}
function generate(node) {
    this.tokenize(node.value);
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Rule.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
function consumeRaw() {
    return this.Raw(this.consumeUntilLeftCurlyBracket, true);
}
function consumePrelude() {
    const prelude = this.SelectorList();
    if (prelude.type !== 'Raw' && this.eof === false && this.tokenType !== types.LeftCurlyBracket) {
        this.error();
    }
    return prelude;
}
const name = 'Rule';
const walkContext = 'rule';
const structure = {
    prelude: [
        'SelectorList',
        'Raw'
    ],
    block: [
        'Block'
    ]
};
function parse() {
    const startToken = this.tokenIndex;
    const startOffset = this.tokenStart;
    let prelude;
    let block;
    if (this.parseRulePrelude) {
        prelude = this.parseWithFallback(consumePrelude, consumeRaw);
    } else {
        prelude = consumeRaw.call(this, startToken);
    }
    block = this.Block(true);
    return {
        type: 'Rule',
        loc: this.getLocation(startOffset, this.tokenStart),
        prelude,
        block
    };
}
function generate(node) {
    this.node(node.prelude);
    this.node(node.block);
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
exports.walkContext = walkContext;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Scope.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const name = 'Scope';
const structure = {
    root: [
        'SelectorList',
        'Raw',
        null
    ],
    limit: [
        'SelectorList',
        'Raw',
        null
    ]
};
function parse() {
    let root = null;
    let limit = null;
    this.skipSC();
    const startOffset = this.tokenStart;
    if (this.tokenType === types.LeftParenthesis) {
        this.next();
        this.skipSC();
        root = this.parseWithFallback(this.SelectorList, ()=>this.Raw(false, true));
        this.skipSC();
        this.eat(types.RightParenthesis);
    }
    if (this.lookupNonWSType(0) === types.Ident) {
        this.skipSC();
        this.eatIdent('to');
        this.skipSC();
        this.eat(types.LeftParenthesis);
        this.skipSC();
        limit = this.parseWithFallback(this.SelectorList, ()=>this.Raw(false, true));
        this.skipSC();
        this.eat(types.RightParenthesis);
    }
    return {
        type: 'Scope',
        loc: this.getLocation(startOffset, this.tokenStart),
        root,
        limit
    };
}
function generate(node) {
    if (node.root) {
        this.token(types.LeftParenthesis, '(');
        this.node(node.root);
        this.token(types.RightParenthesis, ')');
    }
    if (node.limit) {
        this.token(types.Ident, 'to');
        this.token(types.LeftParenthesis, '(');
        this.node(node.limit);
        this.token(types.RightParenthesis, ')');
    }
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Selector.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const name = 'Selector';
const structure = {
    children: [
        [
            'TypeSelector',
            'IdSelector',
            'ClassSelector',
            'AttributeSelector',
            'PseudoClassSelector',
            'PseudoElementSelector',
            'Combinator'
        ]
    ]
};
function parse() {
    const children = this.readSequence(this.scope.Selector);
    // nothing were consumed
    if (this.getFirstListNode(children) === null) {
        this.error('Selector is expected');
    }
    return {
        type: 'Selector',
        loc: this.getLocationFromList(children),
        children
    };
}
function generate(node) {
    this.children(node);
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/SelectorList.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const name = 'SelectorList';
const walkContext = 'selector';
const structure = {
    children: [
        [
            'Selector',
            'Raw'
        ]
    ]
};
function parse() {
    const children = this.createList();
    while(!this.eof){
        children.push(this.Selector());
        if (this.tokenType === types.Comma) {
            this.next();
            continue;
        }
        break;
    }
    return {
        type: 'SelectorList',
        loc: this.getLocationFromList(children),
        children
    };
}
function generate(node) {
    this.children(node, ()=>this.token(types.Comma, ','));
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
exports.walkContext = walkContext;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/utils/string.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const charCodeDefinitions = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/char-code-definitions.cjs [app-ssr] (ecmascript)");
const utils = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/utils.cjs [app-ssr] (ecmascript)");
const REVERSE_SOLIDUS = 0x005c; // U+005C REVERSE SOLIDUS (\)
const QUOTATION_MARK = 0x0022; // "
const APOSTROPHE = 0x0027; // '
function decode(str) {
    const len = str.length;
    const firstChar = str.charCodeAt(0);
    const start = firstChar === QUOTATION_MARK || firstChar === APOSTROPHE ? 1 : 0;
    const end = start === 1 && len > 1 && str.charCodeAt(len - 1) === firstChar ? len - 2 : len - 1;
    let decoded = '';
    for(let i = start; i <= end; i++){
        let code = str.charCodeAt(i);
        if (code === REVERSE_SOLIDUS) {
            // special case at the ending
            if (i === end) {
                // if the next input code point is EOF, do nothing
                // otherwise include last quote as escaped
                if (i !== len - 1) {
                    decoded = str.substr(i + 1);
                }
                break;
            }
            code = str.charCodeAt(++i);
            // consume escaped
            if (charCodeDefinitions.isValidEscape(REVERSE_SOLIDUS, code)) {
                const escapeStart = i - 1;
                const escapeEnd = utils.consumeEscaped(str, escapeStart);
                i = escapeEnd - 1;
                decoded += utils.decodeEscaped(str.substring(escapeStart + 1, escapeEnd));
            } else {
                // \r\n
                if (code === 0x000d && str.charCodeAt(i + 1) === 0x000a) {
                    i++;
                }
            }
        } else {
            decoded += str[i];
        }
    }
    return decoded;
}
// https://drafts.csswg.org/cssom/#serialize-a-string
// § 2.1. Common Serializing Idioms
function encode(str, apostrophe) {
    const quote = apostrophe ? '\'' : '"';
    const quoteCode = apostrophe ? APOSTROPHE : QUOTATION_MARK;
    let encoded = '';
    let wsBeforeHexIsNeeded = false;
    for(let i = 0; i < str.length; i++){
        const code = str.charCodeAt(i);
        // If the character is NULL (U+0000), then the REPLACEMENT CHARACTER (U+FFFD).
        if (code === 0x0000) {
            encoded += '\uFFFD';
            continue;
        }
        // If the character is in the range [\1-\1f] (U+0001 to U+001F) or is U+007F,
        // the character escaped as code point.
        // Note: Do not compare with 0x0001 since 0x0000 is precessed before
        if (code <= 0x001f || code === 0x007F) {
            encoded += '\\' + code.toString(16);
            wsBeforeHexIsNeeded = true;
            continue;
        }
        // If the character is '"' (U+0022) or "\" (U+005C), the escaped character.
        if (code === quoteCode || code === REVERSE_SOLIDUS) {
            encoded += '\\' + str.charAt(i);
            wsBeforeHexIsNeeded = false;
        } else {
            if (wsBeforeHexIsNeeded && (charCodeDefinitions.isHexDigit(code) || charCodeDefinitions.isWhiteSpace(code))) {
                encoded += ' ';
            }
            // Otherwise, the character itself.
            encoded += str.charAt(i);
            wsBeforeHexIsNeeded = false;
        }
    }
    return quote + encoded + quote;
}
exports.decode = decode;
exports.encode = encode;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/String.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const string = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/utils/string.cjs [app-ssr] (ecmascript)");
const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const name = 'String';
const structure = {
    value: String
};
function parse() {
    return {
        type: 'String',
        loc: this.getLocation(this.tokenStart, this.tokenEnd),
        value: string.decode(this.consume(types.String))
    };
}
function generate(node) {
    this.token(types.String, string.encode(node.value));
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/StyleSheet.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const EXCLAMATIONMARK = 0x0021; // U+0021 EXCLAMATION MARK (!)
function consumeRaw() {
    return this.Raw(null, false);
}
const name = 'StyleSheet';
const walkContext = 'stylesheet';
const structure = {
    children: [
        [
            'Comment',
            'CDO',
            'CDC',
            'Atrule',
            'Rule',
            'Raw'
        ]
    ]
};
function parse() {
    const start = this.tokenStart;
    const children = this.createList();
    let child;
    while(!this.eof){
        switch(this.tokenType){
            case types.WhiteSpace:
                this.next();
                continue;
            case types.Comment:
                // ignore comments except exclamation comments (i.e. /*! .. */) on top level
                if (this.charCodeAt(this.tokenStart + 2) !== EXCLAMATIONMARK) {
                    this.next();
                    continue;
                }
                child = this.Comment();
                break;
            case types.CDO:
                child = this.CDO();
                break;
            case types.CDC:
                child = this.CDC();
                break;
            // CSS Syntax Module Level 3
            // §2.2 Error handling
            // At the "top level" of a stylesheet, an <at-keyword-token> starts an at-rule.
            case types.AtKeyword:
                child = this.parseWithFallback(this.Atrule, consumeRaw);
                break;
            // Anything else starts a qualified rule ...
            default:
                child = this.parseWithFallback(this.Rule, consumeRaw);
        }
        children.push(child);
    }
    return {
        type: 'StyleSheet',
        loc: this.getLocation(start, this.tokenStart),
        children
    };
}
function generate(node) {
    this.children(node);
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
exports.walkContext = walkContext;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/SupportsDeclaration.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const name = 'SupportsDeclaration';
const structure = {
    declaration: 'Declaration'
};
function parse() {
    const start = this.tokenStart;
    this.eat(types.LeftParenthesis);
    this.skipSC();
    const declaration = this.Declaration();
    if (!this.eof) {
        this.eat(types.RightParenthesis);
    }
    return {
        type: 'SupportsDeclaration',
        loc: this.getLocation(start, this.tokenStart),
        declaration
    };
}
function generate(node) {
    this.token(types.LeftParenthesis, '(');
    this.node(node.declaration);
    this.token(types.RightParenthesis, ')');
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/TypeSelector.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const ASTERISK = 0x002A; // U+002A ASTERISK (*)
const VERTICALLINE = 0x007C; // U+007C VERTICAL LINE (|)
function eatIdentifierOrAsterisk() {
    if (this.tokenType !== types.Ident && this.isDelim(ASTERISK) === false) {
        this.error('Identifier or asterisk is expected');
    }
    this.next();
}
const name = 'TypeSelector';
const structure = {
    name: String
};
// ident
// ident|ident
// ident|*
// *
// *|ident
// *|*
// |ident
// |*
function parse() {
    const start = this.tokenStart;
    if (this.isDelim(VERTICALLINE)) {
        this.next();
        eatIdentifierOrAsterisk.call(this);
    } else {
        eatIdentifierOrAsterisk.call(this);
        if (this.isDelim(VERTICALLINE)) {
            this.next();
            eatIdentifierOrAsterisk.call(this);
        }
    }
    return {
        type: 'TypeSelector',
        loc: this.getLocation(start, this.tokenStart),
        name: this.substrToCursor(start)
    };
}
function generate(node) {
    this.tokenize(node.name);
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/UnicodeRange.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const charCodeDefinitions = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/char-code-definitions.cjs [app-ssr] (ecmascript)");
const PLUSSIGN = 0x002B; // U+002B PLUS SIGN (+)
const HYPHENMINUS = 0x002D; // U+002D HYPHEN-MINUS (-)
const QUESTIONMARK = 0x003F; // U+003F QUESTION MARK (?)
function eatHexSequence(offset, allowDash) {
    let len = 0;
    for(let pos = this.tokenStart + offset; pos < this.tokenEnd; pos++){
        const code = this.charCodeAt(pos);
        if (code === HYPHENMINUS && allowDash && len !== 0) {
            eatHexSequence.call(this, offset + len + 1, false);
            return -1;
        }
        if (!charCodeDefinitions.isHexDigit(code)) {
            this.error(allowDash && len !== 0 ? 'Hyphen minus' + (len < 6 ? ' or hex digit' : '') + ' is expected' : len < 6 ? 'Hex digit is expected' : 'Unexpected input', pos);
        }
        if (++len > 6) {
            this.error('Too many hex digits', pos);
        }
    }
    this.next();
    return len;
}
function eatQuestionMarkSequence(max) {
    let count = 0;
    while(this.isDelim(QUESTIONMARK)){
        if (++count > max) {
            this.error('Too many question marks');
        }
        this.next();
    }
}
function startsWith(code) {
    if (this.charCodeAt(this.tokenStart) !== code) {
        this.error((code === PLUSSIGN ? 'Plus sign' : 'Hyphen minus') + ' is expected');
    }
}
// https://drafts.csswg.org/css-syntax/#urange
// Informally, the <urange> production has three forms:
// U+0001
//      Defines a range consisting of a single code point, in this case the code point "1".
// U+0001-00ff
//      Defines a range of codepoints between the first and the second value, in this case
//      the range between "1" and "ff" (255 in decimal) inclusive.
// U+00??
//      Defines a range of codepoints where the "?" characters range over all hex digits,
//      in this case defining the same as the value U+0000-00ff.
// In each form, a maximum of 6 digits is allowed for each hexadecimal number (if you treat "?" as a hexadecimal digit).
//
// <urange> =
//   u '+' <ident-token> '?'* |
//   u <dimension-token> '?'* |
//   u <number-token> '?'* |
//   u <number-token> <dimension-token> |
//   u <number-token> <number-token> |
//   u '+' '?'+
function scanUnicodeRange() {
    let hexLength = 0;
    switch(this.tokenType){
        case types.Number:
            // u <number-token> '?'*
            // u <number-token> <dimension-token>
            // u <number-token> <number-token>
            hexLength = eatHexSequence.call(this, 1, true);
            if (this.isDelim(QUESTIONMARK)) {
                eatQuestionMarkSequence.call(this, 6 - hexLength);
                break;
            }
            if (this.tokenType === types.Dimension || this.tokenType === types.Number) {
                startsWith.call(this, HYPHENMINUS);
                eatHexSequence.call(this, 1, false);
                break;
            }
            break;
        case types.Dimension:
            // u <dimension-token> '?'*
            hexLength = eatHexSequence.call(this, 1, true);
            if (hexLength > 0) {
                eatQuestionMarkSequence.call(this, 6 - hexLength);
            }
            break;
        default:
            // u '+' <ident-token> '?'*
            // u '+' '?'+
            this.eatDelim(PLUSSIGN);
            if (this.tokenType === types.Ident) {
                hexLength = eatHexSequence.call(this, 0, true);
                if (hexLength > 0) {
                    eatQuestionMarkSequence.call(this, 6 - hexLength);
                }
                break;
            }
            if (this.isDelim(QUESTIONMARK)) {
                this.next();
                eatQuestionMarkSequence.call(this, 5);
                break;
            }
            this.error('Hex digit or question mark is expected');
    }
}
const name = 'UnicodeRange';
const structure = {
    value: String
};
function parse() {
    const start = this.tokenStart;
    // U or u
    this.eatIdent('u');
    scanUnicodeRange.call(this);
    return {
        type: 'UnicodeRange',
        loc: this.getLocation(start, this.tokenStart),
        value: this.substrToCursor(start)
    };
}
function generate(node) {
    this.tokenize(node.value);
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/utils/url.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const charCodeDefinitions = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/char-code-definitions.cjs [app-ssr] (ecmascript)");
const utils = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/utils.cjs [app-ssr] (ecmascript)");
const SPACE = 0x0020; // U+0020 SPACE
const REVERSE_SOLIDUS = 0x005c; // U+005C REVERSE SOLIDUS (\)
const QUOTATION_MARK = 0x0022; // "
const APOSTROPHE = 0x0027; // '
const LEFTPARENTHESIS = 0x0028; // U+0028 LEFT PARENTHESIS (()
const RIGHTPARENTHESIS = 0x0029; // U+0029 RIGHT PARENTHESIS ())
function decode(str) {
    const len = str.length;
    let start = 4; // length of "url("
    let end = str.charCodeAt(len - 1) === RIGHTPARENTHESIS ? len - 2 : len - 1;
    let decoded = '';
    while(start < end && charCodeDefinitions.isWhiteSpace(str.charCodeAt(start))){
        start++;
    }
    while(start < end && charCodeDefinitions.isWhiteSpace(str.charCodeAt(end))){
        end--;
    }
    for(let i = start; i <= end; i++){
        let code = str.charCodeAt(i);
        if (code === REVERSE_SOLIDUS) {
            // special case at the ending
            if (i === end) {
                // if the next input code point is EOF, do nothing
                // otherwise include last left parenthesis as escaped
                if (i !== len - 1) {
                    decoded = str.substr(i + 1);
                }
                break;
            }
            code = str.charCodeAt(++i);
            // consume escaped
            if (charCodeDefinitions.isValidEscape(REVERSE_SOLIDUS, code)) {
                const escapeStart = i - 1;
                const escapeEnd = utils.consumeEscaped(str, escapeStart);
                i = escapeEnd - 1;
                decoded += utils.decodeEscaped(str.substring(escapeStart + 1, escapeEnd));
            } else {
                // \r\n
                if (code === 0x000d && str.charCodeAt(i + 1) === 0x000a) {
                    i++;
                }
            }
        } else {
            decoded += str[i];
        }
    }
    return decoded;
}
function encode(str) {
    let encoded = '';
    let wsBeforeHexIsNeeded = false;
    for(let i = 0; i < str.length; i++){
        const code = str.charCodeAt(i);
        // If the character is NULL (U+0000), then the REPLACEMENT CHARACTER (U+FFFD).
        if (code === 0x0000) {
            encoded += '\uFFFD';
            continue;
        }
        // If the character is in the range [\1-\1f] (U+0001 to U+001F) or is U+007F,
        // the character escaped as code point.
        // Note: Do not compare with 0x0001 since 0x0000 is precessed before
        if (code <= 0x001f || code === 0x007F) {
            encoded += '\\' + code.toString(16);
            wsBeforeHexIsNeeded = true;
            continue;
        }
        if (code === SPACE || code === REVERSE_SOLIDUS || code === QUOTATION_MARK || code === APOSTROPHE || code === LEFTPARENTHESIS || code === RIGHTPARENTHESIS) {
            encoded += '\\' + str.charAt(i);
            wsBeforeHexIsNeeded = false;
        } else {
            if (wsBeforeHexIsNeeded && charCodeDefinitions.isHexDigit(code)) {
                encoded += ' ';
            }
            encoded += str.charAt(i);
            wsBeforeHexIsNeeded = false;
        }
    }
    return 'url(' + encoded + ')';
}
exports.decode = decode;
exports.encode = encode;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Url.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const url = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/utils/url.cjs [app-ssr] (ecmascript)");
const string = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/utils/string.cjs [app-ssr] (ecmascript)");
const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const name = 'Url';
const structure = {
    value: String
};
// <url-token> | <function-token> <string> )
function parse() {
    const start = this.tokenStart;
    let value;
    switch(this.tokenType){
        case types.Url:
            value = url.decode(this.consume(types.Url));
            break;
        case types.Function:
            if (!this.cmpStr(this.tokenStart, this.tokenEnd, 'url(')) {
                this.error('Function name must be `url`');
            }
            this.eat(types.Function);
            this.skipSC();
            value = string.decode(this.consume(types.String));
            this.skipSC();
            if (!this.eof) {
                this.eat(types.RightParenthesis);
            }
            break;
        default:
            this.error('Url or Function is expected');
    }
    return {
        type: 'Url',
        loc: this.getLocation(start, this.tokenStart),
        value
    };
}
function generate(node) {
    this.token(types.Url, url.encode(node.value));
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Value.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const name = 'Value';
const structure = {
    children: [
        []
    ]
};
function parse() {
    const start = this.tokenStart;
    const children = this.readSequence(this.scope.Value);
    return {
        type: 'Value',
        loc: this.getLocation(start, this.tokenStart),
        children
    };
}
function generate(node) {
    this.children(node);
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/WhiteSpace.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const SPACE = Object.freeze({
    type: 'WhiteSpace',
    loc: null,
    value: ' '
});
const name = 'WhiteSpace';
const structure = {
    value: String
};
function parse() {
    this.eat(types.WhiteSpace);
    return SPACE;
// return {
//     type: 'WhiteSpace',
//     loc: this.getLocation(this.tokenStart, this.tokenEnd),
//     value: this.consume(WHITESPACE)
// };
}
function generate(node) {
    this.token(types.WhiteSpace, node.value);
}
exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/index.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const AnPlusB = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/AnPlusB.cjs [app-ssr] (ecmascript)");
const Atrule = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Atrule.cjs [app-ssr] (ecmascript)");
const AtrulePrelude = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/AtrulePrelude.cjs [app-ssr] (ecmascript)");
const AttributeSelector = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/AttributeSelector.cjs [app-ssr] (ecmascript)");
const Block = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Block.cjs [app-ssr] (ecmascript)");
const Brackets = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Brackets.cjs [app-ssr] (ecmascript)");
const CDC = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/CDC.cjs [app-ssr] (ecmascript)");
const CDO = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/CDO.cjs [app-ssr] (ecmascript)");
const ClassSelector = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/ClassSelector.cjs [app-ssr] (ecmascript)");
const Combinator = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Combinator.cjs [app-ssr] (ecmascript)");
const Comment = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Comment.cjs [app-ssr] (ecmascript)");
const Condition = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Condition.cjs [app-ssr] (ecmascript)");
const Declaration = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Declaration.cjs [app-ssr] (ecmascript)");
const DeclarationList = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/DeclarationList.cjs [app-ssr] (ecmascript)");
const Dimension = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Dimension.cjs [app-ssr] (ecmascript)");
const Feature = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Feature.cjs [app-ssr] (ecmascript)");
const FeatureFunction = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/FeatureFunction.cjs [app-ssr] (ecmascript)");
const FeatureRange = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/FeatureRange.cjs [app-ssr] (ecmascript)");
const Function = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Function.cjs [app-ssr] (ecmascript)");
const GeneralEnclosed = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/GeneralEnclosed.cjs [app-ssr] (ecmascript)");
const Hash = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Hash.cjs [app-ssr] (ecmascript)");
const Identifier = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Identifier.cjs [app-ssr] (ecmascript)");
const IdSelector = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/IdSelector.cjs [app-ssr] (ecmascript)");
const Layer = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Layer.cjs [app-ssr] (ecmascript)");
const LayerList = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/LayerList.cjs [app-ssr] (ecmascript)");
const MediaQuery = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/MediaQuery.cjs [app-ssr] (ecmascript)");
const MediaQueryList = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/MediaQueryList.cjs [app-ssr] (ecmascript)");
const NestingSelector = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/NestingSelector.cjs [app-ssr] (ecmascript)");
const Nth = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Nth.cjs [app-ssr] (ecmascript)");
const Number$1 = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Number.cjs [app-ssr] (ecmascript)");
const Operator = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Operator.cjs [app-ssr] (ecmascript)");
const Parentheses = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Parentheses.cjs [app-ssr] (ecmascript)");
const Percentage = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Percentage.cjs [app-ssr] (ecmascript)");
const PseudoClassSelector = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/PseudoClassSelector.cjs [app-ssr] (ecmascript)");
const PseudoElementSelector = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/PseudoElementSelector.cjs [app-ssr] (ecmascript)");
const Ratio = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Ratio.cjs [app-ssr] (ecmascript)");
const Raw = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Raw.cjs [app-ssr] (ecmascript)");
const Rule = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Rule.cjs [app-ssr] (ecmascript)");
const Scope = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Scope.cjs [app-ssr] (ecmascript)");
const Selector = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Selector.cjs [app-ssr] (ecmascript)");
const SelectorList = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/SelectorList.cjs [app-ssr] (ecmascript)");
const String$1 = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/String.cjs [app-ssr] (ecmascript)");
const StyleSheet = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/StyleSheet.cjs [app-ssr] (ecmascript)");
const SupportsDeclaration = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/SupportsDeclaration.cjs [app-ssr] (ecmascript)");
const TypeSelector = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/TypeSelector.cjs [app-ssr] (ecmascript)");
const UnicodeRange = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/UnicodeRange.cjs [app-ssr] (ecmascript)");
const Url = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Url.cjs [app-ssr] (ecmascript)");
const Value = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Value.cjs [app-ssr] (ecmascript)");
const WhiteSpace = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/WhiteSpace.cjs [app-ssr] (ecmascript)");
exports.AnPlusB = AnPlusB;
exports.Atrule = Atrule;
exports.AtrulePrelude = AtrulePrelude;
exports.AttributeSelector = AttributeSelector;
exports.Block = Block;
exports.Brackets = Brackets;
exports.CDC = CDC;
exports.CDO = CDO;
exports.ClassSelector = ClassSelector;
exports.Combinator = Combinator;
exports.Comment = Comment;
exports.Condition = Condition;
exports.Declaration = Declaration;
exports.DeclarationList = DeclarationList;
exports.Dimension = Dimension;
exports.Feature = Feature;
exports.FeatureFunction = FeatureFunction;
exports.FeatureRange = FeatureRange;
exports.Function = Function;
exports.GeneralEnclosed = GeneralEnclosed;
exports.Hash = Hash;
exports.Identifier = Identifier;
exports.IdSelector = IdSelector;
exports.Layer = Layer;
exports.LayerList = LayerList;
exports.MediaQuery = MediaQuery;
exports.MediaQueryList = MediaQueryList;
exports.NestingSelector = NestingSelector;
exports.Nth = Nth;
exports.Number = Number$1;
exports.Operator = Operator;
exports.Parentheses = Parentheses;
exports.Percentage = Percentage;
exports.PseudoClassSelector = PseudoClassSelector;
exports.PseudoElementSelector = PseudoElementSelector;
exports.Ratio = Ratio;
exports.Raw = Raw;
exports.Rule = Rule;
exports.Scope = Scope;
exports.Selector = Selector;
exports.SelectorList = SelectorList;
exports.String = String$1;
exports.StyleSheet = StyleSheet;
exports.SupportsDeclaration = SupportsDeclaration;
exports.TypeSelector = TypeSelector;
exports.UnicodeRange = UnicodeRange;
exports.Url = Url;
exports.Value = Value;
exports.WhiteSpace = WhiteSpace;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/config/lexer.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const genericConst = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/lexer/generic-const.cjs [app-ssr] (ecmascript)");
const data = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/data.cjs [app-ssr] (ecmascript)");
const index = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/index.cjs [app-ssr] (ecmascript)");
const lexerConfig = {
    generic: true,
    cssWideKeywords: genericConst.cssWideKeywords,
    ...data,
    node: index
};
module.exports = lexerConfig;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/scope/default.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const NUMBERSIGN = 0x0023; // U+0023 NUMBER SIGN (#)
const ASTERISK = 0x002A; // U+002A ASTERISK (*)
const PLUSSIGN = 0x002B; // U+002B PLUS SIGN (+)
const HYPHENMINUS = 0x002D; // U+002D HYPHEN-MINUS (-)
const SOLIDUS = 0x002F; // U+002F SOLIDUS (/)
const U = 0x0075; // U+0075 LATIN SMALL LETTER U (u)
function defaultRecognizer(context) {
    switch(this.tokenType){
        case types.Hash:
            return this.Hash();
        case types.Comma:
            return this.Operator();
        case types.LeftParenthesis:
            return this.Parentheses(this.readSequence, context.recognizer);
        case types.LeftSquareBracket:
            return this.Brackets(this.readSequence, context.recognizer);
        case types.String:
            return this.String();
        case types.Dimension:
            return this.Dimension();
        case types.Percentage:
            return this.Percentage();
        case types.Number:
            return this.Number();
        case types.Function:
            return this.cmpStr(this.tokenStart, this.tokenEnd, 'url(') ? this.Url() : this.Function(this.readSequence, context.recognizer);
        case types.Url:
            return this.Url();
        case types.Ident:
            // check for unicode range, it should start with u+ or U+
            if (this.cmpChar(this.tokenStart, U) && this.cmpChar(this.tokenStart + 1, PLUSSIGN)) {
                return this.UnicodeRange();
            } else {
                return this.Identifier();
            }
        case types.Delim:
            {
                const code = this.charCodeAt(this.tokenStart);
                if (code === SOLIDUS || code === ASTERISK || code === PLUSSIGN || code === HYPHENMINUS) {
                    return this.Operator(); // TODO: replace with Delim
                }
                // TODO: produce a node with Delim node type
                if (code === NUMBERSIGN) {
                    this.error('Hex or identifier is expected', this.tokenStart + 1);
                }
                break;
            }
    }
}
module.exports = defaultRecognizer;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/scope/atrulePrelude.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const _default = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/scope/default.cjs [app-ssr] (ecmascript)");
const atrulePrelude = {
    getNode: _default
};
module.exports = atrulePrelude;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/scope/selector.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const NUMBERSIGN = 0x0023; // U+0023 NUMBER SIGN (#)
const AMPERSAND = 0x0026; // U+0026 AMPERSAND (&)
const ASTERISK = 0x002A; // U+002A ASTERISK (*)
const PLUSSIGN = 0x002B; // U+002B PLUS SIGN (+)
const SOLIDUS = 0x002F; // U+002F SOLIDUS (/)
const FULLSTOP = 0x002E; // U+002E FULL STOP (.)
const GREATERTHANSIGN = 0x003E; // U+003E GREATER-THAN SIGN (>)
const VERTICALLINE = 0x007C; // U+007C VERTICAL LINE (|)
const TILDE = 0x007E; // U+007E TILDE (~)
function onWhiteSpace(next, children) {
    if (children.last !== null && children.last.type !== 'Combinator' && next !== null && next.type !== 'Combinator') {
        children.push({
            type: 'Combinator',
            loc: null,
            name: ' '
        });
    }
}
function getNode() {
    switch(this.tokenType){
        case types.LeftSquareBracket:
            return this.AttributeSelector();
        case types.Hash:
            return this.IdSelector();
        case types.Colon:
            if (this.lookupType(1) === types.Colon) {
                return this.PseudoElementSelector();
            } else {
                return this.PseudoClassSelector();
            }
        case types.Ident:
            return this.TypeSelector();
        case types.Number:
        case types.Percentage:
            return this.Percentage();
        case types.Dimension:
            // throws when .123ident
            if (this.charCodeAt(this.tokenStart) === FULLSTOP) {
                this.error('Identifier is expected', this.tokenStart + 1);
            }
            break;
        case types.Delim:
            {
                const code = this.charCodeAt(this.tokenStart);
                switch(code){
                    case PLUSSIGN:
                    case GREATERTHANSIGN:
                    case TILDE:
                    case SOLIDUS:
                        return this.Combinator();
                    case FULLSTOP:
                        return this.ClassSelector();
                    case ASTERISK:
                    case VERTICALLINE:
                        return this.TypeSelector();
                    case NUMBERSIGN:
                        return this.IdSelector();
                    case AMPERSAND:
                        return this.NestingSelector();
                }
                break;
            }
    }
}
const Selector = {
    onWhiteSpace,
    getNode
};
module.exports = Selector;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/function/expression.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// legacy IE function
// expression( <any-value> )
function expressionFn() {
    return this.createSingleNodeList(this.Raw(null, false));
}
module.exports = expressionFn;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/function/var.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
// var( <ident> , <value>? )
function varFn() {
    const children = this.createList();
    this.skipSC();
    // NOTE: Don't check more than a first argument is an ident, rest checks are for lexer
    children.push(this.Identifier());
    this.skipSC();
    if (this.tokenType === types.Comma) {
        children.push(this.Operator());
        const startIndex = this.tokenIndex;
        const value = this.parseCustomProperty ? this.Value(null) : this.Raw(this.consumeUntilExclamationMarkOrSemicolon, false);
        if (value.type === 'Value' && value.children.isEmpty) {
            for(let offset = startIndex - this.tokenIndex; offset <= 0; offset++){
                if (this.lookupType(offset) === types.WhiteSpace) {
                    value.children.appendData({
                        type: 'WhiteSpace',
                        loc: null,
                        value: ' '
                    });
                    break;
                }
            }
        }
        children.push(value);
    }
    return children;
}
module.exports = varFn;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/scope/value.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const _default = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/scope/default.cjs [app-ssr] (ecmascript)");
const expression = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/function/expression.cjs [app-ssr] (ecmascript)");
const _var = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/function/var.cjs [app-ssr] (ecmascript)");
function isPlusMinusOperator(node) {
    return node !== null && node.type === 'Operator' && (node.value[node.value.length - 1] === '-' || node.value[node.value.length - 1] === '+');
}
const value = {
    getNode: _default,
    onWhiteSpace (next, children) {
        if (isPlusMinusOperator(next)) {
            next.value = ' ' + next.value;
        }
        if (isPlusMinusOperator(children.last)) {
            children.last.value += ' ';
        }
    },
    'expression': expression,
    'var': _var
};
module.exports = value;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/scope/index.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const atrulePrelude = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/scope/atrulePrelude.cjs [app-ssr] (ecmascript)");
const selector = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/scope/selector.cjs [app-ssr] (ecmascript)");
const value = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/scope/value.cjs [app-ssr] (ecmascript)");
exports.AtrulePrelude = atrulePrelude;
exports.Selector = selector;
exports.Value = value;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/atrule/container.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
// https://drafts.csswg.org/css-contain-3/#container-rule
// The keywords `none`, `and`, `not`, and `or` are excluded from the <custom-ident> above.
const nonContainerNameKeywords = new Set([
    'none',
    'and',
    'not',
    'or'
]);
const container = {
    parse: {
        prelude () {
            const children = this.createList();
            if (this.tokenType === types.Ident) {
                const name = this.substring(this.tokenStart, this.tokenEnd);
                if (!nonContainerNameKeywords.has(name.toLowerCase())) {
                    children.push(this.Identifier());
                }
            }
            children.push(this.Condition('container'));
            return children;
        },
        block (nested = false) {
            return this.Block(nested);
        }
    }
};
module.exports = container;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/atrule/font-face.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const fontFace = {
    parse: {
        prelude: null,
        block () {
            return this.Block(true);
        }
    }
};
module.exports = fontFace;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/atrule/import.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
function parseWithFallback(parse, fallback) {
    return this.parseWithFallback(()=>{
        try {
            return parse.call(this);
        } finally{
            this.skipSC();
            if (this.lookupNonWSType(0) !== types.RightParenthesis) {
                this.error();
            }
        }
    }, fallback || (()=>this.Raw(null, true)));
}
const parseFunctions = {
    layer () {
        this.skipSC();
        const children = this.createList();
        const node = parseWithFallback.call(this, this.Layer);
        if (node.type !== 'Raw' || node.value !== '') {
            children.push(node);
        }
        return children;
    },
    supports () {
        this.skipSC();
        const children = this.createList();
        const node = parseWithFallback.call(this, this.Declaration, ()=>parseWithFallback.call(this, ()=>this.Condition('supports')));
        if (node.type !== 'Raw' || node.value !== '') {
            children.push(node);
        }
        return children;
    }
};
const importAtrule = {
    parse: {
        prelude () {
            const children = this.createList();
            switch(this.tokenType){
                case types.String:
                    children.push(this.String());
                    break;
                case types.Url:
                case types.Function:
                    children.push(this.Url());
                    break;
                default:
                    this.error('String or url() is expected');
            }
            this.skipSC();
            if (this.tokenType === types.Ident && this.cmpStr(this.tokenStart, this.tokenEnd, 'layer')) {
                children.push(this.Identifier());
            } else if (this.tokenType === types.Function && this.cmpStr(this.tokenStart, this.tokenEnd, 'layer(')) {
                children.push(this.Function(null, parseFunctions));
            }
            this.skipSC();
            if (this.tokenType === types.Function && this.cmpStr(this.tokenStart, this.tokenEnd, 'supports(')) {
                children.push(this.Function(null, parseFunctions));
            }
            if (this.lookupNonWSType(0) === types.Ident || this.lookupNonWSType(0) === types.LeftParenthesis) {
                children.push(this.MediaQueryList());
            }
            return children;
        },
        block: null
    }
};
module.exports = importAtrule;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/atrule/layer.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const layer = {
    parse: {
        prelude () {
            return this.createSingleNodeList(this.LayerList());
        },
        block () {
            return this.Block(false);
        }
    }
};
module.exports = layer;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/atrule/media.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const media = {
    parse: {
        prelude () {
            return this.createSingleNodeList(this.MediaQueryList());
        },
        block (nested = false) {
            return this.Block(nested);
        }
    }
};
module.exports = media;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/atrule/nest.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const nest = {
    parse: {
        prelude () {
            return this.createSingleNodeList(this.SelectorList());
        },
        block () {
            return this.Block(true);
        }
    }
};
module.exports = nest;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/atrule/page.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const page = {
    parse: {
        prelude () {
            return this.createSingleNodeList(this.SelectorList());
        },
        block () {
            return this.Block(true);
        }
    }
};
module.exports = page;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/atrule/scope.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const scope = {
    parse: {
        prelude () {
            return this.createSingleNodeList(this.Scope());
        },
        block (nested = false) {
            return this.Block(nested);
        }
    }
};
module.exports = scope;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/atrule/starting-style.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const startingStyle = {
    parse: {
        prelude: null,
        block (nested = false) {
            return this.Block(nested);
        }
    }
};
module.exports = startingStyle;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/atrule/supports.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const supports = {
    parse: {
        prelude () {
            return this.createSingleNodeList(this.Condition('supports'));
        },
        block (nested = false) {
            return this.Block(nested);
        }
    }
};
module.exports = supports;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/atrule/index.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const container = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/atrule/container.cjs [app-ssr] (ecmascript)");
const fontFace = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/atrule/font-face.cjs [app-ssr] (ecmascript)");
const _import = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/atrule/import.cjs [app-ssr] (ecmascript)");
const layer = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/atrule/layer.cjs [app-ssr] (ecmascript)");
const media = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/atrule/media.cjs [app-ssr] (ecmascript)");
const nest = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/atrule/nest.cjs [app-ssr] (ecmascript)");
const page = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/atrule/page.cjs [app-ssr] (ecmascript)");
const scope = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/atrule/scope.cjs [app-ssr] (ecmascript)");
const startingStyle = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/atrule/starting-style.cjs [app-ssr] (ecmascript)");
const supports = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/atrule/supports.cjs [app-ssr] (ecmascript)");
const atrule = {
    container,
    'font-face': fontFace,
    import: _import,
    layer,
    media,
    nest,
    page,
    scope,
    'starting-style': startingStyle,
    supports
};
module.exports = atrule;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/pseudo/lang.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
function parseLanguageRangeList() {
    const children = this.createList();
    this.skipSC();
    loop: while(!this.eof){
        switch(this.tokenType){
            case types.Ident:
                children.push(this.Identifier());
                break;
            case types.String:
                children.push(this.String());
                break;
            case types.Comma:
                children.push(this.Operator());
                break;
            case types.RightParenthesis:
                break loop;
            default:
                this.error('Identifier, string or comma is expected');
        }
        this.skipSC();
    }
    return children;
}
exports.parseLanguageRangeList = parseLanguageRangeList;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/pseudo/index.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const lang = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/pseudo/lang.cjs [app-ssr] (ecmascript)");
const selectorList = {
    parse () {
        return this.createSingleNodeList(this.SelectorList());
    }
};
const selector = {
    parse () {
        return this.createSingleNodeList(this.Selector());
    }
};
const identList = {
    parse () {
        return this.createSingleNodeList(this.Identifier());
    }
};
const langList = {
    parse: lang.parseLanguageRangeList
};
const nth = {
    parse () {
        return this.createSingleNodeList(this.Nth());
    }
};
const pseudo = {
    'dir': identList,
    'has': selectorList,
    'lang': langList,
    'matches': selectorList,
    'is': selectorList,
    '-moz-any': selectorList,
    '-webkit-any': selectorList,
    'where': selectorList,
    'not': selectorList,
    'nth-child': nth,
    'nth-last-child': nth,
    'nth-last-of-type': nth,
    'nth-of-type': nth,
    'slotted': selector,
    'host': selector,
    'host-context': selector
};
module.exports = pseudo;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/index-parse.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const AnPlusB = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/AnPlusB.cjs [app-ssr] (ecmascript)");
const Atrule = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Atrule.cjs [app-ssr] (ecmascript)");
const AtrulePrelude = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/AtrulePrelude.cjs [app-ssr] (ecmascript)");
const AttributeSelector = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/AttributeSelector.cjs [app-ssr] (ecmascript)");
const Block = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Block.cjs [app-ssr] (ecmascript)");
const Brackets = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Brackets.cjs [app-ssr] (ecmascript)");
const CDC = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/CDC.cjs [app-ssr] (ecmascript)");
const CDO = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/CDO.cjs [app-ssr] (ecmascript)");
const ClassSelector = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/ClassSelector.cjs [app-ssr] (ecmascript)");
const Combinator = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Combinator.cjs [app-ssr] (ecmascript)");
const Comment = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Comment.cjs [app-ssr] (ecmascript)");
const Condition = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Condition.cjs [app-ssr] (ecmascript)");
const Declaration = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Declaration.cjs [app-ssr] (ecmascript)");
const DeclarationList = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/DeclarationList.cjs [app-ssr] (ecmascript)");
const Dimension = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Dimension.cjs [app-ssr] (ecmascript)");
const Feature = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Feature.cjs [app-ssr] (ecmascript)");
const FeatureFunction = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/FeatureFunction.cjs [app-ssr] (ecmascript)");
const FeatureRange = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/FeatureRange.cjs [app-ssr] (ecmascript)");
const Function = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Function.cjs [app-ssr] (ecmascript)");
const GeneralEnclosed = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/GeneralEnclosed.cjs [app-ssr] (ecmascript)");
const Hash = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Hash.cjs [app-ssr] (ecmascript)");
const Identifier = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Identifier.cjs [app-ssr] (ecmascript)");
const IdSelector = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/IdSelector.cjs [app-ssr] (ecmascript)");
const Layer = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Layer.cjs [app-ssr] (ecmascript)");
const LayerList = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/LayerList.cjs [app-ssr] (ecmascript)");
const MediaQuery = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/MediaQuery.cjs [app-ssr] (ecmascript)");
const MediaQueryList = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/MediaQueryList.cjs [app-ssr] (ecmascript)");
const NestingSelector = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/NestingSelector.cjs [app-ssr] (ecmascript)");
const Nth = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Nth.cjs [app-ssr] (ecmascript)");
const Number = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Number.cjs [app-ssr] (ecmascript)");
const Operator = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Operator.cjs [app-ssr] (ecmascript)");
const Parentheses = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Parentheses.cjs [app-ssr] (ecmascript)");
const Percentage = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Percentage.cjs [app-ssr] (ecmascript)");
const PseudoClassSelector = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/PseudoClassSelector.cjs [app-ssr] (ecmascript)");
const PseudoElementSelector = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/PseudoElementSelector.cjs [app-ssr] (ecmascript)");
const Ratio = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Ratio.cjs [app-ssr] (ecmascript)");
const Raw = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Raw.cjs [app-ssr] (ecmascript)");
const Rule = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Rule.cjs [app-ssr] (ecmascript)");
const Scope = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Scope.cjs [app-ssr] (ecmascript)");
const Selector = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Selector.cjs [app-ssr] (ecmascript)");
const SelectorList = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/SelectorList.cjs [app-ssr] (ecmascript)");
const String = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/String.cjs [app-ssr] (ecmascript)");
const StyleSheet = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/StyleSheet.cjs [app-ssr] (ecmascript)");
const SupportsDeclaration = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/SupportsDeclaration.cjs [app-ssr] (ecmascript)");
const TypeSelector = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/TypeSelector.cjs [app-ssr] (ecmascript)");
const UnicodeRange = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/UnicodeRange.cjs [app-ssr] (ecmascript)");
const Url = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Url.cjs [app-ssr] (ecmascript)");
const Value = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/Value.cjs [app-ssr] (ecmascript)");
const WhiteSpace = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/WhiteSpace.cjs [app-ssr] (ecmascript)");
exports.AnPlusB = AnPlusB.parse;
exports.Atrule = Atrule.parse;
exports.AtrulePrelude = AtrulePrelude.parse;
exports.AttributeSelector = AttributeSelector.parse;
exports.Block = Block.parse;
exports.Brackets = Brackets.parse;
exports.CDC = CDC.parse;
exports.CDO = CDO.parse;
exports.ClassSelector = ClassSelector.parse;
exports.Combinator = Combinator.parse;
exports.Comment = Comment.parse;
exports.Condition = Condition.parse;
exports.Declaration = Declaration.parse;
exports.DeclarationList = DeclarationList.parse;
exports.Dimension = Dimension.parse;
exports.Feature = Feature.parse;
exports.FeatureFunction = FeatureFunction.parse;
exports.FeatureRange = FeatureRange.parse;
exports.Function = Function.parse;
exports.GeneralEnclosed = GeneralEnclosed.parse;
exports.Hash = Hash.parse;
exports.Identifier = Identifier.parse;
exports.IdSelector = IdSelector.parse;
exports.Layer = Layer.parse;
exports.LayerList = LayerList.parse;
exports.MediaQuery = MediaQuery.parse;
exports.MediaQueryList = MediaQueryList.parse;
exports.NestingSelector = NestingSelector.parse;
exports.Nth = Nth.parse;
exports.Number = Number.parse;
exports.Operator = Operator.parse;
exports.Parentheses = Parentheses.parse;
exports.Percentage = Percentage.parse;
exports.PseudoClassSelector = PseudoClassSelector.parse;
exports.PseudoElementSelector = PseudoElementSelector.parse;
exports.Ratio = Ratio.parse;
exports.Raw = Raw.parse;
exports.Rule = Rule.parse;
exports.Scope = Scope.parse;
exports.Selector = Selector.parse;
exports.SelectorList = SelectorList.parse;
exports.String = String.parse;
exports.StyleSheet = StyleSheet.parse;
exports.SupportsDeclaration = SupportsDeclaration.parse;
exports.TypeSelector = TypeSelector.parse;
exports.UnicodeRange = UnicodeRange.parse;
exports.Url = Url.parse;
exports.Value = Value.parse;
exports.WhiteSpace = WhiteSpace.parse;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/config/parser.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const index = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/scope/index.cjs [app-ssr] (ecmascript)");
const index$1 = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/atrule/index.cjs [app-ssr] (ecmascript)");
const index$2 = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/pseudo/index.cjs [app-ssr] (ecmascript)");
const indexParse = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/index-parse.cjs [app-ssr] (ecmascript)");
const config = {
    parseContext: {
        default: 'StyleSheet',
        stylesheet: 'StyleSheet',
        atrule: 'Atrule',
        atrulePrelude (options) {
            return this.AtrulePrelude(options.atrule ? String(options.atrule) : null);
        },
        mediaQueryList: 'MediaQueryList',
        mediaQuery: 'MediaQuery',
        condition (options) {
            return this.Condition(options.kind);
        },
        rule: 'Rule',
        selectorList: 'SelectorList',
        selector: 'Selector',
        block () {
            return this.Block(true);
        },
        declarationList: 'DeclarationList',
        declaration: 'Declaration',
        value: 'Value'
    },
    features: {
        supports: {
            selector () {
                return this.Selector();
            }
        },
        container: {
            style () {
                return this.Declaration();
            }
        }
    },
    scope: index,
    atrule: index$1,
    pseudo: index$2,
    node: indexParse
};
module.exports = config;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/config/walker.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const index = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/node/index.cjs [app-ssr] (ecmascript)");
const config = {
    node: index
};
module.exports = config;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/index.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const create = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/create.cjs [app-ssr] (ecmascript)");
const lexer = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/config/lexer.cjs [app-ssr] (ecmascript)");
const parser = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/config/parser.cjs [app-ssr] (ecmascript)");
const walker = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/config/walker.cjs [app-ssr] (ecmascript)");
const syntax = create({
    ...lexer,
    ...parser,
    ...walker
});
module.exports = syntax;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/package.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"name\":\"css-tree\",\"version\":\"3.2.1\",\"description\":\"A tool set for CSS: fast detailed parser (CSS → AST), walker (AST traversal), generator (AST → CSS) and lexer (validation and matching) based on specs and browser implementations\",\"author\":\"Roman Dvornov <rdvornov@gmail.com> (https://github.com/lahmatiy)\",\"license\":\"MIT\",\"repository\":\"csstree/csstree\",\"keywords\":[\"css\",\"ast\",\"tokenizer\",\"parser\",\"walker\",\"lexer\",\"generator\",\"utils\",\"syntax\",\"validation\"],\"type\":\"module\",\"module\":\"./lib/index.js\",\"sideEffects\":false,\"main\":\"./cjs/index.cjs\",\"exports\":{\".\":{\"import\":\"./lib/index.js\",\"require\":\"./cjs/index.cjs\"},\"./dist/*\":\"./dist/*.js\",\"./package.json\":\"./package.json\",\"./tokenizer\":{\"import\":\"./lib/tokenizer/index.js\",\"require\":\"./cjs/tokenizer/index.cjs\"},\"./parser\":{\"import\":\"./lib/parser/index.js\",\"require\":\"./cjs/parser/index.cjs\"},\"./selector-parser\":{\"import\":\"./lib/parser/parse-selector.js\",\"require\":\"./cjs/parser/parse-selector.cjs\"},\"./generator\":{\"import\":\"./lib/generator/index.js\",\"require\":\"./cjs/generator/index.cjs\"},\"./walker\":{\"import\":\"./lib/walker/index.js\",\"require\":\"./cjs/walker/index.cjs\"},\"./convertor\":{\"import\":\"./lib/convertor/index.js\",\"require\":\"./cjs/convertor/index.cjs\"},\"./lexer\":{\"import\":\"./lib/lexer/index.js\",\"require\":\"./cjs/lexer/index.cjs\"},\"./definition-syntax\":{\"import\":\"./lib/definition-syntax/index.js\",\"require\":\"./cjs/definition-syntax/index.cjs\"},\"./definition-syntax-data\":{\"import\":\"./lib/data.js\",\"require\":\"./cjs/data.cjs\"},\"./definition-syntax-data-patch\":{\"import\":\"./lib/data-patch.js\",\"require\":\"./cjs/data-patch.cjs\"},\"./utils\":{\"import\":\"./lib/utils/index.js\",\"require\":\"./cjs/utils/index.cjs\"}},\"browser\":{\"./cjs/data.cjs\":\"./dist/data.cjs\",\"./cjs/version.cjs\":\"./dist/version.cjs\",\"./lib/data.js\":\"./dist/data.js\",\"./lib/version.js\":\"./dist/version.js\"},\"unpkg\":\"dist/csstree.esm.js\",\"jsdelivr\":\"dist/csstree.esm.js\",\"scripts\":{\"watch\":\"npm run build -- --watch\",\"build\":\"npm run bundle && npm run esm-to-cjs --\",\"build-and-test\":\"npm run build && npm run test:dist && npm run test:cjs\",\"bundle\":\"node scripts/bundle\",\"bundle-and-test\":\"npm run bundle && npm run test:dist\",\"esm-to-cjs\":\"node scripts/esm-to-cjs.cjs\",\"esm-to-cjs-and-test\":\"npm run esm-to-cjs && npm run test:cjs\",\"lint\":\"eslint lib scripts && node scripts/review-syntax-patch --lint && node scripts/update-docs --lint\",\"lint-and-test\":\"npm run lint && npm test\",\"update:docs\":\"node scripts/update-docs\",\"review:syntax-patch\":\"node scripts/review-syntax-patch\",\"test\":\"mocha lib/__tests --require lib/__tests/helpers/setup.js --reporter progress\",\"test:cjs\":\"mocha cjs/__tests --require lib/__tests/helpers/setup.js --reporter progress\",\"test:dist\":\"mocha dist/__tests --reporter progress\",\"coverage\":\"c8 --exclude lib/__tests --reporter=lcovonly npm test\",\"prepublishOnly\":\"npm run lint-and-test && npm run build-and-test\"},\"dependencies\":{\"mdn-data\":\"2.27.1\",\"source-map-js\":\"^1.2.1\"},\"devDependencies\":{\"c8\":\"^11.0.0\",\"clap\":\"^2.0.1\",\"esbuild\":\"^0.27.3\",\"eslint\":\"^8.50.0\",\"json-to-ast\":\"^2.1.0\",\"mocha\":\"^9.2.2\",\"rollup\":\"^2.80.0\"},\"engines\":{\"node\":\"^10 || ^12.20.0 || ^14.13.0 || >=15.0.0\"},\"files\":[\"data\",\"dist\",\"cjs\",\"!cjs/__tests\",\"lib\",\"!lib/__tests\"]}"));}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/version.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { version } = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/package.json (json)");
exports.version = version;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/definition-syntax/index.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SyntaxError = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/definition-syntax/SyntaxError.cjs [app-ssr] (ecmascript)");
const generate = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/definition-syntax/generate.cjs [app-ssr] (ecmascript)");
const parse = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/definition-syntax/parse.cjs [app-ssr] (ecmascript)");
const walk = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/definition-syntax/walk.cjs [app-ssr] (ecmascript)");
exports.SyntaxError = SyntaxError.SyntaxError;
exports.generate = generate.generate;
exports.parse = parse.parse;
exports.walk = walk.walk;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/utils/clone.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const List = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/utils/List.cjs [app-ssr] (ecmascript)");
function clone(node) {
    const result = {};
    for (const key of Object.keys(node)){
        let value = node[key];
        if (value) {
            if (Array.isArray(value) || value instanceof List.List) {
                value = value.map(clone);
            } else if (value.constructor === Object) {
                value = clone(value);
            }
        }
        result[key] = value;
    }
    return result;
}
exports.clone = clone;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/utils/ident.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const charCodeDefinitions = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/char-code-definitions.cjs [app-ssr] (ecmascript)");
const utils = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/utils.cjs [app-ssr] (ecmascript)");
const REVERSE_SOLIDUS = 0x005c; // U+005C REVERSE SOLIDUS (\)
function decode(str) {
    const end = str.length - 1;
    let decoded = '';
    for(let i = 0; i < str.length; i++){
        let code = str.charCodeAt(i);
        if (code === REVERSE_SOLIDUS) {
            // special case at the ending
            if (i === end) {
                break;
            }
            code = str.charCodeAt(++i);
            // consume escaped
            if (charCodeDefinitions.isValidEscape(REVERSE_SOLIDUS, code)) {
                const escapeStart = i - 1;
                const escapeEnd = utils.consumeEscaped(str, escapeStart);
                i = escapeEnd - 1;
                decoded += utils.decodeEscaped(str.substring(escapeStart + 1, escapeEnd));
            } else {
                // \r\n
                if (code === 0x000d && str.charCodeAt(i + 1) === 0x000a) {
                    i++;
                }
            }
        } else {
            decoded += str[i];
        }
    }
    return decoded;
}
// https://drafts.csswg.org/cssom/#serialize-an-identifier
// § 2.1. Common Serializing Idioms
function encode(str) {
    let encoded = '';
    // If the character is the first character and is a "-" (U+002D),
    // and there is no second character, then the escaped character.
    // Note: That's means a single dash string "-" return as escaped dash,
    // so move the condition out of the main loop
    if (str.length === 1 && str.charCodeAt(0) === 0x002D) {
        return '\\-';
    }
    // To serialize an identifier means to create a string represented
    // by the concatenation of, for each character of the identifier:
    for(let i = 0; i < str.length; i++){
        const code = str.charCodeAt(i);
        // If the character is NULL (U+0000), then the REPLACEMENT CHARACTER (U+FFFD).
        if (code === 0x0000) {
            encoded += '\uFFFD';
            continue;
        }
        if (// If the character is in the range [\1-\1f] (U+0001 to U+001F) or is U+007F ...
        // Note: Do not compare with 0x0001 since 0x0000 is precessed before
        code <= 0x001F || code === 0x007F || code >= 0x0030 && code <= 0x0039 && (// If the character is the first character ...
        i === 0 || // If the character is the second character ... and the first character is a "-" (U+002D)
        i === 1 && str.charCodeAt(0) === 0x002D)) {
            // ... then the character escaped as code point.
            encoded += '\\' + code.toString(16) + ' ';
            continue;
        }
        // If the character is not handled by one of the above rules and is greater
        // than or equal to U+0080, is "-" (U+002D) or "_" (U+005F), or is in one
        // of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to U+005A),
        // or \[a-z] (U+0061 to U+007A), then the character itself.
        if (charCodeDefinitions.isName(code)) {
            encoded += str.charAt(i);
        } else {
            // Otherwise, the escaped character.
            encoded += '\\' + str.charAt(i);
        }
    }
    return encoded;
}
exports.decode = decode;
exports.encode = encode;
}),
"[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/index.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const index$1 = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/index.cjs [app-ssr] (ecmascript)");
const version = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/version.cjs [app-ssr] (ecmascript)");
const create = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/syntax/create.cjs [app-ssr] (ecmascript)");
const List = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/utils/List.cjs [app-ssr] (ecmascript)");
const Lexer = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/lexer/Lexer.cjs [app-ssr] (ecmascript)");
const index = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/definition-syntax/index.cjs [app-ssr] (ecmascript)");
const clone = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/utils/clone.cjs [app-ssr] (ecmascript)");
const names$1 = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/utils/names.cjs [app-ssr] (ecmascript)");
const ident = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/utils/ident.cjs [app-ssr] (ecmascript)");
const string = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/utils/string.cjs [app-ssr] (ecmascript)");
const url = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/utils/url.cjs [app-ssr] (ecmascript)");
const types = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/types.cjs [app-ssr] (ecmascript)");
const names = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/names.cjs [app-ssr] (ecmascript)");
const TokenStream = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/TokenStream.cjs [app-ssr] (ecmascript)");
const OffsetToLocation = __turbopack_context__.r("[project]/node_modules/.pnpm/css-tree@3.2.1/node_modules/css-tree/cjs/tokenizer/OffsetToLocation.cjs [app-ssr] (ecmascript)");
const { tokenize, parse, generate, lexer, createLexer, walk, find, findLast, findAll, toPlainObject, fromPlainObject, fork } = index$1;
exports.version = version.version;
exports.createSyntax = create;
exports.List = List.List;
exports.Lexer = Lexer.Lexer;
exports.definitionSyntax = index;
exports.clone = clone.clone;
exports.isCustomProperty = names$1.isCustomProperty;
exports.keyword = names$1.keyword;
exports.property = names$1.property;
exports.vendorPrefix = names$1.vendorPrefix;
exports.ident = ident;
exports.string = string;
exports.url = url;
exports.tokenTypes = types;
exports.tokenNames = names;
exports.TokenStream = TokenStream.TokenStream;
exports.OffsetToLocation = OffsetToLocation.OffsetToLocation;
exports.createLexer = createLexer;
exports.find = find;
exports.findAll = findAll;
exports.findLast = findLast;
exports.fork = fork;
exports.fromPlainObject = fromPlainObject;
exports.generate = generate;
exports.lexer = lexer;
exports.parse = parse;
exports.toPlainObject = toPlainObject;
exports.tokenize = tokenize;
exports.walk = walk;
}),
];

//# sourceMappingURL=50d1e_css-tree_befbf671._.js.map