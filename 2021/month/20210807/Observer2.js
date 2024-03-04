class Subject {
	constructor() {
		this.subList = []
		this.state = null
	}
	attach(observe) {
		this.subList.push(observe)
	}
	setState(state) {
		this.state = state
		this.subList.forEach((ob) => {
			ob.update()
		})
	}
}
class Observer {
	constructor(name) {
		this.name = name
	}
	update() {
		console.log(this.name)
	}
}

let sb = new Subject()
let ob1 = new Observer('观察者1')
sb.attach(ob1)

sb.setState(true)
