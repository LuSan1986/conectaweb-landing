import { useEffect, useState, type FormEvent } from 'react'
import { waLink } from '../config/siteConfig'
import { trackWhatsAppClick } from '../config/conversionTracking'

/**
 * Formulário de briefing — usado depois que um cliente já fechou negócio,
 * para levantar tudo que é preciso para montar o site dele (nos mesmos
 * moldes do que perguntamos para montar o site do salão).
 *
 * Sem backend: ao enviar, monta uma mensagem formatada e abre o WhatsApp
 * da ConectaWeb já com o texto pronto. Página solta, sem link no menu —
 * o link é enviado manualmente pelo Luciano só para clientes confirmados.
 */

type ServiceRow = { id: number; nome: string; preco: string; desc: string }
type TestimonialRow = { id: number; nome: string; texto: string }

const inputClass =
  'w-full px-4 py-3 rounded-lg border border-line bg-paper text-ink text-sm focus-visible:outline-2 focus-visible:outline-accent'
const labelClass = 'block text-sm font-medium text-ink mb-1.5'
const optionalClass = 'text-muted font-normal'

function Eyebrow({ step, label }: { step: number; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.09em] uppercase text-accent-ink bg-accent-soft px-3 py-1.5 rounded-full mb-3.5">
      Etapa {step} de 8 · {label}
    </span>
  )
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-panel border border-line rounded-2xl shadow-soft p-6 md:p-7 mb-5">
      {children}
    </section>
  )
}

let rowId = 0
const nextId = () => ++rowId

