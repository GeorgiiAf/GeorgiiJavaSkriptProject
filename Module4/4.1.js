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
        console.log(data);
        // Here you can process and display the retrieved data as needed
      } catch (error) {
        console.error('An error occurred:', error);
      }
    });