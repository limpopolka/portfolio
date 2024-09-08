$(document).ready(function(){



	$(".video-mask").click(function(){
		var iframe = $(this).find("iframe");
		iframe.attr("src", iframe.data("src"));
		iframe.show().triggerClick();

	});


	function slowScroll (id) {
	    var offset = 0;
	    $('html, body').animate ({
	      scrollTop: $(id).offset().top - offset
	    }, 500);
	    return false;
	}

	$('.scrollTop').on('click', function(){
		slowScroll('.wrapper');
	});


	$(window).on('scroll', function(){
		var scrollTop = $(window).scrollTop();
		
		if(scrollTop > 203){
			$('.fixed-menu').addClass('fixed-menu_active');
		}else{
			$('.fixed-menu').removeClass('fixed-menu_active');
		}
	});

	$('.customers-slider').slick({
		slidesToShow: 6,
		infinite: false,
		nextArrow: $('.customers-slider-arrows .slick-next'),
		prevArrow: $('.customers-slider-arrows .slick-prev'),
		responsive: [
		{
	      breakpoint: 1243,
	      settings: {
	      	slidesToShow: 5
	      },

	    },
	    {
	      breakpoint: 939,
	      settings: {
	      	slidesToShow: 4
	      },
	      
	    },
	    {
	      breakpoint: 548,
	      settings: {
	      	slidesToShow: 2
	      },
	      
	    }
		]
	});


	$('#service-btn_action').on('click', function(){
		$('.mask-service').addClass('mask-service__active');
		$('body').addClass('wrapper__active');
	});

	$('#mask-service-close').on('click', function(){
		$('.mask-service').removeClass('mask-service__active');
		$('body').removeClass('wrapper__active');

	});

	$('.mask-service-menu_nav--item__full .mask-service-menu_link').on('click', function(event){
		event.preventDefault();
		$('.mask-service-menu_dropdown').not($(this).next()).slideUp(300);

		$('.mask-service-menu_dropdown-two-level').slideUp(300);

		$(this).next('.mask-service-menu_dropdown').slideDown(300);
	});

	$('.mask-service-menu_dropdown--item__full .mask-service-menu_dropdown_link').on('click', function(event){
		event.preventDefault();
		$('.mask-service-menu_dropdown-two-level').not($(this).next()).slideUp(300);
		$(this).next('.mask-service-menu_dropdown-two-level').slideDown(300);
	});

	$('#mobile-menu_action').on('click', function(){
		$('.mobile-menu-mask').addClass('mask-service__active');
		$('body').addClass('wrapper__active');
	});

	$('#mobile-menu-close').on('click', function(){
		$('.mobile-menu-mask').removeClass('mask-service__active');
		$('body').removeClass('wrapper__active');
	});

	$('.mobile-menu-item-full .mobile-menu-item_link').on('click', function(e){
		e.preventDefault();

		$(this).next('.mask-service-menu_nav').slideDown(300);
	})

	
});	
