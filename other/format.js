/**
 * dateFormat
 * @param {Date} date 
 * @param {Number} part 0 日期+时间，1日期，2时间(19:27)
 * @returns dateString or 'Invalid Date' or error
 * 
 * 当部分服务器配置为 非中文时，会出些问题，慎用
 */
export function dateFormat(part = 0, date = +new Date()) {
	date = new Date(date);
	switch (part) {
		case 0:
			return date.toLocaleString(); // '2023/2/19 19:18:36' 
		case 1:
			return date.toLocaleDateString(); // '2023/2/19'
		case 2:
			return date.toLocaleTimeString().slice(0, 5) // 19:27
		default:
			return 'date param error'
	}
}

/**
 * formatDate
 * @description: 处理了服务器的时区问题【严格】
 * @param {Date} date 
 * @param {string} format 'yyyy-MM-dd hh:mm:ss' | 'yyyy-MM-dd' | 'hh:mm:ss
 * @returns 
 */
export function formatDate(date = +new Date(), format = 'yyyy-MM-dd hh:mm:ss') {
	if (!(date instanceof Date)) {
		date = new Date(/^\d+$/.test(date) ? date * 1 : date);
	}
	if ('Invalid Date' === date.toString()) return 'Invalid Date';
	function parseNum(num, len, fill) {
		num = '' + num;
		if (fill) {
			num.length > len ? (num = num.substring(0, len)) : num.length < len && (num += '0000'.substring(0, len - num.length));
		} else {
			num.length < len && (num = '0000'.substring(0, len - num.length) + num);
		}
		return num;
	}
	return format.replace(/([yMdhmsqS])\1*/g, function (str) {
		switch (str.charAt(0)) {
			case 'y':
				return parseNum(date.getFullYear(), str.length);
			case 'M':
				return parseNum(date.getMonth() + 1, str.length);
			case 'd':
				return parseNum(date.getDate(), str.length);
			case 'h':
				return parseNum(date.getHours(), str.length);
			case 'm':
				return parseNum(date.getMinutes(), str.length);
			case 's':
				return parseNum(date.getSeconds(), str.length);
			case 'q':
				return parseNum(Math.floor((date.getMonth() + 3) / 3), str.length);
			case 'S':
				return parseNum(date.getMilliseconds(), str.length, true);
		}
	});
}