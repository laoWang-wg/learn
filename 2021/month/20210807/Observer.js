// Subject为被观察者，Subject中的状态（state）改变，就通知 Observer更新
class Subject {
	constructor() {
		this.observes = []
		this.state = false
	}
	// this.observes存储观察者
	attach(observe) {
		this.observes.push(observe)
	}
	// 状态改变，通知 Observer 触发更新
	setState(newState) {
		this.state = newState
		this.observes.forEach((observer) => observer.update(newState))
	}
}
// Observer为观察者，观察Subject的状态是否改变
class Observer {
	constructor(name) {
		this.name = name
	}
	// 更新
	update(state) {
		console.log(this.name + '，接收到了通知，被观察者的属性变为 ' + state)
	}
}

const sub = new Subject()
const obs1 = new Observer('观察者1')
const obs2 = new Observer('观察者2')
sub.attach(obs1)
sub.attach(obs2)
// 被观察者的状态改变，触发观察者更新
sub.setState(true)
