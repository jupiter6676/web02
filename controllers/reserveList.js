const ReservePost = require('../models/ReservePost.js')

module.exports = async (req, res) => {
    const reserveposts = await ReservePost.find({})

    res.render('calendar', {reserveposts})
}