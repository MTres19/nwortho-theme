<!DOCTYPE html>
<html lang="en">
<head>

  <!-- Basic Page Needs
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta charset="utf-8">
  <meta name="description" content="<?php bloginfo('description');?>">
  <meta name="author" content="">

  <!-- Mobile Specific Metas
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- FONT
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link href="https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i|Noto+Serif:400,400i,700,700i" rel="stylesheet">

  <?php wp_head();?> 
</head>
<body id="main-body">
  <!-- Fixed header
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <header class="fixed-header-bar">
    <div id="header-bar-items-container">
      <span id="header-bar-menu-button" class="icm-application-menu header-bar-item"></span>
      <div id="header-bar-title" class="header-bar-item">
        <a href="<?php bloginfo('wpurl');?>"><?php bloginfo('name');?></a>
      </div>
      <span id="header-bar-logo" class="icm-nworthotics-logo header-bar-item"></span>
      <span id="header-bar-search-button" class="icm-search"></span>
    </div>
    <div id="header-bar-search-container">
        <?php get_search_form();?>
    </div>
  </header>
