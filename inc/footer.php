    </div><!--content-->

    <footer class="l-siteFooter">
      <div class="b-siteFooter">
        <div class="l-bottomNavigation" role="navigation">
          <ul class="b-bottomNavigation">
            <li class="b-bottomNavigation__item<?php echo ( $uri == 'home' ) ? ' -state_active' : ''; ?>">
              <a class="b-bottomNavigation__link" href="<?php echo $siteDir; ?>">Home</a>
            </li>
            <li class="b-bottomNavigation__item<?php echo ( $uri == 'page' ) ? ' -state_active' : ''; ?>">
              <a class="b-bottomNavigation__link" href="page">Page</a>
            </li>
            <li class="b-bottomNavigation__item<?php echo ( $uri == 'subpage' ) ? ' -state_active' : ''; ?>">
              <a class="b-bottomNavigation__link" href="page/subpage">Subpage</a>
            </li>
          </ul>
        </div>

        <address class="l-siteCopyright vcard" itemscope itemtype="http://schema.org/Organization">
          <div class="b-siteCopyright">
            © <?php echo date( 'Y' ); ?>
            <a rel="me" itemprop="name" class="b-siteCopyright__link fn n org url work" href="<?php echo $protocol . $_SERVER['HTTP_HOST']; ?>">%clientName%</a>.
            All rights reserved
          </div>

          <div class="b-developerCopyright">
            <a class="b-developerCopyright__link" href="https://ideus.biz/" rel="friend" target="_blank">iDeus</a>
          </div>
        </address>
      </div>
    </footer>
  </div><!--wrapper-->

  <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
  <script>window.jQuery || document.write('<script src="assets/js/vendor/jquery-3.6.3.min.js"><\/script>')</script>

  <script src="assets/js/scripts.js?<?php echo filemtime( $_SERVER['DOCUMENT_ROOT'] . $siteDir . 'assets/js/scripts.js' ); ?>"></script>
</body>
</html>
