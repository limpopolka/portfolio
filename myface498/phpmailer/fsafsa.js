"use strict";

function _typeof(obj) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
    })(obj)
}

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments,
            callNow = immediate && !timeout;
        clearTimeout(timeout), timeout = setTimeout(function() {
            timeout = null, immediate || func.apply(context, args)
        }, wait), callNow && func.apply(context, args)
    }
}

function throttle(func, ms) {
    var savedArgs, savedThis, isThrottled = !1;

    function wrapper() {
        if (isThrottled) return savedArgs = arguments, void(savedThis = this);
        func.apply(this, arguments), isThrottled = !0, setTimeout(function() {
            isThrottled = !1, savedArgs && (wrapper.apply(savedThis, savedArgs), savedArgs = savedThis = null)
        }, ms)
    }
    return wrapper
}

function isVisibleOnWindow(target) {
    var options = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
            extraDistanceRelativeHeight: 0,
            extraDistance: 0,
            visible: "partial",
            visibleBy: "y"
        },
        targetMetric = target.getBoundingClientRect(),
        extDistance = 0;
    if ("full" === options.visible) {
        if (targetMetric.width <= window.innerWidth && targetMetric.height <= window.innerHeight) {
            if (targetMetric.bottom <= window.innerHeight && 0 <= targetMetric.top && targetMetric.right <= window.innerWidth && 0 <= targetMetric.left) return !0
        } else if (targetMetric.top < 0 && targetMetric.bottom > window.innerHeight && targetMetric.left < 0 && targetMetric.right > window.innerWidth) return !0
    } else if ("partial" === options.visible) {
        switch (options.extraDistanceRelativeHeight) {
            case "full":
                extDistance = targetMetric.height;
                break;
            case "half":
                extDistance = targetMetric.height / 2;
                break;
            default:
                if ("number" == typeof options.extraDistanceRelativeHeight) {
                    extDistance = targetMetric.height * options.extraDistanceRelativeHeight;
                    break
                }
                "number" == typeof options.extraDistance && (extDistance = options.extraDistance)
        }
        if ("x" === options.visibleBy) {
            if (targetMetric.left + extDistance <= window.innerWidth && 0 <= targetMetric.left || 0 <= targetMetric.right - extDistance && targetMetric.right <= window.innerWidth || targetMetric.left < 0 && targetMetric.right > window.innerWidth) return !0
        } else if ("y" === options.visibleBy && (targetMetric.top + extDistance <= window.innerHeight && 0 <= targetMetric.top || 0 <= targetMetric.bottom - extDistance && targetMetric.bottom <= window.innerHeight || targetMetric.top < 0 && targetMetric.bottom > window.innerHeight)) return !0
    }
    return !1
}

function smoothScroll(selector, dur, anchor) {
    var duration = dur || 1e3,
        startingYPoint = window.pageYOffset,
        targetPosition = ("string" == typeof selector ? document.querySelector(selector) : selector).getBoundingClientRect().top,
        startTime = performance.now();
    window.requestAnimationFrame(function scroll(progress) {
        var timeFraction = (progress - startTime) / duration,
            progress = (progress = timeFraction = 1 < timeFraction ? 1 : timeFraction) < .5 ? 2 * progress * progress : (4 - 2 * progress) * progress - 1;
        window.scrollTo(0, startingYPoint + targetPosition * progress), timeFraction < 1 ? window.requestAnimationFrame(scroll) : anchor && (window.location.hash = selector)
    })
}

function randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min))
}

