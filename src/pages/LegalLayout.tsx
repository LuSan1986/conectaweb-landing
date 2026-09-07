import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { company } from '../config/siteConfig'

export default function LegalLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-[120px] md:pt-[168px] pb-20 md:pb-28">
        <div className="container max-w-2xl">
          <Link to="/" className="text-sm font-medium text-accent-ink hover:underline">
            ← Voltar para o site
          </Link>
          <h1 className="font-serif font-semibold text-3xl md:text-4xl text-ink mt-6">{title}</h1>
          <p className="text-sm text-muted mt-2">
            {company.name} — última atualização: {new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long' })}
          </p>
          <div className="prose-legal mt-10 space-y-6 text-sm md:text-base text-ink/80 leading-relaxed">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
