const express = require('express')
const path = require('path')
const mongoose = require('mongoose')

const app = new express()
const ejs = require('ejs')

const ReservePost = require('./models/ReservePost.js')
const ReviewPost = require('./models/ReviewPost.js')

const newReviewController = require('./controllers/newReview')
const reserveListController = require('./controllers/reserveList')
const storeReviewController = require('./controllers/storeReviewPost')
const reviewListController = require('./controllers/reviewList')

// mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true})
mongoose.connect('mongodb+srv://alswls:wls5484@cluster0.bkcah.mongodb.net/test', {useNewUrlParser: true})


app.set('view engine', 'ejs')

app.use(express.static('public'))

let port = process.env.PORT;

if (port == null || port==""){
    port = 4000;
}
app.listen(port, () => { console.log('App listening...') })

/* nav */
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/menu', (req,res)=>{
    res.render('menu')
})

app.get('/locate', (req,res)=>{
    res.render('locate')
})

app.get('/reserve', (req,res)=>{
    res.render('reserve')
})

app.get('/posts/new', newReviewController)

app.get('/reviewpost/:id', async (req, res) => {
    const reviewpost = await ReviewPost.findById(req.params.id)

    res.render('reviewpost', {reviewpost})
})

/* 리뷰, 예약 DB */
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.post('/reserve/store', async (req,res) => {
    await ReservePost.create(req.body)
    res.redirect('/')
})

// reservepost 객체 calendar.ejs에서 써보기
app.get('/calendar', reserveListController)

app.post('/reviewposts/store', storeReviewController)

// reviewposts 객체 review.ejs에서 써보기
app.get('/review', reviewListController)