function flat(arr, num = 1) {
	return num > 0
		? arr.reduce((a, b) => {
				return a.concat(Array.isArray(b) ? a.flat(b, num - 1) : b)
		  }, [])
		: arr.slice()
}
