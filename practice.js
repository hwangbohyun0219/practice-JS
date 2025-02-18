//ES2021에 추가된 기능
//String.replaceAll()
const person = {
  name: "홍길동",
  age: 25,
  sayHello: function () {
    console.log(`안녕하세요. 저는 ${this.name}입니다.`);
  },
};
console.log(person.name);
person.sayHello();
