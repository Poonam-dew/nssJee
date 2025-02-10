import db from "../config/db.js";

// Fetch upcoming tests
export const getUpcomingTests = async (req, res) => {
  try {
    const [rows] = await db.execute(
      "SELECT id, name, date, time FROM tests WHERE date >= CURDATE()"
    );
    res.json(rows);
  } catch (error) {
    console.error("Error fetching upcoming tests:", error);
    res.status(500).send("Error fetching upcoming tests.");
  }
};

// Fetch given tests (tests completed by student)
export const getGivenTests = async (req, res) => {
  const { studentId } = req.query;
  try {
    const [rows] = await db.execute(
      "SELECT tests.name, tests.date, student_tests.obtained_marks, student_tests.total_marks FROM student_tests JOIN tests ON student_tests.test_id = tests.id WHERE student_tests.student_id = ?",
      [studentId]
    );
    res.json(rows);
  } catch (error) {
    console.error("Error fetching given tests:", error);
    res.status(500).send("Error fetching given tests.");
  }
};



// Submit test results
export const submitTestResults = async (req, res) => {
    try {
      const { studentId, testId, obtainedMarks, totalMarks } = req.body;
  
      if (!studentId || !testId || obtainedMarks === undefined || !totalMarks) {
        return res.status(400).json({ error: "Missing required fields" });
      }
  
      // Check if the student has already submitted the test
      const existingTest = await StudentTest.findOne({ studentId, testId });
  
      if (existingTest) {
        return res.status(400).json({ error: "Test already submitted" });
      }
  
      // Save test results
      const newTestResult = new StudentTest({
        studentId,
        testId,
        obtainedMarks,
        totalMarks,
      });
  
      await newTestResult.save();
      res.status(200).json({ message: "Test submitted successfully" });
    } catch (error) {
      console.error("Error submitting test results:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };