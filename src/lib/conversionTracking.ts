// Dispara a conversao "Clique de saida" do Google Ads sempre que o usuario
// clicar em qualquer link do WhatsApp (wa.me) no site, em qualquer pagina.
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

let initialized = false

export function initWhatsAppConversionTracking() {
  if (initialized) return
  initialized = true

  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement | null
    const link = target?.closest('a[href*="wa.me"]')
    if (!link) return

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-18437040361/7SUTCL_y6PAcEOnRu9dE',
        value: 1.0,
        currency: 'BRL',
      })
    }
  })
}