function genericHeart(elem) {
    for (var option = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
            count: 0,
            duration: [1e3, 3e3]
        }, count = option.count || 20, duration = option.duration || [1e3, 3e3], color = ["blue", "pink"], blur = ["", "blur"], coordElem = elem.getBoundingClientRect(), bottomVisible = window.innerHeight > coordElem.bottom, main = document.querySelector("body > main"), i = 1; i <= count; i++) ! function() {
        var contHeart = document.createElement("div");
        contHeart.className = "gen-bubble ".concat(color[randomInteger(0, 1)], " ").concat(blur[randomInteger(0, 1)]);
        var sizeC = coordElem.width / (1.5 * count) * (randomInteger(0, 1) + .75);
        contHeart.style.width = "".concat(sizeC, "px"), contHeart.style.height = "".concat(sizeC, "px"), contHeart.style.top = "".concat(bottomVisible ? coordElem.bottom - randomInteger(0, Math.round(.33 * coordElem.height)) : coordElem.top + randomInteger(0, 20), "px");
        var left = coordElem.left + (coordElem.width - randomInteger(0, Math.round(coordElem.width)));
        left > coordElem.left + coordElem.width - sizeC && (left -= sizeC), contHeart.style.left = "".concat(left, "px"), contHeart.insertAdjacentHTML("beforeend", '<svg style="width: 55%;" viewBox="0 0 53 47" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#heart"></use></svg>'), main.append(contHeart), anime({
            targets: contHeart,
            translateY: "-300%",
            opacity: 0,
            duration: randomInteger(duration[0], duration[1]),
            easing: "linear",
            complete: function() {
                contHeart.remove()
            }
        })
    }()
}

