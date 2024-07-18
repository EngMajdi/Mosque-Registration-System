document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      window.history.pushState(null, null, href);
      fetchPage(href);
    });
  });
  
  function fetchPage(href) {
    fetch(href)
      .then(response => response.text())
      .then(data => {
        document.body.innerHTML = data;
        document.querySelectorAll('a').forEach(anchor => {
          anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            window.history.pushState(null, null, href);
            fetchPage(href);
          });
        });
      });
  }
  
  window.addEventListener('popstate', function() {
    fetchPage(location.pathname);
  });
  