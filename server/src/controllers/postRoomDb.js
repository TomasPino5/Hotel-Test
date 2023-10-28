const { Room } = require('../db')
const roomsData = require('../data')

const postRoomsDb = (req, res) => {
    try {
        roomsData.map((room) => {
            Room.create({
                name: room.name,
                description: room.description,
                roomNumber: room.roomNumber,
                price: room.price,
                image: room.image,
                people: room.people,
                available: room.available,
            })
        });
        res.status(200).json({message: 'Productos almacenados en la base de datos'});
    } catch (error) {
        res.status(200).json({message: error.message});
    }
}

module.exports = postRoomsDb;