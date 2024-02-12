import HellowWorldFunction from "./helloWorld";
import addImage from "./image";
import ButtonOne from "./components/ButtonOne";

HellowWorldFunction();
addImage();
const buttonOnes = new ButtonOne();
buttonOnes.render();

//ES6 to ES5

const multiply = (a, b) => {
  let c = a * b;
  console.log("c value is : ", c);
};

multiply(3, 2);
