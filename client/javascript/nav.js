// nav solid on scroll
let container = document.body.querySelector('.container')
let nav = document.querySelector('.navContainer')
window.addEventListener('scroll', () => {
    if (scrollY >= 85) {
        nav.classList.add('active')
    }
    if (scrollY < 85) {
        nav.classList.remove('active')
    }
})

// Hamburger and input box
let searchlogo = document.getElementById('searchlogo')
let searchbarinput = document.querySelector('.search-bar-box')

searchlogo.addEventListener('click', () => {
    searchbarinput.classList.toggle('active')
})

// Light dark mode 
let githublogo = document.querySelector('#github-logo')
let githublogoW = "../images/social icons/light/github-mark.png"
let githublogoD = "../images/social icons/dark/github-mark-white.png"
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'active') {
        darkmode();
    } else {
        lightmode();
    }
});
let ldBtn = document.getElementById('lightdarktogglebtn')
function lightmode() {
    document.body.classList.remove('darkmode')
    document.body.classList.remove('darkmodemain')
    localStorage.setItem('darkMode', 'not active')
    if (githublogo != null) {
        githublogo.src = githublogoW;
    }
}
function darkmode() {
    document.body.classList.add('darkmode')
    document.body.classList.add('darkmodemain')
    localStorage.setItem('darkMode', 'active')
    if (githublogo != null) {
        githublogo.src = githublogoD;
    }
}
ldBtn.addEventListener('click', () => {
    if (localStorage.getItem('darkMode') == 'not active') {
        darkmode()
    }
    else {
        lightmode()
    }
})

let hamburgerLogo = document.querySelector('.spanForNav')
let navlinks = document.querySelector('.navHyperLinks')

hamburgerLogo.addEventListener('click', () => {
    navlinks.classList.toggle('active')
})

// search recomendation

let suggestionBox = document.querySelector('.searchRecomendationBox')

searchbarinput.addEventListener('keyup', async () => {
    let keywordOfBlogs = await fetch('https://personal-blog-site-sable.vercel.app/blogs/title')
    let availKeywords = await keywordOfBlogs.json()
    let titles = availKeywords.map(item => item.title);
    let result = []
    let input = searchbarinput.value
    if (input.length) {
        result = titles.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase())
        })
    }
    displaySearchTerm(result)
    if (!input.length) {
        suggestionBox.innerHTML = " "
    }
})

function displaySearchTerm(result) {
    let content = result.map((item) => {
        return "<li onclick=selectInput(this) >" + item + "</li>"
    })

    suggestionBox.innerHTML = "<ul>" + content.join(" ") + "</ul>"

}

function selectInput(list) {
    searchbarinput.value = list.innerHTML
    suggestionBox.innerHTML = " "
}

// search feature

let searchBtn = document.querySelector('#searchlogo')
let searchBar = document.querySelector('.search-bar-box')

searchBtn.addEventListener('click', async () => {
    const selectedBlogTitle = searchBar.value
    window.location.href = `search.html?title=${selectedBlogTitle}`
})

window.addEventListener('keydown', (e) => {
    if(searchBar.value != ''){
        if (e.key == 'Enter') {
            const selectedBlogTitle = searchBar.value
            window.location.href = `search.html?title=${selectedBlogTitle}`
        }
    }
})