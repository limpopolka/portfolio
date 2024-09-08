$(document).ready(function(){
	function setSelectionRange(input, selectionStart, selectionEnd) {
		if (input.setSelectionRange) {
			input.focus();
			input.setSelectionRange(selectionStart, selectionEnd);
		}
		else if (input.createTextRange) {
			var range = input.createTextRange();
			range.collapse(true);
			range.moveEnd('character', selectionEnd);
			range.moveStart('character', selectionStart);
			range.select();
		}
	}
	 
	function setCaretToPos (input, pos) {
		setSelectionRange(input, pos, pos);
	}
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

	$('#scroll-form').on('click', function(e){
		e.preventDefault();
		smoothScroll(this.href.replace(/[^#]*(.*)/, "$1"), 1e3, !0);
	})
	
	$('.tabs__item').on('click', function(){
		let id = $(this).attr('data-id');
		$('.tabs__item').removeClass('tabs__item_active');
		$(this).addClass('tabs__item_active');


		$('.dropdown__item').removeClass('dropdown__item_active');
		$('.dropdown__item[data-id='+id+']').addClass('dropdown__item_active');
	})

	$('.wrapper').css('paddingTop', $('.header').height() + 'px');

	$(window).resize(function(e){
		$('.wrapper').css('paddingTop', $('.header').height() + 'px');
	});

	$('.radio-wrap-opros').on('click', function(){
		if($("#radio-tab").is(':checked')){
				$('.opros').css('display', 'none');
				$('.callback').css('display', 'block');
		}else{
			$('.opros').css('display', 'block');
			$('.callback').css('display', 'none');
		}
	});

	$('.tel').inputmask({"mask": "+7(999) 999-9999"}, { placeholder: "+7 (___) ___ __ __" });
	$('.tel').on('input', function() {
					let val = $(this).val();
					console.log(val);
					if(val == '+7(8__) ___-____'){
						$(this).val('+7(__) ___-____');
						setCaretToPos(document.querySelector(".tel"), 3);
					}
				

	});

	//email mask
  $('.input-mail').inputmask({
    mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
    greedy: false,
    onBeforePaste: function (pastedValue, opts) {
      pastedValue = pastedValue.toLowerCase();
      return pastedValue.replace("mailto:", "");
    },
    definitions: {
      '*': {
        validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
        casing: "lower"
      }
    }
  });

});
