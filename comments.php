<!-- Comments template based on Twenty Thirteen and Twenty Seventeen -->

<?php if (post_password_required()) return; ?>

<div class="comments-container">

<?php if (have_comments()) : ?>
    <h2 class="comments-title">
        <?php
            switch (get_comments_number())
            {
                case 1:
                    echo 'One comment';
                    break;
                case 0:
                    echo 'No comments';
                    break;
                default:
                    echo get_comments_number() . ' comments';
            }
            echo ' on “' . get_the_title() . '”';
        ?>
    </h2>
    
    <ol class="comment-list">
        <?php
            wp_list_comments(array(
                'style' => 'ol',
                'short_ping' => true,
                'avatar_size' => 75,
                'reply_text' => '<span class="icm-edit-undo"></span>Reply'
            ));
        ?>
    </ol>
<?php endif; // have_comments() ?>

<?php
    if (!comments_open())
    {
        echo '<p class="comments-closed">Comments are closed.</p>';
    }
?>

<?php comment_form();?>

</div>
