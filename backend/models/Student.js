const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
