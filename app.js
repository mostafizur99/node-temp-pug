const express = require('express')
const path = require('path')

const app = express()
const port = 3000

// default engine
app.set('view engine', 'pug')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')));

const userData = require('./userData.json')

//routes
app.get('/', (req, res) => {
    res.render('home-page', { pageTitle: 'Home Page', path: '/' })
})
app.get('/user', (req, res) => {
    res.render('user-profile', { pageTitle: 'User Profile', ...userData, path: '/user/profile' })
})
app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' })
})

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})