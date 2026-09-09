import { useState, type FormEvent } from 'react'
import { company, waLink } from '../config/siteConfig'
import { trackWhatsAppClick } from '../config/conversionTracking'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { WhatsAppIcon } from '../components/icons'

/**
 * Formulário de contato. Sem backend: ao enviar, monta uma mensagem
 * formatada e abre o WhatsApp da ConectaWeb já com o texto preenchido —
 * evita prometer uma integração de e-mail/backend que ainda não existe.
 * Quando houver backend real, troque o handleSubmit por uma chamada de API.
 */
export default function ContactForm() {
  const [name, setName] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [segment, setSegment] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const text = [
      'Olá! Vim pelo formulário do site e quero saber mais.',
      '',
      `Nome: ${name}`,
      `Empresa: ${businessName}`,
      `Segmento: ${segment}`,
      `WhatsApp para contato: ${whatsapp}`,
      message ? `Mensagem: ${message}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    trackWhatsAppClick()
    window.open(waLink(text), '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="py-20 md:py-28 bg-panel">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
          <div>
            <SectionHeading
              eyebrow="Formulário"
              title="Prefere escrever antes de chamar no WhatsApp?"
              description="Preencha os campos abaixo — ao enviar, vamos abrir o WhatsApp com sua mensagem já preparada, pronta para enviar."
            />
            <p className="text-sm text-muted mt-6">
              Também pode falar direto pelo e-mail{' '}
              <a href={`mailto:${company.email}`} className="text-accent-ink font-medium hover:underline">
                {company.email}
              </a>
              .
            </p>
          </div>

          <Reveal delay={100}>
            <form onSubmit={handleSubmit} className="bg-paper border border-line rounded-2xl p-6 md:p-8 space-y-4">
              <div>
                <label htmlFor="cf-name" className="block text-sm font-medium text-ink mb-1.5">
                  Nome *
                </label>
                <input
                  id="cf-name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-line bg-panel text-ink text-sm focus-visible:outline-2 focus-visible:outline-accent"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cf-company" className="block text-sm font-medium text-ink mb-1.5">
                    Empresa
                  </label>
                  <input
                    id="cf-company"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-line bg-panel text-ink text-sm focus-visible:outline-2 focus-visible:outline-accent"
                  />
                </div>
                <div>
                  <label htmlFor="cf-segment" className="block text-sm font-medium text-ink mb-1.5">
                    Segmento
                  </label>
                  <input
                    id="cf-segment"
                    placeholder="Ex: salão, clínica, restaurante..."
                    value={segment}
                    onChange={(e) => setSegment(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-line bg-panel text-ink text-sm focus-visible:outline-2 focus-visible:outline-accent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="cf-whatsapp" className="block text-sm font-medium text-ink mb-1.5">
                  WhatsApp *
                </label>
                <input
                  id="cf-whatsapp"
                  type="tel"
                  required
                  placeholder="(00) 00000-0000"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-line bg-panel text-ink text-sm focus-visible:outline-2 focus-visible:outline-accent"
                />
              </div>

              <div>
                <label htmlFor="cf-message" className="block text-sm font-medium text-ink mb-1.5">
                  Mensagem
                </label>
                <textarea
                  id="cf-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-line bg-panel text-ink text-sm focus-visible:outline-2 focus-visible:outline-accent resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-ink text-white font-semibold text-base py-3.5 rounded-full transition-colors"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Quero saber mais
              </button>
              <p className="text-xs text-muted text-center">
                Ao enviar, você será redirecionado ao WhatsApp com sua mensagem já preenchida.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
