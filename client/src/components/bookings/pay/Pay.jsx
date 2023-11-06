import { useLocation } from 'react-router-dom';
import styles from './Pay.module.css'

const Pay = () => {

    const location = useLocation();
    const { state } = location

    const { name, descriptionDetail, people, price, image } = state.room;

    return (
        <>
            <div className={styles.container}>
                <div>
                    <h1>Detalles de reserva</h1>
                    <hr className={styles.hr} />
                </div>
                <div className={styles.room}>
                    <img src={image} alt={name} className={styles.img} />
                    <div className={styles.roomDetail}>
                        <h1>{name}</h1>
                        <p>{descriptionDetail}</p>
                        <p>Capacidad: {people} {people > 1 ? 'personas' : 'persona'}</p>
                    </div>
                </div>
                <div className={styles.buy}>
                    <h2>RESUMEN DE COMPRA</h2>
                    <p>{name} - 1 noche - ${price.toLocaleString('es-ES')}</p>
                    <p>TOTAL: $</p>
                </div>
            </div>
        </>
    )
}

export default Pay;