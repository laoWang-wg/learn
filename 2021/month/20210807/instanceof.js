function myInstanceof(A, B) {
	let right = B.prototype
	let left = Object.getPrototypeOf(A) // 获取对象的原型
	while (true) {
		if (left === null) {
			return false
		}
		if (right === left) {
			return true
		}
		left = Object.getPrototypeOf(left)
	}
}
