import styles from './FormView.module.css'
import { useState } from 'react';

const FormView = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    return (
        <>
            <div className={styles.container}>
                hola soy form
            </div>
        </>
    )
}

export default FormView;