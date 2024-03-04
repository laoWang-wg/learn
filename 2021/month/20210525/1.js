"use strict"
// 1. 给定一个数组和一个正整数N，求一个和小于N的最长连续子数组
function minChildArray(arrTa, target) {
	// 小于一个 判断大小返回
	if (arrTa.length === 1) return arrTa[0] < target ? arrTa[0] : []
	const dp = [[arrTa[0]]] // 记录第一个
	for (let i = 1; i < arrTa.length; i++) {
		const local = arrTa[i]
		const lastDep = dp[i - 1] // 获取前一个
		const sum = lastDep.reduce((a, b) => a + b, 0) // 获取当前的和
		if (local + sum < target && lastDep[lastDep.length - 1] === arrTa[i - 1]) {
			dp[i] = [...lastDep, local]
		} else {
			if (local < target) {
				const newArr = []
				let j = i
				let newItem = arrTa[j]
				let targetItem = target
				while (j >= 0 && newItem <= targetItem) {
					targetItem -= newItem
					newArr.unshift(newItem)
					j--
					newItem = arrTa[j]
				}
				dp[i] = dp[i - 1].length > newArr.length ? dp[i - 1] : newArr
			} else {
				dp[i] = dp[i - 1]
			}
		}
	}
	return dp
}
const array = [0, 1, 3, -1, 4, 6, -2]
console.log(minChildArray(array, 10))
