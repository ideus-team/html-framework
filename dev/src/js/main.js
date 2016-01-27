// Authors: %Author Name%

$(function() {
  if ($('html').hasClass('-device_desktop')) {}
  initTabs(); 
});
$(window).resize(function() {});
$(window).load(function() {});

function initTabs() {
	$('.js-sitemapTabs__title').on('click', function() {
		$(this).toggleClass('-state_active').next('.js-sitemapTabs__content').toggleClass('-state_active');
	});
}
