import './style.css'

type Item = {
  label: string
  image?: string
  price?: string
  paymentUrl?: string
  pixImage?: string
  pixKey?: string
}

type Props = {
  item: Item
  onClose: () => void
}

export default function PaymentModal({ item, onClose }: Props) {
  function choose(method: 'pix' | 'card') {
    if (method === 'card') {
      if (item.paymentUrl) {
        // open external infinite pay link in a new tab
        window.open(item.paymentUrl, '_blank', 'noopener,noreferrer')
        return
      }
      const params = new URLSearchParams({ method, item: item.label })
      if (item.price) params.set('price', item.price)
      window.location.href = `/pagamento.html?${params.toString()}`
      return
    }

    const params = new URLSearchParams({ method, item: item.label })
    if (item.price) params.set('price', item.price)
    if (item.pixImage) params.set('pixImage', item.pixImage)
    if (item.pixKey) params.set('pixKey', item.pixKey)
    window.location.href = `/pagamento.html?${params.toString()}`
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>Como você quer presentear?</h3>
        <p className="modal-item">{item.label} {item.price ? `- ${item.price}` : ''}</p>
        <div className="modal-actions">
          <button className="modal-button" onClick={() => choose('card')}>Cartão</button>
          <button className="modal-button" onClick={() => choose('pix')}>PIX</button>
        </div>
        <button className="modal-close" onClick={onClose}>Cancelar</button>
      </div>
    </div>
  )
}
