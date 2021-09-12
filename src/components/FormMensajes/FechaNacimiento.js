import { useState } from "react";
import { Message, MessageContent, PicMessage } from "../../styles/FormContentStyle"
import { CgProfile } from "react-icons/cg";
import { IconContext } from "react-icons";
const FechaNacimiento = ({setDatosNacimientoTerminado, setNacimientoFinal}) => {

    const [fechaNacimiento, setFechaNacimiento] = useState({
        dia: '',
        mes: '',
        anio: '',
    });

    const {dia, mes, anio} = fechaNacimiento;
    const fechaFin = `${dia} de ${mes} del ${anio}`;
    
    const handleInputChange = ({target}) => {
        setFechaNacimiento({
            ...fechaNacimiento,
            [ target.name] : target.value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Se disparó el submit");
        (dia.trim().length > 1) && 
            (mes.trim().length > 3) && 
                (anio.trim().length > 3) && 
                    formTerminado();

    }
    const formTerminado = ( ) => {
        setDatosNacimientoTerminado(true);
        setNacimientoFinal(fechaFin);
    }
    return (
        <MessageContent>
            <IconContext.Provider value={{size: "2.5rem"}}>
                <PicMessage>
                    <CgProfile />
                </PicMessage>
                <Message onSubmit={handleSubmit}>
                    <span>¿Cuál es tu fecha de nacimiento?</span>
                    <input
                        type='text'
                        name='dia'
                        placeholder={"Dia"}
                        autoComplete="off"
                        value={dia}
                        onChange={handleInputChange} 
                    />
                    <input
                        type='text'
                        name='mes'
                        placeholder={"Mes"}
                        autoComplete="off"
                        value={mes}
                        onChange={handleInputChange} 
                    />
                    <input
                        type='text'
                        name='anio'
                        placeholder={"Año"}
                        autoComplete="off"
                        value={anio}
                        onChange={handleInputChange} 
                    />
                    <button type="submit">Siguiente</button>                    
                </Message>
            </IconContext.Provider>    
        </MessageContent>
    )
}

export default FechaNacimiento
