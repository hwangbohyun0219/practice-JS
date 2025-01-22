const person = {
  name: "Sucodeing",
  age: 20,
  "phone number": "010-1234-1234",
  isAdult: false,
  printInfo: function (msg) {
    console.log(msg);
  },
};
console.log(person["age"]);
console.log(person["phone number"]);
console.log(person.printInfo());
person.printInfo("우유");

person.name = "철수";
console.log(person.name);
