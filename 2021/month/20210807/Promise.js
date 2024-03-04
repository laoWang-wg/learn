class Promise {
	constructor(executor) {
		this.promiseStatus = 'pending'
		this.promiseResult = null
		this.callbacks = []
		try {
			executor(this.resolve.bind(this), this.reject.bind(this))
		} catch (error) {
			this.reject.call(this, error)
		}
	}

	resolve(value) {
		if (this.promiseStatus !== 'pending') return
		this.promiseStatus = 'fulfilled'
		this.promiseResult = value
		this.callbacks.forEach((item) => {
			setTimeout(() => {
				item.onResolve(this.promiseResult)
			}, 0)
		})
	}
	reject(value) {
		if (this.promiseStatus !== 'pending') return
		this.promiseStatus = 'rejected'
		this.promiseResult = value
		this.callbacks.forEach((item) => {
			setTimeout(() => {
				item.onReject(this.promiseResult)
			}, 0)
		})
	}
	catch(onReject) {
		return this.then(undefined, onReject)
	}
	finally(fun) {
		return this.then(
			Promise.resolve(fun()).then(() => value),
			Promise.resolve(fun()).then((err) => {
				throw err
			}),
		)
	}
	static reject(value) {
		return new Promise((resolve, reject) => {
			reject(value)
		})
	}
	static resolve(value) {
		return new Promise((resolve, reject) => {
			if (value instanceof Promise) {
				value.then(
					(v) => resolve(v),
					(r) => reject(r),
				)
			} else {
				resolve(value)
			}
		})
	}
	then(onResolve, onReject) {
		return new Promise((resolve, reject) => {
			if (typeof onResolve != 'function') {
				onResolve = (value) => value
			}
			if (typeof onReject != 'function') {
				onReject = (reason) => {
					throw reason
				}
			}
			const self = this
			let help = function (fn) {
				try {
					let result = fn(self.promiseResult)
					if (result instanceof Promise) {
						result.then(
							(v) => resolve(v),
							(r) => reject(r),
						)
					} else {
						resolve(result)
					}
				} catch (error) {
					reject(error)
				}
			}
			if (this.promiseStatus === 'fulfilled') {
				setTimeout(() => {
					help(onResolve)
				}, 0)
			} else if (this.promiseStatus === 'rejected') {
				setTimeout(() => {
					help(onReject)
				}, 0)
			} else if (this.promiseStatus === 'pending') {
				this.callbacks.push({
					onResolve: function () {
						help(onResolve)
					},
					onReject: function () {
						help(onReject)
					},
				})
			}
		})
	}
}

let p = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('error')
	}, 10)
})

p.then(
	(val) => {
		console.log(val)
		return 'ok2'
	},
	(err) => {
		console.log(err, 'err1')
		return 'error2'
	},
)
	.then(
		(res) => {
			console.log(res, 'ok2')
		},
		(err) => {
			console.log(err, 'err')
		},
	)
	.catch((err) => {})
