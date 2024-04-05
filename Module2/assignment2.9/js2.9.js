function even(numbers) {
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}

// Example array of numbers
let numbersArray = [2,5,11,8,9,13,12,7];

// Call the even function and store the result
let evenArray = even(numbersArray);

// Print the original array
console.log("Original array:", numbersArray);

// Print the array containing even numbers
console.log("Array with even numbers:", evenArray);
