const express = require('express');
const Mosque = require('../models/mosqueModel');
const auth = require('../middleware/auth');
const multer = require('multer');
const path = require('path');

const router = express.Router();

const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: function (req, file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb('Error: Images Only!');
    }
  }
}).single('imageUrl');

// Register Mosque
router.post('/register', auth, upload, async (req, res) => {
  const { mosqueName, registrationNumber, location } = req.body;
  const imageUrl = `/uploads/${req.file.filename}`;

  try {
    const mosqueExists = await Mosque.findOne({ registrationNumber });

    if (mosqueExists) {
      return res.status(400).json({ message: 'Mosque already exists' });
    }

    const mosque = await Mosque.create({ mosqueName, registrationNumber, location, imageUrl });

    res.status(201).json(mosque);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// View Mosques
router.get('/view', auth, async (req, res) => {
  try {
    const mosques = await Mosque.find();
    res.json(mosques);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Edit Mosque
router.put('/edit/:id', auth, async (req, res) => {
  const { mosqueName, registrationNumber, location } = req.body;

  try {
    const mosque = await Mosque.findById(req.params.id);

    if (!mosque) {
      return res.status(404).json({ message: 'Mosque not found' });
    }

    mosque.mosqueName = mosqueName || mosque.mosqueName;
    mosque.registrationNumber = registrationNumber || mosque.registrationNumber;
    mosque.location = location || mosque.location;

    await mosque.save();

    res.json(mosque);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
