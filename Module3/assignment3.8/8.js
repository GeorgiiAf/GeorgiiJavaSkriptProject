document.addEventListener('DOMContentLoaded', function() {
    // Get references to the elements
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const operationSelect = document.getElementById('operation');
    const resultParagraph = document.getElementById('result');
    const startButton = document.getElementById('start');

    // Add click event listener to the start button
    startButton.addEventListener('click', function() {
        // Get the values of the input fields and selected operation
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const operation = operationSelect.value;

        // Perform the corresponding operation
        let result;
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'sub':
                result = num1 - num2;
                break;
            case 'multi':
                result = num1 * num2;
                break;
            case 'div':
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = 'Division by zero error';
                }
                break;
            default:
                result = 'Invalid operation';
        }

        // Display the result in the result paragraph
        resultParagraph.textContent = `Result: ${result}`;
    });
});