const person = {
  name: "alice",
  age: 26,
  city: "Jeju",
};

const entries = Object.entries(person);

for (const [key, value] of entries) {
  console.log([key, value]);
}
