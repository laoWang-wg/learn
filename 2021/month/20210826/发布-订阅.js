class Pub {
  constructor() {
    this.pubLsit = new Map();
  }

  on(key, callback) {
    if (this.pubLsit.has(key)) {
      this.pubLsit.get(key).push(callback);
    } else {
      this.pubLsit.set(key, [callback]);
    }
  }

  emit(key, ...args) {
    if (this.pubLsit.has(key)) {
      this.pubLsit.get(key).forEach((item) => item(key, ...args));
    }
  }
}

let p = new Pub();

p.on('message', (topic, args) => {
  console.log(`类型是${topic}, 参数是：`, args);
});

p.on('hh', (topic, args) => {
  console.log(`类型是${topic}, 参数是：`, args);
});
p.emit('message', 123);

// eventBus

class EventBus {
  constructor() {
    this.events = {};
  }
  subscribe(eventname, cb) {
    this.events[eventname] = this.events[eventname] || [];
    this.events[eventname].push(cb);
  }
  publish(eventname, data) {
    this.events[eventname].forEach((c) => c(data));
  }
  unsubscribe(eventname, cb) {
    this.events[eventname] = this.events[eventname].filter((c) => c !== cb);
  }
}
