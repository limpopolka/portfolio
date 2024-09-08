let full_price = 0
var Pricer = {
  hover_triggers: false,
  mouse_over: false,
  objects: {},

  start: function () {
    $('.product-price, .product-price--inner').each(function (indx, element) {
      let single_price = parseFloat($(element).find('.single-price').text())
      let qyt = parseFloat($(element).find('.total-quantity').text())
      let summ = parseFloat(single_price * qyt)
      //console.log(summ);
      // $(element).find(".total-price").text(priceFormat(summ));
      $(element)
        .find('.total-price')
        .text(addCommas(Math.ceil(summ)) + ' ₽')
      $(element)
        .find('.product-total-price .single-price')
        .text(addCommas(addCommas(Math.ceil(summ))) + ' ₽')
    })
  },
  change: function (action, el) {
    let price = parseFloat($(el).find('.single-price').text())
    let step = parseFloat($(el).attr('step'))
    var qyt = parseFloat($(el).find('.total-quantity').text())
    let minimal = parseFloat(el.getAttribute('minimal'))
    let _id = parseFloat($(el).attr('data-id'))
    switch (action) {
      case 'plus':
        qyt = qyt + step
        break
      case 'minus':
        qyt = qyt - step
        break
    }
    if (window.location.pathname == '/shop/cart') {
      price = parseFloat($(el).closest('.cart-item').find('.price__skidka-price').text())
    }

    if (qyt < minimal) return 0
    let summ = parseFloat(price * qyt)
    $(el).find('.total-quantity').text(qyt)
    if (summ >= 20000) {
      if ($('.product-total-price .skidka').length == 0) {
        $(el).closest('.product-price--inner').find('.product-total-price .single-price').after('<span class="skidka" data-skidka="10"> / 10%</span>')
        if (summ >= 30000) {
          $(el).closest('.product-price--inner').find('.product-total-price .skidka').html(' / 20%').attr('data-skidka', 20).removeClass('personal')
        } else {
          $(el).closest('.product-price--inner').find('.product-total-price .skidka').html(' / 10%').attr('data-skidka', 10).removeClass('personal')
        }
      } else {
        if (summ >= 30000) {
          $(el).closest('.product-price--inner').find('.product-total-price .skidka').html(' / 20%').attr('data-skidka', 20).removeClass('personal')
          if (summ >= 100000) {
            $(el).closest('.product-price--inner').find('.product-total-price .skidka').html(' / Персональная скидка').attr('data-skidka', 0).addClass('personal')
          }
        } else {
          $(el).closest('.product-price--inner').find('.product-total-price .skidka').html(' / 10%').attr('data-skidka', 10).removeClass('personal')
        }
      }
    } else {
      $(el).closest('.product-price--inner').find('.product-total-price .skidka').html('')
    }
    console.log('summ ---->', summ)
    console.log('full-price ---->', full_price)
    $(el)
      .find('.total-price')
      .text(addCommas(Math.ceil(summ)) + ' ₽')
    $(el)
      .find('.product-total-price .single-price')
      .text(addCommas(Math.ceil(summ)) + ' ₽')
    if (_id) Cart.update(_id, qyt)
  },
}

$(document).ready(function () {
  //клики на витрине
  $('#product-info').on('click', '.product-totals button', function (event) {
    event.preventDefault()
		console.log(event.target)
    let el = $(event.target).parentsUntil('.product-price-col').slice(-1)[0]
    Pricer.change($(event.target).attr('class'), el)
    console.log(el)
  })

  //клики на карточке
  $('.card.product-card').on('click', '.product-totals button', function (event) {
    event.preventDefault()
    let el = $(event.target).parentsUntil('.card--inner').slice(-1)[0]
    Pricer.change($(event.target).attr('class'), el)
  })

  //клики на корзине
  $('#cart-section').on('click', '.product-quant button', function (event) {
    event.preventDefault(event)

    let el = $(event.target).parentsUntil('.cart-item__col.product-data').slice(-1)[0]
    Pricer.change($(event.target).attr('class'), el)
  })
})

// $(document).on('click', '.tags-list li a', function (event) {
// var tags = [];
// event.preventDefault();
// classes = $(event.target).attr('class');
// if(classes === undefined || classes == '') {
// $(event.target).addClass("active-tag");
// }
// else $(event.target).removeClass("active-tag");
// $(".tags-list a.active-tag").each(function(indx, element){
// tags.push(element.getAttribute('href').split('-')[1]);
// });
// Filter.set('tags', tags);
// console.log(tags);
// });

// $(document).on('click', '.products-on-page a', function (event) {
// event.preventDefault();

// $(event.target).parent().addClass("active");
// Filter.set('page', event.target.getAttribute('href').split('#')[1]);

// });

// $(document).on('change', 'select#sort-select', function (event) {
// console.log($(event.target).val());
// Filter.set('sort', $(event.target).val());
// });
function addCommas(nStr) {
  nStr += ''
  x = nStr.split('.')
  x1 = x[0]
  x2 = x.length > 1 ? ' ' + x[1] : ''
  var rgx = /(\d+)(\d{3})/
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ' ' + '$2')
  }
  return x1 + x2
}

priceFormat = function (data) {
  /*
   * В переменной price приводим получаемую переменную в нужный вид:
   * 1. принудительно приводим тип в число с плавающей точкой,
   *    учли результат 'NAN' то по умолчанию 0
   * 2. фиксируем, что после точки только в сотых долях
   */
  var price = Number.prototype.toFixed.call(parseFloat(data) || 0, 0),
    //заменяем точку на запятую
    price_sep = price.replace(/(\D)/g, ','),
    //добавляем точку как разделитель в целых
    price_sep = price_sep.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  console.log(23123123)
  return price_sep + ' ₽'
}
skidkaPrice = function (price, option) {
  var url_string = window.location.href // www.test.com?filename=test
  var url = new URL(url_string)
  var paramValue = url.searchParams.get('test')

  //console.log(addCommas(price));
  // if(paramValue == 'test') {
  let a = price,
    b
  var sale = 0
  if (option == 'cart') {
    a = Number(a.replace(/\./g, ''))
  }
  if (a > 20000) {
    sale = 10
    if (a > 30000) {
      sale = 20
    }
    if (a > 100000) {
      sale = 0
    }
    b = (a / 100) * sale
    a = a - b
    // $(e).closest('.cart-item').find('.total-price').after('<div>'+Math.ceil(a)+'</div>')
    // return '<span class="skidka-price">'+a+'</span>';
    // skidkaStyle();
    if (option == 'cart') {
      if (a > 100000) {
        return '<div class="total-price"><span class="price__skidka-price">' + addCommas(price) + ' ₽</span></div><span class="personal-sale">Персональная скидка! <span>(Уточняйте у менеджера)</span></span>'
      } else {
        return '<div class="total-price sale"><span class="total-price__price">' + addCommas(price) + ' ₽</span><span class="price__skidka"><span class="percent">' + sale + '% </span><span class="price__skidka-price">' + addCommas(Math.ceil(a)) + ' ₽</span></span></div>'
      }
    }
    if (option == 'sale_price') {
      if (a >= 100000) return a
      else {
        return Math.ceil(a)
      }
    }
    if (option == 'percent') {
      return sale
    }
  } else {
    if (option == 'cart') {
      return '<span class="total-price"><span class="price__skidka-price">' + addCommas(price) + ' ₽</span></span>'
    }
    if (option == 'sale_price') {
      return price
    }
  }

  // }else {
  //     return '';
  // }
}
skidkaStyle = function () {
  $(document).ready(function () {
    $('.price__skidka').closest('.total-price').addClass('sale')
  })
}
