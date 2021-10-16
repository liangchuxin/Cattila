{template:header}
{if $type=='index' && $page=='1' || $zbp->Config('cattila')->global_cover_switch}
{if $zbp->Config('cattila')->cover_switch}
<header class="blog-header has-cover">{else}
<header class="blog-header">
{/if}
	<div class="inner">
		<div class="box blog-box">
			<h1 class="blog-name">
			{if $zbp->Config('cattila')->center_text}
			{$zbp->Config('cattila')->center_text}{else}
			{$name}
			{/if}</h1>
			<span class="blog-description">
				{if $zbp->Config('cattila')->below_text}
				{$zbp->Config('cattila')->below_text}{else}
				{$subname}
				{/if}</span>
		</div>
		{if $zbp->Config('cattila')->cover_switch}
		<div class="blog-cover cover" style="transform: translate3d(0px, 0px, 0px);">
		{if $zbp->Config('cattila')->cover_url}
			{$cover = $zbp->Config('cattila')->cover_url}
		{else}
			{$cover = "https://static.ghost.org/v4.0.0/images/publication-cover.jpg"}
		{/if}
			<img src="{$cover}"/>
		</div>
		{/if}
	</div>
</header>
{/if}
<div id="index" class="container">
{if $type=='index' && $page!='1' && $zbp->Config('cattila')->global_cover_switch==0}
	<main class="content no-cover" role="main">
{else}
	<main class="content" role="main">
{/if}
        {foreach $articles as $n=>$article}{php}$k = $n+1;{/php}
        {if $article.IsTop}
          {template:post-istop}
        {else}
          {template:post-multi}
        {/if}
        {/foreach}
{template:pagebar}
	</main>
</div>
{template:searchbox}
{template:footer}
