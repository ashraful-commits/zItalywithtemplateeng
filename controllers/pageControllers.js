const path = require('path');
const url = require('url');
const fs = require('fs');
const { parse } = require('path');
const nodemailer = require('nodemailer');

const homepageshow = (req, res) => {
  const welcome = fs.readFileSync(
    path.join(__dirname, '../db/welcome.json')
  );
  const slider = fs.readFileSync(
    path.join(__dirname, '../db/slider.json')
  );
  res.render('index', {
    welcome: JSON.parse(welcome.toString()),
    slider: JSON.parse(slider.toString()),
  });
};
const archivepageshow = (req, res) => {
  const blog = fs.readFileSync(
    path.join(__dirname, '../db/blog.json')
  );
  res.render('archive', {
    blog: JSON.parse(blog.toString()),
  });
};
const singlepageshow = (req, res) => {
  const blog = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../db/blog.json'))
  );

  const singlepost = blog.find((data) => data.id == req.params.id);

  res.render('single', {
    post: singlepost,
  });
};
const singlehomepageshow = (req, res) => {
  const welcome = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../db/welcome.json'))
  );

  const wellcomesinglepost = welcome.find(
    (data) => data.id == req.params.id
  );

  res.render('singlehome', {
    post: wellcomesinglepost,
  });
};
const gallerypageshow = (req, res) => {
  const gallery = fs.readFileSync(
    path.join(__dirname, '../db/gallery.json')
  );
  res.render('gallery', {
    gallery: JSON.parse(gallery.toString()),
  });
};
const locationpageshow = (req, res) => {
  res.render('location');
};

const menupageshow = (req, res) => {
  const pasta = fs.readFileSync(
    path.join(__dirname, '../db/pasta.json')
  );
  const starters = fs.readFileSync(
    path.join(__dirname, '../db/starters.json')
  );
  const salads = fs.readFileSync(
    path.join(__dirname, '../db/salads.json')
  );
  const fastFood = fs.readFileSync(
    path.join(__dirname, '../db/fastFood.json')
  );
  const seafood = fs.readFileSync(
    path.join(__dirname, '../db/seafood.json')
  );
  const chefspacial = fs.readFileSync(
    path.join(__dirname, '../db/chefspacial.json')
  );
  res.render('menu', {
    pasta: JSON.parse(pasta.toString()),
    starters: JSON.parse(starters.toString()),
    salads: JSON.parse(salads.toString()),
    fastFood: JSON.parse(fastFood.toString()),
    seafood: JSON.parse(seafood.toString()),
    chefspacial: JSON.parse(chefspacial.toString()),
  });
};
const newspageshow = (req, res) => {
  res.render('news');
};
const reservationpageshow = (req, res) => {
  res.render('reservation');
};
const staffpageshow = (req, res) => {
  const staff = fs.readFileSync(
    path.join(__dirname, '../db/staff.json')
  );
  res.render('staff', {
    staff: JSON.parse(staff.toString()),
  });
};

// contact form
const sendEmail = (req, res) => {
  const transpoter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: 'ashrafulalam10000@gmail.com',
      pass: 'gaqcgjhvmjslshqu',
    },
  });
  transpoter.sendMail({
    from: 'ashrafulalam10000@gmail.com',
    to: req.body.email,
    subject: 'everything sucessfully done !',
    text: `hi ${req.body.name}, how are you ?`,
  });
  res.json(req.body);
};
module.exports = {
  homepageshow,
  archivepageshow,
  gallerypageshow,
  locationpageshow,
  menupageshow,
  newspageshow,
  reservationpageshow,
  staffpageshow,
  singlepageshow,
  singlehomepageshow,
  sendEmail,
};
