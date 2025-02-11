//class
//생성자 함수
const User = function (name, age) {
  this.name = name;
  this.age = age;
  this.showName = function () {
    console.log(this.name);
  };
};
const Mike = new User("Mike", 30);
//클래스로도 만들 수 있다.
class User2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showName() {
    console.log(this.name);
  }
}
const Tom = new User2("Tom", 19);
console.log(Mike);
console.log(Tom);

for (const p in Mike) {
  console.log(p);
}
for (const j in Tom) {
  console.log(j);
}
//상속, extends
class Car {
  constructor(color) {
    this.color = color;
    this.wheels = 4;
  }
  drive() {
    console.log("drive..");
  }
  stop() {
    console.log("STOP!");
  }
}

class Bmw extends Car {
  stop() {
    super.stop();
    console.log("OFF");
  }
  park() {
    console.log("PARK");
  }
}

const z4 = new Bmw("blue");
console.log(z4);
console.log(z4.drive());
console.log(z4.stop());
