function adjustFooter()
{
    var footerHeight = $('#content-footer').outerHeight();
    $('div.content-wrapper').css('margin-bottom', footerHeight);
}

$(document).ready(function() {
    adjustFooter();
    
    $(window).resize(adjustFooter);
});
