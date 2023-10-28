import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Bookings.module.css'
import CalendarComponent from './CalendarComponent';

const Bookings = () => {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const getRooms = async () => {
            try {
                const response = await axios.get('https://localhost:3001/rooms');
                setRooms(response.data);
            } catch (error) {
                console.error('Error al obtener datos de las habitaciones:', error);
            }
        };

        getRooms();
    }, []);

    return (
        <>
            <div className={styles.container}>
                <CalendarComponent />
                <div>
                    {rooms.map(room => (
                        <div key={room.id}>
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