import './style.css'

function InfoEventoComponent() {
  return (
    <section className="info-evento" id="info-evento">
      <h2>Detalhes importantes</h2>
      <div className="info-box">
        <p>
          <strong>Tipo de traje:</strong> Esporte fino
        </p>
        <p>
          <strong>Alerta de spoiler:</strong> A cor rosa é o segredo do vestido da debutante! Que tal escolher outro tom para arrasar na festa?
        </p>
      </div>

      <div className="schedule-box">
        <h3>Horários</h3>
        <ul>
          <li><strong>21h00</strong> – Recepção e registros de fotos</li>
          <li><strong>22h00</strong> – Momento livre para rever familiares e amigos</li>
          <li><strong>23h00</strong> – Cerimonial, valsa e parabéns</li>
          <li><strong>00h00</strong> – Jantar</li>
          <li><strong>00h30</strong> – Abertura da pista de dança</li>
          <li><strong>03h00</strong> – Encerramento</li>
        </ul>
      </div>

      <p className="final-note">
        Estou ansiosa para celebrar esse momento com vocês! Cheguem no horário para não perder nenhum instante dessa noite tão especial.
      </p>
    </section>
  )
}

export default InfoEventoComponent
