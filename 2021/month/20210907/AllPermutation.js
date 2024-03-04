//如果输入abc，它的组合有a、b、c、ab、ac、bc、abc。

function allPermutation(str) {
	let target = []
	let result = []
	const help = function (index, target) {
		// console.log(index, target)
		if (index > str.length) return

		target.length > 0 && result.push([...target])
		for (let i = index; i < str.length; i++) {
			if (target.includes(str[i])) {
				continue
			}
			target.push(str[i])
			help(i + 1, target)
			target.pop()
		}
	}
	help(0, target)
	console.log(result)
}

allPermutation("abc")

var permute = function (nums) {
	const res = [],
		path = []
	backtracking(nums, nums.length, [])
	return res

	function backtracking(n, k, used) {
		if (path.length === k) {
			res.push(Array.from(path))
			return
		}
		for (let i = 0; i < k; i++) {
			if (used[i]) continue
			path.push(n[i])
			used[i] = true // 同支
			backtracking(n, k, used)
			path.pop()
			used[i] = false
		}
	}
}

console.log(permute("abc"))
