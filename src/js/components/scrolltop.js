function init() {
    // declare variable
  let scrollTop = $(".to-top");

  $(window).on('scroll', function() {
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");

    } else {
      $(scrollTop).css("opacity", "0");
    }

  }); // scroll END

  //Click event to scroll to top
  $(scrollTop).on('click', function() {
    $('html, body').animate({
      scrollTop: 0
    }, 300);
    return false;

  }); // click() scroll top EMD
}

export default {
  init
}