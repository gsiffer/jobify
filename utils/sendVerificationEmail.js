import createMailTransporter from "./createMailTransporter.js";
import { StatusCodes } from "http-status-codes";

const sendVerificationEmail = (user) => {
  const transporter = createMailTransporter();

  const mailOptions = {
    from: "Jobify <articsoka@hotmail.com>",
    to: "gabor.siffer@gmail.com",
    subject: "Confirm Your Email",
    html: `<p>Please click the following link to confirm your email:</p>
           <a href="http://your-app.com/verify-email/">Verify Email</a>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Confirmation email sent: " + info.response);
    }
  });
};

export default sendVerificationEmail;
