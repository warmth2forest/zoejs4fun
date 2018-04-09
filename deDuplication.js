/**
 * @param {Array} arr 需要去重的数组
 *
 * @returns {Array} 去重后返回一个新数组
 *
 * const arr = [1, 1, 2, 11, 32, 1, 2, 3, 11]
 *
 * deDuplication(arr)
 * // => [1, 2, 11, 32, 3]
*/

function deDuplication(arr) {
	return [...(new Set(arr))]
}

export default deDuplication