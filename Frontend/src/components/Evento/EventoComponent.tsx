import "./style.css"

function EventoComponent(){
    return (
        <div id="maps-container">
            <p>Gostaríamos muito de contar com a presença de todos vocês neste momento tão especial, 
                em que celebrarei meus 15 anos com muita alegria e gratidão! Contamos com vocês
                <br/> 
                <strong>Às 21h</strong> 
                <br/>
                <strong>Av. Anhanguera, 881 - Beirol, Macapá-AP</strong>
            </p>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498.72725649048283!2d-51.06647596150349!3d0.0210168648347086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d61e1badd4b0ea5%3A0x1b5c23423ac3b0cd!2sAv.%20Anhanguera%2C%20881%20-%20Beirol%2C%20Macap%C3%A1%20-%20AP%2C%2068909-885!5e0!3m2!1spt-BR!2sbr!4v1777382699832!5m2!1spt-BR!2sbr" 
                width="600" 
                height="450" 
                style={{ border: "0" }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Local da festa"
            ></iframe>
        </div>
    )
}

export default EventoComponent