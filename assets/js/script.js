// BIBLIOTECA DE ANIMAÇÃO
AOS.init()

// POPUP PORTFOLIO
function openPopup(index) {
  const popup = document.querySelector(".popup-wrapper")
  const popupImage = document.querySelector("#project")
  const projectUrl = [
    "./assets/imagens/project-consultoria.jpg",
    "./assets/imagens/project-oratoria.jpg",
    "./assets/imagens/project-app.jpg",
    "./assets/imagens/project-consultoria360.jpg",
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

// BLOQUEAR BOTÃO DIREITO DO MOUSE
if (document.addEventListener) {
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault()
    return false
  })
} else {
  //Versões antigas do IE
  document.attachEvent("oncontextmenu", function (e) {
    e = e || window.event
    e.returnValue = false
    return false
  })
}
// BLOQUEAR ATALHOS COM TECLADO (CTRL + U, CTRL + S)
if (document.addEventListener) {
  document.addEventListener("keydown", bloquearSource)
} else {
  //Versões antigas do IE
  document.attachEvent("onkeydown", bloquearSource)
}

function bloquearSource(e) {
  e = e || window.event
  var code = e.which || e.keyCode
  if (
    e.ctrlKey &&
    (code == 83 || code == 85) //83 = S, 85 = U
  ) {
    if (e.preventDefault) {
      e.preventDefault()
    } else {
      e.returnValue = false
    }
    return false
  }
}
