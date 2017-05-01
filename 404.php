<?php
get_header();
get_template_part('template-parts/nav');
?>
  <div id="header-padding"></div>
  <div class="content-wrapper">
    <div class="text-wrapper-static text-wrapper-dynamic">
      <h1>Page not found</h1>
      <p>
        WordPress (the software which runs this website) could not find the page or post you requested. You may have mistyped the website's address in your browser, or you may have clicked on a link which no longer points to the correct page. If you would like, you may use the search form below to search for the page you were looking for, or you may click <a href="<?php echo home_url();?>">here</a> to return to the homepage.
      </p>
      <div id="dynamic-page-search-container">
        <?php get_search_form();?>
      </div>
    </div>
  </div>
<?php get_footer();?>
