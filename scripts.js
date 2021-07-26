let operator = "";
let num1 = 0;
let num2 = 0;

const addFunc = (a, b) => {
  return a + b;
};

const subtractFunc = (a, b) => {
  return a - b;
};

const multiplyFunc = (a, b) => {
  return a * b;
};

const divideFunc = (a, b) => {
  return a / b;
};

const operate = (a, operator, b) => {
  switch (operator) {
    case "+":
        console.log(a, b, operator)
      resultBar.value = addFunc(a, b);
      break;
    case "-":
      resultBar.value = subtractFunc(a, b);
      break;
    case "*":
      resultBar.value = multiplyFunc(a, b);
      break;
    case "/":
      resultBar.value = divideFunc(a, b);
      break;
  }

  // CODE FOR DOING EVERY CALCULATION IN ONE STEP
  //   let numbers = resultBar.value.split(/[^0-9]/g);
  //   let sum = +numbers[0];
  //   console.log(sum)
  //   for (let i = 1; i < numbers.length; i++) {
  //     switch (operator[i - 1]) {
  //       case "+":
  //         sum = addFunc(sum, +numbers[i]);
  //         break;
  //       case "-":
  //         sum = subtractFunc(sum, +numbers[i]);
  //         break;
  //       case "*":
  //         sum = multiplyFunc(sum, +numbers[i]);
  //         break;
  //       case "/":
  //         sum = divideFunc(sum, +numbers[i]);
  //         break;
  //       default:
  //         return "error";
  //     }
  //   }
  //   resultBar.value = sum;
  //   operator = "";
};

const resultBar = document.getElementById("resultNum");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id === "=") {
      num2 = resultBar.value;
      operate(+num1, operator, +num2);
    } else if (
      button.id === "+" ||
      button.id === "-" ||
      button.id === "*" ||
      button.id === "/"
    ) {
      num1 = resultBar.value;
      operator = button.id;
      resultBar.value = 0;
    } else if (button.id === "clear") {
      resultBar.value = "0";
      num1 = 0;
      num2 = 0;
    } else if (resultBar.value === "0") {
      resultBar.value = button.id;
    } else {
      resultBar.value += button.id;
    }
  });
});
