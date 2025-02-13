//async-await
//async
async function getName() {
  throw new Error("err...");
}
getName().then((err) => {
  console.log(err);
});
//await
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
//promise -> async/await
const f1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("1번 주문 완료");
    }, 1000);
  });
};
const f2 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("2번 주문 완료");
    }, 3000);
  });
};
const f3 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("3번 주문 완료");
    }, 2000);
  });
};

// console.log("시작");
// f1()
//   .then((res) => f2(res))
//   .then((res) => f3(res))
//   .then((res) => console.log(res))
//   .catch(console.log)
//   .finally(() => {
//     console.log("끝");
//   });

console.log("시작");
async function order() {
  try {
    const result = await Promise.all([f1(), f2(), f3()]);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
  console.log("종료");
}
order();
