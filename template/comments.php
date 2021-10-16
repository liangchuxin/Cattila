<?php echo'搬砖不易 | 请勿盗版 | Powered By随然 | QQ: 201825640';die();?>
{if $socialcomment}
{$socialcomment}
{else}
<div id="comment" class="post-comment clearfix sb br mt">
    <p id="comments-title" class="c-title mb bn"><span>发表评论</span>
    <span class="comment-num">
    {if $article.CommNums==0}
    （已有<span class="emphasize">0</span>条评论）
    {else}
    （已有<span class="emphasize">{$article.CommNums}</span>条评论）
    {/if}
    </span></p>
	{if !$article.IsLock}{template:commentpost}{/if}
	<div class="comment-list mt">
	    {if $article.CommNums==0}<p class="no-comment"><i class="iconfont icon-sofa"></i> 还木有评论哦，快来抢沙发吧~</p>{/if}
		{if $article.CommNums>0}<p class="title">评论列表</p>{/if}
		<span id="AjaxCommentBegin"></span>
		{foreach $comments as $key => $comment}
			{template:comment}
		{/foreach}
		{template:comment-pagebar}
		<span id="AjaxCommentEnd"></span>
	</div>
</div>
{/if}