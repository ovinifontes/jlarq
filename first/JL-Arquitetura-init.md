# JL Arquitetura — Brief de Inicialização (Claude Code / Cursor)

> Cole o bloco **"PROMPT DE KICKOFF"** como sua primeira mensagem no Claude Code.
> Crie o arquivo **`CLAUDE.md`** na raiz do projeto com o conteúdo da seção correspondente.
> O resto (mapa de assets, checklist do que pedir pro cliente) é seu guia operacional.

---

## 0. Contexto estratégico (leia antes de tudo)

A JL evoluiu de "arquitetura corporativa generalista" para **escritório especialista em arquitetura para instituições financeiras e cooperativas** (Sicredi, Sicoob, Unicred, Unimed, OCB, Daycoval). O site atual (2021) NÃO reflete isso — ainda abre com "todos os projetos para sua obra".

**O novo site lidera com o nicho.** Headline na direção de: *"Arquitetura para o cooperativismo financeiro brasileiro."* Prova social (logos de clientes) na frente. Projetos Sicredi como hero. João Luiz como autoridade.

Eixo conceitual: **integração** (arquitetura + engenharia + consultoria numa estrutura técnica única) — espelha o próprio cooperativismo ("construir algo maior do que sozinho").

---

## PROMPT DE KICKOFF (cole no Claude Code)

```
Você é o design lead + dev de um estúdio premium. Vamos construir o novo site
institucional da JL Arquitetura e Engenharia — um escritório com 20+ anos
especializado em projetos para instituições financeiras e cooperativas
(Sicredi, Sicoob, Unicred, Unimed, OCB). É um one-pager longo, scroll-driven,
nível "estúdio internacional de arquitetura".

Stack:
- Next.js 15 (App Router) + TypeScript + Tailwind CSS + shadcn/ui
- Lenis (smooth scroll) + GSAP + ScrollTrigger (coreografia de scroll)
- Deploy alvo: Vercel (preview)

Skills a usar nesta ordem: frontend-design, copywriting, next-best-practices,
ui-ux-pro-max.

Antes de codar:
1. Leia o CLAUDE.md inteiro (tokens, estrutura, conteúdo real, copy).
2. Faça um plano de design curto (paleta, tipos, layout em ASCII wireframe,
   elemento-assinatura) e critique contra o brief: se algo parecer template
   genérico de IA, revise e me diga o que mudou.
3. Só então scaffold do projeto e build seção por seção.

Depois de cada seção construída, tire screenshot via Playwright/Chrome DevTools
MCP, compare com a direção de arte e auto-corrija ANTES de pedir minha review.

Comece pelo plano de design. Não escreva código ainda.
```

---

## CLAUDE.md (criar na raiz do projeto)

```markdown
# JL Arquitetura — Site Institucional

## O que é
One-pager premium, scroll-driven, para a JL Arquitetura e Engenharia.
Posicionamento: ESPECIALISTA em arquitetura para instituições financeiras e
cooperativas do Brasil. 20+ anos. Lidera com o nicho, não com "fazemos tudo".

## Stack
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS + shadcn/ui
- Lenis + GSAP + ScrollTrigger
- Fontes via next/font: Fraunces (display), Geist (corpo), IBM Plex Mono (dados)

## Conceito / Assinatura
Eixo = INTEGRAÇÃO (arquitetura + engenharia + consultoria numa estrutura única).
Assinatura visual = LINHAS TÉCNICAS DE PRANCHA (cotas, dimensões, grid) que se
desenham sobre as fotos reais das obras no scroll (efeito DrawSVG com GSAP).
A foto da obra é a estrela; o traço técnico é a personalidade. Sobriedade total
fora da assinatura.

## Design Tokens
:root {
  --ink:       #1A1D1A;  /* texto / fundos escuros */
  --paper:     #F4F2EC;  /* base clara, calcário/papel técnico */
  --stone:     #C9C5BA;  /* divisores, legendas, estados secundários */
  --pine:      #1E3A2F;  /* acento — CTA e detalhes, uso parcimonioso */
  --blueprint: #2E5E6E;  /* EXCLUSIVO das linhas de cota / dados técnicos */
}
- Sem border-radius exagerado. Cantos retos ou 2px no máximo.
- Muito respiro. Grid editorial. Fotos full-bleed.
- Tipo display (Fraunces) em tamanhos grandes, peso variável (opsz alto).
- Dados, números e legendas SEMPRE em IBM Plex Mono uppercase tracking largo.

## Estrutura das seções (ordem)
1. HERO — vídeo real da JL em loop mudo (ver asset map). Headline revela no load.
   No scroll: parallax leve do vídeo + linhas de cota se desenham por cima.
   CTA: "Conversar com a JL".
2. TESE — statement pinned sobre integração arq+eng+consultoria (manifesto curto).
3. NÚMEROS — count-up no scroll: 20+ anos, 13 estados, projetos concluídos,
   m² executados. (CONFIRMAR números atualizados com o cliente — ver checklist.)
4. ESPECIALIZAÇÃO — o nicho explícito: instituições financeiras & cooperativas.
   Setores atendidos. Esta seção é o diferencial — destaque.
5. PROJETOS — cases full-bleed com overlay de linha técnica. Flagship primeiro:
   Sede Administrativa Sicredi Centro Sul (PR/SC/RJ). Depois Sicredi Sinop,
   Sicredi Canarana, Sede Celeiro do MT, Agência Agro Lucas do Rio Verde.
6. PROCESSO — sequência real (aqui marcadores numerados 01–04 SÃO justificados):
   01 Viabilidade → 02 Projeto integrado → 03 Compatibilização → 04 Acompanhamento de obra.
7. CLIENTES — logo wall com os logos reais (Sicredi, Sicoob, Unicred, Unimed,
   OCB, Daycoval, Scania, Senac, Gazin, Unimed, etc.).
8. AUTORIDADE — João Luiz Borges Alves, CEO e responsável técnico (CAU A39962-5).
   Foto + bio de fundador. (Pedir foto/bio atualizada do time — ver checklist.)
9. CTA / CONTATO — orçamento. WhatsApp, telefone, e-mail, endereço, redes.

## Conteúdo real (usar literalmente — NÃO inventar projeto/cliente)
- Fundador: João Luiz Borges Alves — CEO e responsável técnico — CAU A39962-5.
- WhatsApp: +55 65 99962-2276  | Tel: (65) 3057-8498
- E-mail: atendimento@jlarquitetura.com
- Endereço: Rua 24 de Outubro, 413 — Centro Norte, Cuiabá-MT, 78005-330
- Instagram: @sigajlarq | Facebook: /sigajlarq | LinkedIn: /in/sigajlarq
- Serviços: Projeto Arquitetônico, Estrutural, Elétrico, Hidrossanitário,
  Sustentáveis, Acompanhamento de Obra, Consultoria e Avaliação, PSCIP, SPDA,
  Gerenciamento de resíduos sólidos.
- Flagship recente: Sede Administrativa Sicredi Centro Sul PR/SC/RJ (entregue
  com livro documentando a jornada criativa do projeto).

## Direção de COPY (crítico — não soar template)
- Tom: institucional, preciso, com peso de autoridade. Frases curtas. Voz ativa.
- NADA de "soluções ágeis e confiáveis", "do conceito à entrega", "transformamos
  sonhos" — clichê de imobiliária. Fale como engenheiro que respeita o cliente.
- Lidere com especificidade: cooperativas, instituições financeiras, Sicredi.
- Legendas e dados em mono, secos: "13 ESTADOS", "CAU A39962-5", "EST. 2004".

## Qualidade (piso, sem anunciar)
- Responsivo até mobile. Foco de teclado visível. prefers-reduced-motion respeitado
  (desliga parallax/scrub, mantém fades simples).
- Vídeo: muted + autoplay + playsinline + loop. Poster de fallback. Lazy onde der.
- Performance: imagens em next/image, vídeo otimizado, sem layout shift.
```

