const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    title: String,
    body: String,
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    }
})


module.exports = mongoose.model('Notes', noteSchema)