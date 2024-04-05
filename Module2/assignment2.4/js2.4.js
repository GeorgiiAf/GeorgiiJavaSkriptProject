let numbers = [];

function addNumbers() {
  let input = parseFloat(prompt('Enter the number (0 if you want to end)'));
  if (isNaN(input)) {
    alert('Print a number please');
  } else if (input == 0) {
    displaySortedNumbers();
  } else {
    numbers.push(input);
  }
}

function displaySortedNumbers() {
   numbers.sort(function(a, b) {
      return b - a;
   });
   let sortedNumbersList = document.getElementById('sortednumbers');
   sortedNumbersList.innerHTML = '';
   numbers.forEach(function(number) {
      let listItem = document.createElement('li');
      listItem.textContent = number;
      sortedNumbersList.appendChild(listItem);
   });
}

document.getElementById('addButton').addEventListener('click', addNumbers);