// Dependencies
var $ = require('jquery');

// Expose `Sticky`.
module.exports = Sticky;

/**
 * Initialize a `Sticky` element.
 */
function Sticky(el) {
    this.el = el;
    this.limit = $(this.el).offset().top;
    var self = this;
    $(window).scroll(function(e) {
        if ($(window).scrollTop() > self.limit) {
            $(self.el).addClass('sticked');
        }
        else {
            $(self.el).removeClass('sticked');
        }
    });
    return this;
}