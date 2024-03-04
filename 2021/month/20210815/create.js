Object.prototype.create = function (pro) {
	let F = new Function()

	F.setProperty(pro)

	return new F()
}
