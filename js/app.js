$(document).ready(function () {

	$('.gs-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		autoplay: false,
		dots: true,
	});

});

$(document).ready(function () {

	$('.gs-partners__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		dots: false,
		autoplaySpeed: 500,
		pauseOnFocus: true,
	

	});
});