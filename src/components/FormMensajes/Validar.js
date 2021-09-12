import { MessageResp, MessageRespContent } from "../../styles/FormContentStyle"

const Validar = () => {
    const mensaje = `Si tus datos son correctos por favor continuemos`;
    return (
        <MessageRespContent >
            <MessageResp validar>
                <span>{mensaje}</span>
            </MessageResp>
        </MessageRespContent>
    )
}

export default Validar
