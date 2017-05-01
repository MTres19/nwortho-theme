<?php /* Template Name: Home Page */ ?>
<?php

wp_enqueue_script('nwop-homepage', get_theme_file_uri('/js/homepage.js'));


get_header();
get_template_part('template-parts/nav');
?>
  <div id="header-padding"></div>
  
  <div class="content-wrapper">
    <?php get_template_part('template-parts/carousel'); ?>
    <div class="text-wrapper-static text-wrapper-static-home">
        <?php
            if (have_posts())
            {
                while (have_posts())
                {
                    the_post();
                    the_content();
                }
            }
            
            get_sidebar('global');
        ?>
    </div>
  </div> <!-- End content-wrapper --> 
<?php
get_footer();

?> 
