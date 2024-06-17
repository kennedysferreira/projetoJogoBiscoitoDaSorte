let cookieClose = document.querySelector('.cookieClose')
let cookieOpen = document.querySelector('.cookieOpen')
let cookieOpenButton = document.querySelector('.cookieOpen button')


let toogleCookie = () => {
  cookieClose.classList.toggle('hide')
  cookieOpen.classList.toggle('hide')
}

let handleClick = (e) => {
  e.preventDefault()

  toogleCookie()
}

cookieClose.addEventListener('click', handleClick)
cookieOpenButton.addEventListener('click', handleClick)

