const BaseController = require("../controllers/BaseController");
const Course = require("../models/Course");
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController extends BaseController {
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
