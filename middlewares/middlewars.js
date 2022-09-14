const multer = require('multer');
const path = require('path');

// storage1
const storage1 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../public/blog'));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const postMulter = multer({
  storage: storage1,
}).single('photo');

// storage2
const storage2 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../public/food'));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const foodMulter = multer({
  storage: storage2,
}).single('photo');

// storage 3
const storage3 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../public/slider'));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const sliderMulter = multer({
  storage: storage3,
}).single('photo');

// storage4
const storage4 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../public/staff'));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const staffMulter = multer({
  storage: storage4,
}).single('photo');

// export multer
module.exports = {
  postMulter,
  foodMulter,
  sliderMulter,
  staffMulter,
};
