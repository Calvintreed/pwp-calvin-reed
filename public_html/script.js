window.onload = function () {
  initModal()
}
const initModal = () => {
  let modals = document.querySelectorAll('.wow')
  modals.forEach((element) => {
    element.addEventListener("click", (e) => {
      document.querySelector(`.image-preview`).src = element.src
      $('#image-modal').modal("show")
    })
  })
}