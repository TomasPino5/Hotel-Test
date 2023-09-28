import styles from './Location.module.css'
import MapView from './MapView';
import location1 from '../../img/location/location1.jpg'

const Location = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.head}>
                    <h1 className={styles.title}>UBICACIÓN</h1>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fuga, eaque, mollitia impedit molestias, possimus autem sint sequi harum quidem at ad alias maxime voluptate quas! Culpa assumenda molestiae veniam?
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et cupiditate enim
                    </p>
                </div>
                <div className={styles.content}>
                    <img src={location1} alt="location1" className={styles.img} />
                    <MapView />
                </div>
                <div className={styles.arrive}>
                    <h1 className={styles.arriveTitle}>Como llegar</h1>
                    <p className={styles.arriveDescription}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, amet ipsum modi aspernatur magni optio ab fugit animi! Provident consectetur doloribus pariatur ea dolores nemo minus quia sequi doloremque id.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis numquam, at soluta molestias quidem maxime quae sequi odit omnis alias quibusdam obcaecati quam pariatur quod a veniam, autem voluptates unde?
                    </p>
                </div>
            </div>
        </>
    )
}

export default Location;