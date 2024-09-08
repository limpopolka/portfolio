$(document).ready(function(){
	$('.main-slider').slick({
		slidesToShow: 1,
		arrows: false,
		dots: true,
		dotsClass: 'dots',
	});

	$('.our-customers-slider').slick({
		slidesToShow: 4,
		nextArrow: '<div class="slick-arrow slick-next"></div>',
		prevArrow: '<div class="slick-arrow slick-prev"></div>',
		responsive: [
	    {
	      breakpoint: 1104,
	      settings: {
	      	slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 672,
	      settings: {
	      	slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 468,
	      settings: {
	      	slidesToShow: 1
	      }
	    }
	    ]
	});
	$('.header-menu--action').on('click', function(){
		$('.mobile_menu-wrapper').toggleClass('mobile_menu-wrapper__active');
		$('.mobile_menu-mask').toggleClass('mobile_menu-mask__active');
	});

	$('.mobile_menu-close').on('click', function(){
		$('.mobile_menu-wrapper').toggleClass('mobile_menu-wrapper__active');
		$('.mobile_menu-mask').toggleClass('mobile_menu-mask__active');
	})
	$('.mobile_menu-item-full .mobile_menu-item__link').on('click', function(e){
		e.preventDefault();
		$('.mobile_menu-item--dropdown').not($(this).next()).slideUp(300);
		$(this).next('.mobile_menu-item--dropdown').slideToggle(300);
	});

	$('#slide-down-result').on('click', function(e){
		e.preventDefault();
		$(this).css('display', 'none');

		$('.our-result').addClass('our-result__active');
	});

	$('#slide-down-about').on('click', function(e){
		e.preventDefault();
		$(this).css('display', 'none');

		$('.text-mobile').addClass('text-mobile__active');
	});

	$('#slide-down-service').on('click', function(e){
		e.preventDefault();
		
		$(this).css('display', 'none');
		$('.service-items-wrapper').addClass('service-items-wrapper__active');
	});
});	