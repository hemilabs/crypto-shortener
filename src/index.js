/**
 * @typedef {object} Options
 * @property {number} [length]
 * @property {string[]} [prefixes]
 */

/**
 * @param {Options} options
 * @param {string} str
 * @returns {string}
 */
function shortenWith(options, str) {
  const { length = 4, prefixes = [] } = options;
  const prefix = prefixes.find((p) => str.startsWith(p)) || "";
  const head = str.slice(prefix.length, prefix.length + length);
  const tail = str.slice(-length);
  return `${prefix}${head}...${tail}`;
}

/**
 * @callback PartialShorten
 * @param {Options} options
 * @param {string|number|string[]} arg
 * @returns {string|Shorten}
 * @throws {TypeError}
 */

/**
 * @type {PartialShorten}
 */
function partialShorten(options, arg) {
  if (typeof arg === "string") {
    return shortenWith(options, arg);
  } else if (typeof arg === "number" && arg > 0) {
    return (_arg) => partialShorten({ ...options, length: arg }, _arg);
  } else if (
    typeof arg === "object" &&
    typeof arg.length === "number" &&
    arg.every?.((item) => typeof item === "string")
  ) {
    return (_arg) => partialShorten({ ...options, prefixes: arg }, _arg);
  }
  throw new TypeError(
    "Argument is not string, positive number or array of strings",
  );
}

/**
 * @callback Shorten
 * @param {string|number|string[]} arg
 * @returns {string|Shorten}
 * @throws {TypeError}
 */

/**
 * @type {Shorten}
 */
export const shorten = (arg) => partialShorten({}, arg);
