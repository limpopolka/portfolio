document.addEventListener('DOMContentLoaded', function() {

	function slowScroll (id, padding) {
		let offset = padding;
		$('html, body').animate ({
			scrollTop: $(id).offset ().top - offset
		}, 100);
		return false;
}

// Решаем проблему с кликом по центру
$.fn.setCursorPosition = function(pos) {
  if ($(this).get(0).setSelectionRange) {
    $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    var range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
};

	$('.phone_mask').on('click', function(){
		$(this).setCursorPosition(3);
	}).mask("+7(999) 999-9999");
	$(".phone_mask").mask("+7(999)999-99-99");

	$('.mobile-filters-btn').on('click', function(){
		if($('.page-content__filter--mob-hidden').hasClass('page-content__filter--mob-hidden--active')){
			$('.page-content__filter--mob-hidden').removeClass('page-content__filter--mob-hidden--active');
			$('.page-content__filter--mob-hidden').show();
			slowScroll('.mobile-filters-btn', 148);
			$(this).text('Скрыть фильтр');
		}else{
			$('.page-content__filter--mob-hidden').addClass('page-content__filter--mob-hidden--active');
			$('.page-content__filter--mob-hidden').hide();
			slowScroll('.mobile-filters-btn', 148);
			$(this).text('Показать фильтр');
		}
	});

	$('#main-select').styler();
	$('#filter-select').styler();
	$('#male').styler();
	$('.ask-item__text').hide();

	$('.burger').on('click', function(){
		$('.mob-menu-wrap').toggleClass('mob-menu-wrap--active');
		$('body').toggleClass('body--active');
		$('.wrapper-mask').toggleClass('wrapper-mask--active');
	});

	// $('.main-screen__triggers-item[data-src="#modal__spec"]').on('click', (e)=>{
	// 	const fancybox = new Fancybox([
	// 		{
	// 			src: "#modal__spec",
	// 			type: "inline",
	// 		},
	// 	]);
		
	// 	fancybox.on("done", (fancybox, slide) => {
	// 		new SimpleBar(document.getElementById('scrollbar'));
	// 	});
	// });

	// Fancybox.bind("[data-fancybox=#modal__study]", {
	// 	on: {
	// 		load: (fancybox, slide) => {
	// 			console.log(`#${slide.index} slide is loaded!`);
	// 			console.log(
	// 				`This slide is selected: ${fancybox.getSlide().index === slide.index}`
	// 			);
	// 		},
	// 	},
	// });

	Fancybox.bind("[data-fancybox]", {
		// Your options go here
		on : {
      done : (fancybox) => {
				if(document.getElementById('scrollbar')){
					new SimpleBar(document.getElementById('scrollbar'));
				}
				if(document.getElementById('scrollbar2')){
					new SimpleBar(document.getElementById('scrollbar2'));
				}

				if(document.getElementById('scrollbar3')){
					new SimpleBar(document.getElementById('scrollbar3'));
				}
      }
    }
	});




	$(window).scroll(() => {
		let = scrollWindow = $(document).scrollTop();
		let = headerTopWidth = $('.header-top').height();
		let = headerBottomHeight = $('.header-bottom').height();


		if(scrollWindow >= headerTopWidth && $(window).width() > 768){
			$('header .header-bottom').addClass('header-bottom--fixed');
			$('body').css('marginTop', '104px');

		}else{
			$('header .header-bottom').removeClass('header-bottom--fixed');
			$('body').css('marginTop', '0px');
		}

	});

	$('.mob-menu-bottom-nav__item-2lvl > .mob-menu-bottom-nav__link').on('click', function(e){
		if(!$(this).parent('.mob-menu-bottom-nav__item-2lvl').hasClass('mob-menu-bottom-nav__item-2lvl--active')){
			e.preventDefault();
			$('.mob-menu-bottom-nav__item-2lvl').removeClass('mob-menu-bottom-nav__item-2lvl--active');
			$($(this).parent('.mob-menu-bottom-nav__item-2lvl').addClass('mob-menu-bottom-nav__item-2lvl--active'));
			$('.mob-menu-bottom-nav__drop').hide(300);
			$(this).next('.mob-menu-bottom-nav__drop').show(300);
		} 
	})
	
	function noUiInit(sliderId){
		let startSlider = document.getElementById('' + sliderId);

		if ( startSlider ){
			noUiSlider.create(startSlider, {
				start: [0, 500],
				tooltips: true,
				connect: true,
		
		
				range: {
						'min': [0],
						'max': [500],    
						},
						
				});
		}else{

		}
	
	}

	noUiInit('filter-price1');
	noUiInit('filter-price2');
	


	//  var marginMin = document.getElementById('slider-margin-value-min'),
  //   marginMax = document.getElementById('slider-margin-value-max');

	// 	startSlider.noUiSlider.on('update', function (values, handle) {
	// 		if (handle) {
	// 				marginMax.innerHTML = values[handle];
	// 		} else {
	// 				marginMin.innerHTML = values[handle];
	// 		}
	// });


	$('.page-content__filter__item-noui')
   $('.ask-head').on('click', function(){
       if($(this).parent('.ask-item').hasClass('ask-item__active')){
           $(this).next().hide(300);
           $(this).parent('.ask-item').removeClass('ask-item__active');
       }else{
        $('.ask-item').removeClass('ask-item__active');
        $('.ask-item__text').hide(300);
        $(this).parent('.ask-item').addClass('ask-item__active').children('.ask-item__text').show(300);
       }
   });



});