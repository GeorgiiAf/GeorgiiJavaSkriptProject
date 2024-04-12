// Create an empty array to store the numbers
let numbers = [];

// Prompt the user for five numbers and store them in the array
for (let i = 0; i < 5; i++) {
    let number = prompt(`Enter number ${i + 1}:`);
    // Convert the input to a number and add it to the array
    numbers.push(parseFloat(number));
}

// Print the numbers in reverse order using a for loop
console.log("Numbers in reverse order:");
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}