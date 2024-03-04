function Person(name) {
	this.name = name
}
Person.prototype.show = function () {
	console.log(this.name)
}

function Child() {
	Person.call(this)
}

Child.prototype = Object.create(Person.prototype)

Child.prototype.constructor = Child
