// Thanks https://www.templatemonster.com/blog/build-navigation-menu-css-jquery/

var fullPageShadowUsers = [];

function mobileMenuToggle()
{
    var $fullPageShadow = jQuery('#full-page-shadow');
    var $leftNavDrawer = jQuery('#left-nav-drawer');
    
    if (jQuery('#header-bar-title').css('display') == 'none') // Mobile only (detect breakpoint)
    {
        $leftNavDrawer.toggleClass('left-nav-drawer-hidden');
        
        if ($fullPageShadow.css('opacity') != 0)
        {
            $fullPageShadow.css('opacity', 0);
            // Mark the navdrawer as not using the full page shadow
            fullPageShadowUsers.splice(fullPageShadowUsers.indexOf('navdrawer'), 1);
            return;
        }
        
        if ($fullPageShadow.css('opacity') == 0)
        {
            // Sanity check
            if (!fullPageShadowUsers.includes('navdrawer'))
            {
                fullPageShadowUsers.push('navdrawer');
            }
            $fullPageShadow.css('opacity', 0.3);
        }
    }
}

jQuery(document).ready(function() {
    var $toggleButton = jQuery('#header-bar-menu-button');
    var $navDrawerSwipeDetector = jQuery('#nav-drawer-swipe-detector');
    
    // Menu button
    $toggleButton.on('click', mobileMenuToggle);
    
    $navDrawerSwipeDetector.swipe({
        swipeRight:function(event, direction, distance, duration, fingerCount, fingerData) {
            if (jQuery('#left-nav-drawer').hasClass('left-nav-drawer-hidden'))
            {
                mobileMenuToggle();
            }
        }
    });
    
    jQuery('#left-nav-drawer').swipe({
        swipeLeft:function(event, direction, distance, duration, fingerCount, fingerData) {
            if (!jQuery('#left-nav-drawer').hasClass('left-nav-drawer-hidden'))
            {
                mobileMenuToggle();
            }
        }
    });
    
    // Remove full page shadow when needed if only used by left nav drawer
    var breakpointDetector = window.matchMedia('(max-width: 750px)');
    breakpointDetector.addListener(function (breakpointDetector) {
        var $leftNavDrawer = jQuery('#left-nav-drawer');
        
        if (fullPageShadowUsers.length = 1
            && fullPageShadowUsers.includes('navdrawer')
            && !$leftNavDrawer.hasClass('left-nav-drawer-hidden')
        )
        {
            $leftNavDrawer.toggleClass('left-nav-drawer-hidden');
            jQuery('#full-page-shadow').css('opacity', 0);
            // Mark the navdrawer as not using the full page shadow
            fullPageShadowUsers.splice(fullPageShadowUsers.indexOf('navdrawer'), 1);
        }
    });
});
