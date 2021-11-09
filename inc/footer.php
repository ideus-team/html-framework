    </div><!--content-->

    <footer class="l-siteFooter">
      <div class="b-siteFooter">
        <div class="l-bottomNavigation" role="navigation">
          <ul class="b-bottomNavigation">
            <li class="b-bottomNavigation__item<?php echo ( $uri == 'home' ) ? ' -state_active' : ''; ?>">
              <a class="b-bottomNavigation__link" href="index.html">Home</a>
            </li>
          </ul>
        </div>

        <address class="l-siteCopyright vcard" itemscope itemtype="http://schema.org/Organization">
          <div class="b-siteCopyright">© <?php echo date( 'Y' ); ?> <a rel="me" itemprop="name" class="b-siteCopyright__link fn n org url work" href="<?php echo "http://" . $_SERVER['HTTP_HOST']; ?>">%clientName%</a>. Все права защищены</div>
          <div class="b-developerCopyright">Разработано в <a class="b-developerCopyright__link" href="https://ideus.biz/" rel="friend" target="_blank">iDeus</a></div>
        </address>
      </div>
    </footer>
  </div><!--wrapper-->

  <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <script>window.jQuery || document.write('<script src="assets/js/vendor/jquery-3.6.0.min.js"><\/script>')</script>

  <script src="assets/js/scripts.js?<?php echo filemtime( 'assets/js/scripts.js' ); ?>"></script>

  <!-- Global site tag (gtag.js) - Google Analytics: change UA-XXXXX-Y to be your site's ID. -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXX-Y"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-XXXXX-Y');
  </script>

</body>
</html>
