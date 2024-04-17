 // Function to handle form submission
    function handleFormSubmit(event) {
      event.preventDefault(); // Prevent default form submission behavior

      const searchInput = document.getElementById('searchInput').value.trim();
      if (searchInput === '') {
        console.log('Please enter a search term.');
        return;
      }

      const url = `https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(searchInput)}`;

      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          const resultsContainer = document.getElementById('results');
          resultsContainer.innerHTML = ''; // Clear old results

          // Iterate through search results and print each joke
          data.result.forEach(joke => {
            const article = document.createElement('article');
            const paragraph = document.createElement('p');
            paragraph.textContent = joke.value;
            article.appendChild(paragraph);
            resultsContainer.appendChild(article);
          });
        })
        .catch(error => {
          console.error('Error fetching Chuck Norris jokes:', error);
        });
    }

    // Add event listener to form for form submission
    document.getElementById('searchForm').addEventListener('submit', handleFormSubmit);