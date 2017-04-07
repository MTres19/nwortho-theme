function adjustFooter()
{
    var footerHeight = $('#content-footer').outerHeight();
    $('div.content-wrapper').css('margin-bottom', footerHeight);
}

function adjustFooterFlexDirection(footerLinksHorizWidth)
{
    var $footerLinks = $('section#footer-links');
    var contentFooterWidth = $('footer#content-footer').width();
    var footerLogoWidth = $('div#footer-logo-container').outerWidth();
    
    if (footerLinksHorizWidth >= contentFooterWidth - footerLogoWidth
        && $footerLinks.css('flex-direction') === 'row'
    )
    {
        $footerLinks.css('flex-direction', 'column');
    }
    else if (footerLinksHorizWidth < contentFooterWidth - footerLogoWidth
        && $footerLinks.css('flex-direction') === 'column'
    )
    {
        $footerLinks.css('flex-direction', 'row');
    }
}

$(document).ready(function() {
    var footerLinksHorizWidth = $('section#footer-links').width();
    adjustFooterFlexDirection(footerLinksHorizWidth);
    adjustFooter();
    
    $(window).resize(function() {
        adjustFooterFlexDirection(footerLinksHorizWidth);
    });
    $(window).resize(adjustFooter);

});
