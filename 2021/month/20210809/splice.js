Array.prototype._splice = function (start, delCount, ...addItems) {
	const arr = this
	// const res = []
	const left = arr.slice(0, start)
	const right = arr.slice(start + delCount)
	const remove = arr.slice(start, start + delCount) // 被删除的元素

	arr.length = left.length
	addItems.forEach((item) => arr.push(item))
	right.forEach((item) => arr.push(item))
	return remove
}
