<?php echo'搬砖不易 | 请勿盗版 | Powered By随然 | QQ: 201825640';die();?>
<article class="post tag-with-cover">
	<div class="inner">
		<div class="box post-box">
			<h2 class="post-title"><a href="welcome/index.html"><a href="{$article.Url}" title="{$article.Title}">{$article.Title}</a></h2>
			<span class="post-meta">
				By
				<a href="{$article->Author->Url}">
				{$article.Author.StaticName}
				</a>
				{if $article.Category}
				in
				<a href="{$article.Category.Url}">{$article.Category.Name}</a>
				{/if}
				on
				<time datetime="{$article.Time('Y-m-d')}">{$article.Time('Y-m-d')}</time>
			</span>
			<p class="post-excerpt">
			{if strlen($article.Intro)>0}
				{php}$intro= trim(SubStrUTF8(TransferHTML($article->Intro,'[nohtml]'),350)).'...';{/php}
				{else}
				{php}$intro= trim(SubStrUTF8(TransferHTML($article->Content,'[nohtml]'),350)).'...';{/php}
			{/if}
			{$intro}</p>
		</div>
	</div>
</article>
