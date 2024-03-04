class Solution {
	constructor(nums) {
		this.origin = [...nums]
		this.shuffleNums = [...nums]
	}
	reset() {
		return this.origin
	}
	shuffle() {
		let len = this.shuffleNums.length - 1
		while (len >= 0) {
			let random = Math.floor(Math.random() * this.shuffleNums.length)
			;[this.shuffleNums[len], this.shuffleNums[random]] = [
				this.shuffleNums[random],
				this.shuffleNums[len]
			]
			len--
		}
		return this.shuffleNums
	}
}
