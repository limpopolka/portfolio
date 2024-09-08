$(document).ready(function(){

	function slowScroll (id) {
	    var offset = 0;
	    $('html, body').animate ({
	      scrollTop: $(id).offset ().top - offset
	    }, 500);
	    return false;
	}

	$('.scrollTop').on('click', function(){
		slowScroll('.wrapper');
	});

	$('.main-slider').slick({
		slidesToShow: 1,
		dots: true,
		nextArrow: '<div class="slick-arrow slick-next"></div>',
		prevArrow: '<div class="slick-arrow slick-prev"></div>',
		dotsClass: 'dots',
		responsive: [
	    {
	      breakpoint: 624,
	      settings: {
	      	arrows: false
	      }
	    }
	    ]
	});

	$('.good-slider').slick({
		slidesToShow: 4,
		prevArrow: '<div class="slickArrow slickPrev"></div>',
		nextArrow: '<div class="slickArrow slickNext"></div>',
		responsive: [
	    {
	      breakpoint: 1039,
	      settings: {
	      	slidesToShow: 3
	      }
	    },
	    {
	    	breakpoint: 1039,
		   	 settings: {
		   	 	slidesToShow: 3
		   	 }
	    },
	    {
	    	breakpoint: 730,
		   	 settings: {
		   	 	slidesToShow: 2
		   	 }
	    },
	    {
	    	breakpoint: 556,
		   	 settings: {
		   	 	slidesToShow: 1
		   	 }
	    }
	    ]
	});
	$('.triggers-slider').slick({
		 	slidesToShow: 4,
		 	prevArrow: '<div class="slickArrow slickPrev"></div>',
			nextArrow: '<div class="slickArrow slickNext"></div>',
			responsive: [
			{
			  breakpoint: 930,
			  settings: {
			  	slidesToShow: 3
			  }
			},
			{
			  breakpoint: 700,
			  settings: {
			  	slidesToShow: 2
			  }
			},
			{
			  breakpoint: 444,
			  settings: {
			  	slidesToShow: 1
			  }
			},
			]
		 })

	$('.good-slider, .triggers-slider').on('setPosition', function () {		      
		$(this).find('.slick-slide').height('auto');		      
		var slickTrack = $(this).find('.slick-track');		      
		var slickTrackHeight = $(slickTrack).height();		      
		$(this).find('.slick-slide').css('height', slickTrackHeight + 'px');		      
	});
	$('.partner-slider').slick({
		slidesToShow: 5,
		prevArrow: '<div class="slickArrow slickPrev"></div>',
		nextArrow: '<div class="slickArrow slickNext"></div>',
		responsive: [
	    {
	      breakpoint: 1072,
	      settings: {
	      	slidesToShow: 4
	      }
	    },

	    {
	      breakpoint: 888,
	      settings: {
	      	slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 678,
	      settings: {
	      	slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 472,
	      settings: {
	      	slidesToShow: 1
	      }
	    },

	    ]
	});

	$('.header-bottom__catalog-button, .header-bottom_catalogMenu, .catalogMenu__item-more--menu').hover(function(){
		$('.header-bottom_catalogMenu').addClass('header-bottom_catalogMenu__active');
	},
	function(){
		$('.header-bottom_catalogMenu').removeClass('header-bottom_catalogMenu__active');
	}
	);

	$('.catalogMenu__item-more, .catalogMenu__item-more--menu, .catalogMenu__item-more--menu-item').hover(function(){
		var catId = $(this).attr('data-cat-id');
		$('.catalogMenu__item-more--menu').addClass('catalogMenu__item-more--menu-item__active');
		$('.catalogMenu__item-more--menu-item[data-cat-id='+catId+']').addClass('catalogMenu__item-more--menu-item__active');

	},
	function(){
		var catId = $(this).attr('data-cat-id');
		$('.catalogMenu__item-more--menu').removeClass('catalogMenu__item-more--menu-item__active');
		$('.catalogMenu__item-more--menu-item[data-cat-id='+catId+']').removeClass('catalogMenu__item-more--menu-item__active');
	}
	)




	
	$('.header-bottom__catalog-button').on('click', function(){
		if (window.matchMedia("(max-width: 1097px)").matches) {
			$('.mobile-catalog-mask').addClass('mobile-catalog-mask__active');
			$('.mobile-catalog').addClass('mobile-catalog__active');
		} 
	});
	

	

		$('.header-top__search').on('click', function(){
			if (window.matchMedia("(max-width: 977px)").matches) {
				$(this).addClass('header-top__search-active');
				$('.header-top_item').addClass('haeder-item_hidden');
			}
		});
	 


	

	$('.mobile-catalog-item__link').on('click', function(){
		$(this).next(".mobile-catalog-item-moreLink").slideToggle(300);
	});

	

	$('.mobile-catalog-close').on('click', function(){
		$('.mobile-catalog-mask').removeClass('mobile-catalog-mask__active');
		$('.mobile-catalog').removeClass('mobile-catalog__active');
	});

	

});	