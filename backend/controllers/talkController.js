const Axios = require("axios");
const talkSecret = process.env.talkSecret;
const rateLimiter = require("express-rate-limiter");

const limiter = rateLimiter({
  windowMs: 9 * 1000, // 9 Seconds https://talkjs.com/docs/Reference/REST_API/Getting_Started/Introduction/ (under Rate-Limits)
  max: 600,
  headers: true, // Include headers with error response
});

rateLimiter.apply(limiter, Base);

async function Base(req, res) {
  try {
    await limiter(req, res);
    const r = await Axios.get("https://api.talkjs.com", {
      headers: {
        Authorization: `Bearer ${talkSecret}`,
        "Content-Type": "application/json",
      },
    }).then((r) => {
      res.json(r.data).status(r.status);
    });
  } catch (err) {
    console.error(err);
  }
}

module.exports = { Base };
