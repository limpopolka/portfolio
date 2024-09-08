$(document).ready(function(){


	$('.benefit').on('click', '.benefit-nav__item' ,function(){
		$('.benefit .benefit-nav__item').removeClass('benefit-nav__item--active');
		$(this).addClass('benefit-nav__item--active');

		var linkId = $(this).attr('data-link-id');
		
		$('.benefit-item__wrapper').removeClass('benefit-item__wrapper--active');
		$("#" + linkId).addClass('benefit-item__wrapper--active');
	});

	$('.companies').on('click', '.benefit-nav__item' ,function(){
		$('.companies .benefit-nav__item').removeClass('benefit-nav__item--active');
		$(this).addClass('benefit-nav__item--active');

		var linkId = $(this).attr('data-link-id');
		
		$('.companies-sliders-wrapper').removeClass('companies-sliders-wrapper--acrive');
		$(".companies-sliders-wrapper[data-link-id="+linkId+"]").addClass('companies-sliders-wrapper--acrive');
		$(".companies-sliders-wrapper[data-link-id="+linkId+"]").find('.companies-slider').slick('refresh');
	});



	$('.call-back__slider').slick({
		slidesToShow: 1,
		nextArrow: $('.call-back .slick-next'),
		prevArrow: $('.call-back .slick-prev'),
	});

	$('.main-slider__left').slick({
		slidesToShow: 1,
		dots: true,
		arrows: false,
		dotsClass: 'dots',
		fade: true,
		asNavFor: '.main-slider__right'
	})

	$('.main-slider__right').slick({
		slidesToShow: 1,
		arrows: false,
		fade: true,
		asNavFor: '.main-slider__left',
	});

	$('.main-form__wrapper, footer, .big-form').on('focus', '.input', function(){
		$(this).parent('.input-container').addClass('input-container--active');
	});

	$('.main-form__wrapper, footer, .big-form').on('focusout', '.input', function(){

		if ($(this).val().length == 0) {
			$(this).parent('.input-container').removeClass('input-container--active');
		}
			
	});

			function windowSize(){
		    if ($(window).width() <= '576'){
		       $('.footer-bottom__nav-head').on('click', function(e){
		       	e.preventDefault();

		       	$('.footer-bottom__nav-head').removeClass('footer-bottom__nav-head--active');
		       	$(this).addClass('footer-bottom__nav-head--active');

		       	$('.footer-bottom__nav-link__wrap').not($(this).next('.footer-bottom__nav-link__wrap')).slideUp(300);
		       	$(this).next('.footer-bottom__nav-link__wrap').slideDown(300);
		       	$(this).next('.footer-bottom__nav-link__wrap').addClass();
		       })

		    } else {
		        
		    }
		}
		
		$(window).on('load resize',windowSize);

		$('.menu-burger').on('click', function(){
			$('.close-menu-burger').addClass('close-menu-burger--active');
			$('.mobile-menu').addClass('mobile-menu--active');
			$('.menu-burger').addClass('menu-burger--hidden');
		});

		$('.close-menu-burger').on('click', function(){
			$('.close-menu-burger').removeClass('close-menu-burger--active');
			$('.mobile-menu').removeClass('mobile-menu--active');
			$('.menu-burger').removeClass('menu-burger--hidden');
		});

		$('.companies-slider').slick({
			slidesToShow: 6,
			nextArrow: $('.companies .slick-next'),
			prevArrow: $('.companies .slick-prev'),
				responsive: [
			    {
			      breakpoint: 1215,
			      settings: {
			        slidesToShow: 5,
			      }
			    },	
			    {
			      breakpoint: 1099,
			      settings: {
			        slidesToShow: 4,
			      }
			    },
			    {
			      breakpoint: 736,
			      settings: {
			        slidesToShow: 3,
			      }
			    },
			    {
			      breakpoint: 584,
			      settings: {
			        slidesToShow: 2,
			      }
			    },
			]
		})

		$('#big-form__select').styler();


		$('#search-open').on('click', function(){
			$('.mask-search').addClass('mask--active');
			$('body').addClass('body-active')
		});

		$('.mask-search__close').on('click', function(){
			$('.mask-search').removeClass('mask--active');
			$('body').removeClass('body-active')
		});

		$('#service-mask-open').on('click', function(e){
			e.preventDefault();
			$('.service-mask').addClass('mask--active');
			$('body').addClass('body-active')
		})

		$('.service-mask .close-mask-wrapper').on('click', function(){
			$('.service-mask').removeClass('mask--active');
			$('body').removeClass('body-active')

		});


		$('.level-3-parent .service-mask-menu__link2').one('click', function(e){
			e.preventDefault();
			$(this).next('.level-3').slideDown();
			$(this).addClass('service-mask-menu__link2--active');
		});
		$('.level-2-parent .service-mask-menu__link1').one('click', function(e){
			e.preventDefault();
			$('.level-2').fadeOut();
			$(this).next('.level-2').fadeIn();

		});
});	
