const mongoose = require('mongoose')

const ReviewPost = require('./models/ReviewPost')

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true})

ReviewPost.create({
    title: "ㅋㅋ",
    body: "ㅋㅋㅋㅋㅋ",
    author: "ㅇㅇ"
}, (error, reviewpost) => {
    console.log(error, reviewpost)
})