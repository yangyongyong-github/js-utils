module.exports = {
    /**
     * JS要比较两个数组是否有相同的元素，**即两个数组所有元素都相同**，但元素的顺序不一定一致
     * @param {array} a
     * @param {array} b
     * @returns boolean
     */
    isSameArray:
        (a, b) => a.length === b.length && a.sort().toString() === b.sort().toString(),
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
    groupBy:
        function (objectArray, property) {
            return objectArray.reduce(function (acc, obj) {
                var key = obj[property];
                if (!acc[key]) {
                    acc[key] = [];
                }
                acc[key].push(obj);
                return acc;
            }, {})
        },
    /**
    * unique
    * @param {array} arr
    * @param {string} val
    * @returns
    */
    unique: (arr, val) => {
        const res = new Map();
        return arr.filter(item => !res.has(item[val]) && res.set(item[val], 1));
    },

    /**
     * 数组之间的运算
     */
    // 交集
    commonHasEle: (arr1, arr2) => [...new Set(arr1)].filter((item) => arr2.indexOf(item) >= 0),
    // 并集
    combineArr: (arr1, arr2) => [...new Set([...arr1, ...arr2])],
    // 补集（差集）
    diff2arr: (arr1, arr2) => [...new Set([...arr1, ...arr2])].filter((item) => cross.indexOf(item) < 0)
}       