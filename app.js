/* eslint-disable no-console */
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const chalk = require('chalk');

const apiRoute = require('./routes/apiRoute');
const webRoute = require('./routes/webRoute');
const config = require('./configs');
const middleware = require('./middlewares/authentication');


const app = express();

const { port } = config.server;

mongoose.connect(config.db, { useNewUrlParser: true });
mongoose.connection.on('error', () => {
  throw new Error('Connect fail ');
});
mongoose.connection.on('connected', () => {
  console.log(`Server is running on port ${chalk.red(port)}`);
  console.log(`Coonect to database: ${chalk.red(config.db)}`);
});
if (config.env === 'development') {
  mongoose.set('debug', true);
}
// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(middleware.jwtFunc());

app.use('/api', apiRoute);
app.use('/', webRoute);


app.use((err, request, response, next) => {
  if (err.name === 'UnauthorizedError') {
    return response.status(403).send({
      success: false,
      message: 'No token provided.',
    });
  }
  return next();
});
// fake data for api
app.locals.data = require('./models/data.json');

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
