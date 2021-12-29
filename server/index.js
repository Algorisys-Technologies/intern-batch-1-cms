const express = require("express");
const app = express();
const { Sequelize, where } = require("sequelize");
const jwt = require("express-jwt");
const jsonwbt = require("jsonwebtoken");
app.use(express.json());
// app.use(
//   jwt({
//     secret: "hello world !",
//     algorithms: ["HS256"],
//     // credentialsRequired: false,
//     // getToken: function fromHeaderOrQuerystring(req) {
//     //   if (
//     //     req.headers.authorization &&
//     //     req.headers.authorization.split(" ")[0] === "Bearer"
//     //   ) {
//     //     return req.headers.authorization.split(" ")[1];
//     //   } else if (req.query && req.query.token) {
//     //     return req.query.token;
//     //   }
//     //   return null;
//     // },
//   })
// );
const bcrypt = require("bcrypt");
const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "mzaki2599",
  database: "cms_database",
});

client
  .connect()
  .then((req, res) => {
    console.log("Connection succesfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

// client.query("Select * from cms_user", (err, res) => {
//   if (!err) {
//     console.log(res.rows);
//   } else {
//     console.log(err.message);
//   }
//   client.end();
// });

const sequelize = new Sequelize("cms_database", "postgres", "mzaki2599", {
  host: "localhost",
  dialect: "postgres",
});

const User = sequelize.define(
  "cms_user",
  {
    user_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      require: true,
    },
    user_name: {
      type: Sequelize.STRING,
      field: "user_name",
      require: true,
    },
    user_email: {
      type: Sequelize.STRING,
      field: "user_email",
      require: true,
    },
    password: {
      type: Sequelize.STRING,
      field: "password",
      require: true,
    },
    user_role: {
      type: Sequelize.ENUM,
      values: ["Admin", "User"],
      require: true,
    },
    user_image: {
      type: Sequelize.BLOB,
      require: false,
    },
    created_at: Sequelize.TIME,
    updated_at: Sequelize.TIME,
    created_by: Sequelize.STRING,
    updated_by: Sequelize.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

app.get("/", (req, res) => {
  res.send("Server Started");
});

app.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  req.body.password = await bcrypt.hash(req.body.password, salt);

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

app.get("/login", async (req, res) => {
  // const user = await User.findOne({
  //   where: { user_email: req.body.user_email },
  // });]
  const user = await User.findOne({
    where: { user_email: req.body.user_email },
  });
  if (!user) {
    res.status(404).send("User not found");
  }
  var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
  // Check password validity
  if (!passwordIsValid) {
    return res.status(401).send({
      accessToken: null,
      message: "Invalid Password!Try again",
    });
  }
  const token = jsonwbt.sign(
    {
      userId: req.body.user_id,
    },
    "secret",
    { expiresIn: "1d" }
  );
  res.status(200).send(token);
});
// app.post("/create", async function (req, res, next) {
//   try {
//     res.json(await User.create(req.body));
//   } catch (err) {
//     console.error(err.message);
//     next(err);
//   }
// });
app.listen(3001);
