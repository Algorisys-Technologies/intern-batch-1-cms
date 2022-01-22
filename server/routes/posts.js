const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const router = express();
const { Sequelize } = require("sequelize");
const Post = require("../models/post");

const sequelize = new Sequelize("cms_database", "postgres", "mzaki2599", {
  host: "localhost",
  dialect: "postgres",
});

router.post("/post", async (req, res) => {
  Post.create({
    user_id: req.body.user_id,
    post_title: req.body.post_title,
    categories: req.body.categories,
    status: req.body.status,
    post_content: req.body.post_content,
    created_at: req.body.created_at,
    created_by: req.body.created_by,
  })
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
});

module.exports = router;
