<?php

get_header();
get_template_part('template-parts/nav');
?>
  <div id="header-padding"></div>
  
  <div class="content-wrapper">
    <div class="text-wrapper-static text-wrapper-attachment-page">
        <h1 class="blog-post-title"><?php the_title();?></h1>
        <?php
            $image_size = apply_filters( 'wporg_attachment_size', 'large' ); 
            echo wp_get_attachment_image( get_the_ID(), $image_size ); ?>
            
            <?php if ( has_excerpt() ) : ?>
                <div class="entry-caption">
                    <?php the_excerpt(); ?>
                </div>
            <?php endif; ?>
            
            <?php get_sidebar('global');?>
    </div>
  </div> <!-- End content-wrapper --> 
<?php
get_footer();

?> 
