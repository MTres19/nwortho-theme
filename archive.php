<?php

get_header();
get_template_part('template-parts/nav');
?>
  <div id="header-padding"></div>
  
  <div class="content-wrapper">
    <div class="text-wrapper-blog">
        <h1 id="archive-page-title"><?php the_archive_title(); ?></h1>
        <div class="archive-page-subtitle-wrapper">
            <?php
                if (is_author())
                {
                    echo get_avatar(
                        get_user_by('slug', get_query_var('author_name')), // Thanks https://wordpress.stackexchange.com/a/35251
                        100,
                        'mystery',
                        '',
                        [ 'class' => 'author-page-user-avatar' ]
                    );
                    the_archive_description('<p id="archive-page-author-bio">', '</p>');
                }
                
                else
                {
                    the_archive_description('<h2 id="archive-page-subtitle">', '</h2');
                }
            ?>
        </div>
        
        <?php
            if (have_posts())
            {
                while (have_posts())
                {
                    the_post();
                    get_template_part('template-parts/content-post-summary', get_post_format());
                }
            }
            
            get_sidebar('blog');
            get_sidebar('global');
        ?>
      </div>
    </div> <!-- End content-wrapper --> 
<?php
get_footer();

?> 
