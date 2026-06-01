import "./style.css"
import { useState } from 'react'
import PaymentModal from './PaymentModal'
import acessoriosImg from "../../assets/presentes/Acessorios.jpeg"
import ajudeNaViagemImg from "../../assets/presentes/AjudeNaViagem.jpeg"
import bolsasImg from "../../assets/presentes/Bolsas.jpeg"
import funkoPopImg from "../../assets/presentes/FunkoPop.jpeg"
import hidratantesImg from "../../assets/presentes/Hidrantantes.jpeg"
import itensColecionaveisImg from "../../assets/presentes/ItensColecionaveis.jpeg"
import livrosImg from "../../assets/presentes/Livros.jpeg"
import maquiagemImg from "../../assets/presentes/Maquiagem.jpeg"
import peluciasDisneyImg from "../../assets/presentes/PeluciasDisney.jpeg"
import perfumesImg from "../../assets/presentes/Perfumes.jpeg"
import pixImg from "../../assets/presentes/PixVoceEscolheOValor.jpeg"
import produtosDeCabeloImg from "../../assets/presentes/ProdutosDeCabelo.jpeg"
import produtosDeSkinCareImg from "../../assets/presentes/ProdutosDeSkinCare.jpeg"
import roupasDeInvernoImg from "../../assets/presentes/RoupasDeInverno.jpeg"
import roupasDeVeraoImg from "../../assets/presentes/RoupasDeVerão.jpeg"
import tenisImg from "../../assets/presentes/Tenis.jpeg"

const presentItems = [
  { label: "Acessórios", image: acessoriosImg, price: "R$ 500,00" },
  { label: "Ajude na Viagem", image: ajudeNaViagemImg, price: "R$ 500,00" },
  { label: "Bolsas", image: bolsasImg, price: "R$ 300,00" },
  { label: "Funko Pop", image: funkoPopImg, price: "R$ 190,00" },
  { label: "Hidratantes", image: hidratantesImg, price: "R$ 120,00" },
  { label: "Itens Colecionáveis", image: itensColecionaveisImg, price: "R$ 380,00" },
  { label: "Livros", image: livrosImg, price: "R$ 80,00" },
  { label: "Maquiagem", image: maquiagemImg, price: "R$ 270,00" },
  { label: "Pelúcias Disney", image: peluciasDisneyImg, price: "R$ 280,00" },
  { label: "Perfumes", image: perfumesImg, price: "R$ 250,00" },
  { label: "PIX (você escolhe o valor)", image: pixImg, price: "" },
  { label: "Produtos de Cabelo", image: produtosDeCabeloImg, price: "R$ 150,00" },
  { label: "Produtos de Skincare", image: produtosDeSkinCareImg, price: "R$ 180,00" },
  { label: "Roupas de Inverno", image: roupasDeInvernoImg, price: "R$ 250,00" },
  { label: "Roupas de Verão", image: roupasDeVeraoImg, price: "R$ 100,00" },
  { label: "Tênis", image: tenisImg, price: "R$ 400,00" },
]

function PresentesComponent() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<any>(null)

  function openPayment(item: any) {
    setSelectedItem(item)
    setModalOpen(true)
  }

  function closePayment() {
    setSelectedItem(null)
    setModalOpen(false)
  }

  return (
    <section id="presentes">
      <div className="presentes-header">
        <div>
          <p className="presentes-subtitle">Lista de presentes</p>
          <h2 className="presentes-title">Presentes que ajudam a tornar este dia ainda mais especial</h2>
        </div>
        <div className="presentes-toolbar">
          <div className="presentes-sort">
            <span>Ordenar lista por:</span>
            <select aria-label="Ordenar presentes">
              <option value="az">A-Z</option>
              <option value="za">Z-A</option>
            </select>
          </div>
        </div>
      </div>

      <div className="presentes-grid">
        {presentItems.map((item) => (
          <article key={item.label} className="presentes-card">
            <div className="presentes-card-image">
              <img src={item.image} alt={item.label} />
            </div>
            <div className="presentes-card-body">
              <span>{item.label}</span>
              <span className="presentes-price">{item.price}</span>
              <button className="button-presentear" type="button" onClick={() => openPayment(item)}>Presentear</button>
            </div>
          </article>
        ))}
      </div>

      {modalOpen && selectedItem && (
        <PaymentModal item={selectedItem} onClose={closePayment} />
      )}
    </section>
  )
}

export default PresentesComponent
