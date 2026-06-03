import { useEffect } from 'react'
import './App.css'
import EventoComponent from './components/Evento/EventoComponent.tsx'
import LogoComponent from './components/Logo/LogoComponent.tsx'
import ConfirmacaoComponent from './components/Confirmacao/ConfirmacaoComponent'
import NavbarComponent from './components/Navbar/NavbarComponent.tsx'
import SobreComponent from './components/Sobre/SobreComponent.tsx'
import CarrosselComponent from './components/Carrossel/CarrosselComponent.tsx'
import TimeComponent from './components/Time/TimeComponent.tsx'
import PresentesComponent from './components/Presentes/PresentesComponent.tsx'
import ForumComponent from './components/Forum/ForumComponent.tsx'

function App() {
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL
    if (!apiUrl) return

    const wakeBackend = async () => {
      try {
        await fetch(apiUrl, { method: 'GET', cache: 'no-store' })
      } catch (error) {
        console.warn('Não foi possível acordar o backend:', error)
      }
    }

    wakeBackend()
  }, [])

  return (
    <div className="app">
      <NavbarComponent />
      <LogoComponent />
      <TimeComponent />
      <SobreComponent />
      <EventoComponent />
      <PresentesComponent />
      <ConfirmacaoComponent />
      <CarrosselComponent />
      <ForumComponent />
    </div>
  )
}

export default App