---

## Mapa de assets reais (para o mockup — wget na raiz public/)

> São os assets do PRÓPRIO cliente; uso legítimo pra construir o site dele.
> Roda dentro de `public/` do projeto.

```bash
# Logos JL
wget http://www.jl.arq.br/images/logo.png
wget http://www.jl.arq.br/images/logo-white.png
wget http://www.jl.arq.br/images/logo_vert.png

# Vídeo do hero (filme institucional real)
wget http://www.jl.arq.br/images/video_full.mp4

# Fachadas / projetos (fotos reais)
wget http://www.jl.arq.br/images/galery/fachada/Agencia-Agro-lucas-Do-Rio-verde-MT.jpeg
wget http://www.jl.arq.br/images/galery/fachada/Sede-Administrativa-Celeiro-do-MT-RR.jpg
wget http://www.jl.arq.br/images/galery/fachada/Sicredi-Acacias-Sinop-MT.jpeg
wget http://www.jl.arq.br/images/galery/fachada/fachada_sic_canarana1.jpg

# Logos de clientes (prova social)
for c in ABCZ dianez bassani admmeta sicredi sicoob unicred ocb daycoval \
         unimed ima scania beirario uniodonto senac gazin belvedele golfinho \
         florais formula martinelo verao; do
  wget "http://www.jl.arq.br/images/cliente-$c.png" 2>/dev/null || \
  wget "http://www.jl.arq.br/images/cliente-$c.jpg" 2>/dev/null || \
  wget "http://www.jl.arq.br/images/cliente-$c.jpeg" 2>/dev/null
done

# Foto do fundador
wget http://www.jl.arq.br/images/time/foto_joao.jpg
```

Vídeos de projeto no YouTube (embeds, se quiser usar nos cases):
- lEn3z9RD7vY, JKWFibcWD-0, qJ71ZdTGMc8, x6Oa2y5ygYg, aV0OHOLTEOM

---

## MCP / ferramentas a conectar no Claude Code

1. **Playwright MCP** ou **Chrome DevTools MCP** — pro Claude tirar screenshot do
   próprio site e auto-corrigir o visual em loop. (Maior ganho de qualidade.)
2. **Higgsfield MCP** (opcional) — `https://mcp.higgsfield.ai/mcp`. Só para gerar
   textura/atmosfera/hero abstrato SE faltar imagem boa. NÃO gerar "prédio falso"
   como portfólio. Tier grátis ~150 créditos/mês.

---

## Checklist — o que pedir pra JL na reunião (pro final, não pro mockup)

- [ ] Fotos das obras em ALTA resolução (Instagram é comprimido demais pro final).
- [ ] Números atualizados e confiáveis: anos, estados, nº de projetos, m².
      (O site velho diz "25.000 projetos concluídos" — confirmar, soa alto.)
- [ ] Lista oficial de projetos: nome, cliente, cidade/UF, ano, m², tipologia.
- [ ] Time atual (o site só mostra o João; meta-tags citam "Rebeca arquiteta").
      Fotos + cargos + CAU/CREA de cada um.
- [ ] Permissão de uso de marca dos clientes (Sicredi etc.) no portfólio.
- [ ] Manual de marca / cores oficiais da JL (pra confirmar a paleta).
- [ ] O "livro" do projeto Sicredi Centro Sul — vira um case forte se puder mostrar.
- [ ] Objetivo do site: gerar orçamento? Autoridade institucional? Recrutamento?
```
