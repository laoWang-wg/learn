function compose(...fns) {
	return fns.reduce(
		(a, b) =>
			(...args) =>
				a(b(...args)),
	)
}

let a = (x, y) => x + y,
	b = (x) => x * x,
	c = (x) => (x === 0 ? x : 1 / x)

compose(c, b, a)(1, 2) // 1/9
console.log(compose(c, b, a)(1, 5))
