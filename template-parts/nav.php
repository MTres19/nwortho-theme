  <!-- Navigation
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <nav id="left-nav-drawer" class="left-nav-drawer-hidden">
    <?php
        $left_nav_drawer_menu = _nw_get_menu_by_location('left-nav-menu');
        wp_nav_menu(
            array(
                'menu' => $left_nav_drawer_menu,
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
