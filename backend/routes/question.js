const express = require("express");
const Question = require("../models/que.js");
const router = express.Router();

// Endpoint to get all questions
router.get("/questions", async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);  // Will include correctAnswer field in the response
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch questions", error: err.message });
  }
});

// Endpoint to add questions (for admin usage)
router.post("/questions", async (req, res) => {
  const { text, image, options } = req.body;

  try {
    // Create a new question instance
    const newQuestion = new Question({
      text,
      image,
      options,
    });

    // Save the question to the database
    const savedQuestion = await newQuestion.save();
    res.status(201).json(savedQuestion);  // Respond with the saved question
  } catch (err) {
    res.status(500).json({ message: "Failed to save question", error: err.message });
  }
});

module.exports = router;
