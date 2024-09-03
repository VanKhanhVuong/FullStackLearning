const express  = require('express');
const route = express.Router();
const courseController = require('../app/controllers/CourseController');

// Create Course Page
route.get('/create', courseController.create);

// Store a new Course
route.post('/store', courseController.store);

// Summit From Action [Delete Courses]
route.post('/handle-from-actions', courseController.handleFromActions);

// Get Course for update Course
route.get('/:id/edit', courseController.edit);

// Update Course
route.put('/:id', courseController.update);

// Soft Delete Course
route.delete('/:id', courseController.destroy);

// Restore Course
route.patch('/:id/restore', courseController.restore);

// Force Delete Course
route.delete('/:id/force', courseController.forceDestroy);

// Always end script
route.get('/:slug', courseController.show);

module.exports = route;