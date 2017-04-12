<?php

get_header();
get_template_part('nav');
?>
  <div id="header-padding"></div>
  
  <div class="content-wrapper">
    <?php
        if (have_posts())
        {
            while (have_posts())
            {
                the_post();
                get_template_part('content', get_post_format());
            }
        }
    ?>
    </div> <!-- End content-wrapper --> 
<?php
get_footer();

?>
