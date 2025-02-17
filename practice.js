//Generator
const arr = [1, 2, 3, 4, 5];
console.log(arr);
const it = arr[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

for (let num of arr) {
  console.log(num);
}

function* fn() {
  yield 4;
  yield 5;
  yield 6;
}

const a = fn();

console.log(a[Symbol.iterator]() === a);
for (let num of a) {
  console.log(num);
}

//문자열도 되는지 확인해보기
const str = "hello";
const xx = str[Symbol.iterator]();

for (let s of xx) {
  console.log(s);
}

function* fn() {
  const num1 = yield "첫번째 숫자를 입력해주세요";
  console.log(num1);

  const num2 = yield "두번째 숫자를 입력해주세요";
  console.log(num2);

  return num1 + num2;
}

const b = fn();
console.log(b.next());
console.log(b.next(3));
console.log(b.next(4));

function* fn5() {
  let index = 0;
  while (true) {
    yield index++;
  }
}
const c = fn5();
console.log(c.next());
console.log(c.next());

//다른 generator함수 호출하기
function* gen1() {
  yield "w";
  yield "o";
  yield "r";
  yield "l";
  yield "d";
}
function* gen2() {
  yield "Hello,";
  yield* gen1();
  yield "!";
}
console.log(...gen2());
