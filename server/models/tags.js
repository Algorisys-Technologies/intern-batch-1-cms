const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "postgres",
  }
);

// const sequelize = new Sequelize("cms_database", "postgres", "mzaki2599", {
//   host: "localhost",
//   dialect: "postgres",
// });

const Tags = sequelize.define(
  "tag",
  {
    tag_name: {
      primaryKey: true,
      autoIncrement: true,
      require: true,
      type: Sequelize.STRING,
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

module.exports = Tags;
