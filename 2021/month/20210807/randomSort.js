function randomSort(arr) {
	arr.sort(() => {
		return Math.random() > 0.5 ? -1 : 1
	})
}
randomSort([123])
