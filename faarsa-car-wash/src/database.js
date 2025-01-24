//src/database.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

// Definisi model User
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  alamat: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  noHp: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Definisi model CarType
const CarType = sequelize.define('CarType', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  tipe: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Definisi model Transaction
const Transaction = sequelize.define('Transaction', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  noAntrian: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  noNota: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  total: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  penanggungJawab: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Definisi model Registration
const Registration = sequelize.define('Registration', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  noAntrian: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  jamDaftar: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nomorPlat: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  jenisCucian: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  totalBiaya: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Definisi model Feedback
const Feedback = sequelize.define('Feedback', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pesan: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pointKebersihan: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pointKeramahan: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pointKetelitian: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Definisi model Customer
const Customer = sequelize.define('Customer', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  noHp: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  alamat: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nomorPlat: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipeMobil: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Model untuk tabel Login
const Login = sequelize.define('Login', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Sinkronisasi model dengan database
sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});

module.exports = {
  User,
  CarType,
  Transaction,
  Registration,
  Feedback,
  Customer,
};