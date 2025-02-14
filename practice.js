//Generator
function* fn() {
  console.log(1);
  yield 1;
  console.log(2);
  yield 2;
  console.log(3);
  console.log(4);
  yield 3;
  return "finish";
}

const a = fn();
console.log(a.next());
console.log(a.next());
console.log(a.return("end"));
