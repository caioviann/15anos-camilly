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
  const [successModal, setSuccessModal] = useState<{ names: string[]; status: string } | null>(null)
  const [confirmModal, setConfirmModal] = useState<{ names: string[]; attending: boolean } | null>(null)

  async function loadAllGuests() {
    setLoading(true)
    try {
      const res = await searchGuests()
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

  function openConfirmModal(attending: boolean) {
    const guests = getSelectedGuests()
    if (guests.length === 0) return
    setConfirmModal({ names: guests.map((g) => g.invitedName), attending })
  }

  async function confirm(attending: boolean) {
    const guests = getSelectedGuests()
    if (guests.length === 0) return

    setConfirmModal(null)
    setLoading(true)
    try {
      const promises = guests.map((g) =>
        patchInvite({ id: g.id, confirmed: attending }).then(() => g.invitedName)
      )
      const confirmedNames = await Promise.all(promises)
      const status = attending ? 'Confirmado' : 'Recusado'
      setSuccessModal({ names: confirmedNames, status })
      
      setTimeout(() => {
        setSuccessModal(null)
        setSelected({})
        setQuery('')
        setResults([])
        loadAllGuests()
      }, 3000)
    } catch (e) {
      console.error('Erro ao enviar:', e)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="confirmacao" id="confirmacao">
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
        <button className="confirm" onClick={() => openConfirmModal(true)} disabled={Object.values(selected).filter(Boolean).length === 0}>
          Confirmar presença
        </button>
        <button className="decline" onClick={() => openConfirmModal(false)} disabled={Object.values(selected).filter(Boolean).length === 0}>
          Não vai
        </button>
      </div>

      {confirmModal && (
        <div className="confirm-modal-overlay">
          <div className="confirm-modal">
            <h3>Tem certeza?</h3>
            <p className="confirm-label">
              {confirmModal.attending ? 'Confirmar presença de:' : 'Marcar como recusado:'}
            </p>
            <ul className="confirm-names">
              {confirmModal.names.map((name, idx) => (
                <li key={idx}>{name}</li>
              ))}
            </ul>
            <div className="confirm-actions">
              <button className="confirm-yes" onClick={() => confirm(confirmModal.attending)}>
                {confirmModal.attending ? 'Sim, confirmar' : 'Sim, recusar'}
              </button>
              <button className="confirm-no" onClick={() => setConfirmModal(null)}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {successModal && (
        <div className="success-modal">
          <div className="modal-content">
            <span className="modal-icon">{successModal.status === 'Confirmado' ? '✅' : '❌'}</span>
            <h3>{successModal.status}</h3>
            <ul className="modal-names">
              {successModal.names.map((name, idx) => (
                <li key={idx}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  )
}
