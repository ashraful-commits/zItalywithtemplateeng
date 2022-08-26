const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const path = require('path');
const url = require('url');
const pageRoute = require('./routes/pageRouter');
const exprssLayout = require('express-ejs-layouts');

// dotenv config
dotenv.config();

// environment const
const port = process.env.PORT || 400;

// init express
const app = express();

// json contact
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//template engine
app.set('view engine', 'ejs');
app.use(exprssLayout);
app.set('layout', 'layouts/app');

//page router
app.use(pageRoute);
app.use(express.static('public'));

// sever creating
app.listen(port, () => {
  console.log(`server is running ${port}`.bgMagenta);
});
