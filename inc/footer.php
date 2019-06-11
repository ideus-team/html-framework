    </div><!--content-->

    <footer class="l-siteFooter">
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
          <div class="b-developerCopyright">Разработано в <a rel="friend" class="b-developerCopyright__link" href="https://ideus.biz/" target="_blank">iDeus</a></div>
        </address>
      </div>
    </footer>
  </div><!--wrapper-->

  <script src="js/vendor/modernizr-3.5.0.min.js"></script>

  <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
  <script>window.jQuery || document.write('<script src="assets/js/vendor/jquery-3.4.1.min.js"><\/script>')</script>

  <script src="assets/js/scripts.js?<?php echo filemtime('assets/js/scripts.js'); ?>"></script>
  <!--<script src="assets/js/scripts-extra.js?<?php echo filemtime('assets/js/scripts-extra.js'); ?>"></script>-->

  <!-- Google Analytics: change UA-XXXXX-Y to be your site's ID. -->
  <script>
    window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;
    ga('create','UA-XXXXX-Y','auto');ga('send','pageview')
  </script>
  <script src="https://www.google-analytics.com/analytics.js" async defer></script>
</body>
</html>
