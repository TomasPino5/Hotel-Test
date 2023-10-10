// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const { EMAIL, PASSWORD } = process.env;
// require('dotenv').config();

// const app = express();
// app.use(bodyParser.json());

// const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//         user: `${EMAIL}`,
//         pass: `${PASSWORD}`
//     }
// });

// app.post('/send-email', (req, res) => {
//     const { name, email, phone, message } = req.body;

//     const mailOptions = {
//         from: `${EMAIL}`,
//         to: `tomaspino48@gmail.com`, 
//         subject: `Contacto de Hotel Prueba de ${name}`,
//         text: `
//             Nombre: ${name}
//             Email: ${email}
//             Teléfono: ${phone}
//             Mensaje: ${message}
//         `
//     };

//     transporter.sendMail(mailOptions, (error) => {
//         if (error) {
//             // console.log(error);
//             res.status(500).send('Error al enviar el correo electrónico');
//         } else {
//             // console.log('Email enviado: ' + info.response);
//             res.status(200).send('Correo electrónico enviado con éxito');
//         }
//     });
// });