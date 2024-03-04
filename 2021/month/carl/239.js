/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var maxSlidingWindow = function (nums, k) {
// 	let start = 0
// 	let end = k
// 	let result = []
// 	while (end <= nums.length) {
// 		let str = nums.slice(start, end)
// 		result.push(Math.max(...str))
// 		end++
// 		start++
// 	}
// 	return result
// }
var maxSlidingWindow = function (nums, k) {
	// 队列数组（存放的是元素下标，为了取值方便）
	const q = []
	// 结果数组
	const ans = []
	for (let i = 0; i < nums.length; i++) {
		// 若队列不为空，且当前元素大于等于队尾所存下标的元素，则弹出队尾
		while (q.length && nums[i] >= nums[q[q.length - 1]]) {
			q.pop()
		}
		// 入队当前元素下标
		q.push(i)
		// 判断当前最大值（即队首元素）是否在窗口中，若不在便将其出队
		while (q[0] <= i - k) {
			q.shift()
		}
		// 当达到窗口大小时便开始向结果中添加数据
		if (i >= k - 1) ans.push(nums[q[0]])
	}
	console.log(ans)
	return ans
}
maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)
