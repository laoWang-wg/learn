var url = "https://www.baidu.com/s?id=123&name=why&phone=13876769797"
function getQueryString(url, name) {
	let u = new URL(url)

	let a = u.searchParams
	return a.get(name)
}

console.log(getQueryString(url, "name"))
