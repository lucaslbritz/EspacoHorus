$(window).on('load', function() {
  $('.nav-item.active').removeClass('active');
});

$(document).ready(function() {
  $('.services-row').on('click', function(event) {
    $(this).closest('li').find('.icon').toggleClass('clicked');
    $(this).closest('li').find('.services-description').fadeToggle('fast');
  })


  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 200) {
      $('.scroll-to-top').fadeIn();
      $('.brand').addClass('active-brand');
    } else {
      $('.scroll-to-top').fadeOut();
      $('.brand').removeClass('active-brand');
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 50
  });
});
