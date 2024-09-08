$(document).ready(function(){

	function slowScroll (id) {
	    var offset = 0;
	    $('html, body').animate ({
	      scrollTop: $(id).offset ().top - offset
	    }, 500);
	    return false;
	  }

	 $('#about-company').on('click', function(event){
	  	event.preventDefault();
	  	slowScroll('.about_us');
	 });
	 $('#calc').on('click', function(event){
	  	event.preventDefault();
	  	slowScroll('.wrapper-main_calk');
	 });
	 $('#develery').on('click', function(event){
	  	event.preventDefault();
	  	slowScroll('.wrapper-main_calk');
	 });

	 $('#material').on('click', function(event){
	  	event.preventDefault();
	  	slowScroll('.our_offers');
	 })


	$('#contacts').on('click', function(event){
		event.preventDefault();
	  	slowScroll('.wrapper-contacts');
	});
	$('.wrapper-burger').on('click', function(){
		$(this).toggleClass('wrapper-burger-active');
		$('.mobile-menu_wrapper').toggleClass('mobile-menu_wrapper-active');
		$('.wrapper').toggleClass('wrapper-active');
	});



	$('.slider').slick({
		nextArrow: "<span class = 'nextArrow'></span>",
		prevArrow: "<span class = 'prevArrow'></span>",
		dots: true,
	});

	$('.slick-dots li button').text("");

	 $('.admin-slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.admin-slider',
	  focusOnSelect: true
	});

	$('.select-text').on('click',function(){
		$('.select-options').toggleClass('select-options-active');
	});




});