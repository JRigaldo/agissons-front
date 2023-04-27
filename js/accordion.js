jQuery(function ($) {
    $(document).ready(function () {
        function accordion() {
            $("#header-icon-links").click(function (e) {
                e.preventDefault()
                $("body").addClass("with-sidebar-links")
                $("body").css({ 'overflow-y': 'hidden', 'min-height': '100%' });
            });
        }
        responsive()
    })
})
