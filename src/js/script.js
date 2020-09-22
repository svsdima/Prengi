
$(document).ready(function(){
    $('.carousel__bg').slick({
        speed: 2000, /* Скорость перелистывания */
        // adaptiveHeight: true, /* Подстраивается под высоту картинки */
        autoplay: true, /* Автопереключение слайдов */
        autoplaySpeed: 4000, /* Скорость автопереключения */
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        // dots:true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/slick_bg_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/slick_bg_right.png"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                dots:true,
                dotsClass: "carousel-dots",
                arrows: false,
            }
            }
        ]
      });
});