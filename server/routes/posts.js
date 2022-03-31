const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const Post = require("../models/post");
const router = express();
//GET ALL POST
router.get("/getPost", async (req, res) => {
  const post = await Post.findAll();
  res.send(post);
});

//GET POST BY USER ID
// router.get("/getuserPost", async (req, res) => {
//   //console.log(req.body);

//   const post = await Post.findAll({ where: { user_id: req.body.user_id } });
//   // if (post) {
//   //   res.send(post);
//   // } else {
//   //   res.send("Post does not exist for the given user");
//   // }
//   res.status(200).send(post);
// });

//GET POST BY POST ID
router.get("/postContent/:post_id", async (req, res) => {
  const post = await Post.findAll({
    where: {
      post_id: req.params.post_id,
    },
  });
  if (!(post.length == 0)) {
    res.send(post);
  } else {
    res.send("Post does not exist for the given user");
  }
});

//GET POST BY Blog ID
router.get(`/viewpost/:blog_id`, async (req, res) => {
  const post = await Post.findAll({
    where: {
      blog_id: req.params.blog_id,
    },
  });
  if (post) {
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
    blog_id: req.body.blog_id,
    categories: req.body.categories,
    status: req.body.status,
    post_content: req.body.post_content,
    created_at: req.body.created_at,
    created_by: req.body.created_by,
    summary: req.body.summary,
    post_image: req.body.post_image,
  })
    .then((data) => {
      //console.log(data);
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
router.put("/updatePostData", async (req, res) => {
  Post.update(
    {
      post_title: req.body.post_title,
      categories: req.body.categories,
      post_content: req.body.post_content,
      blog_id: req.body.blog_id,
      status: req.body.status,
    },
    {
      where: {
        post_id: req.body.post_id,
      },
    }
  )
    .then((data) => {
      res.send({
        status: 200,
        message: "Post saved successfully",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        status: "failure",
        message: err,
      });
    });
});

//DELETE POST BY POST ID
router.delete("/delpost/:post_id", async (req, res) => {
  //const { post_id } = await req.body;
  const post = await Post.findOne({
    where: {
      post_id: req.params.post_id,
    },
  });
  //console.log(post);
  if (post) {
    try {
      await Post.destroy({
        where: {
          post_id: req.params.post_id,
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

//GET POST BY POST ID
router.get("/postContent/:post_id", async (req, res) => {
  const post = await Post.findOne({
    where: {
      post_id: req.params.post_id,
    },
  });
  if (!(post.length == 0)) {
    res.send(post);
  } else {
    res.send("Post does not exist for the given user");
  }
});
module.exports = router;
