module.exports = {
    deepClone: (obj) => {
        return JSON.parse(JSON.stringify(obj));
    },
    // 获取对象的深层次值
    getDeepValue: (obj, keyStr, fix = '') => {
        const keys = keyStr.split('.');
        let val = obj;
        keys.forEach((key, idx) => {
            val = val[key] || (idx === keys.length - 1 ? undefined : {});
        });
        return fix + val;
    }
}