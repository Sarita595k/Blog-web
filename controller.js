const { fetchBlog, addBlogs } = require('../models/model')

// to show list of all blogs
const allBlogs = (req, res) => {
    let data = req.body
    let response = fetchBlog()
    console.log(response)
    return res.json(response)
}

// to show blog
const getBlog = (req, res) => {
    res.render('blog')
}

// to add data to the blog
const postBlog = (req, res) => {
    const { title, username, description, blogPic } = req.body
    console.log(req.body)
    const response = addBlogs({ title, username, description, blogPic })
    console.log(response)
    res.render('blogIs', { blog: response })
}

module.exports = { allBlogs, getBlog, postBlog }