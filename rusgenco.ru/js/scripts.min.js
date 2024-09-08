$(document).ready(function(){

	function slowScroll (id) {
		var offset = 0;
		$('html, body').animate ({
			scrollTop: $(id).offset().top - offset
		}, 1000);
		return false;
	}

	$('.btn-mob__menu').on('click', function(){
		$('.nav').addClass('nav--active');
		
	});

	$('.nav-close').on('click', function(){
		$('.nav').removeClass('nav--active');
	});


	$('.nav__item').on('click', function(e){
		e.preventDefault();
		var scrollData = $(this).attr('data-scroll-link');

		slowScroll('.' + scrollData);
	});

	$('input[type="checkbox"]').styler();
	if (window.matchMedia("(max-width: 950px)").matches) {
		$(".work-step__item .btn.btn-opacitty.btn-long").text('Скачать')
	} 

	if (window.matchMedia("(max-width: 738px)").matches) {

		$('.workers-wrap').slick({
			slidesToShow: 2,
			infinite: false,
			responsive: [
		    {
		      breakpoint: 506,
		      settings: {
		        slidesToShow: 1,
		      }
		  }
		   ]
		});
	}

	$(window).resize(function(){
			if (window.matchMedia("(max-width: 738px)").matches && !$('.workers-wrap').hasClass('slick-initialized')) {
				$('.workers-wrap').slick({
					slidesToShow: 2,
					infinite: false,
					responsive: [
				    {
				      breakpoint: 506,
				      settings: {
				        slidesToShow: 1,
				      }
				  }
				   ]
				});
			}

			if (window.matchMedia("(min-width: 738px)").matches){
				$('.workers-wrap').slick('unslick');
			}

		})
	if (window.matchMedia("(max-width: 518px)").matches) {
		$(".dop-pay .btn-long").text('Скачать КП');
	} 


	$('.map-slider_wrap').slick({
		slidesToShow: 1,
		responsive: [
		    {
		      breakpoint: 739,
		      settings: {
		        slidesToShow: 1,
		      }
		  }
		   ]
	});

	$('.klient-slider_wrap').slick({
		slidesToShow: 4,
		responsive: [
		    {
		      breakpoint: 1050,
		      settings: {
		        slidesToShow: 3,
		      }
		  },
		   {
		      breakpoint: 648,
		      settings: {
		        slidesToShow: 2,
		      }
		  },
		    {
		      breakpoint: 451,
		      settings: {
		        slidesToShow: 1,
		      }
		  }
		   ]
	});

	$('.case-slider').slick({
		slidesToShow: 1,
	});

	$('.ask-item').on('click', function(){
		$('.ask-item').removeClass('ask-item__active');
		$(this).addClass('ask-item__active');
	});
});	

