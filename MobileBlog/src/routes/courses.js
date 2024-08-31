const express  = require('express');
const route = express.Router();
const courseController = require('..\\app\\controllers\\CourseController');

// Always end script
route.get('/course', courseController.index);

module.exports = route;