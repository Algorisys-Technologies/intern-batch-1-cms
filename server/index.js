const express = require("express");
const app = express();
const { Sequelize } = require("sequelize");
app.use(express.json());

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
  }
);

app.get("/", (req, res) => {
  res.send("Server Started");
});

app.post("/create", (req, res) => {
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

// app.post("/create", async function (req, res, next) {
//   try {
//     res.json(await User.create(req.body));
//   } catch (err) {
//     console.error(err.message);
//     next(err);
//   }
// });
app.listen(3001);
