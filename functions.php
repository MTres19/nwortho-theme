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
            'container' => false,
        )
    );
}

add_theme_support('post-thumbnails', array('post'));
add_theme_support('html5');


// From https://peterwilson.cc/including-wordpress-comment-reply-js/
add_action('wp_print_scripts', function()
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
