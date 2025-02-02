//나머지 매개변수, 전개구문
//기초
function showName(name) {
  console.log(name);
}
showName("Mike", "Tom"); //Mike
showName("Mike"); //Mike
showName(); // undefined
//arguments
function showName1(name) {
  console.log(arguments);
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);
}
showName1("Andy", "Jane");
//나머지 매개변수
function showNames2(...names) {
  console.log(names);
}
showNames2();
showNames2("Mike");
showNames2("Mike", "Jane");
//예시 reduce
function add(...numbers) {
  let result = numbers.reduce((prev, cur) => {
    return prev + cur;
  }, 0);
  console.log(result);
}
add(1, 2, 3);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//또 다른 방법 forEach
function add1(...numbers) {
  let result = 0;
  numbers.forEach((num) => (result += num));
  console.log(result);
}
add1(1, 2, 3);
add1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//예시 user 객체를 만들어 주는 생성자 함수 만들기
function User(name, age, ...skills) {
  this.name = name;
  this.age = age;
  this.skills = skills;
}
const user1 = new User("Mike", 30, "html", "css");
const user2 = new User("Jane", "25", "React");
const user3 = new User("Tom", "10", "English");
console.log(user1);
console.log(user2);
console.log(user3);
