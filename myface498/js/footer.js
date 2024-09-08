"use strict";
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this
          , args = arguments
          , callNow = immediate && !timeout;
        clearTimeout(timeout),
        timeout = setTimeout(function() {
            timeout = null,
            immediate || func.apply(context, args)
        }, wait),
        callNow && func.apply(context, args)
    }
}

function initMap() {
    var prevBtnPlace,
				prevPointPlace, 
				contBtnPlace = document.querySelector(".par-place"), 
				contPointPlace = document.querySelector(".container-map"), 
				btnPlace = contBtnPlace.querySelectorAll("[data-place]"), 
				pointPlace = contPointPlace.querySelectorAll("[data-place]"), 
				main = document.querySelector(".map"), 
		adress = {
        "new-york": {
            text: "800 Third Avenue, New York, NY 10022, US"
        },
        warsaw: {
            text: "Business Link Astoria Przeskok 2 00-032"
        },
        berlin: {
            text: "Krausenstraße 9-10, 10117 Berlin"
        },
        singapore: {
            text: "WeWork, 380 Jalan Besar"
        },
        mumbai: {
            text: "Times Square Bldg, 7th 8th, Flr, W.E. Highway, Andheri East"
        },
        ukraine: {
            text: "Освіторія Хаб, вулиця Московська, 2"
        }
    };

		function getCoords(elem) {
			let box = elem.getBoundingClientRect();
		
			return {
				top: box.top + window.pageYOffset,
				right: box.right + window.pageXOffset,
				bottom: box.bottom + window.pageYOffset,
				left: box.left + window.pageXOffset
			};
		}


		function showAdress(pointCord) {
			var adr = adress[pointCord.dataset.place].elem,
				pointCord = pointCord.getBoundingClientRect();
				adr.style.top = pointCord.top - adr.offsetHeight - pointCord.height + "px", 
				adr.style.left = pointCord.left + pointCord.width / 2 + "px", 
				adr.classList.add("show")
		}
    function hideAdress(point) {
        adress[point.dataset.place].elem.classList.remove("show")
    }
    function selectBtnPlace(btn, place) {
        btn ? (btn.classList.add("selected"),
        prevBtnPlace = btn) : place && btnPlace.forEach(function(el) {
            el.dataset.place === place && (el.classList.add("selected"),
            prevBtnPlace = el)
        })
    }
    function unselectBtnPlace(btn, place) {
        btn ? btn.classList.remove("selected") : prevBtnPlace ? (prevBtnPlace.classList.remove("selected"),
        prevBtnPlace = void 0) : place && btnPlace.forEach(function(el) {
            el.dataset.place === place && (el.classList.remove("selected"),
            prevBtnPlace = void 0)
        })
    }
    function selectPoint(point, place) {
        point ? (point.style.fill = "#C420F4",
        showAdress(prevPointPlace = point)) : pointPlace.forEach(function(el) {
            el.dataset.place === place && (el.style.fill = "#C420F4",
            showAdress(prevPointPlace = el))
        })
    }
    function unselectPoint(point, place) {
        point ? (point.style.fill = "#565656",
        hideAdress(point)) : prevPointPlace ? (prevPointPlace.style.fill = "#565656",
        hideAdress(prevPointPlace)) : place && pointPlace.forEach(function(el) {
            el.dataset.place === place && (el.style.fill = "#565656",
            hideAdress(el))
        })
    }
    pointPlace.forEach(function(text) {
        var place, contAddres;
        place = text.dataset.place,
        adress[place] && ((contAddres = document.createElement("div")).className = "hint-address",
        (text = document.createElement("p")).className = "text",
        text.textContent = adress[place].text,
        contAddres.append(text),
        adress[place].elem = contAddres,
        main.append(contAddres))
    }),
    contBtnPlace.addEventListener("mouseover", function(target) {
        target = target.target;
        target.dataset.place && (selectBtnPlace(target),
        selectPoint(null, target.dataset.place))
    }),
    contBtnPlace.addEventListener("mouseout", function(e) {
        e.target.dataset.place && (unselectPoint(),
        unselectBtnPlace())
    }),
    contPointPlace.addEventListener("mouseover", function(target) {
        target = target.target;
        target.dataset.place && (selectBtnPlace(null, target.dataset.place),
        selectPoint(target))
    }),
    contPointPlace.addEventListener("mouseout", function(e) {
        e.target.dataset.place && (unselectPoint(),
        unselectBtnPlace())
    })
}

function initWorkContactForm(formClass) {
  var form = document.querySelector('.' + formClass),
      formBlockResponse = form.querySelector('.form-response');
  var nameInput = ['name', 'email', 'phone', 'comment'];
  var checkInput = {
    name: checkName,
    email: checkEmail,
    phone: checkPhone,
    comment: function comment() {
      return true;
    }
  };

  var CGI_URI = '';
	if(formClass === 'map__form'){
		CGI_URI = '/api/send.php';
	}
	if(formClass === 'modal__form'){
		CGI_URI = '/api/sendhr.php';
	}

  nameInput.forEach(function (name) {
    form.elements[name].addEventListener('change', function () {
      hideInputError(this);
    });
  });

  function showErrorInput(input, text) {
    var wrapperInput = input.parentElement;
    wrapperInput.setAttribute('data-error', text);
    wrapperInput.classList.add('error');
  }

  function hideInputError(input) {
    var wrapperInput = input.parentElement;
    wrapperInput.classList.remove('error');
  }

  function checkName(input) {
    var value = input.value;

    if (value.length > 50 || value.length < 2) {
      showErrorInput(input, 'min. number of characters 2 max. number of characters 50');
      return false;
    } else if (!/^[a-z ,.'-]{2,50}$/i.test()) {
      showErrorInput(input, 'invalid characters are present');
      return false;
    }

    return true;
  }

  function checkEmail(input) {
    var value = input.value;
    var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!reg.test(value)) {
      showErrorInput(input, 'incorrect email address');
      return false;
    }

    return true;
  }

  function checkPhone(input) {
    var value = input.value;
    var reg = /^\+?\d{1,3}[ -]?\(?\d{3}\)?[ -]?\d{3}[ -]?\d{2}[ -]?\d{2}$/;

    if (!reg.test(value)) {
      showErrorInput(input, 'format phone number should be for example +1 (900) 600 60 60');
      return false;
    }

    return true;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var error = false;
    nameInput.forEach(function (name) {
      var input = form.elements[name];

      if (!checkInput[name](input)) {
        error = true;
      }
    });

    function showResponse(text) {
      formBlockResponse.textContent = text;
      form.classList.add('hide-interface');
      setTimeout(function () {
        form.classList.remove('hide-interface');
      }, 4000);
    }

    if (!error) {
      var data = new FormData(form);
      fetch(CGI_URI, {
        'method': 'POST',
        'body': data
      }).then(function (response) {
				ym(74566999,'reachGoal','Form_Submit_get_started');
        return response.json();
      }).then(function (response) {
        if (response.error) {
          showResponse('Sorry, there was an error. Try it again');
        } else {
          try {
            dataLayer.push({
              'event': 'Form_Submit_get_started'
            });
          } catch (error) {
            console.error(error);
          }

          showResponse('Your request has been successfully sent! The manager will contact you within 30 minutes, please wait.');
        }
      }).catch(function (error) {
        showResponse('Sorry, there was an error. Try it again');
        console.error(error);
      });
    }
  });

}



window.addEventListener("load", function() {
		initWorkContactForm('map__form'),
		initWorkContactForm('modal__form'),
    initMap()
});
