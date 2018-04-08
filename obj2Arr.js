/**
 * 传入转换对象`obj`和回调函数`iteratee`
 * 函数`iteratee`可以对输出函数进行处理，需要传入参数`key`、`value`和`obj`
 *
 * @param {Object} obj 需要转换的对象
 * @param {Function} iteratee 处理输出值得回调函数
 * 
 * @returns {Array} 返回一个新数组
 * let obj = {
 * 	   name: 'warmth',
 * 	   age: 10,
 * 	   skills: ['node', 'vue', 'javascript']
 * }
 * obj2Arr(obj, (key, value, obj) => {
 *     return [key, value, obj]
 * })

 * @output: [ 
 * 	   [ 'name', 'warmth', { name: 'warmth', age: 10, skills: ['node', 'vue', 'javascript'] } ],
 * 	   [ 'age', 10, { name: 'warmth', age: 10, skills: ['node', 'vue', 'javascript'] } ],
 * 	   [ 'skills', [ 'node', 'vue', 'javascript' ], { name: 'warmth', age: 10, skills: ['node', 'vue', 'javascript'] } ] 
 * ]
*/

function obj2Arr(obj, iteratee) {
	let arr = []
	for(let key in obj) {
		arr.push(iteratee(key, obj[key], obj))
	}
	return arr
}

export default obj2Arr