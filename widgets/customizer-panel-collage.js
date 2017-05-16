function addCarouselRenderAreaEventListeners($render_area)
{
    var form_render_id_regex = /nw-collage-settings-([0-9]+)/;
    var widget_number_matches = $render_area.attr('id').match(form_render_id_regex);
    
    var imageRemoveHandlerFunction = function(event) {
        // TODO: remove entire containing <li> and renumber forms and text
        console.log('Remove image, widget number');
        console.log(event.data);
    };
    var imageReplaceHandlerFunction = function(event) {
        // Use wp.media stuff to show popup and fill hidden input field with attachment ID
        console.log('Replace image, widget number');
        console.log(event.data);
        
        var $image_inputs = 
            {
                attachment_id: jQuery(event.target).siblings("input[type='hidden'][name*='attachment_id']"),
                image_preview: jQuery(event.target).siblings("img")
            };
        
        // Based on https://github.com/tutsplus/acme-footer-image
        var file_frame;
        var image_data;
        var json;
        
        if (file_frame)
        {
            file_frame.open();
            return;
        } // Not sure if this makes sense
        
        file_frame = wp.media.frames.file_frame = wp.media({
            frame: 'post',
            multiple: 'false',
            state: 'insert',
            button: { text: 'Use image' },
            library: { type: 'image' }
        });
        
        file_frame.on('insert', function(event) {
            var json = file_frame.state().get('selection').first().toJSON();
            
            if (0 >= jQuery.trim(json.url.length))
            {
                console.log("Failed to get image URL");
                return;
            }
            
            $image_inputs.image_preview.attr('src', json.url);
            $image_inputs.attachment_id.val(json.id);
            
        });
        
        file_frame.open();
    };
    var imageNewHandlerFunction = function(event) {
        // Use wp.media stuff to show popup and add new li if image is chosen
        console.log('Add image, widget number');
        console.log(event.data);
        
        var $add_button = jQuery(event.target);
        var widget_number = event.data;
        
        // Based on https://github.com/tutsplus/acme-footer-image
        var file_frame;
        var image_data;
        var json;
        
        if (file_frame)
        {
            file_frame.open();
            return;
        } // Not sure if this makes sense
        
        file_frame = wp.media.frames.file_frame = wp.media({
            frame: 'post',
            multiple: 'false',
            state: 'insert',
            button: { text: 'Use image' },
            library: { type: 'image' }
        });
        
        file_frame.on('insert', function(event) {
            var json = file_frame.state().get('selection').first().toJSON();
            
            if (0 >= jQuery.trim(json.url.length))
            {
                console.log("Failed to get image URL");
                return;
            }
            var caption_regex = /nw-collage-panel\[([0-9]+)\]\[([a-z]+)\|([0-9]+)\|([a-z]+)\]/
            var img_number = parseInt($add_button.siblings('ol').children().last().children('input[type="text"][name*="caption"]').attr('name').match(caption_regex)[3], 10) + 1;
            
            $add_button.siblings('ol').append(
                '<li><span class="customize-control-title">Image ' + (img_number + 1).toString() + '</span>'
                + '<img alt="" src="' + json.url + '" />'
                + '<div style="clear: both;"></div>'
                + '<button style="float:left;" type="button" class="button remove">Remove image</button>'
                + '<button style="float: right;" type="button" class="button replace">Replace image</button>'
                + '<div style="clear: both;"></div>'
                + '<input type="hidden" name="widget-nw-collage-panel[' + widget_number + ']images|' + img_number.toString() + '|attachment_id]" />'
                + '<label for="widget-nw-collage-panel-' + widget_number + 'imgcaption-' + img_number.toString() + '">Image ' + (img_number + 1).toString() + ' catption</label>'
                + '<input class="widefat" type="text" id="widget-nw-collage-panel-' + widget_number + 'imgcaption-' + img_number.toString() + '" name="widget-nw-collage-panel[' + widget_number + '][images|' + img_number.toString() + '|caption]" /></li>'
            );
            
            // Add event handlers
            $add_button.siblings('ol').children().last().children('button.button.remove').click(widget_number, imageRemoveHandlerFunction);
            $add_button.siblings('ol').children().last().children('button.button.replace').click(widget_number, imageReplaceHandlerFunction);
        });
        
        file_frame.open();
    };
    
    
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
    
    $render_area.find('button.button.remove').click(widget_number, imageRemoveHandlerFunction);
    $render_area.find('button.button.replace').click(widget_number, imageReplaceHandlerFunction);
    $render_area.children('button.button.new').click(widget_number, imageNewHandlerFunction);
}

jQuery(document).ready(function() {
    setTimeout(function() {
        insertionQ("li.customize-control-widget_form[id^='customize-control-widget_nw-collage-panel-'] > *").every(function() {
            
            insertionQ("li.customize-control-widget_form[id^='customize-control-widget_nw-collage-panel-'] > div[id*='nw-collage-panel'] > .widget-inside > .form > .widget-content > .nw-collage-settings-render").every(function(render_area) {
                
                $render_area = jQuery(render_area);
                addCarouselRenderAreaEventListeners($render_area);
            });
        });
        console.log("Ready---test collage");
    }, 7000); // Wait for customizer to replace __i__ with the real widget number
});
