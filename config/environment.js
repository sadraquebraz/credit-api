const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  expressPort: process.env.EXPRESS_PORT || 3000,
  environment: process.env.NODE_ENV || 'devolepment'
}