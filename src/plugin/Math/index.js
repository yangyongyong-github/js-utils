
module.exports = {
	// '23.1%' -> 23.1
	persent2Number:
		(numStr) => +numStr.split('%')[0],
	// 四舍五入，保留2位小数
	keepTwoDecimal:
		(num) => {
			let result = parseFloat(num);
			if (isNaN(result)) {
				return console.log('keepTwoDecimal fn : Param is not number');
			}
			result = Math.round(num * 100) / 100;
			return result;
		},
	// 求和
	// getSum(1, 2, 3)(4, 5, 6)
	getSum: 
	(...args1) => (...args2) => args1.concat(args2).reduce((a, b) => a + b, 0),
}