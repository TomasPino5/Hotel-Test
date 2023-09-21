import styles from './Activities.module.css'
import GaleryActivities from './GaleryActivities'

const Activities = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.reasons}>
                    <h1 className={styles.activities}>Actividades</h1>
                    <h2 className={styles.subtitle}>Razones para venir a Buenos Aires</h2>
                    <p className={styles.text}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam corporis ea inventore assumenda illum ut, placeat maxime adipisci. Rem aperiam veniam iure sequi officia nulla quia. Mollitia blanditiis vitae ipsa.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, sequi. Nihil repudiandae ratione voluptate illo aliquam amet eaque asperiores officiis quis, harum rem quibusdam consequatur? Ipsum maiores cum cumque velit.
                    </p>
                </div>
            </div>
            <div className={styles.activitiesGalery}>
                <GaleryActivities />
            </div>
        </>
    )
}

export default Activities;