const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const models = require('./models');

const app = express();
app.use(bodyParser.json());

// Definisikan rute di sini

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {
    console.log('Koneksi berhasil.');
    app.listen(PORT, () => {
      console.log(`Server berjalan di port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Tidak dapat terhubung ke database:', err);
  });