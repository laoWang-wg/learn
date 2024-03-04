function Person() {}

function Child(...args) {
	Person.call(this, ...args)
}

Child.prototype = Object.create(Person.prototype)

Child.prototype.constructor = Child
