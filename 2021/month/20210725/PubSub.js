class PubSub {
	constructor() {
		id: 1, (this.callbacks = {})
	}

	subscribe(channel, callback) {
		let _token = '_token' + this.id++
		if (this.callbacks[channel]) {
			this.callbacks[channel][_token] = callback
		} else {
			this.callbacks[channel] = {
				_token: callback,
			}
		}
		return id
	}
	publish(channel, data) {
		if (this.callbacks[channel]) {
			this.callbacks[channel].map((item) => {
				item(data)
			})
		}
	}
	unsubscribe(flag) {
		if (!flag) {
			this.callbacks = []
		} else {
			if (flag.indexOf('_token') === 0) {
				let channel = Object.keys(this.callbacks).find((obj) =>
					obj.hasOwnProperty(flag),
				)
				if (channel) {
					delete channel[flag]
				}
			} else {
				delete this.callbacks[flag]
			}
		}
	}
}
