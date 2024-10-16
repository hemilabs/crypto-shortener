/**
 * @typedef {object} Options
 * @property {number} [length] Characters to keep.
 * @property {string[]} [prefixes] Prefixes to ignore.
 */

/**
 * @param {string} str
 * @param {Options} [options]
 * @returns {string}
 */
function shortenWith(str, options = {}) {
  const { length = 4, prefixes = [] } = options;
  const prefix = prefixes.find((p) => str.startsWith(p)) || "";
  const head = str.slice(prefix.length, prefix.length + length);
  const tail = str.slice(-length);
  return `${prefix}${head}...${tail}`;
}

/**
 * Shortens the given string `arg` using ellipsis to remove the characters in
 * the middle.
 *
 * When given an options object instead of a `string`, it will return a new
 * function that will use those to shorten any given strings.
 *
 * @param {string|Options} arg
 * @param {Options} [options]
 * @returns {string|((str:string)=>string)}
 * @throws {TypeError}
 */
export function shorten(arg, options) {
  if (typeof arg === "string") {
    return shortenWith(arg, options);
  }
  if (typeof arg === "object" && arg !== null) {
    return (str) => shortenWith(str, arg);
  }
  throw new TypeError("Argument is not string or an options object");
}
