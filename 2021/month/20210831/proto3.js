function Person() {}

function Child() {
	Person.call(this)
}

Child.prototype = Object.create(Person.prototype)

// function create(o) {
// 	let F = function () {}
// 	F.prototype = o
// 	return new F()
// }
Child.prototype.constructor = Child

let child = new Child()
let a = Child
console.log(a)
console.log(child.__proto__ === Child.prototype)

console.log(Child.__proto__ === Function.prototype)
console.log(Child.prototype.__proto__ === Person.prototype)

console.log(Person.prototype.__proto__ === Object.prototype)
