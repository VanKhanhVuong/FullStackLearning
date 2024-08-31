class CourseController {

  // [GET] /course/:slug
  show(req, res) {
    
  }

  // Always end script
  // [GET] /course
  index(req, res) {
    res.render("course");
  }
}

module.exports = new CourseController();
