function multiRequest(urls, maxNum) {
	return new Promise((resolve, reject) => {
		let result = new Map()

		for (let i = 0; i < maxNum; i++) {
			fn()
		}
		function fn() {
			if (urls.length) {
				let url = urls.shift()
				result.set(url, null)
				fetch(url)
					.then((res) => {
						result.set(url, res)
						fn()
					})
					.catch((err) => {
						result.set(url, err)
						fn()
					})
			} else {
				resolve(result)
			}
		}
	})
}

const urls = [
	"https://avatars0.githubusercontent.com/u/26534692",
	"https://avatars3.githubusercontent.com/u/19216813",
	"https://avatars3.githubusercontent.com/u/4506712",
	"https://avatars1.githubusercontent.com/u/6983391",
	"https://avatars3.githubusercontent.com/u/22212189",
	"https://avatars0.githubusercontent.com/u/22443771"
]
multiRequest(urls, 2).then((res) => {
	console.log(res)
})
