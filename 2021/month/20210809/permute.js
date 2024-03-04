function permute(nums) {
	let res = []
	let track = []
	const back = function (track, nums) {
		if (track.length === nums.length) {
			res.push([...track])
		}
		for (let i = 0; i < nums.length; i++) {
			if (track.includes(nums[i])) {
				continue
			}
			track.push(nums[i])
			back(track, nums)
			track.pop()
		}
	}
	back(track, nums)
	return res
}

let a = permute([1, 2, 3])
console.log(a)
