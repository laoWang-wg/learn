function minSubArrayLen(s, nums) {
	const n = nums.length
	let ans = Infinity
	let left = 0
	let sum = 0
	for (let i = 0; i < n; i++) {
		sum += nums[i]
		while (sum >= s) {
			ans = Math.min(ans, i + 1 - left)
			sum -= nums[left++]
		}
	}
	return ans !== Infinity ? ans : 0
}

const a = minSubArrayLen(7, [2, 3, 1, 2, 4, 3])
console.log(a)
