$(document).ready(function() {
    var $toggleButton = $('#header-bar-menu-button');
    $toggleButton.on('click', function() {
        $('#full-page-shadow').toggle();
    });
});
