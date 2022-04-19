
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