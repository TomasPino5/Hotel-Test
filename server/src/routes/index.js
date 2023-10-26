const { Router } = require('express');
const router = Router();
const postEmail = require ('../controllers/postEmail')

router.post('/send-email', postEmail)

module.exports = router;