# Prompts para desenvolver o Site Institucional Grupo Gordinho no Antigravity

> Como usar: cole o **Prompt 0 (Contexto Geral)** primeiro, em uma única mensagem, para o agente "aprender" o projeto inteiro. Depois vá colando os prompts de cada página, um de cada vez, revisando o resultado antes de pedir a próxima. Isso evita que o agente tente fazer tudo de uma vez e erre a estrutura.

---

## PROMPT 0 — Contexto Geral do Projeto (colar primeiro, sempre)

```
Vamos desenvolver o site institucional do "Grupo Gordinho", uma marca-mãe que abriga duas lojas físicas em Itajaí/SC:

1. GORDINHO CELULARES — assistência técnica de celulares/tablets e venda de acessórios. +10 anos de mercado, +250 mil atendimentos realizados, marca registrada no INPI, +20 mil seguidores no Instagram (@gordinhocelularoficial).

2. GORDINHO PERSONALIZADOS — venda de produtos personalizados (garrafas, canecas, adesivos, itens em madeira) para consumidor final, e também personalização em escala para empresas (envelopamento de veículos, fachadas, comunicação visual, revenda de produtos com marca própria).

IDENTIDADE VISUAL:
- Cores: verde vibrante (lime/verde-bandeira) como cor primária, preto como cor de apoio/contraste, amarelo como cor de destaque (usado em CTAs e badges).
- Mascote: personagem cartoon de um menino ("Gordinho"), boné verde e camisa amarela — usar como elemento de identidade visual recorrente (ex: ícone de seção, elemento decorativo, favicon), sem exagerar a ponto de infantilizar o site.
- Tom de voz: direto, confiável, "gente como a gente" — não é uma marca premium/sofisticada, é uma marca de bairro que virou referência regional. Evitar corporativês.
- Referência visual das fachadas: letreiro verde com estrutura preta, visual limpo e comercial.

ESTRUTURA DO SITE (6 páginas/seções):
1. Home — headline + 3 blocos de entrada (Assistência Técnica, Personalizados B2C, Personalização B2B)
2. Sobre Nós — história, missão, visão, valores, números
3. Contato — DUAS lojas físicas com endereços/contatos separados (não misturar como se fosse uma loja só)
4. Assistência Técnica & Acessórios — serviços de celular
5. Personalizados (B2C) — venda direta ao consumidor, com catálogo e "como funciona"
6. Personalização para Empresas (B2B) — formulário de orçamento personalizado (não é preço fechado)

STACK TÉCNICO:
- [DEFINA AQUI: ex. "Next.js 14 com Tailwind CSS" ou "HTML/CSS/JS estático" — se não tiver preferência, peça ao agente para sugerir e justificar antes de começar a codar]
- Site deve ser responsivo (mobile-first, já que boa parte do tráfego provavelmente vem do Instagram/celular)
- Deve ter SEO básico (meta tags, title/description por página, dados estruturados de LocalBusiness para as duas lojas)
- Botões de WhatsApp devem usar links diretos wa.me com número já preenchido
- Performance: imagens otimizadas/lazy load, já que teremos fotos de produtos e da loja

IMPORTANTE:
- As duas marcas (Celulares e Personalizados) devem ser claramente diferenciadas dentro do site, mas com uma identidade visual unificada como "Grupo Gordinho" guarda-chuva.
- Alguns dados ainda estão pendentes de confirmação com o cliente (horário de funcionamento, e-mail, lista completa de marcas atendidas). Onde eu não fornecer o dado, use um placeholder visível como [A CONFIRMAR] em vez de inventar informação.
- Não invente depoimentos de clientes, números ou avaliações que não te enviei.

Antes de começar a codar, me responda: qual stack você recomenda para este projeto e por quê? Aguarde minha confirmação antes de gerar código.
```

---

## PROMPT 1 — Setup do Projeto e Design System

