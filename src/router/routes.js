const express = require('express')
const router = express.Router()
const { upload } = require('../middleware/fileUpload')
const { blogValidation } = require('../middleware/validator')
const { allBlogs, getBlog, postBlog } = require('../controller/controller')

// route for retireve all blogs
router.get("/allBlogs", allBlogs)

// routes for get and post blogs
router.get('/', getBlog)
router.post('/register', upload.single('blogPic'), blogValidation, postBlog)

module.exports = router