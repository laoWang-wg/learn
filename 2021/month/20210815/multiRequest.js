function multiRequest(urls, num) {
	let result = new Map()
	for (let i = 1; i < num; i++) {
		fn()
	}

	function fn() {
		let url = urls.shift()
		result.set(url, null)
		if (url) {
			fetch(url)
				.then((res) => {
					result.set(url, res)
				})
				.catch((err) => {
					result.set(url, err)
				})
				.finally(() => {
					fn()
				})
		}
	}
	return result
}
