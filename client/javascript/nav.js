// nav solid on scroll
let container = document.body.querySelector('.container')
let nav = document.querySelector('.navContainer')
window.addEventListener('scroll',() => {
    if(scrollY >= 85){
        nav.classList.add('active')
    }
    if(scrollY < 85){
        nav.classList.remove('active')
    }
})

// Hamburger and input box
let searchlogo = document.getElementById('searchlogo')
let searchbarinput = document.querySelector('.search-bar-box')

searchlogo.addEventListener('click',() => {
    searchbarinput.classList.toggle('active')
})

let hamburgerLogo = document.querySelector('.spanForNav')
let navlinks = document.querySelector('.navHyperLinks')

hamburgerLogo.addEventListener('click',() => {
    navlinks.classList.toggle('active')
})