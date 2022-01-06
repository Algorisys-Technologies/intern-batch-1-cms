const express = require("express");
const app = express();
const { Sequelize, where } = require("sequelize");
const nodemailer = require("nodemailer"); // send email
const jsonwbt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Client } = require("pg");
const cors = require("cors"); // handling cross origin request site block
app.use(express.json()); // parse request body
app.use(cors("*"));

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "12345",
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

const sequelize = new Sequelize("cms_database", "postgres", "12345", {
  host: "localhost",
  dialect: "postgres",
});

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

  {
    freezeTableName: true,
    timestamps: false,
  }
);

app.get("/", (req, res) => {
  res.send("Server Started");
});

app.post("/register", async (req, res) => {
  // Check whether user email exists already
  const user = await User.findOne({
    where: { user_email: req.body.user_email },
  });
  if (user) {
    return res.send("username already taken. Try with another one !");
  }

  // Generating salt and saving user
  const salt = await bcrypt.genSalt(10);
  req.body.password = await bcrypt.hash(req.body.password, salt);

  User.create(req.body)
    .then((data) => {
      res.send("An email has been sent for user verification");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });

  // encrypted URL token generation for User Verification
  const token = jsonwbt.sign(
    { user_email: req.body.user_email },
    "untoldSecretKey"
  );

  const requiredurl = `http://localhost:3001/activateuser/${token}`;

  // send email verification using node mailer

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "algorisys.cms@gmail.com",
      pass: "Project1@algorisys",
    },
  });

  var mailOptions = {
    from: "algorisys.cms@gmail.com",
    to: req.body.user_email,
    subject: "Email Verification Algorisys ✔", // Subject line
    text: "Hello world (TEXT) ?", // plain text body
    html: `<!DOCTYPE html>
    <html>
      <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <style type="text/css">
          @media screen {
            @font-face {
              font-family: "Lato";
              font-style: normal;
              font-weight: 400;
              src: local("Lato Regular"), local("Lato-Regular"),
                url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff)
                  format("woff");
            }
    
            @font-face {
              font-family: "Lato";
              font-style: normal;
              font-weight: 700;
              src: local("Lato Bold"), local("Lato-Bold"),
                url(https://fonts.gstatic.com/s/lato/v11/qdgUG4U09HnJwhYI-uK18wLUuEpTyoUstqEm5AMlJo4.woff)
                  format("woff");
            }
    
            @font-face {
              font-family: "Lato";
              font-style: italic;
              font-weight: 400;
              src: local("Lato Italic"), local("Lato-Italic"),
                url(https://fonts.gstatic.com/s/lato/v11/RYyZNoeFgb0l7W3Vu1aSWOvvDin1pK8aKteLpeZ5c0A.woff)
                  format("woff");
            }
    
            @font-face {
              font-family: "Lato";
              font-style: italic;
              font-weight: 700;
              src: local("Lato Bold Italic"), local("Lato-BoldItalic"),
                url(https://fonts.gstatic.com/s/lato/v11/HkF_qI1x_noxlxhrhMQYELO3LdcAZYWl9Si6vvxL-qU.woff)
                  format("woff");
            }
          }
    
          /* CLIENT-SPECIFIC STYLES */
          body,
          table,
          td,
          a {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
          }
    
          table,
          td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
          }
    
          img {
            -ms-interpolation-mode: bicubic;
          }
    
          /* RESET STYLES */
          img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
          }
    
          table {
            border-collapse: collapse !important;
          }
    
          body {
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
          }
    
          /* iOS BLUE LINKS */
          a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
          }
    
          /* MOBILE STYLES */
          @media screen and (max-width: 600px) {
            h1 {
              font-size: 32px !important;
              line-height: 32px !important;
            }
          }
    
          /* ANDROID CENTER FIX */
          div[style*="margin: 16px 0;"] {
            margin: 0 !important;
          }
        </style>
      </head>
    
      <body
        style="
          background-color: #f4f4f4;
          margin: 0 !important;
          padding: 0 !important;
        "
      >
        <!-- HIDDEN PREHEADER TEXT -->
        <div
          style="
            display: none;
            font-size: 1px;
            color: #fefefe;
            line-height: 1px;
            font-family: 'Lato', Helvetica, Arial, sans-serif;
            max-height: 0px;
            max-width: 0px;
            opacity: 0;
            overflow: hidden;
          "
        >
          We're thrilled to have you here! Get ready to dive into your new account.
        </div>
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <!-- LOGO -->
          <tr>
            <td bgcolor="#FFA73B" align="center">
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="max-width: 600px"
              >
                <tr>
                  <td
                    align="center"
                    valign="top"
                    style="padding: 40px 10px 40px 10px"
                  ></td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td bgcolor="#FFA73B" align="center" style="padding: 0px 10px 0px 10px">
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="max-width: 600px"
              >
                <tr>
                  <td
                    bgcolor="#ffffff"
                    align="center"
                    valign="top"
                    style="
                      padding: 40px 20px 20px 20px;
                      border-radius: 4px 4px 0px 0px;
                      color: #111111;
                      font-family: 'Lato', Helvetica, Arial, sans-serif;
                      font-size: 48px;
                      font-weight: 400;
                      letter-spacing: 4px;
                      line-height: 48px;
                    "
                  >
                    <h1 style="font-size: 48px; font-weight: 400; margin: 2">
                      Welcome!
                    </h1>
                    <img
                      src=" https://img.icons8.com/clouds/100/000000/handshake.png"
                      width="125"
                      height="120"
                      style="display: block; border: 0px"
                    />
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px">
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="max-width: 600px"
              >
                <tr>
                  <td
                    bgcolor="#ffffff"
                    align="left"
                    style="
                      padding: 20px 30px 40px 30px;
                      color: #666666;
                      font-family: 'Lato', Helvetica, Arial, sans-serif;
                      font-size: 18px;
                      font-weight: 400;
                      line-height: 25px;
                    "
                  >
                    <p style="margin: 0">
                      We're excited to have you get started. First, you need to
                      confirm your account. Just press the button below.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td bgcolor="#ffffff" align="left">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td
                          bgcolor="#ffffff"
                          align="center"
                          style="padding: 20px 30px 60px 30px"
                        >
                          <table border="0" cellspacing="0" cellpadding="0">
                            <tr>
                              <td
                                align="center"
                                style="border-radius: 3px"
                                bgcolor="#FFA73B"
                              >
                                <a
                                  href="${requiredurl}"
                                  target="_blank"
                                  style="
                                    font-size: 20px;
                                    font-family: Helvetica, Arial, sans-serif;
                                    color: #ffffff;
                                    text-decoration: none;
                                    color: #ffffff;
                                    text-decoration: none;
                                    padding: 15px 25px;
                                    border-radius: 2px;
                                    border: 1px solid #ffa73b;
                                    display: inline-block;
                                  "
                                  >Confirm Account</a
                                >
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- COPY -->
                <tr>
                  <td
                    bgcolor="#ffffff"
                    align="left"
                    style="
                      padding: 0px 30px 0px 30px;
                      color: #666666;
                      font-family: 'Lato', Helvetica, Arial, sans-serif;
                      font-size: 18px;
                      font-weight: 400;
                      line-height: 25px;
                    "
                  >
                    <p style="margin: 0">
                      If that doesn't work, copy and paste the following link in
                      your browser:
                    </p>
                  </td>
                </tr>
                <!-- COPY -->
                <tr>
                  <td
                    bgcolor="#ffffff"
                    align="left"
                    style="
                      padding: 20px 30px 20px 30px;
                      color: #666666;
                      font-family: 'Lato', Helvetica, Arial, sans-serif;
                      font-size: 18px;
                      font-weight: 400;
                      line-height: 25px;
                    "
                  >
                    <p style="margin: 0">
                      <a href="#" target="_blank" style="color: #ffa73b"
                        >${requiredurl}</a
                      >
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    bgcolor="#ffffff"
                    align="left"
                    style="
                      padding: 0px 30px 20px 30px;
                      color: #666666;
                      font-family: 'Lato', Helvetica, Arial, sans-serif;
                      font-size: 18px;
                      font-weight: 400;
                      line-height: 25px;
                    "
                  >
                    <p style="margin: 0">
                      If you have any questions, just reply to this email—we're
                      always happy to help out.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    bgcolor="#ffffff"
                    align="left"
                    style="
                      padding: 0px 30px 40px 30px;
                      border-radius: 0px 0px 4px 4px;
                      color: #666666;
                      font-family: 'Lato', Helvetica, Arial, sans-serif;
                      font-size: 18px;
                      font-weight: 400;
                      line-height: 25px;
                    "
                  >
                    <p style="margin: 0">Cheers,<br />Algorisys Team</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td
              bgcolor="#f4f4f4"
              align="center"
              style="padding: 30px 10px 0px 10px"
            >
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="max-width: 600px"
              >
                <tr>
                  <td
                    bgcolor="#FFECD1"
                    align="center"
                    style="
                      padding: 30px 30px 30px 30px;
                      border-radius: 4px 4px 4px 4px;
                      color: #666666;
                      font-family: 'Lato', Helvetica, Arial, sans-serif;
                      font-size: 18px;
                      font-weight: 400;
                      line-height: 25px;
                    "
                  >
                    <h2
                      style="
                        font-size: 20px;
                        font-weight: 400;
                        color: #111111;
                        margin: 0;
                      "
                    >
                      Need more help?
                    </h2>
                    <p style="margin: 0">
                      <a href="#" target="_blank" style="color: #ffa73b"
                        >We&rsquo;re here to help you out</a
                      >
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px">
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="max-width: 600px"
              >
                <tr>
                  <td
                    bgcolor="#f4f4f4"
                    align="left"
                    style="
                      padding: 0px 30px 30px 30px;
                      color: #666666;
                      font-family: 'Lato', Helvetica, Arial, sans-serif;
                      font-size: 14px;
                      font-weight: 400;
                      line-height: 18px;
                    "
                  >
                    <br />
                    <p style="margin: 0">
                      If these emails get annoying, please feel free to
                      <a
                        href="#"
                        target="_blank"
                        style="color: #111111; font-weight: 700"
                        >unsubscribe</a
                      >.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
    `, // html body
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

app.post("/login", async (req, res) => {
  const user = await User.findOne({
    where: { user_email: req.body.user_email },
  });
  if (!user) {
    // console.log("User not found");
    return res.status(404).send("User not found");
  }
  var passwordIsValid = bcrypt.compareSync(
    req.body.user_password,
    user.password
  );
  // Check password validity
  if (!passwordIsValid) {
    return res.status(400).send({
      message: "Invalid Password!Try again",
    });
  }
  // LOGIC TO CHECK USER IS VERFIED OR NOT
  if (!user.user_email_verified) {
    // --> ***Sending email for unverified user***
    // encrypted URL token generation for User Verification
    const token = jsonwbt.sign(
      { user_email: req.body.user_email },
      "untoldSecretKey"
    );

    const requiredurl = `http://localhost:3001/activateuser/${token}`;

    // send email verification using node mailer

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "algorisys.cms@gmail.com",
        pass: "Project1@algorisys",
      },
    });

    var mailOptions = {
      from: "algorisys.cms@gmail.com",
      to: req.body.user_email,
      subject: "Email Verification Algorisys ✔", // Subject line
      text: "Hello world (TEXT) ?", // plain text body
      html: `<!DOCTYPE html>
  <html>
    <head>
      <title></title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <style type="text/css">
        @media screen {
          @font-face {
            font-family: "Lato";
            font-style: normal;
            font-weight: 400;
            src: local("Lato Regular"), local("Lato-Regular"),
              url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff)
                format("woff");
          }
  
          @font-face {
            font-family: "Lato";
            font-style: normal;
            font-weight: 700;
            src: local("Lato Bold"), local("Lato-Bold"),
              url(https://fonts.gstatic.com/s/lato/v11/qdgUG4U09HnJwhYI-uK18wLUuEpTyoUstqEm5AMlJo4.woff)
                format("woff");
          }
  
          @font-face {
            font-family: "Lato";
            font-style: italic;
            font-weight: 400;
            src: local("Lato Italic"), local("Lato-Italic"),
              url(https://fonts.gstatic.com/s/lato/v11/RYyZNoeFgb0l7W3Vu1aSWOvvDin1pK8aKteLpeZ5c0A.woff)
                format("woff");
          }
  
          @font-face {
            font-family: "Lato";
            font-style: italic;
            font-weight: 700;
            src: local("Lato Bold Italic"), local("Lato-BoldItalic"),
              url(https://fonts.gstatic.com/s/lato/v11/HkF_qI1x_noxlxhrhMQYELO3LdcAZYWl9Si6vvxL-qU.woff)
                format("woff");
          }
        }
  
        /* CLIENT-SPECIFIC STYLES */
        body,
        table,
        td,
        a {
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
  
        table,
        td {
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
        }
  
        img {
          -ms-interpolation-mode: bicubic;
        }
  
        /* RESET STYLES */
        img {
          border: 0;
          height: auto;
          line-height: 100%;
          outline: none;
          text-decoration: none;
        }
  
        table {
          border-collapse: collapse !important;
        }
  
        body {
          height: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
        }
  
        /* iOS BLUE LINKS */
        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: none !important;
          font-size: inherit !important;
          font-family: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
        }
  
        /* MOBILE STYLES */
        @media screen and (max-width: 600px) {
          h1 {
            font-size: 32px !important;
            line-height: 32px !important;
          }
        }
  
        /* ANDROID CENTER FIX */
        div[style*="margin: 16px 0;"] {
          margin: 0 !important;
        }
      </style>
    </head>
  
    <body
      style="
        background-color: #f4f4f4;
        margin: 0 !important;
        padding: 0 !important;
      "
    >
      <!-- HIDDEN PREHEADER TEXT -->
      <div
        style="
          display: none;
          font-size: 1px;
          color: #fefefe;
          line-height: 1px;
          font-family: 'Lato', Helvetica, Arial, sans-serif;
          max-height: 0px;
          max-width: 0px;
          opacity: 0;
          overflow: hidden;
        "
      >
        We're thrilled to have you here! Get ready to dive into your new account.
      </div>
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <!-- LOGO -->
        <tr>
          <td bgcolor="#FFA73B" align="center">
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              style="max-width: 600px"
            >
              <tr>
                <td
                  align="center"
                  valign="top"
                  style="padding: 40px 10px 40px 10px"
                ></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td bgcolor="#FFA73B" align="center" style="padding: 0px 10px 0px 10px">
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              style="max-width: 600px"
            >
              <tr>
                <td
                  bgcolor="#ffffff"
                  align="center"
                  valign="top"
                  style="
                    padding: 40px 20px 20px 20px;
                    border-radius: 4px 4px 0px 0px;
                    color: #111111;
                    font-family: 'Lato', Helvetica, Arial, sans-serif;
                    font-size: 48px;
                    font-weight: 400;
                    letter-spacing: 4px;
                    line-height: 48px;
                  "
                >
                  <h1 style="font-size: 48px; font-weight: 400; margin: 2">
                    Welcome!
                  </h1>
                  <img
                    src=" https://img.icons8.com/clouds/100/000000/handshake.png"
                    width="125"
                    height="120"
                    style="display: block; border: 0px"
                  />
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px">
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              style="max-width: 600px"
            >
              <tr>
                <td
                  bgcolor="#ffffff"
                  align="left"
                  style="
                    padding: 20px 30px 40px 30px;
                    color: #666666;
                    font-family: 'Lato', Helvetica, Arial, sans-serif;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 25px;
                  "
                >
                  <p style="margin: 0">
                    We're excited to have you get started. First, you need to
                    confirm your account. Just press the button below.
                  </p>
                </td>
              </tr>
              <tr>
                <td bgcolor="#ffffff" align="left">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td
                        bgcolor="#ffffff"
                        align="center"
                        style="padding: 20px 30px 60px 30px"
                      >
                        <table border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td
                              align="center"
                              style="border-radius: 3px"
                              bgcolor="#FFA73B"
                            >
                              <a
                                href="${requiredurl}"
                                target="_blank"
                                style="
                                  font-size: 20px;
                                  font-family: Helvetica, Arial, sans-serif;
                                  color: #ffffff;
                                  text-decoration: none;
                                  color: #ffffff;
                                  text-decoration: none;
                                  padding: 15px 25px;
                                  border-radius: 2px;
                                  border: 1px solid #ffa73b;
                                  display: inline-block;
                                "
                                >Confirm Account</a
                              >
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <!-- COPY -->
              <tr>
                <td
                  bgcolor="#ffffff"
                  align="left"
                  style="
                    padding: 0px 30px 0px 30px;
                    color: #666666;
                    font-family: 'Lato', Helvetica, Arial, sans-serif;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 25px;
                  "
                >
                  <p style="margin: 0">
                    If that doesn't work, copy and paste the following link in
                    your browser:
                  </p>
                </td>
              </tr>
              <!-- COPY -->
              <tr>
                <td
                  bgcolor="#ffffff"
                  align="left"
                  style="
                    padding: 20px 30px 20px 30px;
                    color: #666666;
                    font-family: 'Lato', Helvetica, Arial, sans-serif;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 25px;
                  "
                >
                  <p style="margin: 0">
                    <a href="#" target="_blank" style="color: #ffa73b"
                      >${requiredurl}</a
                    >
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  bgcolor="#ffffff"
                  align="left"
                  style="
                    padding: 0px 30px 20px 30px;
                    color: #666666;
                    font-family: 'Lato', Helvetica, Arial, sans-serif;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 25px;
                  "
                >
                  <p style="margin: 0">
                    If you have any questions, just reply to this email—we're
                    always happy to help out.
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  bgcolor="#ffffff"
                  align="left"
                  style="
                    padding: 0px 30px 40px 30px;
                    border-radius: 0px 0px 4px 4px;
                    color: #666666;
                    font-family: 'Lato', Helvetica, Arial, sans-serif;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 25px;
                  "
                >
                  <p style="margin: 0">Cheers,<br />Algorisys Team</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td
            bgcolor="#f4f4f4"
            align="center"
            style="padding: 30px 10px 0px 10px"
          >
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              style="max-width: 600px"
            >
              <tr>
                <td
                  bgcolor="#FFECD1"
                  align="center"
                  style="
                    padding: 30px 30px 30px 30px;
                    border-radius: 4px 4px 4px 4px;
                    color: #666666;
                    font-family: 'Lato', Helvetica, Arial, sans-serif;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 25px;
                  "
                >
                  <h2
                    style="
                      font-size: 20px;
                      font-weight: 400;
                      color: #111111;
                      margin: 0;
                    "
                  >
                    Need more help?
                  </h2>
                  <p style="margin: 0">
                    <a href="#" target="_blank" style="color: #ffa73b"
                      >We&rsquo;re here to help you out</a
                    >
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px">
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              style="max-width: 600px"
            >
              <tr>
                <td
                  bgcolor="#f4f4f4"
                  align="left"
                  style="
                    padding: 0px 30px 30px 30px;
                    color: #666666;
                    font-family: 'Lato', Helvetica, Arial, sans-serif;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 18px;
                  "
                >
                  <br />
                  <p style="margin: 0">
                    If these emails get annoying, please feel free to
                    <a
                      href="#"
                      target="_blank"
                      style="color: #111111; font-weight: 700"
                      >unsubscribe</a
                    >.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `, // html body
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return console.log(error);
      } else {
        console.log("Email sent: " + info.response);
        return res.send("An email is sent to given address for Verification !");
      }
    });
  }

  // SEND JWT TOKEN FOR FURTHER AUTHENTICATION IF USER IS Verified
  if (user.user_email_verified) {
    const token = jsonwbt.sign(
      { user_id: user.user_id, user_role: user.user_role },
      "untoldSecretKey"
    );
    res.status(200).header("auth-token", token).send("Sign-in successfully!!");
  }
});

app.get("/activateuser/:userId", (req, res) => {
  try {
    var decoded_token = jsonwbt.verify(req.params.userId, "untoldSecretKey");
  } catch (e) {
    return res.status(400).send("Invalid Signature");
  }
  User.update(
    { user_email_verified: true },
    { where: { user_email: decoded_token.user_email } }
  );
  res.status(200).send("Account verified"); // + user.user_name);
});

app.listen(3001);
