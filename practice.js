function add(...numbers) {
  let result = 0;
  numbers.forEach((num) => {
    result += num;
  });
  console.log(result);
}
add(1, 2, 3);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// //전개구문 : 복제
let arr = [1, 2, 3];
let arr2 = [...arr];
console.log(arr2);

// let user = { name: "Mike", age: 34 };
// let user2 = { ...user };
// console.log(user2);
// user2.name = "Tom";
// console.log(user2);

//방법1
let arr1 = [1, 2, 3];
let arr3 = [4, 5, 6];
arr3.reverse().forEach((num) => {
  arr1.unshift(num);
});
console.log(arr1);

//방법2
arr1 = [...arr3, ...arr1];
console.log(arr1);

//객체에서도 사용해보자
//방법1
let user = { name: "Mike" };
let info = { age: 30 };
let fe = ["JS", "React"];
let lang = ["Korean", "English"];

user = Object.assign({}, user, info, {
  skills: [],
});
fe.forEach((item) => {
  user.skills.push(item);
});
lang.forEach((item) => {
  user.skills.push(item);
});
console.log(user);

//방법2
user = { ...user, ...info, skills: [...fe, ...lang] };
console.log(user);
