import "./style.css"
import { useState } from 'react'
import PaymentModal from './PaymentModal.tsx'
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
import pixAcessorios from "../../assets/presentes/QrCode/Pix_Acessorios.jpeg"
import pixAjudeNaViagem from "../../assets/presentes/QrCode/Pix_AjudaNaViagem.jpeg"
import pixBolsas from "../../assets/presentes/QrCode/Pix_Bolsas.jpeg"
import pixFunkoPop from "../../assets/presentes/QrCode/Pix_FunkoPop.jpeg"
import pixHidratante from "../../assets/presentes/QrCode/Pix_Hidratante.jpeg"
import pixItensColecionaveis from "../../assets/presentes/QrCode/Pix_ItensColecionaveis.jpeg"
import pixLivros from "../../assets/presentes/QrCode/Pix_Livros.jpeg"
import pixMaquiagem from "../../assets/presentes/QrCode/Pix_Maquiagem.jpeg"
import pixPelucias from "../../assets/presentes/QrCode/Pix_Pelucias.jpeg"
import pixPerfumes from "../../assets/presentes/QrCode/Pix_Perfumes.jpeg"
import pixProdutosDeBeleza from "../../assets/presentes/QrCode/Pix_ProdutosDeBeleza.jpeg"
import pixProdutosDeSkinCare from "../../assets/presentes/QrCode/Pix_ProdutosDeSkinCare.jpeg"
import pixRoupasDeInverno from "../../assets/presentes/QrCode/Pix_RoupasDeInverno.jpeg"
import pixRoupasDeVerao from "../../assets/presentes/QrCode/Pix_RoupasDeVerao.jpeg"
import pixTenis from "../../assets/presentes/QrCode/Pix_Tenis.jpeg"

