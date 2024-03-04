Promise.prototype.retry = function (num) {
	return new Promise((resolve, reject) => {
		let help = function (n) {
			this.then((res) => {
				resolve(res)
			}).catch((err) => {
				n === num ? reject(err) : help(n + 1)
			})
		}
		help(0)
	})
}
