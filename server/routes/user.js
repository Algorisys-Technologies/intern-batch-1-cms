const express = require("express");
const router = express();
const jsonwbt = require("jsonwebtoken");
const { Sequelize, where } = require("sequelize");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const req = require("express/lib/request");
const res = require("express/lib/response");

const sequelize = new Sequelize("cms_database", "postgres", "mzaki2599", {
  host: "localhost",
  dialect: "postgres",
});

router.get("/getUser", async (req, res) => {
  const user = await User.findAll();
  res.send(user);
});

router.post("/register", async (req, res) => {
  req.body.user_password = await bcrypt.hash(req.body.user_password, salt);
  const salt = await bcrypt.genSalt(10);

  User.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
});

router.post("/login", async (req, res) => {
  console.log(req.body);
  const user = await User.findOne({
    where: { user_email: req.body.user_email },
  });
  if (!user) {
    return res.status(404).send("User not found");
  }
  var passwordIsValid = function () {
    if (req.body.user_password === user.user_password) return true;
    else return false;
  };
  // bcrypt.compareSync(
  //   req.body.user_password,
  //   user.password
  // );
  console.log(req.body);
  // Check password validity
  if (!passwordIsValid) {
    console.log("Invalid Password! Try again");
    return res.status(401).send({
      accessToken: null,
      message: "Invalid Password!Try again",
    });
  }
  console.log("Sign-in successfully!!");
  res.status(200).send("Sign-in successfully!!");
});

router.get("/activate:userId", async (req, res) => {
  let ciphertext = req.params.userId;
  // Decrypt
  var bytes = CryptoJS.AES.decrypt(ciphertext, "secret");
  //console.log("bytes: ", bytes);
  var id = bytes.toString(CryptoJS.enc.Utf8);

  User.update({ user_email_verified: true }, { where: { user_email: email } });

  res.send("Account verified"); // + user.user_name);
});

module.exports = router;
