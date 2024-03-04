function myInstanceof(A, B) {
	let left = Object.getPrototypeOf(A)
	let right = B.prototype
	while (left) {
		if (left === right) {
			return true
		}
		left = Object.getPrototypeOf(left)
	}
	return false
}
