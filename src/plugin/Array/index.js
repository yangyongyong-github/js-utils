
/**
 * JS要比较两个数组是否有相同的元素，**即两个数组所有元素都相同**，但元素的顺序不一定一致
 * @param {array} a
 * @param {array} b
 * @returns boolean
 */
export const isSameArray = (a, b) => a.length === b.length && a.sort().toString() === b.sort().toString();
// a.join() === b.join()
// a.length === b.length && a.filter(t => !b.includes(t))

/**
 *
 * @param {object} objectArray
 * @param {string} property
 * @returns Object
 * 	{
 *     propertyName1 : [{},{}],
 *     propertyName2 : [{}]
 *   }
 */
export function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
        var key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}