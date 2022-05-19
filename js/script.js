/**
 * This is script for index page
 */

(function ($) {
  
  jQuery.browser = {};
  (function () {
      jQuery.browser.msie = false;
      jQuery.browser.version = 0;
      if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
          jQuery.browser.msie = true;
          jQuery.browser.version = RegExp.$1;
      }
  })();
  $(document).ready(function () {
      var myFullPage = $('#fullpage').fullpage({
        anchors: ['intro', 'fashion', 'process', 'process', 'process', 'cook', 'cook', 'cook', 'cook', 'taste', 'next'],
        menu: '#menu',
        onLeave: function(origin, destination, direction){
          var leavingSection = this;

          // Handling Menu and Logo positions
          if(origin.index == 0 && direction =='down'){
            $('.header .logo-wrap').addClass('shown');
            $('.header .logo-holder').addClass('active');
            $('.header .header-menu').addClass('active');
          }
          else if(origin.index == 1 && direction == 'up'){
            $('.header .logo-wrap').removeClass('shown');
            $('.header .logo-holder').removeClass('active');
            $('.header .header-menu').removeClass('active');
          }

          // Handling background
          if(destination.anchor) {
            $('.page-bg .section-bg[bg-anchor=' + destination.anchor + ']').addClass('active');
            $('.page-bg .section-bg:not([bg-anchor=' + destination.anchor + '])').removeClass('active');
            $('.page-media .section-media[media-anchor=' + destination.anchor + ']').addClass('active');
            $('.page-media .section-media:not([media-anchor=' + destination.anchor + '])').removeClass('active');
          }
        }
        
    });

    $('#enter-btn').on('click', function() {
      fullpage_api.moveSectionDown();
    });
    $('.sound-ctrl').on('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      $('.sound-ctrl').toggleClass('on');
      $('.sound-ctrl').toggleClass('off');
    });
    $('.scroll-to-top').on('click', function() {
      fullpage_api.moveTo(1);
    });

    var numberofslides = Math.floor(($(window).height() - 180) / 200 );
    setTimeout(() => {
      $('.media-slider .slider-holder').slick({
        slidesToShow: numberofslides,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        vertical: true,
        smallBtn: "auto",
      });
    }, 1000);

    $('[data-fancybox="image"]').fancybox({
      infobar: false,
      arrows: false,
      toolbar: false,
      afterShow: function() {
        let imgUrl = $('.fancybox-is-open .fancybox-slide--current .fancybox-content img').attr('src');
        let html = '<a href="' + imgUrl + '" class="fancybox-download-link" download><img src="./images/icons/download.svg" alt="Download"></a><a href="#" class="close-fancybox"><img src="./images/icons/close.svg" alt="Close"></a>';
        $('.fancybox-is-open .fancybox-slide--current .fancybox-content').append(html);
      },
    });
  });
})(jQuery);
