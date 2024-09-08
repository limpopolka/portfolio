$(document).ready(function(){

	function slowScroll (id) {
	    var offset = 0;
	    $('html, body').animate ({
	      scrollTop: $(id).offset ().top - offset
	    }, 500);
	    return false;
	}

	$('.photos__slider').slick({
		nextArrow: '<div class="slick-arrow slick-next"><div class="slick-arrow__inner"></div></div>',
		prevArrow: '<div class="slick-arrow slick-prev"><div class="slick-arrow__inner"></div></div>',
		asNavFor: '.photos-item-wrap',
		responsive: [{
			breakpoint: 707,
			settings: {
				arrows: false,
				dots: true,
				dotsClass: 'dots'
			} 
		}]

	});


	$('.photos-item-wrap').slick({
		vertical: true,
		slidesToShow: 2,
		arrows: false,
		verticalSwiping: true,
		asNavFor: '.photos__slider'

	});

	$('.route__link--action').on('click', function(e){
		e.preventDefault();
		$('.route__link-wrap').addClass('route__link-wrap--active');
	});

	$(window).scroll(function(e){
		var scrtollY = $(this).scrollTop();
		if (scrtollY > 1000) {
			$('.scrollTop').addClass('scrollTop__active')
		}else{
			$('.scrollTop').removeClass('scrollTop__active')
		}
	});

	$('.scrollTop').on('click', function(){
		slowScroll('header');
	});


	$('.our_place .btn--big').on('click', function(e){
		e.preventDefault();
		$('.our_place .btn--big').removeClass('btn--active');
		$(this).addClass('btn--active');

		var attr = $(this).attr('data-block-id');

		$('.our_hidden-block').removeClass('our_hidden-block--active');
		$('#' + attr).addClass('our_hidden-block--active');
	});


	$('.burger').on('click', function(){
		$(this).toggleClass('burger--active');
		$('.header-top__left').toggleClass('header-top__left--active');
		$('.mask').toggleClass('mask--active');
		$('body').toggleClass('body--active');
	});


	$('.header-top__link-has_child').on('click', function(e){
		if (window.matchMedia("(max-width: 1038px)").matches) {
		if(!$(this).hasClass('header-top__link-has_child--active')){
            e.preventDefault();
         }

		$(this).addClass('header-top__link-has_child--active');
		$(this).next('.submenu-wrap').slideDown(300);
	}
	});

	$('.header-top .header_icon-box').on('click', function(){
		if (window.matchMedia("(max-width: 762px)").matches) {
			$('.header-top__link').removeClass('header-top__link--active');
			$(this).children('.header-top__link').addClass('header-top__link--active');
		}
	});
});	

