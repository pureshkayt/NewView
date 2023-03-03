const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/send-email', (req, res) => {
    const { name, surname, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-password'
        }
    });

    const mailOptions = {
        from: 'your-email',
        to: 'recipient-email@example.com', // list of receivers
        subject: 'Сообщение от сайта', // Subject line
        html: `<p>Имя: ${name}</p> <p>Фамилия: ${surname}</p> <p>Телефон: ${phone}</p> <p>Сообщение: ${message}</p>`};

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Ошибка при отправке сообщения');
        } else {
            console.log('Email отправлен: ' + info.response);
            res.status(200).send('Сообщение отправлено');
        }
    });
});