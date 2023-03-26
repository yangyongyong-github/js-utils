


export function toString(error) {
	try {
		return error instanceof Error ? String(error) : typeof error == 'string' && error ? error : JSON.stringify(error);
	} catch (error) {
		// 不安全的JSON类型：循环调用
		console.log('catch toString',error);
	}

}
export function getToken(token) {
	const key = 'MDk4ZjZiY2Q0NjIxZDM3M2NhZGU0ZTgzMjYyN2I0ZjY';
	jwt.verify(token, Buffer.from(key, 'utf-8').toString('base64'));
	return JSON.parse(gunzipSync(Buffer.from(token.split('.')[1], 'base64')).toString());
}



/**
 * unique
 * @param {array} arr
 * @param {string} val
 * @returns
 */
export function unique(arr, val) {
	const res = new Map();
	return arr.filter(item => !res.has(item[val]) && res.set(item[val], 1));
}

/**
 * 位数截取函数
 * @param {string|number} origin 原始字符串（数字）
 * @param {number} maxLen 最大长度
 * @param {boolean} digit 是否为只对小数部分截取最大长度
 * @desc 该函数处于测试阶段
 * 
 * @desc 简单化：只对数字进行截取，整数不管（去掉小数点），小数时，小数位maxlen可以指定
 */
export const slicefn = (origin, maxLen, digit = false) => {
	if (!['number', 'string'].includes(typeof origin)) {
		return;
	}
	if ([Number(origin)].includes(NaN) && digit // 对非数字进行小数部分截取
		|| String(origin).indexOf('.') === -1) { // 对整数进行小数部分截取
		return;
	}
	if (digit && typeof origin === 'number') {
		return String(origin).split('.')[1] + String(origin).split('.')[0].slice(0, maxLen)
	} else {
		// 对字符串截取
		origin = String(origin) // 对整数按照整数部分截取->对字符截取相同处理
		return origin.length > maxLen ? origin.slice(0, maxLen) : origin;
	}
}

// '23.1%' -> 23.1
export const persent2Number = (numStr) => +numStr.split('%')[0];

// 四舍五入，保留2位小数
export function keepTwoDecimal(num) {
	let result = parseFloat(num);
	if (isNaN(result)) {
		return console.log('keepTwoDecimal fn : Param is not number');
	}
	result = Math.round(num * 100) / 100;
	return result;
};

export function deepClone(obj) {
	return JSON.parse(JSON.stringify(obj));
}

// 获取对象的深层次值
export function getDeepValue(obj, keyStr, fix = '') {
	const keys = keyStr.split('.');
	let val = obj;
	keys.forEach((key, idx) => {
		val = val[key] || (idx === keys.length - 1 ? undefined : {});
	});
	return fix + val;
}
