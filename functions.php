<?php

function register_nwortho_menus()
{
    register_nav_menus(
        array(
            'footer-menu' => __('Footer Menu')
        )
    );
}
add_action('init', 'register_nwortho_menus');
