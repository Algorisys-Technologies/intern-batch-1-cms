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
const Blog = sequelize.define(
  "blog",
  {
    blog_id: {
      primaryKey: true,
      autoIncrement: true,
      require: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    blog_image: {
      require: false,
      type: Sequelize.STRING,
      field: "blog_image",
    },
    user_id: {
      foreignKey: true,
      require: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    blog_title: {
      type: Sequelize.STRING,
      field: "blog_title",
      require: false,
    },
    summary: {
      type: Sequelize.STRING,
      field: "summary",
      require: false,
    },

    status: {
      type: Sequelize.BOOLEAN,
      field: "status",
      require: true,
    },

    created_at: {
      type: Sequelize.TIME,
      require: true,
    },
    updated_at: Sequelize.TIME,
    created_by: {
      type: Sequelize.TIME,
      require: true,
    },
    updated_by: Sequelize.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Blog;
