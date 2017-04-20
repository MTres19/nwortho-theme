<blockquote class="blog-summary-container">
    <p class="blog-summary-post-date"><?php the_date(); ?></p>
    <h3><a href="<?php the_permalink();?>"><?php the_title(); ?></a></h3>
    <h4>by <?php the_author(); ?></h4>
    <div class="blog-summary-excerpt">
        <?php
            the_post_thumbnail('thumbnail');
            the_excerpt();
        ?>
        
        <a class="read-more-link" href="<?php the_permalink();?>">Read more…</a>
    </div>
</blockquote>
