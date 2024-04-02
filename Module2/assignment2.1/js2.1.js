 function printReverseOrder() {
            var numbers = []; // Array to store the numbers

            // Get the numbers from the input fields
            for (var i = 1; i <= 5; i++) {
                var num = parseInt(document.getElementById("num" + i).value);
                numbers.push(num); // Add the number to the array
            }

            // Print the numbers in reverse order
            for (var j = numbers.length - 1; j >= 0; j--) {
                console.log(numbers[j]); // Print each number to the console
            }
        }