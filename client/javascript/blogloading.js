// Blog on loading page
window.addEventListener('load', () => {
    fetchBlogs()
})

async function fetchBlogs() {
    let response = await fetch('https://personal-blog-site-sable.vercel.app/blogs/latest')
    let latestBlogs = await response.json()
    bindBlogs(latestBlogs)
}

function bindBlogs(Blogs) {
    const blogContainer = document.querySelector('.LatestPostContainer')
    const blogTemplate = document.querySelector('.blogCards')
    blogContainer.innerHTML = ''
    Blogs.forEach(element => {
        if (!element.pic) return
        const clone = blogTemplate.content.cloneNode(true)
        fillData(element, clone)
        blogContainer.appendChild(clone)
    });
}

function bindSpecificBlogs(Blogs) {
    const blogContainer = document.querySelector('.LatestPostContainer')
    const blogTemplate = document.querySelector('.blogCards')
    blogContainer.innerHTML = ''
    if (!Blogs.pic) return
    const clone = blogTemplate.content.cloneNode(true)
    fillData(Blogs, clone)
    blogContainer.appendChild(clone)
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