import styles from './Galery.module.css'
import galery1 from '../../img/galery/galery1.jpg'
import galery2 from '../../img/galery/galery2.jpg'
import galery3 from '../../img/galery/galery3.webp'
import galery4 from '../../img/galery/galery4.jpg'
import galery5 from '../../img/galery/galery5.jpg'
import galery6 from '../../img/galery/galery6.webp'
import galery7 from '../../img/galery/galery7.webp'
import galery8 from '../../img/galery/galery8.jpg'
import galery9 from '../../img/galery/galery9.webp'
import galery10 from '../../img/galery/galery10.jpg'
import galery11 from '../../img/galery/galery11.jpg'
import galery12 from '../../img/galery/galery12.jpg'

const Galery = () => {
    return (
        <div className={styles.galery}>
            <img className={styles.item} src={galery1} alt="galery1" />
            <img className={styles.item} src={galery2} alt="galery2" />
            <img className={styles.item} src={galery3} alt="galery3" />
            <img className={styles.item} src={galery4} alt="galery4" />
            <img className={styles.item} src={galery5} alt="galery5" />
            <img className={styles.item} src={galery6} alt="galery6" />
            <img className={styles.item} src={galery7} alt="galery7" />
            <img className={styles.item} src={galery8} alt="galery8" />
            <img className={styles.item} src={galery9} alt="galery9" />
            <img className={styles.item} src={galery10} alt="galery10" />
            <img className={styles.item} src={galery11} alt="galery11" />
            <img className={styles.item} src={galery12} alt="galery12" />
        </div>
    )
}

export default Galery;