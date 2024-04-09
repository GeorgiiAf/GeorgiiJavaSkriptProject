document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.getElementById('source');

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

            const firstName = document.querySelector('input[name="firstname"]').value;
            const lastName = document.querySelector('input[name="lastname"]').value;

         // Display the values in the target paragraph
        const targetParagraph = document.getElementById('target');
        targetParagraph.textContent = `Your name is ${firstName} ${lastName}`;
    });
});