const Question = require('../models/que'); // Import the Question model

// Controller to handle the creation of a question
exports.createQuestion = async (req, res) => {
  const { text, options } = req.body;

  try {
    // Check how many questions exist for the chosen subject
    // const questionCount = await Question.countDocuments({ subject });

    // Allow a maximum of 30 questions per subject
   // if (questionCount >= 30) {
     // return res.status(400).json({ message: `Cannot add more than 30 questions for ${subject}.` });
   // }

    // Create the new question
    const newQuestion = new Question({
      text,
      options,
     
    });

    await newQuestion.save();
    res.status(201).json({ message: 'Question added successfully!' });
  } catch (error) {
    console.error('Error adding question:', error);
    res.status(500).json({ message: 'Error adding question' });
  }
};
