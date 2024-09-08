document.addEventListener('DOMContentLoaded', ()=>{

	const burgerElem = document.querySelector('.burger');
	const closeMenuElem = document.querySelector('.mob-menu-close');
	const menuItem = document.querySelector('.mobile-menu-mask');
	const body = document.querySelector('body');
	const mobMenu = document.querySelector('.mobile-menu');

	const closeMobileMenu = () =>{
			menuItem.classList.remove('mobile-menu-mask_active');
			burgerElem.classList.remove('burger-transparent');
			body.classList.remove('body_lock');
	}

	const openMobileMenu = () => {
			menuItem.classList.add('mobile-menu-mask_active');
			burgerElem.classList.add('burger-transparent');
			body.classList.add('body_lock');
	}



	const swiper = new Swiper('.about-slider', {
		// Optional parameters
		
		loop: true,
		autoHeight: true,
		autoplay: {
			delay: 3000
		},

		breakpoints: {
			0: {
				spaceBetween: 20,
				slidesPerView: 1,
			},
			430:{
				spaceBetween: 20,
				slidesPerView: 2,
			},
			660:{
				spaceBetween: 20,
				slidesPerView: 3,
			},

			1050: {
				spaceBetween: 40,
				slidesPerView: 3,
			}

		}


	});
	

		let videoPagSlider = new Swiper('.video-slider__pag', {
			allowTouchMove: false,
			breakpoints: {
				0: {
					slidesPerView: 1,
					direction: "horizontal",
					loop: true,
					noSwiping: true,
				},
				577: {
					slidesPerView: 4,
					direction: "vertical",
					loop: false,
				}
			}
			
		});

		let videoSlider = new Swiper('.video-slider', {
			// Optional parameters
			centeredSlides: true,
			loop: true,
			spaceBetween: 2,
			// Navigation arrows
			navigation: {
				nextEl: '.video-slider-prev',
				prevEl: '.video-slider-next',
			},
			thumbs: {
				swiper: videoPagSlider
			},
			on: {
				init: () => {
					let initSlideVideo = document.querySelector('.swiper-slide-active video');
					initSlideVideo.play();
				},
				slideChangeTransitionEnd: () => {
					let currentSliderVideo = document.querySelector('.swiper-slide-active video');
					let otherSliderVideo   = document.querySelectorAll('.swiper-slide video');
					otherSliderVideo.forEach( item => item.pause());
			
					currentSliderVideo.play();
				}
			},
	
			breakpoints: {
				0: {
					slidesPerView: 1,
					noSwiping: true,
					allowTouchMove: false,
				},
				577: {
					allowTouchMove: true,
				},
				1400: {
					slidesPerView: "auto",
					spaceBetween: 2,
				}
			}
		});
	

	MicroModal.init({
		onShow: () => {

		}
	});


	const arnchorLinks = document.querySelectorAll('a[href*="#"]');

	arnchorLinks.forEach(function(el) {
			el.addEventListener("click", function(e) {
					e.preventDefault();

					
					smoothScroll(this.href.replace(/[^#]*(.*)/, "$1"), 1e3, !0);
					if (this.className === 'mobile-menu_link'){
						closeMobileMenu();
					}
			})
	})

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

	


	burgerElem.onclick = () =>{
		openMobileMenu();
	}
	closeMenuElem.onclick = () =>{
		closeMobileMenu();
	}


});

