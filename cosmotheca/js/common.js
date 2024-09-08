$(document).ready(function(){

	function slowScroll (id) {
			var offset = 0;
			$('html, body').animate ({
				scrollTop: $(id).offset ().top - offset
			}, 100);
			return false;
	}
	$('.scroll-top').on('click', function(){
		slowScroll('.wrapper');
	})
	$('.goods-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: false,
  	autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1441,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 942,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 577,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});

	$('.main-blog__items-container').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: false,
  	autoplaySpeed: 2000,
		arrows: false,
		dots: true,
		responsive: [
			{
				breakpoint: 942,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 577,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	})

	$('.main__good-slider').slick({
		slidesToShow: 1,
		dots: true,
		autoplay: false,
  	autoplaySpeed: 2000,
	});

	let initServiceSlider = function(){
		$('.service-container').slick({
			slidesToShow: 1,
			dots: true,
			arrows: false
		})
	}

	$('.main__slider').slick({
		slidesToShow: 1,
		arrows: false,
		dots: true,
		autoplay: false,
  	autoplaySpeed: 2000,
	})

	function activeTabs(){
		
			$('.footer__menu-item .footer__head').on('click', function(){
				if ($(window).width() <= 710){
					if($(this).hasClass('footer__head-opened')){
						$(this).next('.footer__menu-item-content').hide(300);
						$(this).removeClass('footer__head-opened');
					}else{
						$('.footer__menu-item .footer__head').removeClass('footer__head-opened');
						$('.footer__menu-item-content').hide(300);
						$(this).next('.footer__menu-item-content').show(300);
						$(this).addClass('footer__head-opened');
					}
				}
			})
		
	}

	$('.filters-sidebar__item-name').on('click', function(){
		$(this).parent('.filters-sidebar__item').toggleClass('filters-sidebar__item--active');
	})


	activeTabs();
	
	$('.burg').on('click', function(){
		$(this).toggleClass('burg--active');
	})
	$('.sidebar__burger').on('click', function(){
		
		$('.sidebar-bottom').toggleClass('sidebar__bottom--active')
	})

	$('#open-filters').on('click', function(){
		$('.filters-sidebar').addClass('filters-sidebar--active');
		$('body').addClass('body-hidden');
	})

	$('.filters-sidebar__close').on('click', function(){
		$('.filters-sidebar').removeClass('filters-sidebar--active');
		$('body').removeClass('body-hidden');
	})

	$('.shops__item').on('click', function(){
		$('.shops__item').removeClass('shops__item--active');
		$(this).addClass('shops__item--active');
	})

	$('.good__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		asNavFor: '.good__slider-nav',

	})
	$('.good__slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.good__slider',
		focusOnSelect: true,
		
	})

	$('.goods-line__slider').slick({
		slidesToShow: 5,
		autoplay: false,
  	autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 976,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 577,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 376,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	})

	$('.good__tabs-head').on('click', function(){
		$(this).parent('.good__tabs-item').toggleClass('good__tabs-item--active');
	
	})


	// Автоматически заполняем строку с рейтингом
	let raitRows = document.querySelectorAll('.rait-row');
	let raitRewiews = document.querySelectorAll('.rait-row-right');

	let countRewiews = 0;

	raitRewiews.forEach((item) => {
		countRewiews += Number(item.innerHTML);
		
	})

	raitRows.forEach((item) => {
		let currentCountRewiews = Number(item.querySelector('.rait-row-right').innerHTML)
		let accentLine = item.querySelector('.rait-row-line--accent');
		accentLine.style.width = currentCountRewiews / countRewiews * 100 + '%';
	})

	

	$('.mobile-menu__item-parent > .mobile-menu__item .mobile-menu__link').one('click', function(e){
		e.preventDefault();
		$(this).parents('.mobile-menu__item-parent').addClass('mobile-menu__item-parent--active')
		$(this).parents('.mobile-menu__item-parent').children('.mobile-menu__drop').show(300)
	});

	$('.mob-menu--action').on('click', function(){
		$('body').toggleClass('body-hidden');
		$('.mobile-menu-wrap').toggleClass('mobile-menu-wrap--active');
		$('.mask').toggleClass('mask--active');
	})

	const ratings = document.querySelectorAll('.goods__rating');

       
	if(ratings.length > 0){
			initRatings();
	}

	
	function initRatings(){
			
			let ratingActive, ratingValue;

			for (let index = 0; index < ratings.length; index++){
					const rating = ratings[index];
					initRating(rating);
			}


			function initRating(rating){
					initRatingVars(rating);
					setRatingActiveWidth();
					setRating(rating);
			}

			function initRatingVars(rating){
					ratingActive = rating.querySelector('.goods__rating-active')
					ratingValue  = rating.querySelector('.goods__rating-value')

			}

			function setRatingActiveWidth(index = ratingValue.innerHTML){
					const ratingActiveWidth = index / 0.05;
					ratingActive.style.width = `${ratingActiveWidth}%`;

			}

			function setRating(rating){
					const ratingItems = rating.querySelectorAll('.goods__rating-item');

					for (let index = 0; index < ratingItems.length; index++){
							const ratingItem = ratingItems[index];
							ratingItem.addEventListener("mouseenter", function(){
									initRatingVars(rating);
									setRatingActiveWidth(ratingItem.value);
							})

							ratingItem.addEventListener("mouseleave", function(){
									setRatingActiveWidth();
							});

							ratingItem.addEventListener('click', function(){
									initRatingVars(rating);

									ratingValue.innerHTML = index + 1;
									setRatingActiveWidth();
							});

					}


			}
	}

	$('.btn-open-modal').on('click', function(e){
		e.preventDefault();
		let btnAttr = $(this).attr('data-modal');
		$('body').addClass('body-hidden');
		$('#' + btnAttr).addClass('modal--active');
	})

	$('.modal-close').on('click', function(){
		$(this).parents('.modal--active').removeClass('modal--active');
		$('body').removeClass('body-hidden');
	})
})