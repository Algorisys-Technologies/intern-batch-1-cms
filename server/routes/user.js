const express = require("express");
const router = express();
const jsonwbt = require("jsonwebtoken");
const { Sequelize, where } = require("sequelize");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const sendVerificationEmail = require("../helper/user");

const req = require("express/lib/request");
const res = require("express/lib/response");

//GET ALL USERS
router.get("/getUser", async (req, res) => {
  const user = await User.findAll();
  res.send(user);
  // console.log(process.env);
});

//GET USERNAME BY USER EMAIL
// router.get("/getUser/:email", async (req, res) => {
//   const user = await User.findOne({ where: { user_email: req.params.email } });
//   return res.send(user.user_name);
// });

//REGISTER-USER/SIGNUP
router.post("/register", async (req, res) => {
  // Check whether user email exists already
  const user = await User.findOne({
    where: { user_email: req.body.user_email },
  });
  if (user) {
    return res.send("username already taken. Try with another one !");
  }

  // Generating salt and saving user
  const salt = await bcrypt.genSalt(10);
  req.body.user_password = await bcrypt.hash(req.body.user_password, salt);

  User.create(req.body)
    .then((data) => {
      res.send("An email has been sent for user verification");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });

  // encrypted URL token generation for User Verification
  const token = jsonwbt.sign(
    { user_email: req.body.user_email },
    "untoldSecretKey"
  );

  const requiredurl = `http://localhost:3001/activateuser/${token}`;

  // send email verification using node mailer

  sendVerificationEmail(requiredurl, req.body.user_email);
});

//LOGIN
router.post("/login", async (req, res) => {
  const user = await User.findOne({
    where: { user_email: req.body.user_email },
  });
  if (!user) {
    return res.send({ status: 404, message: "User not found" });
  }
  var passwordIsValid = bcrypt.compareSync(
    req.body.user_password,
    user.user_password
  );

  // Check password validity
  if (!passwordIsValid) {
    return res.send({ status: 400, message: "Invalid Email OR password !!" });
  }
  // LOGIC TO CHECK USER IS VERFIED OR NOT
  if (!user.user_email_verified) {
    // --> ***Sending email for unverified user***
    // encrypted URL token generation for User Verification
    const token = jsonwbt.sign(
      { user_email: req.body.user_email },
      "untoldSecretKey"
    );

    const requiredurl = `http://localhost:3001/activateuser/${token}`;

    // send email verification using node mailer

    sendVerificationEmail(requiredurl, req.body.user_email);
    res.send("An email has been sent for user verification");
  }

  if (user.user_email_verified) {
    res.send({
      message: "Sign-in successfully!!",
      username: user.user_name,
      status: 200,
    });
  }
});

//ACTIVATE USER BY EMAIL VERIFICATION
router.get("/activateuser/:userId", (req, res) => {
  try {
    var decoded_token = jsonwbt.verify(req.params.userId, "untoldSecretKey");
  } catch (e) {
    return res.status(400).send("Invalid Signature");
  }
  User.update(
    { user_email_verified: true },
    { where: { user_email: decoded_token.user_email } }
  );
  res.status(200).send("Account verified"); // + user.user_name);
});

//DELETE USER

module.exports = router;
