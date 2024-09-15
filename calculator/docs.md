# Chellange
Create a calculator that performs basic operations: addition, subtraction, multiplication, and division.
Add buttons for numbers (0-9) and operators (+, -, *, /).
Show the result on a display when the user clicks "equals.
Add a button that calculates the percentage of a number.
Example: 50% of 200 should give 100.
also add a button to calculate the square root of the current value.

Memory Functions
History Feature
add if you  can its not compulsory

## solution

I build it
- `inde.html` contain html
it shows user instruction on left, calculato in middle, history on right.
I used tailwindcss for styling

- `script.js` 
- Get access to document element like , display, buttons
- itterate over the buttons to get their textContent values
- make a function to append these values to the display
- make  function to clear the display when 'C' btn clicked
- make a calcualateResult function which is invoked when '=' is clicked
- This function calculate results based on different conditions usiing if else (for sq. root, aand % of)
- make saperate functions for sq.root and % of
- put some logic for mathematical + Js calculations


- `eval()`
The eval() function in JavaScript is a powerful but potentially dangerous function. It takes a string as input and attempts to execute it as JavaScript code. This means it can evaluate expressions, execute statements, and even declare variables.

In the context of the calculator, the eval() function is used to evaluate the mathematical expression stored in the currentInput variable. For example, if currentInput contains the string "2 + 3", calling eval(currentInput) will return the result 5.