<?php

class WP_Widget_Collage_Carousel_Panel extends WP_Widget 
{
    public function __construct()
    {
        $widget_opts = array(
            'classname' => '',
            'description' => 'Collage of images with a title for each panel and captions for each image. Expands across multiple panels on smaller screens. Only use this once per page.',
            'customize-selective-refresh' => false
        );
        parent::__construct('nw-collage-panel', 'Photo collage carousel panel', $widget_opts);
    }
    
    public function widget($args, $instance_options)
    {
        echo $args['before_widget'];
        $title = empty($instance_options['panel_title']) ? '' : $instance_options['panel_title'];
        echo '<h3 class="carousel-collage-panel-title">' . $title . '</h3>';
        echo '<div class="carousel-panel-collage-wrapper">';
        
        // Default
        if (empty($instance_options['images']))
        {
            $instance_options['images'] = array(array('caption_text' => 'Test caption'));
        }
        
        foreach ($instance_options['images'] as $image)
        {
            echo '<div class="collage-img-wrapper">';
            
            if (!empty($image['attachment_id']))
            {
                echo '<img alt="" src="' . wp_get_attachment_url($image['attachment_id']) . '" />';
            }
            else
            {
                echo '<img alt="" src="' . get_bloginfo('template_directory') . '/plasma-5-8-lts.jpg" />';
            }
            
            echo '<p class="carousel-collage-caption">' . $image['caption_text'] . '</p>';
            echo '</div>';
        }
        
        echo '</div>';
        echo $args['after_widget'];
    }
    
    public function form($instance_options)
    {
        wp_enqueue_media();
        if (!wp_script_is('insertionQuery', 'enqueued'))
        {
            wp_enqueue_script('insertionQuery', get_theme_file_uri('/js/insertionQ.js'), array(), false, true);
        }
        if (!wp_script_is('nw-carousel-collage-customizer', 'enqueued'))
        {
            wp_enqueue_script(
                'nw-carousel-collage-customizer',
                get_theme_file_uri('/widgets/customizer-panel-collage.js'),
                array('jquery', 'insertionQuery'),
                false,
                true
            );
        }
        
        $instance_options = wp_parse_args(
            $instance_options,
            array(
                'panel_title' => '',
                'images' => array(
                    array(
                        'caption_text' => 'Test image'
                    )
                )
            )
        );
        echo '<div class="nw-collage-settings-render" id="nw-collage-settings-' . $this->number . '">';
        
        echo '<label for="'. $this->get_field_id('panel_title') . '">Panel title:</label>';
        echo '<input class="widefat" id="'
                . $this->get_field_id('panel_title')
                . '" name="'
                . $this->get_field_name('panel_title')
                . '" type="text" value="'
                . esc_attr($instance_options['panel_title'])
                . '"/>';
        
        echo '<ol style="list-style-type: none; margin-left: 0;">';
        foreach ($instance_options['images'] as $index => $image)
        {
            echo '<li>';
            // Image ($index + 1) heading
            echo '<span class="customize-control-title">Image ' . ($index + 1) . '</span>';
            // Image preview
            if (!empty($image['attachment_id']))
            {
                echo '<img style="width: 100%; alt="" src="' . wp_get_attachment_url($image['attachment_id']) . '" />';
            }
            else
            {
                echo '<img style="width: 100%; alt="" src="' . get_bloginfo('template_directory') . '/plasma-5-8-lts.jpg" />';
            }
            
            // Image selector
            echo '<div style="clear: both;"></div>';
            echo '<button style="float:left;" type="button" class="button remove">Remove image</button>';
            echo '<button style="float: right;" type="button" class="button replace">Replace image</button>';
            echo '<div style="clear: both;"></div>';
            
            echo '<input type="hidden" name="widget-nw-collage-panel[' . $this->number . '][images|' . $index . '|attachment_id]"'
                    . ' id="widget-nw-collage-panel-' . $this->number . '-images|' . $index . '|attachment_id"'
                    . ' value="' . $image['attachment_id'] .'" />';
            
            // Image ($index + 1) caption
            echo '<label for="widget-nw-collage-panel-'
                    . $this->number
                    . '-images|' . $index . '|caption">Image ' . ($index + 1) . ' caption:</label>';
            echo '<input class="widefat" type="text" id="widget-nw-collage-panel-'
                    . $this->number
                    . '-images|'. $index . '|caption"'
                    . ' name="widget-nw-collage-panel[' . $this->number . '][images|' . $index . '|caption]"'
                    . ' value="' . esc_html($image['caption']) . '" />';
            
            echo '</li>';
        }
        echo '</ol>';
        
        echo '<button style="width: 100%; margin-bottom: 10px;" type="button" class="button new">Add new image</button>';
        
        echo '</div>'; // render area
    }
    
    public function update($new_instance, $old_instance)
    {
        $instance = array();
        $instance['panel_title'] = esc_attr($new_instance['panel_title']);
        unset($new_instance['panel_title']);
        
        $instance['images'] = array();
        foreach ($new_instance as $key => $val)
        {
            $keys = explode('|', $key);
            if (!$keys[0] == 'images') { continue; }
            $image_number = $keys[1];
            $image_prop = $keys[2];
            
            if (empty($instance['images'][$image_number]))
            {
                $instance['images'][$image_number] = array();
            
            }
            $instance['images'][$image_number][$image_prop] = esc_attr($val);
        }
        
        return $instance;
    }
}
