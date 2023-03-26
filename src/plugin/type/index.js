
module.exports = {
    /**
     * @desc 校验数据类型
     * @param {all} data
     * @returns string
     */
    typeOf:
        data => Object.prototype.toString.call(data).slice(8, -1).toLowerCase(),
    /*
    typeOf('tomas')  // string
    typeOf([])  // array
    typeOf(new Date())  // date
    typeOf(null) // null
    typeOf(true) // boolean
    typeOf(() => { }) // function
*/
}