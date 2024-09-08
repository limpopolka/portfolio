$(document).ready(function(){

	function slowScroll (id) {
		var offset = 0;
		$('html, body').animate ({
			scrollTop: $(id).offset().top - offset
		}, 1000);
		return false;
	}

	$('.main-slider').slick({
		arrows: false,
		dots: true,
		appendDots: $('.main-slider-wrap-dots')
	});

	$('.clients__slider').slick({
		slidesToShow: 6,
		nextArrow: $('.clients__slider__nav-right'),
		prevArrow: $('.clients__slider__nav-left'),
		responsive: [
		    {
		      breakpoint: 1050,
		      settings: {
		        slidesToShow: 5,
		      }
		  },
		  {
		      breakpoint: 830,
		      settings: {
		        slidesToShow: 4,
		      }
		  },
		  {
		      breakpoint: 616,
		      settings: {
		        slidesToShow: 3,
		      }
		  },
		  {
		      breakpoint: 450,
		      settings: {
		        slidesToShow: 2,
		      }
		  },
		   ]
	});


	


	$(window).resize(function() {
		
		if (window.matchMedia("(min-width: 648px)").matches){
				let mobileMenuHeight = $('.mobile-menu').height(); 
				$('.mobile-menu .nav__dropdown').css('minHeight', mobileMenuHeight + 60 + 'px');

				$('.mobile-menu .nav__item-parent .nav_item-link').on('click', function(e){
					if(!$(this).hasClass('nav_item-link--768-active')){
						e.preventDefault();
						$(this).addClass('nav_item-link--768-active');
						$(this).next('.nav__dropdown-mask').slideDown(300);
					}
					
					$('.nav__dropdown-mask').removeClass('nav__dropdown-mask--active');
					$(this).next('.nav__dropdown-mask').addClass('nav__dropdown-mask--active');

				});
			}

			if (window.matchMedia("(max-width: 648px)").matches){
				$('.mobile-menu .nav_item-link').on('click', function(e){
					if(!$(this).hasClass('nav_item-link--mob-active')){
						e.preventDefault();
						$(this).addClass('nav_item-link--mob-active');
						$(this).next('.nav__dropdown-mask').slideDown(300);
					}
				});
			}

	});

	if (window.matchMedia("(min-width: 648px)").matches){
		let mobileMenuHeight = $('.mobile-menu').height(); 
		$('.mobile-menu .nav__dropdown').css('minHeight', mobileMenuHeight + 60 + 'px');

		$('.mobile-menu .nav__item-parent .nav_item-link').on('click', function(e){
			if(!$(this).hasClass('nav_item-link--768-active')){
				e.preventDefault();
				$(this).addClass('nav_item-link--768-active');
				$(this).next('.nav__dropdown-mask').slideDown(300);
			}
			$('.nav__dropdown-mask').removeClass('nav__dropdown-mask--active');
			$(this).next('.nav__dropdown-mask').addClass('nav__dropdown-mask--active');

		});
	}

	if (window.matchMedia("(max-width: 648px)").matches){
		$('.mobile-menu .nav_item-link').on('click', function(e){
			if(!$(this).hasClass('nav_item-link--mob-active')){
				e.preventDefault();
				$(this).addClass('nav_item-link--mob-active');
				$(this).next('.nav__dropdown-mask').slideDown(300);
			}
		});
	}
	



	$('.mobile-menu-btn').on('click', function(){
		$('.mobile-menu-btn').toggleClass('mobile-menu-btn--active');
		$('.mobile-menu').toggleClass('mobile-menu--active');
	});
});	

