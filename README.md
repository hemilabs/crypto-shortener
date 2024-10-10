# crypto-shortener

Shorten crypto hashes, addresses with ellipsis and too much magic!

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

const customShorten = shorten(["0x", "bc1", "tb1"])(5);
console.log(customShorten("bc1qcup4k9q7j0gsjfcv2nqfeu88wjcs9wv0jfuu56"));
// "bc1qcup4...fuu56"
```

## API

### shorten(arg: string): string

Shortens the given string `arg` using ellipsis to remove the characters in the middle.
Returns the shortened string.

Defaults to the first 4 characters of the string, ellipsis and the last 4 characters.

### shorten(arg: number): function

When given a number, it returns a new `shorten` function that will shorten that amount of characters instead of the default.

### shorten(arg: string[]): function

When given a strings array, it returns a new `shorten` function that will use those as known prefixes.
The shorten logic will not consider those strings when computing the length of the leading part of the result string.
That allows ignoring prefixes like `bc1` or `0x`, commonly used in crypto strings.
