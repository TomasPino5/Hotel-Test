import { useState, useEffect, useRef } from "react";
import Calendar from 'react-calendar';
import './Calendar.css';
import moment from 'moment';
import 'moment/locale/es';
import styles from './CalendarComponent.module.css'
import { FaCalendarAlt } from 'react-icons/fa'
import { useGlobalState } from '../../globalState';

const CalendarComponent = () => {
    
    const { selectedDates, setGlobalSelectedDates } = useGlobalState();

    const [showCalendar, setShowCalendar] = useState(false)

    const [clickedElement, setClickedElement] = useState(null);

    const calendarContainerRef = useRef(null);
    const entryRef = useRef(null);
    const exitRef = useRef(null);

    const handleSelectedDates = (dates) => {
        setGlobalSelectedDates(dates);
        setShowCalendar(false);
    };

    const handleShowCalendar = (value) => {
        setShowCalendar(true);
        setClickedElement(value);
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
                    <p className={styles.p}>ENTRADA: </p><div className={styles.entry} ref={entryRef} onClick={() => handleShowCalendar('entry')}>
                        <p className={styles.calendarIcon1}>
                            <FaCalendarAlt/>
                        </p>
                        {moment(selectedDates[0]).format('DD/MM/YYYY')}
                    </div>
                    <p className={styles.p}>SALIDA: </p><div className={styles.exit} ref={exitRef} onClick={() => handleShowCalendar('exit')}>
                        <p className={styles.calendarIcon2}>
                            <FaCalendarAlt/>
                        </p>
                        {moment(selectedDates[1]).format('DD/MM/YYYY')}
                    </div>               
                </div>
                {showCalendar &&
                    <div className={clickedElement === 'entry' ? styles.calendarContainerEntry : clickedElement === 'exit' ? styles.calendarContainerExit : ''} ref={calendarContainerRef}>
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

export default CalendarComponent;