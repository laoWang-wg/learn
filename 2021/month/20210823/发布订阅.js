class Event {
	constructor() {
		this.events = new Map()
	}
	on(key, callback) {
		let callbacks = []
		if (this.events.has(key)) {
			callbacks = this.events.get(key)
		}
		callbacks.push(callback)
		this.events.set(key, callbacks)
	}
	emit(key) {
		let callbacks = this.events.get(key)
		callbacks.map((cb) => cb())
	}
}
