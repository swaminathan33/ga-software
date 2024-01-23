const nodemailer = require('nodemailer')

const sendVerification = (email, token) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        auth: {
            user: 'swaminathan@ifflab.org',
            pass: 'swami&iff'
        }

    })

    const mailOptions = {
        from: 'swaminathan@ifflab.org',
        to: email,
        subject: 'Email Verification',
        text: ` click the below link to verify http://localhost:3000/verify/${token}`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
        } else {
            console.log('Email sent: ', info.response)
        }
    })

}

module.exports = sendVerification;