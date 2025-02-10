// const db =require("../config/db.js");

// exports. getStudentInfo = async (req, res) => {
//   const { studentId } = req.query;
//   try {
//     const [rows] = await db.execute(
//       "SELECT id, username, email FROM students WHERE id = ?",
//       [studentId]
//     );

//     if (rows.length === 0) {
//       return res.status(404).json({ message: "Student not found" });
//     }

//     res.json(rows[0]);
//   } catch (error) {
//     console.error("Error fetching student info:", error);
//     res.status(500).send("Error fetching student info.");
//   }
// };
