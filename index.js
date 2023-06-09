const express = require('express')
const app = express()
require('dotenv').config()
const methodOverride = require('method-override')

//middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extendeed: true }))
app.use(methodOverride('_method'))

//routes
app.use('/places', require('./controllers/places'))


app.get('/',(req,res)=>{
    res.render('home')
})

app.get('*', (req,res)=>{
    res.render('error404')
})


app.listen(process.env.PORT)