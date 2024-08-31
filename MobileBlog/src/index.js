// Init Lib
const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');
const routes = require('./routes');
const db = require('./config/db');

const app = express();
const port = 3000;

// Connect to Database
db.connect();

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// HTTP Logger
app.use(morgan('combined'));

// Template Engine
app.engine('hbs', exphbs.engine({ extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

// Routes initialization
routes(app);

app.listen(port, () => { console.log(`Listening on port ${port}`)});
