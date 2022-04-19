const { ok, throws } = require("assert");
const index = require("../src/index");

describe("forEach", () => {
    it("fails without 'block'", () => {
        throws(() => ({}).forEach())
    });
    it("fails with incorrect 'block'", () => {
        throws(() => ({}).forEach(666));
    });
    describe("iterates", () => {
        it("over empty object", () => {
            ok(() => ({}).forEach(() => {}));
        });
        it("over simple object", () => {
            ok(() => ({ a: "a", b: "b" }).forEach(() => {}));
        });
    });
});