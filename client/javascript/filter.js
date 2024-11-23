let btnOne = document.querySelector('#btnOne')
let btnTwo = document.querySelector('#btnTwo')
let btnThree = document.querySelector('#btnThree')
let btnFour = document.querySelector('#btnFour')
let apiurl = "https://personal-blog-site-zeta.vercel.app/"

btnOne.addEventListener('click',async(e) => {
    let blogs = await filterBlogFetch(e.target.textContent.toLowerCase())
    addBlogs(blogs)
})

btnTwo.addEventListener('click',async(e) => {
    let blogs = await filterBlogFetch(e.target.textContent.toLowerCase())
    addBlogs(blogs)
})

btnThree.addEventListener('click',async(e) => {
    let blogs = await filterBlogFetch(e.target.textContent.toLowerCase())
    addBlogs(blogs)
})

btnFour.addEventListener('click',async(e) => {
    let blogs = await filterBlogFetch(e.target.textContent.toLowerCase())
    addBlogs(blogs)
})

async function filterBlogFetch (textContent){
    let filteredBlogs = await fetch(`${apiurl}blogs/filter?filter=${textContent}`)
    return filteredBlogs.json()
}

async function addBlogs(blogs){
    const blogContainer = document.querySelector('.LatestPostContainer')
    const blogTemplate = document.querySelector('.blogCards')
    blogContainer.innerHTML = ''
    blogs.forEach(element => {
        if (!element.pic) return
        const clone = blogTemplate.content.cloneNode(true)
        fillData(element, clone)
        blogContainer.appendChild(clone)
    });
}

function fillData(blogs, clone) {
    let image = clone.querySelector('#stockBlogPic')
    let title = clone.querySelector('#blogTitle')
    // let publisherName = clone.querySelector('#LatestPoststatswriter')
    let tags = clone.querySelector('#tags')
    let description = clone.querySelector('#blogdesc')
    let dateMonth = clone.querySelector('#dateMonth')
    const date = new Date(blogs.date).toLocaleDateString("en-US", {
        timeZone: "Asia/Jakarta"
    })
    image.src = blogs.pic
    tags.innerHTML = blogs.tag
    // publisherName.innerHTML = blogs.author
    title.innerHTML = `${blogs.title.substring(0, 80)}...`
    description.innerHTML = `${blogs.desc.substring(0, 100)}...`
    dateMonth.innerHTML = `${date}`
    clone.firstElementChild.addEventListener("click", async () => {
        window.open(`../html/blog.html?title=${blogs.title}`, "_blank");
    })
}