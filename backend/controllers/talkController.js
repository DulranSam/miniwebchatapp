const Axios = require("axios");
const talkSecret = process.env.talkSecret;

async function Base(req, res) {
  try {
    const response = await Axios.get("https://api.talkjs.com", {
      headers: {
        Authorization: `Bearer ${talkSecret}`,
        "Content-Type": "application/json",
      },
    });

    res.status(response.status).json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
}

async function CreateUser(req, res) {
  try {
    const response = await Axios.post(
      `https://api.talkjs.com/v1/YOUR_APP_ID/users/12081`,
      {
        headers: {
          Authorization: `Bearer ${talkSecret}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.status(response.status).json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = { Base, CreateUser };
