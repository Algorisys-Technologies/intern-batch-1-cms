const express = require("express");
const router = express();
const Blog = require("../models/blog");

//GET ALL BLOGS
router.get("/get/blog", async (req, res) => {
  const blog = await Blog.findAll();
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
      console.log(data);
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

module.exports = router;
