jQuery(function ($) {
    $(document).ready(function () {
        
        var swiperL = document.querySelector('.swiper-l');
        if (typeof swiperL !== 'undefined' && swiperL) {
            var swiperLeft = new Swiper(swiperL, {
                loop: true,
                slidesPerView: 3,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    dynamicBullets: true,
                    type: 'bullets',
                },
                 navigation: {
                    nextEl: ".swiper-button-next",
                },
            });
            console.log(swiperLeft);
        }
    });
});