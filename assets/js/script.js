// BIBLIOTECA DE ANIMAÇÃO
AOS.init()

// POPUP PORTFOLIO
function openPopup(index) {
  const popup = document.querySelector(".popup-wrapper")
  const popupImage = document.querySelector("#project")
  const projectUrl = [
    "./assets/imagens/project-direito.jpg",
    "./assets/imagens/project-courses.jpg",
    "./assets/imagens/project-app.jpg",
    "./assets/imagens/project-ebook.jpg",
  ]

  popupImage.src = projectUrl[index]
  popup.style.display = "flex"
}

function closePopup() {
  const popup = document.querySelector(".popup-wrapper")
  popup.style.display = "none"
}
document
  .querySelector(".popup-content")
  .addEventListener("click", function (event) {
    event.stopPropagation()
  })
