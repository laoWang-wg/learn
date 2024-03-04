class Subject {
  constructor() {
    this.observes = [];
  }

  add(observe) {
    this.observes.push(observe);
  }

  notify() {
    this.observes.forEach((observe) => {
      observe.update();
    });
  }
}

class Observe {
  constructor(name) {
    this.name = name;
  }

  update() {
    console.log('我被通知了', this.name);
  }
}

let subject = new Subject();

subject.add(new Observe('a'));
subject.add(new Observe('b'));
subject.add(new Observe('b'));
subject.notify();
