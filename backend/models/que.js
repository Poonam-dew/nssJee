const mongoose = require("mongoose");

const optionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  image: { type: String, default: null },
});

const questionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  image: { type: String, default: null },
  options: [optionSchema],
  // Subject field added
}, { timestamps: true });


const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
