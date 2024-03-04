/**
 * @param {number[]} height
 * @return {number}
 * 输入：[1,8,6,2,5,4,8,3,7]
 输出：49
 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

 */
var maxArea = function (height) {
	let start = 0
	let end = height.length - 1
	let max = -Infinity
	while (start < end) {
		let min = Math.min(height[start], height[end])

		max = Math.max((end - start) * min, max)
		if (height[start] < height[end]) {
			start++
		} else {
			end--
		}
	}
	return max
}
console.log(maxArea([3, 1, 3]))
