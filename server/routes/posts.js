const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const router = express();
const { Sequelize } = require("sequelize");
const Post = require("../models/post");

//GET ALL POST
router.get("/getPost", async (req, res) => {
  const post = await Post.findAll();
  res.send(post);
});

//GET POST BY USER ID
router.get("/getUserPost", async (req, res) => {
  const post = await Post.findAll({
    where: {
      user_id: req.body.user_id,
    },
  });
  if (!(post.length == 0)) {
    res.send(post);
  } else {
    res.send("Post does not exist for the given user");
  }
});

//POST A NEW POST
router.post("/post", async (req, res) => {
  const post = Post.create({
    user_id: req.body.user_id,
    post_title: req.body.post_title,
    categories: req.body.categories,
    status: req.body.status,
    post_content: req.body.post_content,
    created_at: req.body.created_at,
    created_by: req.body.created_by,
    summary: req.body.summary,
    post_image: req.body.post_image,
  })
    .then((data) => {
      console.log(data);
      res.send({
        status: "success",
        message: "Post saved successfully",
      });
    })
    .catch((err) => {
      res.status(500).send({
        status: "failure",
        message: err.message,
      });
    });
});

//UPDATE POST
router.put("/updatePost", async (req, res) => {
  const post = await Post.findOne({
    where: {
      post_id: req.body.post_id,
    },
  });
});

//DELETE POST BY POST ID
router.delete("/delPost", async (req, res) => {
  const { post_id } = await req.body;
  const post = await Post.findOne({
    where: {
      post_id: post_id,
    },
  });
  //console.log(post);
  if (post) {
    try {
      await Post.destroy({
        where: {
          post_id: post_id,
        },
      });
      res.send("Post deleted successfully");
    } catch (err) {
      res.send(err.message);
    }
  } else {
    res.send("Post does not exist");
  }
});

module.exports = router;
