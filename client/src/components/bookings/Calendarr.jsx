import { useState } from "react";
import Calendar from 'react-calendar';
import './Calendar.css';
import moment from 'moment';
import 'moment/locale/es';
import styles from './Calendarr.module.css'
import { FaCalendarAlt } from 'react-icons/fa'

const Calendarr = () => {

    const [selectedDates, setSelectedDates] = useState([new Date(), moment().add(1, 'days').toDate()]);

    const [showCalendar, setShowCalendar] = useState(false)

    const handleSelectedDates = (dates) => {
        setSelectedDates(dates);
    };

    const handleShowCalendar = () => {
        setShowCalendar(true)
    }

    return (
        <>  
            <div>
                <div className={styles.calendarContainer} onClick={handleShowCalendar}>
                    <div className={styles.entry}>
                        <p className={styles.calendarIcon1}>
                            <FaCalendarAlt/>
                        </p>
                            {moment(selectedDates[0]).format('DD/MM/YYYY')}
                    </div>
                    <div className={styles.exit}>
                        <p className={styles.calendarIcon2}>
                            <FaCalendarAlt/>
                        </p>
                        {moment(selectedDates[1]).format('DD/MM/YYYY')}
                    </div>               
                </div>
                {showCalendar &&
                    <Calendar
                        onChange={handleSelectedDates}
                        selectRange
                        minDate={new Date()}
                        value={selectedDates}
                    />
                }
            </div>
        </>
    )
}

export default Calendarr;