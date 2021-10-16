<?php echo'搬砖不易 | 请勿盗版 | Powered By随然 | QQ: 201825640';die();?>
<div class="pagebar mb mt">
{if $zbp->Config('suiranx_air')->page_mode <='1'}
<div class="nav-links">
{else}
<div class="nav-links">
{/if}
{if $pagebar}
{foreach $pagebar.buttons as $k=>$v}
{if $pagebar.PageAll>1}
{if $pagebar.PageNow==$k}
<span class='br sb page-numbers current'>{$k}</span>
{elseif $k=='‹'}
<span class="prev"><a class="sb br page-numbers" href="{$v}" title="上一页">上一页</a></span>
{elseif $k=='›'}
<span class="next"><a class="sb br page-numbers" href="{$v}" title="下一页">下一页</a></span>
{elseif $k=='‹‹'}
{if $pagebar.PageNow!=1}
<a class="br sb page-numbers" href="{$v}" title="第1页">首页</a>
{/if}
{elseif $k=='››'}
{if $pagebar.PageNow!=$pagebar.PageLast}
<a class="br sb page-numbers" href="{$v}" title="最后一页">尾页</a>
{/if}
{else}
<a class="br sb page-numbers" href="{$v}" title="第{$k}页">{$k}</a>
{/if}
{/foreach}
{/if}
{/if}
</div>
</div>
