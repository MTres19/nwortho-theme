// Thanks https://www.templatemonster.com/blog/build-navigation-menu-css-jquery/

$(document).ready(function() {
    var $toggleButton = $('#header-bar-menu-button');
    var $fullPageShadow = $('#full-page-shadow');
    
    $toggleButton.on('click', function() {
        if ($fullPageShadow.css('opacity') != 0)
        {
            $fullPageShadow.css('opacity', 0);
            return;
        }
        
        if ($fullPageShadow.css('opacity') == 0)
        {
            $fullPageShadow.css('opacity', 0.3);
        }
    });
});
