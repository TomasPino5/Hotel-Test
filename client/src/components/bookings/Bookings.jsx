import styles from './Bookings.module.css'
import CalendarComponent from './CalendarComponent';

const Bookings = () => {
    return (
        <>
            <div className={styles.container}>
                <CalendarComponent />
            </div>
        </>
    )
}

export default Bookings;