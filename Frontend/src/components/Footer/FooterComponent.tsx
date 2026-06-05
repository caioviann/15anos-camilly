import "./style.css"

function FooterComponent() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-credits">
                    <p className="footer-dev-text">
                        Desenvolvido com carinho por <span className="dev-name">Caio Henrique</span>
                    </p>
                </div>
                
                <div className="footer-links">
                    <a
                        href="https://www.instagram.com/caioviann/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link-item instagram"
                        aria-label="Instagram de Caio Henrique"
                    >
                        <svg className="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                        <span className="footer-link-text">@caioviann</span>
                    </a>

                    <a
                        href="https://wa.me/5548988685523"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link-item whatsapp"
                        aria-label="WhatsApp de Caio Henrique"
                    >
                        <svg className="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <span className="footer-link-text">(48) 98868-5523</span>
                    </a>

                    <a
                        href="mailto:caiohenriqueviana01@gmail.com"
                        className="footer-link-item email"
                        aria-label="E-mail de Caio Henrique"
                    >
                        <svg className="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        <span className="footer-link-text">caiohenriqueviana01@gmail.com</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/caio-henrique-a05044259/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link-item linkedin"
                        aria-label="LinkedIn de Caio Henrique"
                    >
                        <svg className="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                        <span className="footer-link-text">LinkedIn</span>
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Camilly 15 Anos. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default FooterComponent
