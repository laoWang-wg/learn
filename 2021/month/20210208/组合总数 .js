/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 输入: candidates = [10,1,2,7,6,1,5], target = 8,
// 	所求解集为: [ [1, 7], [1, 2, 5], [2, 6], [1, 1, 6] ]
var combinationSum2 = function (candidates, target) {
	let i = 0
	let a = 0
	// let target = []
	let stack = []
	while (i <= candidates.length) {
		if (candidates[a] < target) {
			stack.push()
		}
	}
}
