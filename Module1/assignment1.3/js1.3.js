var num1 = parseInt(prompt("Enter the first integer:"));
var num2 = parseInt(prompt("Enter the second integer:"));
var num3 = parseInt(prompt("Enter the third integer:"));

 var total = num1 + num2 + num3;
 var product = num1 * num2 * num3;
 var average = total / 3;

 var resultsHTML = "<p>Sum: " + total + "</p>" +
                  "<p>Product: " + product + "</p>" +
                  "<p>average of the numbers: " + average.toFixed(2) + "</p>";  // 2 digits

document.getElementById("results").innerHTML = resultsHTML;

