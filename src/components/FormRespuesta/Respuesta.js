import { Fragment } from "react"
import { MessageResp, MessageRespContent } from "../../styles/FormContentStyle"

const Respuesta = ({dato, datoOpc, datosFin, fin=false}) => {
    
    let [ nombreFinal, nacimientoFinal, correoFinal, numeroFinal ] = [""];
    
    if(fin) {
        [ nombreFinal, nacimientoFinal, correoFinal, numeroFinal ] = datosFin
    }
    
    return (
        <MessageRespContent>
            <MessageResp>
                {fin ? 
                    <Fragment>
                        <span>{nacimientoFinal}</span>
                        <span>{correoFinal}</span>
                        <span>{numeroFinal}</span>
                        <span>{nombreFinal}</span>
                    </Fragment>
                    :
                    <Fragment> 
                        <span>{dato}</span>
                        <span>{datoOpc}</span>                    
                    </Fragment>
                } 
            </MessageResp>
        </MessageRespContent>
    )
}

export default Respuesta
