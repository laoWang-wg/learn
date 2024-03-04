function curry(fn, ...args) {
	let len = fn.length
	return function (...arg) {
		let newArg = args.concat(arg)
		if (newArg.length === len) {
			return fn.apply(this, newArg)
		} else {
			return curry(fn, ...newArg)
		}
	}
}

function add(a, b, c) {
	return a + b + c
}

let c = curry(add)
console.log(c(1)(2)(3))
