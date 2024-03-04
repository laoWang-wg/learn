function Instanceof(A, B) {
	while (true) {
		if (A.__proto__ === null) {
			return false
		}
		if (A.__proto__ === B.prototype) {
			return true
		}
		A = A.__proto__
	}
}
