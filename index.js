const express = require('express')
const ejs = require('ejs')
const path = require('path')
const blogRoutes = require('./src/router/routes')

const app = express()


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src', 'views'))

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/blogs', blogRoutes)

app.listen(2100, () => {
    console.log("server is running")
})