<?php /* Template Name: Home Page */ ?>
<?php

get_header('home');
get_template_part('nav');
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
        ?>
    </div>
  </div> <!-- End content-wrapper --> 
<?php
get_footer();

?> 
