const { Room } = require('../db')
const roomsData = require('../data')

const postRoomsDb = (req, res) => {
    try {
        roomsData.map((room) => {
            Room.create({
                id: room.id,
                name: room.name,
                description: room.description,
                descriptionDetail: room.descriptionDetail,
                roomNumber: room.roomNumber,
                price: room.price,
                image: room.image,
                people: room.people,
                available: room.available,
                beds: room.beds
            })
        });
        res.status(200).json({message: 'Productos almacenados en la base de datos'});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

module.exports = postRoomsDb;