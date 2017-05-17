function addCarouselRenderAreaEventListeners($render_area)
{
    var form_render_id_regex = /nw-collage-settings-([0-9]+)/;
    var widget_number_matches = $render_area.attr('id').match(form_render_id_regex);
    
    var imageRemoveHandlerFunction = function(event) {
        // Remove entire containing <li> and renumber forms and text
        console.log('Remove image, widget number');
        console.log(event.data);
        
        jQuery(event.target).parent().nextAll().each(function(index) {
            var imageNumberTextRegex = /([0-9]+)/;
            var imageNumberText = jQuery(this).children('.customize-control-title').text().match(imageNumberTextRegex)[0];
            newImageNumberText = parseInt(imageNumberText) - 1;
            jQuery(this).children('.customize-control-title').text('Image ' + newImageNumberText.toString());
            
            var newImageNumber = newImageNumberText - 1;
            
            //var inputFieldRegex = /widget-nw-collage-panel\[([0-9]+)\]\[images\|([0-9]+)\|(.+)/;
            jQuery(this).children('input[name*="attachment_id"]').attr('name', 'widget-nw-collage-panel[' + event.data + '][images|' + newImageNumber.toString() + '|attachment_id]');
            
            jQuery(this).children('label[for*="caption"]').attr('for', 'widget-nw-collage-panel-' + event.data + '-images|' + newImageNumber.toString() + '|caption');
            jQuery(this).children('label[for*="caption"]').text('Image ' + newImageNumberText.toString() + ' caption');
            
            jQuery(this).children('input[name*="caption"]').attr('id', 'widget-nw-collage-panel-' + event.data + '-images|' + newImageNumber.toString() + '|caption');
            jQuery(this).children('input[name*="caption"]').attr('name', 'widget-nw-collage-panel[' + event.data + '][images|' + newImageNumber.toString() + '|caption]');
        });
        
        jQuery(event.target).parent().remove();
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
            $image_inputs.attachment_id.change(); // Force a refresh
            
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
            var caption_regex = /nw-collage-panel\[([0-9]+)\]\[([a-z]+)\|([0-9]+)\|(.+)\]/;
            var last_already_present_captions = $add_button.siblings('ol').children().last().children('input[type="text"][name*="caption"]');
            
            if (last_already_present_captions.length)
            {
                var caption_regex_results = last_already_present_captions.attr('name').match(caption_regex);
                if (caption_regex_results)
                {
                    var img_number = parseInt(caption_regex_results[3], 10) + 1;
                }
                else
                {
                    var img_number = 0; // First image but somehow there were <li>s...? big problem.
                    console.log("Image listing possibly missing caption input field!");
                }
            }
            else
            {
                var img_number = 0; // First image
            }
            
            $add_button.siblings('ol').append(
                '<li><span class="customize-control-title">Image ' + (img_number + 1).toString() + '</span>'
                + '<img style="width: 100%" alt="" src="' + json.url + '" />'
                + '<div style="clear: both;"></div>'
                + '<button style="float:left;" type="button" class="button remove">Remove image</button>'
                + '<button style="float: right;" type="button" class="button replace">Replace image</button>'
                + '<div style="clear: both;"></div>'
                + '<input type="hidden" name="widget-nw-collage-panel[' + widget_number + '][images|' + img_number.toString() + '|attachment_id]" />'
                + '<label for="widget-nw-collage-panel-' + widget_number + '-images|' + img_number.toString() + '|caption">Image ' + (img_number + 1).toString() + ' caption</label>'
                + '<input class="widefat" type="text" id="widget-nw-collage-panel-' + widget_number + '-images|' + img_number.toString() + '|caption" name="widget-nw-collage-panel[' + widget_number + '][images|' + img_number.toString() + '|caption]" /></li>'
            );
            
            // Add event handlers
            $add_button.siblings('ol').children().last().children('button.button.remove').click(widget_number, imageRemoveHandlerFunction);
            $add_button.siblings('ol').children().last().children('button.button.replace').click(widget_number, imageReplaceHandlerFunction);
            
            // Save attachment ID
            $add_button.siblings('ol').children().last().children('input[type="hidden"][name*="attachment_id"]').val(json.id);
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
    }, 1000); // Wait for customizer to replace __i__ with the real widget number
});
