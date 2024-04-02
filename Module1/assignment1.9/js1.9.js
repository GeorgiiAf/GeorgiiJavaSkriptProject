 function checkPrime() {
            var number = parseInt(document.getElementById("number").value);
            var isPrime = true;
            
            if (number <= 1) {
                isPrime = false;
            } else {
                for (var i = 2; i <= Math.sqrt(number); i++) {
                    if (number % i === 0) {
                        isPrime = false;
                        break;
                    }
                }
            }
            
          var resultMessage = number + " is " + (isPrime ? "" : "not ") + "a prime number.";
            document.getElementById("result").innerHTML = resultMessage;

        }