 function calculateProbability() {
            const numDice = parseInt(document.getElementById("numDice").value);
            const sum = parseInt(document.getElementById("sum").value);

            let favorableOutcomes = 0;
            const totalOutcomes = 10000; // Total number of simulations

            for (let i = 0; i < totalOutcomes; i++) {
                let rollSum = 0;
                for (let j = 0; j < numDice; j++) {
                    // Roll each die and sum the results
                    rollSum += Math.floor(Math.random() * 6) + 1;
                }
                // Check if the sum matches the desired sum
                if (rollSum === sum) {
                    favorableOutcomes++;
                }
            }

            // Calculate probability
            const probability = (favorableOutcomes / totalOutcomes) * 100;

            // Display result
            const resultElement = document.getElementById("result");
            resultElement.innerHTML = "Probability to get sum " + sum + " with " + numDice + " dice is " + probability.toFixed(2) + "%";
        }