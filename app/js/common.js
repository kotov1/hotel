$(function() {

	// adaptive menu
	$(".toggle-menu").click(function() {
		$(this).toggleClass("on");
	});


	//Slider
	$(".owl-carousel").owlCarousel({
		items: 1,
		nav: false,
		navText: '',
		autoplay : false,
		autoplayHoverPause : false,
		loop: true
	});

});
