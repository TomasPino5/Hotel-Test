import styles from './Location.module.css'
// import Map from './Map';

const Location = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.head}>
                    <h1 className={styles.title}>Ubicación</h1>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fuga, eaque, mollitia impedit molestias, possimus autem sint sequi harum quidem at ad alias maxime voluptate quas! Culpa assumenda molestiae veniam?
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et cupiditate enim
                    </p>
                </div>
                {/* <Map /> */}
            </div>
        </>
    )
}

export default Location;