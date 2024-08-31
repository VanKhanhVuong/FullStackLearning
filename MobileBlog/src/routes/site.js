const express  = require('express');
const route = express.Router();
const siteController = require('..\\app\\controllers\\SiteController');

// Always end script
route.use('/', siteController.index);

module.exports = route;