
module.exports = {
	/**
	 * delay fn
	 * @param {number} duration ms
	 * @returns Promise
	 */
	delay:
		(duration = 1500) => new Promise(resolve => setTimeout(resolve, duration)),
	// async map
	serial:
		async function (list, map, result = []) {
			for (let i = 0; i < list.length; i++) {
				result.push(await map(list[i], i, list));
			}
			return result;
		}
}
