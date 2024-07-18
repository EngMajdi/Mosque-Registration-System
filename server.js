const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan'); // إضافة morgan
const userRoutes = require('./routes/userRoutes');
const mosqueRoutes = require('./routes/mosqueRoutes');

const app = express();

mongoose.connect('mongodb://localhost/mosqueDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// استخدام morgan لتسجيل الطلبات
app.use(morgan('dev'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);
app.use('/api/mosques', mosqueRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
