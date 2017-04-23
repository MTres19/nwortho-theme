<?php

get_header();
get_template_part('template-parts/nav');
?>
  <div id="header-padding"></div>
  
  <div class="content-wrapper">
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
            
            get_sidebar('global');
        ?>
    </div>
  </div> <!-- End content-wrapper --> 
<?php
get_footer();

?> 
