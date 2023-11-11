require("dotenv").config();
const privateKey = process.env.privateKey;
const privateID = process.env.projectID;
const Axios = require("axios");

async function getByID(req, res) {
  const { id } = req.params;
  const parsedID = parseInt(id);

  try {
    const r = await Axios.get(`https://api.chatengine.io/users/${parsedID}/`, {
      headers: {
        privateKey: privateKey,
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

async function postbyID(req, res) {
  const { id } = req.params;
  const parsedID = parseInt(id);

  try {
    const r = await Axios.get(`https://api.chatengine.io/users/${parsedID}/`, {
      headers: {
        privateKey: privateKey,
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

async function deletebyID(req, res) {
  const { id } = req.params;
  const parsedID = parseInt(id);

  try {
    const r = await Axios.get(`https://api.chatengine.io/users/${parsedID}/`, {
      headers: {
        privateKey: privateKey,
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

module.exports = { getByID, postbyID, deletebyID };
