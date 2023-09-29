import styles from './validation.module.css';

const validation = (data) => {
    
    let errors = {};

    if(!data.email.includes('@')){
        errors.e1 = 'Ingrese un email válido'
    }
    if(!data.email){
        errors.e2 = 'el nombre de usuario no puede estar vacío'
    }
    if(data.email.length > 35){
        errors.e3 = 'el nombre de usuario no puede tener más de 35 caracteres'
    }
    if(!/\d+/.test(data.password)){
        errors.p1 = 'Al menos un numero'
    }
    if(data.password.length < 6 || data.password.length > 10) {
        errors.p2 = "Debe tener entre 6 y 10 caracteres"
    }
 
    return errors
    
    
}

export default validation;