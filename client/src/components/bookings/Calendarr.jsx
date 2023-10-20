import { useState } from "react";
import Calendar from 'react-calendar';
import './Calendar.css';
import moment from 'moment';
import 'moment/locale/es';
import styles from './Calendarr.module.css'
import { FaCalendarAlt } from 'react-icons/fa'

const Calendarr = () => {

    const [fechasSeleccionadas, setFechasSeleccionadas] = useState([new Date(), moment().add(1, 'days').toDate()]);

    const handleFechasSeleccionadas = (dates) => {
        setFechasSeleccionadas(dates);
    };

    return (
        <>  
            <div>
                <div className={styles.calendarContainer}>
                    <div className={styles.entry}>
                        <FaCalendarAlt className={styles.CalendarIcon1}/>{moment(fechasSeleccionadas[0]).format('DD/MM/YYYY')}
                    </div>
                    <div className={styles.exit}>
                        <FaCalendarAlt className={styles.CalendarIcon2}/>{moment(fechasSeleccionadas[1]).format('DD/MM/YYYY')}
                    </div>               
                </div>
                    <Calendar
                        onChange={handleFechasSeleccionadas}
                        selectRange
                        // calendarType="ISO 8601"
                        minDate={new Date()}
                        value={fechasSeleccionadas}
                    />
            </div>
        </>
    )
}

export default Calendarr;