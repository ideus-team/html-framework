// Authors: %Author Name%

$(function() {
  if ($('html').hasClass('-device_desktop')) {}
  initsiteMapTabs(); 
});
$(window).resize(function() {});
$(window).load(function() {});

function initsiteMapTabs() {
	$('.js-sitemapTabs__title').on('click', function() {
		$(this).toggleClass('-state_active').toggleClass('-state_inactive').removeClass('-state_default').next('.js-sitemapTabs__content').toggleClass('-state_active').removeClass('-state_default');
	});
}
