class Promise {
	constructor(executor) {
		this.promiseStatus = "pending"
		this.promiseResult = ""
		this.callbacks = []
		try {
			executor(this.resolve.bind(this), this.reject.bind(this))
		} catch (err) {
			this.reject.bind(this, err)
		}
	}

	resolve(value) {
		if (this.promiseStatus !== "pending") return
		this.promiseStatus = "fulfilled"
		this.promiseResult = value
		this.callbacks.forEach((item) => {
			setTimeout(() => item.onResolve(this.promiseResult))
		})
	}
	reject(value) {
		if (this.promiseStatus !== "pending") return
		this.promiseStatus = "rejected"
		this.promiseResult = value
		this.callbacks.forEach((item) => {
			setTimeout(() => item.onReject(this.promiseResult))
		})
	}
	then(onResolve, onReject) {
		if (typeof onResolve !== "function") {
			onResolve = (value) => value
		}
		if (typeof onReject !== "function") {
			onReject = (err) => {
				throw err
			}
		}
		return new Promise((resolve, reject) => {
			let self = this
			let help = function (type) {
				try {
					let result = type(self.promiseResult)
					if (result instanceof Promise) {
						result.then(resolve, reject)
					} else {
						resolve(result)
					}
				} catch (err) {
					reject(err)
				}
			}
			if (this.promiseStatus === "fulfilled") {
				setTimeout(() => help(onResolve))
			} else if (this.promiseStatus === "rejected") {
				setTimeout(() => help(onReject))
			} else {
				this.callbacks.push({
					onResolve: function () {
						help(onResolve)
					},
					onReject: function () {
						help(onReject)
					}
				})
			}
		})
	}
	static resolve(value) {
		return new Promise((resolve, reject) => {
			if (value instanceof Promise) {
				value.then(resolve, reject)
			} else {
				resolve(value)
			}
		})
	}
	static reject(value) {
		return new Promise((_, reject) => {
			reject(value)
		})
	}
	catch(onReject) {
		return this.then(_, onReject)
	}
	finally(fun) {
		this.then(
			(value) => {
				fun()
				return value
			},
			(reason) => {
				fun()
				return reason
			}
		)
	}
}

let p = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("ok")
	})
})
Promise.resolve(123)
p.then((res) => {
	console.log(res)
	return "---2"
}).then((res) => {
	console.log(res, "2")
})
