<?php
if ( empty( $_SERVER['HTTPS'] ) || $_SERVER['HTTPS'] === 'off' ) {
	$protocol = 'http://';
} else {
	$protocol = 'https://';
}
$siteDir = str_replace( '\\', '/', dirname( $_SERVER['PHP_SELF'] ) );
$siteDir = ( '/' === $siteDir ) ? $siteDir : $siteDir . '/';
$baseURL = $protocol . $_SERVER['SERVER_NAME'] . $siteDir;

if ( ! isset( $canonical ) || ! $canonical ) {
	$canonical = $protocol . $_SERVER['SERVER_NAME'] . '/' . preg_replace( array( '/^\//', '/.php/' ), '', $_SERVER['REQUEST_URI'] );
}

if ( ! isset( $uri ) || ! $uri ) {
	$uri = preg_replace( array( '/^\/\w+\//', '/^\//', '/.php/' ), '', $_SERVER['REQUEST_URI'] );
}

$siteName = '%siteName%';

$isHomepage = ( basename( $_SERVER['PHP_SELF'] ) == 'index.php' );

if ( $isHomepage ) {
	$title = $siteName;
} else {
	$title = $pageName . ' : ' . $siteName;
}

if ( ! isset( $inline_css ) || ! $inline_css ) {
	$inline_css = false;
} else {
	$inline_css_path = $_SERVER['DOCUMENT_ROOT'] . $siteDir . 'assets/css/' . $inline_css . '.min.css';
}

$file_js_path    = $_SERVER['DOCUMENT_ROOT'] . $siteDir . 'assets/js/'  . $file_js    . '.js';
$file_css_path   = $_SERVER['DOCUMENT_ROOT'] . $siteDir . 'assets/css/' . $file_css   . '.min.css';

$file_js_url  = 'assets/js/'  . $file_js  . '.js?'      . @filemtime( $file_js_path );
$file_css_url = 'assets/css/' . $file_css . '.min.css?' . @filemtime( $file_css_path );
?>
<!doctype html>
<html class="l-html" lang="en">
<head>
	<?php require( 'scripts.php' ); ?>

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

	<?php if ( $inline_css && file_exists( $inline_css_path ) ) : ?>

		<style>
			<?php require( $inline_css_path ); ?>
		</style>

	<?php elseif ( file_exists( $file_css_path ) ) : ?>

		<link rel="stylesheet" href="<?php echo $file_css_url; ?>">

	<?php endif; ?>

</head>
<body class="l-body -page_<?php echo $uri; ?><?php echo ( ! $isHomepage ) ? ' -page_inner' : ''; ?>">
	<?php require( 'after-body.php' ); ?>

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
						<li class="b-mainNavigation__item<?php echo ( 'home' === $uri ) ? ' -state_active' : ''; ?>">
							<a class="b-mainNavigation__link" href="<?php echo $siteDir; ?>">Home</a>
						</li>
						<li class="b-mainNavigation__item<?php echo ( 'page' === $uri ) ? ' -state_active' : ''; ?>">
							<a class="b-mainNavigation__link" href="page">Page</a>
						</li>
						<li class="b-mainNavigation__item<?php echo ( 'subpage' === $uri ) ? ' -state_active' : ''; ?>">
							<a class="b-mainNavigation__link" href="page/subpage">Subpage</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>

		<div class="l-content">
