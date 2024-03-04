function debounce(fn, time, immediate = false) {
	let timer = null

	return function (...args) {
		if (timer) clearTimeout(timer)
		timer = null
		if (immediate) {
			fn.call(this, ...args)
			immediate = false
		}
		timer = setTimeout(() => {
			fn.call(this, ...args)
			timer = null
		}, time)
	}
}

let b = debounce(
	function () {
		console.log(123)
	},
	1000,
	true
)
b()
setTimeout(b, 2000)
