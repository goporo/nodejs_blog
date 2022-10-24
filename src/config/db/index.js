const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/blog_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connected mongoose")
    }
    catch (e) {
        console.log('cant connect: ', e)
    }
}

module.exports = { connect };