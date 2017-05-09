  <!-- Footer
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <footer id="content-footer">
    <section id="footer-links">
      <section class="footer-link-list">
        <?php 
            $footer_first_menu = _nw_get_menu_by_location('footer-menu-left');
            echo "<h1>{$footer_first_menu->name}</h1>";
            wp_nav_menu(
                array(
                    'menu' => $footer_first_menu,
                    'menu_class' => '',
                    'menu_id' => '',
                    'container' => false,
                    'container_class' => false,
                    'fallback_cb' => false
                )
            );
        ?>
      </section>
      <section class="footer-link-list">
        <?php 
            $footer_second_menu = _nw_get_menu_by_location('footer-menu-middle');
            echo "<h1>{$footer_second_menu->name}</h1>";
            wp_nav_menu(
                array(
                    'menu' => $footer_second_menu,
                    'menu_class' => '',
                    'menu_id' => '',
                    'container' => false,
                    'container_class' => false,
                    'fallback_cb' => false
                )
            );
        ?>
      </section>
      <section class="footer-link-list">
        <?php 
            $footer_third_menu = _nw_get_menu_by_location('footer-menu-right');
            echo "<h1>{$footer_third_menu->name}</h1>";
            wp_nav_menu(
                array(
                    'menu' => $footer_third_menu,
                    'menu_class' => '',
                    'menu_id' => '',
                    'container' => false,
                    'container_class' => false,
                    'fallback_cb' => false
                )
            );
        ?>
      </section>
    </section>
    <div id="footer-logo-container">
      <span id="footer-logo-icon" class="icm-nworthotics-logo"></span>
      <span id="footer-logo-nw">NORTHWEST</span>
      <span id="footer-logo-nw-subtitle">Orthotics—Prosthetics</span>
    </div>
    <div id="footer-credits">
        Powered by WordPress. <a href="https://github.com/MTres19/nwortho-theme">Theme credits</a>
    </div>
  </footer>
  
  <?php wp_footer();?>
  
<!-- End Document
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
</body>
</html> 
