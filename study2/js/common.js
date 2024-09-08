document.addEventListener('DOMContentLoaded', function() {

	$('.select, .page__content__right-select, .form__right__item select').styler({
		'selectSmartPositioning': false,
		
	});

	$('.tabs-select').styler({
		'selectSmartPositioning': false,
		'selectVisibleOptions': 0
	})

	// $('.jq-selectbox__dropdown ul').each(function(index, element){
	// 	new SimpleBar(element, {
	// 		autoHide: false
	// 	})
	// });

	$('.modal-open').on('click', function(){
		let attr =	$(this).attr('modal-src');
		$('#' + attr).addClass('modal-active');
	})

	$('.filters-mask-close, .modal-filter-close').on('click', function(){
		$(this).parents('.modal').removeClass('modal-active');
	});
	$('.burger').on('click', ()=>{
		$('.mobile-menu-wrap').toggleClass('mobile-menu-wrap--active');
		$('body').toggleClass('body--active')
	})


	$('.mobile_filter__item').on('click', function(){
		let parentItem = $(this).parents('.filters-mask-content');
		parentItem.children('.mobile_filter__item').removeClass('mobile_filter__item--active');
		$(this).addClass('mobile_filter__item--active');

	});



});