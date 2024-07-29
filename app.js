const nodemailer = require("nodemailer");
const path = require("path");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "digvijaymahadikjob@gmail.com",
    pass: "jlxs ftzl qpum zvak",
  },
});

const mailOptions ={
  from: {
    name: 'Ishant Nimje 👻',
    address:'digvijaymahadikjob@gmail.com',
  }, // sender address
  to: ["digvijay.mahadik2002@gmail.com"], // list of receivers
  subject: "Send email using nodemailer and gmail ✔", // Subject line
  text: "Hello world?", // plain text body
  html: "<h2>Hello world?</h2>", // html body
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