/**
 * @param {number[]} fruits
 * @return {number}
 * 输入：[1,2,3,2,2]
 输出：4
 解释：我们可以收集 [2,3,2,2]
 如果我们从第一棵树开始，我们将只能收集到 [1, 2]。
 */
var totalFruit = function (fruits) {
	let map = new Map()
	let left = 0
	let result = 0
	for (let i = 0; i < fruits.length; i++) {
		map.set(fruits[i], map.has(fruits[i]) ? map.get(fruits[i]) + 1 : 1)
		while (map.size > 2) {
			map.set(
				fruits[left],
				map.has(fruits[left]) ? map.get(fruits[left]) - 1 : 1
			)
			if (map.get(fruits[left]) === 0) map.delete(fruits[left])
			left++
		}
		result = Math.max(result, i - left + 1)
	}
	console.log(result)
}

totalFruit([1, 2, 3, 2, 2])
