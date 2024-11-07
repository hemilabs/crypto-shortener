type Options = {
  length?: number;
  prefixes?: string[];
};

function shortenWith(str: string, options: Options = {}) {
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
 */
export function shorten(arg: string, options?: Options): string;
export function shorten(arg: Options): (str: string) => string;
export function shorten(arg: string | Options, options?: Options) {
  if (typeof arg === "string") {
    return shortenWith(arg, options);
  }
  if (typeof arg === "object" && arg !== null) {
    return (str: string) => shortenWith(str, arg);
  }
  throw new TypeError("Argument is not string or an options object");
}
