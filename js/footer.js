function adjustFooter()
{
    var footerHeight = jQuery('footer#content-footer').outerHeight();
    
    if (footerHeight <= jQuery(window).height() - jQuery('header.fixed-header-bar').outerHeight())
    {
        jQuery('div.content-wrapper').css('margin-bottom', footerHeight);
        jQuery('footer#content-footer').css('position', 'fixed');
    }
    else
    {
        /* In this case, the screen is not tall enough to display the
         * entire height of the footer. The margin on the content-wrapper
         * is removed and the footer loses its special curtain effect.
         */
        jQuery('div.content-wrapper').css('margin-bottom', '');
        jQuery('footer#content-footer').css('position', 'relative');
    }
}

function adjustFooterFlexDirection(footerLinksHorizWidth)
{
    var $footerLinks = jQuery('section#footer-links');
    var contentFooterWidth = jQuery('footer#content-footer').width();
    var footerLogoWidth = jQuery('div#footer-logo-container').outerWidth();
    
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
    var contentFooterWidth = jQuery('footer#content-footer').width();
    
    var $footerLogo = jQuery('div#footer-logo-container');
    var footerLogoWidth = $footerLogo.outerWidth();
    var footerLinksWidth = jQuery('section#footer-links').outerWidth();
    
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

jQuery(document).ready(function() {
    var footerLinksHorizWidth = jQuery('section#footer-links').width();
    adjustFooterFlexDirection(footerLinksHorizWidth);
    adjustFooter();
    adjustFooterLogoAlignment();
    
    jQuery(window).resize(function() {
        adjustFooterFlexDirection(footerLinksHorizWidth);
        adjustFooter();
        adjustFooterLogoAlignment();
    });

});
