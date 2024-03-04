let timeId = 0
let timeIds = []

function timer(fn, time, _this = globalThis) {
	let _time = new Date()

	while (true) {
		let _t = new Date()
		if (_t - _time >= time) {
			fn.call(_this)
			return timeId++
		}
	}
}

timer(function () {}, 100, this)
