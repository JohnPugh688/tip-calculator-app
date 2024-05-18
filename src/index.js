// Get references to input and output fields
const billAmountInput = document.getElementById("billAmount");
const numPeopleInput = document.getElementById("numPeople");
const totalTipOutput = document.getElementById("totalTipAmount");
const totalBillPerPersonOutput = document.getElementById("totalBillPerPerson");
const customTipInput = document.getElementById("customTip");

numPeopleInput.addEventListener("input", checkInputs);

// Get reference to tip buttons
const tipButtons = document.querySelectorAll(".tipButton");

// Function to calculate total tip amount
function calculateTotalTip() {
  var totalTip = 0;
  tipButtons.forEach(function (button) {
    if (button.classList.contains("active")) {
      var tipPercentage = parseFloat(button.getAttribute("data-tip"));
      totalTip += parseFloat(billAmountInput.value) * tipPercentage;
    }
  });

  // Check if custom tip is a valid number
  var customTipValue = parseFloat(customTipInput.value);
  if (!isNaN(customTipValue)) {
    totalTip += parseFloat(billAmountInput.value) * (customTipValue / 100);
  }

  return totalTip;
}

function calculateTotalBillPerPerson() {
  var totalTip = calculateTotalTip();
  var billAmount = parseFloat(billAmountInput.value);
  var numPeople = parseFloat(numPeopleInput.value);

  // Check if billAmount and numPeople are valid numbers
  if (isNaN(billAmount) || isNaN(numPeople) || numPeople <= 0) {
    return 0; // Return 0 if any input is not a valid number or if numPeople is less than or equal to 0
  }

  return (billAmount + totalTip) / numPeople;
}

function calculateTotalBillPerPerson() {
  var totalTip = calculateTotalTip();
  var billAmount = parseFloat(billAmountInput.value);
  var numPeople = parseFloat(numPeopleInput.value);

  // Check if billAmount and numPeople are valid numbers
  if (isNaN(billAmount) || isNaN(numPeople) || numPeople <= 0) {
    return 0; // Return 0 if any input is not a valid number or if numPeople is less than or equal to 0
  }

  return (billAmount + totalTip) / numPeople;
}

// Function to update output fields
function updateOutputs() {
  totalTipOutput.textContent = calculateTotalTip().toFixed(2);
  totalBillPerPersonOutput.textContent =
    calculateTotalBillPerPerson().toFixed(2);
}

// Add click event listener to tip buttons
tipButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Toggle active class to highlight selected tip button
    tipButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });
    button.classList.add("active");
    updateOutputs(); // Update outputs when tip button is clicked
  });
});

// Add input event listeners to bill amount, custom tip, and number of people input fields
billAmountInput.addEventListener("input", updateOutputs);
customTipInput.addEventListener("input", updateOutputs); // Call updateOutputs directly
numPeopleInput.addEventListener("input", updateOutputs);

// Add click event listener to reset button
var resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", function () {
  billAmountInput.value = "";
  numPeopleInput.value = "";
  customTipInput.value = "Custom";
  errorMessage.value = "";
  tipButtons.forEach(function (button) {
    button.classList.remove("active");
  });
  updateOutputs();
});

// Initialize outputs
updateOutputs();

function checkInputs() {
  if (numPeopleInput.value <= 0) {
    numPeopleInput.classList.add("errorMessage");
    document.getElementById("errorMessage").innerHTML = "can't be zero";
  } else {
    numPeopleInput.classList.remove("errorMessage");
    document.getElementById("errorMessage").innerHTML = "";
  }
}
