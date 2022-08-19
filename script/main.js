const answer = document.querySelector('.answer');
const input = document.querySelectorAll('.numbers');
let variables = [];
let g = 1;

function forceEval() {
  operate(variables[0], variables[2], variables[1]);
  answer.textContent = c;
  const leftOver = variables[3];
  variables = [];
  variables.push(c);
  variables.push(leftOver);
  g = 0;
}

function Eval() {
  a = answer.textContent;
  a = parseInt(a, 10);
  variables.push(a);
  operate(variables[0], variables[2], variables[1]);
  answer.textContent = c;
  variables = [];
  g = 1;
}
function removeOne() {
  answer.textContent = answer.textContent.slice(0, -1);
}
function deleteMemory() {
  answer.textContent = '';
  variables = [];
  i = 0;
}

function minus() {
  g = 1;
}
function thisInput() {
  return input[1].textContent;
}

function inputting(i) {
  if (g > 0) {
    answer.textContent = answer.textContent + input[i].textContent;
    const c = answer.textContent;
  } else {
    answer.textContent = input[i].textContent;
    minus();
  }
}

function chooseOperator(j) {
  if (variables.length < 2) {
    const operator = j;
    a = answer.textContent;
    a = parseInt(a, 10);
    variables.push(a);
    variables.push(j);
    answer.textContent = '';
    a = '';
    return variables;
  } else {
    a = answer.textContent;
    a = parseInt(a, 10);
    variables.push(a);
    variables.push(j);
    forceEval();
  }
}
function operate(a, b, operator) {
  if (operator == '+') {
    add(a, b);
  } else if (operator == '-') {
    subtract(a, b);
  } else if (operator == '*') {
    multiply(a, b);
  } else if (operator == '/') {
    divide(a, b);
  }
  return c;
}

function add(a, b) {
  c = a + b;
  return c;
}

function subtract(a, b) {
  c = a - b;
  return c;
}

function multiply(a, b) {
  c = a * b;
  return c;
}

function divide(a, b) {
  c = a / b;
  return c;
}
