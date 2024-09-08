$(document).ready(function(){
	$('.menu-mob-btn').on('click', function(){
		$(".mobile-menu").addClass('mobile-menu--active')
	});

	$('.mobile-menu-close').on('click', function(){
		$(".mobile-menu").removeClass('mobile-menu--active')
	});

	$('.main-slider').slick({
		slidesToshow: 1,
		arrows: false,
		dots: true
		
		//autoplay: true,
	});

	$('.slider-good').slick({
		slidesToShow: 1,
		arrows: false,
		asNavFor: '.slider-good-nav'
	})

	$('.slider-good-nav').slick({
		slidesToShow: 3,
		arrows: false,
		asNavFor: '.slider-good', 
		focusOnSelect: true
	})

	$('.goods__slider').slick({
		slidesToShow: 3,
		arrows: false,
		dots: true,
		responsive: [
		    {
		      breakpoint: 1201,
		      settings: {
		        slidesToShow: 4,
		      }
		  },
		  {
		      breakpoint: 951,
		      settings: {
		        slidesToShow: 3,
		      }
		  },
		   {
		      breakpoint: 761,
		      settings: {
		        slidesToShow: 2,
		      }
		  },
		  {
		      breakpoint: 551,
		      settings: {
		        slidesToShow: 1,
		      }
		  }
		  ]

	})
});	

