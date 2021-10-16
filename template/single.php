{template:header}
		{if $article.Type==0}
        {template:post-single}
        {else}
        {template:post-page}
        {/if}	
{template:footer}