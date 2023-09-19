import styles from './Footer.module.css'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { AiOutlineHeart } from "react-icons/ai";

const Footer = () => {
    return (
        <>
            <footer className={styles.container}>
                <div className={styles.titleDescription}>
                    <div className={styles.title}>
                        <p>HOTEL PRUEBA</p>
                    </div>
                    <div className={styles.description}>
                        <p>Buenos Aires</p>
                    </div>
                </div>
                <div className={styles.data}>
                    <p>Calle Falsa 123</p>
                    <p>Buenos Aires, Argentina</p>
                    <p>+54 9 11 1234-5678</p>
                    <p>hotelprueba@mail.com</p>
                </div>
                <div className={styles.social}>
                    <p>Seguinos en:
                        <a 
                            href="https://www.instagram.com/yourinstagram" 
                            target="_blank" 
                            className={styles.icon1}
                        >
                            <FaInstagram />
                        </a>
                        <a 
                            href="https://www.facebook.com/yourfacebook" 
                            target="_blank" 
                            className={styles.icon2}
                        >
                            <FaFacebook />
                        </a>
                        <a 
                            href="https://twitter.com/yourtwitter" 
                            target="_blank" 
                            className={styles.icon3}
                        >
                            <FaTwitter />
                        </a>
                    </p>
                </div>
                <div className={styles.made}>
                    <p className={styles.p}>Made with <AiOutlineHeart className={styles.heart} /> by <a href='https://www.linkedin.com/in/tomas-pino-001161285/' target='_blank' className={styles.tomas}>Tomas</a></p>
                </div>
            </footer>
        </>
    )
}

export default Footer;