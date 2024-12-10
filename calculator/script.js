let currentInput = '';  // To store the input
let operation = null;  // To store the selected operation (e.g., +, -, *, /)
let num1 = null;  // To store the first number for the operation

// Append number to the current input
function appendNumber(number) {
  currentInput += number;
  document.getElementById('result').value = currentInput;
}

// Set the operation (+, -, *, /)
function setOperation(op) {
  if (currentInput === '') return;

  if (num1 === null) {
    num1 = parseFloat(currentInput);  // Store the first number
  } else {
    calculateResult();  // If we already have a number, calculate the result first
  }

  currentInput = '';  // Reset current input for the next number
  operation = op;  // Store the selected operation
}

// Clear the result and reset everything
function clearResult() {
  currentInput = '';
  num1 = null;
  operation = null;
  document.getElementById('result').value = '';
}

// Calculate the result based on the stored values and the selected operation
function calculateResult() {
  if (currentInput === '' || num1 === null || operation === null) return;

  const num2 = parseFloat(currentInput);  // The second number

  let result;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        result = 'Error';  // Division by zero check
      } else {
        result = num1 / num2;
      }
      break;
    default:
      return;
  }

  // Display the result
  document.getElementById('result').value = result;
  currentInput = result.toString();  // Store the result for further operations
  num1 = null;  // Reset the first number
  operation = null;  // Reset the operation
}
