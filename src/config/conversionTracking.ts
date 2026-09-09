/**
 * Rastreamento de conversão do Google Ads.
 *
 * Dispara o evento de conversão "Clique de saída" sempre que o visitante é
 * redirecionado para o WhatsApp — seja por um link direto (<a href="...">)
 * ou por um formulário que abre o WhatsApp via window.open().
 *
 * A tag global do Google (gtag.js) é carregada no index.html. O ID da conta
 * (AW-18437040361) e o rótulo desta ação de conversão vêm do Google Ads
 * (Metas > Conversões > "Clique de saída").
 */

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const CONVERSION_SEND_TO = 'AW-18437040361/7SUTCL_y6PAcEOnRu9dE'

export function trackWhatsAppClick() {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return

  window.gtag('event', 'conversion', {
    send_to: CONVERSION_SEND_TO,
    value: 1.0,
    currency: 'BRL',
  })
}
