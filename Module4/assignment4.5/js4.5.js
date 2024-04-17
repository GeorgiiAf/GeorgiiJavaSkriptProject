document.addEventListener('DOMContentLoaded', function() {
      fetch('https://api.chucknorris.io/jokes/random')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data.value); // Print the joke to the console
        })
        .catch(error => {
          console.error('Error fetching Chuck Norris joke:', error);
        });
    });