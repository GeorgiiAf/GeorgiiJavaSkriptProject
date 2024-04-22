  const form = document.getElementById('searchForm');
    form.addEventListener('submit', async function(event) {
      event.preventDefault();
      const query = document.getElementById('query').value.trim();
      if (query === '') {
        console.error('Please enter a search query.');
        return;
      }

      try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        const data = await response.json();
        console.log('Search Result:', data);
        // Print each show's name and summary to the console
        data.forEach(show => {
          console.log('Name:', show.show.name);
          console.log('Summary:', show.show.summary);
          console.log('-----------------------------');
        });
      } catch (error) {
        console.error('An error occurred:', error);
      }
    });