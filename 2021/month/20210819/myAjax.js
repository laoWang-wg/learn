function myAjax(url, type, options) {
	let xhr = new XMLHttpRequest()

	xhr.onload = function () {
		if (xhr.onreadystatechange === 4) {
			if (xhr.status === 200) {
				options.success(xhr.response)
			} else {
				options.error(xhr.response)
			}
		} else {
			options.failed(xhr.response)
		}
	}
	xhr.responseType = "json"
	// 设置请求头信息
	xhr.setRequestHeader("Accept", "application/json")
	xhr.open(url, type, true)
	xhr.send(null)
}
