      <!-- Sidebar -->
      <div id="right-sidebar-wrapper">
        <nav id="right-sidebar">
          <h1>Blog</h1>
          <ul>
            <li>
              <span class="icm-document-open-folder"></span>
              <a href="#">Categories</a>
            </li>
            <li>
              <span class="icm-document-preview-archive"></span>
              <a href="#">Archives</a>
            </li>
            <li>
              <span class="icm-feed-subscribe"></span>
              <a href="<?php echo esc_url( get_bloginfo( 'rss2_url' ) ); ?>">Posts RSS</a>
            </li>
            <li>
              <span class="icm-feed-subscribe"></span>
              <a href="<?php echo esc_url( get_bloginfo( 'comments_rss2_url' ) ); ?>">Comments RSS</a>
            </li>
            <li>
              <span class="icm-system-switch-user"></span>
              <?php wp_loginout(); ?>
            </li>
          </ul>
        </nav>
      </div> 
