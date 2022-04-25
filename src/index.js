
function checkParameters(object, block, successCallback) {
    if (typeof object !== "object") {
        throw new Error("can ony work with objects")
    }
    if (typeof block !== "function") {
        throw new Error("block is not a function")
    }
    return successCallback(object, block)
}

/**
 * 
 * @param {object} object 
 * @param {(key: string, value: any) => void} block 
 * @returns {object} Copy of the original object
 */
const forEachEntryOf = (object, block) => checkParameters(object, block, (object, block) => {
    Object.keys(object).forEach(key => block(String(key), object[key]))
    return { ...object }
})

/**
 * 
 * @param {object} object 
 * @param {(key: string, value: any) => [key: string, value: any]} block 
 * @returns {object} The modified object
 */
const mapEachEntryOf = (object, block) => checkParameters(object, block, (object, block) => {
    const result = {}
    Object.keys(object)
        .map(key => block(String(key), object[key]))
        .forEach(([key, value]) => result[key] = value)
    return result
})

/**
 * 
 * @param {object} object 
 * @param {(key: string, value: any) => boolean} block
 * @returns {object} 
 */
const filterEachEntryOf = (object, block) => checkParameters(object, block, (object, block) => {
    const result = {}
    Object.entries(object)
        .map(([key, value]) => [key, value, block(key, value)])
        .filter(([key, value, flag]) => flag)
        .forEach(([key, value]) => result[key] = value)
    return result
})

/**
 * 
 * @param {object} object 
 * @param {(key: String, value: any) => boolean} block 
 * @returns {boolean} `true` when every block for pair of key-value returned true 
 */
const everyEntryOf = (object, block) => checkParameters(object, block, (object, block) => {
    return mapEachEntryOf(object, block).every(Boolean)
})

Object.prototype.forEach = function(block) {
    return forEachEntryOf(this, block)
}

Object.prototype.map = function(block) {
    return mapEachEntryOf(this, block)
}

Object.prototype.filter = function(block) {
    return filterEachEntryOf(this, block)
}

Object.prototype.every = function(block) {
    return everyEntryOf(this, block)
}

module.exports = { forEachEntryOf, mapEachEntryOf, filterEachEntryOf, everyEntryOf }