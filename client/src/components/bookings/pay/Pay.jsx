import { useLocation } from 'react-router-dom';
import styles from './Pay.module.css'
import { useGlobalState } from '../../../globalState';
import moment from 'moment';

const Pay = () => {

    const { selectedDates } = useGlobalState();

    const startDate = moment(selectedDates[0]);
    const endDate = moment(selectedDates[1]);
    const duration = moment.duration(endDate.diff(startDate));
    const nigths = Math.floor(duration.asDays());

    const location = useLocation();
    const { state } = location

    const { name, beds, descriptionDetail, people, price, image } = state.room;

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
                        <p className={styles.descriptionDetail}>
                            {descriptionDetail}
                            <p className={styles.spec}>
                                Wifi: Si
                            </p>
                            <p className={styles.spec}>
                                TV: Si
                            </p>
                            <p className={styles.spec}>
                                Capacidad: {people} {people > 1 ? 'personas' : 'persona'}
                            </p>
                            <p className={styles.spec}>
                                Camas: {beds}
                            </p>
                        </p>
                    </div>
                </div>
                <div className={styles.buy}>
                    <h2 className={styles.buyTitle}>RESUMEN DE COMPRA</h2>
                    <p className={styles.buyDescription}>{name} - ${price.toLocaleString('es-ES')} - {nigths} {nigths > 1 ? 'noches' : 'noche'}</p>
                    <p className={styles.total}>TOTAL: $</p>
                    <button className={styles.pay}>PAGAR</button>
                </div>
            </div>
        </>
    )
}

export default Pay;