const mongoose = require("mongoose");

const studentTestSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  testId: { type: mongoose.Schema.Types.ObjectId, ref: "Test", required: true },
  obtainedMarks: { type: Number, required: true },
  totalMarks: { type: Number, required: true },
});

const StudentTest = mongoose.model("StudentTest", studentTestSchema);
export default StudentTest;
