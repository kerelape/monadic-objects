const { ok, throws } = require("assert");
const index = require("../src/index");

describe("forEach", () => {
    it("fails without 'block'", () => {
        throws(() => ({}).forEach())
    });
    describe("fails with incorrect 'block'", () => {
        [0, "", Symbol(), [], {}, undefined, false]
            .forEach(block => {
                it(`of type ${typeof block}`, () => {
                    throws(() => ({}).forEach(block));
                });
            });
    })
    describe("iterates", () => {
        it("over empty object", () => {
            ok(() => ({}).forEach(() => {}));
        });
        it("over simple object", () => {
            ok(() => ({ a: "a", b: "b" }).forEach(() => {}));
        });
    });
});