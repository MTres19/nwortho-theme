function adjustFooter()
{
    var footerHeight = $('footer#content-footer').outerHeight();
    
    if (footerHeight <= $(window).height() - $('header.fixed-header-bar').outerHeight())
    {
        $('div.content-wrapper').css('margin-bottom', footerHeight);
        $('footer#content-footer').css('position', 'fixed');
    }
    else
    {
        /* In this case, the screen is not tall enough to display the
         * entire height of the footer. The margin on the content-wrapper
         * is removed and the footer loses its special curtain effect.
         */
        $('div.content-wrapper').css('margin-bottom', '');
        $('footer#content-footer').css('position', 'relative');
    }
}

function adjustFooterFlexDirection(footerLinksHorizWidth)
{
    var $footerLinks = $('section#footer-links');
    var contentFooterWidth = $('footer#content-footer').width();
    var footerLogoWidth = $('div#footer-logo-container').outerWidth();
    
    if (footerLinksHorizWidth >= contentFooterWidth - footerLogoWidth
        && $footerLinks.css('flex-direction') === 'row'
    ) // Must have "or equal to" b/c otherwise flex-wrap: wrap might engage on #content-footer
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

function adjustFooterLogoAlignment()
{
    var contentFooterWidth = $('footer#content-footer').width();
    
    var $footerLogo = $('div#footer-logo-container');
    var footerLogoWidth = $footerLogo.outerWidth();
    var footerLinksWidth = $('section#footer-links').outerWidth();
    
    if (footerLinksWidth + footerLogoWidth > contentFooterWidth)
    {
        $footerLogo.css('margin-left', 'auto'); // Align center
        $footerLogo.css('margin-right', 'auto');
    }
    else
    {
        $footerLogo.css('margin-left', ''); // Align right
        $footerLogo.css('margin-right', '');
    }
}

$(document).ready(function() {
    var footerLinksHorizWidth = $('section#footer-links').width();
    adjustFooterFlexDirection(footerLinksHorizWidth);
    adjustFooter();
    adjustFooterLogoAlignment();
    
    $(window).resize(function() {
        adjustFooterFlexDirection(footerLinksHorizWidth);
        adjustFooter();
        adjustFooterLogoAlignment();
    });

});
