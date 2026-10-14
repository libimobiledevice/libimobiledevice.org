// Closes the collapsed (mobile) navbar when one of its links is clicked
(function() {
  var menu = document.getElementById('navbarSupportedContent');
  if (!menu) {
    return;
  }
  menu.querySelectorAll('a:not(.dropdown-toggle)').forEach(function(link) {
    link.addEventListener('click', function() {
      if (menu.classList.contains('show')) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });
})();
