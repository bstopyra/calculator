let operator = "";
let num1 = 0;
let num2 = 0;
const operators = "+-*/%";

const resultBar = document.getElementById("resultNum");

const removeTransition = (e) => {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
};

window.addEventListener("keydown", (e) => {
  let keyDown = e.key;
  const key = document.querySelector(`button[key='${keyDown}']`);
  key.classList.add("clicked");
  if (resultBar.value === "error") {
    resultBar.value = "0";
  }
  if (keyDown === "Enter") {
    num2 = resultBar.value;
    operate(+num1, operator, +num2);
  } else if (operators.includes(keyDown)) {
    operatorHandler(keyDown);
  } else if (keyDown === "Escape") {
    clearFunc();
  } else if (keyDown === "." || keyDown === ",") {
    decimalCheck(keyDown);
  } else if (keyDown === "Backspace") {
    backspaceFunc();
  } else if (resultBar.value === "0") {
    if (parseInt(keyDown, 10)) {
      resultBar.value = keyDown;
    }
  } else if (parseInt(keyDown, 10)) {
    resultBar.value += keyDown;
  }
  setTimeout(() => {
    key.classList.remove("clicked");
  }, 200);
});

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
  return b !== 0 ? a / b : "error";
};

const modalFunc = (a, b) => {
  return a % b;
};

const operate = (a, operator, b) => {
  if (resultBar.value === NaN) {
    resultBar.value = 0;
  }
  switch (operator) {
    case "+":
      handleOperatorCase(addFunc(a, b));
      break;
    case "-":
      handleOperatorCase(subtractFunc(a, b));
      break;
    case "*":
      handleOperatorCase(multiplyFunc(a, b));
      break;
    case "/":
      handleOperatorCase(divideFunc(a, b));
      break;
    case "%":
      handleOperatorCase(modalFunc(a, b));
      break;
    default:
      resultBar.value = "error";
      break;
  }
};

const calculatorHandler = (button) => {
  if (resultBar.value === "error") {
    resultBar.value = "0";
  }
  if (button === "=") {
    num2 = resultBar.value;
    operate(+num1, operator, +num2);
  } else if (operators.includes(button)) {
    operatorHandler(button);
  } else if (button === "clear") {
    clearFunc();
  } else if (button === "+/-") {
    negativeValueFunc();
  } else if (button === ".") {
    decimalCheck(button);
  } else if (button === "backspace") {
    backspaceFunc();
  } else if (resultBar.value === "0") {
    resultBar.value = button;
  } else {
    resultBar.value += button;
  }
};

const handleOperatorCase = (calcFunc) => {
  resultBar.value = calcFunc;
  if (resultBar.value.split(".")[1]) {
    resultBar.value = roundDecimals(resultBar.value);
  }
};

const roundDecimals = (num) => {
  const dec = num.split(".")[1];
  const len = dec && dec.length > 3 ? 3 : dec.length;
  return Number(num).toFixed(len);
};

const decimalCheck = (button) => {
  if (!resultBar.value.includes(".")) {
    resultBar.value += button;
  }
};

const clearFunc = () => {
  resultBar.value = "0";
  num1 = 0;
  num2 = 0;
};

const operatorHandler = (button) => {
  num1 = resultBar.value;
  operator = button;
};

const backspaceFunc = () => {
  resultBar.value = resultBar.value.substring(0, resultBar.value.length - 1);
};

const negativeValueFunc = () => {
  console.log(resultBar.value);
  if (resultBar.value != "0") {
    resultBar.value = 0 - resultBar.value;
  }
};

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    calculatorHandler(button.id);
  });
});