const { ok, throws, deepEqual } = require("assert");
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

describe("map", () => {
    it("fails without 'block'", () => {
        throws(() => ({}).map())
    });
    describe("fails with incorrect 'block'", () => {
        [0, "", Symbol(), [], {}, undefined, false]
            .forEach(block => {
                it(`of type ${typeof block}`, () => {
                    throws(() => ({}).map(block));
                });
            });
    })
    it("can map keys", () => {
        deepEqual(
            ({ a: "b", c: "c" })
                .map((key, value) => [`new_${key}`, value]),
            ({ new_a: "b", new_c: "c" })
        );
    });
    it("can map values", () => {
        deepEqual(
            ({ a: "b", c: "c" })
                .map((key, value) => [key, value + value]),
            ({ a: "bb", c: "cc" })
        );
    });
});