<div id="right-sidebar-wrapper">
    <ul id="right-sidebar">
        <?php if (!dynamic_sidebar('blog')): /* Fallback */?>
            <li class="widget">
                <?php get_search_form();?>
            </li>
            <li class="widget fallback-loginout">
                <?php wp_loginout(); ?>
            </li>
        <?php endif;?>
    </ul>
</div>
