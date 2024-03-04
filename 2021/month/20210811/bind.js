Function.prototype.bind = function (obj, ...args) {
	let self = this
	return function F(...arg) {
		let a = arg.concat(args)
		if (this instanceof F) {
			return new self(...a)
		} else {
			return self.call(obj, ...a)
		}
	}
}
