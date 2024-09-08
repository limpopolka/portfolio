$(document).ready(function() {
	const speedAnimation = 300;
  $('.slider').slick({
    dots: false,
    infinite: false,
    speed: speedAnimation,
    slidesToShow: 5,
    slidesToScroll: 1,
		swipe: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      { 
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.slider .slide').on('click', function() {
		if($(window).width() >= 480){
			$('.locked-elem').addClass('locked-elem--active');
			$('.slider .slide').removeClass('locked');
			$(this).toggleClass('locked');
			let currentElem = $(this).clone(true).removeClass('slide slick-slide slick-active');
			let posX = $(this).offset().left;
			let posY = $(this).offset().top;
			$('.locked-elem').empty();
			$('.locked-elem').append(currentElem);
			$('.locked-elem').css({
				'left': `${posX}px`,
				'top': `${posY}px`
			});
		}
  });

	let directionNum = 0;
	// $('.slider').on('afterChange', function(event, slick, direction){
	// 	if(direction > directionNum){
	// 		let lockedSlide = $('.slide.locked');
	// 		lockedSlide.next().after(lockedSlide);
	// 		directionNum = direction;

	// 	}
	
	// 	if(direction < directionNum){
	// 		let lockedSlide = $('.slide.locked');
	// 		lockedSlide.prev().before(lockedSlide);
	// 		directionNum = direction;
	// 	}
	// });

	$('.slick-next').on('click', function(){
		setTimeout(()=>{
			let lockedSlide = $('.slide.locked');
			lockedSlide.next().after(lockedSlide);
			directionNum = direction;
		}, 100)
		
	});
	$('.slick-prev').on('click', function(){
		setTimeout(()=>{
			let lockedSlide = $('.slide.locked');
	 		lockedSlide.prev().before(lockedSlide);
	 		directionNum = direction;
		}, speedAnimation / 3)
		
	});
	$('.locked-elem').on('click', function(){
		if($(this).hasClass('locked-elem--active')){
			$(this).empty();
			$(this).removeClass('locked-elem--active')
		}
	});

	$(window).resize(function(){
		$('.locked-elem').removeClass('locked-elem--active')
		$('.slider .slide').removeClass('locked')
	});
});
