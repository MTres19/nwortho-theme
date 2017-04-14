  <!-- Navigation
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <nav id="left-nav-drawer" class="left-nav-drawer-hidden">
    <?php
        wp_nav_menu(
            array(
                'theme_location' => 'left-nav-menu',
                'menu_class' => '',
                'menu_id' => 'left-nav-links-list',
                'container' => false,
                'fallback_cb' => 'fallback_left_menu'
            )
        );
    ?>
  </nav>
  
  <div id="nav-drawer-swipe-detector"></div>
  
  <!-- Shadow for navigation menu
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <div id="full-page-shadow"></div> 
