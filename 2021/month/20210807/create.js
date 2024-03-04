Object.prototype.create = function (context) {
	let F = new Function()
	F.prototype = context

	return new F()
}
