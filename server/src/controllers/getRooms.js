const { Room } = require('../db')

const getRooms = async (req, res) => {
    try {
        const rooms = await Room.findAll()
        return res.status(200).json(rooms)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

module.exports = getRooms;