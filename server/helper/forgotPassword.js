const nodemailer = require("nodemailer"); // send email

const sendResetPasswordEmail = (requiredurl, user_email) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "algorisys.cms@gmail.com",
      pass: "Project1@algorisys",
    },
  });

  var mailOptions = {
    from: "algorisys.cms@gmail.com",
    to: user_email,
    subject: "PASSWORD RESET ✔", // Subject line
    text: "Hello world (TEXT) ?", // plain text body
    html: `
    <!doctype html>
    <html lang="en-US">
    
    <head>
        <title>Reset Password</title>
        <meta name="description" content="Reset Password.">
        
    </head>
    
    <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
        <!--BODY-->
        <table cellspacing="0" border ="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
            style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
            <tr>
                <td>
                    <table style="background-color: #aadae9; max-width:670px;  margin:0 auto;" width="100%" border="0"
                        align="center" cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="height:80px;">&nbsp;</td>
                        </tr>
                        <tr>
                            <td style="text-align:center;">
                              <a href="CMS LINK" title="logo" target="_blank">
                                <img src="Acms.png" height="230" width="230" title="logo" alt="logo">
                              </a>
                            </td>
                        </tr>
                        <tr>
                            <td style="height:20px;">&nbsp;</td>
                        </tr>
                        <tr>
                            <td>
                                <table align="center" width="90%"  text-align="center" cellpadding="0" cellspacing="0"
                                    style="max-width:670px;background:#fff; border-radius:13px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                    <tr>
                                        <td style="height:40px;">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 10px 50px;">
                                            <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">You have
                                                requested to reset your password</h1>
                                            <span
                                                style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                            <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                                
                                                Hello,<br/>To reset your password, click the
                                                following link below.
                                            </p>
                                            <a   href="${requiredurl}"
                                                style="background:#2197bb;text-decoration:none !important; font-weight:500; margin-top:35px; color:#fff;font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px; box-shadow:0 6px 18px">Reset
                                                Password</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="height:40px;">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style="text-align:center;">
                                            <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;"><i>Ignorbordere if not requted</i></p>
                                        </td>
                                        
                                    </tr>
                                </table>
                            </td>
                       
    
    
    
    
                        <tr>
                            <td style="height:50px;">&nbsp;</td>
                        </tr>
                        <tr>
                            <td style="text-align:center">
                                <div>
                                    <div><a href="#" class="footer__social">
                                        <a href="#" class="footer__social"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAYVJREFUSEu1lQ9NA2EMxX9zgANAAaAAcAAKmIOBAnAAKAAUAAoABRsOmILhAPJIe+l9+/4l5JpctuTavva1fTdjYptNnJ8egDlwDBzao5pW9rwAr7UiawBnwC2w1+jyC7gCBLZlJYA7YNFB3xrYNT/FCGhkOYDe5J9G2Q1wbVnvgcuIkAKIlufOypXIadGcHizuPNKVAohPb7mEU6JVgJqZcux7cHSOVZSSOy2l917g0EUEeAQugA9byzSJBhppyYF4kU+A/o/uQLt9YO2dBE5z3ZY6UNyb3chRCvBjUd5VSlnPUe4Am5gnBqUA8osg/waIFGlYbg6c0pK7YKdoWIbckHWNOrYWgN6rqD+uzXxVs0P2IxvtcUJTbrhepPhfmnZl11TBvsdpF7Ub+bbL1a860DoPAlmTilPgPZTcc4hyr0qFHKLYqSIJWM885NMUO08UQUSbFFObIY5LtpVcjq0PjoBa4leVkJ7j0Xbp0SdTUiJTN1pRyXX2S+Zt9gBUWGm/mhzgFzWDVxnlcFgNAAAAAElFTkSuQmCC"/></a>
                                        <a href="#" class="footer__social"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUdJREFUSEvdleExBEEQhb+LgAzIABEgAkTgRIAIEAEhyAARkAGXAREgAuq7mrmanZuZ29uq/XNTdX92ut/r97qnb8LIZzIyPptHsA38rLDNmEvgFNgHPoFH4C7k+f05YuQWGWzAR4PkDTgs3Jsj4TXwUCLw8j0oOAMEyk+MqfFLMgsE8yJzBX9JplUoO7VMdU8Ndb/BgUVxOYHenWQAfvOnfQfAfYPgJRAsQlICm7cbwHYGvg8V36a5OcH3QOCY1mlwqQfaMLR68bSwM4F5D5wSG7Q1QMlXsLiTWloVTsp53qwehEv2lCzy2xHw2gMwDbF61S9tgdqycxJu1iA5rjzM5jZ1bH1s2tU6F2EXFWNqCrQpLrQauK/2qgWe90BQK97rYY0vVnDHunlKCqah0TYtkrnAbGC6NlZhz+837x+tl+x1gka36B/CnzgZFPaBJAAAAABJRU5ErkJggg=="/></a>
                                        <a href="#" class="footer__social"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXRJREFUSEvFlbsuRFEUhr9pNFPQaDRDLy4vwLwBSokErQTxBHgDxNQukSh5AzyBywugVqmU5Je15WTZ+5x9ZnIyuztnr/X/a/3rsls0fFoN4zM0gjlgF+gCkxVZvgH3wDHw5G1jGWwAZ31KtwmcF309gSJ/7BM8uM0XM/EEYl+vQfAJLJuU++Z3AUiF3+MJpGcnQSBHaTxmdVEg+lbEIrkxP2FMpQi+I+DPBiDHcbv/ACSnMh41UhH/w/UZxAgUzQSwBiwCsnkAroCvRM3+cKsIgp49YMtldwpsA7fAkrvLJtgDLi3iaQfyAswCB0AocG2JDoET4A6YcQShwAMRBIk0pTuO4AhQhgNJJEy14QiwCiwYiYp8DbQtu+SGqCqyHNWeK5E9oz2l3i+2Z2UNygZNUoRlphnQcMWO5kb30UmuuypiBKWrQqv5NRFZ7u/SZSeQRtd1iFKZqL9VyNTyC7bv9uCobbMenFwpsuyG9iZnRZdj9AO5y0cZdyMG3QAAAABJRU5ErkJggg=="/></a>
                                        <br><a>(022)-22112216 </a><br/>
                                        <a>info@algorisys.com</a>
                                    </div>
                                </div>   
                            </td>
                        </tr>
                        <tr>
                            <td style="height:80px;">&nbsp;</td>
                        </tr>
                        <tr>
                            <td style="margin:0;text-align:center;line-height:1.2;word-break:break-word;margin-top:0;margin-bottom:0">©Algorysis </td>
                        </tr>
                        
                    </table>
                    
                </td>
                
            </tr>
            
            <tr>
                
                <td style="height:80px;">&nbsp;</td>
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
    }
  });
};

module.exports = sendResetPasswordEmail;
