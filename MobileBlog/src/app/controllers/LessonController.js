const Lesson = require("../models/Lesson");
const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require("../../util/mongoose");
const slugify = require("slugify");

class LessonController {
  // [GET] /lesson/create
  async create(req, res, next) {
    try {
      const courses = await Course.find();
      res.render('lessons/create', { 
        courses : multipleMongooseToObject(courses)
      });
    } catch (err) {
      next(err);
    }
  }
  
  // [POST] /lessons/store
  store(req, res, next) {
    const { title, content, author, course } = req.body;

    const slug = slugify(title, { lower: true, strict: true });

    const lesson = new Lesson({
      title,
      content,
      author,
      course,
      slug,
    });
    lesson.save()
      .then(() => res.redirect('/'))
      .catch(error => next(error));
  }
}

module.exports = new LessonController();