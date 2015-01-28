<?php
  require_once 'inc/vendor/Mobile_Detect.php';
  $detect = new Mobile_Detect();

  $device = (!$detect->isMobile()) ? 'desktop' : ($detect->isTablet() ? 'tablet' : 'mobile');

  $device = (isset($_COOKIE['device']) && $_COOKIE['device']) ? $_COOKIE['device'] : $device;

  switch ($device) {
    case 'mobile':
      $viewport = '1024';
      break;
    case 'tablet':
      $viewport = '1024';
      break;
    case 'desktop':
    default:
      $viewport = 'device-width';
      break;
  }
  $isHomepage = (basename($_SERVER['PHP_SELF']) == 'index.php');
  $title = ($isHomepage) ? $siteName : $pageName.' : '.$siteName;
?>
<!DOCTYPE html>
<!--[if IE 7]>         <html class="-device_<?php echo $device; ?> no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="-device_<?php echo $device; ?> no-js lt-ie9"> <![endif]-->
<!--[if IE 9]>         <html class="-device_<?php echo $device; ?> no-js ie9"> <![endif]-->
<!--[if gt IE 9]><!--> <html class="-device_<?php echo $device; ?> no-js"> <!--<![endif]-->
<head>
  <meta charset="utf-8" />
  <title><?php echo $title; ?></title>
  <meta name="description" content="" />

  <meta name="viewport" content="width=<?php echo $viewport; ?>" />
  <?php if($detect->isMobile() && $detect->isIE()): ?>
    <style>
      @-ms-viewport {
        width: <?php echo $viewport; ?>px;
      }
    </style>
  <?php endif; ?>

  <link rel="shortcut icon" href="favicon.ico" />
  <link rel="apple-touch-icon" href="apple-touch-icon.png" />
  <link rel="stylesheet" href="css/main.css?<?php echo filemtime('css/main.css'); ?>" />
  <script src="//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
  <script>window.Modernizr || document.write('<script src="js/vendor/modernizr-2.8.3.min.js"><\/script>')</script>

  <!--[if lte IE 8]>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')</script>
    <script src="js/legacy/ie8.js"></script>
  <![endif]-->
  <!--[if gte IE 9]><!-->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-2.1.3.min.js"><\/script>')</script>
  <!--<![endif]-->

  <!-- Net-Craft.Dev Monitoring -->
  <script>
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-XXXXXXXX-X']);
    _gaq.push(['_trackPageview']);

    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
  </script>
  <script>
    var _gaq = window._gaq || [];
    window.onerror = function(msg, url, line) {
      _gaq.push(['_trackEvent', 'JS Error', msg, navigator.userAgent + ' -> ' + url + " : " + line, 0, true]);
    };
  </script>
  <!-- /Net-Craft.Dev Monitoring -->
</head>
<body class="-page_<?php echo $uri; ?><?php echo (!$isHomepage) ? ' -page_inner' : ''; ?> -page_lang_en" id="%SiteURI%">
  <!--[if lt IE 7]>
    <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]-->
  <div class="l-wrapper">
    <header class="l-siteHeader" role="banner">
      <div class="l-siteLogo">
        <?php
          $siteLogo__iconURL = 'img/siteLogo__icon.png';
          //$siteLogo__iconURL = ($device=='mobile') ? 'img/siteLogo__icon-mobile.png' : 'img/siteLogo__icon.png';
        ?>
        <?php if($isHomepage): ?>
          <h1 class="b-siteLogo" itemscope itemtype="http://schema.org/Organization">
            <a class="b-siteLogo__link" itemprop="url">
              <img class="b-siteLogo__icon" src="<?php echo $siteLogo__iconURL; ?>" alt="<?php echo $siteName; ?>" title="<?php echo $siteName; ?>" itemprop="logo" />
            </a>
          </h1>
        <?php else: ?>
          <div class="b-siteLogo" itemscope itemtype="http://schema.org/Organization">
            <a class="b-siteLogo__link" href="index.html" itemprop="url">
              <img class="b-siteLogo__icon" src="<?php echo $siteLogo__iconURL; ?>" alt="<?php echo $siteName; ?>" title="<?php echo $siteName; ?>" itemprop="logo" />
            </a>
          </div>
        <?php endif; ?>
      </div>

      <div class="l-siteSearch">
        <form class="b-siteSearch" role="search" method="post" action="#">
          <label class="b-siteSearch__label g-visuallyhidden" for="search-text">Найти:</label>
          <input class="b-siteSearch__input" type="search" spellcheck="true" value="" name="search" id="search-text" />
          <input class="b-siteSearch__button" type="submit" value="Search" />
        </form>
      </div>

      <nav class="l-siteNavigation" role="navigation">
        <ul class="b-mainNavigation">
          <li class="b-mainNavigation__item<?php echo ($uri=='home')?' -state_current':''; ?>">
            <a class="b-mainNavigation__link" href="index.html">Home</a>
          </li>
          <li class="b-mainNavigation__item">
            <a class="b-mainNavigation__link" href="#"></a>
          </li>
        </ul>
      </nav>
    </header>

    <div class="l-content">
