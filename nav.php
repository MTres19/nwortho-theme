  <!-- Navigation
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  
  <?php // Fetch links
    $menu_titles = array('home', 'about', 'services', 'team', 'blog');
    $menu_title_ids = array();
    foreach ($menu_titles as $menu_title)
    {
        $menu_title_ids[$menu_title] = $wpdb->get_var("SELECT ID FROM {$wpdb->posts} WHERE post_name=$menu_title AND post_type='page';");
    }
  ?>
  
  <nav id="left-nav-drawer" class="left-nav-drawer-hidden">
    <ul id="left-nav-links-list">
      <li>
        <a href="<?php echo get_page_link($menu_title_ids['home']); ?>"><span class="icm-go-home"></span>Home</a>
      </li>
      <li>
        <a href="<?php echo get_page_link($menu_title_ids['about']); ?>"><span class="icm-dialog-information"></span>About</a>
      </li>
      <li>
        <a href="<?php echo get_page_link($menu_title_ids['services']); ?>"><span class="icm-draw-cross"></span>Services</a>
      </li>
      <li>
        <a href="<?php echo get_page_link($menu_title_ids['team']); ?>"><span class="icm-user-group-new"></span>Team</a>
      </li>
      <li>
        <a href="<?php echo get_page_link($menu_title_ids['blog']); ?>"><span class="icm-news-subscribe"></span>Blog</a>
      </li>
    </ul>
  </nav>
  
  <div id="nav-drawer-swipe-detector"></div>
  
  <!-- Shadow for navigation menu
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <div id="full-page-shadow"></div> 
