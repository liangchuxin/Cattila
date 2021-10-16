<?php echo'搬砖不易 | 请勿盗版 | Powered By随然 | QQ: 201825640';die();?>
{template:header}
{$titletag='Search results'}

<header class="blog-header">
	<div class="inner">
		<div class="archive box archive-box">
			<span class="archive-info">
				<span class="archive-type">{$titletag}</span>
				<span class="archive-count">{count($articles)} Posts</span>
			</span>
			<h2 class="archive-title">{$title} 的结果</h2>
		</div>

	</div>
</header>

<div id="index" class="container">
	<main class="content" role="main">
        <div class="extra-pagination">
	        <nav class="pagination" aria-label="Pagination">
	            <div class="inner">
	            	<div class="box pagination-box">
			            <span class="pagination-info">Page 1 of 1</span>
	            	</div>
            	</div>
            </nav>
        </div>

{foreach $articles as $keyd=>$article}
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