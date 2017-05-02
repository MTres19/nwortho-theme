<?php
get_header();
get_template_part('template-parts/nav');
?>
  <div id="header-padding"></div>
  <div class="content-wrapper">
    <div class="text-wrapper-static text-wrapper-dynamic">
      <h1>Search Results</h1>
      <div id="dynamic-page-search-container">
        <?php get_search_form();?>
      </div>
      <?php
            if (have_posts())
            {
                while (have_posts())
                {
                    the_post();
                    get_template_part('template-parts/content-post-summary');
                }
            }
            else
            {
                echo '<p class="search-page-no-results">No results found.</p>';
            }
      ?>
    </div>
  </div>

<?php get_footer();?>
