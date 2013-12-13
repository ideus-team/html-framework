    </div><!--content-->

    <footer class="l-siteFooter" role="contentinfo">
      <div class="l-siteNavigationBottom" role="navigation">
        <ul class="b-bottomNavigation">
          <li class="b-bottomNavigation__item<?php echo ($uri=='home')?' -state_current':''; ?>">
            <a class="b-bottomNavigation__link" href="index.html">Home</a>
          </li>
          <li class="b-bottomNavigation__item">
            <a class="b-bottomNavigation__link" href="#"></a>
          </li>
        </ul>
      </div>

      <address class="l-siteCopyright vcard" itemscope itemtype="http://schema.org/Organization">
        <div class="b-siteCopyright">© <?php echo date('Y'); ?> <a rel="me" itemprop="name" class="b-siteCopyright__link fn n org url work" href="http://client-site-name.com">%clientName%</a>. Все права защищены</div>
        <div class="b-developerCopyright">Разработано в <a rel="friend" class="b-developerCopyright__link" href="http://ideus.biz/" target="_blank">iDeus</a></div>
      </address>
    </footer>
  </div><!--wrapper-->

  <script src="js/scripts.js"></script>
  <!--<script src="js/scripts-extra.js"></script>-->

  <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
  <script>
    var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
    (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
    s.parentNode.insertBefore(g,s)}(document,'script'));
  </script>
  <!-- Net-Craft.Dev Monitoring -->
  <script>
    jQuery.error = function (message) {
      _gaq.push(['_trackEvent', 'jQuery Error', message, navigator.userAgent, 0, true]);
    }
  </script>
  <!-- /Net-Craft.Dev Monitoring -->
</body>
</html>