jQuery(document).ready(function() {
    setTimeout(function() {
        insertionQ('li.customize-control-widget_form[id^="customize-control-widget_nw-single-photo-panel"] > *').every(function() {
            insertionQ('li.customize-control-widget_form[id^="customize-control-widget_nw-single-photo-panel"] > div.widget > .widget-inside > .form > .widget-content > img').every(function(render_area_children) {
                var $render_area = jQuery(render_area_children).eq(0).parent();
                console.log("hello");
                $render_area.children('button.button.replace').click(function(event) {
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
                });
            });
        });
        console.log('Ready---test single photo');
    }, 1000); // Wait for customizer to replace __i__ with the real widget number
    
});
