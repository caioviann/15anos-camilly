import { useState } from "react"
import "./style.css"
import RecemNascida from "../../assets/Aniversarios/RecemNascida.jpeg"
import Ano1 from "../../assets/Aniversarios/1_Ano.jpeg"
import Ano2 from "../../assets/Aniversarios/2_Ano.jpeg"
import Ano3 from "../../assets/Aniversarios/3_Ano.jpeg"
import Ano4 from "../../assets/Aniversarios/4_Ano.jpeg"
import Ano5 from "../../assets/Aniversarios/5_Ano.jpeg"
import Ano6 from "../../assets/Aniversarios/6_Ano.jpeg"
import Ano7 from "../../assets/Aniversarios/7_Ano.jpeg"
import Ano8 from "../../assets/Aniversarios/8_Ano.jpeg"
import Ano9 from "../../assets/Aniversarios/9_Ano.jpeg"
import Ano10 from "../../assets/Aniversarios/10_Ano.jpeg"
import Ano11 from "../../assets/Aniversarios/11_Ano.jpeg"
import Ano12 from "../../assets/Aniversarios/12_Ano.jpeg"
import Ano13 from "../../assets/Aniversarios/13_Ano.jpeg"
import Ano14 from "../../assets/Aniversarios/14_Ano.jpeg"

const fotos = [
    { imagem: RecemNascida, idade: "Recém nascida" },
    { imagem: Ano1, idade: "1 ano" },
    { imagem: Ano2, idade: "2 anos" },
    { imagem: Ano3, idade: "3 anos" },
    { imagem: Ano4, idade: "4 anos" },
    { imagem: Ano5, idade: "5 anos" },
    { imagem: Ano6, idade: "6 anos" },
    { imagem: Ano7, idade: "7 anos" },
    { imagem: Ano8, idade: "8 anos" },
    { imagem: Ano9, idade: "9 anos" },
    { imagem: Ano10, idade: "10 anos" },
    { imagem: Ano11, idade: "11 anos" },
    { imagem: Ano12, idade: "12 anos" },
    { imagem: Ano13, idade: "13 anos" },
    { imagem: Ano14, idade: "14 anos" },
]

function CarrosselComponent() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [touchStart, setTouchStart] = useState<number | null>(null)

    const proximo = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % fotos.length)
    }

    const anterior = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + fotos.length) % fotos.length)
    }

    const irPara = (index: number) => {
        setCurrentIndex(index)
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX)
    }

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStart !== null && e.changedTouches.length > 0) {
            const distancia = touchStart - e.changedTouches[0].clientX
            
            if (distancia > 50) {
                proximo()
            } else if (distancia < -50) {
                anterior()
            }
            
            setTouchStart(null)
        }
    }

    return (
        <section id="carrossel">
            <h2 className="carrossel-title">Crescendo ao longo dos anos</h2>
            
            <div className="carrossel-container">
                <button className="carrossel-btn carrossel-btn-anterior" onClick={anterior}>
                    ❮
                </button>

                <div 
                    className="carrossel-slide"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <img
                        src={fotos[currentIndex].imagem}
                        alt={fotos[currentIndex].idade}
                        className="carrossel-imagem"
                    />
                    <p className="carrossel-idade">{fotos[currentIndex].idade}</p>
                    <p className="carrossel-swipe-hint">← Arraste para o lado →</p>
                </div>

                <button className="carrossel-btn carrossel-btn-proximo" onClick={proximo}>
                    ❯
                </button>
            </div>

            <div className="carrossel-dots">
                {fotos.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => irPara(index)}
                    ></button>
                ))}
            </div>
        </section>
    )
}

export default CarrosselComponent
