const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const questionRoutes = require("./routes/question");
// const studentRoutes = require("./routes/studentRoutes.js") ;
// const testRoutes =require( "./routes/testRoutes.js");



dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api", authRoutes);
app.use("/api", questionRoutes);

// app.use("/api", studentRoutes);
// app.use("/api", testRoutes);

// app.get("/", (req, res) => {
//   res.send("Student Dashboard API is running...");
// });

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
