// nav solid on scroll
let container = document.body.querySelector('.container')
let nav = document.querySelector('.navContainer')
window.addEventListener('scroll',() => {
    if(scrollY >= 85){
        nav.classList.add('active')
        console.log("Hello world")
    }
    if(scrollY < 85){
        nav.classList.remove('active')
    }
})