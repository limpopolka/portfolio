$(document).ready(function(){
	$('.burger').on('click', function(){
		$('.mob-menu').toggleClass('mob-menu--active')
	});

	$('label[data-id="all-place"]').on('click', function(){
		$('#all-place').prop('checked', true);
		$('#one-place').prop('checked', false);
		$('.table__checkbox').removeClass('table__checkbox-all-not');
	});

	$('label[data-id="one-place"]').on('click', function(){
		$('#all-place').prop('checked', false);
		$('#one-place').prop('checked', true);
		
		$('.table__checkbox').addClass('table__checkbox-all-not');
	});

	$('.table__checkbox__custom').on('click', function(){
		if($('#all-place').prop('checked')){
			$('#all-place').prop('checked', false);
			$('#one-place').prop('checked', true);
			$('.table__checkbox').addClass('table__checkbox-all-not');
		}else{
				$('#all-place').prop('checked', true);
			$('#one-place').prop('checked', false);
			$('.table__checkbox').removeClass('table__checkbox-all-not');
		}
	})



	$('.main-slider-container').slick({
		slidesToShow: 1,
		autoplay: true,
		responsive: [{
			breakpoint: 601,
			settings: {
				arrows: false,
				dots: true

			}
		}]
	});


	function slowScroll (id) {
		var offset = 0;
		$('html, body').animate ({
			scrollTop: $(id).offset ().top - offset
		}, 500);
		return false;
	}

	$('.scroll-top').on('click', function(){
		slowScroll('.wrapper');
	});


	$('.competitor__add').on('click', function(){
		let countItem = $('.competitor__item').length + 1;
		$('.competitor__item-wrap').append('<div class="competitor__item"><div class="competitor__item-num">Участник '+ countItem +'</div><div class="input-row"><div class="wrapper-input"> <label for="">Имя *</label> <input type="text" class="input" required></div><div class="wrapper-input"> <label for="">Телефон участника </label> <input placeholder="+ 7 (___) ___ - __ - __" required type="text" class="input"></div></div></div>');	
	});

	 $.fancybox.open( $('.sale-popup'), {
    	 	touch: false
   	});


});	