function initWorkNavigation() {
    var html = document.documentElement,
        header = html.querySelector("main .header"),
        btnShowMobileNav = header.querySelector(".btn-show-nav"),
        headerAnchorLinks = header.querySelectorAll('[href^="#"]:not(.header__btn-start)'),
        pageAnchorLinks = document.querySelectorAll(".btn-anchor");

    function toggleMobileNav() {
        header.classList.toggle("active-nav"), header.classList.contains("active-nav") ? (btnShowMobileNav.classList.add("active"), html.style.overflowY = "hidden", html.style.overflowX = "hidden") : (btnShowMobileNav.classList.remove("active"), html.style.overflowY = "", html.style.overflowX = "")
    }
    btnShowMobileNav.addEventListener("click", function() {
        toggleMobileNav()
    }), headerAnchorLinks.forEach(function(el) {
        el.addEventListener("click", function(e) {
            e.preventDefault(), window.innerWidth <= 1024 && toggleMobileNav(), smoothScroll(this.href.replace(/[^#]*(.*)/, "$1"), 1e3, !0)
        })
    }), pageAnchorLinks.forEach(function(el) {
        el.addEventListener("click", function(e) {
            e.preventDefault(), el.classList.contains("header__btn-start") && header.classList.contains("active-nav") && toggleMobileNav();
            var hash = this.href.replace(/[^#]*(.*)/, "$1");
            if ("#CONTACT_US" === hash) try {
                dataLayer.push({
                    event: "Button_Click_get_started"
                })
            } catch (error) {
                console.error(error)
            }
            genericHeart(this, {
                duration: [1e3, 1500]
            }), setTimeout(function() {
                smoothScroll(hash, 1e3, !0)
            }, 1e3)
        })
    })
}

function initSliderSmartphone() {
    var cheakPositionForHeart, section2 = document.querySelector("main > .section-2");

    function switchSlide(info) {
        info.index !== info.indexCached && sliderItems[info.indexCached].firstElementChild.classList.remove("active"), sliderItems[info.index].firstElementChild.classList.add("active")
    }
    section2.getBoundingClientRect().bottom >= window.innerHeight && (cheakPositionForHeart = throttle(function() {
        section2.getBoundingClientRect().bottom <= window.innerHeight && (genericHeart(section2, {
            count: 30
        }), window.removeEventListener("scroll", cheakPositionForHeart))
    }, 50), window.addEventListener("scroll", cheakPositionForHeart));
    for (var sliderItems = (check = tns({
            container: ".slider-smartphone",
            items: 2,
            gutter: 36,
            speed: 600,
            swipeAngle: 30,
            center: !0,
            loop: !1,
            mouseDrag: !0,
            controls: !1,
            nav: !1,
            preventScrollOnTouch: "auto",
            responsive: {
                480: {
                    items: 3
                },
                1024: {
                    items: 4,
                    gutter: 45
                },
                1422: {
                    disable: !0
                }
            }
        })).getInfo().slideItems, i = 0; i < sliderItems.length; i++) ! function(video) {
        sliderItems[video].setAttribute("data-index", video);
        var content = sliderItems[video].firstElementChild;
        content.addEventListener("mouseenter", function(e) {
            1422 <= window.innerWidth && content.classList.add("active")
        }), content.addEventListener("mouseleave", function(e) {
            1422 <= window.innerWidth && content.classList.remove("active")
        });
        video = content.querySelector("video");
        video && (video.addEventListener("playing", function(e) {
            content.classList.remove("load")
        }), video.addEventListener("waiting", function(e) {
            content.classList.add("load")
        }))
    }(i);
    check.events.on("indexChanged", function(info) {
        switchSlide(info)
    }), check.events.on("newBreakpointStart", function(info) {
        switchSlide(info)
    }), window.innerWidth < 1422 && check.goTo(2);
    var pause, sliderVideo = document.querySelectorAll(".slider-smartphone video"),
        sliderContainer = document.querySelector(".slider-smartphone"),
        check = throttle((pause = !0, function() {
            isVisibleOnWindow(sliderContainer) ? pause && (sliderVideo.forEach(function(video) {
                video.play()
            }), pause = !1) : pause || (sliderVideo.forEach(function(video) {
                video.pause()
            }), pause = !0)
        }), 50);
    window.addEventListener("scroll", check), check()
}

function initAnimRowsLogo() {
    var wrapperLogoRows = document.querySelector(".cont-partners__tape"),
        rows = document.querySelectorAll(".cont-partners__tape .row"),
        arrayAnimObj = [],
        animPlay = !1,
        prevY = 0,
        reverse = !1;

    function checkScroll() {
        isVisibleOnWindow(wrapperLogoRows) ? (animPlay || (arrayAnimObj.forEach(function(anim) {
            var seek = anim.currentTime;
            anim.play(), 0 === anim.currentTime && (anim.pause(), anim.seek(seek), anim.play())
        }), animPlay = !0), prevY > window.pageYOffset && !reverse ? (arrayAnimObj.forEach(function(anim) {
            anim.reverse()
        }), reverse = !0) : prevY < window.pageYOffset && reverse && (arrayAnimObj.forEach(function(anim) {
            anim.reverse()
        }), reverse = !1), prevY = window.pageYOffset) : animPlay && (arrayAnimObj.forEach(function(anim) {
            anim.pause()
        }), animPlay = !1)
    }
    rows.forEach(function(animObj, index) {
        var dur;
        switch (index) {
            case 1:
                dur = 55e3;
                break;
            case 2:
                dur = 45e3;
                break;
            default:
                dur = 7e4
        }(animObj = anime({
            targets: animObj,
            translateX: [0, "-100%"],
            duration: dur,
            easing: "linear",
            loop: !0,
            autoplay: !1
        })).seek(animObj.duration * (anime.random(0, 100) / 100)), arrayAnimObj.push(animObj)
    }), checkScroll(), window.addEventListener("scroll", throttle(checkScroll, 16.6666))
}

function initSliderCGI() {
    var interval, index, section4 = document.querySelector("main > .section-4"),
        sliderNavWrapper = section4.querySelector(".slider-nav-wrapper"),
        sliderContainer = section4.querySelector(".slider-contaner"),
        navItems = sliderNavWrapper.querySelectorAll(".item"),
        video = document.querySelectorAll(".section-4 .cont-video-slide .slide"),
        text = document.querySelectorAll(".section-4 .slider-text .cont-text"),
        maxIndex = navItems.length - 1;

    function select(videoDuration) {
        var newIndex;
        if ("number" == typeof index && function(ind) {
                navItems[ind].classList.remove("active"), navItems[ind].__prline.style.transition = "", video[ind].pause(), video[ind].classList.remove("active"), video[ind].currentTime = 0, text[ind].classList.remove("active")
            }(index), "object" === _typeof(this)) {
            if (1 === (newIndex = +this.dataset.index)) try {
                dataLayer.push({
                    event: "Button_Click_3d_characters"
                })
            } catch (error) {
                console.error(error)
            }
        } else newIndex = videoDuration;
        navItems[newIndex].classList.add("active");
        videoDuration = video[newIndex].duration;
        navItems[newIndex].__prline.style.transition = "".concat(videoDuration, "s linear"), clearTimeout(interval), interval = setTimeout(function() {
            var newIndex = index + 1;
            select(newIndex = maxIndex < newIndex ? 0 : newIndex)
        }, 1e3 * videoDuration), video[newIndex].play(), video[newIndex].classList.add("active"), text[newIndex].classList.add("active"), index = newIndex
    }
    navItems.forEach(function(el, index) {
        el.setAttribute("data-index", index), el.__prline = el.querySelector(".progress-line"), el.addEventListener("click", select)
    });
    var start = throttle(function() {
        isVisibleOnWindow(section4, {
            visible: "partial",
            visibleBy: "y",
            extraDistanceRelativeHeight: .4
        }) && (select(0), window.removeEventListener("scroll", start))
    }, 50);
    window.addEventListener("scroll", start), start(), window.addEventListener("resize", debounce(function() {
        distanceToSwitch = window.innerWidth / 8
    }), 100);
    var x1 = null,
        y1 = null,
        distanceToSwitch = window.innerWidth / 8,
        touchStart = !1;
    sliderContainer.addEventListener("touchstart", function(e) {
        x1 = e.touches[0].clientX, y1 = e.touches[0].clientY, touchStart = !0
    }), sliderContainer.addEventListener("touchmove", function(yDiff) {
        var newIndex, xDiff = yDiff.touches[0].clientX,
            yDiff = yDiff.touches[0].clientY,
            xDiff = xDiff - x1,
            yDiff = yDiff - y1;
        Math.abs(xDiff) > Math.abs(yDiff) && touchStart && (distanceToSwitch < xDiff ? (select(newIndex = (newIndex = index - 1) < 0 ? maxIndex : newIndex), touchStart = !1) : xDiff < -1 * distanceToSwitch && (select(newIndex = maxIndex < (newIndex = index + 1) ? 0 : newIndex), touchStart = !1))
    })
}

function initSection6() {
    var sliderContainer = document.querySelector(".section-6 .wrapper-slider"),
        video = sliderContainer.querySelectorAll("video");
    video.forEach(function(el, index) {
        el.parentElement.classList.add("load"), el.addEventListener("waiting", function(e) {
            e.target.parentElement.classList.add("load")
        }), el.addEventListener("playing", function(e) {
            e.target.parentElement.classList.remove("load")
        })
    });
    var pause, checkScroll = throttle((pause = !0, function() {
        isVisibleOnWindow(sliderContainer) ? pause && (video.forEach(function(el) {
            el.play()
        }), pause = !1) : pause || (video.forEach(function(el) {
            el.pause()
        }), pause = !0)
    }), 50);
    window.addEventListener("scroll", checkScroll), checkScroll()
}

function initMap() {
    var prevBtnPlace, prevPointPlace, contBtnPlace = document.querySelector(".section-7 .par-place"),
        contPointPlace = document.querySelector(".section-7 .container-map"),
        btnPlace = contBtnPlace.querySelectorAll("[data-place]"),
        pointPlace = contPointPlace.querySelectorAll("[data-place]"),
        main = document.querySelector("body > main"),
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

    function showAdress(pointCord) {
        var adr = adress[pointCord.dataset.place].elem,
            pointCord = pointCord.getBoundingClientRect();
        adr.style.top = pointCord.top - adr.offsetHeight - pointCord.height + "px", adr.style.left = pointCord.left + pointCord.width / 2 + "px", adr.classList.add("show")
    }

    function hideAdress(point) {
        adress[point.dataset.place].elem.classList.remove("show")
    }

    function selectBtnPlace(btn, place) {
        btn ? (btn.classList.add("selected"), prevBtnPlace = btn) : place && btnPlace.forEach(function(el) {
            el.dataset.place === place && (el.classList.add("selected"), prevBtnPlace = el)
        })
    }

    function unselectBtnPlace(btn, place) {
        btn ? btn.classList.remove("selected") : prevBtnPlace ? (prevBtnPlace.classList.remove("selected"), prevBtnPlace = void 0) : place && btnPlace.forEach(function(el) {
            el.dataset.place === place && (el.classList.remove("selected"), prevBtnPlace = void 0)
        })
    }

    function selectPoint(point, place) {
        point ? (point.style.fill = "#4DBFFF", showAdress(prevPointPlace = point)) : pointPlace.forEach(function(el) {
            el.dataset.place === place && (el.style.fill = "#4DBFFF", showAdress(prevPointPlace = el))
        })
    }

    function unselectPoint(point, place) {
        point ? (point.style.fill = "#565656", hideAdress(point)) : prevPointPlace ? (prevPointPlace.style.fill = "#565656", hideAdress(prevPointPlace)) : place && pointPlace.forEach(function(el) {
            el.dataset.place === place && (el.style.fill = "#565656", hideAdress(el))
        })
    }
    pointPlace.forEach(function(text) {
        var place, contAddres;
        place = text.dataset.place, adress[place] && ((contAddres = document.createElement("div")).className = "hint-address", (text = document.createElement("p")).className = "text", text.textContent = adress[place].text, contAddres.append(text), adress[place].elem = contAddres, main.append(contAddres))
    }), contBtnPlace.addEventListener("mouseover", function(target) {
        target = target.target;
        target.dataset.place && (selectBtnPlace(target), selectPoint(null, target.dataset.place))
    }), contBtnPlace.addEventListener("mouseout", function(e) {
        e.target.dataset.place && (unselectPoint(), unselectBtnPlace())
    }), contPointPlace.addEventListener("mouseover", function(target) {
        target = target.target;
        target.dataset.place && (selectBtnPlace(null, target.dataset.place), selectPoint(target))
    }), contPointPlace.addEventListener("mouseout", function(e) {
        e.target.dataset.place && (unselectPoint(), unselectBtnPlace())
    })
}

function initWorkContactForm() {
    var form = document.querySelector(".contact-form"),
        formBlockResponse = form.querySelector(".form-response"),
        nameInput = ["name", "email", "phone", "comment"],
        checkInput = {
            name: function(input) {
                var value = input.value; {
                    if (50 < value.length || value.length < 2) return showErrorInput(input, "min. number of characters 2 max. number of characters 50"), !1;
                    if (!/^[a-z ,.'-]{2,50}$/i.test()) return showErrorInput(input, "invalid characters are present"), !1
                }
                return !0
            },
            email: function(input) {
                var value = input.value;
                return !!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) || (showErrorInput(input, "incorrect email address"), !1)
            },
            phone: function(input) {
                var value = input.value;
                return !!/^\+?\d{1,3}[ -]?\(?\d{3}\)?[ -]?\d{3}[ -]?\d{2}[ -]?\d{2}$/.test(value) || (showErrorInput(input, "format phone number should be for example +1 (900) 600 60 60"), !1)
            },
            comment: function() {
                return !0
            }
        };

    function showErrorInput(wrapperInput, text) {
        wrapperInput = wrapperInput.parentElement;
        wrapperInput.setAttribute("data-error", text), wrapperInput.classList.add("error")
    }
    nameInput.forEach(function(name) {
        form.elements[name].addEventListener("change", function() {
            this.parentElement.classList.remove("error")
        })
    }), form.addEventListener("submit", function(data) {
        data.preventDefault();
        var error = !1;

        function showResponse(text) {
            formBlockResponse.textContent = text, form.classList.add("hide-interface"), setTimeout(function() {
                form.classList.remove("hide-interface")
            }, 4e3)
        }
        nameInput.forEach(function(name) {
            var input = form.elements[name];
            checkInput[name](input) || (error = !0)
        }), error || (data = new FormData(form), fetch("/api/contact.php", {
            method: "POST",
            body: data
        }).then(function(response) {
            return response.json()
        }).then(function(response) {
            if (response.error) showResponse("Sorry, there was an error. Try it again");
            else {
                try {
                    dataLayer.push({
                        event: "Form_Submit_get_started"
                    })
                } catch (error) {
                    console.error(error)
                }
                showResponse("Your request has been successfully sent! The manager will contact you within 30 minutes, please wait.")
            }
        }).catch(function(error) {
            showResponse("Sorry, there was an error. Try it again"), console.error(error)
        }))
    }), form.querySelector("button").addEventListener("click", function() {
        genericHeart(this)
    })
}
initWorkNavigation(), initSliderSmartphone(), initAnimRowsLogo(), initWorkContactForm(), window.addEventListener("load", function() {
    initSliderCGI(), initSection6(), initMap()
});