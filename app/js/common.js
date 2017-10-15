$(function() {

	// adaptive menu
	$(".toggle-menu").click(function() {
		$(this).toggleClass("on");
	});

	$("#top-nav").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
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


	//E-mail Ajax Send
	$(".form").submit(function(e) { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".btn").val("ОТПРАВЛЕНО");
		});
		return false;

	});	

});