```
Ótimo, vamos com [STACK CONFIRMADA]. Antes de construir as páginas, crie a base do projeto:

1. Estrutura de pastas do projeto (componentes, páginas/rotas, assets, estilos)
2. Um arquivo de design tokens/tema com:
   - Paleta de cores (verde primário, preto, amarelo de destaque, + tons neutros de apoio para texto/fundo)
   - Tipografia (sugira uma fonte sans-serif moderna e legível, gratuita via Google Fonts, que combine com uma marca popular/direta — não use fonte serifada/elegante demais)
   - Componentes base reutilizáveis: Header/Navbar, Footer, Button (variantes primária/secundária), Card, Section wrapper
3. Header com navegação para as 6 páginas/seções e um CTA de destaque ("Falar no WhatsApp")
4. Footer com: logo, links das redes sociais das duas marcas, endereços resumidos das duas lojas, copyright

Não crie o conteúdo das páginas ainda — só a base estrutural e o design system. Me mostre o resultado antes de seguir.
```

---

## PROMPT 2 — Página Home

```
Agora construa a Home. Conteúdo:

HEADLINE: "Gordinho Celulares & Personalizados"
SUB-HEADLINE: "Assistência técnica, acessórios e personalização de nível nacional, feita à mão em Itajaí/SC."
TEXTO DE APOIO: "Mais de 10 anos cuidando do seu celular. Agora também ajudando sua marca a aparecer — em garrafas, chaveiros, carros e fachadas."

3 BLOCOS DE ENTRADA (cards grandes, clicáveis, levando às respectivas páginas):

Bloco 1 — 📱 Assistência Técnica & Acessórios
"Troca de tela, bateria, conector, películas, capinhas, carregadores e muito mais. Atendimento presencial e delivery."
Botão: "Ver serviços" → /assistencia-tecnica

Bloco 2 — 🎁 Personalizados
"Garrafas, chaveiros e presentes personalizados para você ou para presentear. Compre pronto, com entrega para todo o Brasil."
Botão: "Comprar personalizados" → /personalizados

Bloco 3 — 🏢 Personalização para Empresas (B2B)
"Envelopamento de veículos, fachadas e personalizados em grande escala para quem quer revender ou fortalecer sua marca."
Botão: "Solicitar orçamento" → /empresas

Adicione também:
- Uma seção de "números" logo abaixo do hero, com: +10 anos de mercado / +250 mil atendimentos realizados / Marca registrada no INPI / +20 mil seguidores no Instagram (exibir como cards com números grandes em destaque, estilo "prova social")
- Uma seção final de CTA antes do footer, convidando para os dois WhatsApps (um para cada loja)

Use o mascote de forma sutil no hero (ex: ilustração ao lado do headline), sem poluir o layout.
```

---

## PROMPT 3 — Página Sobre Nós

