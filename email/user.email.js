const nodemailer = require("nodemailer");

module.exports.sendEmail = async (option) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mohamed142000nasser@gmail.com", // generated ethereal user
      pass: "zsqnuhzmxfpberfm", // generated ethereal password
    },
  });
  console.log("test");
  await transporter.sendMail(
    {
      from: '"’Mohamed Nasser 👻" <mohamed142000nasser@gmail.com>', // sender address
      to: option.email, // list of receivers
      subject: "Hello ✔", // Subject line
      html: `
      <div style = "background:red; color:white;padding:20px"> 
      <h1>${option.subject}</h1>
      <img/ src = 'https://imgv3.fotor.com/images/homepage-feature-card/Fotor-AI-photo-enhancement-tool.jpg'>
      <a href = "http://localhost:3000/user/verify/${option.token
    }">verify<a>
      </div>
    `, // html body
    },
    (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    }
  );
  // console.log("Message sent: %s", info.messageId);
};
