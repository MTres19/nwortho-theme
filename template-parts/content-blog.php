  <article class="blog-article">
    <h1 class="blog-post-title"><?php the_title(); ?></h1>
    <p class="blog-post-info">Written by <?php the_author_posts_link(); ?> on <?php the_date(); ?></p>
    <?php the_content(); ?>
    
    <div class="blog-post-taxonomy">
        <div class="categories"><span class="icm-document-open-folder"></span><?php the_category(', ');?></div>
        <div class="tags"><span class="icm-tag"></span><?php the_tags('');?></div>
    </div>
  </article>
