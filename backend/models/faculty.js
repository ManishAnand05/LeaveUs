const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  isHOD: { type: Boolean, default: false }, // True if faculty is an HOD
  department: { type: String, default: null }, // Only required if isHOD is true
});
module.exports = mongoose.model("Faculty", facultySchema);