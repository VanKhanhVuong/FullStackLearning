const express  = require('express');
const route = express.Router();
const courseController = require('../app/controllers/CourseController');

// Create Course Page
route.get('/create', courseController.create);

// Store a new Course
route.post('/store', courseController.store);

// Get Course for update Course
route.get('/:id/edit', courseController.edit);

// Update Course
route.put('/:id', courseController.update);

// Delete Course
route.delete('/:id', courseController.destroy);

// Always end script
route.get('/:slug', courseController.show);

module.exports = route;