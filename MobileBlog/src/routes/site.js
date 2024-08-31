const express  = require('express');
const router = express.Router();
const siteController = require('..\\app\\controllers\\SiteController');

router.get('/home', (req, res) => siteController.getAll(req, res));
router.get('/home/:id', (req, res) => siteController.getOne(req, res));
router.post('/home', (req, res) => siteController.create(req, res));
router.put('/home/:id', (req, res) => siteController.update(req, res));
router.delete('/home/:id', (req, res) => siteController.delete(req, res));

module.exports = router;