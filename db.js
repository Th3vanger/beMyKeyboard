const mongoose = require('mongoose');

module.exports = connectToDatabase = () => {

  return mongoose.connect(process.env.MONGO_DB_URL)
};