# crypto-shortener

[![NPM version](https://img.shields.io/npm/v/crypto-shortener)](https://www.npmjs.com/package/crypto-shortener) [![Package size](https://img.shields.io/bundlephobia/minzip/crypto-shortener)](https://bundlephobia.com/package/crypto-shortener) [![Follow Hemi on X](https://img.shields.io/twitter/url?url=https%3A%2F%2Fx.com%2Fhemi_xyz&style=flat&logo=x&label=%40hemi_xyz&labelColor=%23ff6c15&color=%230a0a0a)](https://x.com/intent/follow?screen_name=hemi_xyz)

Shorten crypto hashes, addresses with ellipsis.

## Installation

```sh
npm install crypto-shortener
```

## Usage

```js
import { shorten } from "crypto-shortener";

console.log(
  shorten("6e3e06aa91b715126c964baf7e05b0f3a8b2c299ce1c2d8071f84336356db3a0"),
);
// "6e3e...b3a0"

const shortenAddress = shorten({ length: 5, prefixes: ["bc1"] });
console.log(shortenAddress("bc1qcup4k9q7j0gsjfcv2nqfeu88wjcs9wv0jfuu56"));
// "bc1qcup4...fuu56"
```

## API

### shorten(arg: string, options?: { length?: number, prefixes?: string[] }): string

Shortens the given string `arg` using ellipsis to remove the characters in the middle.
Returns the shortened string.

#### options.length

Keep the first and last `length` characters of the original string.
Defaults to 4.

#### options.prefixes

Don't consider those strings when computing the length of the leading part.
This allows ignoring prefixes like `bc1` or `0x`, commonly used in crypto strings.
Defaults to none.

### shorten(arg: { length?: number, prefixes?: string[] }): (str: string) => string

When given an options object instead of a `string`, it will return a new function that will use those to shorten any given strings.
