let numbers = [];
let enteredNumbers = new Set();

function promptForNumber() {
    let input = parseFloat(prompt('Enter a number:'));
    if (isNaN(input)) {
        alert('Please enter a valid number.');
        return;
    }

    if (enteredNumbers.has(input)) {
        alert('This number has already been given.');
        displayNumbers();
        return;
    }

    enteredNumbers.add(input);
    numbers.push(input);
    promptForNumber();
}
function displayNumbers() {
    numbers.sort(function(a, b) {
        return a - b;
    });
    console.log('Given numbers in ascending order:');
    numbers.forEach(function(number) {
        console.log(number);
    });
}

promptForNumber();