const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors"); // handling cross origin request site block
const dotenv = require("dotenv");

const postRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");

app.use(express.json()); // parse request body
app.use(cors("*"));
app.use(morgan("tiny"));
dotenv.config();

//Routes
app.use(postRoutes);
app.use(userRoutes);

app.listen(3001, () => {
  console.log("Server Started");
});
