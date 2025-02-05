// models/Teacher.js
const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const Teacher = mongoose.model('Teacher', TeacherSchema);

module.exports = Teacher;
