<?php

class WP_Widget_SinglePhoto_Carousel_Panel extends WP_Widget
{
    public function __construct()
    {
        $widget_opts = array(
            'classname' => '',
            'description' => 'Simple widget that displays a single photo and a caption',
            'customize-selective-refresh' => false
        );
        parent::__construct('nw-single-photo-panel', 'Single photo carousel panel', $widget_opts);
    }
    
    public function widget($args, $instance_options)
    {
        echo $args['before_widget'];
        ?>
        <div class="carousel-panel">
          <div class="carousel-panel-single-photo-wrapper">
            <img class="carousel-panel-single-photo" src="<?php echo empty($instance_options['attachment_id']) ? get_theme_file_uri('/plasma-5-8-lts.jpg') : wp_get_attachment_url($instance_options['attachment_id']); ?>" />
            <p class="carousel-single-photo-caption"><?php echo empty($instance_options['caption']) ? '' : $instance_options['caption'] ?></p>
          </div>
        </div>
        <?php
        echo $args['after_widget'];
    }
    
    public function form($instance_options)
    {
        wp_enqueue_media();
        if (!wp_script_is('insertionQuery', 'enqueued'))
        {
            wp_enqueue_script('insertionQuery', get_theme_file_uri('/js/insertionQ.js'), array(), false, true);
        }
        if (!wp_script_is('nw-carousel-singlephoto-customizer', 'enqueued'))
        {
            wp_enqueue_script(
                'nw-carousel-singlephoto-customizer',
                get_theme_file_uri('/widgets/customizer-panel-singlephoto.js'),
                array('jquery', 'insertionQuery'),
                false,
                true
            );
        }
        echo '<img style="width: 100%;" alt="" src="'
                . (!empty($instance_options['attachment_id']) ? wp_get_attachment_url($instance_options['attachment_id']) : get_theme_file_uri('plasma-5-8-lts.jpg'))
                . '" />';
        echo '<button type="button" style="width: 100%;" class="button replace">Replace image</button>';
        echo '<input type="hidden" name="' . $this->get_field_name('attachment_id') . '" value="'
                . (empty($instance_options['attachment_id']) ? '' : $instance_options['attachment_id']) . '" />';
        
        echo '<label for="' . $this->get_field_id('caption') . '">Image caption</label>';
        echo '<input class="widefat" type="text" id="'
                . $this->get_field_id('caption') . '" name="' . $this->get_field_name('caption')
                . '" value="' . (empty($instance_options['caption']) ? '' : esc_attr($instance_options['caption'])) . '" />';
    }
    
    public function update($new_instance, $old_instance)
    {
        $new_instance['caption'] = esc_attr($new_instance['caption']);
        return $new_instance;
    }
}
