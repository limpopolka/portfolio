document.addEventListener('DOMContentLoaded', (event) => {
  Fancybox.bind('[data-fancybox]', {
    // Your custom options
  })
  const burger = document.querySelector('.burger')
  const mobMenu = document.querySelector('.mobile-menu')
  const body = document.querySelector('body')
  const header = document.querySelector('.header')

  const catalogSelects = document.querySelectorAll('.good .select')
  if (catalogSelects) {
    catalogSelects.forEach((select) => {
      select.addEventListener('click', () => {
        select.classList.toggle('active')
      })
    })
  }

  if (burger) {
    burger.addEventListener('click', () => {
      mobMenu.classList.toggle('mobile-menu--active')
      burger.classList.toggle('burger--active')
      body.classList.toggle('hidden')
      mobMenu.style.top = header.clientHeight + 'px'
      mobMenu.style.height = window.screen.height - header.clientHeight + 'px'
      mobMenu.style.width = window.screen.width + 'px'
    })
  }

  const checkboxes = document.querySelectorAll('.form .polit')

  if (checkboxes) {
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', (event) => {
        let submitForm = checkbox.closest('.form').querySelector('.form-send')
        if (event.currentTarget.checked) {
          submitForm.removeAttribute('disabled')
        } else {
          submitForm.setAttribute('disabled', 'disabled')
        }
      })
    })
  }

  const catalogBtn = document.querySelector('.opan-catalog')
  const openFilter = document.querySelector('.open-filter')
  const sidebarCatalog = document.querySelector('.sidebar__categories')
  const sidebarFilter = document.querySelector('.sidebar-filters')

  if (catalogBtn) {
    catalogBtn.addEventListener('click', () => {
      sidebarCatalog.classList.toggle('active')
      sidebarFilter.classList.remove('active')
    })
  }

  if (openFilter) {
    openFilter.addEventListener('click', () => {
      sidebarFilter.classList.toggle('active')
      sidebarCatalog.classList.remove('active')
    })
  }

  const mainSlider = new Swiper('.main-slider', {
    loop: true,
    autoHeight: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  const reviewSlider = new Swiper('.review__slider', {
    loop: true,
    autoHeight: true,
    slidesPerView: 3,
    spaceBetween: 80,
    navigation: {
      nextEl: '.slider-next',
      prevEl: '.slider-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 3,
      },
    },
  })

  class ItcAccordion {
    constructor(target, config) {
      this._el = typeof target === 'string' ? document.querySelector(target) : target
      const defaultConfig = {
        alwaysOpen: true,
        duration: 350,
      }
      this._config = Object.assign(defaultConfig, config)
      this.addEventListener()
    }
    addEventListener() {
      this._el.addEventListener('click', (e) => {
        const elHeader = e.target.closest('.accordion__header')
        if (!elHeader) {
          return
        }
        if (!this._config.alwaysOpen) {
          const elOpenItem = this._el.querySelector('.accordion__item_show')
          if (elOpenItem) {
            elOpenItem !== elHeader.parentElement ? this.toggle(elOpenItem) : null
          }
        }
        this.toggle(elHeader.parentElement)
      })
    }
    show(el) {
      const elBody = el.querySelector('.accordion__body')
      if (elBody.classList.contains('collapsing') || el.classList.contains('accordion__item_show')) {
        return
      }
      elBody.style['display'] = 'block'
      const height = elBody.offsetHeight
      elBody.style['height'] = 0
      elBody.style['overflow'] = 'hidden'
      elBody.style['transition'] = `height ${this._config.duration}ms ease`
      elBody.classList.add('collapsing')
      el.classList.add('accordion__item_slidedown')
      elBody.offsetHeight
      elBody.style['height'] = `${height}px`
      window.setTimeout(() => {
        elBody.classList.remove('collapsing')
        el.classList.remove('accordion__item_slidedown')
        elBody.classList.add('collapse')
        el.classList.add('accordion__item_show')
        elBody.style['display'] = ''
        elBody.style['height'] = ''
        elBody.style['transition'] = ''
        elBody.style['overflow'] = ''
      }, this._config.duration)
    }
    hide(el) {
      const elBody = el.querySelector('.accordion__body')
      if (elBody.classList.contains('collapsing') || !el.classList.contains('accordion__item_show')) {
        return
      }
      elBody.style['height'] = `${elBody.offsetHeight}px`
      elBody.offsetHeight
      elBody.style['display'] = 'block'
      elBody.style['height'] = 0
      elBody.style['overflow'] = 'hidden'
      elBody.style['transition'] = `height ${this._config.duration}ms ease`
      elBody.classList.remove('collapse')
      el.classList.remove('accordion__item_show')
      elBody.classList.add('collapsing')
      window.setTimeout(() => {
        elBody.classList.remove('collapsing')
        elBody.classList.add('collapse')
        elBody.style['display'] = ''
        elBody.style['height'] = ''
        elBody.style['transition'] = ''
        elBody.style['overflow'] = ''
      }, this._config.duration)
    }
    toggle(el) {
      el.classList.contains('accordion__item_show') ? this.hide(el) : this.show(el)
    }
  }

  let accordion = document.querySelector('.accordion')
  if (accordion) {
    new ItcAccordion(accordion, {
      alwaysOpen: false,
    })
  }

  function interviewNext() {
    let allbtnNext = document.querySelectorAll('.interview__item-btn[data-nav=next]')
    allbtnNext.forEach((item) => {
      item.addEventListener('click', function (e) {
        let parent = item.closest('.interview__item')
        let nextItem = parent.nextElementSibling

        if (nextItem) {
          nextItem.classList.add('interview__item--active')
          parent.classList.remove('interview__item--active')
        }
      })
    })
  }
  function interviewPrev() {
    let allbtnPrev = document.querySelectorAll('.interview__item-btn[data-nav=prev]')
    allbtnPrev.forEach((item) => {
      item.addEventListener('click', function (e) {
        let parent = item.closest('.interview__item')
        let prevItem = parent.previousElementSibling
        if (prevItem) {
          prevItem.classList.add('interview__item--active')
          parent.classList.remove('interview__item--active')
        }
      })
    })
  }

  function setInterviewPercent() {
    let numPercentItems = document.querySelectorAll('.percent-num')

    numPercentItems.forEach((item) => {
      let itemPercent = item.innerHTML
      item
        .closest('.interview__item')
        .querySelector('.interview__item-line-active')
        .setAttribute('style', 'width:' + itemPercent + '%')
    })
  }

  let openReviewBtn = document.querySelector('.modal-review-btn')

  if (openReviewBtn) {
    openReviewBtn.addEventListener('click', (e) => {
      e.preventDefault()
      Fancybox.close()
      Fancybox.show([{ src: '#modal-review', type: 'inline' }])
    })
  }

  interviewNext()
  interviewPrev()
  setInterviewPercent()
})

