//setTimeout, setinterval
//setTimeout
function fn() {
  console.log(3);
}
setTimeout(fn, 3000);

setTimeout(function fn() {
  console.log(3);
}, 3000);

function showName(name) {
  console.log(name);
}
const tId = setTimeout(showName, 3000, "Mike");
clearTimeout(tId);
//setinterval
function showName1(name) {
  console.log(name);
}
const tId1 = setInterval(showName1, 3000, "Jane");
clearInterval(tId1);
//예시
let num = 0;
function showTime() {
  console.log(`안녕하세요. 접속하신지 ${num++}이 지났습니다.`);
  if (num > 5) {
    clearInterval(tId2);
  }
}
const tId2 = setInterval(showTime, 1000);
