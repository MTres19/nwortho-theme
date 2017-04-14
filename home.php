<?php
// Displays the blog page

get_header();
get_template_part('nav');
?>
  <div id="header-padding"></div>
  
  <div class="content-wrapper">
    <div class="text-wrapper-blog">
        <?php
            /* is_home() checks whether we're displaying the "Blog" page.
             * is_home() also returns true when displaying blog posts on the front page.
             * is_front_page() checks whether we're displaying the front page
             * to ensure that we don't try to display a page if the front page is a list
             * of recent posts.
             */
            if (have_posts() && is_home() && !is_front_page()) // Separate blog page
            {
                // Thank you https://robincornett.com/posts-page/
                $posts_page = get_post(get_option('page_for_posts'));
                echo '<div id="blog-page-info-wrapper">';
                echo "<h1>{$posts_page->post_title}</h1>";
                echo "<p>{$posts_page->post_content}</p>";
                echo '</div>';
                
                
                ?><h3 id="recent-blog-posts-header">Recent Blog Posts</h3><?php
                
                // List of blog summaries
                $post_list_query = new WP_Query(array('post_type' => 'post'));
                while ($post_list_query->have_posts())
                {
                    $post_list_query->the_post();
                    get_template_part('template-parts/content-post-summary', get_post_format());
                }
                wp_reset_postdata();
            }
            elseif (have_posts() && is_home() && is_front_page()) // List of posts on homepage
            {
                while (have_posts())
                {
                    the_post();
                    get_template_part('template-parts/content-post-summary', get_post_format());
                }
            }
            
            get_template_part('template-parts/floating_sidebar');
        ?>
    </div>
  </div> <!-- End content-wrapper --> 
<?php
get_footer();

?> 
