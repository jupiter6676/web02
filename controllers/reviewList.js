const ReviewPost = require('../models/ReviewPost.js')

module.exports = async (req, res) => {
    const reviewposts = await ReviewPost.find({})

    res.render('review', {reviewposts})
}