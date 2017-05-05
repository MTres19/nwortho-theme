function redistributeCollagePics()
{
    var $pictures = jQuery('.carousel-panel-collage-wrapper').contents();
    jQuery('.carousel-panel-collage-wrapper').parent().remove();
    var $container = jQuery('#carousel-container');
    var width = $container.innerWidth();
    var height = $container.innerHeight();
    
    // Calculate number of pictures per panel
    var picsPerPanel = Math.floor(($pictures.length * 400 * 220) / (width * height));
    var numPanels = Math.ceil($pictures.length / picsPerPanel);
    
    var $panels = jQuery();
    for (var i = 0; i < numPanels; ++i)
    {
        for (var j = i * picsPerPanel; j < (i * picsPerPanel) + picsPerPanel; ++j)
        {
            $wrapper = jQuery('<div class="carousel-panel-collage-wrapper"></div>');
            $wrapper.html($pictures.eq(j));
            
            $panel = jQuery('<div class="carousel-panel"></div>');
            $panel.append($wrapper);
            
            $panels.append($panel);
        }
    }
}

jQuery(document).ready(function()
    {
        jQuery(window).resize(redistributeCollagePics);
    }
);
