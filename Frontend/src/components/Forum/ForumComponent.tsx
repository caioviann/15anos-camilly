import { useEffect, useState } from 'react'
import './style.css'
import { fetchMessages, sendMessage, type Message } from '../../api/messageApi'

export default function ForumComponent() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [loadError, setLoadError] = useState(false)

  async function loadMessages() {
    setLoading(true)
    setError(null)
    setLoadError(false)

    try {
      const res = await fetchMessages()
      setMessages(Array.isArray(res) ? res : [])
    } catch (err) {
      console.error(err)
      setMessages([])
      setLoadError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadMessages()
  }, [])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const trimmedName = name.trim()
    const trimmedMessage = message.trim()

    if (!trimmedName || !trimmedMessage) {
      setError('Por favor, preencha nome e recado.')
      return
    }

    setSubmitting(true)
    setError(null)
    setSuccess(false)

    try {
      await sendMessage({ name: trimmedName, message: trimmedMessage })
      setName('')
      setMessage('')
      setSuccess(true)
      await loadMessages()
      setTimeout(() => setSuccess(false), 3000)
    } catch (err) {
      console.error(err)
      setError('Não foi possível enviar o recado. Tente novamente.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="forum" id="recados">
      <div className="forum-header">
        <span className="forum-subtitle">Deixe sua mensagem</span>
        <h2>Recados para a aniversariante</h2>
      </div>

      <form className="forum-form" onSubmit={handleSubmit}>
        <div className="forum-fields">
          <label className="forum-label">
            Seu nome
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu nome"
              disabled={submitting}
            />
          </label>
          <label className="forum-label">
            Seu recado
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escreva uma mensagem para a aniversariante"
              rows={5}
              disabled={submitting}
            />
          </label>
        </div>

        <div className="forum-actions">
          <button type="submit" disabled={submitting}>
            {submitting ? 'Enviando...' : 'Enviar recado'}
          </button>
        </div>

        {error && <p className="forum-status forum-error">{error}</p>}
        {success && <p className="forum-status forum-success">Recado enviado com sucesso!</p>}
      </form>

      <div className="forum-list-wrapper">
        <div className="forum-list-header">
          <span className="forum-list-subtitle">Recados recebidos</span>
          <h3>Mensagens</h3>
        </div>

        {loading ? (
          <div className="forum-loading">Carregando recados...</div>
        ) : loadError ? (
          <div className="forum-empty">Não foi possível carregar os recados. Você ainda pode enviar o seu.</div>
        ) : messages.length === 0 ? (
          <div className="forum-empty">Ainda não há recados. Seja o primeiro a escrever!</div>
        ) : (
          <div className="forum-list">
            {messages.map((item, index) => (
              <article className="forum-card" key={item.id ?? `${item.name}-${index}`}>
                <header className="forum-card-header">{item.name}</header>
                <p className="forum-card-message">{item.message}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
