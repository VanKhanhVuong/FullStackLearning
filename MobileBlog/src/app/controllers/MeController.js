const BaseController = require("./BaseController");
const Course = require("../models/Course");
const { multipleMongooseToObject } = require('../../util/mongoose');

class MeController extends BaseController {
  
  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    Course.find({})
    .then(courses => res.render('me/stored-courses', {
       courses: multipleMongooseToObject(courses)
    }))
    .catch(err => next(err));
  }
}

module.exports = new MeController();