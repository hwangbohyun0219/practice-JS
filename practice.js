//클로저(Closure)
//렉시컬 환경 예시
function outer1() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer1();
counter();
counter();
counter();
//스코프 체인 예시
let a = 10;
function outer() {
  let b = 20;

  function inner() {
    let c = 30;
    console.log(a, b, c);
  }
  inner();
}
outer();
//클로저를 이용하여 계좌 입출금 만들기
function outer() {
  let total = 10000;
  return function inner(getMoney) {
    total += getMoney;
    console.log(
      `안녕하세요. ${getMoney}원 입급되셨고, 총 액은 ${total}입니다.`
    );
  };
}
const tId = outer();
tId(2000);
tId(3000);
//비밀번호 확인하는 기능 만들기
function createPasswordChecker() {
  let realPassword = 1234;
  return function checkPassword(password) {
    if (realPassword == password) {
      console.log(
        `입력된 비밀번호는 ${password}입니다. 비밀번호와 일치합니다.`
      );
    } else {
      console.log(
        `입력된 비밀번호는 ${password}입니다. 비밀번호가 불일치합니다.`
      );
    }
  };
}
const check = createPasswordChecker();
check(1234);
check(234);
