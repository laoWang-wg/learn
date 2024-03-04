Object.prototype.create = function (pro) {
	let F = new Function() // 创建了一个新的构造函数F
	F.prototype = pro // 然后将构造函数F的原型指向了参数对象obj
	return new F() // 返回构造函数F的实例对象，从而实现了该实例继承obj的属性。
}
