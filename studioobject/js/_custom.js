$(document).ready(function(){

	$('.factories-slider').slick({
		centerMode: true,
		slidesToShow: 3,
		centerPadding: '0px',
		infinite: true,
		speed: 700,
		prevArrow: '<div class="slick-prev"><div class="triangle-line"><div class="triangle"><div class="triangle-item triangle-item-1"></div><div class="triangle-item triangle-item-2"></div><div class="triangle-item triangle-item-3"></div></div></div></div>',
		nextArrow: '<div class="slick-next"><div class="triangle-line"><div class="triangle"><div class="triangle-item triangle-item-1"></div><div class="triangle-item triangle-item-2"></div><div class="triangle-item triangle-item-3"></div></div></div></div>',
		responsive: [{
			breakpoint: 719,
			settings: {
				slidesToShow: 1
			}
		},
		]
	});

	$('.wrapper-good-slider').slick({
		slidesToShow: 3,
		prevArrow: '<div class="slick-prev"><div class="triangle-line"><div class="triangle"><div class="triangle-item triangle-item-1"></div><div class="triangle-item triangle-item-2"></div><div class="triangle-item triangle-item-3"></div></div></div></div>',
		nextArrow: '<div class="slick-next"><div class="triangle-line"><div class="triangle"><div class="triangle-item triangle-item-1"></div><div class="triangle-item triangle-item-2"></div><div class="triangle-item triangle-item-3"></div></div></div></div>',
		responsive: [{
			breakpoint: 947,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 673,
			settings: {
				slidesToShow: 1
			}
		}
		]

	});

	$('.menu-open').on('click', function(){
		$('.menu-mask').toggleClass('menu-mask-active');
		$('body').toggleClass('body-active');
	});

	$('.consultation-section .input').on('focus', function(){
		$(this).addClass('input-active');
	});

	$('.consultation-section .input').blur(function(){
		$(this).removeClass('input-active');
	});



	$('.mobile-menu-item').on('click', function(){
		$('.mobile-menu-items-dropdown').removeClass('mobile-menu-items-dropdown-active');
		$(this).children('.mobile-menu-items-dropdown').toggleClass('mobile-menu-items-dropdown-active');
	});
	function slowScroll (id) {
	    var offset = 0;
	    $('html, body').animate ({
	      scrollTop: $(id).offset ().top - offset
	    }, 500);
	    return false;
	}

	$('.footer-top').on('click', function(){
		slowScroll('.wrapper');
	});

	$('.close-mobile-catalog').on('click', function(){
		$('.mobile-catalog').toggleClass('mobile-catalog-active');
		$('body').toggleClass('body-active');
	});

	$('.factory-action').on('click', function(event){
		event.preventDefault();
		$('.factories-mask').toggleClass('factories-mask-active');
		$('body').toggleClass('body-active');
	});


	var windowWidth = $(window).width();

	$(window).resize(function(){
		windowWidth = $(window).width();
		if (windowWidth <= 474){
			$('.wrapper-factories-section-items').slick({
				prevArrow: '<div class="slick-prev slick-arrow"><div class="triangle-line"><div class="triangle"><div class="triangle-item triangle-item-1"></div><div class="triangle-item triangle-item-2"></div><div class="triangle-item triangle-item-3"></div></div></div></div>',
				nextArrow: '<div class="slick-next slick-arrow"><div class="triangle-line"><div class="triangle"><div class="triangle-item triangle-item-1"></div><div class="triangle-item triangle-item-2"></div><div class="triangle-item triangle-item-3"></div></div></div></div>',

			});
		}

		if (windowWidth > 474){
			$('.wrapper-factories-section-items').slick('unslick');
		}


	});

	if (windowWidth <= 474){
		$('.wrapper-factories-section-items').slick({
			prevArrow: '<div class="slick-prev slick-arrow"><div class="triangle-line"><div class="triangle"><div class="triangle-item triangle-item-1"></div><div class="triangle-item triangle-item-2"></div><div class="triangle-item triangle-item-3"></div></div></div></div>',
			nextArrow: '<div class="slick-next slick-arrow"><div class="triangle-line"><div class="triangle"><div class="triangle-item triangle-item-1"></div><div class="triangle-item triangle-item-2"></div><div class="triangle-item triangle-item-3"></div></div></div></div>',

		});
	}

	$('.furniture-item').on('click', function(){
		$(this).toggleClass('furniture-item-active');
	});


	$('.phone-form').dsform({
		formID : 'dscallback',
	});


	$('.mail-form').dsform({
		formID : 'dsserv',
	});
});
