const mongoose = require('mongoose')

const guideSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    data: Object
}, { timestamps: true })
module.exports = mongoose.model('Guide', guideSchema)
