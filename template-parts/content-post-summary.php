<blockquote class="blog-summary-container<?php if (is_sticky()): echo ' sticky-summary'; endif;?>">
    
    <?php if (is_sticky()): ?><span class="icm-thumbtack"></span><?php endif;?>
    
    <?php if (get_post_type() != 'page') :?>
        <p class="blog-summary-post-date"><?php the_date(); ?></p>
    <?php endif;?>
    
    <h3><a href="<?php the_permalink();?>"><?php the_title(); ?></a></h3>
    
    <?php if (get_post_type() != 'page') :?>
        <h4>by <?php the_author_posts_link(); ?></h4>
    <?php endif;?>
    
    <div class="blog-summary-excerpt">
        <?php
            the_post_thumbnail(array(100, 100));
            the_excerpt();
        ?>
        
        <a class="read-more-link" href="<?php the_permalink();?>">Read more…</a>
    </div>
</blockquote>
