const nodemailer = require("nodemailer");
const path = require("path");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 587,
  secure: false, 
  auth: {
    user: "digvijaymahadikjob@gmail.com",
    pass: "jlxs ftzl qpum zva",
  },
});

const mailOptions ={
  from: {
    
    address:'digvijaymahadikjob@gmail.com',
  }, 
  to: ["digvijay.mahadik2002@gmail.com"], 
  subject: "Send email using nodemailer and gmail ✔", 
  text: "Hello world?", 
  html: "<h2>Hello world?</h2>", 
  attachments: [
    {
      filename: 'raj.pdf',
      path: path.join(__dirname, 'raj.pdf')
    },
    {
      filename: 'photo.jpg',
      path: path.join(__dirname, 'photo.jpg')
    }
  ]
}

const sendMail = async (transporter, mailOptions) => {
  try{
    await transporter.sendMail(mailOptions);
    console.log('Email has been sent!');
  } catch (error) {
    console.error(error);
  }
}

sendMail(transporter, mailOptions);