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

/*Modal display control*/
function startModal() {
  const modal = document.getElementById('modal-menu')
  if (modal) {
    modal.classList.add('show-modal')
    modal.addEventListener('click', (e) => {

      if (e.target.className === 'buttonCloseModal') {
        modal.classList.remove('show-modal')
      }
    })
  }
}

const burgerButton = document.querySelector('.burgerMenuButton')
burgerButton.addEventListener('click', () => startModal())

/*Close modal when clicking on a navigation element*/
const modalNav = document.querySelectorAll('.modal-container nav ul li a')
modalNav.forEach(element => {
  element.addEventListener('click', () =>  {
    const modal = document.getElementById('modal-menu')
    modal.classList.remove('show-modal')
  })
})

/*Carousel control*/
let stream = document.querySelector('.gallery__stream');
let items = document.querySelectorAll('.gallery__item');
let prev = document.querySelector('.gallery__prev');
let next = document.querySelector('.gallery__next');

next.addEventListener('click', () => {
  stream.insertBefore(items[items.length - 1], items[0]);
  items = document.querySelectorAll('.gallery__item');
})

prev.addEventListener('click', () => {
  stream.appendChild(items[0]);
  items = document.querySelectorAll('.gallery__item');
})