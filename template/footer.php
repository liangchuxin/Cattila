<div class="nav-footer">
			<nav class="nav-wrapper" aria-label="Footer">
				<span class="nav-copy"><span class="nav-icp">{$zbp->Config('cattila')->footer_icp}  </span><span>{$zbp->Config('cattila')->footer_copy}</span>  <a class="nav-rss" title="RSS" href="{$feedurl}" target="_blank"><i class="icon icon-rss" aria-hidden="true"></i></a></span>
				<span class="nav-credits">Published with <a href="https://www.zblogcn.com/">Z-BlogPHP</a> &bull; Theme <a href="https://github.com/zutrinken/attila">Cattila</a> {if $zbp->Config('cattila')->darkmode_switch}&bull; <a class="menu-item js-theme" href="#" data-system="System theme" data-dark="Dark theme" data-light="Light theme"><span class="theme-icon"></span><span class="theme-text">System theme</span> </a>{/if} </span>
			</nav>
		</div>

	</section>

	<script type="text/javascript" src="{$host}zb_users/theme/{$theme}/script/script.js"></script>
{if $type!='index'}
<script src="{$host}zb_users/theme/{$theme}/plugin/reading-progress.js"></script>
{/if}
{if $zbp->Config('cattila')->lightbox_switch}
<script src="https://cdn.jsdelivr.net/npm/medium-zoom@1.0.6/dist/medium-zoom.min.js"></script>
<script src="{$host}zb_users/theme/{$theme}/plugin/main.js"></script>
{/if}
<script src="https://cdnjs.cloudflare.com/ajax/libs/reading-time/2.0.0/readingTime.js"></script>
<script>
$(function() {
	$('article').readingTime({
		readingTimeAsNumber: true,
		readingTimeTarget: $('.reading-time'),
		success: function(data) {
			console.log(data);
		},
		error: function(data) {
			console.log(data.error);
			$('.reading-time').remove();
		}
	});
});
$('article').each(function() {

let _this = $(this);

_this.readingTime({
	readingTimeTarget: _this.find('.reading-time')
});
});
</script>
</body>
</html>
