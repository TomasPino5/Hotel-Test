import styles from './FormView.module.css'
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import './stylePhone.css'

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
        message: ""
    })

    const handlePhoneChange = (value) => {
        setForm({ ...form, [form.phone]: value });
        console.log(form);
    };

    const validate = (event) => {
        let isValid = true;

        const { name } = event.target;

        const newErrors = { ...errors };
    
        if (name === "name" && !/^[a-zA-Z\s]{4,50}$/.test(form.name)) {
            if (form.name.length < 4) {
                newErrors.name = "El nombre y apellido es obligatorio";
                isValid = false;
            } else if (form.name.length > 50) {
                newErrors.name = "El nombre y apellido es demasiado largo";
                isValid = false;
            }
        } else if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Correo electrónico inválido";
            isValid = false;
        } else if (name === "message" && !/^.{10,1000}$/.test(form.message)) {
            if (form.message.length === 0) {
                newErrors.message = "El mensaje es obligatorio";
                isValid = false;
            } else if (form.message.length > 0 && form.message.length < 11) {
                newErrors.message = "El mensaje es demasiado corto";
                isValid = false;
            } else if (form.message.length > 1000) {
                newErrors.message = "El mensaje es demasiado largo, maximo 1000 caracteres";
                isValid = false;
            }
        } else {
            newErrors[name] = "";
        }
    
        setErrors(newErrors);
        
        return isValid;
    }

    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
        
        const newErrors0 = { ...errors };

        if (name === "name" && /^[a-zA-Z\s]{4,50}$/.test(value)) {
            newErrors0.name = "";
        } else if (name === "email" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            newErrors0.email = "";
        } else if (name === "message" && /^.{10,1000}$/.test(value)) {
            newErrors0.message = "";
        }
        console.log(form);
        setErrors(newErrors0);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (!validate(event) || !/^[a-zA-Z\s]{4,50}$/.test(form.name) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || !/^.{10,1000}$/.test(form.message)) {
            alert("Formulario inválido, corrige los errores antes de enviar.");
        } else {
            alert("Formulario válido, enviar datos:", form);
            // Aquí debo enviar los datos al email
        }
    };
    

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
                    onChange={handleChange}
                    onBlur={validate}
                    className={!errors.email ? styles.input : styles.inputError} 
                />
                {errors.email && <span className={styles.error}>{errors.email}</span>}

                <PhoneInput
                    country={'ar'}
                    value={form.phone}
                    onChange={handlePhoneChange}
                    className={styles.inputPhone}
                    placeholder=""
                    name="phone"
                />

                {/* <input 
                    type="text" 
                    placeholder='Teléfono' 
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    onBlur={validate}
                    className={!errors.phone ? styles.input : styles.inputError} 
                />
                {errors.phone && <span className={styles.error}>{errors.phone}</span>} */}

                <textarea 
                    name="message" 
                    placeholder='Escriba su mensaje aquí...' 
                    value={form.message}
                    onChange={handleChange}
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