const {
    Sequelize
  } = require('sequelize');
  const fs = require('fs');
  const path = require('path');
  const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    SERVER,
  } = process.env;
  const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${SERVER}`, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  });

  module.exports = sequelize;