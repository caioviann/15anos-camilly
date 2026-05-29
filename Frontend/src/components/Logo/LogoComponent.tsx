import "./style.css"
import logo from "../../assets/logoCamilly.png"

function LogoComponent() {
    return (
        <div id="logo-container">
            <img src={logo} id="imgLogo"/>
            <p>18 | 07 | 2026</p>
        </div>
    )
}

export default LogoComponent;