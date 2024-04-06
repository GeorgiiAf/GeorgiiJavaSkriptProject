function calculateSquareRoot() {
    // Display confirmation window
    let confirmation = confirm("Should I calculate the square root?");
    
    if (confirmation) {
        // Ask for the number
        let number = parseFloat(prompt("Enter a number:"));
    //  Checking if the value is a number
        if (!isNaN(number)) {
            if (number >= 0) {
                // Calculate and print square root
                let squareRoot = Math.sqrt(number);
                document.getElementById("result").innerHTML = "The square root of " + number + " is " + squareRoot.toFixed(2);
            } else {
                // Print message for negative number
                document.getElementById("result").innerHTML = "The square root of a negative number is not defined";
            }
        } else {
            // Print message for invalid input
            document.getElementById("result").innerHTML = "Invalid input. Please enter a valid number.";
        }
    } else {
        // Print message when Cancel is selected
        document.getElementById("result").innerHTML = "The square root is not calculated.";
    }
}