const presentItems = [
  { label: "Acessórios", image: acessoriosImg, price: "R$ 500,00", paymentUrl: "https://link.infinitepay.io/hb202023/VC1D-49zBkAN8eU-500,00", pixImage: pixAcessorios, pixKey: "00020101021126470014br.gov.bcb.pix0111551526782680210Acessorios5204000053039865406500.005802BR5917CAMILLY C N VIANA6008SAO JOSE62070503***63043A76" },
  { label: "Ajude na Viagem", image: ajudeNaViagemImg, price: "R$ 500,00", paymentUrl: "https://link.infinitepay.io/hb202023/VC1D-RAdGr0jQdj-500,00", pixImage: pixAjudeNaViagem, pixKey: "00020101021126520014br.gov.bcb.pix0111551526782680215Ajude na viagem5204000053039865406500.005802BR5917CAMILLY C N VIANA6008SAO JOSE62070503***63045E17" },
  { label: "Bolsas", image: bolsasImg, price: "R$ 300,00", paymentUrl: "https://link.infinitepay.io/hb202023/VC1D-qUDgfEJ7Sk-300,00", pixImage: pixBolsas, pixKey: "00020101021126430014br.gov.bcb.pix0111551526782680206Bolsas5204000053039865406300.005802BR5917CAMILLY C N VIANA6008SAO JOSE62070503***6304FF16" },
  { label: "Funko Pop", image: funkoPopImg, price: "R$ 190,00", paymentUrl: "https://link.infinitepay.io/hb202023/VC1D-kZbKugseYL-190,00", pixImage: pixFunkoPop, pixKey: "00020101021126460014br.gov.bcb.pix0111551526782680209Funko pop5204000053039865406190.005802BR5917CAMILLY C N VIANA6008SAO JOSE62070503***63048607" },
  { label: "Hidratantes", image: hidratantesImg, price: "R$ 120,00", paymentUrl: "https://link.infinitepay.io/hb202023/VC1D-16fWn4t9Ju-120,00", pixImage: pixHidratante, pixKey: "00020101021126480014br.gov.bcb.pix0111551526782680211Hidratantes5204000053039865406120.005802BR5917CAMILLY C N VIANA6008SAO JOSE62070503***630427B2" },
  { label: "Itens Colecionáveis", image: itensColecionaveisImg, price: "R$ 380,00", paymentUrl: "https://link.infinitepay.io/hb202023/VC1D-B6fH3vdVZS-380,00", pixImage: pixItensColecionaveis, pixKey: "00020101021126560014br.gov.bcb.pix0111551526782680219Itens Colecionaveis5204000053039865406380.005802BR5917CAMILLY C N VIANA6008SAO JOSE62070503***6304264C" },
  { label: "Livros", image: livrosImg, price: "R$ 80,00", paymentUrl: "https://link.infinitepay.io/hb202023/VC1D-eZFuZhFjMg-80,00", pixImage: pixLivros, pixKey: "00020101021126430014br.gov.bcb.pix0111551526782680206Livros520400005303986540580.005802BR5917CAMILLY C N VIANA6008SAO JOSE62070503***630419F2" },
  { label: "Maquiagem", image: maquiagemImg, price: "R$ 270,00", paymentUrl: "https://link.infinitepay.io/hb202023/VC1D-HJUAUPiiP8-270,00", pixImage: pixMaquiagem, pixKey: "00020101021126460014br.gov.bcb.pix0111551526782680209Maquiagem5204000053039865406270.005802BR5917CAMILLY C N VIANA6008SAO JOSE62070503***6304763C" },
  { label: "Pelúcias Disney", image: peluciasDisneyImg, price: "R$ 280,00", paymentUrl: "https://link.infinitepay.io/hb202023/VC1D-zzcNcbD2NN-280,00", pixImage: pixPelucias, pixKey: "00020101021126520014br.gov.bcb.pix0111551526782680215Pelucias Disney5204000053039865406280.005802BR5917CAMILLY C N VIANA6008SAO JOSE62070503***630476A4" },
  { label: "Perfumes", image: perfumesImg, price: "R$ 250,00", paymentUrl: "https://link.infinitepay.io/hb202023/VC1D-6NceJnBYjs-250,00", pixImage: pixPerfumes, pixKey: "00020101021126450014br.gov.bcb.pix0111551526782680208Perfumes5204000053039865406250.005802BR5917CAMILLY C N VIANA6008SAO JOSE62070503***6304FF75" },
  { label: "PIX (você escolhe o valor)", image: pixImg, price: "", paymentUrl: "", pixImage: "", pixKey: "" },
  { label: "Produtos de Cabelo", image: produtosDeCabeloImg, price: "R$ 150,00", paymentUrl: "https://link.infinitepay.io/hb202023/VC1D-Yg8APLe5Gf-150,00", pixImage: pixProdutosDeBeleza, pixKey: "00020101021126550014br.gov.bcb.pix0111551526782680218Produtos de cabelo5204000053039865406150.005802BR5917CAMILLY C N VIANA6008SAO JOSE62070503***630432B6" },
  { label: "Produtos de Skincare", image: produtosDeSkinCareImg, price: "R$ 180,00", paymentUrl: "https://link.infinitepay.io/hb202023/VC1D-a8DXc0DXnU-180,00", pixImage: pixProdutosDeSkinCare, pixKey: "00020101021126580014br.gov.bcb.pix0111551526782680221Produtos de Skin Care5204000053039865406180.005802BR5917CAMILLY C N VIANA6008SAO JOSE62070503***6304BC18" },
  { label: "Roupas de Inverno", image: roupasDeInvernoImg, price: "R$ 250,00", paymentUrl: "https://link.infinitepay.io/hb202023/VC1D-rUzk4RyzRa-250,00", pixImage: pixRoupasDeInverno, pixKey: "00020101021126540014br.gov.bcb.pix0111551526782680217Roupas de inverno5204000053039865406250.005802BR5917CAMILLY C N VIANA6008SAO JOSE62070503***630425B9" },
  { label: "Roupas de Verão", image: roupasDeVeraoImg, price: "R$ 100,00", paymentUrl: "https://link.infinitepay.io/hb202023/VC1D-ZTSeC69zYy-100,00", pixImage: pixRoupasDeVerao, pixKey: "00020101021126520014br.gov.bcb.pix0111551526782680215Roupas de verao5204000053039865406100.005802BR5917CAMILLY C N VIANA6008SAO JOSE62070503***6304A1AE" },
  { label: "Tênis", image: tenisImg, price: "R$ 400,00", paymentUrl: "https://link.infinitepay.io/hb202023/VC1D-OnVjqVcGoe-400,00", pixImage: pixTenis, pixKey: "00020101021126420014br.gov.bcb.pix0111551526782680205Tenis5204000053039865406400.005802BR5917CAMILLY C N VIANA6008SAO JOSE62070503***63046E0C" },
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
