// eslint-disable-next-line @typescript-eslint/no-unused-vars
function myInstanceof(A, B) {
	let left = A.__proto__
	let right = B.prototype
	while (left !== null) {
		if (left === right) {
			return true
		}
		left = left.__proto__
	}
	return false
}
