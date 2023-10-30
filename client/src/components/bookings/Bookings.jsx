import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Bookings.module.css'
import CalendarComponent from './CalendarComponent';

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
                            <h3>{room.name}</h3>
                            <p>{room.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Bookings;