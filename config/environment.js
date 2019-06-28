const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  expressPort: process.env.EXPRESS_PORT || 3000,
  environment: process.env.NODE_ENV || 'devolepment',
  datadase: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect:process.env.DB_DIALECT,
    operatorsAliases: process.env.DB_OPERATORS_ALIASES
  }
}