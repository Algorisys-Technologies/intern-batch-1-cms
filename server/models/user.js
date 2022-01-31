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

const User = sequelize.define(
  "user",
  {
    user_id: {
      primaryKey: true,
      autoIncrement: true,
      require: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
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
    user_password: {
      type: Sequelize.STRING,
      field: "user_password",
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
    user_email_verified: {
      type: Sequelize.BOOLEAN,
      field: "user_email_verified",
      defaultValue: false,
      require: true,
    },
  },

  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = User;
