 const User = sequelize.define(
    "cms_user",
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
      user_email_verified: {
        type: Sequelize.BOOLEAN,
        field: "user_email_verified",
        defaultValue: false,
        require: true,
      },
    },
    "audit",
    {
      created_at: Sequelize.TIME,
      updated_at: Sequelize.TIME,
      created_by: Sequelize.STRING,
      updated_by: Sequelize.STRING,
    },
    "blog",
    {
      blog_id:
      {
        primaryKey: true,
        autoIncrement: true,
        require: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      user_id:
      {
        foreignKey: true,
        autoIncrement: true,
        require: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      blog_title:
      {
        type: Sequelize.STRING,
        field: "blog_tilte",
        require: false,
      },
      status:
      {
        type: Sequelize.BOOLEAN,
        fiels: "status",
        require: true,

      },
      created_at: Sequelize.TIME,
      updated_at: Sequelize.TIME,
      created_by: Sequelize.STRING,
      updated_by: Sequelize.STRING,

    },
    "categories":
    {
      category_id:
      {
        primaryKey: true,
        autoIncrement: true,
        require: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      category_name:
      {
        type: Sequelize.STRING,
        field: "category_name",
        require: false,
      },
      created_at: Sequelize.TIME,
      updated_at: Sequelize.TIME,
      created_by: Sequelize.STRING,
      updated_by: Sequelize.STRING,
    }
    "comment":
    {
      comment_id:
      {
        primaryKey: true,
        autoIncrement: true,
        require: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      user_id:
      {
        foreignKey: true,
        autoIncrement: true,
        require: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      post_id:
      {
        foreignKey: true,
        autoIncrement: true,
        require: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      comment_content:
      {
        type: Sequelize.STRING,
        field: "comment_content",
        require: false,
      },
      created_at: Sequelize.TIME,
      updated_at: Sequelize.TIME,
      created_by: Sequelize.STRING,
      updated_by: Sequelize.STRING,
    }
    "post":
    {
      post_id:
      {
        primaryKey: true,
        autoIncrement: true,
        require: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      user_id:
      {
        foreignKey: true,
        autoIncrement: true,
        require: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      post_type_id:
      {
        foreignKey: true,
        autoIncrement: true,
        require: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      bolg_id:
      {
        foreignKey: true,
        autoIncrement: true,
        require: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      tag_id:
      {
        foreignKey: true,
        autoIncrement: true,
        require: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      post_tilte:
      {
        type: Sequelize.STRING,
        field: "post_title",
        require: false,
      },
      categories:
      {
        type: Sequelize.STRING,
        field: "categories",
        require: false,
      },
      status:
      {
        type: Sequelize.BOOLEAN,
        fiels: "status",
        require: true,
      },
      post_content:
      {
        type: Sequelize.STRING,
        fields: "post_content",
        require: false,
      },
      path:
      {
        type: Sequelize.STRING,
        fields: "path",
        require: false,
      },
      created_at: Sequelize.TIME,
      updated_at: Sequelize.TIME,
      created_by: Sequelize.STRING,
      updated_by: Sequelize.STRING,
    }
    "post_tag":
    {
      post_id:
      {
        foreignKey: true,
        autoIncrement: true,
        require: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      tag_id:
      {
        foreignKey: true,
        autoIncrement: true,
        require: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      created_at: Sequelize.TIME,
      updated_at: Sequelize.TIME,
      created_by: Sequelize.STRING,
      updated_by: Sequelize.STRING,git add .
    }
    "post_type":
    {
      post_type_id:
      {
        primaryKey: true,
        autoIncrement: true,
        require: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      post_type:
      {
        type: Sequelize.STRING,
        fields: "post_type",
        require: false,
      },
      created_at: Sequelize.TIME,
      updated_at: Sequelize.TIME,
      created_by: Sequelize.STRING,
      updated_by: Sequelize.STRING,
    }
    "tag":
    {
      tag_id:
      {
        foreignKey: true,
        autoIncrement: true,
        require: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      tag_name:
      {
        type: Sequelize.STRING,
        field: "tag_name",
        require: false,
      },
      created_at: Sequelize.TIME,
      updated_at: Sequelize.TIME,
      created_by: Sequelize.STRING,
      updated_by: Sequelize.STRING,
    }

    {
      freezeTableName: true,
      timestamps: false,
    }
  );
