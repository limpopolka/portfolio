$(document).ready(function(){
	$('.burger').on('click', function(){
		$(this).toggleClass('burger-active');
		$('.header-bottom__nav--mobile').slideToggle(300);
	});

	$('.main-slider').slick({
		slidesToShow: 1,
		nextArrow: '<div class="slick-arrow slick-next"></div>',
		prevArrow: '<div class="slick-arrow slick-prev"></div>',
	});

	$('.rewiews-slider, .news-slider').slick({
		slidesToShow: 2,
		nextArrow: '<div class="slick-arrow slick-next"></div>',
		prevArrow: '<div class="slick-arrow slick-prev"></div>',
		infinite: false,
		responsive: [
	    {
	      breakpoint: 861,
	      settings: {
	      	slidesToShow: 1
	      }
	    }
	    ]
	});

	$('.ourWorker-slider').slick({
		slidesToShow: 3,
		centerMode: true,
		nextArrow: '<div class="slick-arrow slick-next"></div>',
		prevArrow: '<div class="slick-arrow slick-prev"></div>',
		initialSlide: 1,
		speed: 500,
		responsive: [
	    {
	      breakpoint: 769,
	      settings: {
	      	slidesToShow: 2,
	      	centerMode: false,
	      }
	    },
	    {
	      breakpoint: 450,
	      settings: {
	      	slidesToShow: 1,
	      	
	      }
	    }
	    ]
	});

	$(window).scroll(function(){
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

	
	$('.ourWorker-slider').on('setPosition', function () {		      
		$(this).find('.slick-slide').height('auto');		      
		var slickTrack = $(this).find('.slick-track');		      
		var slickTrackHeight = $(slickTrack).height();		      
		$(this).find('.slick-slide').css('height', slickTrackHeight + 'px');		      
	});

	function slowScroll (id) {
		var offset = 0;
		$('html, body').animate ({
			scrollTop: $(id).offset ().top - offset
		}, 500);
		return false;
	}

	$('#nav-service').on('click', function(e){
		e.preventDefault();
		slowScroll('.service');
	});
	$('#nav-workers').on('click', function(e){
		e.preventDefault();
		slowScroll('.jobOpenings');
	});

	if (window.matchMedia("(max-width: 320px)").matches) {
		$('.service .mobile-btn-hidden').on('click', function(){
			$(this).css('display', 'none');
			$('.service-itemsWrapper').addClass('service-itemsWrapper__active');
			
		});

		$('.our-help .mobile-btn-hidden').on('click', function(){
			$(this).css('display', 'none');
			$('.our-help_itemsWrap').addClass('our-help_itemsWrap__active');
		});

		$('.triggersUs-wrap').slick({
			slidesToShow: 1,
			nextArrow: '<div class="slick-arrow slick-next"></div>',
			prevArrow: '<div class="slick-arrow slick-prev"></div>',
		})
	}
});	