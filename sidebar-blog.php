<div id="right-sidebar-wrapper">
    <div id="right-sidebar">
        <?php if (!dynamic_sidebar('blog')): /* Fallback */?>
            <ul>
                <li>
                    <?php get_search_form();?>
                </li>
                <li class="fallback-loginout">
                    <?php wp_loginout(); ?>
                </li>
            </ul>
        <?php endif;?>
    </div>
</div>
