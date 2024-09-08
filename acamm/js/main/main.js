$(document).ready(function(){
	$('.main-slider').slick({
		slidesToShow: 1,
		infinite: true,
		dots: true,
		autoplay: true,
 		autoplaySpeed: 3000,
		pauseOnFocus: false,
		pauseOnHover: false,
	})

	

	$('.main-slider').on('afterChange', function(){
		fillingLine();
	});

	function fillingLine(){
		let allLine = document.querySelectorAll('.main-slider .slick-dots li');
		allLine.forEach(function(item){
			let itemLine = item.querySelector('i');
			if(itemLine){
				itemLine.remove();
			}
			
		})
		let currentLine = document.querySelector('.main-slider li.slick-active');
		let accentLine = document.createElement('i');
		currentLine.appendChild(accentLine);
		
		let accentLineWidth = 0;

		
		let interval =	setInterval(function(){
				accentLineWidth += 1;
				accentLine.style.width = accentLineWidth + '%';
				if(accentLineWidth >= 100){
					clearInterval(interval);
				}

			}, 30)
		

	}

	function interviewNext(){
		let allbtnNext = document.querySelectorAll('.next-interview');
		allbtnNext.forEach(item => {
			item.addEventListener('click',function(e){
				let parent = item.closest('.interview__item');
				let nextItem = parent.nextElementSibling;
				
				if(nextItem){
					nextItem.classList.add('interview__item--active');
					parent.classList.remove('interview__item--active');
				}
			})
		})
	}
	function interviewPrev(){
		let allbtnPrev = document.querySelectorAll('.interview__arrow');
		allbtnPrev.forEach(item => {
			item.addEventListener('click',function(e){
				let parent = item.closest('.interview__item');
				let prevItem = parent.previousElementSibling;
				if(prevItem){
					prevItem.classList.add('interview__item--active');
					parent.classList.remove('interview__item--active');
				}
			})
		})
	}

	function interviewTabs(){
		let allTabs = document.querySelectorAll('.interview__tabs-item');
		let allInterview = document.querySelectorAll('.interview__item');

		allTabs.forEach(item =>{
			item.addEventListener('click', function(){
				let tabDataId = item.getAttribute('data-id');
				allInterview.forEach(interviewItem =>{
					let interviewItemDataId = interviewItem.getAttribute('data-id');
					if(tabDataId == interviewItemDataId){
						interviewItem.classList.add('interview__item--active');
					}else{
						interviewItem.classList.remove('interview__item--active');
					}
				})
			})
		})

	}

	interviewNext();
	interviewPrev();
	interviewTabs();
	fillingLine();

});