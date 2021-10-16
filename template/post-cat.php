{template:header}
{if $type=='tag'}
    {$titletag='Tag'}
{/if}
{if $type=='category'}
    {$titletag='Category'}
{/if}
{if $type=='author'}
    {$titletag='Author'}
{/if}

<header class="blog-header">
	<div class="inner">
       {if $type=='author'}
            <div class="archive archive-author box archive-box">
        {else}
            <div class="archive box archive-box">
        {/if}
			<span class="archive-info">
				<span class="archive-type">{$titletag}</span>
				<span class="archive-count">{count($articles)} Posts</span>
			</span>
            {if $type=='author'}
                <figure class="archive-avatar avatar">
                    {php}$firstarticle = reset($articles);{/php}
                        <img src="{$firstarticle->Author->Avatar}" alt="{$firstarticle->Author->StaticName}">
                </figure>
            {/if}
			<h2 class="archive-title">{$title}</h2>
            {if $type=='author'}
            <span class="archive-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
            <span class="archive-links">
					<a target="_blank" href="https://ghost.org" title="Website"><i class="icon icon-globe"></i><span>Website</span></a>
					<a target="_blank" href="https://twitter.com/ghost" title="Twitter"><i class="icon icon-twitter"></i><span>Twitter</span></a>
					<a target="_blank" href="https://www.facebook.com/ghost" title="Facebook"><i class="icon icon-facebook"></i><span>Facebook</span></a>
			</span>
            {/if}
		</div>

	</div>
</header>


<div id="index" class="container">
	<main class="content" role="main">
	{if $page!='1'}
	<div class="extra-pagination" style="display: block;">
	{template:pagebar}
</div>
	{/if}

{foreach $articles as $keyd=>$article}
    {if $article.IsTop}
        {template:post-istop}
    {else}
        {template:post-multi}
    {/if}        
{/foreach}

<nav class="pagination" aria-label="Pagination">
	<div class="inner">
		<div class="box pagination-box">
			<span class="pagination-info">Page 1 of 1</span>
		</div>
	</div>
</nav>

	</main>

</div>

{template:searchbox}
{template:footer}