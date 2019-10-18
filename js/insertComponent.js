
const mainHeader = document.querySelector(".headerIndex")
const simplifiedHeader = document.querySelector("header")

if (mainHeader) {
  fetch('./header.html')
    .then(response => {
      return response.text()
    })
    .then(data => {
      mainHeader.innerHTML = data;
    })

} else if (simplifiedHeader) {
  fetch('./simpleHeader.html')
    .then(response => {
      return response.text()
    })
    .then(data => {
      simplifiedHeader.innerHTML = data;
    })
}
