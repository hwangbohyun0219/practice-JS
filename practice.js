// //setTimeout, setinterval
// //setTimeout
// function fn() {
//   console.log(3);
// }
// setTimeout(fn, 3000);

// setTimeout(function fn() {
//   console.log(3);
// }, 3000);

// function showName(name) {
//   console.log(name);
// }
// const tId = setTimeout(showName, 3000, "Mike");
// clearTimeout(tId);
// //setinterval
// function showName1(name) {
//   console.log(name);
// }
// const tId1 = setInterval(showName1, 3000, "Jane");
// clearInterval(tId1);
// //예시
// let num = 0;
// function showTime() {
//   console.log(`안녕하세요. 접속하신지 ${num++}이 지났습니다.`);
//   if (num > 5) {
//     clearInterval(tId2);
//   }
// }
// const tId2 = setInterval(showTime, 1000);

//call,apply,bind 메소드
//call : call메소드는 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정할 수 있음
//예시
const nameMike = {
  name: "Mike",
};
const nameJane = {
  name: "Jane",
};
function showThisName() {
  console.log(this.name);
}
showThisName();
showThisName.call(nameMike);
showThisName.call(nameJane);

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}
update.call(nameMike, 1999, "police");
console.log(nameMike);
update.apply(nameMike, [2000, "singer"]);
console.log(nameMike);
//call과 apply의 차이
const nums = [3, 10, 1, 6, 4];
const minNum = Math.min.apply(null, nums);
console.log(minNum);
const maxNum = Math.max.call(null, ...nums);
console.log(maxNum);
//this값을 바꿀 수 있는 마지막 함수 : bind ->  함수의 this 값을 영구히 바꿀 수 있음
const nameMike1 = {
  name: "Mike",
};
function update1(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}
const updateMike = update1.bind(nameMike1, 1999);
updateMike("pianist");
console.log(nameMike1);
// 실전예시
const user = {
  name: "Mike",
  showName: function () {
    console.log(`hello, ${this.name}`);
  },
};
user.showName();
let fn = user.showName;
fn();
fn.call(user);
fn.apply(user);
let boundFn = fn.bind(user);
boundFn();
