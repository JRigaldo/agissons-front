jQuery(function ($) {
    $(document).ready(function () {
        function accordion() {
            $(".accordion .accordion--title").click(function (e) {
                e.preventDefault();
                $(this).parent().toggleClass('accordion-active');

            });
            $(".sub-accordion .accordion--subtitle").click(function (e){
                e.preventDefault();
                $(this).parent().toggleClass('sub-accordion-active');
            })
        }
        accordion()
    })
})
