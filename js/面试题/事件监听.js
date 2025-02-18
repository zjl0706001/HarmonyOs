class myevents {
  constructor() {
    this.events = this.events || new Map();
  }
  addevent(type, f) {
    if (this.events.has(type))
      this.events.set(type, this.events.get(type).set(f));
    else this.events.set(type, new Set().add(f));
  }
  emitevent(type) {
    if (this.events.has(type))
      this.events.get(type).forEach((item) => {
        item.apply(this, [...arguments].splice(1));
      });
  }
  removeevent(type, f) {
    if (f) {
      if (this.events.has(type))
        this.events.set(type, this.events.get(type).delete(f));
    } else this.events.delete(type);
  }
}
let even1 = new myevents();
even1.addevent("a", (e) => {
  console.log(123);
});
even1.addevent("aa", () => {
  console.log(322323);
});
even1.emitevent("a");
even1.emitevent("aa");
even1.removeevent("a");
even1.emitevent("a");