```
Construa a página "Sobre Nós" com o seguinte conteúdo (mantenha o texto essencialmente como está, apenas adapte formatação/quebras para leitura web):

NOSSA HISTÓRIA:
"A Gordinho Celulares nasceu em Itajaí/SC com um propósito simples: oferecer assistência técnica de confiança e produtos de qualidade para quem depende do celular no dia a dia. Ao longo de mais de 10 anos, já foram mais de 250 mil atendimentos realizados, o que nos tornou uma das maiores e mais completas lojas do segmento em Santa Catarina — com marca registrada no INPI.

Com o tempo, identificamos outra oportunidade: usar a mesma estrutura, agilidade e capricho que aplicamos em celulares para atender quem precisa personalizar produtos — desde um presente único até a identidade visual de uma frota inteira de veículos. Assim nasceu a Gordinho Personalizados, braço da empresa dedicado a brindes, personalizados e comunicação visual para pessoas físicas e empresas em todo o Brasil.

Hoje, atuamos em três frentes complementares: assistência técnica e acessórios para celular, venda de personalizados para o consumidor final, e personalização em escala para empresas e revendedores."

MISSÃO: "Oferecer soluções completas em tecnologia e personalização — unindo assistência técnica de confiança, produtos de qualidade e personalização criativa — com agilidade, transparência e um atendimento que faz a diferença, para pessoas e empresas em todo o Brasil."

VISÃO: "Ser reconhecida como a referência nacional em personalização e assistência técnica, expandindo de Santa Catarina para todo o país, mantendo o mesmo padrão de qualidade e proximidade que construímos com cada cliente ao longo de mais de 10 anos."

VALORES (exibir como grid de 5 cards com ícone):
- Confiança — mais de 250 mil atendimentos construídos com transparência e compromisso.
- Agilidade — resolver o problema do cliente rápido, sem enrolação.
- Qualidade — peças, materiais e acabamentos que duram.
- Atendimento humanizado — cada cliente é tratado com atenção, não como número.
- Inovação constante — sempre buscando novos produtos, técnicas e formas de atender melhor.

NÚMEROS QUE NOS REPRESENTAM (grid de destaque, pode reaproveitar componente da Home):
- +10 anos de mercado
- +250 mil atendimentos realizados
- Marca registrada no INPI®
- +20 mil seguidores só na loja de celulares
- Atendimento presencial, delivery e nacional (via loja online)

Layout sugerido: Nossa História em texto corrido com boa respiração (max-width limitada para leitura), Missão/Visão lado a lado em dois cards, Valores em grid, Números como faixa de destaque com fundo verde/preto contrastante.
```

---

## PROMPT 4 — Página Contato

```
Construa a página de Contato. Como são DUAS lojas físicas distintas, estruture em duas colunas lado a lado (ou abas no mobile) — nunca misture os dois contatos como se fossem uma loja só.

COLUNA/ABA 1 — 📱 Loja Gordinho Celulares
Endereço: Rua Cônego Thomaz Fontes, 417 — Centro, Itajaí — SC, CEP 88301-100
Telefone/WhatsApp: (47) 99697-0405 (botão com link wa.me/5547996970405)
Instagram: @gordinhocelularoficial (link https://www.instagram.com/gordinhocelularoficial/)
Incluir um mapa embedado (Google Maps) com o endereço

COLUNA/ABA 2 — 🎁 Gordinho Personalizados
Endereço: Rua Doutor José Bonifácio Malburg, 315 — Centro, Itajaí — SC, CEP 88301-350
WhatsApp: botão com link https://wa.me/message/Y65VYC3IEKBXA1
Instagram: @gordinhopersonalizadosoficial (link https://www.instagram.com/gordinhopersonalizadosoficial/)
Incluir um mapa embedado (Google Maps) com o endereço

Abaixo das duas colunas, adicionar:
- Horário de funcionamento: [A CONFIRMAR — placeholder visível, ex. "Consulte nosso horário no WhatsApp"]
- E-mail: [A CONFIRMAR — se não houver e-mail, omitir esse campo do layout em vez de deixar vazio]
- Outras redes do grupo: TikTok @ogordinhocelular, Facebook /gordinhocelularoficial, Threads @gordinhocelularoficial (exibir como ícones/links)

Adicione dados estruturados (schema.org LocalBusiness) para as duas lojas, para melhorar SEO local.
```

---

## PROMPT 5 — Página Assistência Técnica & Acessórios

