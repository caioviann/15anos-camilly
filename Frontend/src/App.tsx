import './App.css'
import EventoComponent from './components/Evento/EventoComponent.tsx'
import LogoComponent from './components/Logo/LogoComponent.tsx'
import NavbarComponent from './components/Navbar/NavbarComponent.tsx'
import SobreComponent from './components/Sobre/SobreComponent.tsx'
import CarrosselComponent from './components/Carrossel/CarrosselComponent.tsx'
import TimeComponent from './components/Time/TimeComponent.tsx'
import PresentesComponent from './components/Presentes/PresentesComponent.tsx'

function App() {
  return (
    <div className="app">
      <NavbarComponent />
      <LogoComponent />
      <TimeComponent />
      <SobreComponent />
      <EventoComponent />
      <PresentesComponent />
      <CarrosselComponent />
    </div>
  )
}

export default App
