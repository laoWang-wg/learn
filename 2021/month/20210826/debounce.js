function debounce(fn, wait, flag) {
	let timeId = null
	let status = true
	return function () {
		if (timeId) return
		clearTimeout(timeId)
		if (flag) {
			status && fn.call(this)
			setTimeout(() => (status = false), wait)
		} else {
			timeId = setTimeout(function () {
				fn.call(this)
				timeId = null
			}, wait)
		}
	}
}

function throttle(fn, wait, flag) {
	let status = true
	return function () {
		if (!status) return
		// clearTimeout(timeId)
		status = false
		if (flag) {
			fn.call(this)
		}
		setTimeout(() => {
			!flag && fn.call(this)
			status = true
		}, wait)
	}
}

function t(max) {
	let urls = [1, 2, 3, 4]
	let result = new Map()
	for (let i = 0; i < max; i++) {
		task()
	}

	const task = function () {
		if (urls.length === 0) return
		let _url = urls.pop()
		result.set(_url, null)
		fetch(_url).then((res) => {
			result.set(_url, res)
			task()
		})
	}
}
