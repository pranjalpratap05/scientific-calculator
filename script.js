let moreButton = document.getElementById("more-btn");
let moreSelect = document.getElementById("more-select");
moreButton.addEventListener('click', () => {
    moreSelect.style.display = 'inline-block';
});

// Get the display input
const resultInput = document.getElementById('result');

// Get all buttons
const allButtons = document.querySelectorAll('.button');

// Add click listener to each button
allButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const buttonText = button.textContent.trim();
    
    // Skip special buttons (X, =, MORE, C)
    if (buttonText === 'X' || buttonText === '=' || buttonText === 'MORE' || buttonText === 'C') {
      return;
    }

    // Append number or operator to display
    resultInput.value += buttonText;
  });
});

// C button - Clear all
const cButton = document.querySelector('.button-C');
cButton.addEventListener('click', () => {
  resultInput.value = '';
});

// X button - Delete last character
const xButton = document.querySelector('.button-X');
xButton.addEventListener('click', () => {
  resultInput.value = resultInput.value.slice(0, -1);
});

// Dropdown selection - Append function to display
moreSelect.addEventListener('change', (e) => {
  resultInput.value += e.target.value + '(';
});


// = button - Calculate result
// = button - Calculate result
const eqButton = document.querySelector('.button-eq');
eqButton.addEventListener('click', () => {
  try {
    let expression = resultInput.value;
    
    // Replace sin, cos, tan, log with Math functions
    expression = expression.replace(/sin\(/g, 'Math.sin(');
    expression = expression.replace(/cos\(/g, 'Math.cos(');
    expression = expression.replace(/tan\(/g, 'Math.tan(');
    expression = expression.replace(/log\(/g, 'Math.log10(');
    
    // Convert degrees to radians (multiply by Math.PI/180)
    expression = expression.replace(/Math\.sin\(([^)]+)\)/g, 'Math.sin($1*Math.PI/180)');
    expression = expression.replace(/Math\.cos\(([^)]+)\)/g, 'Math.cos($1*Math.PI/180)');
    expression = expression.replace(/Math\.tan\(([^)]+)\)/g, 'Math.tan($1*Math.PI/180)');
    
    // Evaluate the expression
    const result = eval(expression);
    
    // Check if result is valid
    if (isNaN(result) || !isFinite(result)) {
      resultInput.value = 'ERROR';
    } else {
      resultInput.value = result;
    }
  } catch (error) {
    resultInput.value = 'ERROR';
  }
});