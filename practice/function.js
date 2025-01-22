//즉시 실행 함수, 한번만 실행되고 메모리에서 지워짐
(function init() {
  console.log("init");
})();

function init() {
  console.log("init2");
}

console.log(init());
