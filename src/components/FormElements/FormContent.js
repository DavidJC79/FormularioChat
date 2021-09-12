import { Fragment, useState } from "react";
import { ButtonFin, Content } from "../../styles/FormContentStyle"
import Contacto from "../FormMensajes/Contacto";
import FechaNacimiento from "../FormMensajes/FechaNacimiento";
import Nombre from "../FormMensajes/Nombre"
import Validar from "../FormMensajes/Validar";
import Respuesta from "../FormRespuesta/Respuesta";
import { guardarDatosForm } from "../helper/guardarDatosForm";

const FormContent = () => {
    //States para validar que los datos del form se hayan completado
    const [ datoNombreTerminado, setDatoNombreTerminado ] = useState(false);
    const [ datoNacimientoTerminado, setDatosNacimientoTerminado ] = useState(false);
    const [ datoContactoTerminado, setDatosContactoTerminado ] = useState(false);
    //States para almacenar los datos finales adquiridos en los formularios
    const [ nombreFinal, setNombreFinal ] = useState("");
    const [ correoFinal, setCorreoFinal ] = useState("");
    const [ nacimientoFinal, setNacimientoFinal ] = useState("");
    const [ numeroFinal, setNumeroFinal ] = useState("");
    //State Final para mostrar todos los datos
    const [verDatos, setVerDatos] = useState(false);

    const handleClick = () => {
        guardarDatosForm(nombreFinal, correoFinal, nacimientoFinal, numeroFinal);
        setVerDatos(!verDatos);
    }

    const datosFin = [nombreFinal, nacimientoFinal, correoFinal, numeroFinal];

    return (
        <Content>
            <Nombre setDatoNombreTerminado={setDatoNombreTerminado} 
                setNombreFinal={setNombreFinal}/>
            { datoNombreTerminado && 
                <Fragment>
                    <Respuesta dato={nombreFinal} />
                    <FechaNacimiento setDatosNacimientoTerminado={setDatosNacimientoTerminado} 
                        setNacimientoFinal={setNacimientoFinal}/>
                </Fragment>
            }
            { datoNacimientoTerminado && 
                <Fragment>
                    <Respuesta dato={nacimientoFinal}/>
                    <Contacto setDatosContactoTerminado={setDatosContactoTerminado} 
                        setCorreoFinal={setCorreoFinal} setNumeroFinal={setNumeroFinal}/>
                </Fragment>
            }
            { datoContactoTerminado && 
                <Fragment>
                    <Respuesta dato={correoFinal} datoOpc={numeroFinal}/>
                    <Validar />
                    <ButtonFin onClick={() => handleClick()}>Iniciar</ButtonFin>
                </Fragment>
            }
            {
                verDatos &&
                    <Respuesta datosFin={datosFin} fin={true}/>
            }
        </Content>
    )
}

export default FormContent
