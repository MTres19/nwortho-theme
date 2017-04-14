<?php /* Template Name: Home Page */ ?>
<?php

get_header();
get_template_part('nav');
?>
  <div id="header-padding"></div>
  
  <div class="content-wrapper">
    <?php get_template_part('template-parts/carousel'); ?>
    <div class="text-wrapper-static">
        <?php
            if (have_posts())
            {
                while (have_posts())
                {
                    the_post();
                    get_template_part('template-parts/content-page', get_post_format());
                }
            }
        ?>
    </div>
  </div> <!-- End content-wrapper --> 
<?php
get_footer();

?> 