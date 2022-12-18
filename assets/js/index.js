function sizeChanged() {
  if (window.innerWidth <= 768) {
    menumobile.style.display = 'none'
  } else menumobile.style.display = 'block'
}

function sizeChanged() {
  if (window.innerWidth <= 768) {
    burguer.style.display = 'block'
  } else burguer.style.display = 'none'
}

function sizeChanged() {
  if (window.innerWidth >= 768) {
    burguer.style.display = 'none'
  } else burguer.style.display = 'block'
}

function clickMenu() {
  if (menumobile.style.display == 'block') {
    menumobile.style.display = 'block '
  } else {
    menumobile.style.display = 'none'
  }
}