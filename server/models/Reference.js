const mongoose = require("mongoose");

const ReferenceSchema = new mongoose.Schema({
  name: String,
  testimonial: String,
  position: String,
  company: String
});

module.exports = mongoose.model("Reference", ReferenceSchema);