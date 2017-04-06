function adjustFooter()
{
    var footerHeight = $('#content-footer').outerHeight();
    $('div.content-wrapper').css('margin-bottom', footerHeight);
}

$(document).ready(function() {
    adjustFooter();
    
    var breakpointDetector = window.matchMedia('(max-width: 750px)');
    breakpointDetector.addListener(adjustFooter);
});
