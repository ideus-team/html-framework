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

  <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
  <script>window.jQuery || document.write('<script src="assets/js/vendor/jquery-3.6.1.min.js"><\/script>')</script>

  <script src="assets/js/scripts.js?<?php echo filemtime( 'assets/js/scripts.js' ); ?>"></script>
</body>
</html>
