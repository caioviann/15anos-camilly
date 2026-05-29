import { useEffect, useState } from 'react'
import './style.css'
import { searchGuests, patchInvite, type Guest } from '../../api/guestApi'

function getGuestKey(guest: Guest) {
  return String(guest.id)
}

export default function ConfirmacaoComponent() {
  const [query, setQuery] = useState('')
  const [allGuests, setAllGuests] = useState<Guest[]>([])
  const [results, setResults] = useState<Guest[]>([])
  const [selected, setSelected] = useState<Record<string, boolean>>({})
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  async function loadAllGuests() {
    setLoading(true)
    try {
      const res = await searchGuests('')
      const pending = res.filter((g) => g.confirmed === null)
      setAllGuests(pending)
      setResults(pending)
    } catch {
      setResults([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!allGuests.length) return
    const t = setTimeout(() => {
      if (!query) {
        setResults(allGuests)
        return
      }
      const filtered = allGuests.filter((g) => {
        const name = g.invitedName || ''
        return name.toLowerCase().includes(query.toLowerCase())
      })
      setResults(filtered)
    }, 150)
    return () => clearTimeout(t)
  }, [query, allGuests])

  function toggle(key: string) {
    setSelected((s) => ({ ...s, [key]: !s[key] }))
  }

  function getSelectedGuests() {
    return allGuests.filter((guest) => selected[getGuestKey(guest)])
  }

  async function confirm(attending: boolean) {
    const guests = getSelectedGuests()
    if (guests.length === 0) {
      setMessage('Selecione pelo menos uma pessoa.')
      return
    }
    setMessage(null)
    setLoading(true)
    try {
      const promises = guests.map((g) =>
        patchInvite({ id: g.id, confirmed: attending })
          .then(() => ({ ok: true, guest: g }))
          .catch((err) => {
            console.error('Falhou para', g.invitedName, err) // ← veja o erro real
            return { ok: false, guest: g }
          })
      )
      const results = await Promise.all(promises)
      const succeeded = results.filter((r) => r.ok).map((r) => r.guest.invitedName)
      const failed = results.filter((r) => !r.ok).map((r) => r.guest.invitedName)
      let msg = ''
      if (succeeded.length) msg += `${succeeded.length} confirmados: ${succeeded.join(', ')}. `
      if (failed.length) msg += `${failed.length} falharam: ${failed.join(', ')}.`
      setMessage(msg)
      // clear selection for succeeded
      setSelected((s) => {
        const next = { ...s }
        results.forEach((r) => {
          if (r.ok) delete next[getGuestKey(r.guest)]
        })
        return next
      })
      setQuery('')
      setResults([])
    } catch (e) {
      setMessage('Erro ao enviar. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="confirmacao">
      <h2>Confirmação de presença</h2>
      <div className="searchRow">
        <input
          placeholder="Busque seu nome ou de familiares"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => {
            if (!allGuests.length) loadAllGuests()
          }}
        />
        {loading && <div className="loading">Carregando...</div>}
      </div>

      {allGuests.length > 0 && (
        <>
          {results.length > 0 ? (
            <ul className="results">
              {results.map((g) => {
                const key = getGuestKey(g)
                return (
                  <li key={key}>
                    <label>
                      <input
                        type="checkbox"
                        checked={!!selected[key]}
                        onChange={() => toggle(key)}
                      />
                      <span className="name">{g.invitedName}</span>
                    </label>
                  </li>
                )
              })}
            </ul>
          ) : (
            <div className="noResults">Nenhum convidado encontrado</div>
          )}
        </>
      )}

      <div className="actions">
        <button className="confirm" onClick={() => confirm(true)}>
          Confirmar presença
        </button>
        <button className="decline" onClick={() => confirm(false)}>
          Não vai
        </button>
      </div>

      {message && <div className="message">{message}</div>}
    </section>
  )
}
