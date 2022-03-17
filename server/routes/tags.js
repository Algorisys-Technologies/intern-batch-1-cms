const express = require("express");
const router = express();
const Tag = require("../models/tags");

router.get("/tags", async (req, res) => {
  const Tags = await Tag.findAll();
  if (Tags) {
    res.send({
      tags: Tags,
      message: "Tags sent successfully",
      status: 200,
    });
  }
  res.send({
    message: "Tag not found",
    status: 400,
  });
});

router.get("/tags/:tag_name", async (req, res) => {
  const Tags = await Tag.findOne({ where: { tag_name: req.params.tag_name } });
  if (Tags) {
    res.send({
      message: "Tag found",
      status: 200,
    });
  }
  res.send({
    message: "Tag Not found",
    status: 400,
  });
});

router.post("/tags", (req, res) => {
  const Tags = Tag.create({
    tag_name: req.body.tag_name,
    created_by: req.body.created_by,
    created_at: req.body.created_at,
  })
    .then((tags) => {
      res.send({
        message: "Tags created successfully",
        status: 200,
      });
    })
    .catch((err) => {
      res.send({
        message: err.message,
        status: 400,
      });
    });
});

module.exports = router;
