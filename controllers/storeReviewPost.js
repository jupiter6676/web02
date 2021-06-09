const { models } = require('mongoose')
const ReviewPost = require('../models/ReviewPost')

module.exports = async (req, res) => {
    await ReviewPost.create(req.body)
    
    res.redirect('/review')
}