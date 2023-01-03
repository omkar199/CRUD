const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
});

module.exports = mongoose.model('MyCollection', userSchema);
