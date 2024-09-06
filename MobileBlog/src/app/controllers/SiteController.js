// const BaseController = require("../controllers/BaseController");
const Course = require("../models/Course");
const { multipleMongooseToObject } = require('../../util/mongoose');
const config = require('../../config/config');

class SiteController {
  index(req, res, next) {
    Course.find({})
      .then(courses => { 
        res.render('home', {
          courses: multipleMongooseToObject(courses)
        });
       })
      .catch(err => next(err));
  }
}

module.exports = new SiteController();
