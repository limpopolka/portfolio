addEventListener('DOMContentLoaded', (event) => {
  var swiper = new Swiper('.product__slider-thumbs', {
    direction: 'vertical',
    spaceBetween: 10,
    slidesPerView: 4,
    // freeMode: true,
    // watchSlidesProgress: true,
  })
  var swiper2 = new Swiper('.product__slider', {
    spaceBetween: 10,

    thumbs: {
      swiper: swiper,
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
})
