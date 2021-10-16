<nav class="pagination">
	<div class="inner">
		<div class="box pagination-box" role="navigation" aria-label="Pagination Navigation">
        {if $pagebar.PageNow != $pagebar.PageFirst}
            <a title="Newer Posts" class="pagination-next" href="{$pagebar.prevbutton}"><i class="icon icon-arrow-left"></i> <span class="pagination-label">Newer Posts</span></a>
        {/if}
			<span class="pagination-info">Page {$pagebar.PageNow} of {$pagebar.PageAll}</span>
        {if $pagebar.PageNow != $pagebar.PageLast}
			<a title="Older Posts" class="pagination-prev" href="{$pagebar.nextbutton}"><span class="pagination-label">Older Posts</span> <i class="icon icon-arrow-right"></i></a>
        {/if}
        </div>
	</div>
</nav>