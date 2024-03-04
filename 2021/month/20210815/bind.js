function myBind(obj, ...args) {
	let self = this
	return function F(...arg) {
		if (F instanceof F) {
			return new self(...args.concat(arg))
		}
		return self.call(obj, ...args.concat(arg))
	}
}
