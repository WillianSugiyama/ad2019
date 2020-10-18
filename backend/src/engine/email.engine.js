import nodeMailer from 'nodemailer';

const transporter = nodeMailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendEmail = (to, subject, text) => {
  const emailOption = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text
  };

  return transporter.sendMail(emailOption, (error, info) => {
    if(error) {
      console.log(error);
      return false;
    } else {
      console.log(info);
      return true;
    }
  })
};

export default sendEmail;