import { company } from '../config/siteConfig'
import LegalLayout from './LegalLayout'

export default function Terms() {
  return (
    <LegalLayout title="Termos de Uso">
      <section>
        <h2 className="font-semibold text-ink text-lg mb-2">1. Aceitação dos termos</h2>
        <p>
          Ao acessar e utilizar este site, você concorda com os termos descritos abaixo. Se não
          concordar, recomendamos não utilizar o site.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-ink text-lg mb-2">2. Sobre o serviço</h2>
        <p>
          Este site apresenta o serviço de criação de sites profissionais da {company.name}. As
          informações aqui contidas têm caráter comercial e informativo. Preços, prazos e escopo de
          cada projeto são definidos individualmente, mediante proposta comercial.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-ink text-lg mb-2">3. Propriedade intelectual</h2>
        <p>
          Textos, imagens, identidade visual e demais conteúdos deste site pertencem à{' '}
          {company.name} ou são utilizados sob licença, não podendo ser reproduzidos sem
          autorização prévia.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-ink text-lg mb-2">4. Portfólio e exemplos</h2>
        <p>
          Os projetos exibidos na seção de portfólio representam trabalhos reais ou modelos de
          demonstração, conforme indicado em cada item. Itens marcados como "em breve" ainda não
          foram desenvolvidos e servem apenas para ilustrar os segmentos atendidos.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-ink text-lg mb-2">5. Limitação de responsabilidade</h2>
        <p>
          Fazemos o possível para manter as informações deste site atualizadas e corretas, mas não
          garantimos resultados específicos de posicionamento em buscadores ou volume de contatos,
          já que esses fatores dependem de diversas variáveis externas.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-ink text-lg mb-2">6. Alterações</h2>
        <p>
          Estes termos podem ser atualizados periodicamente. Recomendamos revisar esta página de
          tempos em tempos.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-ink text-lg mb-2">7. Contato</h2>
        <p>
          Dúvidas sobre estes termos podem ser enviadas para{' '}
          <a href={`mailto:${company.email}`} className="text-accent-ink font-medium hover:underline">{company.email}</a>.
        </p>
      </section>
    </LegalLayout>
  )
}
