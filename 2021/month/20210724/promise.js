class Promise {
	constructor(executor) {
		this.promiseStatus = "pending"
		this.promiseResult = ""
		this.callbacks = []
		try {
			executor(this.resolve.bind(this), this.reject.bind(this))
		} catch (error) {
			this.reject.call(this, error)
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
		//判断回调函数参数
		if (typeof onReject !== "function") {
			onReject = (reason) => {
				throw reason
			}
		}
		if (typeof onResolve !== "function") {
			onResolve = (value) => value
		}
		return new Promise((resolve, reject) => {
			let self = this

			function help(type) {
				try {
					let result = type(self.promiseResult)
					if (result instanceof Promise) {
						result.then(
							(v) => resolve(v),
							(e) => reject(e)
						)
					} else {
						resolve(result)
					}
				} catch (error) {
					reject(error)
				}
			}
			if (this.promiseStatus === "fulfilled") {
				setTimeout(() => help(onResolve))
			} else if (this.promiseStatus === "rejected") {
				setTimeout(() => help(onReject))
			} else if (this.promiseStatus === "pending") {
				this.callbacks.push({
					onResolve: () => {
						help(onResolve)
					},
					onReject: () => {
						help(onReject)
					}
				})
			}
		})
	}

	catch(onReject) {
		return this.then(undefined, onReject)
	}
	static reject(value) {
		return new Promise((_, reject) => {
			reject(value)
		})
	}

	static resolve(value) {
		return new Promise((resolve, reject) => {
			if (value instanceof Promise) {
				value.then(
					(v) => resolve(v),
					(e) => reject(e)
				)
			} else {
				resolve(value)
			}
		})
	}

	static all(data) {
		let result = []
		return new Promise((resolve, reject) => {
			for (let i = 0; i < data.length; i++) {
				Promise.resolve(data[i]).then(
					(v) => {
						result.splice(i, v)
						if (result.length === data.length) {
							resolve(result)
						}
					},
					(e) => {
						reject(e)
					}
				)
			}
		})
	}

	static race(data) {
		if (!Array.isArray(data)) {
			throw "参数必须是 数组"
		}
		return new Promise((resolve, reject) => {
			for (let i = 0; i < data.length; i++) {
				Promise.resolve(data[i]).then(
					(v) => resolve(v),
					(e) => reject(e)
				)
			}
		})
	}

	finally(fun) {
		return this.then(
			Promise.resolve(fun()).then((value) => value),
			Promise.resolve(fun()).then((err) => {
				throw err
			})
		)
	}
}

//

let p = new Promise((resolve, reject) => {
	//    setTimeout(() => {
	// resolve('ok-')
	//    }, 1000);
	// reject('error')
	throw "error!"
})

Promise.resolve(12)

let p2 = p
	.then(
		(value) => {
			console.log(value, "2")
		},
		(err) => {
			console.log(err)
		}
	)
	.catch((err) => {
		console.log(err, "uu")
		return 1
	})
	.finally((value) => {
		console.log(value)
	})

console.log(p2)
