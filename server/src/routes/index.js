const { Router } = require('express');
const router = Router();
const postEmail = require('../controllers/postEmail')
const postRoomsDb = require('../controllers/postRoomDb')
const getRooms = require('../controllers/getRooms')

router.get('/rooms', getRooms)
router.post('/send-email', postEmail)
router.post('/data', postRoomsDb)

module.exports = router;