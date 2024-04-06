let num1 = parseInt(prompt("Enter the first integer:"));
let num2 = parseInt(prompt("Enter the second integer:"));
let num3 = parseInt(prompt("Enter the third integer:"));

 let total = num1 + num2 + num3;
 let product = num1 * num2 * num3;
 let average = total / 3;


 // the result to var string

 let resultsHTML = "<p>Sum: " + total + "</p>" +
                  "<p>Product: " + product + "</p>" +
                  "<p>average of the numbers: " + average.toFixed(2) + "</p>";  // 2 digits

// Insert the HTML string into the element with id "results"

document.getElementById("results").innerHTML = resultsHTML;

