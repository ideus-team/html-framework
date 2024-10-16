		</div><!--content-->

		<footer class="l-siteFooter">
			<div class="b-siteFooter">
				<div class="l-bottomNavigation" role="navigation">
					<ul class="b-bottomNavigation">
						<li class="b-bottomNavigation__item<?php echo ( 'home' === $uri ) ? ' -state_active' : ''; ?>">
							<a class="b-bottomNavigation__link" href="<?php echo $siteDir; ?>">Home</a>
						</li>
						<li class="b-bottomNavigation__item<?php echo ( 'page' === $uri ) ? ' -state_active' : ''; ?>">
							<a class="b-bottomNavigation__link" href="page">Page</a>
						</li>
						<li class="b-bottomNavigation__item<?php echo ( 'subpage' === $uri ) ? ' -state_active' : ''; ?>">
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

	<?php if ( $inline_css && file_exists( $inline_css_path ) && file_exists( $file_css_path ) ) : ?>

		<link rel="stylesheet" href="<?php echo $file_css_url; ?>">

	<?php endif; ?>

	<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
	<script>window.jQuery || document.write('<script src="assets/js/vendor/jquery-3.7.1.min.js"><\/script>')</script>

	<?php if ( file_exists( $file_js_path ) ) : ?>

		<script src="<?php echo $file_js_url; ?>"></script>

	<?php endif; ?>

</body>
</html>
