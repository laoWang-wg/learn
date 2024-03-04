function debounce(fn, time, immediate) {
	let timer = null
	let result = null
	return function (...args) {
		if (timer) clearTimeout(timer)
		if (immediate) {
			timer = setTimeout(() => {
				timer = null
			}, time)
			if (!timer) result = fn.apply(this, args)
		} else {
			timer = setTimeout(() => {
				result = fn.apply(this, args)
			}, time)
		}
		return result
	}
}

function test() {}

let a = debounce(test)
