const path = require('path');
const url = require('url');
const fs = require('fs');
const { parse } = require('path');
const sendMMS = require('../utility/sendMMs');
const sendSMSfuction = require('../utility/sendSMS');

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
  sendMMS(req.body.email, 'nothing', `how are you ${req.body.name}`);
  sendSMSfuction(req.body.cell, `hi ${req.body.name} How are you?`);
  res.json(req.body);
  console.log(req.body.cell);
  console.log(req.body.name);
};

// database
const allBlog = (req, res) => {
  const blog = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../db/blog.json'))
  );
  const food = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../db/food.json'))
  );
  const slider = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../db/slider.json'))
  );
  const staff = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../db/staff.json'))
  );
  res.render('database/all', {
    blog: blog,
    food: food,
    slider: slider,
    staff: staff,
  });
};
const editBlog = (req, res) => {
  const blog = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../db/blog.json'))
  );
  res.render('database/edit', {
    blog: blog,
  });
};
const createBlog = (req, res) => {
  res.render('database/blog');
};
const createFood = (req, res) => {
  res.render('database/food');
};
const createSlider = (req, res) => {
  res.render('database/slider');
};
const createStaff = (req, res) => {
  res.render('database/staff');
};

const addBlogpost = (req, res) => {
  const blog = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../db/blog.json'))
  );
  blog.push({
    id: blog.length - 1 + 1,
    img: req.file.filename,
    title: req.body.title,
    dis: req.body.dis,
    post_time: req.body.post_time,
  });
  fs.writeFileSync(
    path.join(__dirname, '../db/blog.json'),
    JSON.stringify(blog)
  );
  res.redirect('/admin');
};

// food post
const addfoodpost = (req, res) => {
  const food = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../db/food.json'))
  );
  food.push({
    id: food.length - 1 + 1,
    img: req.file.filename,
    title: req.body.title,
  });
  fs.writeFileSync(
    path.join(__dirname, '../db/food.json'),
    JSON.stringify(food)
  );
  res.redirect('/admin');
};

// slider
const addSliderpost = (req, res) => {
  const slider = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../db/slider.json'))
  );
  slider.push({
    id: slider.length - 1 + 1,
    img: req.file.filename,
    title: req.body.title,
    dis: req.body.dis,
    post_time: req.body.post_time,
  });
  fs.writeFileSync(
    path.join(__dirname, '../db/slider.json'),
    JSON.stringify(slider)
  );
  res.redirect('/admin');
};
// staff
const addstaffpost = (req, res) => {
  const staff = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../db/staff.json'))
  );
  staff.push({
    id: staff.length - 1 + 1,
    img: req.file.filename,
    title: req.body.name,
  });
  fs.writeFileSync(
    path.join(__dirname, '../db/staff.json'),
    JSON.stringify(staff)
  );
  res.redirect('/admin');
};

// delete blog
const deleteBlog = (req, res) => {
  const blog = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../db/blog.json'))
  );
  const afterDelete = blog.filter((data) => data.id != req.params.id);
  fs.writeFileSync(
    path.join(__dirname, '../db/blog.json'),
    JSON.stringify(afterDelete)
  );

  res.redirect('/admin');
};

// delete foood
const deletefood = (req, res) => {
  const food = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../db/food.json'))
  );
  const afterDeletefood = food.filter(
    (data) => data.id != req.params.id
  );
  fs.writeFileSync(
    path.join(__dirname, '../db/food.json'),
    JSON.stringify(afterDeletefood)
  );

  res.redirect('/admin');
};
// delete slider
const deleteslider = (req, res) => {
  const slider = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../db/slider.json'))
  );
  const afterdeleteslider = slider.filter(
    (data) => data.id != req.params.id
  );
  fs.writeFileSync(
    path.join(__dirname, '../db/slider.json'),
    JSON.stringify(afterdeleteslider)
  );

  res.redirect('/admin');
};
// delete staff
const deletestaff = (req, res) => {
  const staff = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../db/staff.json'))
  );
  const afterdeletestaff = staff.filter(
    (data) => data.id != req.params.id
  );
  console.log(afterdeletestaff);
  fs.writeFileSync(
    path.join(__dirname, '../db/staff.json'),
    JSON.stringify(afterdeletestaff)
  );

  res.redirect('/admin');
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
  allBlog,
  createBlog,
  createFood,
  createSlider,
  createStaff,
  addBlogpost,
  addfoodpost,
  addSliderpost,
  addstaffpost,
  editBlog,
  deleteBlog,
  deletefood,
  deleteslider,
  deletestaff,
};
