<?php echo'搬砖不易 | 请勿盗版 | Powered By随然 | QQ: 201825640';die();?>
<div class="ul">
<div class="li transition">
	{if $zbp->CheckPlugin('Gravatar') || $zbp->CheckPlugin('ggravatar')}<img class="fl" src="{$comment.Author.Avatar}">{else}{php}$randimg=rand(1,16);$randimg=$zbp->host."zb_users/theme/$theme/image/avatar/$randimg.png";{/php}<img class="fl" src="{if $comment.Author.Level<4}{$comment.Author.Avatar}{else}{$randimg}{/if}">{/if}
	<div class="clbody">
		<div class="cinfo clearfix">
			<a class="author" rel="nofollow" href="{$comment.Author.HomePage}" target="_blank">{$comment.Author.StaticName}</a>
			<span class="reply-a fr transition">
			<a rel="nofollow" href="#comments-title" onclick="zbp.comment.reply('{$comment.ID}')">@回复</a></span>
		</div>
		<span class="c-time">{$comment.Time()}</span>
		<p class="p">{if $comment.ParentID!=0} {php} $newc=$zbp->GetCommentByID($comment->ParentID); $atid=$newc->ID; $atname=$newc->Author->StaticName; {/php}
		<a href="#comment-{$atid}" class="comment-at" rel="nofollow">@{$atname}</a> {/if}{$comment.Content}</p>
	</div>
	<div class="clear"></div>
</div>{foreach $comment.Comments as $comment} {template:comment} {/foreach}
</div>
