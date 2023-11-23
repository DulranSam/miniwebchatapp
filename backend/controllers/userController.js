require("dotenv").config();
const privateKey = process.env.privateKey;
const privateID = process.env.projectID;
const Axios = require("axios");

async function getUserSpecific(req, res) {
  const { username, secret } = req.body;

  try {
    const r = await Axios.post("https://api.chatengine.io/users/me/", {
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

async function CreateChat() {
  const { username, secret, title, is_direct_chat } = req.query;

  try {
    const r = await Axios.post(`https://api.chatengine.io/chats/`, {
      headers: {
        "Project-ID": privateID,
        username: username,
        password: secret,
      },
      data: {
        title,
        is_direct_chat,
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

async function getChats() {
  const { username, secret, title, is_direct_chat } = req.query;

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

async function getOrCreateChat() {
  const { username, secret } = req.query;

  try {
    const r = await Axios.get("https://api.chatengine.io/chats/", {
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

async function latestChats() {
  try {
    const r = await Axios.get(
      "https://api.chatengine.io/chats/latest/{{chat_count}}/",
      {
        headers: {
          "Project-ID": privateID,
          username: username,
          password: secret,
        },
      }
    )
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

async function chatsDetails() {
  try {
    const r = await Axios.get("https://api.chatengine.io/chats/{{chat_id}}/", {
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

module.exports = {
  getUserSpecific,
  CreateChat,
  getChats,
  getOrCreateChat,
  latestChats,
  chatsDetails,
};
