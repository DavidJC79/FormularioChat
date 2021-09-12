import { Header, HeaderSubtitle, HeaderTitle } from "../../styles/FormHeaderStyle"
import { FaClipboardList } from "react-icons/fa";
import { IconContext } from "react-icons";
import { BiTime } from "react-icons/bi";

const FormHeader = () => {
    return (
        <Header>
            <HeaderTitle>
                <IconContext.Provider value={{size: "4em", color: "#FFFF"}}>
                    <h3>Formulario de prueba</h3>
                    <FaClipboardList />
                </IconContext.Provider>
            </HeaderTitle>    
            <HeaderSubtitle>
                <IconContext.Provider value={{size: ".8em"}}>
                    <BiTime />
                    <span>En menos de 5 minutos</span>
                </IconContext.Provider>
            </HeaderSubtitle>            
        </Header>
    )
}

export default FormHeader
