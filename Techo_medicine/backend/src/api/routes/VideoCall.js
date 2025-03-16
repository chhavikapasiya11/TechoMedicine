const express = require("express");
const { createCallSession } = require("../services/VideoCallService");
const router = express.Router();

router.post("/start", createCallSession);

module.exports = router;
