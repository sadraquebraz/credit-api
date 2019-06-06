const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  secret: process.env.SECRET,
  environment: process.env.NODE_ENV
}