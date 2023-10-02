import styles from './Contact.module.css'
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import FormView from './FormView';

const Contact = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>CONTÁCTANOS!</h1>
                    <p className={styles.description1}>
                        Callefalsa 123, Ciudad Autónoma de Buenos Aires
                    </p>
                    <p >
                        Escribenos en: 
                    </p>
                    <p className={styles.description2}>
                        hotelprueba@mail.com | +54 9 11 1234-5678 <FaPhoneAlt className={styles.icon1} />
                        <a 
                            href="https://wa.me/541112345678"
                            target="_blank" 
                            className={styles.icon2}
                        >
                            <FaWhatsapp />
                        </a>
                    </p>
                </div>
                <div>
                    <FormView />
                </div>
            </div>
        </>
    )
}

export default Contact;