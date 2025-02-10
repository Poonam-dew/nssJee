const mongoose = require("mongoose");
const testSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true }, // Time stored as string (e.g., "10:00 AM")
});

const Test = mongoose.model("Test", testSchema);
export default Test;

