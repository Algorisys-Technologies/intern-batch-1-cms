const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server Started");
});

app.post("/createuser", (req, res) => {
  const user = {
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
  };
  res.send(user);
});

app.listen(3001);
