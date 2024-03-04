function sleep(time) {
	return new Promise((resolve, reject) => setTimeout(resolve, time))
}

sleep(1000).then((res) => {
	console.log(res)
})
