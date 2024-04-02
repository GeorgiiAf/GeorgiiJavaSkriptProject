 function calculateProbability() {
            var numDice = parseInt(document.getElementById("numDice").value);
            var sum = parseInt(document.getElementById("sum").value);

            var favorableOutcomes = 0;
            var totalOutcomes = 10000; // Total number of simulations

            for (var i = 0; i < totalOutcomes; i++) {
                var rollSum = 0;
                for (var j = 0; j < numDice; j++) {
                    // Roll each die and sum the results
                    rollSum += Math.floor(Math.random() * 6) + 1;
                }
                // Check if the sum matches the desired sum
                if (rollSum === sum) {
                    favorableOutcomes++;
                }
            }

            // Calculate probability
            var probability = (favorableOutcomes / totalOutcomes) * 100;

            // Display result
            var resultElement = document.getElementById("result");
            resultElement.innerHTML = "Probability to get sum " + sum + " with " + numDice + " dice is " + probability.toFixed(2) + "%";
        }