let userList = [
  { name: "Mike", age: 30 },
  { name: "Jane", age: 27 },
  { name: "Tom", age: 10 },
];

let newUSerList = userList.map((user, index, userList) => {
  return Object.assign({}, user, { isAdult: user.age > 19, id: index + 1 });
});
console.log(newUSerList);
console.log(userList);
