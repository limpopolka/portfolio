$(document).ready(function(){

	function smoothScroll(selector, dur, anchor) {
		var duration = dur || 1e3, 
		startingYPoint = window.pageYOffset, 
		targetPosition = ("string" == typeof selector ? document.querySelector(selector) : selector).getBoundingClientRect().top,
		startTime = performance.now();
		window.requestAnimationFrame(function scroll(progress) {
				var timeFraction = (progress - startTime) / duration, 
				progress = (progress = timeFraction = 1 < timeFraction ? 1 : timeFraction) < .5 ? 2 * progress * progress : (4 - 2 * progress) * progress - 1;
				window.scrollTo(0, startingYPoint + targetPosition * progress),
				timeFraction < 1 ? window.requestAnimationFrame(scroll) : anchor && (window.location.hash = selector)
		})
	}
	$('#scroll-form').on('click', function(e){
		e.preventDefault();
		smoothScroll(this.href.replace(/[^#]*(.*)/, "$1"), 1e3, !0);
	})
	
	$('.tabs__item').on('click', function(){
		let id = $(this).attr('data-id');
		$('.tabs__item').removeClass('tabs__item_active');
		$(this).addClass('tabs__item_active');


		$('.dropdown__item').removeClass('dropdown__item_active');
		$('.dropdown__item[data-id='+id+']').addClass('dropdown__item_active');
	})

	$(window).scroll(function(e){
		let scrollTop = $(window).scrollTop()


		if(scrollTop > 300){
			$('.header').addClass('header-fixed');
			$('.wrapper').css('paddingTop', $('.header').height() + 'px');
		}else{
			$('.header').removeClass('header-fixed');
			$('.wrapper').css('paddingTop', 0 + 'px');
		}
	});

	$('.radio-wrap-opros').on('click', function(){
		if($("#radio-tab").is(':checked')){
				$('.opros').css('display', 'none');
				$('.callback').css('display', 'block');
		}else{
			$('.opros').css('display', 'block');
			$('.callback').css('display', 'none');
		}
	});

});
