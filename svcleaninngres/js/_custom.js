$(document).ready(function(){

	var containerWidth = $('header .container').width();
	$('.header-search input').css('width', containerWidth * .7);

	$(window).resize(function(){
		containerWidth = $('header .container').width();
		$('.header-search input').css('width', containerWidth * .7);
		
	})

	$('.service-price_tabs .service-price_tabs-item').on('click', function(){
		var idTable = $(this).attr('data-table-id');
		$('.custom_table').removeClass('custom_table--active');
		$('.custom_table[data-table-id=' + idTable + ']').addClass('custom_table--active');
		$('.service-price_tabs .service-price_tabs-item').removeClass('service-price_tabs-item--active');
		$(this).addClass('service-price_tabs-item--active');
	});

	$('.asset .slider-tabs_item').on('click', function(){
		$('.asset .slider-tabs_item').removeClass('slider-tabs_item--active');
		$(this).addClass('slider-tabs_item--active');
	});

	$('.sert .slider-tabs_item').on('click', function(){
		$('.sert .slider-tabs_item').removeClass('slider-tabs_item--active');
		$(this).addClass('slider-tabs_item--active');
	});


	$('.close-search').on('click', function(){
		$('.header-search').removeClass('search-btn--active');
	});

	$('.search-btn').on('click', function(e){
		e.preventDefault();
		$(this).parent().addClass('search-btn--active');
	})
	$('.service-nav_item-parent-1').on('click', function(e){
		e.preventDefault();
		$(this).next('.service-nav_lev-2').addClass('service-nav_block-menu-active');
	})

	$('.service-nav_item-parent-2').on('click', function(e){
		e.preventDefault();
		$(this).next('.service-nav_lev-3').addClass('service-nav_block-menu-active');
	})

	$('.close-service-nav').on('click', function(){
		$(this).parent().removeClass('service-nav_block-menu-active');
	});

	$('.mobile_menu-btn').on('click', function(){
		$('.service-nav').addClass('service-nav--active');
	});


	
	$('.sert-slider').slick({
		slidesToShow: 5, 
		responsive: [
		    {
		      breakpoint: 1042,
		      settings: {
		        slidesToShow: 4,
		      }
		    },
		     {
		      breakpoint: 856,
		      settings: {
		        slidesToShow: 3,
		      }
		    },
		     {
		      breakpoint: 744,
		      settings: {
		        slidesToShow: 2,
		      }
		    },
		     {
		      breakpoint: 554,
		      settings: {
		        slidesToShow: 1,
		      }
		    },
		   ]
	});

	$('.asset-slider').slick({
		slidesToShow: 2, 
		adaptiveHeight: true,
		responsive: [
		    {
		      breakpoint: 916,
		      settings: {
		        slidesToShow: 1,
		        adaptiveHeight: true
		      }
		    }
		    ]
	});
	if (window.matchMedia("(max-width: 580px)").matches) {
		$('.custom_table-row-item-mob-short').text('Ед. изм.')
	}else{
			$('.custom_table-row-item-mob-short').text('Ед. измерения')
		}
	
	$(window).resize(function(){
		if (window.matchMedia("(max-width: 580px)").matches) {
			$('.custom_table-row-item-mob-short').text('Ед. изм.')
		}else{
			$('.custom_table-row-item-mob-short').text('Ед. измерения')
		}
	});


	//формат даты для всех нормальных браузеров
	var deadline = "2021-04-22 00:00:00";

	var isIE = !(window.ActiveXObject) && "ActiveXObject" in window;
	var isSafari = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

	if (isIE || isSafari) {
		//формат даты курильщика (IE11)
		deadline = deadline.replace(/\-/g, '/');
	}

	$('#countdown').downCount({
		date: deadline,
	},
	function(){
	   /* действие после завершения таймера */
	});


});	

