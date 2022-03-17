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
const Post = sequelize.define(
  "post",
  {
    post_id: {
      primaryKey: true,
      autoIncrement: true,
      require: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    post_image: {
      require: false,
      type: Sequelize.STRING,
      field: "post_image",
    },
    user_id: {
      //foreignKey: true,
      //autoIncrement: true,
      require: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    post_type_id: {
      //foreignKey: true,
      //autoIncrement: true,
      require: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    blog_id: {
      //foreignKey: true,
      //autoIncrement: true,
      require: true,
      type: Sequelize.UUID,
    },
    tag_name: {
      //foreignKey: true,
      //autoIncrement: true,
      require: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    post_title: {
      type: Sequelize.STRING,
      field: "post_title",
      require: false,
    },
    summary: {
      type: Sequelize.STRING,
      field: "summary",
      require: false,
    },
    categories: {
      type: Sequelize.STRING,
      field: "categories",
      require: false,
    },
    status: {
      type: Sequelize.BOOLEAN,
      field: "status",
      require: true,
    },
    post_content: {
      type: Sequelize.STRING,
      field: "post_content",
      require: false,
    },
    path: {
      type: Sequelize.STRING,
      fields: "path",
      require: false,
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

module.exports = Post;
