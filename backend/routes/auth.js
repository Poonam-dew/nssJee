const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Generate JWT token
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// Signup
router.post("/signup", async (req, res) => {
  const { username, password, role } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(400).json({ message: "User already exists...Login instead" });

    const user = await User.create({ username, password, role });
    res.status(201).json({ success: true, message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

// Login
// Login
router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" }); // Return 404 if user is not found
      }
  
      const isPasswordCorrect = await user.matchPassword(password);
      if (!isPasswordCorrect) {
        return res.status(400).json({ success: false, message: "Invalid credentials" });
      }
  
      const token = generateToken(user._id, user.role);
      res.status(200).json({ success: true, role: user.role, token });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  });
  

// Google Login (Stub for now)
router.post("/google-login", (req, res) => {
  res.status(200).json({ success: true, role: "student" }); // Replace with actual Google OAuth logic
});

module.exports = router;
