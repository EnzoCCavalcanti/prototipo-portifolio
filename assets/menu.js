let btnAbrir = document.getElementById('btn-abrir')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnAbrir.addEventListener('click', () => { menu.classList.add('abrir-menu') })

menu.addEventListener('click', () => { menu.classList.remove('abrir-menu') })

overlay.addEventListener('click', () => { menu.classList.remove('abrir-menu') })



const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach((element) => myObserver.observe(element))