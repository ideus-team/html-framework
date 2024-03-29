<?php
if ( empty( $_SERVER['HTTPS'] ) || $_SERVER['HTTPS'] === 'off' ) {
	$protocol = 'http://';
} else {
	$protocol = 'https://';
}
$siteDir = str_replace( '\\', '/', dirname( $_SERVER['PHP_SELF'] ) );
$siteDir = ( '/' === $siteDir ) ? $siteDir : $siteDir . '/';
$baseURL = $protocol . $_SERVER['SERVER_NAME'] . $siteDir;

$canonical = $protocol . $_SERVER['SERVER_NAME'] . '/' . preg_replace( array( '/^\//', '/.php/' ), '', $_SERVER['REQUEST_URI'] );
$uri       = $uri ? $uri : preg_replace( array( '/^\/\w+\//', '/^\//', '/.php/' ), '', $_SERVER['REQUEST_URI'] );

$siteName = '%siteName%';

$isHomepage = ( basename( $_SERVER['PHP_SELF'] ) == 'index.php' );
$title = $isHomepage ? $siteName : $pageName . ' : ' . $siteName;
?>
<!doctype html>
<html class="l-html" lang="">
<head>
	<!-- Global site tag (gtag.js) - Google Analytics: change UA-XXXXX-Y to be your site's ID. -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXX-Y"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'UA-XXXXX-Y');
	</script>

	<meta charset="utf-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">

	<base href="<?php echo $siteDir; ?>">

	<title><?php echo $title; ?></title>
	<meta name="description" content="<?php echo $meta['description']; ?>">
	<meta name="keywords" content="<?php echo $meta['keywords']; ?>">
	<link rel="canonical" href="<?php echo $canonical; ?>">

	<!-- <meta property="og:image" content="<?php echo $baseURL; ?>assets/img/userfiles/og-image.png"> -->

	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<link rel="shortcut icon" href="favicon.ico">
	<link rel="manifest" href="site.webmanifest">
	<link rel="apple-touch-icon" href="icon.png">

	<!--<meta name="theme-color" content="#ed1c24">-->

	<link rel="stylesheet" href="assets/css/main.min.css?<?php echo filemtime( $_SERVER['DOCUMENT_ROOT'] . $siteDir . 'assets/css/main.min.css' ); ?>">
</head>
<body class="l-body -page_<?php echo $uri; ?><?php echo ( ! $isHomepage ) ? ' -page_inner' : ''; ?>">
	<div class="l-wrapper" id="top">
		<header class="l-siteHeader">
			<div class="b-siteHeader">
				<div class="l-siteLogo">
					<?php
					$logo_tag  = $isHomepage ? 'h1' : 'div';
					$logo_link = $isHomepage ? $baseURL . '#top' : $baseURL;
					?>
					<<?php echo $logo_tag; ?> class="b-siteLogo" itemscope itemtype="http://schema.org/Organization">
						<a class="b-siteLogo__link" href="<?php echo $logo_link; ?>" itemprop="url">
							<img class="b-siteLogo__icon" src="assets/img/logos/siteLogo-logo.png" alt="<?php echo $siteName; ?>" title="<?php echo $siteName; ?>" itemprop="logo">
						</a>
					</<?php echo $logo_tag; ?>>
				</div>

				<div class="l-siteSearch">
					<form class="b-siteSearch" role="search" method="post" action="#">
						<label class="b-siteSearch__search">
							<span class="b-siteSearch__label g-visuallyhidden">Search:</span>
							<input class="b-siteSearch__input" type="search" name="s" spellcheck="true">
						</label>

						<input class="b-siteSearch__button" type="submit" value="Search">
					</form>
				</div>

				<nav class="l-mainNavigation">
					<ul class="b-mainNavigation">
						<li class="b-mainNavigation__item<?php echo ( $uri == 'home' ) ? ' -state_active' : ''; ?>">
							<a class="b-mainNavigation__link" href="<?php echo $siteDir; ?>">Home</a>
						</li>
						<li class="b-mainNavigation__item<?php echo ( $uri == 'page' ) ? ' -state_active' : ''; ?>">
							<a class="b-mainNavigation__link" href="page">Page</a>
						</li>
						<li class="b-mainNavigation__item<?php echo ( $uri == 'subpage' ) ? ' -state_active' : ''; ?>">
							<a class="b-mainNavigation__link" href="page/subpage">Subpage</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>

		<div class="l-content">
