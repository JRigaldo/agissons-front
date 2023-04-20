jQuery(function ($) {
    $(document).ready(function () {

        var swiper = document.querySelector('.swiper');
        if (typeof swiper !== 'undefined' && swiper) {
            var swiper = new Swiper(swiper, {
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
            console.log(swiper);
        }
    });
});