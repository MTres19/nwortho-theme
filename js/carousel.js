function advanceCarousel()
{
    var $carousel_panels = jQuery('.carousel-panel');
    
    for (var i = 0; i < $carousel_panels.length; i++)
    {
        // Find current panel
        if ($carousel_panels.eq(i).hasClass('carousel-current-panel'))
        {
            var $current_carousel = $carousel_panels.eq(i);
        }
        
        // Find previous panel (if there is one)
        if ($carousel_panels.eq(i).hasClass('carousel-previous-panel'))
        {
            var $previous_carousel = $carousel_panels.eq(i);
        }
    }
    
    if (typeof $current_carousel === 'undefined')
    {
        var $current_carousel = $carousel_panels.eq(0);
        $current_carousel.toggleClass('carousel-current-panel');
        return; // First time
    }
    
    $current_carousel.toggleClass('carousel-current-panel');
    $current_carousel.toggleClass('carousel-previous-panel'); // Move current panel away
    
    if ($carousel_panels.index($current_carousel) === $carousel_panels.length - 1)
    {
        $current_carousel = $carousel_panels.eq(0);
    }
    else
    {
        $current_carousel = $carousel_panels.eq($carousel_panels.index($current_carousel) + 1);
    }
    
    $current_carousel.toggleClass('carousel-current-panel'); // Move in new current panel
    
    // Move previous carousel back, behind the current carousel
    if (typeof $previous_carousel !== 'undefined')
    {
        $previous_carousel.toggleClass('carousel-previous-panel');
    }
}

function adjustCarouselPanels()
{
    /* Make carousel panels the size of the container
     * because they're absolutely positioned.
     * 
     * This maintains an 8:5 aspect ratio until the container
     * reaches 35rem (350px) high, at which point it continues
     * to grow in width but not height.
     */
    $container = jQuery('div#carousel-container')
    var containerWidth = $container.width();
    
    if (containerWidth * 5 / 8 < 350)
    {
        $container.css('height', containerWidth * 5 / 8);
    }
    else
    {
        $container.css('height', '35rem');
    }
    
    // Make panels height and width of container.
    var $panels = jQuery('div.carousel-panel');
    $panels.each(function(index) {
        $panels.eq(index).css('height', $container.height());
        $panels.eq(index).css('width', containerWidth);
    });
}

function resetCarousel()
{
    jQuery('.carousel-panel.carousel-current-panel').toggleClass('carousel-current-panel');
    jQuery('.carousel-panel.carousel-previous-panel').toggleClass('carousel-previous-panel');
    
    jQuery('#carousel-container').children().first().toggleClass('carousel-current-panel');
}
    

jQuery(document).ready(function() {
    adjustCarouselPanels();
    
    jQuery(window).resize(resetCarousel);
    jQuery(window).resize(adjustCarouselPanels);
    
    var carousel_id = window.setInterval(advanceCarousel, 5000);
    
    jQuery('#carousel-advance-button').on('click', function() {
        advanceCarousel();
        window.clearInterval(carousel_id); // Give the user some time to view the panel
        carousel_id = window.setInterval(advanceCarousel, 5000); // Start the carousel again
    });
});
