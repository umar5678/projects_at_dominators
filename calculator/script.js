const display = document.getElementById("display");
const buttons = document.querySelectorAll("#btn");
const clearBtn = document.getElementById("clearBtn");
const getResults = document.getElementById("getResults");

let currentInput = "";

// append inputs and results to the dispaly
function appendToDispaly(value) {
  currentInput += value;
  display.textContent = currentInput;
}

// a function to clear the display
clearBtn.addEventListener("click", () => {
  currentInput = "";
  display.textContent = "0";
});

// Loop through all of the buttons to get their textContent value
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    // console.log(value);
    appendToDispaly(value);
  });
});

// a function to performe calculation
// read more about eval() in docs
function calculateResults() {
  if (currentInput.startsWith("√")) {
    try {
      const num = currentInput.slice(1);
      const squareRoot = Math.sqrt(eval(num));
      addToHistory(currentInput, squareRoot);
      currentInput = squareRoot.toString();
      display.textContent = currentInput;
    } catch (error) {
      display.textContent = "error";
    }
  } else if (currentInput.includes("%of")) {
    try {
      const result = getPercentageOf(currentInput);
      addToHistory(currentInput, result);
      currentInput = result.toString();
      display.textContent = currentInput;
    } catch (error) {
      display.currentInput = "error";
    }
  } else {
    try {
      const results = eval(currentInput);
      addToHistory(currentInput, results);
      console.log(currentInput);
      currentInput = results.toString();
      display.textContent = currentInput;
    } catch (error) {
      display.textContent = "Error";
      console.error(error);
    }
  }
}

getResults.addEventListener("click", calculateResults);

// to get square root of a number
// if the curentInput has √ symbol in first place then calculate the result
// user input √25, and then press '=', it should calculate, and display the results 5
// Show usage example on the frontend, only '√number' will be evalulated, otherwise error

// to get %
// usage example: 20%80 =  16
// check if user has entered number-%of-number
// saperate first number, and second number
// then perform calculation: (first_number x second_number) / 100
// get the result, show it in the display

function getPercentageOf(value) {
  const index = value.indexOf("%of");
  let firstNum = 0;
  let secondNum = 0;
  if (index !== -1) {
    firstNum = value.slice(0, index);
    secondNum = value.slice(index + 3);
  }

  return (eval(firstNum) * eval(secondNum)) / 100;
}

// second use-case of '√'
// user inputs a number and then hits '√' button
// it will show result
// example: enter: 25, then click '√', answer: 5
// in this case no need to explicitly add '√' before a number

// i will do this improvemnet if asked.

// ------------------------------------//

// Now History feature

let history = [];
function addToHistory(inputs, result) {
  history.unshift({ inputs, result });

  // add to localStorage
  localStorage.setItem("calculaterHistory", JSON.stringify(history));

  updateHistoryDisplay();
}

function updateHistoryDisplay() {
  const historyListElement = document.getElementById("historyList");
  historyListElement.innerHTML = "";

  history.forEach(({ inputs, result }) => {
    const listItem = document.createElement("li");

    listItem.textContent = `${inputs} = ${result}`;
    historyListElement.appendChild(listItem);
  });
}

// get storage data

const storedHistory = localStorage.getItem("calculaterHistory");
if (storedHistory) {
  history = JSON.parse(storedHistory);
  updateHistoryDisplay();
}

// clear history

const clearHistory = document.getElementById("clearHistory");
clearHistory.addEventListener("click", () => {
  localStorage.removeItem("calculaterHistory");
  history = [];
  updateHistoryDisplay();
});
