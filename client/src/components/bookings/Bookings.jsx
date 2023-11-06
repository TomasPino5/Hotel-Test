import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Bookings.module.css'
import CalendarComponent from './CalendarComponent';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
                    <h2 className={styles.h2}>
                        Habitaciones Disponibles
                    </h2>
                    <hr className={styles.hr}/>
                    {rooms.map(room => (
                        <div key={room.id} className={styles.room}>
                            <img src={room.image} alt={room.name} className={styles.img} />
                            <div className={styles.descriptionContainer}>
                                <h3 className={styles.roomTitle}>{room.name}</h3>
                                <p className={styles.roomDescription}>
                                    {room.description}<br/>
                                    <Link to='/habitaciones' className={styles.link}>
                                        Click aquí{' '}  
                                    </Link>
                                    para mas informacion.
                                </p>
                                <p className={styles.people}>Capacidad: {room.people} {room.people > 1 ?'personas ' : 'persona '} 
                                    {Array.from({ length: room.people }, (_, index) => (
                                        <FaUser key={index} className={styles.users} />
                                    ))}
                                </p>
                                <p className={styles.available}>{room.available} {room.available === 1 ?'Disponible' : 'Disponibles'} | {room.price.toLocaleString('es-ES')} x noche</p>
                                <button className={styles.btn}>
                                    <Link 
                                        to='/reservas/pagar' 
                                        state={{ room: room }}
                                        className={styles.btnLink}
                                    >
                                        RESERVAR
                                    </Link>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Bookings;