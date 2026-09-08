# Handoff — Projeto ConectaWeb

Última atualização: 2026-09-07 (v2 — Google Ads adicionado)

Este arquivo resume o estado atual do projeto ConectaWeb (site + automação de atendimento) para
continuar o trabalho em outra conversa com o Claude, sem perder o contexto. Cole este arquivo (ou
peça para o Claude ler `handoff-chat.md` na raiz do projeto) no início de uma nova conversa.

## O que é o projeto

ConectaWeb é o serviço de criação de sites de Luciano (autônomo, também analista fiscal na Aços
Vital/Aços Uberaba) para pequenos negócios (salões, clínicas, autônomos, comércio local). O site
institucional da própria ConectaWeb está no ar e serve como vitrine + canal de captação de leads.

## Links importantes

- Site em produção: https://conectawebbr.com.br
- Formulário de briefing (para clientes já confirmados): https://conectawebbr.com.br/briefing
- Repositório GitHub: `conectaweb-landing` (conta GitHub de Luciano)
- Projeto na Vercel: `lusan1986s-projects/conectaweb-landing` (deploy automático a cada `git push`
  na branch `main`)
- Domínio registrado na Hostinger (`conectawebbr.com.br`), DNS apontando para a Vercel (registro A
  em `@` e CNAME em `www`, conforme exigido pela Vercel)
- E-mail profissional `contato@conectawebbr.com.br` — confirmado funcionando (Hostinger)
- Página de acompanhamento interno (artefato Claude, uso pessoal do Luciano):
  "Fluxo de Clientes ConectaWeb" — checklist do processo + progresso de cada cliente em andamento
  (salvo no navegador dele via localStorage)

## Stack técnica

React + TypeScript + Vite + Tailwind CSS + React Router (`BrowserRouter`). Sem backend — todo
formulário funciona abrindo o WhatsApp (`wa.me`) com uma mensagem pré-formatada. Deploy: GitHub →
Vercel (build automático do Vite, com `vercel.json` fazendo o rewrite de SPA para as rotas
funcionarem em produção).

Arquivo central de conteúdo: `src/config/siteConfig.ts` — dados da empresa, portfólio, depoimentos,
FAQ, oferta, etc. A maior parte dos textos do site vem daqui.

Páginas (`src/pages/`): `Landing.tsx` (home), `Privacy.tsx`, `Terms.tsx`, `Briefing.tsx` (formulário
de 8 etapas, rota `/briefing`, sem link no menu — só quem tem o link acessa).

## Fluxo de atendimento (já funcionando, sem custo)

1. Visitante clica no botão de WhatsApp do site → mensagem padrão é enviada.
2. **Mensagem de saudação** do WhatsApp Business (recurso nativo, configurado no celular de
   Luciano) responde automaticamente, na hora, agradecendo o interesse e mandando o link de
   `conectawebbr.com.br/briefing`. Dispara só na primeira mensagem de cada contato (ou após 14 dias
   sem conversa).
3. Cliente preenche o formulário de briefing (dados do negócio, serviços, fotos/logo, depoimentos,
   redes sociais, domínio/e-mail, etc.) e ao enviar abre o WhatsApp com tudo formatado.
4. Luciano monta um **rascunho do site** e publica num link temporário e gratuito (ex:
   `nomedocliente.vercel.app`), **antes** de gastar com domínio.
5. Cliente aprova (ou pede ajustes no rascunho).
6. Só depois da aprovação: domínio é registrado (sempre no CPF/CNPJ do cliente, incluso no valor do
   projeto) e conectado à Vercel — mesmo processo já validado no site da própria ConectaWeb.

Esse processo de 6 etapas está documentado na página "Fluxo de Clientes ConectaWeb" (artefato
Claude), que também serve para acompanhar o andamento de cada cliente.

## Google Ads / Marketing

- Foi criada uma conta nova e dedicada no Google Ads só para a ConectaWeb, separada da conta/MCC do
  GetDashia (que fica em outra conta, "MCC de Automações Luciano" / 453-482-8300).
- Conta: **ConectaWeb**, ID 258-841-7691, e-mail lucianosantana48@gmail.com. Forma de pagamento:
  cartão Santander, validado, modo pós-pagamento. Sem forma de pagamento alternativa cadastrada
  (opcional, não bloqueia nada).
- Campanha ativa: **"ConectaWeb - Pesquisa - Brasil"** — tipo Pesquisa, rede só Google Pesquisa
  (sem Display/parceiros), local Brasil, idioma Português, orçamento R$ 10,00/dia, IA Max
  desativada (sem personalização automática de texto nem expansão de URL).
