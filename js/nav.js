// Thanks https://www.templatemonster.com/blog/build-navigation-menu-css-jquery/

$(document).ready(function() {
    var $toggleButton = $('#header-bar-menu-button');
    $toggleButton.on('click', function() {
        $('#full-page-shadow').toggle();
    });
});
