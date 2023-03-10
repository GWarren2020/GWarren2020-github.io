// Wrap iframes for resizing
(function ($) {
    $(function(){
        $("iframe:not(.noresize)").each(function(){
            var w = $(this).width();
            var h = $(this).height();
            var ratio = (w > h) ? (h / w) * 100 : (w / h) * 100;
            $(this).wrap("<div class='iframe-container' style='padding-bottom: " + ratio + "%'></div>")
        });
    });
})(jQuery);