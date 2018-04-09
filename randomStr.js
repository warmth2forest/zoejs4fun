/**
 * @param {Number} length 生成随机字符串的长度
 *
 * @returns {String} 生成的随机字符串
 *
 * randomStr(15)
 * // => "NrZlM3XJiKBR7YM"
 */

function randomStr(length) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
    let str = ''
    for(let i = 0; i <length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return str
}

export default randomStr