import styles from './Home.module.css'
import Carousel from './Carousel';
import { Link } from 'react-router-dom';

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
                    <Link
                        to="/reservas"
                        className={styles.link}
                    >
                        RESERVAR
                    </Link>
                </button>
            </div>
            <div className={styles.aboutContainer}>
                <div className={styles.about}>
                    <h2 className={styles.title}>
                        ACERCA DE NUESTRA CASA
                    </h2>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est deserunt exercitationem mollitia, quasi consectetur voluptatibus sequi tempore asperiores illum consequuntur suscipit quisquam nesciunt assumenda aliquid veniam similique unde voluptatem dignissimos.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est deserunt exercitationem mollitia, quasi consectetur voluptatibus sequi tempore asperiores
                    </p>
                    <button 
                    type='submit' 
                    className={styles.infoButton} 
                    >
                        <Link
                            to="/habitaciones"
                            className={styles.link}
                        >
                            MAS INFO
                        </Link>
                    </button>
                </div>
            </div>
            <div className={styles.items}>
                <div className={styles.item1}>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <h1>1</h1>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, illo ipsam nobis,     ullam omnis quibusdam voluptatem aut impedit magni assumenda perferendis debitis. Qui     totam ex officia unde nam quo molestias.
                    </p>
                    <button 
                        type='submit' 
                        className={styles.infoButton} 
                    >
                        <Link
                            to="/habitaciones"
                            className={styles.link}
                        >
                            HABITACIONES
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;