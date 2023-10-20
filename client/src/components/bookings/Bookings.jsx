import styles from './Bookings.module.css'
import Calendarr from './Calendarr';

const Bookings = () => {
    return (
        <>
            <div className={styles.container}>
                <Calendarr />
            </div>
        </>
    )
}

export default Bookings;