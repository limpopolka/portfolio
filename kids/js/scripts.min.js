$(document).ready(function(){



	var burger = $('.top-menu__item-burger'),
		menu = $('#menu'),
		cartBtn = $('.top-menu__item-shop'),
		miniCart = $('#mini-cart'),
		lkBtn = $('.top-menu__item-lk'),
		lk = $('#lk'),
		searchBtn = $('.top-menu__item-search'),
		search = $('#search'),

		modileSidebarOpenBtn = $('.mobile-sidebar-open'),
		modileSidebarCloseBtn = $('.mobile-sidebar-close');




	$('#fullpage').fullpage({
		scrollHorizontally: true,
		navigation: true,
	});


	function sidebarInit (trigger, sidebarType){

		trigger.on('click', function(){
			$('.mask').addClass('mask-active');

			setTimeout(function(){
				sidebarType.addClass('hidden-sidebar--active');	
			}, 200);
		});


		$('.close-sidebar').on('click', function(){
			sidebarType.removeClass('hidden-sidebar--active');

			setTimeout(function(){
				$('.mask').removeClass('mask-active');
			}, 200)
		});

	}


	function mobileLeftSidebarInit(){
		modileSidebarOpenBtn.on('click', function(){
			
			$('.mask').addClass('mask-active');

			setTimeout(function(){
				$('.sidebar').addClass('sidebar-active');
			}, 200)
		});

		modileSidebarCloseBtn.on('click', function(){
			$('.sidebar').removeClass('sidebar-active');
			setTimeout(function(){
				$('.mask').removeClass('mask-active');
			}, 200)
		})

	}

	sidebarInit(burger, menu);
	sidebarInit(cartBtn, miniCart);
	sidebarInit(lkBtn, lk);
	sidebarInit(searchBtn, search);

	
	mobileLeftSidebarInit();

});	
