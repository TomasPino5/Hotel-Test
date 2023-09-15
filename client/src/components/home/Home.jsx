import styles from './Home.module.css'
import Carousel from './Carousel';

const Home = () => {
    return (
        <div>
            <div className={styles.carousel}>
                <Carousel />
            </div>
            <div className={styles.buttonContainer}>
                <button 
                    type='submit' 
                    className={styles.button} 
                >
                    RESERVAR
                </button>
            </div>
            <div className={styles.aboutContainer}>
                <div className={styles.about}>
                    <h2 className={styles.title}>ACERCA DE NUESTRA CASA</h2>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est deserunt exercitationem mollitia, quasi consectetur voluptatibus sequi tempore asperiores illum consequuntur suscipit quisquam nesciunt assumenda aliquid veniam similique unde voluptatem dignissimos.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est deserunt exercitationem mollitia, quasi consectetur voluptatibus sequi tempore asperiores
                    </p>
                    <button 
                    type='submit' 
                    className={styles.infoButton} 
                    >
                        MAS INFO
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;