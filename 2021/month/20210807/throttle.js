function throttle(fn, time) {
	let timer = null
	let result = null
	return function (...args) {
		if (timer) return
		clearTimeout(timer)
		timer = setTimeout(() => {
			result = fn.apply(this, args)
			timer = null
		})
	}
}
