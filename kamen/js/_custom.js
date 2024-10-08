$(document).ready(function(){
	$('.main-slider').slick({
		slidesToShow: 1,
		nextArrow: $('.main-slider-wrap .slick-next'),
		prevArrow: $('.main-slider-wrap .slick-prev'),
	});

	$('.green-slider').slick({
		slidesToShow: 1,
		nextArrow: '<div class="slick-arrow slick-next"></div>',
		prevArrow: '<div class="slick-arrow slick-prev"></div>', 
	})

	var catalogHeight = $('.catalog__drop-down').height();

	$('.sub-menu').css('height', catalogHeight + 27);


	$('.catalog-action').hover(function(){
		$('.mask-wrapper').addClass('mask-wrapper--active');
	},
	function(){
		$('.mask-wrapper').removeClass('mask-wrapper--active');
	}
	)

	$(window).scroll(function(e){
		var scrollY = $(window).scrollTop();
		var windowWidth = $(window).width();

		if (scrollY >= 500 && windowWidth >= 1265) {
			$('.header__top').addClass('header__top--active');
			$('.wrapper').addClass('wrapper--active');
		}else{
			$('.header__top').removeClass('header__top--active');
			$('.wrapper').removeClass('wrapper--active');

		}

	});



	$('.mob-menu__action').on('click', function(){
		$('body').addClass('body--active');
		$('.mobile-menu').addClass('mobile-menu--active');
	});

	$('.mobile-menu-close').on('click', function(){
		$('body').removeClass('body--active');

		$('.mobile-menu').removeClass('mobile-menu--active');

	})

	$('.mobile-catalog-action').on('click', function(){
		if ($(this).hasClass('mobile-catalog-action--active')) {
			$('.mobile-catalog__drop-down').slideUp();
			$(this).removeClass('mobile-catalog-action--active');
		}
		else{
			$('.mobile-catalog__drop-down').slideDown();
			$(this).addClass('mobile-catalog-action--active');
		}
		
		
	});	

	

	$('.mobile-menu .menu-item-has-children > a').on('click', function(e){
		if (!$(this).hasClass('menu-item-children--active')) {
			e.preventDefault();
		}
		
		$('.mobile-menu .menu-item-has-children > a').removeClass('menu-item-children--active');
		$('.mobile-menu .sub-menu').slideUp(300);
		$(this).next('.sub-menu').slideDown(300);
		$(this).addClass('menu-item-children--active');


	});	


	$('.our-work-item').on('click', function(){

		if (window.matchMedia("(max-width: 537px)").matches) {

			if ($(this).hasClass('our-work-item--active')) {
				$(this).children('.our-work-item__text-wrap').slideUp();
				$(this).removeClass('our-work-item--active');
			}else{
				$(this).children('.our-work-item__text-wrap').slideDown();
				$(this).addClass('our-work-item--active');
			}

		}
	});


	$('.open-goods').on('click', function(e){
		e.preventDefault();
		$('.goods__item-wrapper').addClass('goods__item-wrapper--active');
		$(this).css('display', 'none');
	});
});	

