import "./style.css"
import aniversarianteImg from "../../assets/Aniversariante.jpeg"

function SobreComponent() {
    return (
        <section id="sobre">
            <div className="sobre-content">
                <div className="sobre-photo-wrapper">
                    <img
                        src={aniversarianteImg}
                        alt="Foto da aniversariante"
                        className="sobre-photo"
                    />
                </div>
                <div className="sobre-text">
                    <h2 className="sobre-title">Sobre a Aniversariante</h2>
                    <p className="sobre-description">
                        Eu cheguei ao mundo no dia 06 de julho de 2011, às 21h05, em Macapá – AP. Mas a minha história começou antes disso: com o pedido cheio de amor do meu irmão Caio, que sempre sonhou em ter uma irmã. Foi assim que eu vim, já muito esperada.
                    </p>
                    <p className="sobre-description">
                        Sou filha do Alexandre e da Maricleide, e cresci rodeada de carinho, cuidado e ensinamentos. Também tenho a sorte de ter avós incríveis — Antônio e Célia, e Maurício e Cleumacy — que fazem parte de quem eu sou.
                    </p>
                    <p className="sobre-description">
                        Desde pequena, descobri o meu jeito de ser: dedicada, amorosa e sempre pronta para ajudar. Tenho um coração sensível e sonhador, que valoriza os pequenos detalhes da vida. Por isso, adoro viver momentos especiais, criar memórias e estar perto de quem amo.
                    </p>
                    <p className="sobre-description">
                        Os livros sempre foram meu refúgio. Amo mergulhar em histórias, principalmente romances e no universo mágico de Harry Potter, onde tudo parece possível. Entre páginas e capítulos, descobri novas emoções, sonhos e maneiras de olhar o mundo.
                    </p>
                    <p className="sobre-description">
                        Ler e dançar são minhas maiores paixões. São esses momentos que me fazem sentir livre e feliz. Minha playlist mistura Stray Kids, Taylor Swift, Sabrina Carpenter, Anavitória e outros artistas que acompanham minha rotina.
                    </p>
                    <p className="sobre-description">
                        Minhas cores favoritas são rosa e verde, porque combinam com delicadeza, leveza e alegria. Na escola, a disciplina que mais me encanta é História, pois adoro conhecer diferentes épocas, culturas e trajetórias de vida.
                    </p>
                    <p className="sobre-description">
                        Quando penso no futuro, meu coração se divide entre ser nutricionista ou arquiteta. De qualquer forma, quero construir algo bonito, cuidar das pessoas e deixar minha marca no mundo.
                    </p>
                    <p className="sobre-description">
                        Hoje, celebro meus 15 anos: um momento único que marca uma nova fase. Estou crescendo, amadurecendo e aprendendo mais sobre quem sou, sem deixar de carregar comigo a essência da menina sonhadora que sempre fui.
                    </p>
                    <p className="sobre-description">
                        É com muita alegria que divido esse momento com vocês. Sejam bem-vindos à minha história.
                    </p>
                    <p className="sobre-description">
                        Venha fazer parte dessa noite mágica e inesquecível, onde cada sorriso conta e cada abraço aquece o coração. ✨
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SobreComponent
