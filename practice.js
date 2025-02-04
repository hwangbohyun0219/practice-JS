//상속과 프로토타입
const car = {
  wheels: 4,
  drive() {
    console.log("drive..");
  },
};
const bmw = {
  color: "red",
  navigation: 1,
};

const benz = {
  color: "black",
};

const audi = {
  color: "blue",
};

const x5 = {
  color: "white",
  name: "x5",
};

bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;
console.log(bmw);

x5.__proto__ = bmw;
//for문으로 반복 돌려보기
for (p in x5) {
  console.log(p);
  console.log(x5[p]);
}
console.log(x5);
console.log(Object.keys(x5));
console.log(Object.values(x5));
//생성자 함수를 이용하여 객체를 만들고 프로토타입 이용해보기
const bmw1 = function (color) {
  this.color = color;
};

bmw1.prototype.wheels = 4;
bmw1.prototype.drive = function () {
  console.log("drive~");
};

const x51 = new bmw1("red");
const z4 = new bmw1("blue");

console.log(x51.wheels);
console.log(z4);
console.log(z4 instanceof bmw1);
console.log(z4.constructor === bmw1);
//코드를 더 간단하게 정리하는 방법
