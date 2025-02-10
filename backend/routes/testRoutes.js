const express = require('express');
const { getUpcomingTests, getGivenTests }=require("../controllers/testController.js");
const { submitTestResults } =require("../controllers/testController.js") ;

const router = express.Router();

router.get("/upcoming-tests", getUpcomingTests);
router.get("/given-tests", getGivenTests);
router.post("/submit-test", submitTestResults);

export default router;
