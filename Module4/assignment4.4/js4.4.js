document.addEventListener('DOMContentLoaded', function() {
  const searchForm = document.getElementById('searchForm');
  const resultsContainer = document.getElementById('results');

  searchForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const query = document.getElementById('query').value.trim();
    if (query === '') {
      console.log('Please enter a TV series name.');
      return false;
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
        // Clear old results
        resultsContainer.innerHTML = '';

        // Iterate through the search result data
        data.forEach(tvShow => {
          // Create an article element for each TV show
          const article = document.createElement('article');

          // Add the TV show name in h2 element
          const title = document.createElement('h2');
          title.textContent = tvShow.show.name;
          article.appendChild(title);

          // Add the URL to details in a element
          const detailsLink = document.createElement('a');
          detailsLink.href = tvShow.show.url;
          detailsLink.textContent = 'Details';
          detailsLink.target = '_blank'; // Open link in new tab
          article.appendChild(detailsLink);

          // Add the image if available, otherwise use the default image
          const img = document.createElement('img');
          img.src = tvShow.show.image ? tvShow.show.image.medium : 'https://via.placeholder.com/210x295?text=Not%20Found';
          img.alt = tvShow.show.name;
          article.appendChild(img);

          // Add the summary in a div element
          const summary = document.createElement('div');
          summary.innerHTML = tvShow.show.summary;
          article.appendChild(summary);

          // Append the article to the results container
          resultsContainer.appendChild(article);
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });
});