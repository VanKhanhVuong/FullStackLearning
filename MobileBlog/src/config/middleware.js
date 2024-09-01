const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const path = require('path');

module.exports = (app) => {
    // Static Files
    app.use(express.static(path.join(__dirname, '../public')));

    // Body Parser Middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // HTTP Logger
    app.use(morgan('combined'));

    // Method Override Middleware
    app.use(methodOverride('_method'));
};