Function.prototype.bind = function (obj, ...args) {
	let fn = this
	return function F(...arg) {
		if (this instanceof F) {
			return new fn(...arg, ...args)
		}
		return fn.apply(obj, args.concat(arg))
	}
}

let obj = {
	c: 1
}

function a() {
	console.log(this.c)
}
a.bind(obj)
