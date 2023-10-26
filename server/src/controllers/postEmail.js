const nodemailer = require('nodemailer');
require('dotenv').config();

const postEmail = (req, res) => {
    const { name, email, phone, message } = req.body;
  
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
  
    const mailOptions = {
        to: 'tomaspino48@gmail.com',
        subject: 'Nuevo mensaje del formulario de contacto',
        html:  
        `
        <p><b>Nombre:</b> ${name}</p>
        <p><b>Correo:</b> ${email}</p>
        ${phone !== '' ? `<p><b>Telefono:</b> ${phone}</p>` : '<p><b>El usuario no colocó el teléfono</b></   p>'}
        <p><b>Mensaje:</b> ${message}</p>
        `
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error al enviar el correo');
        } else {
            console.log('Correo enviado: ' + info.response);
            res.status(200).send('Correo enviado con éxito');
        }
    });
};

module.exports = postEmail;