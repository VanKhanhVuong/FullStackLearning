const coursesRoute = require('./courses');
const siteRoute = require('./site');

function route(app) {

    // News route
    app.use('/courses', coursesRoute); 

    // Home route always end script
    app.use('/', siteRoute); 
}

module.exports = route;