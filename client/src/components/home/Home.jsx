import styles from './Home.module.css'
import Carousel from './Carousel';
import { Link } from 'react-router-dom';
import home1 from '../../img/home/home1.jpg'
import home2 from '../../img/home/home2.jpg'
import home3 from '../../img/home/home3.jpg'
import home4 from '../../img/home/home4.jpg'
import home5 from '../../img/home/home5.jpg'
import home6 from '../../img/home/home6.jpg'
import Galery from './Galery';

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
                    <div className={styles.imgs}>
                        <img className={styles.img1} src={home1} alt="home1" />
                        <img className={styles.img2} src={home2} alt="home2" />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.num}>01</h1>
                        <h2 className={styles.h2}>Comparte habitación</h2>
                        <p className={styles.itemDescription}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, illo ipsam nobis,     ullam omnis quibusdam voluptatem aut impedit magni assumenda perferendis debitis. Qui     totam ex officia unde nam quo molestias.
                        </p>
                        <button 
                            type='submit' 
                            className={styles.roomsButton} 
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
                <div className={styles.item2}>
                    <div className={styles.content}>
                        <h1 className={styles.num}>02</h1>
                        <h2 className={styles.h2}>Disfruta las instalaciones</h2>
                        <p className={styles.itemDescription}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, illo ipsam nobis,     ullam omnis quibusdam voluptatem aut impedit magni assumenda perferendis debitis. Qui     totam ex officia unde nam quo molestias.
                        </p>
                        <button 
                            type='submit' 
                            className={styles.contactButton} 
                        >
                            <Link
                                to="/contacto"
                                className={styles.link}
                            >
                                CONTACTO
                            </Link>
                        </button>
                    </div>
                    <div className={styles.imgs}>
                        <img className={styles.img1} src={home3} alt="home3" />
                        <img className={styles.img2} src={home4} alt="home4" />
                    </div>
                </div>
                <div className={styles.item3}>
                    <div className={styles.imgs}>
                        <img className={styles.img1} src={home6} alt="home6" />
                        <img className={styles.img2} src={home5} alt="home5" />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.num}>03</h1>
                        <h2 className={styles.look}>Mira alrededor</h2>
                        <p className={styles.itemDescription}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, illo ipsam nobis,     ullam omnis quibusdam voluptatem aut impedit magni assumenda perferendis debitis. Qui     totam ex officia unde nam quo molestias.
                        </p>
                        <button 
                            type='submit' 
                            className={styles.roomsButton} 
                        >
                            <Link
                                to="/actividades"
                                className={styles.link}
                            >
                                ACTIVIDADES
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.facilities}>
                <h1 className={styles.titleFacilities}>INSTALACIONES</h1>
                <p className={styles.text}>
                    En [nombre] ofrecemos habitaciones con aire acondicionado y TV de pantalla plana por cable. También contamos con recepción 24 horas, restaurante y WiFi gratis en todas las instalaciones. Este alojamiento cuenta con salón compartido, mostrador de información turística y servicio de venta de entradas.
                </p>
            </div>
            <Galery />
        </div>
    )
}

export default Home;