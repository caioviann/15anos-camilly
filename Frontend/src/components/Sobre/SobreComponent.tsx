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
                        Eu cheguei ao mundo no dia 06 de julho de 2011, às 21h05, em Macapá – AP. Mas a minha história começou antes disso… começou com um pedido cheio de amor: o do meu irmão, Caio, que sempre sonhou em ter uma irmã. E foi assim que eu vim, já sendo muito esperada.
                    </p>
                    <p className="sobre-description">
                        Sou filha de Alexandre e Maricleide, neta de Antônio e Célia e de Maurício e Cleumacy, cresci rodeada de carinho, cuidado, ensinamentos e momentos incríveis.
                    </p>
                    <p className="sobre-description">
                        Desde pequena, fui descobrindo meu jeito de ser. Sou dedicada, obediente, amorosa e sempre gostei de ajudar as pessoas ao meu redor. Tenho um coração sensível, sonhador e daqueles que valorizam os pequenos detalhes da vida. Talvez por isso eu ame tanto viver momentos especiais, criar memórias e estar perto das pessoas que amo.
                    </p>
                    <p className="sobre-description">
                        Os livros sempre foram meu refúgio. Amo mergulhar em histórias, principalmente romances e no universo mágico de Harry Potter, onde tudo parece possível. Entre páginas e capítulos, fui descobrindo novas emoções, sonhos e maneiras de enxergar o mundo.
                    </p>
                    <p className="sobre-description">
                        Ler e dançar são duas das coisas que mais gosto de fazer, é onde me sinto livre e feliz. Minha playlist me acompanha em todos os momentos e mistura um pouquinho de tudo o que eu amo: Stray Kids, Taylor Swift, Sabrina Carpenter, Anavitória e muitos outros artistas que fazem parte da minha rotina e da minha história.
                    </p>
                    <p className="sobre-description">
                        Minhas cores favoritas são rosa e verde, porque acho que elas combinam comigo: delicadeza, leveza e alegria. Na escola, a matéria que mais me encanta é História, porque adoro conhecer diferentes épocas, culturas e histórias de vida.
                    </p>
                    <p className="sobre-description">
                        Quando penso no futuro, meu coração ainda se divide entre dois sonhos: ser nutricionista ou arquiteta. De um jeito ou de outro, quero construir algo bonito, cuidar das pessoas e deixar minha marca no mundo.
                    </p>
                    <p className="sobre-description">
                        Hoje, celebro meus 15 anos. Um momento único, que marca uma nova fase da minha vida. Estou crescendo, amadurecendo e aprendendo mais sobre quem eu sou, sem deixar de carregar comigo a essência da menina sonhadora que sempre fui.
                    </p>
                    <p className="sobre-description">
                        E é com muita alegria que quero dividir esse momento com vocês.
                    </p>
                    <p className="sobre-description">
                        Sejam bem-vindos à minha história. ✨
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SobreComponent
