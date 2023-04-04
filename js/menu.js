jQuery(function ($) {
    $(document).ready(function () {
        function responsive() {
            $("#header-icon-links").click(function (e) {
                e.preventDefault()
                $("body").addClass("with-sidebar-links")
                $("body").css({'overflow-y': 'hidden', 'min-height': '100%'});
            })
            $("#exit-menu-links").click(function (e) {
                e.preventDefault()
                $("body").removeClass("with-sidebar-links")
                $("body").css({'overflow-y': 'scroll', 'min-height': 'auto'});
            })
            $("#site-cover").click(function (e) {
                e.preventDefault()
                $("body").removeClass("with-sidebar-links")
                $("body").css({'overflow-y': 'scroll', 'min-height': 'auto'});
            })
        }
        responsive()
    })
})
