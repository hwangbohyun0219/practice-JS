//금칙어 : 콜라
//includes
//문자가 있으면 true
//문자가 없으면 false 반환환

function hasCola(str) {
  if (str.includes("콜라")) {
    console.log("금칙어가 존재한다");
  } else {
    console.log("통과");
  }
}

hasCola("왕 사이다가 최고야");
hasCola("무슨소리 콜라가 더 맛있어");
hasCola("콜라가 짱이야 콜라가 짱");
