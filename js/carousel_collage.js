function redistributeCollagePics()
{
    var $pictures = jQuery('.carousel-panel-collage-wrapper').children();
    var $container = jQuery('#carousel-container');
    var width = $container.innerWidth();
    var height = $container.innerHeight();
    
    // Calculate number of pictures per panel
    var numPanels = Math.ceil(($pictures.length * 400 * 220) / (width * height));
    var picsPerPanel = Math.ceil($pictures.length / numPanels);
    
    
    var $panels = jQuery();
    for (var i = 0; i < numPanels; ++i)
    {
        var $wrapper = jQuery('<div class="carousel-panel-collage-wrapper"></div>');
        
        for (var j = i * picsPerPanel; j < (i * picsPerPanel) + picsPerPanel; ++j)
        {
            $wrapper.append($pictures.eq(j));
        }
        
        var $panel = jQuery('<div class="carousel-panel"></div>');
        $panel.append($wrapper);
        
        $panels = $panels.add($panel);
    }
    var $old_wrappers = jQuery('.carousel-panel-collage-wrapper');
    $old_wrappers.eq(0).parent().after($panels);
    $old_wrappers.parent().remove();
    
}

jQuery(document).ready(function()
    {
        redistributeCollagePics();
        jQuery(window).resize(redistributeCollagePics);
    }
);
