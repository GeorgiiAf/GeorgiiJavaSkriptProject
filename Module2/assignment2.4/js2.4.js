// Declaration of an array to store numbers
let numbers = [];

// Function to add numbers to the array
function addNumbers() {
  // Prompt the user to enter a number
  let input = parseFloat(prompt('Enter the number (0 if you want to end)'));
  // Check if the input is valid
  if (isNaN(input)) {
    alert('Please enter a valid number');
  } else if (input == 0) { // If 0 is entered, display the sorted numbers
    displaySortedNumbers();
  } else { // Otherwise, add the number to the array
    numbers.push(input);
  }
}

// Function to display the sorted numbers
function displaySortedNumbers() {
   // Sort the numbers in the array in descending order
   numbers.sort(function(a, b) {
      return b - a;
   });
   // Get a reference to the list element
   let sortedNumbersList = document.getElementById('sortednumbers');
   // Clear the contents of the list
   sortedNumbersList.innerHTML = '';
   // Add each number to the list as a separate list item
   numbers.forEach(function(number) {
      let listItem = document.createElement('li');
      listItem.textContent = number;
      sortedNumbersList.appendChild(listItem);
   });
}

// Add an event listener to the button with the ID 'addButton'
document.getElementById('addButton').addEventListener('click', addNumbers);