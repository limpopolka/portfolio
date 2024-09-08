$(document).ready(function(){

	$('.foot-form-wrap').on('focus', '.input', function(){
		$(this).parent('.wrap-input').addClass('wrap-input--active');
	});

	$('.foot-form-wrap').on('focusout', '.input', function(){

		if ($(this).val().length == 0) {
			$(this).parent('.wrap-input').removeClass('wrap-input--active');
		}
			
	});

	$('.header__search-btn').on('click', function(){
		$('.mask-search').addClass('mask--active');
	});

	$('.close-search-mask').on('click', function(){
		$('.mask-search').removeClass('mask--active');
	});


});	

