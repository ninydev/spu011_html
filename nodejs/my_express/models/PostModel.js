const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {type: String},
    body: {type: String}
})

module.exports = mongoose.model('posts', postSchema)
