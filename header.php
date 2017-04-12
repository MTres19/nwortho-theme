<!DOCTYPE html>
<html lang="en">
<head>

  <!-- Basic Page Needs
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta charset="utf-8">
  <title><?php echo get_bloginfo('name');?></title>
  <meta name="description" content="<?php echo get_bloginfo('description');?>">
  <meta name="author" content="">

  <!-- Mobile Specific Metas
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- FONT
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link href="https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i|Noto+Serif:400,400i,700,700i" rel="stylesheet">
  
  <!-- CSS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="stylesheet" href="<?php bloginfo('template_directory');?>/main.css">
  
  <!-- jQuery
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.0/jquery.js"></script>
  <script src="<?php bloginfo('template_directory');?>/touchswipe.js"></script>
  
  <!-- JS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <script src="<?php bloginfo('template_directory');?>/js/nav.js"></script>
  <script src="<?php bloginfo('template_directory');?>/js/carousel.js"></script>
  <script src="<?php bloginfo('template_directory');?>/js/footer.js"></script>
  
  <script src="<?php bloginfo('template_directory');?>/js/logo_panel.js"></script>
  
  <!-- Favicon
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="icon" type="image/png" href="<?php bloginfo('template_directory');?>/Skeleton-Sass/images/favicon.png">
  
  <?php wp_head();?>

</head>
<body id="main-body">
  <!-- Fixed header
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <header class="fixed-header-bar">
    <div id="header-bar-items-container">
      <span id="header-bar-menu-button" class="icm-application-menu header-bar-item"></span>
      <div id="header-bar-title" class="header-bar-item">
        <a href="<?php bloginfo('wpurl');?>"><?php echo get_bloginfo('name');?></a>
      </div>
      <span id="header-bar-logo" class="icm-nworthotics-logo header-bar-item"></span>
    </div>
  </header> 