const express = require("express");
const router = express.Router();
const talkController = require("../controllers/talkController");

router.route("/").get(talkController.Base);

module.exports = router;
