const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const indexRouter = require('./routes/index');
const skillsRouter = require('./routes/skills');

const app = express();



//Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//Mount middleware (app.use)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', skillsRouter);




  // for HTTP requests from clients
app.listen(3000, function () {
    console.log('Listening on port 3000');
  });
module.exports = app;