```
Construa a página "Assistência Técnica & Acessórios".

TÍTULO: "Assistência técnica de confiança, do jeito certo."

TEXTO INTRO: "Com mais de 10 anos de experiência, a Gordinho Celulares é especialista em manutenção de smartphones e tablets de todas as marcas. Cuidamos do seu aparelho com agilidade, transparência no orçamento e peças de qualidade — e se você não puder vir até a loja, levamos o atendimento até você com nosso serviço de delivery."

SERVIÇOS (exibir como grid de cards com ícone):
- Troca de tela
- Troca de bateria
- Troca de conector de carga
- Instalação de película
- Capinhas e cases
- Carregadores e cabos
- Fones de ouvido e acessórios em geral

DIFERENCIAIS (exibir como lista com check/ícone):
✅ Qualidade
✅ Agilidade
✅ Preço justo
✅ Atendimento presencial e delivery
✅ +10 anos de mercado

Adicionar um CTA forte no fim da página: "Solicite seu orçamento agora" com botão para o WhatsApp da loja de Celulares: wa.me/5547996970405

Deixe um comentário no código (não visível ao usuário) marcando onde entrará futuramente a lista de marcas atendidas e a lista completa de serviços técnicos, que ainda estão pendentes de confirmação com o cliente — para eu conseguir localizar e completar depois facilmente.
```

---

## PROMPT 6 — Página Personalizados (B2C)

```
Construa a página "Personalizados" (venda direta ao consumidor final).

TÍTULO: "Personalizados que carregam a sua marca, a sua história ou o seu presente."

TEXTO INTRO: "Trabalhamos com personalização de produtos do dia a dia para quem quer presentear com algo único ou simplesmente ter algo só seu. Garrafas personalizadas, chaveiros e outros itens são produzidos com capricho e entregues para todo o Brasil."

TÉCNICAS QUE UTILIZAMOS (grid de 6 cards, um por técnica, com ícone):
- Gravação a Laser (madeira, vidro, metal, canecas)
- DTF (transfer têxtil — camisetas, bonés, tecidos em geral)
- Sublimação (canecas, garrafas, objetos diversos)
- Adesivos (folhas de adesivo personalizado, resinado)
- Projetos 3D
- Gráfica Rápida

CATEGORIAS DE PRODUTO (grid de cards com espaço para imagem — usar placeholder de imagem por enquanto):
- Garrafas térmicas personalizadas com nome
- Canecas com gravação a laser
- Adesivos personalizados (avulsos ou em folha)
- Objetos com sublimação (presentes, decoração)
- Itens em madeira gravados (violões, placas de dedicatória)

COMO FUNCIONA (exibir como stepper numerado 1→4):
1. Escolha o produto e a técnica de personalização
2. Envie sua arte, foto ou texto (ou peça ajuda da nossa equipe de criação)
3. Aprovamos a arte com você antes da produção
4. Produzimos e enviamos para todo o Brasil (ou disponibilizamos para retirada na loja em Itajaí)

CTA final: botão de WhatsApp da Gordinho Personalizados: https://wa.me/message/Y65VYC3IEKBXA1

Observação: esta página ainda é institucional/vitrine (não é loja com carrinho de compras — isso vem em uma segunda etapa do projeto, como e-commerce separado). Por enquanto o objetivo é apresentar bem o catálogo e direcionar para o WhatsApp.
```

---

## PROMPT 7 — Página Personalização para Empresas (B2B)

