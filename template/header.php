<!DOCTYPE html>
<html lang="en">
<head>

	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>Cattila</title>
	<meta name="HandheldFriendly" content="True">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="{$zbp->Config('cattila')->favicon_url}"/>
	<link rel="stylesheet" href="{$host}zb_users/theme/{$theme}/style/style.css" media="screen">

	<script>
			var localTheme = localStorage.getItem('cattila_theme');
			switch (localTheme) {
					case 'dark':
							document.documentElement.classList.add('theme-dark');
							break;
					case 'light':
							document.documentElement.classList.add('theme-light');
							break;
					default:
							break;
			}
	</script>

	<meta name="description" content="Thoughts, stories and ideas.">
    <link rel="canonical" href="index.html">
    <meta name="referrer" content="no-referrer-when-downgrade">
        <link rel="alternate" type="application/rss+xml" title="Attila" href="rss/index.xml">
    <script>
  var gh_search_key = '944aae7675d414b663eb3e063d';
  var gh_search_migration = 'v2';
</script>
</head>

<body class="home-template">

	<div class="nav-header">
		<nav class="nav-wrapper" aria-label="Main">
				<ul>
        {if $type=='index'&&$page=='1'}
	      	<li class="nav-home active"><a href="{$host}"><span>Home</span></a></li>
          {else}
          <li class="nav-home"><a href="{$host}"><span>Home</span></a></li>
       {/if}
       {if $type=='tag'}
	    	<li class="nav-tag active"><a href="{$host}tags/English/"><span>Tag</span></a></li>
        {else}
	    	<li class="nav-tag"><a href="{$host}tags/English/"><span>Tag</span></a></li>
        {/if}
        {if $type=='author'}
		      <li class="nav-author active"><a href="{$host}author/Celia/"><span>Author</span></a></li>
        {else}
          <li class="nav-author"><a href="{$host}author/Celia/"><span>Author</span></a></li>
        {/if}
    <li><a href="#">下载主题</a></li>
</ul>

<ul class="nav-meta">
  <li class="nav-twitter">
    <a aria-label="Twitter" href="https://twitter.com/ghost" title="@ghost" target="_blank">
      <i class="icon icon-twitter" aria-hidden="true"></i>
      <span>@ghost</span>
    </a>
  </li>
  <li class="nav-facebook">
    <a aria-label="Facebook" href="https://www.facebook.com/ghost" title="ghost" target="_blank">
      <i class="icon icon-facebook" aria-hidden="true"></i>
      <span>ghost</span>
    </a>
  </li>
  <li class="nav-search" style="display: none;">
    <a title="Search">
      <i class="icon icon-search" aria-hidden="true"></i>
      <span>Search</span>
    </a>
  </li>
  {if $zbp->Config('cattila')->login_switch}<li>
    <a href="{$zbp->Config('cattila')->login_url}" class="button{if $zbp->Config('cattila')->login_solid} cta{/if}">
      Sign in
    </a>
  </li>{/if}
  {if $zbp->Config('cattila')->signup_switch}<li>
    <a href="{$zbp->Config('cattila')->signup_url}" class="button{if $zbp->Config('cattila')->signup_solid} cta{/if}">
      Sign up
    </a>
  </li>{/if}
</ul>
		</nav>

		<div class="nav-wrapper-control">
			<div class="inner">
				<a class="nav-menu" role="button"><i class="icon icon-menu" aria-hidden="true"></i>Menu</a>
				<a class="nav-search" style="display: none;" title="Search" role="button"><i class="icon icon-search" aria-hidden="true"></i></a>
			</div>
		</div>
	</div>
	<div class="nav-close" role="button" aria-label="Close"></div>

	<section class="page-wrapper">