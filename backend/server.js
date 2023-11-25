const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const home = require("./routes/home");
const talk = require("./routes/talk");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cors()); //2 frontends so allowing access from anywhere(no restriction)
app.use("/home", home);
app.use("/talk", talk);
if (!fs.existsSync(path.join(__dirname, "public"))) {
  fs.mkdirSync(path.join(__dirname, "public"));
}

app.use("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ Alert: "404 Error" });
  } else {
    res.type("txt").send("404 Error");
  }
});

async function start() {
  try {
    app.listen(port, console.log(`Servers up on port ${port}`));
  } catch (err) {
    console.error(err);
  }
}

start();
