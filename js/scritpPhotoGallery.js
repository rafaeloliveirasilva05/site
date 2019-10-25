

const $containerGalleryPhotos = document.querySelector('.containerGallery')
const $img = document.querySelectorAll('.card_img')
const modal = document.querySelector('.containerModal')
const modal_img = document.querySelector('#modal_img')
let srcVal = ''
let picturePosition = null

const modal_content = document.querySelector('.modal_content')

sizeOfThings()

window.addEventListener('resize', sizeOfThings)

function sizeOfThings() {
  let windowWidth = window.innerWidth;
  let windowClientWidth = $containerGalleryPhotos.clientWidth

  let mg = windowWidth <= 768 ? 8 : 30

  let cal = (windowClientWidth - mg) / 3

  $img.forEach(element => {
    element.style = `width: ${cal}px; height: ${cal}px`
  })
}

$img.forEach((element, index) => {
  element.addEventListener('click', function () {
    picturePosition = index
    srcVal = element.getAttribute('src')
    modal_img.setAttribute('src', srcVal)
    modal.classList.toggle('modal_active')
  })
})

modal_content.addEventListener('click', function (e) {
  if (e.target.classList[0] === 'modal_content' || e.target.classList[0] === 'closeButton') {
    modal.classList.toggle('modal_active')
  }
})

const buttonNext = document.querySelector('.buttonNext')
buttonNext.addEventListener('click', () => {
  picturePosition = picturePosition < $img.length - 1 ? picturePosition + 1 : 0
  srcVal = $img[picturePosition].getAttribute('src')
  modal_img.setAttribute('src', srcVal)

})

const buttonBack = document.querySelector('.buttonBack')
buttonBack.addEventListener('click', () => {
  picturePosition = picturePosition > 0 ? picturePosition - 1 : $img.length - 1
  srcVal = $img[picturePosition].getAttribute('src')
  modal_img.setAttribute('src', srcVal)
})