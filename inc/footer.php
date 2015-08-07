    </div><!--content-->

    <footer class="l-siteFooter" role="contentinfo">
      <div class="b-siteFooter">
        <div class="l-siteNavigationBottom" role="navigation">
          <ul class="b-bottomNavigation">
            <li class="b-bottomNavigation__item<?php echo ($uri=='home')?' -state_current':''; ?>">
              <a class="b-bottomNavigation__link" href="index.html">Home</a>
            </li>
          </ul>
        </div>

        <address class="l-siteCopyright vcard" itemscope itemtype="http://schema.org/Organization">
          <div class="b-siteCopyright">© <?php echo date('Y'); ?> <a rel="me" itemprop="name" class="b-siteCopyright__link fn n org url work" href="<?php echo "http://".$_SERVER['HTTP_HOST']; ?>">%clientName%</a>. Все права защищены</div>
          <div class="b-developerCopyright">Разработано в <a rel="friend" class="b-developerCopyright__link" href="http://ideus.biz/" target="_blank">iDeus</a></div>
        </address>
      </div>
    </footer>
  </div><!--wrapper-->

  <script src="assets/js/scripts.js?<?php echo filemtime('assets/js/scripts.js'); ?>"></script>
  <!--<script src="js/scripts-extra.js?<?php echo filemtime('assets/js/scripts-extra.js'); ?>"></script>-->

  <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
  <script>
      (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
      function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
      e=o.createElement(i);r=o.getElementsByTagName(i)[0];
      e.src='https://www.google-analytics.com/analytics.js';
      r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
      ga('create','UA-XXXXX-X','auto');ga('send','pageview');
  </script>
</body>
</html>
