addEventListener('DOMContentLoaded', (event) => {
  const swiper = new Swiper('.product__slider-thumbs', {
    direction: 'vertical',
    spaceBetween: 10,
    slidesPerView: 4,
    // freeMode: true,
    // watchSlidesProgress: true,
  })
  const swiper2 = new Swiper('.product__slider', {
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
    breakpoints: {
      // when window width is >= 320px
      0: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      // when window width is >= 640px
      1200: {
        pagination: false,
      },
    },
  })

  const moreSlider = new Swiper('.more-slider', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
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
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 3,
      },
    },
  })
  const ratings = document.querySelectorAll('.product__rating')

  if (ratings.length > 0) {
    initRatings()
  }

  function initRatings() {
    let ratingActive, ratingValue

    for (let index = 0; index < ratings.length; index++) {
      const rating = ratings[index]
      initRating(rating)
    }

    function initRating(rating) {
      initRatingVars(rating)
      setRatingActiveWidth()
      setRating(rating)
    }

    function initRatingVars(rating) {
      ratingActive = rating.querySelector('.product__rating-active')
      ratingValue = rating.querySelector('.product__rating-value')
    }

    function setRatingActiveWidth(index = ratingValue.innerHTML) {
      const ratingActiveWidth = index / 0.05
      ratingActive.style.width = `${ratingActiveWidth}%`
    }

    function setRating(rating) {
      const ratingItems = rating.querySelectorAll('.product__rating-item')

      for (let index = 0; index < ratingItems.length; index++) {
        const ratingItem = ratingItems[index]
        ratingItem.addEventListener('mouseenter', function () {
          initRatingVars(rating)
          setRatingActiveWidth(ratingItem.value)
        })

        ratingItem.addEventListener('mouseleave', function () {
          setRatingActiveWidth()
        })

        ratingItem.addEventListener('click', function () {
          initRatingVars(rating)

          ratingValue.innerHTML = index + 1
          setRatingActiveWidth()
        })
      }
    }
  }

  let shareBtn = document.querySelector('#product-share')
  let shareDropdown = document.querySelector('#share-dropdown')

  if (shareBtn && shareDropdown) {
    shareBtn.addEventListener('click', () => {
      shareDropdown.classList.toggle('show')
    })
  }

  let favorBtn = document.querySelector('#favor-btn')
  if (favorBtn) {
    favorBtn.addEventListener('click', () => {
      favorBtn.classList.toggle('active')
      if (favorBtn.classList.contains('active')) {
        favorBtn.querySelector('.product__buttons-text').textContent = 'В избранном'
      } else {
        favorBtn.querySelector('.product__buttons-text').textContent = 'В избранное'
      }
    })
  }

  let featuresBtn = document.querySelector('.product__features-top')
  let featuresWrap = document.querySelector('.product__features')
  if (featuresBtn) {
    featuresBtn.addEventListener('click', () => {
      featuresWrap.classList.toggle('active')
    })
  }

  let tabs = document.querySelectorAll('.product__info-tabs-item')
  let tabsContainers = document.querySelectorAll('.product__info-content-item')

  if (tabs) {
    tabs.forEach((tabsItem) => {
      tabsItem.addEventListener('click', (event) => {
        let dataTab = tabsItem.getAttribute('data-content')
        if (!tabsItem.classList.contains('active')) {
          tabs.forEach((item) => {
            item.classList.remove('active')
          })
          tabsItem.classList.add('active')
        }
        tabsContainers.forEach((item) => {
          let dataContainer = item.getAttribute('data-content')
          item.classList.remove('active')
          if (dataContainer === dataTab) {
            item.classList.add('active')
          }
        })
      })
    })
  }

  let prewVideo = document.querySelector('.video-prew')
  let video = document.querySelector('.tab-video')

  if (prewVideo && video) {
    prewVideo.addEventListener('click', () => {
      prewVideo.classList.add('hide')
      video.classList.add('visible')
      video.play()
    })
  }

  let btnOpenReview = document.querySelector('.review-tab-open')
  let tabReviewContent = document.querySelector('.product__info-content-item-review')
  let tabReview = document.querySelector('.product__info-tabs-item--review')
  btnOpenReview.addEventListener('click', () => {
    tabs.forEach((tab) => {
      tab.classList.remove('active')
    })

    tabsContainers.forEach((tab) => {
      tab.classList.remove('active')
    })
    tabReviewContent.classList.add('active')
    tabReview.classList.add('active')
  })
})
