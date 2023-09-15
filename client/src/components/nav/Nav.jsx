import styles from './Nav.module.css'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {

    const { pathname } = useLocation()

    return (
        <>
            <nav className={styles.container}>
                <div className={styles.titleDescription}>
                    <div className={styles.title}>
                        <p>HENDOKU YAKU</p>
                    </div>
                    <div className={styles.description}>
                        <p>Hostel Mendoza</p>
                    </div>
                </div>
                <div className={styles.listaContainer}>
                    <ul className={styles.ul}>
                        <li className={styles.li}>
                            <Link 
                                to="/"
                                className={pathname === '/' ? styles.selected : styles.link}
                                >
                                    Inicio
                            </Link>
                        </li>
                        <li className={styles.li}>
                            <Link 
                                to="/actividades" 
                                className={pathname === '/actividades' ? styles.selected : styles.link}
                                >
                                    Actividades
                            </Link>
                        </li>
                        <li className={styles.li}>
                            <Link 
                                to="/habitaciones" 
                                className={pathname === '/habitaciones' ? styles.selected : styles.link}
                                >
                                    Habitaciones
                            </Link>
                        </li>
                        <li className={styles.li}>
                            <Link 
                                to="/ubicacion" 
                                className={pathname === '/ubicacion' ? styles.selected : styles.link}
                                >
                                    Ubicacion
                            </Link>
                        </li>
                        <li className={styles.li}>
                            <Link 
                                to="/contacto" 
                                className={pathname === '/contacto' ? styles.selected : styles.link}
                                >
                                    Contacto
                            </Link>
                        </li>
                        <li className={styles.li}>
                            <Link 
                                to="/reservas" 
                                className={pathname === '/reservas' ? styles.selected : styles.link}
                                >
                                    Reservas
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav;