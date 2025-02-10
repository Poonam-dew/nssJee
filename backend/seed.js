const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Question = require("./models/que");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const seedQuestions = async () => {
  const questions = [
    {
      text: "How are you?",
      image: "https://example.com/jee.png",
      options: [
        { text: "Fine", image: null },
        { text: "Good", image: null },
        { text: "Bad", image: null },
        { text: "Okay", image: null },
      ],
     // Correct option is "Good"
    },
    {
      text: "What is your favorite color?",
      image: null,
      options: [
        { text: "Red", image: "https://example.com/red.jpg" },
        { text: "Blue", image: "https://example.com/blue.jpg" },
        { text: "Green", image: "https://example.com/green.jpg" },
        { text: "Yellow", image: "https://example.com/yellow.jpg" },
      ],
      // Correct option is "Green"
    },
    {
      text: "What is your preferred mode of transport?",
      image: "https://example.com/transport.jpg",
      options: [
        { text: "Car", image: null },
        { text: "Bike", image: null },
        { text: "Walking", image: null },
        { text: "Bus", image: null },
      ],
      // Correct option is "Car"
    },
  ];

  await Question.deleteMany({});
  await Question.insertMany(questions);
  console.log("Database seeded!");
  process.exit();
};

seedQuestions();
