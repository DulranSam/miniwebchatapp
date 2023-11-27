const express = require("express");
const router = express.Router();
const talkController = require("../controllers/talkController");
const { rateLimit } = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 9 * 1000, // 9 Seconds https://talkjs.com/docs/Reference/REST_API/Getting_Started/Introduction/ (under Rate-Limits)
  max: 600,
  skip: (req) => {
    // Define condition to skip rate limiting if needed
    return false;
  },
});

router.route("/").get(limiter, talkController.Base);

module.exports = router;
