const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const { EMAIL, PASSWORD } = process.env;
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
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    // host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: 'gmail',
    auth: {
      user: `tomaspino.velez@gmail.com`,
      pass: `8426 7814`
    }
  });

  const mailOptions = {
    from: `tomaspino.velez@gmail.com`,
    to: 'tomaspino48@gmail.com',
    subject: 'Nuevo mensaje del formulario de contacto',
    text: `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`
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