let [x, y] = [1, 2];
console.log(x);
console.log(y);

let users = ["Mike", "Jane", "Tom"];
let [user1, user2, user3] = users;
console.log(user1);
console.log(user2);
console.log(user3);

let str = "Mike-Tom-Jane";
let [user4, user5, user6] = str.split("-");
console.log(str.split("-"));
console.log(user4);
console.log(user5);
console.log(user6);

let [user7, , user8] = ["Mike", "Jane", "Tom", "Tony"];
console.log(user7);
console.log(user8);

let a = 1;
let b = 2;
[a, b] = [b, a];
console.log([a, b]);

let user = { name: "Mike", age: 30 };
// let { name, age } = user;
// console.log(name);
// console.log(age);

// let { name: userName, age: userAge } = user;
// console.log(userName);
// console.log(userAge);

// let { name, age, gender } = user;
// console.log({ name, age, gender });

// let { name, age, gender = "male" } = user;
// console.log({ name, age, gender });

let king = {
  name: "Jane",
  age: 45,
  gender: "female",
};

let { name, age, gender = "male" } = king;
console.log({ name, age, gender });
