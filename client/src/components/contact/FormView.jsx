import styles from './FormView.module.css'
import { useState } from 'react';

const FormView = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })

    const validate = () => {
        let isValid = true;
        let errors = {};

        if (form.name.trim() === "") {
            errors.name = "El nombre es obligatorio";
            isValid = false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            errors.email = "Correo electrónico inválido";
            isValid = false;
        }

        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(form.phone)) {
            errors.phone = "Número de teléfono inválido";
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (validate()) {
            // Envía el formulario
            console.log("Formulario válido, enviar datos:", form);
            // Aquí puedes enviar los datos a tu API o realizar otras operaciones necesarias
        } else {
            console.log("Formulario inválido, corrige los errores antes de enviar.");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.container}>

                <input 
                    type="text" 
                    placeholder='Nombre y Apellido' 
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={styles.input} 
                />
                {errors.name && <span className={styles.error}>{errors.name}</span>}

                <input 
                    type="text" 
                    placeholder='Email' 
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={styles.input} 
                />
                {errors.email && <span className={styles.error}>{errors.email}</span>}

                <input 
                    type="text" 
                    placeholder='Teléfono' 
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={styles.input} 
                />
                {errors.phone && <span className={styles.error}>{errors.phone}</span>}

                <textarea 
                    name="textarea" 
                    id="textarea" 
                    placeholder='Escribe tu mensaje aqui...' 
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={styles.textarea} 
                />
                {errors.message && <span className={styles.error}>{errors.message}</span>}

                <button 
                    type='submit'
                    className={styles.btn}
                >
                    ENVIAR
                </button>

            </form>
        </>
    )
}

export default FormView;