import * as chai from "chai";

import { shorten } from "../src/index.js";

const should = chai.should();

describe("shorten()", function () {
  it("should shorten a transaction hash", function () {
    const txId =
      "6e3e06aa91b715126c964baf7e05b0f3a8b2c299ce1c2d8071f84336356db3a0";
    const shortened = "6e3e...b3a0";
    shorten(txId).should.equal(shortened);
  });

  it("should allow changing the prefixes and digits", function () {
    const address = "bc1qcup4k9q7j0gsjfcv2nqfeu88wjcs9wv0jfuu56";
    const shortened = "bc1qcup4...fuu56";
    // @ts-ignore ts(2349) JSDoc syntax supported by TS is not expressive enough
    const customShorten = shorten(["0x", "bc1", "tb1"])(5);
    customShorten(address).should.equal(shortened);
  });

  it("should should throw an error if the types are unsupported", function () {
    should.throw(() => shorten(), TypeError);
    should.throw(() => shorten({}), TypeError);
    should.throw(() => shorten([1]), TypeError);
  });
});
