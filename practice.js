// //Promise
// //callback hell 현상
// const f1 = (callback) => {
//   setTimeout(function () {
//     console.log("1번 주문 완료");
//     callback();
//   }, 1000);
// };
// const f2 = (callback) => {
//   setTimeout(function () {
//     console.log("2번 주문 완료");
//     callback();
//   }, 3000);
// };
// const f3 = (callback) => {
//   setTimeout(function () {
//     console.log("3번 주문 완료");
//     callback();
//   }, 2000);
// };
// console.log("시작");
// f1(function () {
//   f2(function () {
//     f3(function () {
//       console.log("끝");
//     });
//   });
// });
//Promise 체이닝 적용
const f11 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("1번 주문 완료");
    }, 1000);
  });
};
const f22 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("2번 주문 완료");
    }, 3000);
  });
};
const f33 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("3번 주문 완료");
    }, 2000);
  });
};

// console.log("시작");
// f11()
//   .then((res) => f22(res))
//   .then((res) => f33(res))
//   .then((res) => console.log(res))
//   .catch(console.log)
//   .finally(() => {
//     console.log("끝");
//   });
console.log("시작");
async function order() {
  const result1 = await f11();
  const result2 = await f22(result1);
  const result3 = await f33(result2);
  console.log(result3);
  console.log("종료");
}
order();
//async await
function getName(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name);
    }, 1000);
  });
}
async function showName() {
  const result = await getName("Mike");
  console.log(result);
}
console.log("시작");
showName();