export default function Briefing() {
  useEffect(() => {
    document.title = 'Briefing ConectaWeb'
  }, [])

  // Etapa 1
  const [negocio, setNegocio] = useState('')
  const [responsavel, setResponsavel] = useState('')
  const [segmento, setSegmento] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [email, setEmail] = useState('')

  // Etapa 2
  const [slogan, setSlogan] = useState('')
  const [sobre, setSobre] = useState('')
  const [diferenciais, setDiferenciais] = useState('')

  // Etapa 3
  const [services, setServices] = useState<ServiceRow[]>(() => [
    { id: nextId(), nome: '', preco: '', desc: '' },
    { id: nextId(), nome: '', preco: '', desc: '' },
  ])

  // Etapa 4
  const [endereco, setEndereco] = useState('')
  const [horario, setHorario] = useState('')

  // Etapa 5
  const [logo, setLogo] = useState('')
  const [fotos, setFotos] = useState('')
  const [cores, setCores] = useState('')

  // Etapa 6
  const [testimonials, setTestimonials] = useState<TestimonialRow[]>(() => [
    { id: nextId(), nome: '', texto: '' },
  ])

  // Etapa 7
  const [instagram, setInstagram] = useState('')
  const [facebook, setFacebook] = useState('')
  const [tiktok, setTiktok] = useState('')

  // Etapa 8
  const [dominioStatus, setDominioStatus] = useState('')
  const [dominioQual, setDominioQual] = useState('')
  const [emailStatus, setEmailStatus] = useState('')
  const [obs, setObs] = useState('')

  function addService() {
    setServices((rows) => [...rows, { id: nextId(), nome: '', preco: '', desc: '' }])
  }
  function removeService(id: number) {
    setServices((rows) => rows.filter((r) => r.id !== id))
  }
  function updateService(id: number, field: keyof ServiceRow, value: string) {
    setServices((rows) => rows.map((r) => (r.id === id ? { ...r, [field]: value } : r)))
  }

  function addTestimonial() {
    setTestimonials((rows) => [...rows, { id: nextId(), nome: '', texto: '' }])
  }
  function removeTestimonial(id: number) {
    setTestimonials((rows) => rows.filter((r) => r.id !== id))
  }
  function updateTestimonial(id: number, field: keyof TestimonialRow, value: string) {
    setTestimonials((rows) => rows.map((r) => (r.id === id ? { ...r, [field]: value } : r)))
  }

  function line(label: string, value: string) {
    return value ? `${label}: ${value}` : ''
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const serviceLines = services
      .map((s, i) => {
        if (!s.nome && !s.preco && !s.desc) return ''
        let out = `${i + 1}. ${s.nome || '(sem nome)'}`
        if (s.preco) out += ` — ${s.preco}`
        if (s.desc) out += `\n   ${s.desc}`
        return out
      })
      .filter(Boolean)

    const testimonialLines = testimonials
      .map((t) => {
        if (!t.nome && !t.texto) return ''
        return `"${t.texto || '(sem texto)'}" — ${t.nome || 'cliente'}`
      })
      .filter(Boolean)

    const blocks: string[] = [
      'Olá! Segue o briefing para a criação do meu site.',
      '',
      '*Dados do negócio*',
      line('Negócio', negocio),
      line('Responsável', responsavel),
      line('Segmento', segmento),
      line('WhatsApp', whatsapp),
      line('E-mail', email),
    ]

    const sobreBlock = [
      line('Slogan', slogan),
      sobre ? `Descrição: ${sobre}` : '',
      diferenciais ? `Diferenciais: ${diferenciais}` : '',
    ].filter(Boolean)
    if (sobreBlock.length) blocks.push('', '*Sobre o negócio*', ...sobreBlock)

    if (serviceLines.length) blocks.push('', '*Serviços/produtos*', ...serviceLines)

    const localBlock = [line('Endereço', endereco), horario ? `Horário: ${horario}` : ''].filter(Boolean)
    if (localBlock.length) blocks.push('', '*Localização e horário*', ...localBlock)

    const visualBlock = [line('Logo', logo), line('Fotos', fotos), line('Cores', cores)].filter(Boolean)
    if (visualBlock.length) blocks.push('', '*Identidade visual*', ...visualBlock)

    if (testimonialLines.length) blocks.push('', '*Depoimentos*', ...testimonialLines)

    const socialBlock = [line('Instagram', instagram), line('Facebook', facebook), line('TikTok', tiktok)].filter(
      Boolean,
    )
    if (socialBlock.length) blocks.push('', '*Redes sociais*', ...socialBlock)

    const domainLine =
      dominioStatus === 'Já tenho domínio próprio' && dominioQual
        ? `Domínio: ${dominioStatus} (${dominioQual})`
        : line('Domínio', dominioStatus)

    const techBlock = [domainLine, line('E-mail profissional', emailStatus)].filter(Boolean)
    if (techBlock.length) blocks.push('', '*Domínio e e-mail*', ...techBlock)

    if (obs) blocks.push('', '*Observações*', obs)

    trackWhatsAppClick()
    window.open(waLink(blocks.join('\n')), '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="bg-paper min-h-screen pb-28">
      <div className="container max-w-[720px] py-10 md:py-14">
        <header className="pb-7 mb-9 border-b border-line">
          <a href="/" className="inline-flex items-center gap-2.5" aria-label="ConectaWeb">
            <img src="/images/icon.svg" alt="" className="h-8 w-8" />
            <span className="font-serif font-semibold text-lg text-ink">
              Conecta<span className="text-accent">Web</span>
            </span>
          </a>
          <h1 className="font-serif font-semibold text-[1.7rem] md:text-4xl text-ink mt-5 mb-2.5 text-balance">
            Briefing para criação do seu site
          </h1>
          <p className="text-muted text-[0.98rem] max-w-[60ch]">
            Preencha com calma — quanto mais completo, mais rápido e mais fiel à sua marca fica o
            resultado. Leva uns 8 a 10 minutos. Ao final, tudo é enviado organizado para o{' '}
            <strong className="text-ink font-semibold">WhatsApp da ConectaWeb</strong>; fotos e
            arquivos (logo, imagens) você manda diretamente na conversa que abrir em seguida.
          </p>
        </header>

        <form onSubmit={handleSubmit}>
          <Card>
            <Eyebrow step={1} label="Sobre o negócio" />
            <h2 className="text-xl font-semibold text-ink mb-1.5">Quem é o cliente</h2>
            <p className="text-sm text-muted mb-5">
              Dados básicos para identificar o projeto e manter contato.
            </p>

            <div className="mb-4">
              <label className={labelClass}>Nome do negócio *</label>
              <input
                required
                className={inputClass}
                placeholder="Ex: Salão Bella Hair"
                value={negocio}
                onChange={(e) => setNegocio(e.target.value)}
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className={labelClass}>Nome do responsável *</label>
                <input
                  required
                  className={inputClass}
                  placeholder="Quem vamos chamar"
                  value={responsavel}
                  onChange={(e) => setResponsavel(e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass}>Segmento / ramo *</label>
                <input
                  required
                  className={inputClass}
                  placeholder="Ex: salão de beleza, clínica..."
                  value={segmento}
                  onChange={(e) => setSegmento(e.target.value)}
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>WhatsApp para contato *</label>
                <input
                  type="tel"
                  required
                  className={inputClass}
                  placeholder="(00) 00000-0000"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass}>
                  E-mail <span className={optionalClass}>(opcional)</span>
                </label>
                <input
                  type="email"
                  className={inputClass}
                  placeholder="nome@empresa.com.br"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </Card>

          <Card>
            <Eyebrow step={2} label="Conteúdo" />
            <h2 className="text-xl font-semibold text-ink mb-1.5">A história do negócio</h2>
            <p className="text-sm text-muted mb-5">
              Esse é o texto que vira a seção "Sobre" e a frase de destaque da home.
            </p>

            <div className="mb-4">
              <label className={labelClass}>
                Frase de efeito / slogan <span className={optionalClass}>(o destaque da home)</span>
              </label>
              <input
                className={inputClass}
                placeholder="Ex: Beleza que transforma sua semana"
                value={slogan}
                onChange={(e) => setSlogan(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className={labelClass}>Descrição do negócio</label>
              <textarea
                rows={3}
                className={`${inputClass} resize-y`}
                placeholder="Conte a história em poucas frases: desde quando existe, o que faz, para quem é..."
                value={sobre}
                onChange={(e) => setSobre(e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>
                Diferenciais <span className={optionalClass}>(o que destaca vocês da concorrência)</span>
              </label>
              <textarea
                rows={3}
                className={`${inputClass} resize-y`}
                placeholder="Ex: atendimento personalizado, produtos importados, 15 anos de experiência..."
                value={diferenciais}
                onChange={(e) => setDiferenciais(e.target.value)}
              />
            </div>
          </Card>

          <Card>
            <Eyebrow step={3} label="Serviços" />
            <h2 className="text-xl font-semibold text-ink mb-1.5">Serviços ou produtos</h2>
            <p className="text-sm text-muted mb-5">
              Um card por item — preço é opcional, mas ajuda o visitante a decidir.
            </p>

            {services.map((s, i) => (
              <div key={s.id} className="border border-dashed border-line rounded-xl p-4 pt-4 mb-3 relative">
                <button
                  type="button"
                  onClick={() => removeService(s.id)}
                  className="absolute top-2.5 right-2.5 text-xs text-muted hover:text-ink hover:bg-accent-soft px-2 py-1 rounded-md"
                >
                  Remover
                </button>
                <div className="mb-3">
                  <label className={labelClass}>Nome do serviço/produto {i + 1}</label>
                  <input
                    className={inputClass}
                    placeholder="Ex: Corte feminino"
                    value={s.nome}
                    onChange={(e) => updateService(s.id, 'nome', e.target.value)}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>
                      Preço <span className={optionalClass}>(opcional)</span>
                    </label>
                    <input
                      className={inputClass}
                      placeholder="Ex: a partir de R$ 80"
                      value={s.preco}
                      onChange={(e) => updateService(s.id, 'preco', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>
                      Descrição curta <span className={optionalClass}>(opcional)</span>
                    </label>
                    <input
                      className={inputClass}
                      placeholder="Ex: lavagem, corte e finalização"
                      value={s.desc}
                      onChange={(e) => updateService(s.id, 'desc', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addService}
              className="w-full border border-dashed border-line hover:border-accent hover:bg-accent-soft text-accent-ink text-sm font-medium py-2.5 rounded-xl"
            >
              + Adicionar serviço
            </button>
          </Card>

          <Card>
            <Eyebrow step={4} label="Localização" />
            <h2 className="text-xl font-semibold text-ink mb-1.5">Endereço e horário</h2>
            <p className="text-sm text-muted mb-5">
              Usado no mapa do site e na seção de contato. Deixe em branco se o atendimento for só
              online.
            </p>

            <div className="mb-4">
              <label className={labelClass}>
                Endereço completo <span className={optionalClass}>(para o mapa)</span>
              </label>
              <input
                className={inputClass}
                placeholder="Rua, número, bairro, cidade - UF"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Horário de funcionamento</label>
              <textarea
                rows={2}
                className={`${inputClass} resize-y`}
                placeholder="Ex: Seg a sex, 9h às 19h · Sáb, 9h às 13h"
                value={horario}
                onChange={(e) => setHorario(e.target.value)}
              />
            </div>
          </Card>

          <Card>
            <Eyebrow step={5} label="Identidade visual" />
            <h2 className="text-xl font-semibold text-ink mb-1.5">Logo, cores e fotos</h2>
            <p className="text-sm text-muted mb-5">
              Define o visual do site. Sem logo ou fotos prontas? Sem problema, a gente ajuda.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className={labelClass}>Logo</label>
                <select className={inputClass} value={logo} onChange={(e) => setLogo(e.target.value)}>
                  <option value="">Selecione...</option>
                  <option>Já tenho logo pronto (vou enviar o arquivo)</option>
                  <option>Preciso criar um logo</option>
                  <option>Não sei ainda</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Fotos do local / produtos / equipe</label>
                <select className={inputClass} value={fotos} onChange={(e) => setFotos(e.target.value)}>
                  <option value="">Selecione...</option>
                  <option>Já tenho fotos profissionais</option>
                  <option>Tenho fotos de celular, mas dá pra usar</option>
                  <option>Não tenho, preciso de ajuda</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className={labelClass}>
                Cores de preferência <span className={optionalClass}>(opcional)</span>
              </label>
              <input
                className={inputClass}
                placeholder="Ex: seguir as cores do logo, ou tons de verde e dourado"
                value={cores}
                onChange={(e) => setCores(e.target.value)}
              />
            </div>
            <p className="text-[0.82rem] text-accent-ink bg-accent-soft rounded-lg px-3.5 py-2.5">
              <strong>Fotos e arquivo do logo</strong> não têm como ir por este formulário — assim
              que enviar, manda tudo direto na conversa do WhatsApp que vai abrir.
            </p>
          </Card>

          <Card>
            <Eyebrow step={6} label="Depoimentos" />
            <h2 className="text-xl font-semibold text-ink mb-1.5">
              Depoimentos de clientes <span className={optionalClass}>(opcional)</span>
            </h2>
            <p className="text-sm text-muted mb-5">
              1 a 3 depoimentos reais já ajudam bastante a gerar confiança no site.
            </p>

            {testimonials.map((t, i) => (
              <div key={t.id} className="border border-dashed border-line rounded-xl p-4 pt-4 mb-3 relative">
                <button
                  type="button"
                  onClick={() => removeTestimonial(t.id)}
                  className="absolute top-2.5 right-2.5 text-xs text-muted hover:text-ink hover:bg-accent-soft px-2 py-1 rounded-md"
                >
                  Remover
                </button>
                <div className="mb-3">
                  <label className={labelClass}>Nome do cliente {i + 1}</label>
                  <input
                    className={inputClass}
                    placeholder="Ex: Fernanda M."
                    value={t.nome}
                    onChange={(e) => updateTestimonial(t.id, 'nome', e.target.value)}
                  />
                </div>
                <div>
                  <label className={labelClass}>O que ele(a) disse</label>
                  <textarea
                    rows={2}
                    className={`${inputClass} resize-y`}
                    placeholder="Ex: Atendimento maravilhoso, super recomendo!"
                    value={t.texto}
                    onChange={(e) => updateTestimonial(t.id, 'texto', e.target.value)}
                  />
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addTestimonial}
              className="w-full border border-dashed border-line hover:border-accent hover:bg-accent-soft text-accent-ink text-sm font-medium py-2.5 rounded-xl"
            >
              + Adicionar depoimento
            </button>
          </Card>

          <Card>
            <Eyebrow step={7} label="Redes e canais" />
            <h2 className="text-xl font-semibold text-ink mb-1.5">
              Redes sociais <span className={optionalClass}>(opcional)</span>
            </h2>
            <p className="text-sm text-muted mb-5">Links que vão aparecer no rodapé do site.</p>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className={labelClass}>Instagram</label>
                <input
                  className={inputClass}
                  placeholder="@usuario ou link"
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass}>Facebook</label>
                <input
                  className={inputClass}
                  placeholder="link da página"
                  value={facebook}
                  onChange={(e) => setFacebook(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className={labelClass}>TikTok</label>
              <input
                className={inputClass}
                placeholder="@usuario ou link"
                value={tiktok}
                onChange={(e) => setTiktok(e.target.value)}
              />
            </div>
          </Card>

          <Card>
            <Eyebrow step={8} label="Domínio e e-mail" />
            <h2 className="text-xl font-semibold text-ink mb-1.5">Domínio e e-mail profissional</h2>
            <p className="text-sm text-muted mb-5">
              Define se vamos registrar algo novo ou usar o que você já tem.
            </p>

            <div className="mb-4">
              <label className={labelClass}>
                Domínio <span className={optionalClass}>(o endereço do site, ex: seunegocio.com.br)</span>
              </label>
              <select
                className={inputClass}
                value={dominioStatus}
                onChange={(e) => setDominioStatus(e.target.value)}
              >
                <option value="">Selecione...</option>
                <option>Já tenho domínio próprio</option>
                <option>Preciso registrar um domínio</option>
                <option>Ainda não sei</option>
              </select>
            </div>
            {dominioStatus === 'Já tenho domínio próprio' && (
              <div className="mb-4">
                <label className={labelClass}>Qual é o domínio?</label>
                <input
                  className={inputClass}
                  placeholder="Ex: meunegocio.com.br"
                  value={dominioQual}
                  onChange={(e) => setDominioQual(e.target.value)}
                />
              </div>
            )}

            <div className="mb-4">
              <label className={labelClass}>E-mail profissional</label>
              <select
                className={inputClass}
                value={emailStatus}
                onChange={(e) => setEmailStatus(e.target.value)}
              >
                <option value="">Selecione...</option>
                <option>Já tenho e-mail profissional</option>
                <option>Preciso criar um e-mail profissional</option>
                <option>Não preciso de e-mail profissional</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>
                Observações finais <span className={optionalClass}>(opcional)</span>
              </label>
              <textarea
                rows={3}
                className={`${inputClass} resize-y`}
                placeholder="Qualquer outro detalhe importante para o projeto"
                value={obs}
                onChange={(e) => setObs(e.target.value)}
              />
            </div>
          </Card>

          <div className="fixed left-0 right-0 bottom-0 bg-panel border-t border-line py-3.5 px-5 flex justify-center z-20">
            <button
              type="submit"
              className="w-full max-w-[680px] inline-flex items-center justify-center gap-2.5 bg-whatsapp hover:brightness-105 text-white font-semibold text-base py-3.5 rounded-full transition-[filter]"
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm5.84 14.24c-.25.7-1.24 1.28-2.02 1.44-.55.11-1.26.2-3.65-.78-2.9-1.2-4.77-4.14-4.91-4.33-.14-.19-1.17-1.56-1.17-2.98 0-1.42.74-2.11 1-2.4.25-.28.55-.35.73-.35h.53c.17 0 .4-.03.62.48.25.6.85 2.02.92 2.17.07.15.11.32.02.51-.09.19-.14.31-.28.47-.14.16-.29.36-.41.48-.14.14-.28.29-.12.57.16.28.71 1.19 1.53 1.93 1.06.95 1.94 1.24 2.22 1.38.28.14.44.12.6-.07.16-.19.68-.8.87-1.07.18-.28.36-.23.6-.14.25.09 1.58.75 1.85.88.27.14.45.2.51.32.07.12.07.65-.18 1.34Z" />
              </svg>
              Enviar briefing pelo WhatsApp
            </button>
          </div>
        </form>

        <footer className="max-w-[680px] mx-auto mt-2 text-center text-muted text-[0.8rem]">
          ConectaWeb · conectawebbr.com.br
        </footer>
      </div>
    </div>
  )
}
