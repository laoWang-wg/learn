function observe(obj) {
	Object.keys(obj).forEach((key) => {
		let initValue = obj[key]
		let dep = new Dep()
		Object.defineProperty(obj, key, {
			get() {
				if (Dep.Target) {
					dep.depend()
				}
				return initValue
			},
			set(newValue) {
				let change = initValue != newValue

				initValue = newValue
				if (change) {
					dep.notify()
				}
			}
		})
	})
}
class Dep {
	constructor() {
		this.deps = new Set()
	}
	depend() {
		this.deps.add(Dep.Target)
	}
	notify() {
		this.deps.forEach((watcher) => watcher.update())
	}
	static Target
}
class Watcher {
	constructor(obj, key, callback) {
		this.vm = obj
		this.key = key
		this.callback = callback
		this.oldValue = this.get()
	}
	get() {
		Dep.Target = this
		let value = this.vm[this.key]
		Dep.Target = null
		return value
	}
	update() {
		let newValue = this.get()
		if (newValue !== this.oldValue) {
			this.callback(newValue, this.oldValue)
		}
	}
}
let obj = {
	a: 1
}
observe(obj)
new Watcher(obj, "a", (a, b) => {
	obj.a++
	console.log("obj.a", a, b)
})

obj.a++
