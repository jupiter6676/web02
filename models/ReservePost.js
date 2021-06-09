const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReservePostSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    dateposted: {
        type: Date,
        default : new Date()
    },
    time: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    request: {
        type: String,
        required: true
    }
})

const ReservePost = mongoose.model('ReservePost', ReservePostSchema)

module.exports = ReservePost