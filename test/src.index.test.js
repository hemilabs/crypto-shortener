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
    const options = { length: 5, prefixes: ["bc1"] };
    shorten(address, options).should.equal(shortened);
  });

  it("should allow one-level customization", function () {
    const address = "0x4675C7e5BaAFBFFbca748158bEcBA61ef3b0a263";
    const shortened = "0x4675...a263";
    const shortenEvmAddress = shorten({ prefixes: ["0x"] });
    // @ts-ignore ts(2349) Cannot type proper overloads with JSDoc.
    shortenEvmAddress(address).should.equal(shortened);
  });

  it("should should throw TypeError errors on wrong input", function () {
    // @ts-ignore ts(2554) This is expected.
    should.throw(() => shorten(), TypeError);
    // @ts-ignore ts(2345) This is expected.
    should.throw(() => shorten(null), TypeError);
    // @ts-ignore ts(2345) This is expected.
    should.throw(() => shorten(-2), TypeError);
  });
});
