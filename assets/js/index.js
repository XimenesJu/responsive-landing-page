

function sizeChanged() {
  if (window.innerWidth >= 768) {
    menumobile.style.display = 'block'
  } else {
    menumobile.style.display = 'none'
  }
}

function clickMenu() {
  if (menumobile.style.display == 'block') {
    menumobile.style.display = 'none'
  } else {
    menumobile.style.display = 'block'
  }
}