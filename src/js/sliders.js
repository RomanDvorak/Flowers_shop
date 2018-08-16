$('.main-slider').slick({
        arrows: true,
        slidesToShow: 6,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 900,
        prevArrow: '<div class="slider-arrow slider-arrow_main_left"></div>',
        nextArrow: '<div class="slider-arrow slider-arrow_main_right"></div>',
        responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 350,
            settings: {
                slidesToShow: 1
            }
        }
        ]

      });