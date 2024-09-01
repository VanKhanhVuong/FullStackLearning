const meRoute = require('./me');
const coursesRoute = require('./courses');
const siteRoute = require('./site');

function route(app) {

    app.use('/me', meRoute);

    // Course route
    app.use('/courses', coursesRoute); 

    // Home route always end script
    app.use('/', siteRoute); 
}

module.exports = route;