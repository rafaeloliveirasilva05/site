// Developed at agap2
// Based on:
// http://www.codeply.com/go/s3I9ivCBYH/multi-carousel-single-slide-bootstrap-4

const menuItems = document.querySelectorAll('.menu-nav ul li a')
const header = document.querySelector('.menuHeader')

let lastScrollTop = 0

$('.multi-item-carousel').on('slide.bs.carousel', function (e) {
  let $e = $(e.relatedTarget),
    itemsPerSlide = 3,
    totalItems = $('.carousel-item', this).length,
    $itemsContainer = $('.carousel-inner', this),
    it = itemsPerSlide - (totalItems - $e.index());
  if (it > 0) {
    for (var i = 0; i < it; i++) {
      $('.carousel-item', this).eq(e.direction == "left" ? i : 0).
        // append slides to the end/beginning
        appendTo($itemsContainer);
    }
  }
})

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick)
})

function getScrollTopByHref(element) {
  const id = element.getAttribute('href')
  return document.querySelector(id).offsetTop
}

function scrollToIdOnClick(event) {
  event.preventDefault() // previne o valor padrão
  const to = getScrollTopByHref(event.target) - 40

  scrollToPosition(to)
}

function scrollToPosition(to) {
  window.scroll({
    top: to,
    behavior: "smooth"
  })
}

getScroll = () => {
  headerDisplayControl()
}

headerDisplayControl = () => {
  const hideHeader = 'transform: translateY(-61px)'
  const showHeader = 'transform: translateY(0)'

  if (pageYOffset <= 200) {
    header.style = showHeader
    return
  }

  if (pageYOffset === lastScrollTop) return

  header.style = pageYOffset > lastScrollTop ? hideHeader : showHeader

  lastScrollTop = pageYOffset
}

window.addEventListener('scroll', getScroll, false)
