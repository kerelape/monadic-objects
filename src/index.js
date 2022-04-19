
/**
 * 
 * @param {object} object 
 * @param {(key: string, value: any) => void} block 
 * @returns {object} Copy of the original object
 */
const forEachEntryOf = (object, block) => {
    if (typeof block !== "function") {
        throw new Error("block is not a function")
    }
    Object.keys(object).forEach(key => block(String(key), object[key]))
    return { ...object }
}

/**
 * 
 * @param {object} object 
 * @param {(key: string, value: any) => [key: string, value: any]} block 
 * @returns {object} The modified object
 */
const mapEachEntryOf = (object, block) => {
    if (typeof object !== "object") {
        throw new Error("can only work with objects")
    }
    if (typeof block !== "function") {
        throw new Error("block is not a function")
    }
    const result = {}
    Object.keys(object)
        .map(key => block(String(key), object[key]))
        .forEach(([key, value]) => result[key] = value)
    return result
}

/**
 * 
 * @param {object} object 
 * @param {(key: string, value: any) => boolean} block
 * @returns {object} 
 */
const filterEachEntryOf = (object, block) => {
    if (typeof object !== "object") {
        throw new Error("can ony work with objects")
    }
    if (typeof block !== "function") {
        throw new Error("block is not a function")
    }
    const result = {}
    Object.keys(object)
        .map(key => [key, value, block(key, value)])
        .filter(([_, _, f]) => f)
        .forEach(([key, value]) => result[key] = value)
    return result
}