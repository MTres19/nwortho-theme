function searchBarToggle()
{
    jQuery('#header-bar-search-container').toggle();
    jQuery('#header-bar-search-button').toggleClass('icm-search');
    jQuery('#header-bar-search-button').toggleClass('icm-window-close');
}

jQuery(document).ready(function() {
    var $searchButton = jQuery('#header-bar-search-button');
    $searchButton.on('click', searchBarToggle);
});
