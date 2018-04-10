/**
 * 判断二维数组中是否存在元素，若二维数组有序则可以优化算法。
 *
 * @param {Array} arr 二维数组
 * @param {Anytype} target 需要查找的元素
 * @param {Boolean} isOrdered 是否有序 默认为false
 *
 * @returns {Boolean} 返回是否存在的结果
 */

function orderedFind(arr, target) {
	let row = arr.length - 1
	let col = 0
	while(row >= 0 && arr[row][col]) {
		let cur = arr[row][col]
		if(cur > target) {
			row--
		} else if(cur < target) {
			col++
		} else {
			return true
		}
	}
	return false
}

function unorderedFind(arr, target) {
	let flag = false
	arr.forEach(item => {
		if(item.includes(target)) flag = true
	})
	return flag
}

function findIn2DArray(arr, target, isOrdered=false) {
	return isOrdered ? orderedFind(arr, target) : unorderedFind(arr, target)
}

export default findIn2DArray