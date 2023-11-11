require("dotenv").config();
const privateKey = process.env.privateKey;
const privateID = process.env.projectID;
const Axios = require("axios");

async function getUsers(req, res) {
  try {
    const response = await Axios.get("https://api.chatengine.io/users/", {
      headers: {
        "PRIVATE-KEY": privateKey,
      },
    });

    if (response.status >= 200 && response.status < 300) {
      res.status(response.status).json(response.data);
    } else {
      console.error(`Error: ${response.status} - ${response.statusText}`);
      res.status(response.status).json({ error: "Failed to create user" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function createUser(req, res) {
  const { username, first_name, last_name, secret, custom_json, email } =
    req.query;
  try {
    const response = await Axios.post(
      "https://api.chatengine.io/users/",
      {
        username,
        first_name,
        last_name,
        secret,
        custom_json,
        email,
      },
      {
        headers: {
          "PRIVATE-KEY": privateKey,
        },
      }
    );

    if (response.status >= 200 && response.status < 300) {
      res.status(response.status).json(response.data);
    } else {
      console.error(`Error: ${response.status} - ${response.statusText}`);
      res.status(response.status).json({ error: "Failed to create user" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function updateUser(req, res) {
  const { username, secret } = req.body;
  try {
    const response = await Axios.put(
      "https://api.chatengine.io/users/",
      {
        username,
        secret,
      },
      {
        headers: {
          "PRIVATE-KEY": privateKey,
        },
      }
    );

    if (response.status >= 200 && response.status < 300) {
      res.status(response.status).json(response.data);
    } else {
      console.error(`Error: ${response.status} - ${response.statusText}`);
      res.status(response.status).json({ error: "Failed to create user" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = { getUsers, createUser, updateUser };
