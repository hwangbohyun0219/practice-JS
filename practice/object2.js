//객체
const person = {};
person.name = "영희";
person.age = 30;
delete person.age;
console.log(person);

//깊은 복사
let num = 10;
let num2 = num;
num = 30;
console.log(num, num2);

//얕은 복사
const obj = 0x01;
const obj2 = 0x01;
delete obj.name;
console.log(obj, obj2);

//표준 내장 객체,자바스크립트에서 기본적으로 제공해주는 객체
