const express = require("express");
const app = express();

const cors = require("cors"); // handling cross origin request site block

const postRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");

app.use(express.json()); // parse request body
app.use(cors("*"));

//Routes
app.use(postRoutes);
app.use(userRoutes);

app.listen(3001);
