<?php

add_action('init', function()
    {
        register_nav_menus(
            array(
                'footer-menu-left' => 'Left/top footer menu',
                'footer-menu-middle' => 'Middle footer menu',
                'footer-menu-right' => 'Right/bottom footer menu',
                'left-nav-menu' => 'Left Navigation Drawer'
            )
        );
    }
);


function fallback_left_menu()
{
    wp_page_menu(
        array(
            'menu_class' => '',
            'menu_id' => 'left-nav-links-list',
            'container' => 'ul',
            'before' => false,
            'after' => false,
        )
    );
}

add_theme_support('post-thumbnails', array('post'));
add_theme_support('html5');
add_theme_support('title-tag');


// From https://peterwilson.cc/including-wordpress-comment-reply-js/
add_action('wp_enqueue_scripts', function()
    {
        if (is_singular() && comments_open() && get_option('thread_comments'))
        {
            wp_enqueue_script( 'comment-reply' );
        }
    }
);

// Make sure users can edit the "Posts page" since this theme displays that page's content at the top
// Thanks https://robincornett.com/posts-page/
add_action('edit_form_after_title', function($post)
    {
        if ($post->ID == get_option('page_for_posts'))
        {
            add_post_type_support('page', 'editor');
        }
    }
);

// Thanks to https://wordpress.stackexchange.com/a/45708
function _nw_get_menu_by_location($location) {
    if ( empty($location) ) return false;

    $locations = get_nav_menu_locations();
    if (!isset($locations[$location])) return false;

    $menu_obj = get_term( $locations[$location], 'nav_menu' );

    return $menu_obj;
}


add_action('widgets_init', function()
    {
        register_sidebar(array(
            'id' => 'blog',
            'name' => 'Right/bottom widget area (blog only)'
        ));
        register_sidebar(array(
            'id' => 'global',
            'name' => 'Bottom widget area (all pages)'
        ));
    }
);


add_action('wp_enqueue_scripts', function()
    {
        wp_deregister_script('jquery');
        
        wp_enqueue_script('jquery',                 'https://code.jquery.com/jquery-3.2.1.min.js');
        wp_enqueue_script('nwop-touchswipe-jquery', get_theme_file_uri('/js/touchswipe.js'      ), array('jquery'));
        
        wp_enqueue_script('nwop-carousel',          get_theme_file_uri('/js/carousel.js'        ), array('jquery'));
        wp_enqueue_script('nwop-carousel-collage',  get_theme_file_uri('/js/carousel_collage.js'), array('jquery', 'nwop-carousel'));
        wp_enqueue_script('nwop-footer',            get_theme_file_uri('/js/footer.js'          ), array('jquery'));
        wp_enqueue_script('nwop-header-search',     get_theme_file_uri('/js/header_search.js'   ), array('jquery'));
        wp_enqueue_script('nwop-carousel-logo',     get_theme_file_uri('/js/logo_panel.js'      ), array('jquery'));
        wp_enqueue_script('nwop-nav',               get_theme_file_uri('/js/nav.js'             ), array('jquery'));
        wp_enqueue_script('nwop-polyfills',         get_theme_file_uri('/js/polyfills.js'       ), array('jquery'));
        
        wp_enqueue_style('nwop-main', get_theme_file_uri('/main.css'));
    }
);

add_action('customize_register', function(WP_Customize_Manager $wp_customize)
    {
        $wp_customize->selective_refresh->add_partial(
            'blogname',
            array(
                'selector' => '#header-bar-title',
                'render_callback' => function() { bloginfo('name'); }
            )
        );
    }
);
add_theme_support('customize-selective-refresh-widgets');
