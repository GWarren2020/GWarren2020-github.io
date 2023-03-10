var SmoothScroll = (function ($) {

    var smoothScrollTo = function (target, ms) {
        var offset = $(target).offset(),
            destination = offset ? offset.top : undefined;

        if (typeof destination != 'undefined')
            $("html:not(:animated), body:not(:animated)").animate({ scrollTop: Math.max(destination - 75, 0) }, ms || 300);
    };

    //add listener on page load
    $(function () {
        //watch for clicks on any anchor on the page, apply smooth scrolling
        //  skips anchors with class "no-smooth-scroll"
        $(document).on('click', 'a[href^=#]:not(.no-smooth-scroll)', function () {
            smoothScrollTo($(this).attr('href'));
            return false;
        });
    });

    //global definition of SmoothScroll
    return {
        scrollTo: smoothScrollTo
    };

})(jQuery);