const express = require("express");
const router = express();
const Blog = require("../models/blog");
const Post = require("../models/post");

//GET ALL BLOGS
router.get("/get/blog", async (req, res) => {
  const blog = await Blog.findAll();
  res.status(200).send(blog);
  // res.send({
  //   status: 200,
  //   blog: blog,
  // });
});

//Get Blog Name by ID
router.get("/get/blog/:id", async (req, res) => {
  const blog = await Blog.findOne({ where: { blog_id: req.params.id } });
  res.status(200).send(blog);
});

//CREATE A NEW BLOG
router.post("/create/blog", async (req, res) => {
  const blog = Blog.create({
    user_id: req.body.user_id,
    blog_title: req.body.blog_title,
    status: req.body.status,
    created_at: req.body.created_at,
    created_by: req.body.created_by,
    summary: req.body.summary,
    blog_image: req.body.blog_image,
  })
    .then((data) => {
      res.send({
        status: "success",
        message: "Blog saved successfully",
      });
    })
    .catch((err) => {
      res.status(500).send({
        status: "failure",
        message: err.message,
      });
    });
});

//Delete Blog by Blog Id
router.delete("/delblog/:blog_id", async (req, res) => {
  const blog = await Post.findAll({
    where: {
      blog_id: req.params.blog_id,
    },
  });
  if (blog) {
    try {
      await Post.destroy({
        where: {
          blog_id: req.params.blog_id,
        },
      });
      await Blog.destroy({
        where: {
          blog_id: req.params.blog_id,
        },
      });
      res.send({
        status: 200,
        message: "Blog deleted successfully",
      });
    } catch (err) {
      res.send({
        status: 500,
        message: err.message,
      });
    }
  } else {
    res.send("Blog does not exist");
  }
});

module.exports = router;
