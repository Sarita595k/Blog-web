const multer = require('multer')
const path = require('path')
const fs = require('fs')


const filePath = path.join('uploads', 'blogImages')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const username = req.body.username
        const blogPath = path.join(filePath, username)
        if (!fs.existsSync(blogPath)) {
            fs.mkdirSync(blogPath, { recursive: true })
        }
        cb(null, blogPath)
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif']
    if (allowedTypes.includes(file.mimetype)) {
        return cb(null, true)
    }
    cb(null, false)
}
const upload = multer({ storage: storage, limits: { fileSize: 2 * 1024 * 1024 }, fileFilter: fileFilter })

module.exports = { upload }