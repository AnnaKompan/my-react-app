const person = {
  name: "Ivan",
  sayHi() {
    console.log(this.name);
  },
};

// person.sayHi();
const interval = setInterval(() => person.sayHi(), 1000);
setInterval(() => clearInterval(interval), 5000);
