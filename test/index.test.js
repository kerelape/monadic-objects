const { ok, throws, deepEqual, equal } = require("assert");
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

describe("filter", () => {
    it("fails without 'block'", () => {
        throws(() => ({}).filter())
    });
    describe("fails with incorrect 'block'", () => {
        [0, "", Symbol(), [], {}, undefined, false]
            .forEach(block => {
                it(`of type ${typeof block}`, () => {
                    throws(() => ({}).filter(block));
                });
            });
    })
    it("can filter keys", () => {
        deepEqual(
            ({ a: "b", c: "c" })
                .filter((key, value) => key != "a"),
            ({ c: "c" })
        );
    });
    it("can filter values", () => {
        deepEqual(
            ({ a: "", c: "c" })
                .filter((key, value) => Boolean(value)),
            ({ c: "c" })
        );
    });
});

describe("every", () => {
    it("fails without 'block'", () => {
        throws(() => ({}).every())
    });
    describe("fails with incorrect 'block'", () => {
        [0, "", Symbol(), [], {}, undefined, false]
            .forEach(block => {
                it(`of type ${typeof block}`, () => {
                    throws(() => ({}).every(block));
                });
            });
    })
    describe("can check keys", () => {
        it("when every key starts with an underscore", () => {
            equal(
                ({ _a: 1, _b: 2 }).every(key => key.startsWith("_")),
                true
            );
        });
        it("when some keys do not start with an underscore", () => {
            equal(
                ({ a: 1, _b: 2 }).every(key => key.startsWith("_")),
                false
            );
        })
        it("when not a single key starts with an underscore", () => {
            equal(
                ({ a: 1, b: 2 }).every(key => key.startsWith("_")),
                false
            );
        });
    });
    describe("can check values", () => {
        it("when every value is a number", () => {
            equal(
                ({ a: 1, b: 2 }).every((key, value) => typeof value == "number"),
                true
            );
        });
        it("when some values are not numbers", () => {
            equal(
                ({ a: 1, b: "abc" }).every((key, value) => typeof value == "number"),
                false
            );
        })
        it("when not a single value is a number", () => {
            equal(
                ({ a: "foo", b: "bar" }).every((key, value) => typeof value == "number"),
                false
            );
        });
    });
});