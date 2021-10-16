<div class="progress-container">
	<span class="progress-bar"></span>
</div>
<header class="post-header">
	<div class="inner">
		<span class="post-info">
			<span class="post-type">Article</span>
			<span class="post-count">{$article.Category.Name}</span>
		</span>
		<h1 class="post-title">{$article.Title}</h1>
		<div class="post-meta">
			<div class="post-meta-avatars">
					<figure class="post-meta-avatar avatar">
						<a href="{$article->Author->Url}" class="author-avatar">
								<img class="author-profile-image" src="{$article.Author.Avatar}" alt="{$article.Author.StaticName}">
						</a>
					</figure>
			</div>
			<h4 class="post-meta-author"><a href="{$article->Author->Url}">{$article.Author.StaticName}</a></h4>
			<time datetime="{$article.Time('Y-m-d')}">{$article.Time('Y年m月d日 H:i')}</time> • 1 min read
		</div>
	</div>
</header>
<main class="content" role="main">
	<article class="post tag-getting-started tag-themes tag-no-cover no-image">
		<div class="inner">

			<section class="post-content">
                {$article->Content}
			</section>

			<section class="post-footer">

				<div class="post-share">
					<span class="post-info-label">Share</span>
					<a title="Twitter" aria-label="Twitter" class="twitter" href="https://twitter.com/share?text=Creating a custom theme&amp;url=https://attila.peteramende.de/themes/" onclick="window.open(this.href, 'twitter-share', 'width=550,height=235');return false;">
						<i class="icon icon-twitter" aria-hidden="true"></i>
					</a>
					<a title="Facebook" aria-label="Facebook" class="facebook" href="https://www.facebook.com/sharer/sharer.php?u=https://attila.peteramende.de/themes/" onclick="window.open(this.href, 'facebook-share','width=580,height=296');return false;">
						<i class="icon icon-facebook" aria-hidden="true"></i>
					</a>
					<a title="LinkedIn" aria-label="LinkedIn" class="linkedin" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://attila.peteramende.de/themes//&amp;title=Creating a custom theme" onclick="window.open(this.href, 'linkedin-share', 'width=930,height=720');return false;">
						<i class="icon icon-linkedin" aria-hidden="true"></i>
					</a>
					<a title="Email" aria-label="Email" class="email" href="mailto:?subject=Creating a custom theme&amp;body=https://attila.peteramende.de/themes/">
						<i class="icon icon-mail" aria-hidden="true"></i>
					</a>
				</div>

				<aside class="post-tags">
                    {if $article.Tags}
					    <span class="post-info-label">Tags</span>
                        {foreach $article.Tags as $tag}
                        <a href="{$tag.Url}" title="{$tag.Name}">{$tag.Name}</a>
                        {/foreach}
                    {/if}
				</aside>

			</section>


			<section class="post-comments" style="display: none;">
				<a id="show-disqus" class="post-comments-activate">Show Comments</a>
			   <div id="disqus_thread"></div>
			</section>


		</div>
	</article>
</main>
{template:searchbox}