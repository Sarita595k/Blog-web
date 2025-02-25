const { body, validationResult } = require('express-validator')
const blogValidation = [
    body('title').notEmpty().withMessage('Title is required').isLength({ min: 3 }).withMessage(" title should contain atleast 3 characters"),
    body('username').notEmpty().withMessage("Username is required").isLength({ min: 3 }).withMessage(" username should contains atleast 3 characters"),
    body('description').notEmpty().withMessage('Blog Description should not be empty').isLength({ min: 40 }).withMessage('blog description should contain atleast 40 characters'),

    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.render('blog', { errors: errors.array() })
        }
        if (!req.file) {
            return res.render('blog', { errors: [{ msg: 'blog Pic is required' }] })
        }
        next()
    }
]

module.exports = { blogValidation }