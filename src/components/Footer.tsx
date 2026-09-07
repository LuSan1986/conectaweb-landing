import { Link } from 'react-router-dom'
import { company, navLinks, social, waLink, whatsappMessages } from '../config/siteConfig'
import { WhatsAppIcon, InstagramIcon, FacebookIcon, TikTokIcon, LinkedInIcon } from './icons'

const socialLinks = [
  { key: 'instagram', href: social.instagram, Icon: InstagramIcon, label: 'Instagram' },
  { key: 'facebook', href: social.facebook, Icon: FacebookIcon, label: 'Facebook' },
  { key: 'tiktok', href: social.tiktok, Icon: TikTokIcon, label: 'TikTok' },
  { key: 'linkedin', href: social.linkedin, Icon: LinkedInIcon, label: 'LinkedIn' },
].filter((s) => s.href)

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-paper/80">
      <div className="container py-16 grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/images/icon.svg" alt="" className="h-7 w-7" style={{ filter: 'brightness(0) invert(1)' }} />
            <span className="font-serif font-semibold text-lg text-paper">
              Conecta<span className="text-[#8fd6c1]">Web</span>
            </span>
          </div>
          <p className="text-sm max-w-xs leading-relaxed">
            Sites profissionais, modernos e pensados para transformar visitantes em clientes.
          </p>
          {socialLinks.length > 0 && (
            <div className="flex gap-3 mt-6">
              {socialLinks.map(({ key, href, Icon, label }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="h-9 w-9 flex items-center justify-center rounded-full border border-paper/20 hover:border-paper/50 hover:text-paper transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          )}
        </div>

        <div>
          <h3 className="text-paper font-semibold text-sm mb-4">Navegação</h3>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-paper transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-paper font-semibold text-sm mb-4">Serviços</h3>
          <ul className="space-y-2.5 text-sm">
            <li>Sites institucionais</li>
            <li>Landing pages</li>
            <li>Presença digital local</li>
            <li>Manutenção e evolução</li>
          </ul>
        </div>

        <div>
          <h3 className="text-paper font-semibold text-sm mb-4">Contato</h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href={waLink(whatsappMessages.default)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-paper transition-colors">
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="hover:text-paper transition-colors break-all">
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-paper/50">
          <p>© {year} {company.name}. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <Link to="/privacidade" className="hover:text-paper/80 transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/termos" className="hover:text-paper/80 transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
