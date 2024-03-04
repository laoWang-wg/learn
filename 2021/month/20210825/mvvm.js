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
		this.depIds = new Set()
		this.deps = []
	}
	depend() {
		if (this.depIds.has(Dep.Target.uid)) return
		this.depIds.add(Dep.Target.uid)
		this.deps.push(Dep.Target)
	}
	notify() {
		console.log(this.deps.length)
		this.deps.forEach((wt) => wt.update())
	}
}
let uid = 0
class Watcher {
	static Target = null
	constructor(obj, key, callback) {
		this.uid = uid++
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
		let value = this.get()
		if (value != this.oldValue) {
			this.callback(value, this.oldValue)
		}
	}
}
let obj = {
	count: 1
}
observe(obj)

new Watcher(obj, "count", () => {
	console.log("count")
})

obj.count++
obj.count++
