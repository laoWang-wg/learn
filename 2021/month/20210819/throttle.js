function throttle(fn, time) {
	let timer = null

	return function (...args) {
		if (timer) return

		timer = setTimeout(() => {
			fn.call(this, ...args)
			timer = null
		}, time)
	}
}
