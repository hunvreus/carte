var $ = require('jquery'),
    Sticky = require('sticky');

// Collapsible articles
$('article').each(function () {
    var that = $(this);
    var header = that.children('a');
    var body = that.children('.body');
    body.hide();
    header.toggle(
        function () { body.slideDown('fast'); that.addClass('active'); },
        function () { body.slideUp('fast'); that.removeClass('active'); }
    );
});

// Expanding the article on link click and scrolling down to it
$('#links a').each(function () {
    var that = $(this);
    var id = that.attr('href').substring(1);
    that.click(function (e) {
        var header = $('article a[name="'+ id +'"]')
        if (!header.parent().hasClass('active')) header.trigger('click');
        $('html, body').animate({ scrollTop: header.offset().top }, 'fast');
    });

    // If we find a link in the body with similar anchor, add the same behavior
    $('.body a[href=#'+ id +']').click(function (e) {
        $('#links a[href=#'+ id +']').trigger('click');
    });
});

// Making our navigation sticky
new Sticky($('#links'));