Function.prototype.myBind = function (context, ...args) {
	let fn = this

	function F(...arg) {
		if (this instanceof F) {
			return new fn(...args, ...arg)
		}
		return fn.apply(context, arg.concat(args))
	}

	return F
}

let name = '小王',
	age = 17
let obj = {
	name: '小张',
	age: this.age,
	myFun: function (from, to) {
		console.log(this.name + ' 年龄 ' + this.age + '来自 ' + from + '去往' + to)
	},
}
let db = {
	name: '德玛',
	age: 99,
}

//结果
let a = obj.myFun.bind(db, '成都', '上海')
let b = new a()
// 德玛 年龄 99  来自 成都去往上海
// obj.myFun.myBind(db,['成都','上海'])();   // 德玛 年龄 99  来自 成都, 上海去往 undefined
