//Promise
const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve("ok");
    reject(new Error("err...."));
  }, 1000);
});

console.log("시작");
pr.then((result) => {
  console.log(result);
})
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("끝");
  });

//callback hell현상
const f1 = (callback) => {
  setTimeout(function () {
    console.log("1번 주문 완료");
    callback();
  }, 1000);
};

const f2 = (callback) => {
  setTimeout(function () {
    console.log("2번 주문 완료");
    callback();
  }, 3000);
};

const f3 = (callback) => {
  setTimeout(function () {
    console.log("3번 주문 완료");
    callback();
  }, 2000);
};

console.log("시작");
f1(function () {
  f2(function () {
    f3(function () {
      console.log("끝");
    });
  });
});
//이걸 promise로 바꾸면? promise chaining
const f4 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("1번 주문 완료");
    }, 1000);
  });
};
const f5 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("2번 주문 완료");
    }, 3000);
  });
};
const f6 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("3번 주문 완료");
    }, 2000);
  });
};

console.log("시작");
f4()
  .then((res) => f5(res))
  .then((res) => f6(res))
  .then((res) => console.log(res))
  .catch(console.log)
  .finally(() => {
    console.log("끝");
  });
//Promise.all 주의:하나의 정보라도 누락되면 error뜸 / 정보를 다 보여주거나 다 안보여주거나 할 때 사용
console.time("x");
Promise.all([f4(), f5(), f6()]).then((res) => {
  console.log(res);
  console.timeEnd("x");
});
//Promise.race / Promise.all과 사용방식이 같음
console.time("j");
Promise.race([f4(), f5(), f6()]).then((res) => {
  console.log(res);
  console.timeEnd("j");
});
//연습1
const f11 = (callback) => {
  setTimeout(() => {
    console.log("1번 주문 완료");
    callback();
  }, 1000);
};
const f22 = (callback) => {
  setTimeout(() => {
    console.log("2번 주문 완료");
    callback();
  }, 3000);
};
const f33 = (callback) => {
  setTimeout(() => {
    console.log("3번 주문 완료");
    callback();
  }, 2000);
};
console.log("시작");
f11(function () {
  f22(function () {
    f33(function () {
      console.log("끝");
    });
  });
});
//연습2
const f111 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("1번 주문 완료");
    }, 1000);
  });
};
const f222 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("2번 주문 완료");
    }, 3000);
  });
};
const f333 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("3번 주문 완료");
    }, 2000);
  });
};
console.log("시작");
f1()
  .then((res) => f2(res))
  .then((res) => f3(res))
  .then((res) => console.log(res))
  .catch(console.log)
  .finally(() => {
    console.log("끝");
  });
