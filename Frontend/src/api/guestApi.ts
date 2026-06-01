export type Guest = {
  id: number
  invitedName: string
  confirmed: boolean | null
}

const API_BASE_URL = "https://one5anos-camilly.onrender.com"

function apiUrl(path: string) {
  return `${API_BASE_URL}${path}`
}

export async function searchGuests(): Promise<Guest[]> {
  const res = await fetch(apiUrl('/invited'))
  if (!res.ok) throw new Error('Erro ao buscar convidados')
  return res.json()
}

export async function sendRsvp(payload: { ids: string[]; attending: boolean }) {
  const res = await fetch(apiUrl('/invited'), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) throw new Error('Erro ao enviar RSVP')
  return res.json()
}

export async function patchInvite(payload: { id: number; confirmed: boolean }) {
  if (payload.id == null) throw new Error('ID is required for PATCH /invited/{id}')
  const res = await fetch(apiUrl(`/invited/${encodeURIComponent(String(payload.id))}`), {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ confirmed: payload.confirmed }),
  })
  if (!res.ok) throw new Error('Erro ao atualizar convidado')
  return res.json()
}
