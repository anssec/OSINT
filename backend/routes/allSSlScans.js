const express = require("express");
const { testsslRun } = require("../controllers/testsslRun");
const router = express.Router();

router.post("/testssl/:id", testsslRun);

module.exports = router;
