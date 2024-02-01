$(function() {
    $("footer a[href^='#']").click(function(e) {
        var target = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(target).offset().top - $("header").outerHeight()
        });
        e.preventDefault();
    });
});