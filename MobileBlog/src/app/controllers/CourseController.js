// const BaseController = require("../controllers/BaseController");
const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");
const slugify = require("slugify");
const upload = require("../../config/upload");

class CourseController {
  // [GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        if (!course) {
          return next(new Error("Course not found"));
        }
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch((error) => next(error));
  }
  // [GET] /course/create
  create(req, res, next) {
    res.render("courses/create");
  }

  // [POST] /course/store
  store(req, res, next) {
    upload.single('image')(req, res, async (err) => {
      if (err) {
        return next(err);
      }
      console.log(req.body);
      try {
        const { name, description } = req.body;
        const image = req.file ? `/img/${req.file.filename}` : null;
        const slug = slugify(name, { lower: true, strict: true });

        const course = new Course({
          name,
          description,
          image,
          slug
        });

        await course.save();
        res.redirect("/me/stored/courses");
      } catch (error) {
        next(error);
      }
    });
  }

  // [POST] /courses/handle-from-actions
  handleFromActions(req, res, next) {
    switch (req.body.action) { 
      case "delete":
        Course.delete({ _id: { $in: req.body.courseIds } })
          .then(() => res.redirect("back"))
          .catch((error) => next(error));
        break;
      default:
        res.json({message: 'Invalid action'});
    }
  }

  // [GET] /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render("courses/edit", {
          course: mongooseToObject(course),
        })
      )
      .catch((error) => next(error));
  }

  // [PUT] /courses/:id
  update(req, res, next) {
    Course.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(() => res.redirect(`/me/stored/courses`))
      .catch((error) => next(error));
  }

  // [DELETE] /courses/:id
  destroy(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch((error) => next(error));
  }

  // [DELETE] /courses/:id/force
  forceDestroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch((error) => next(error));
  }

  // [PATCH] /courses/:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect(`back`))
      .catch((error) => next(error));
  }
}

module.exports = new CourseController();

// Document:
// https://www.npmjs.com/package/slugify              [General Slug]
// https://expressjs.com/en/4x/api.html#res.redirect  [Redirect page]
// https://mongoosejs.com/docs/5.x/docs/queries.html  [Update with ID item]
