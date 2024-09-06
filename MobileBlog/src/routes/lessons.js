const express = require('express');
const route = express.Router();
const lessonController = require('../app/controllers/LessonController');

// Create Lesson Page
route.get('/create', lessonController.create);

// Store a new Lesson
route.post('/store', lessonController.store);

module.exports = route;