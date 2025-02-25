const blogs = []


const fetchBlog = () => {
    return blogs
}

const addBlogs = (data) => {
    let id = blogs.length > 0 ? Math.max(blogs.map(blog => blog.id)) + 1 : 1
    const newBlog = { id, ...data }
    console.log(newBlog)
    blogs.push(newBlog)
    return newBlog
}

module.exports = {
    fetchBlog, addBlogs
}