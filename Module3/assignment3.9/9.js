document.addEventListener('DOMContentLoaded', function() {
    // Get references to the elements
    const calculateButton = document.getElementById('start');
    const inputField = document.getElementById('calculation');
    const resultField = document.getElementById('result');

     calculateButton.addEventListener('click', function() {
        // Get the input value
        const input = inputField.value;

         if (input.includes('+') || input.includes('-') || input.includes('*') || input.includes('/')) {
            // Split the input into operands and operator
            let operatorIndex;
            if (input.includes('+')) {
                operatorIndex = input.indexOf('+');
            } else if (input.includes('-')) {
                operatorIndex = input.indexOf('-');
            } else if (input.includes('*')) {
                operatorIndex = input.indexOf('*');
            } else if (input.includes('/')) {
                operatorIndex = input.indexOf('/');
            }
// Extract operands and operator
            const operand1 = parseInt(input.substring(0, operatorIndex));
            const operand2 = parseInt(input.substring(operatorIndex + 1));
            const operator = input.charAt(operatorIndex);

            let result;
            switch (operator) {
                case '+':
                    result = operand1 + operand2;
                    break;
                case '-':
                    result = operand1 - operand2;
                    break;
                case '*':
                    result = operand1 * operand2;
                    break;
                case '/':
                    if (operand2 !== 0) {
                        result = Math.floor(operand1 / operand2); // Integer division
                    } else {
                        result = 'Cannot divide by zero';
                    }
                    break;
                default:
                    result = 'Invalid operator';
            }

             resultField.textContent = result;
        } else {
            resultField.textContent = 'Invalid input';
        }
    });
});