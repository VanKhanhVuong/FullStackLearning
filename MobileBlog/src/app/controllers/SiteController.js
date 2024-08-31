const BaseController = require('../controllers/BaseController');
const Course = require('../models/Course');

class SiteController extends BaseController {
  constructor() {
    super(Course);
  }
}

module.exports = new SiteController();
