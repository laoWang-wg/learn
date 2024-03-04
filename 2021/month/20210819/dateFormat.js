function dateFormat(date, format) {
	date = new Date(date)
	let year = date.getFullYear()
	let month = date.getMonth() + 1
	let day = date.getDay()

	format = format.replace(/yyyy/, year)
	format = format.replace(/MM/, month)
	format = format.replace(/dd/, day)
	return format
}

console.log(dateFormat(new Date(1409894060000), "yyyy-MM-dd HH:mm:ss"));
