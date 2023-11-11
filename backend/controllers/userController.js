require("dotenv").config();
const privateKey = process.env.privateKey;
const privateID = process.env.projectID;
const Axios = require("axios");

async function getUserSpecific(req, res) {
  const { username, secret } = req.body;

  try {
    const r = await Axios.get("https://api.chatengine.io/users/me/", {
      headers: {
        "Project-ID": privateID,
        username: username,
        password: secret,
      },
    })
      .then((r) => {
        res.json(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
  } catch (err) {
    console.error(err);
  }
}

module.exports = {getUserSpecific};