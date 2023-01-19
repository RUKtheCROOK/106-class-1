function sayHi(name) {
  let hello = "Hello World";
  let year = 2020;
  if (name == undefined) {
    console.log(hello);
  } else {
    console.log("Hello my name is " + name + " and the year is not " + year);
  }
}

function numbers() {
  for (let i = 0; i <= 20; i++) {
    if (i != 7) {
      console.log(i);
    }
  }
}
function sum(num1, num2) {
  return num1 + num2;
}

function init() {
  console.log("John Garcia");
  sayHi();
  sayHi("John");
  let newName = "Jim";
  sayHi(newName);
  numbers();
  var result = sum(21, 21);
  console.log(result);
}

window.onload = init;
