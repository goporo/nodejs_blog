const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')


const Schema = mongoose.Schema

const Course = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    videoId: { type: String, required: true },
    image: { type: String },
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true,
})

// Add plugin
mongoose.plugin(slug)
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
})

module.exports = mongoose.model('Course', Course)