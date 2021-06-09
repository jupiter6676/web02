const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReviewPostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    dateposted: {
        type: Date,
        default : new Date()
    }
})

const ReviewPost = mongoose.model('ReviewPost', ReviewPostSchema)

module.exports = ReviewPost