function adjustLogoPanelText()
{
    var availableSpace = jQuery('.carousel-panel-logo-wrapper > div').width();
    var logoSize = 0.2 * availableSpace;
    var textSize = 0.8 * availableSpace;
    
    var logoFontSize = logoSize;
    var nwFontSize = textSize / jQuery('.carousel-panel-logo-nw').text().length;
    var opFontSize = nwFontSize / 2;
    
    jQuery('.carousel-panel-logo-wrapper > div > .icm-nworthotics-logo').css('font-size', logoFontSize);
    jQuery('.carousel-panel-logo-nw').css('font-size', nwFontSize);
    jQuery('.carousel-panel-logo-op').css('font-size', opFontSize);
}

jQuery(document).ready(function() {
    adjustLogoPanelText();
    jQuery(window).resize(adjustLogoPanelText);
});
