const sequelize = require('../config/database');
const Customer = require('./Customer');
const Feedback = require('./Feedback');
const JenisCucian = require('./JenisCucian');
const Laporan = require('./Laporan');
const Pendaftaran = require('./Pendaftaran');
const Transaksi = require('./Transaksi');
const TypeMobil = require('./TypeMobil');
const User = require('./User');

// Definisikan asosiasi jika diperlukan

sequelize.sync({ force: true }).then(() => {
  console.log('Database & tabel telah dibuat!');
});

module.exports = {
  Customer,
  Feedback,
  JenisCucian,
  Laporan,
  Pendaftaran,
  Transaksi,
  TypeMobil,
  User,
};