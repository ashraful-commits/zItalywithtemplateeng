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
} = require('../controllers/pageControllers');

const router = express.Router();

router.get('/', homepageshow);
router.get('/home', homepageshow);
router.get('/blog', archivepageshow);
router.get('/gallery', gallerypageshow);
router.get('/location', locationpageshow);
router.get('/menu', menupageshow);
router.get('/news', newspageshow);
router.get('/reservation', reservationpageshow);
router.get('/staff', staffpageshow);

module.exports = router;
