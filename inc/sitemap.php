<!doctype html>
<html class="l-html" lang="">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="x-ua-compatible" content="ie=edge">

  <title><?php echo $company; ?> - Site Map</title>
  <meta name="description" content="" />

  <!-- <meta property="og:image" content="<?php echo $BASE_URL; ?>/img/userfiles/og-image.png" /> -->

  <meta name="viewport" content="width=1024" />

  <link rel="shortcut icon" href="favicon.ico" />
  <link rel="apple-touch-icon" href="apple-touch-icon.png" />

  <link rel="stylesheet" href="assets/css/sitemap.min.css" />
  <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,400,400italic,500,500italic,700,700italic,900,900italic|Roboto+Slab:100,300,400,700" />

  <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <script>window.jQuery || document.write('<script src="assets/js/vendor/jquery-3.6.0.min.js"><\/script>')</script>

  <script>
    $(function() {
      $('.js-tabs__title').on('click', function() {
        $(this).toggleClass('-state_active').toggleClass('-state_inactive').removeClass('-state_default').next('.js-tabs__content').toggleClass('-state_active').removeClass('-state_default');
      });
    });
  </script>
</head>
<body class="l-body -type_<?php echo $type; ?>">
  <!--[if lt IE 8]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]-->

  <div class="l-wrapper">
    <header class="l-siteHeader">
      <div class="b-siteHeader">
        <div class="l-siteLogo">
          <a class="b-siteLogo__link" itemprop="url">
            <img class="b-siteLogo__icon" src="assets/img/sitemap/siteLogo-<?php echo $type; ?>.png" alt="<?php echo $company; ?>" title="<?php echo $company; ?>" itemprop="logo" />
          </a>
        </div>
      </div>
    </header>

    <div class="l-content">
      <main class="l-contentText">

        <div class="l-clientLogo">
          <a class="b-clientLogo__link" itemprop="url" href="#">
            <img class="b-clientLogo__icon" src="assets/img/sitemap/client-logo.png" alt="" title="" itemprop="logo" />
          </a>
        </div>

        <div class="l-tabs">
          <div class="b-tabs">

            <div class="b-tabs__title js-tabs__title -state_active -state_default">
              <div class="b-tabs__titleText">Info</div>
              <div class="b-tabs__arrow"></div>
            </div>
            <div class="b-tabs__content js-tabs__content -state_active -state_default">
              <table class="b-tabs__table">
                <tbody>
                  <tr>
                    <td class="-view_important">Name</td>
                    <td>Project Name</td>
                  </tr>
                  <tr>
                    <td class="-view_important">CMS</td>
                    <td>Wordpress</td>
                  </tr>
                  <tr>
                    <td class="-view_important">Mobile Version</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="b-tabs__title js-tabs__title -state_active -state_default">
              <div class="b-tabs__titleText">Completed pages</div>
              <div class="b-tabs__arrow"></div>
            </div>
            <div class="b-tabs__content js-tabs__content -state_active -state_default">
              <table class="b-tabs__table">
                <thead>
                  <tr>
                    <th>Page Name</th>
                    <th>Date</th>
                    <th class="-type_link">Link</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>About Us</td>
                    <td>19/01/2016</td>
                    <td class="-type_link">
                      <a href="#" class="b-button -type_filled" target="_blank">Go To Page</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Contacts</td>
                    <td>19/01/2016</td>
                    <td class="-type_link">
                      <a href="#" class="b-button" target="_blank">Go To Page</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Privacy Policy</td>
                    <td>20/01/2016</td>
                    <td class="-type_link">
                      <a href="#" class="b-button" target="_blank">Go To Page</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="b-tabs__title js-tabs__title -state_inactive -state_default">
              <div class="b-tabs__titleText">Pages in progress</div>
              <div class="b-tabs__arrow"></div>
            </div>
            <div class="b-tabs__content js-tabs__content">
              <table class="b-tabs__table">
                <thead>
                  <tr>
                    <th>Page Name</th>
                    <th>Date</th>
                    <th class="-type_link -state_inactive">Link</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Our Products</td>
                    <td>Due 25/01/2016</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>


            <div class="b-tabs__title js-tabs__title -state_inactive -state_default">
              <div class="b-tabs__titleText">Fonts</div>
              <div class="b-tabs__arrow"></div>
            </div>
            <div class="b-tabs__content js-tabs__content">
              <table class="b-tabs__table">
                <thead>
                  <tr>
                    <th>Font Name</th>
                    <th>Style</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a href="#" class="b-link">Roboto</a>
                    </td>
                    <td>Normal 400 Italic,  Semi-Bold 600 Italic,  Light 300</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#" class="b-link">Roboto Slab</a>
                    </td>
                    <td>Semi-Bold 600 Italic,  Light 300</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>

      </main>
    </div><!--content-->

    <footer class="l-siteFooter">
      <div class="b-siteFooter">

        <address class="l-siteCopyright vcard" itemscope itemtype="http://schema.org/Organization">
          <div class="b-siteCopyright">
            <a rel="me" itemprop="name" class="b-siteCopyright__link fn n org url work" href="<?php echo $link; ?>"><?php echo $company; ?></a>. All rights reserved.
          </div>
        </address>

      </div>
    </footer>

  </div><!--wrapper-->
</body>
</html>
