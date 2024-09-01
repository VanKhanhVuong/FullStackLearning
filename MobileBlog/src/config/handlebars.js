const exphbs = require('express-handlebars');
const path = require('path');
const { formatDate } = require('../util/date');

module.exports = (app) => {
    const hbsHelpers = {
        formatDate,
        sum: (a, b) => a + b,
    };

    app.engine('hbs', exphbs.engine({
        extname: '.hbs',
        helpers: hbsHelpers,
    }));

    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, '../resources/views'));
};
