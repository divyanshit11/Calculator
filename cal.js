// Get the result input element
const result = document.getElementById("result");

// Get all the buttons
const buttons = document.getElementsByTagName("button");

// Add event listeners to all the buttons
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", calculate);
}

// Clear the result input
document.getElementById("clear").addEventListener("click", () => {
  result.value = "";
});

// Calculate the result based on the button clicked
function calculate() {
  const value = this.textContent;
  
  if (value === "=") {
    try {
      result.value = eval(result.value);
    } catch (error) {
      result.value = "Error";
    }
  } else {
    result.value += value;
  }
}
