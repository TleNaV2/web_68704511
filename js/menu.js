fetch('menu.html')
  .then(response => {
    if (!response.ok) {
      throw new Error('Cannot load menu');
    }
    return response.text();
  })
  .then(html => {
    document.getElementById('menu-container').innerHTML = html;
  })
  .catch(error => {
    console.error('Error loading menu:', error);
  });
