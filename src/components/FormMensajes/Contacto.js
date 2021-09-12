import { useState } from "react";
import { Message, MessageContent, PicMessage } from "../../styles/FormContentStyle"
import { CgProfile } from "react-icons/cg";
import { IconContext } from "react-icons";
const Contacto = ({setDatosContactoTerminado, setCorreoFinal, setNumeroFinal}) => {

    const [contacto, setContacto] = useState({
        correo: '',
        telefono: '',
    });

    const {correo, telefono} = contacto;
    const correoFin = `Correo Electronico: ${correo}`;
    const celularFin = `Número Celular: ${telefono}`;

    const handleInputChange = ({target}) => {
        setContacto({
            ...contacto,
            [ target.name] : target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        (correo.trim().length > 10) && 
            (telefono.trim().length > 9) && 
                formTerminado();

    }
    const formTerminado = () => {
        setDatosContactoTerminado(true);
        setCorreoFinal(correoFin);
        setNumeroFinal(celularFin);
    }
    return (
        <MessageContent>
            <IconContext.Provider value={{size: "2.5rem"}}>
                <PicMessage>
                    <CgProfile />
                </PicMessage>
                <Message onSubmit={handleSubmit}>
                    <span>Datos de contacto</span>
                    <input
                        type='text'
                        name='correo'
                        placeholder={"Correo Electronico"}
                        autoComplete="off"
                        value={correo}
                        onChange={handleInputChange} 
                    />
                    <input
                        type='text'
                        name='telefono'
                        placeholder={"Telefono celular"}
                        autoComplete="off"
                        value={telefono}
                        onChange={handleInputChange} 
                    />        
                    <button type="submit">Siguiente</button>                    
                </Message>
            </IconContext.Provider>    
        </MessageContent>
    )
}

export default Contacto
