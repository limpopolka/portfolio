$(document).ready(function(){

	function slowScroll (id) {
		var offset = 0;
		$('html, body').animate ({
			scrollTop: $(id).offset ().top - offset
		}, 500);
		return false;
	}
	
	
	$('.menu a').on('click', function(e){
		e.preventDefault();
		let id = $(this).attr('id');
		slowScroll('.' + id);
	});

	$('.btn__call').on('click', function(e){
		e.preventDefault();
		slowScroll('.contact');
	});

});	

