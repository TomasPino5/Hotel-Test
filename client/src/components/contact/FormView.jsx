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

    const validate = (event) => {
        let isValid = true;

        const newErrors = { ...errors };
    
        if (event.target.name === "name" && form.name.trim() === "") {
            newErrors.name = "El nombre es obligatorio";
            isValid = false;
        } else if (event.target.name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Correo electrónico inválido";
            isValid = false;
        } else if (event.target.name === "phone" && !/^[0-9]{10}$/.test(form.phone)) {
            newErrors.phone = "Número de teléfono inválido";
            isValid = false;
        } else if (event.target.name === "message" && form.message.trim() === "") {
            newErrors.message = "El mensaje es obligatorio";
            isValid = false;
        } else {
            newErrors[event.target.name] = "";
        }
    
        setErrors(newErrors);
        
        return isValid;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    
        if (validate()) {
            alert("Formulario válido, enviar datos:", form);
            // Aquí debo enviar los datos al email
        } else {
            alert("Formulario inválido, corrige los errores antes de enviar.");
        }
    };

    const handleChange = (event) => {
        setForm({ ...form, name: event.target.value });
    }


    return (
        <>
            <form onSubmit={handleSubmit} className={styles.container}>

                <input 
                    type="text" 
                    placeholder='Nombre y Apellido' 
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={validate}
                    className={!errors.name ? styles.input : styles.inputError} 
                />
                {errors.name && <span className={styles.error}>{errors.name}</span>}

                <input 
                    type="text" 
                    placeholder='Email' 
                    name="email"
                    value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                    onBlur={validate}
                    className={!errors.email ? styles.input : styles.inputError} 
                />
                {errors.email && <span className={styles.error}>{errors.email}</span>}

                <input 
                    type="text" 
                    placeholder='Teléfono' 
                    name="phone"
                    value={form.phone}
                    onChange={(event) => setForm({ ...form, phone: event.target.value })}
                    onBlur={validate}
                    className={!errors.phone ? styles.input : styles.inputError} 
                />
                {errors.phone && <span className={styles.error}>{errors.phone}</span>}

                <textarea 
                    name="message" 
                    placeholder='Escribe tu mensaje aqui...' 
                    value={form.message}
                    onChange={(event) => setForm({ ...form, message: event.target.value })}
                    onBlur={validate}
                    className={!errors.message ? styles.textarea : styles.textareaError} 
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