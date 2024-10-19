const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }, // You should hash passwords in a real application
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
