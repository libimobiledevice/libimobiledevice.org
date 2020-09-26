;(function($) {

  $.fn.waypointLazyLoadImage = function( options ) {
    return $(this).each(function(index, item) {
      var inview = new Waypoint.Inview({
        element: $(item),
        enter: function(direction) {
          $(this.element).attr('src', $(this.element).data('src'));
          $(this.element).removeAttr('data-src');
          $(this.element).parent().removeClass('loading');
          $(this.element).removeClass('loading');
          inview.destroy();
        }
      })
    });
  };

  $.fn.waypointAnimation = function( options ) {
    function classToSelector (className) {
      return '.' + className;
    };

    return $(this).each(function(index, item) {
      var element = $(item);

      var defaults = $.extend({
        offset: '90%',
        delay: '0s',
        animateClass: 'animate',
        animateGroupClass: 'animate-group',
        duration: '1s'
      });

      var settings = $.extend( {}, defaults, options );

      const animationClass = element.attr('data-animation'),
        animationDelay = element.attr('data-animation-delay') || settings.delay,
        animationOffset = element.attr('data-animation-offset') || settings.offset;
        animationDuration = element.attr('data-animation-duration') || settings.duration;


      element.css({
        '-webkit-animation-delay': animationDelay,
        '-moz-animation-delay': animationDelay,
        'animation-delay': animationDelay,
        '-webkit-animation-duration': animationDuration,
        '-moz-animation-duration': animationDuration,
        'animation-duration': animationDuration,
        'opacity': 0
      });

      element.waypoint(function () {
        element
          .addClass('animated')
          .addClass(animationClass)
          .css({
            'opacity': 1
          });
      }, {
        element: $(item),
        triggerOnce: true,
        offset: animationOffset
      });

    });

  };

  $('.animate').waypointAnimation();
  $('img[data-src]:not(.owl-lazy)').waypointLazyLoadImage();

})(window.jQuery);