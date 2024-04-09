document.addEventListener('DOMContentLoaded', function() {
  const searchForm = document.getElementById('searchForm');

  searchForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const query = document.getElementById('query').value.trim();
    if (query === '') {
      console.log('Please enter a TV series name.');
      return;
    }

    const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Display the fetched data in the console
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });
});