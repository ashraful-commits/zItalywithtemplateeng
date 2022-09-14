const express = require('express');
const {
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
  addBlogpost,
  editBlog,
  deleteBlog,
  createFood,
  createSlider,
  createStaff,
  addfoodpost,
  addSliderpost,
  addstaffpost,
  deletefood,
  deleteslider,
  deletestaff,
} = require('../controllers/pageControllers');
const {
  postMulter,
  foodMulter,
  sliderMulter,
  staffMulter,
} = require('../middlewares/middlewars');

const router = express.Router();

router.get('/', homepageshow);
router.get('/home', homepageshow);
router.get('/blog', archivepageshow);
router.get('/blog/:id', singlepageshow);
router.get('/home/:id', singlehomepageshow);
router.get('/gallery', gallerypageshow);
router.get('/location', locationpageshow);
router.get('/menu', menupageshow);
router.get('/news', newspageshow);
router.get('/reservation', reservationpageshow);
router.post('/contact', sendEmail);
router.get('/staff', staffpageshow);
router.get('/blogpost', createBlog);
router.get('/food', createFood);
router.get('/slider', createSlider);
router.get('/staffpost', createStaff);
router.post('/blogpost', postMulter, addBlogpost);
router.post('/food', foodMulter, addfoodpost);
router.post('/slider', sliderMulter, addSliderpost);
router.post('/staffpost', staffMulter, addstaffpost);
// database
router.get('/admin', allBlog);
router.get('/admin/:id', deleteBlog);
router.get('/admin/:id', deletefood);
router.get('/admin/:id', deleteslider);
router.get('/admin/:id', deletestaff);
router.get('/admin/:id', editBlog);

module.exports = router;
