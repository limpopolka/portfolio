$(document).ready(function(){
	$('.mainScreen-slider').slick({
		slidesToShow: 1,
		dots: true,
		dotsClass: 'dots',
		prevArrow: '<div class="slickArrow slickPrev"></div>',
		nextArrow: '<div class="slickArrow slickNext"></div>'
	});

	

	$('.internetSlider-wrapper').slick({
		slidesToShow: 4,
		dots: true,
		dotsClass: 'dots',
		arrows: false,
		responsive: [

		{
	      breakpoint: 1099,
	      settings: {
	        slidesToShow: 3,
	      }
	    },

	    {
	      breakpoint: 929,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    

	    {
	      breakpoint: 632,
	      settings: {
	        slidesToShow: 1,
	      }
	    },

	    ]
	});

	

	$('.sale-slider').slick({
		slidesToShow: 4,
		dots: true,
		dotsClass: 'dots',
		arrows: false,
		infinite: false,
		responsive: [
		{
	      breakpoint: 1099,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
		{
	      breakpoint: 632,
	      settings: {
	        slidesToShow: 1,
	      }
	    },
	    ]
	});


	$('.ourOffer-slider').slick({
		slidesToShow: 2,
		dots: true,
		dotsClass: 'dots',
		arrows: false,
		responsive: [
		{
	      breakpoint: 1099,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 646,
	      settings: {
	        slidesToShow: 1,
	      }
	    },
	    ]
	}).on('setPosition', function (event, slick) {
   	 slick.$slides.css('height', slick.$slideTrack.height() + 'px');
	});
	$('.our-partners-slider').slick({
		slidesToShow: 4,
		dots: true,
		dotsClass: 'dots',
		arrows: false,
		responsive: [
		{
	      breakpoint: 1092,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 586,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 442,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
	    ]
	});

	$('.equipment-slider').slick({
		slidesToShow: 2,
		dots: true,
		dotsClass: 'dots',
		arrows: false,
		responsive: [
		{
	      breakpoint: 1206,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
	    ]
	});

	 $('.equipment-slider').on('setPosition', function () {		      
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

	$('.scrollTop').on('click', function(){
		slowScroll('header');
	});

	
	//формат даты для всех нормальных браузеров
	var deadline = "2019-11-22 00:00:00";


	var isIE = !(window.ActiveXObject) && "ActiveXObject" in window;
	var isSafari = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

	if (isIE || isSafari) {
		//формат даты курильщика (IE11)
		deadline = deadline.replace(/\-/g, '/');
		console.log(deadline);
	}


	
	$('#countdown').downCount({
		date: deadline,
	},
	function(){
	   /* действие после завершения таймера */
	   alert("Время истекло!");
	});

	$('#countdown2').downCount({
		date: deadline,
	},
	function(){
	   /* действие после завершения таймера */
	   alert("Время истекло!");
	});

	$('#countdown3').downCount({
		date: deadline,
	},
	function(){
	   /* действие после завершения таймера */
	   alert("Время истекло!");
	});

	$('#countdown4').downCount({
		date: deadline,
	},
	function(){
	   /* действие после завершения таймера */
	   alert("Время истекло!");
	});

	$('#countdown5').downCount({
		date: deadline,
	},
	function(){
	   /* действие после завершения таймера */
	   alert("Время истекло!");
	});



	$('.menu__action').on('click', function(){


		$('.menu-mask').toggleClass('menu-mask_active');
	});

	$('.menu-close').on('click', function(){
		$('.menu-mask').removeClass('menu-mask_active');
	});	

	$('.mobile-menu__action').on('click', function(){
		$('.mobile-menu_mask').toggleClass('mobile-menu_mask__active');
	});

	$('.mobile-menu--item_action').on('click', function(){
		$(this).next(".menu-tab").slideToggle('slow');
		$(this).toggleClass('mobile-menu--item-afterRotate');
	});

	$('.dots li').empty();



	


	$('.custom-select_current-value, .custom-select_option').on('click', function(){
		$('.wrapper-options').toggleClass('wrapper-options_active')
	});
	$('.custom-select_option').on('click', function(){
		var dataValue = $(this).html();
		$('.custom-select_current-value').html(dataValue);
	});

	$('.tasks-show-more').on('click', function(e){
		e.preventDefault();
		$('.wrapper-tasks-items').addClass('wrapper-tasks-items__active');
		$('.tasks-show-more').addClass('tasks-show-more__hidden');
	});


	$('.mainScreen-form .btn').on('click', function(e){
		e.preventDefault();

		$(this).parent('form').html('<div class="cart-header">Спасибо!</div>Ваш запрос успешно отправлен. <br/> Мы свяжемся с вами в ближайшее время<div></div>')

	});
});	