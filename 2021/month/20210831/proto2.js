class Poo {}

class Foo extends Poo {}

let foo = new Foo()
let a = Foo.prototype
console.log(a)
console.log(Foo.__proto__ === Poo)
console.log(Foo.prototype)
console.log(Foo.prototype.__proto__ === Poo.prototype)

console.log(Foo.prototype.constructor === Foo)

console.log(foo.__proto__ === Foo.prototype)
console.log(Foo.prototype.__proto__ === Poo.prototype)

console.log(Poo.__proto__ === Function.prototype)

console.log(Poo.prototype.__proto__ === Object.prototype)
