const BaseController = require("../controllers/BaseController");
const Course = require("../models/Course");
const { mongooseToObject } = require('../../util/mongoose');

class CourseController extends BaseController {

    // [GET] /courses/:slug
    show(req, res, next) {
      Course.findOne({slug: req.params.slug})
        .then(course => {
          if (!course) {
            // 404
            return next(new Error("Course not found"));
          }
          res.render('courses/show', { course: mongooseToObject(course) });
        })
        .catch(error => next(error));
    }
}

module.exports = new CourseController();
