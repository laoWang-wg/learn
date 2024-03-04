import Dep from './Dep'

var uid = 0
export default class Watcher {
	constructor(target, expression, callback) {
		this.id = uid++
		this.target = target
		this.getter = parsePath(expression)
		this.callback = callback
		this.value = this.get()
		console.log('Watcher')
	}

	update() {
		this.getAndInvoke(this.callback)
	}
	get() {
		Dep.target = this
		var value
		const obj = this.target

		try {
			value = this.getter(obj)
		} finally {
			Dep.target = null
		}
		return value
	}
	getAndInvoke(cb) {
		const value = this.get()

		if (value !== this.value || typeof value == 'object') {
			const oldValue = this.value
			this.value = value
			cb.call(this.target, value, oldValue)
		}
	}
}

// function parsePath(str, obj) {

//     let arr = str.split('.')
//     for (let i = 0; i < arr.length; i++) {
//         obj = obj[arr[i]];
//     }
//     return obj
// }

function parsePath(str) {
	var segments = str.split('.')

	return (obj) => {
		for (let i = 0; i < segments.length; i++) {
			if (!obj) return
			obj = obj[segments[i]]
		}
		return obj
	}
}
