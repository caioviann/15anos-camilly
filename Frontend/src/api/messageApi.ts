export type Message = {
  id?: string | number
  name: string
  message: string
}

const API_BASE_URL = "https://one5anos-camilly.onrender.com"

function apiUrl(path: string) {
  return `${API_BASE_URL}${path}`
}

export async function fetchMessages(): Promise<Message[]> {
  const res = await fetch(apiUrl('/message'))
  if (!res.ok) {
    const errorText = await res.text()
    throw new Error(errorText || 'Erro ao buscar recados')
  }

  const text = await res.text()
  try {
    const data = JSON.parse(text)
    return Array.isArray(data) ? data : []
  } catch {
    return []
  }
}

export async function sendMessage(payload: { name: string; message: string }) {
  const res = await fetch(apiUrl('/message'), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  const text = await res.text()
  if (!res.ok) {
    throw new Error(text || 'Erro ao enviar recado')
  }

  try {
    return JSON.parse(text)
  } catch {
    return text
  }
}
