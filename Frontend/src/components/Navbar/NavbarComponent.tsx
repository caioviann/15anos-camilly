import { useState } from "react"
import "./style.css"

function NavbarComponent() {
    const [menuOpen, setMenuOpen] = useState(false)

    const menuItems = [
        { label: "Home", href: "#logo-container" },
        { label: "Sobre", href: "#sobre" },
        { label: "Recepção", href: "#maps-container" },
        { label: "Lista de Presentes", href: "#presentes" },
        { label: "Confirme sua Presença", href: "#confirme-presenca" },
        { label: "Recados", href: "#recados" },
    ]

    const handleLinkClick = () => {
        setMenuOpen(false)
    }

    return (
        <nav id="navbar">
            <button
                className={`navbar-hamburger ${menuOpen ? "open" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Abrir menu"
            >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
            </button>

            <ul className={`navbar-links ${menuOpen ? "navbar-links--open" : ""}`}>
                {menuItems.map((item) => (
                    <li key={item.href}>
                        <a href={item.href} onClick={handleLinkClick}>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavbarComponent
