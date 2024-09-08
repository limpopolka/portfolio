$(document).ready(function() {



function initFancyBox(slide){
		//инициализируем галерею ДО запуска слайдера
	var gallery = $(slide);
	//при клике на ссылку в слайде запускаем галерею
	$(slide).on('click', function(e) {
	  e.preventDefault();
	  //узнаём индекс слайда без учёта клонов
	  var totalSlides = +$(this).parents('.slider').slick("getSlick").slideCount,
	      dataIndex = +$(this).parents('.slide').data('slick-index'),
	      trueIndex;
	  switch(true){
	    case (dataIndex<0):
	      trueIndex = totalSlides+dataIndex; break;
	    case (dataIndex>=totalSlides):
	      trueIndex = dataIndex%totalSlides; break;
	    default: 
	      trueIndex = dataIndex;
	  }  
	  //вызывается элемент галереи, соответствующий индексу слайда
	  $.fancybox.open(gallery,{}, trueIndex);
	  return false;
	});
}



	initFancyBox('.section_slider-1 .section_slider-item');
	initFancyBox('.section_slider-2 .section_slider-item');
	initFancyBox('.section_slider-3 .section_slider-item');
	$('.section_slider').slick();
	$('.plan-slider').slick({
		slidesToShow: 4,
	});

	function slowScroll (id) {
	    var offset = 0;
	    $('html, body').animate ({
	      scrollTop: $(id).offset ().top - offset
	    }, 500);
	    return false;
  }

  $('.header-top nav a').on('click', function(e){
  	e.preventDefault();
  	let scrollId = $(this).attr('data-scroll'); 
  	slowScroll(scrollId);
  });

});