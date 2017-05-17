<?php

class WP_Widget_Logo_Carousel_Panel extends WP_Widget
{
    public function __construct()
    {
        $widget_opts = array(
            'classname' => '',
            'description' => 'Simple panel with logo and name.',
            'customize-selective-refresh' => false
        );
        parent::__construct('nw-logo-panel', 'Logo and name carousel panel', $widget_opts);
    }
    
    public function widget($args, $instance_options)
    {
        echo $args['before_widget'];
        ?>
        <div class="carousel-panel">
            <div class="carousel-panel-logo-wrapper">
                <div>
                    <span class="icm-nworthotics-logo"></span>
                    <div class="carousel-panel-logo-name-container">
                        <span class="carousel-panel-logo-nw">NORTHWEST</span>
                        <span class="carousel-panel-logo-op">Orthotics—Prosthetics</span>
                    </div>
                </div>
            </div>
        </div>
        <?php
        echo $args['after_widget'];
    }
    
}
