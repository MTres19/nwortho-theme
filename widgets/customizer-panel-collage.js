function addCarouselRenderAreaEventListeners($render_area)
{
    var form_render_id_regex = /nw-collage-settings-([0-9]+)/;
    var widget_number_matches = $render_area.attr('id').match(form_render_id_regex);
    if (widget_number_matches)
    {
        var widget_number = widget_number_matches[1];
    }
    else
    {
        console.log("Possible render area missing widget number:");
        console.log($render_area);
        return;
    }
    
    $render_area.find('button.button.remove').click(widget_number, function(event) {
        // TODO: remove entire containing <li> and renumber forms and text
        console.log('Remove image, widget number');
        console.log(event.data);
    });
    $render_area.find('button.button.replace').click(widget_number, function(event) {
        // TODO: Use wp.media stuff to show popup and fill hidden input field with attachment ID
        console.log('Replace image, widget number');
        console.log(event.data);
    });
    $render_area.children('button.button.new').click(widget_number, function(event) {
        // TODO: Use wp.media stuff to show popup and add new li if image is chosen
        console.log('Add image, widget number');
        console.log(event.data);
    });
}

jQuery(document).ready(function() {
    setTimeout(function() {
        insertionQ("li.customize-control-widget_form[id^='customize-control-widget_nw-collage-panel-'] > *").every(function() {
            
            insertionQ("li.customize-control-widget_form[id^='customize-control-widget_nw-collage-panel-'] > div[id*='nw-collage-panel'] > .widget-inside > .form > .widget-content > .nw-collage-settings-render").every(function(render_area) {
                
                $render_area = jQuery(render_area);
                
                console.log($render_area);
                addCarouselRenderAreaEventListeners($render_area);
            });
        });
        console.log("Ready---test collage");
    }, 7000); // Wait for customizer to replace __i__ with the real widget number
});
