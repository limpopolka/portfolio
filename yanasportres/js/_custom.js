$(document).ready(function(){

	 function slowScroll (id) {
	    var offset = 0;
	    $('html, body').animate ({
	      scrollTop: $(id).offset ().top - offset
	    }, 500);
	    return false;
	  }
	$('.brands-slider').slick({
		slidesToShow: 4,
		infinite: false,
		dots: true,
		dotsClass: 'dots'
	})

	$('.main-slider').slick({
		arrows: false,
		dots: true,
		dotsClass: 'dots',
		
	})

	$('.bottom-form').on('focus', '.bottom-input', function(){
		$(this).parent('.wrapper-input').addClass('wrapper-input--active');
	});

	$('.bottom-form').on('focusout', '.bottom-input', function(){

		if ($(this).val().length == 0) {
			$(this).parent('.wrapper-input').removeClass('wrapper-input--active');
		}
			
	});

	$('.scroll-top').on('click', function(){
		slowScroll('header');
	});

});	

