// Authors: %Author Name%

$(function() {
  if ($('html').hasClass('-device_desktop')) {}
  initsiteMapTabs(); 
});
$(window).resize(function() {});
$(window).load(function() {});

function initsiteMapTabs() {
	$('.js-sitemapTabs__title').on('click', function() {
		$(this).toggleClass('-state_active').next('.js-sitemapTabs__content').toggleClass('-state_active').removeClass('-state_defaultActive');
	});
}
