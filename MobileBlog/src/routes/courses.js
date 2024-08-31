const express  = require('express');
const route = express.Router();
const courseController = require('..\\app\\controllers\\CourseController');

route.use('/:slug', courseController.show);

// Always end script
route.use('/', courseController.index);

module.exports = route;