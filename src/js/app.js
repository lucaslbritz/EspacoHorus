//--------------------------------------------------
//  Remove initial active class from navigation
//--------------------------------------------------

$(window).on('load', function() {
  $('.nav-item.active').removeClass('active');
});

//--------------------------------------------------
//  Start bootstrap tooltip
//--------------------------------------------------

function isTouchDevice() {
  return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}

$(function () {
  if (isTouchDevice() === false) {
    $('[data-toggle="tooltip"]').tooltip();
  }
})

//--------------------------------------------------
//  Document ready
//--------------------------------------------------

$(document).ready(function() {

  // Add function when click on expand/close service description
  $('.services-row').on('click', function(event) {
    $(this).closest('li').find('.icon').toggleClass('clicked');
    $(this).closest('li').find('.services-description').fadeToggle('fast');

    // Change message of description tooltip
    if ($(this).closest('.services-row').find('.icon').tooltip().attr('data-original-title') === 'Ver descrição') {
      $(this).closest('.services-row').find('.icon').tooltip().attr('data-original-title', 'Fechar descrição')
             .tooltip('fixTitle').tooltip('show');
    } else {
      $(this).closest('.services-row').find('.icon').tooltip().attr('data-original-title', 'Ver descrição')
             .tooltip('fixTitle').tooltip('show');
    }

    // Turn visible and invisible "close all" service option
    if ($(this).closest('ul').find('.icon.clicked').length > 1) {
      $(this).closest('ul').find('.services-close-option').fadeIn('fast');
    } else {
      $(this).closest('ul').find('.services-close-option').fadeOut('fast');
    }
  })

  // Add function when click on "close all" service option
  $('.services-close-all').on('click', function(event) {
    $(this).closest('ul').find('.icon.clicked').removeClass('clicked');
    $(this).closest('ul').find('.services-description').fadeOut('fast');
    $(this).closest('ul').find('.services-close-option').fadeOut('fast');
    $(this).closest('ul').find('.services-row').find('.icon').tooltip().attr('data-original-title', 'Ver descrição').tooltip('fixTitle');
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
