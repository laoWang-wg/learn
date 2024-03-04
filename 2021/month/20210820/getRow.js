function getRow(rowIndex) {
	let pre = [[1]]
	for (let i = 0; i <= rowIndex; i++) {
		let cur = []
		cur[0] = cur[i] = 1
		for (let j = 1; j < i; j++) {
			cur[j] = pre[j - 1] + pre[j]
		}

		pre = cur
	}
	return pre
}

console.log(getRow(2))
