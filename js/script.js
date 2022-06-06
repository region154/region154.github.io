function fixHeader() {
  let header = $('.head');
  let hederHeight = header.height(); 

  if($(this).scrollTop() > 1) {
    header.addClass('head_fixed');
    $('body').css({
      'paddingTop': hederHeight+'px'
    });
    } else {
    header.removeClass('head_fixed');
    $('body').css({
      'paddingTop': 0
    })
}}

$(document).ready(function(){
  fixHeader();

  $(window).scroll(fixHeader);

  $('.carousel__inner').slick({
    dots: true,
    autoplay: false,
    autoplaySpeed: 3000,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/next1.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/next.png"></button>',
    responsive: [
      {
        breakpoint: 768,
          settings: {
            arrows: false
          },
      }
    ]
  });

  $("a[href^='#']").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top - 200 + "px"});
    return false;
  });
  
});

