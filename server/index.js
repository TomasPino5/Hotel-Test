const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.post('/send-email', (req, res) => {
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
      ${phone !== '' ? `<p><b>Telefono:</b> ${phone}</p>` : '<p><b>El usuario no colocó el teléfono</b></p>'}
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
});

app.listen(3001, () => {
  console.log('Servidor backend iniciado en el puerto 3001');
});