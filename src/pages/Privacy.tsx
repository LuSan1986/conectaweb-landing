import { company } from '../config/siteConfig'
import LegalLayout from './LegalLayout'

export default function Privacy() {
  return (
    <LegalLayout title="Política de Privacidade">
      <section>
        <h2 className="font-semibold text-ink text-lg mb-2">1. Quem somos</h2>
        <p>
          Este site é operado por {company.name}, empresa de criação de sites profissionais. Esta
          política explica como tratamos as informações de quem visita e entra em contato pelo
          site, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-ink text-lg mb-2">2. Quais dados coletamos</h2>
        <p>
          Não utilizamos formulários que armazenam dados em servidor próprio. Ao preencher o
          formulário de contato ou clicar em um botão de WhatsApp deste site, os dados informados
          (nome, empresa, segmento, WhatsApp e mensagem) são usados apenas para montar uma
          mensagem que você mesmo envia através do seu WhatsApp — ou seja, essas informações vão
          diretamente para a conversa entre você e a {company.name}, e não passam por um banco de
          dados nosso.
        </p>
        <p className="mt-3">
          [ Caso o site passe a utilizar formulários com armazenamento em servidor, cookies de
          análise (como Google Analytics) ou outras formas de coleta, esta seção deve ser
          atualizada para descrever exatamente quais dados são coletados, por quanto tempo são
          mantidos e com quem são compartilhados. ]
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-ink text-lg mb-2">3. Como usamos as informações</h2>
        <p>
          As informações que você compartilha ao entrar em contato são usadas exclusivamente para
          responder sua mensagem, entender as necessidades do seu negócio e, se for o caso,
          elaborar uma proposta comercial.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-ink text-lg mb-2">4. Compartilhamento com terceiros</h2>
        <p>
          Não vendemos nem compartilhamos suas informações de contato com terceiros para fins de
          marketing.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-ink text-lg mb-2">5. Seus direitos</h2>
        <p>
          Você pode, a qualquer momento, solicitar informações sobre eventuais dados que tenhamos
          sobre você, pedir a correção ou exclusão dessas informações, entrando em contato pelo
          e-mail <a href={`mailto:${company.email}`} className="text-accent-ink font-medium hover:underline">{company.email}</a>.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-ink text-lg mb-2">6. Contato</h2>
        <p>
          Dúvidas sobre esta política podem ser enviadas para{' '}
          <a href={`mailto:${company.email}`} className="text-accent-ink font-medium hover:underline">{company.email}</a>.
        </p>
      </section>
    </LegalLayout>
  )
}
