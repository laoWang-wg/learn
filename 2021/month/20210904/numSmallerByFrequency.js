/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 * 输入：queries = ["bbb","cc"], words = ["a","aa","aaa","aaaa"]
 输出：[1,2]
 解释：第一个查询 f("bbb") < f("aaaa")，第二个查询 f("aaa") 和 f("aaaa") 都 > f("cc")。
 *
 */

function numSmallerByFrequency(queries, words) {
	function funF(str) {
		let arr = Array.from({ length: 26 }, () => 0)
		// 统计 字母的个数
		for (let i = 0; i < str.length; i++) {
			arr[str.charCodeAt(i) - "a".charCodeAt(0)]++
		}
		// 利用字母特性  遍历到的第一个  肯定是最小的字母 数量
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] != 0) {
				return arr[i]
			}
		}
		return 0
	}
	let output = []
	for (let i = 0; i < queries.length; i++) {
		let count = 0
		let value = funF(queries[i])
		for (let j = 0; j < words.length; j++) {
			let w = funF(words[j])
			if (value < w) {
				count++
			}
		}
		output[i] = count
	}
	return output
}

console.log(
	numSmallerByFrequency(["bbb", "cc", "e"], ["a", "aa", "aaa", "aaaa"])
)
