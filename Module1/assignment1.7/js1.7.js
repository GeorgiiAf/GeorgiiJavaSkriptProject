function rollDice() {
    const numberOfRolls = parseInt(prompt("Enter the number of dice rolls:"));

    // Validate if the entered value is a positive integer
    if (numberOfRolls > 0 && Number.isInteger(numberOfRolls)) {
        let sum = 0;
        for (let i = 0; i < numberOfRolls; i++) {
            // Roll a die (generate a random number between 1 and 6)
            let result = Math.floor(Math.random() * 6) + 1;
            sum += result;
        }
        console.log("Sum of the results:", sum);
    } else {
        console.log("Please enter a valid positive integer for the number of dice rolls.");
    }
}