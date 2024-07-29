var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'digvijaymahadikjob@gmail.com',
    pass: 'jlxs ftzl qpum zvak'
  }
});

var mailOptions = {
  from: 'digvijaymahadikjob@gmail.com',
  to: 'digvijay.mahadik2002@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy! task'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});