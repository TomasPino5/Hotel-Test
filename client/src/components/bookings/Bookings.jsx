import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Bookings.module.css'
import CalendarComponent from './CalendarComponent';
import { FaUser } from 'react-icons/fa';

const Bookings = () => {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const roomsData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/rooms');
                setRooms(response.data);
            } catch (error) {
                console.error('Error al obtener datos de las habitaciones:', error);
            }
        };
        roomsData();
    }, []);

    return (
        <>
            <div className={styles.container}>
                <CalendarComponent />
                <div className={styles.rooms}>
                    {rooms.map(room => (
                        <div key={room.id} className={styles.room}>
                            <img src={room.image} alt={room.name} className={styles.img} />
                            <div className={styles.descriptionContainer}>
                                <h3 className={styles.roomTitle}>{room.name}</h3>
                                <p className={styles.roomDescription}>
                                    {room.description}<br/>
                                    Click aquí para mas informacion.
                                </p>
                                <p className={styles.people}>Capacidad: {room.people} {room.people > 1 ?'personas ' : 'persona '} 
                                    {Array.from({ length: room.people }, (_, index) => (
                                        <FaUser key={index} className={styles.users} />
                                    ))}
                                </p>
                                <p className={styles.available}>{room.available} {room.available === 1 ?'Disponible' : 'Disponibles'}</p>
                                <button className={styles.btn}>RESERVAR</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Bookings;