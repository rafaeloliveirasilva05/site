const menuItems = document.querySelectorAll('.menu-nav ul li a')
const menuItemsFooter = document.querySelectorAll('.menu-footer nav ul li a')

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick)
})

menuItemsFooter.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick)
})

function getScrollTopByHref(element) {
  const id = element.getAttribute('href')
  return document.querySelector(id).offsetTop
}

function scrollToIdOnClick(event) {
  event.preventDefault() // previne o valor padrão
  const to = getScrollTopByHref(event.target)

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
  element.addEventListener('click', () => {
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
  stream.appendChild(items[0]);
  items = document.querySelectorAll('.gallery__item');
})

prev.addEventListener('click', () => {
  stream.insertBefore(items[items.length - 1], items[0]);
  items = document.querySelectorAll('.gallery__item');
})

$('.photo-gallery').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
})

/*Function applied to scroll the screen to the top*/
let backTopButton = document.querySelector('.backTopButton')
window.addEventListener('scroll', (e) => {
  backTopButton.style = window.scrollY > 100 ? 'display: inline' : 'display: none'
})

backTopButton.addEventListener('click', () => {
  window.scroll({
    top: 0,
    behavior: "smooth"
  })
})