```
Construa a página "Personalização para Empresas" (B2B/revenda).

TÍTULO: "Personalização em escala para quem vive de marca."

TEXTO INTRO: "Atendemos empresários, revendedores e empresas que precisam de personalização em maior volume ou complexidade: envelopamento de veículos, fachadas comerciais e produtos personalizados para revenda. Se você quer fortalecer a identidade visual do seu negócio ou está montando sua própria operação de personalizados, temos a estrutura para produzir com qualidade e prazo."

O QUE FAZEMOS (grid de cards):
- Envelopamento de carros e frotas
- Fachadas e comunicação visual (placas de sinalização, letreiros)
- Adesivagem em geral (vitrines, veículos, produtos)
- Material personalizado para campanhas
- Personalizados para revenda (produção sob demanda para quem revende ao cliente final)

PARA QUEM É (lista com ícone):
- Empresas que querem renovar sua identidade visual (fachada, frota)
- Empreendedores que querem revender produtos personalizados sob a própria marca
- Distribuidores e lojistas em busca de fornecedor de personalizados em escala nacional

COMO FUNCIONA:
Texto de contexto: "Como cada projeto de envelopamento/fachada tem medidas, materiais e complexidade diferentes, não trabalhamos com preço fechado de prateleira para este serviço — o orçamento é personalizado."

Stepper numerado 1→4:
1. Preencha o formulário com o tipo de projeto (veículo, fachada, revenda de produtos)
2. Anexe fotos, medidas ou referências, se tiver
3. Nossa equipe entra em contato (WhatsApp ou telefone) com uma proposta
4. Aprovado o orçamento, iniciamos a produção

FORMULÁRIO DE ORÇAMENTO (construir com os campos):
- Nome
- Empresa (opcional)
- Telefone/WhatsApp
- Tipo de projeto (select: Envelopamento de veículo / Fachada ou sinalização / Revenda de produtos / Outro)
- Descrição do projeto (textarea)
- Upload de fotos/referências (opcional, múltiplos arquivos)
- Botão "Enviar solicitação"

Ao lado ou abaixo do formulário, incluir também botão "Falar direto no WhatsApp" como alternativa para quem preferir não preencher formulário.

Sobre o envio do formulário: [defina com o agente a solução técnica — ex. enviar por e-mail via serviço tipo Formspree/Resend, ou integrar com WhatsApp Business API se disponível — como o e-mail do cliente ainda está pendente de confirmação, use um placeholder de destino e me avise que isso precisa ser configurado antes de publicar].
```

---

## PROMPT 8 — Revisão Final (responsividade, SEO, performance)

```
Faça uma revisão geral do site com foco em:

1. Responsividade — teste mentalmente em mobile (360px), tablet (768px) e desktop (1440px). Ajuste qualquer grid/seção que quebre mal no mobile, priorizando a experiência mobile já que grande parte do tráfego vem do Instagram.
2. SEO básico — confira se cada página tem: title único, meta description única, heading H1 único e hierarquia de headings coerente (H1 > H2 > H3).
3. Acessibilidade básica — alt text em todas as imagens, contraste de texto sobre os fundos verde/preto/amarelo dentro do padrão WCAG AA, links e botões com foco visível.
4. Performance — imagens com lazy loading, sem bibliotecas pesadas desnecessárias.
5. Consistência visual — confira se as cores, tipografia e espaçamentos estão consistentes entre todas as páginas (mesmo header/footer, mesmo estilo de card, mesmo estilo de botão).

Me traga um resumo do que foi ajustado e uma lista do que ainda está com dado placeholder [A CONFIRMAR] espalhado pelo site, para eu conferir com o cliente antes de publicar.
```

---

## Observações para você (não são prompts, são notas de projeto)

- **Defina a stack antes de tudo.** Se você já sabe que quer Next.js/React (bom para depois evoluir para o e-commerce dos Personalizados na mesma base de código) ou prefere algo mais simples/estático, deixe isso decidido no Prompt 0 — isso evita retrabalho quando formos para a parte de e-commerce.
- **Sequência sugerida:** Prompt 0 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8, sempre revisando antes de avançar. Se o agente "alucinar" algum dado, corrija na hora — não deixe acumular.
- **Pendências que vão virar placeholders no site:** horário de funcionamento, e-mail, lista de marcas atendidas, lista completa de serviços técnicos, se chaveiros são linha própria. Quando você confirmar isso com o cliente, me avisa que eu já ajusto o documento institucional e te passo o prompt de correção pontual.
- **Sobre o e-commerce dos Personalizados:** isso deve ficar como uma etapa separada (provavelmente uma seção `/loja` com carrinho, ou até um subdomínio/projeto próprio, dependendo da stack escolhida). Não precisa resolver isso agora — quando terminarmos o institucional, seguimos para os prompts de e-commerce.
