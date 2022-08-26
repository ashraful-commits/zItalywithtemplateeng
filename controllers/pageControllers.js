const path = require('path');
const url = require('url');
const fs = require('fs');
const { parse } = require('path');

const homepageshow = (req, res) => {
  const welcome = fs.readFileSync(
    path.join(__dirname, '../db/welcome.json')
  );
  res.render('index', {
    welcome: JSON.parse(welcome.toString()),
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

module.exports = {
  homepageshow,
  archivepageshow,
  gallerypageshow,
  locationpageshow,
  menupageshow,
  newspageshow,
  reservationpageshow,
  staffpageshow,
};
