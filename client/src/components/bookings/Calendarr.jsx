import { useState, useEffect, useRef } from "react";
import Calendar from 'react-calendar';
import './Calendar.css';
import moment from 'moment';
import 'moment/locale/es';
import styles from './Calendarr.module.css'
import { FaCalendarAlt } from 'react-icons/fa'

const Calendarr = () => {
    
    const [selectedDates, setSelectedDates] = useState([new Date(), moment().add(1, 'days').toDate()]);

    const [showCalendar, setShowCalendar] = useState(false)

    const calendarContainerRef = useRef(null);
    const entryRef = useRef(null);
    const exitRef = useRef(null);

    const handleSelectedDates = (dates) => {
        setSelectedDates(dates);
        setShowCalendar(false);
    };

    const handleShowCalendar = () => {
        setShowCalendar(true)
    }

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                calendarContainerRef.current &&
                !calendarContainerRef.current.contains(event.target) &&
                (!entryRef.current || !entryRef.current.contains(event.target)) &&
                (!exitRef.current || !exitRef.current.contains(event.target))
            ) {
                setShowCalendar(false);
            }
        };
    
        document.addEventListener("click", handleOutsideClick);
    
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);
    

    return (
        <>  
            <div>
                <div className={styles.calendarContainer}>
                    <div className={styles.entry} ref={entryRef} onClick={handleShowCalendar}>
                        <p className={styles.calendarIcon1}>
                            <FaCalendarAlt/>
                        </p>
                        {moment(selectedDates[0]).format('DD/MM/YYYY')}
                    </div>
                    <div className={styles.exit} ref={exitRef} onClick={handleShowCalendar}>
                        <p className={styles.calendarIcon2}>
                            <FaCalendarAlt/>
                        </p>
                        {moment(selectedDates[1]).format('DD/MM/YYYY')}
                    </div>               
                </div>
                {showCalendar &&
                    <div className={styles.calendarrContainer} ref={calendarContainerRef}>
                        <Calendar
                            onChange={handleSelectedDates}
                            selectRange
                            minDate={new Date()}
                            value={selectedDates}
                        />
                    </div>
                }
            </div>
        </>
    )
}

export default Calendarr;