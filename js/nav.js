// Thanks https://www.templatemonster.com/blog/build-navigation-menu-css-jquery/

function mobileMenuToggle()
{
    var $fullPageShadow = $('#full-page-shadow');
    var $leftNavDrawer = $('#left-nav-drawer');
    if ($('#header-bar-title').css('display') == 'none') // Mobile only (detect breakpoint)
    {
        $leftNavDrawer.toggleClass('left-nav-drawer-hidden');
        
        if ($fullPageShadow.css('opacity') != 0)
        {
            $fullPageShadow.css('opacity', 0);
            return;
        }
        
        if ($fullPageShadow.css('opacity') == 0)
        {
            $fullPageShadow.css('opacity', 0.3);
        }
    }
}

$(document).ready(function() {
    var $toggleButton = $('#header-bar-menu-button');
    var $navDrawerSwipeDetector = $('#nav-drawer-swipe-detector');
    
    // Menu button
    $toggleButton.on('click', mobileMenuToggle);
    
    // Menu swipe
    $navDrawerSwipeDetector.swipe({
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
            if ($('#left-nav-drawer').hasClass('left-nav-drawer-hidden'))
            {
                mobileMenuToggle();
            }
        }
    });
    
    $('#left-nav-drawer').swipe({
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
            if (!$('#left-nav-drawer').hasClass('left-nav-drawer-hidden'))
            {
                mobileMenuToggle();
            }
        }
    });
});