$(document).ready(function () {
  $('#catalog-categories, li.dropdown').each(function (indx, element) {
    //скртыие маркеров у категорий без вложенностей
    if (!$(element).find('ul').length) $(element).attr('class', 'dropdown-not-child')
  })

  if ($('#catalog-categories').length) {
    $('#catalog-categories li').on('click', function () {
      if ($(this).hasClass('opened') || $(this).hasClass('active')) {
        $(this).removeClass('opened')
        $(this).removeClass('active')
      } else {
        $('#catalog-categories li.opened').removeClass('opened')
        $('#catalog-categories li.active').removeClass('active')
        $(this).addClass('active')
        if ($(this).hasClass('dropdown')) {
          $(this).addClass('opened')
        }
      }
    })
  }

  let rangeSliders = document.querySelectorAll('.range-slider')

  let initNoUiSliders = (slider, minRange, maxRange) => {
    noUiSlider.create(slider, {
      start: [minRange, maxRange],
      connect: true,
      step: 1,
      range: {
        min: minRange,
        max: maxRange,
      },
    })
  }

  rangeSliders.forEach((slider) => {
    let minRange = Number(slider.getAttribute('data-min-range'))
    let maxRange = Number(slider.getAttribute('data-max-range'))
    initNoUiSliders(slider, minRange, maxRange)

    // Получаем инпуты, привязанные к текущему слайдеру
    let itemInputs = slider.closest('.sidebar-filters__item').querySelectorAll('.sidebar-filters__item-input')

    // Listen to keydown events on the input field.
    itemInputs.forEach(function (input, handle) {
      input.addEventListener('change', function () {
        slider.noUiSlider.setHandle(handle, this.value)
      })
      slider.noUiSlider.on('update', function (values, handle) {
        itemInputs[handle].value = values[handle]
      })
      input.addEventListener('keydown', function (e) {
        var values = slider.noUiSlider.get()
        var value = Number(values[handle])

        // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
        var steps = slider.noUiSlider.steps()

        // [down, up]
        var step = steps[handle]

        var position

        // 13 is enter,
        // 38 is key up,
        // 40 is key down.
        switch (e.which) {
          case 13:
            slider.noUiSlider.setHandle(handle, this.value)
            break

          case 38:
            // Get step to go increase slider value (up)
            position = step[1]

            // false = no step is set
            if (position === false) {
              position = 1
            }

            // null = edge of slider
            if (position !== null) {
              slider.noUiSlider.setHandle(handle, value + position)
            }

            break

          case 40:
            position = step[0]

            if (position === false) {
              position = 1
            }

            if (position !== null) {
              slider.noUiSlider.setHandle(handle, value - position)
            }

            break
        }
      })
    })
  })

  const dropdownLinks = document.querySelectorAll('li.dropdown > a')
  dropdownLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      if (!link.offsetParent.classList.contains('opened')) {
        e.preventDefault()
      }
    })
  })
})

// Listen to keydown events on the input field.

let keydownEvents = () => {}
