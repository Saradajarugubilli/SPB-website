const mongoose = require('mongoose'); // ✅ This line is required

const userSchema = new mongoose.Schema({
  guardian: String,
  email: String,         // ✅ include email field
  phone: String,
  location: String,
  dog_name: String,
  breed: String,
  age: Number,
  vaccination: Date,
  health: String
});

module.exports = mongoose.model('User', userSchema);
