const Course = require('../models/Course')


class SiteController {
    // [GET] /
    index(req, res) {
        Course.find({}, function (err, courses) {
            if (!err) res.json(courses)
            res.status(400).json({ error: 'error 400' })
        })
        // res.render('home')
    }

    // [GET] /search
    search(req, res) {
        res.render('search')
    }
}

module.exports = new SiteController

// const newsController = require('./News')