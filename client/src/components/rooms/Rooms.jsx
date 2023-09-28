import styles from './Rooms.module.css'
import rooms1 from '../../img/rooms/rooms1.jpg'
import rooms2 from '../../img/rooms/rooms2.jpg'
import rooms3 from '../../img/rooms/rooms3.jpg'
import rooms4 from '../../img/rooms/rooms4.jpg'
import rooms5 from '../../img/rooms/rooms5.jpg'
import rooms6 from '../../img/rooms/rooms6.webp'
import rooms7 from '../../img/rooms/rooms7.jpg'
import rooms8 from '../../img/rooms/rooms8.jpg'
import rooms9 from '../../img/rooms/rooms9.jpg'
import rooms10 from '../../img/rooms/rooms10.webp'
import rooms11 from '../../img/rooms/rooms11.jpeg'
import rooms12 from '../../img/rooms/rooms12.jpg'
import { FaChevronLeft, FaChevronRight, FaShower, FaWifi, FaTv, FaCircle } from 'react-icons/fa';
import { GiSnowflake1 } from 'react-icons/gi';
import { useState } from 'react'

const Rooms = () => {

    const img1 = [rooms1, rooms2, rooms3];
    const img2 = [rooms4, rooms5, rooms6];
    const img3 = [rooms7, rooms8, rooms9];
    const img4 = [rooms10, rooms11, rooms12]

    // Current1
    const [currentIndex1, setCurrentIndex1] = useState(0);

    const next1 = () => {
        setCurrentIndex1(nextIndex => nextIndex + 1)
        if(currentIndex1 === img1.length - 1) {
            setCurrentIndex1(0)
        }
    }

    const prev1 = () => {
        setCurrentIndex1(prevIndex => prevIndex - 1)
        if(currentIndex1 === 0) {
            setCurrentIndex1(2)
        }
    }

    // Current2
    const [currentIndex2, setCurrentIndex2] = useState(0);

    const next2 = () => {
        setCurrentIndex2(nextIndex => nextIndex + 1)
        if(currentIndex2 === img2.length - 1) {
            setCurrentIndex2(0)
        }
    }

    const prev2 = () => {
        setCurrentIndex2(prevIndex => prevIndex - 1)
        if(currentIndex2 === 0) {
            setCurrentIndex2(2)
        }
    }

    // Current3
    const [currentIndex3, setCurrentIndex3] = useState(0);

    const next3 = () => {
        setCurrentIndex3(nextIndex => nextIndex + 1)
        if(currentIndex3 === img3.length - 1) {
            setCurrentIndex3(0)
        }
    }

    const prev3 = () => {
        setCurrentIndex3(prevIndex => prevIndex - 1)
        if(currentIndex3 === 0) {
            setCurrentIndex3(2)
        }
    }

    // Current4
    const [currentIndex4, setCurrentIndex4] = useState(0);

    const next4 = () => {
        setCurrentIndex4(nextIndex => nextIndex + 1)
        if(currentIndex4 === img4.length - 1) {
            setCurrentIndex4(0)
        }
    }

    const prev4 = () => {
        setCurrentIndex4(prevIndex => prevIndex - 1)
        if(currentIndex4 === 0) {
            setCurrentIndex4(2)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.headContainer}>
                <h1 className={styles.title}>HABITACIONES</h1>
                <p className={styles.description}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem velit quod voluptatem. Mollitia ipsam itaque autem dolores culpa voluptatibus illum, perferendis excepturi cupiditate necessitatibus unde odit amet, aspernatur accusantium animi!
                </p>
            </div>
            <div className={styles.bodyContainer}>
                <h2 className={styles.h2}>
                    Nuestras Habitaciones
                </h2>
                <hr className={styles.hr}/>
                <div className={styles.rooms}>
                    <div className={styles.room}>
                        {img1.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Image${index}`}
                                className={index === currentIndex1 ? styles.img : styles.inactive}
                            />
                        ))}
                        <FaChevronLeft className={styles.arrowLeft} onClick={prev1} />
                        <div className={styles.backgroundLeftArrow}></div>
                        <FaChevronRight className={styles.arrowRight} onClick={next1} />
                        <div className={styles.backgroundRightArrow}></div>
                        <FaCircle className={currentIndex1 === 0 ? styles.circle1Enabled : styles.circle1}/>
                        <FaCircle className={currentIndex1 === 1 ? styles.circle2Enabled : styles.circle2}/>
                        <FaCircle className={currentIndex1 === 2 ? styles.circle3Enabled : styles.circle3}/>
                        <div className={styles.backgroundCircle}></div>
                        <div className={styles.data}>
                            <div className={styles.iconsContainer}>
                                <p className={styles.roomTitle}>01 - Nombre1</p>
                                <div className={styles.icons}>
                                    <FaShower className={styles.icon} />
                                    <FaWifi className={styles.icon} />
                                    <FaTv className={styles.icon} />
                                </div>
                            </div>
                            <p className={styles.roomDescription}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam blanditiis officiis quibusdam minima, enim eveniet ipsam sint animi numquam sed consequuntur cupiditate optio eos nulla magnam vitae laboriosam. Officiis, commodi.
                            </p>
                            <button className={styles.btn}>RESERVAR</button>
                        </div>
                    </div>
                    <div className={styles.room}>
                        {img2.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Image${index}`}
                                className={index === currentIndex2 ? styles.img : styles.inactive}
                            />
                        ))}
                        <FaChevronLeft className={styles.arrowLeft} onClick={prev2} />
                        <div className={styles.backgroundLeftArrow}></div>
                        <FaChevronRight className={styles.arrowRight} onClick={next2} />
                        <div className={styles.backgroundRightArrow}></div>
                        <FaCircle className={currentIndex2 === 0 ? styles.circle1Enabled : styles.circle1}/>
                        <FaCircle className={currentIndex2 === 1 ? styles.circle2Enabled : styles.circle2}/>
                        <FaCircle className={currentIndex2 === 2 ? styles.circle3Enabled : styles.circle3}/>
                        <div className={styles.backgroundCircle}></div>
                        <div className={styles.data}>
                            <div className={styles.iconsContainer}>
                                <p className={styles.roomTitle}>02 - Nombre2</p>
                                <div className={styles.icons}>
                                    <FaShower className={styles.icon} />
                                    <FaWifi className={styles.icon} />
                                    <GiSnowflake1 className={styles.icon} />
                                </div>
                            </div>
                            <p className={styles.roomDescription}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam blanditiis officiis quibusdam minima, enim eveniet ipsam sint animi numquam sed consequuntur cupiditate optio eos nulla magnam vitae laboriosam. Officiis, commodi.
                            </p>
                            <button className={styles.btn}>RESERVAR</button>
                        </div>
                    </div>
                    <div className={styles.room}>
                        {img3.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Image${index}`}
                                className={index === currentIndex3 ? styles.img : styles.inactive}
                            />
                        ))}
                        <FaChevronLeft className={styles.arrowLeft} onClick={prev3} />
                        <div className={styles.backgroundLeftArrow}></div>
                        <FaChevronRight className={styles.arrowRight} onClick={next3} />
                        <div className={styles.backgroundRightArrow}></div>
                        <FaCircle className={currentIndex3 === 0 ? styles.circle1Enabled : styles.circle1}/>
                        <FaCircle className={currentIndex3 === 1 ? styles.circle2Enabled : styles.circle2}/>
                        <FaCircle className={currentIndex3 === 2 ? styles.circle3Enabled : styles.circle3}/>
                        <div className={styles.backgroundCircle}></div>
                        <div className={styles.data}>
                            <div className={styles.iconsContainer}>
                                <p className={styles.roomTitle}>03 - Nombre3</p>
                                <div className={styles.icons}>
                                    <FaShower className={styles.icon} />
                                    <FaWifi className={styles.icon} />
                                    <FaTv className={styles.icon} />
                                </div>
                            </div>
                            <p className={styles.roomDescription}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam blanditiis officiis quibusdam minima, enim eveniet ipsam sint animi numquam sed consequuntur cupiditate optio eos nulla magnam vitae laboriosam. Officiis, commodi.
                            </p>
                            <button className={styles.btn}>RESERVAR</button>
                        </div>
                    </div>
                    <div className={styles.room}>
                        {img4.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Image${index}`}
                                className={index === currentIndex4 ? styles.img : styles.inactive}
                            />
                        ))}
                        <FaChevronLeft className={styles.arrowLeft} onClick={prev4} />
                        <div className={styles.backgroundLeftArrow}></div>
                        <FaChevronRight className={styles.arrowRight} onClick={next4} />
                        <div className={styles.backgroundRightArrow}></div>
                        <FaCircle className={currentIndex4 === 0 ? styles.circle1Enabled : styles.circle1}/>
                        <FaCircle className={currentIndex4 === 1 ? styles.circle2Enabled : styles.circle2}/>
                        <FaCircle className={currentIndex4 === 2 ? styles.circle3Enabled : styles.circle3}/>
                        <div className={styles.backgroundCircle}></div>
                        <div className={styles.data}>
                            <div className={styles.iconsContainer}>
                                <p className={styles.roomTitle}>04 - Nombre4</p>
                                <div className={styles.icons}>
                                    <FaShower className={styles.icon} />
                                    <FaWifi className={styles.icon} />
                                    <GiSnowflake1 className={styles.icon} />
                                </div>
                            </div>
                            <p className={styles.roomDescription}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam blanditiis officiis quibusdam minima, enim eveniet ipsam sint animi numquam sed consequuntur cupiditate optio eos nulla magnam vitae laboriosam. Officiis, commodi.
                            </p>
                            <button className={styles.btn}>RESERVAR</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rooms;