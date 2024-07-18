const mongoose = require('mongoose');

const mosqueSchema = new mongoose.Schema({
  mosqueName: { type: String, required: true },
  registrationNumber: { type: Number, required: true, unique: true },
  location: { type: String, required: true },
  imageUrl: { type: String, required: true }
});

const Mosque = mongoose.model('Mosque', mosqueSchema);

module.exports = Mosque;
