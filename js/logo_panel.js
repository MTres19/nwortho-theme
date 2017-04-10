function adjustLogoPanelText()
{
    var availableSpace = $('.carousel-panel-logo-wrapper > div').width();
    var logoSize = 0.2 * availableSpace;
    var textSize = 0.8 * availableSpace;
    
    var logoFontSize = logoSize;
    var nwFontSize = textSize / $('.carousel-panel-logo-nw').text().length;
    var opFontSize = nwFontSize / 2;
    
    $('.carousel-panel-logo-wrapper > div > .icm-nworthotics-logo').css('font-size', logoFontSize);
    $('.carousel-panel-logo-nw').css('font-size', nwFontSize);
    $('.carousel-panel-logo-op').css('font-size', opFontSize);
}

$(document).ready(function() {
    adjustLogoPanelText();
    $(window).resize(adjustLogoPanelText);
});
