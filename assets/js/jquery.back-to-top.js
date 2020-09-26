;(function($) {

  $.fn.backToTop = function( options ) {

    return $(this).each(function(index, item) {
      // scroll to top on click
      var target = $(item);
      target.on("click", function(event) {
        event.preventDefault();
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        return false;
      });

      // show after scrolling a bit (below 60% of window height)
      $(window).scroll(function() {
        if ($(document).scrollTop() > ($(window).height() * 0.6)) {
          target.removeClass("d-none");
          target.removeClass("fadeOut");
          target.addClass("fadeIn")
        } else {
          target.removeClass("fadeIn");
          target.addClass("fadeOut")
        }
      });
    });
  };

})(window.jQuery);

$(document).ready(function($) {

  // Enable "Back to Top" button
  $(".back-to-top").backToTop();

});