require("dotenv").config();

const mailgun = require('mailgun-js')({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN
});

module.exports= sendEmail = (data)=>{
    const mailData = {
        from: 'Eclipse LMS <eclipse.lms.info@gmail.com>',
        ...data
    };
    mailgun.messages().send(mailData, function (error, body) {
        if (error){
            throw error;
        }
        else{
            return body;
        }
    });
}