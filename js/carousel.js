function advanceCarousel()
{
    var $carousel_panels = $('.carousel-panel');
    
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

function adjustCarouselContainer()
{
    var panelHeight = $('.carousel-panel').height();
    $('#carousel-container').css('height', panelHeight);
}

$(document).ready(function() {
    adjustCarouselContainer();
    $(window).resize(adjustCarouselContainer);
    
    var carousel_id = window.setInterval(advanceCarousel, 5000);
    
    $('#carousel-advance-button').on('click', function() {
        advanceCarousel();
        window.clearInterval(carousel_id); // Give the user some time to view the panel
        carousel_id = window.setInterval(advanceCarousel, 5000); // Start the carousel again
    });
});
