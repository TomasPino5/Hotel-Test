import styles from './GaleryActivities.module.css'
import agalery1 from '../../img/agalery/agalery1.jpg'
import agalery2 from '../../img/agalery/agalery2.jpg'
import agalery3 from '../../img/agalery/agalery3.jpg'
import agalery4 from '../../img/agalery/agalery4.jpg'
import agalery5 from '../../img/agalery/agalery5.jpg'
import agalery6 from '../../img/agalery/agalery6.jpg'
import agalery7 from '../../img/agalery/agalery7.jpg'
import agalery8 from '../../img/agalery/agalery8.jpg'
import agalery9 from '../../img/agalery/agalery9.jpg'
import agalery10 from '../../img/agalery/agalery10.jpg'

const GaleryActivities = () => {
    return (
        <>
            <div className={styles.container}>
                <img src={agalery1} alt="agalery1" className={styles.items}/>
                <div className={styles.items}>
                    <h1 className={styles.h1}>01</h1>
                    <h2 className={styles.h2}>Obelisco</h2>
                    <p className={styles.p}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, illo sint est eligendi, animi pariatur fugit praesentium repudiandae a soluta dolores error excepturi. Sit nam doloribus nesciunt mollitia deleniti ipsum.
                    </p>
                </div>
                <img src={agalery2} alt="agalery2" className={styles.items}/>
                <div className={styles.items}>
                    <h1 className={styles.h1}>02</h1>
                    <h2 className={styles.h2}>Centro Cultural Kirchner</h2>
                    <p className={styles.p}> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos maiores nam est voluptatum neque minima, sit doloremque magnam rem facilis corporis non, ipsam obcaecati quasi vel inventore porro esse nobis!
                    </p>
                </div>
                <div className={styles.items}>
                    <h1 className={styles.h10}>03</h1>
                    <h2 className={styles.h20}>Teatro Colón</h2>
                    <p className={styles.p}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo praesentium quod voluptate eligendi laboriosam labore numquam ab, totam quis et reiciendis sunt, ipsum odio suscipit provident minus. Temporibus, quaerat libero.
                    </p>
                </div>
                <img src={agalery3} alt="agalery3" className={styles.items}/>
                <div className={styles.items}>
                    <h1 className={styles.h10}>04</h1>
                    <h2 className={styles.h20}>Casa Rosada</h2>
                    <p className={styles.p}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, ratione eveniet rem, autem voluptate quis doloribus magnam sapiente sed quas laborum veritatis suscipit quam sit iusto, non dolor itaque culpa?
                    </p>
                </div>
                <img src={agalery4} alt="agalery4" className={styles.items}/>
                <img src={agalery5} alt="agalery5" className={styles.items}/>
                <div className={styles.items}>
                    <h1 className={styles.h1}>05</h1>
                    <h2 className={styles.h2}>Puente de la Mujer</h2>
                    <p className={styles.p}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti illum, perspiciatis quae sit quod aperiam facere, dicta eos quas provident doloremque nam eaque est, praesentium reiciendis cumque accusamus maiores incidunt!
                    </p>
                </div>
                <img src={agalery6} alt="agalery6" className={styles.items}/>
                <div className={styles.items}>
                    <h1 className={styles.h1}>06</h1>
                    <h2 className={styles.h2}>Caminito</h2>
                    <p className={styles.p}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quis aliquam at recusandae consectetur quo harum quidem quas cum amet debitis alias ipsam exercitationem vero, tempore rem tenetur veniam modi?
                    </p>
                </div>
                <div className={styles.items}>
                    <h1 className={styles.h10}>07</h1>
                    <h2 className={styles.h20}>Cabildo</h2>
                    <p className={styles.p}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque esse, distinctio quia autem fugit aliquid dolores odit ipsa unde doloribus dignissimos reprehenderit enim. Vero totam provident adipisci sapiente veritatis asperiores!
                    </p>
                </div>
                <img src={agalery7} alt="agalery7" className={styles.items}/>
                <div className={styles.items}>
                    <h1 className={styles.h10}>08</h1>
                    <h2 className={styles.h20}>Planetario Galileo Galilei</h2>
                    <p className={styles.p}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia quam ut saepe at. Quos deleniti expedita iusto beatae dolorum quae, fugiat reprehenderit quam! Doloribus vel voluptates maxime explicabo molestiae accusamus.
                    </p>
                </div>
                <img src={agalery8} alt="agalery8" className={styles.items}/>
                <img src={agalery9} alt="agalery9" className={styles.items}/>
                <div className={styles.items}>
                    <h1 className={styles.h1}>09</h1>
                    <h2 className={styles.h2}>Jardín japonés</h2>
                    <p className={styles.p}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo autem non ad quam officia doloribus rerum aliquid facere similique, vero nostrum magnam atque nobis quod temporibus eius repellendus sequi asperiores!
                    </p>
                </div>
                <img src={agalery10} alt="agalery10" className={styles.items}/>
                <div className={styles.items}>
                    <h1 className={styles.h1}>10</h1>
                    <h2 className={styles.h2}>El Ateneo</h2>
                    <p className={styles.p}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas minus fuga eos, quia tempore sapiente animi mollitia sit sed distinctio! Facilis distinctio, dolore quaerat nostrum sit ab vitae facere non?
                    </p>
                </div>
            </div>
        </>
    )
}

export default GaleryActivities;