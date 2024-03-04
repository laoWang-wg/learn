// // 输入：nums = [1,2,3]
// // 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// function permute(nums) {
// 	let result = []
// 	let target = []
// 	const help = function (n) {
// 		if (target.length === nums.length) {
// 			result.push([...target])
// 		}
// 		for (let i = 0; i < nums.length; i++) {
// 			if (target.includes(nums[i])) {
// 				continue
// 			}
// 			target.push(nums[i])
// 			help(n + 1)
// 			target.pop()
// 		}
// 	}
// 	help(0)
// 	return result
// }
//
// console.log(permute([1, 1, 2]))
// num =3
// // 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
function permute(num) {
	let result = []
	let target = []

	const help = function () {
		if (target.length === num) {
			result.push([...target])
		}
		for (let i = 1; i <= num; i++) {
			if (target.includes(i)) {
				continue
			}
			target.push(i)
			help()
			target.pop()
		}
	}
	help()
	return result
}

console.log(permute(3))
