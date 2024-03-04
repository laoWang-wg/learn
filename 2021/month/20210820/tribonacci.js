function tribonacci(n) {
	if (n === 0) return 0
	if (n <= 2) return 1
	// T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2
	let T0 = 0
	let T1 = 1
	let T2 = 1
	let T3 = 0

	for (let i = 3; i <= n; i++) {
		T3 = T0 + T1 + T2
		T0 = T1
		T1 = T2
		T2 = T3
	}
	console.log(T3)
	return T3
}

tribonacci(4)
