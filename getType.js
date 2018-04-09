/**
 * @param {AnyType} value 需要检测的value
 *
 * @returns {String} 返回检测出的数据类型
 *
 * getType(()=>{})
 * // => "Function"
 *
 * getType([1])
 * // => "Array"
 */

function getType(value) {
    return Object.prototype.toString.call(value).match(/\s{1}(\w+)/)[1]
}

export default getType