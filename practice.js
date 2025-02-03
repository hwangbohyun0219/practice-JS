//전개구문(Spread syntax)
//1. 배열
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let result1 = [...arr1, ...arr2];
console.log(result1);
let result2 = [0, ...arr1, ...arr2, 7, 8, 9];
console.log(result2);
//2.객체
let user = { name: "Mike" };
let mike = { ...user, age: 20 };
console.log(mike);
//3.복제
let arr3 = [1, 2, 3];
let arr4 = [...arr3];
console.log(arr4);
let user1 = { name: "Mike", age: 20 };
let user2 = { ...user };
user2.name = "Tom";
console.log(user1.name);
console.log(user2.name);
//예제 : [4,5,6,1,2,3]으로 만들어봐라
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
arr5 = [...arr6, ...arr5];
console.log(arr5);
//원래라면 >>틀린방법
arr6.reverse().forEach((num) => {
  arr5.unshift(num);
});
console.log(arr5); //[6,5,4,3,2,1]이 출력되어 이 방법으로 불가능 따라서 reverse를 활용해야
//예제 : 객체
let human = { name: "mike" };
let info = { age: 30 };
let fe = ["JS", "React"];
let lang = ["Korean", "English"];
human = Object.assign({}, human, info, {
  skills: [],
});
fe.forEach((item) => {
  human.skills.push(item);
});
lang.forEach((item) => {
  human.skills.push(item);
});
console.log(human);
//전개구문
human = { ...human, ...info, skills: [...fe, ...lang] };
console.log(human);
