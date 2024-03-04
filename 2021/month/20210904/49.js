/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
	let map = new Map()
	for (const str of strs) {
		const count = new Array(26).fill(0)
		for (const strElement of str) {
			count[strElement.charCodeAt(0) - "a".charCodeAt(0)]++
		}
		let key = count.join()
		console.log(map.has(key))
		let list = []
		if (map.has(key)) {
			list = map.get(key)
		}
		list.push(str)

		map.set(key, list)
	}
	return [...map.values()]
}

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(strs))
