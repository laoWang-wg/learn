class Publish {
	constructor() {
		this.uid = 1
		this.callbacks = {}
	}

	on(key, fn) {
		if (Array.isArray(this.callbacks[key])) {
			this.callbacks[key].push(fn)
		} else {
			this.callbacks[key] = [fn]
		}
	}
	off(key) {
		delete this.callbacks[key]
	}
	emit(key, ...args) {
		let fns = this.callbacks[key] || []
		console.log(fns)
		fns.forEach((fn) => {
			fn.apply(this, args)
		})
	}
}

// event 相当于中转器
const event = new Publish()
// 订阅
event.on('eventName', function (a, b) {
	console.log(a, b)
})
event.on('eventName', function (a, b) {
	console.log(a, b)
})
// 发布
event.emit('eventName', 'a', 'b')
