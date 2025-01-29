const myLib = {
  config: {
    theme: "dark",
    lang: "ko",
  },
};

// myLib.config.theme = "light"; // 기존 값이 덮어씌어짐

const uniqueKey = Symbol("theme");
myLib.config[uniqueKey] = "custom-theme";

console.log(myLib.config.theme); // dark
console.log(myLib.config[uniqueKey]); // custom-theme