- Meta da campanha: **"Cliques de saída"** — usada como proxy do clique no botão do WhatsApp, já
  que o WhatsApp é o único link externo (wa.me) do site. Estratégia de lances: Maximizar
  conversões.
- Grupo de anúncios "Criação de Site" com 8 palavras-chave (frase, tema criação/desenvolvimento de
  site), 1 anúncio responsivo de pesquisa com 8 títulos, 4 descrições e 4 frases de destaque
  (Domínio Incluso, Suporte pelo WhatsApp, Entrega em 5 a 10 Dias, Design Personalizado).
- A tag do Google (gtag.js, ID **AW-18437040361**) foi adicionada no `<head>` do `index.html`
  (script inline, cobre o site inteiro por ser SPA) e confirmada no ar em produção — é o que
  permite o Google Ads medir os cliques de saída como conversão.
- Pendências de marketing: acompanhar métricas depois de alguns dias (cliques, custo, conversões de
  saída) e ajustar palavras-chave/orçamento conforme performance. Avaliar se "Cliques de saída"
  está sendo uma medida precisa o suficiente do interesse real, ou se vale configurar um evento de
  conversão mais específico (só o clique no botão do WhatsApp, via gtag customizado) caso o site
  passe a ter outros links externos que "sujem" essa métrica.

## Decisões de negócio já tomadas

- Registro de domínio: incluso no valor do projeto, sempre em nome do cliente.
- Pós-entrega: 30 dias de pequenos ajustes de texto/imagem inclusos; depois disso, orçado à parte.
- Prazo médio de entrega informado no site: 5 a 10 dias úteis.
- Preço do site: não divulgado publicamente ainda — FAQ direciona para "fale conosco".

## Estado do conteúdo do site

- FAQ: todas as respostas preenchidas (não há mais placeholders/instruções internas visíveis).
- Depoimentos: 3 exemplos ilustrativos (marcados com a etiqueta "Ilustrativo" e aviso abaixo),
  ainda **não são depoimentos reais** — trocar assim que houver avaliações de clientes de verdade.
- Portfólio: 1 projeto real (salão de beleza) + 5 categorias marcadas como "Em breve"
  (`placeholder: true` em `portfolioProjects`, no `siteConfig.ts`). Luciano vai substituindo os
  placeholders por projetos reais conforme for entregando para clientes — quando tiver um pronto
  (link publicado + imagem), atualizar esse array.
- Redes sociais (`social` em `siteConfig.ts`): ainda vazias (instagram/facebook/tiktok/linkedin).
  Um campo vazio simplesmente não aparece no rodapé — preencher quando existirem perfis reais.

## Como aplicar mudanças no projeto (fluxo usado até aqui)

Luciano não tem o ambiente de desenvolvimento rodando neste chat (Claude aqui é uma sessão em
nuvem, sem acesso direto ao computador dele). O fluxo que tem funcionado:

1. Claude (nesta conversa/cloud) prepara o arquivo alterado.
2. Luciano abre o **VS Code** na pasta do projeto:
   `C:\Users\Jéssica Cristina\Downloads\Claude outputs\conectaweb-landing-source\conectaweb-landing`
3. Abre um terminal integrado (**Terminal → New Terminal**) e digita `claude` para entrar no
   **Claude Code** (CLI local, sessão separada — pode pedir `/login` de novo se o token expirar).
4. Cola um prompt pedindo para o Claude Code aplicar a mudança (substituir arquivo(s) por um
   conteúdo colado, ou extrair um zip) e rodar:git add .
git commit -m "<mensagem>"
git push5. A Vercel publica automaticamente em menos de um minuto após o push.

Observação: `git push` precisa ser rodado num PowerShell **normal** (não "Administrador"), senão o
fluxo de login via navegador trava sem mostrar erro.

## Pendências / próximos passos possíveis

- Ir substituindo os projetos placeholder do portfólio por trabalhos reais conforme forem
  entregues.
- Definir e talvez divulgar uma faixa de preço (hoje é só "fale conosco").
- Preencher redes sociais reais quando existirem.
- Considerar depoimentos reais assim que os primeiros clientes aprovarem os sites.
- (Avaliado e descartado por ora) Automação via WhatsApp Business API/Cloud API: possível
  tecnicamente (existe até um modo "Coexistência" que mantém o app normal funcionando junto), mas
  exige backend, verificação de negócio na Meta e passa a cobrar por mensagem — não compensa para
  o volume atual. A "Mensagem de saudação" nativa já resolve a necessidade.

## Contexto pessoal (para tom/estilo das respostas)

Luciano é analista fiscal/tributário com 10+ anos de experiência, também mexe com Python,
automação, Power BI e SQL no trabalho fixo. Prefere respostas diretas e objetivas, prioriza ação a
discussões longas de planejamento.
