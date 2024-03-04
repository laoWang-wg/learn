Object.prototype.create = function (fn) {
	let F = new Function()
	F.setPrototypeOf(fn)
	return new F()
}

let a = Object.create(a.prototype)
