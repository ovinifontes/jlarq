# JL Arquitetura — Site Institucional

One-pager premium, scroll-driven, para a **JL Arquitetura e Engenharia** —
escritório especialista em arquitetura para instituições financeiras e
cooperativas (Sicredi, Sicoob, Unicred, Unimed, OCB, Daycoval).

## Stack

- **Next.js 15** (App Router, RSC) + **TypeScript**
- **Tailwind CSS v4** (config CSS-first em `app/globals.css`)
- **GSAP + ScrollTrigger** + **Lenis** (smooth scroll)
- Fontes via `next/font`: Newsreader (display), Geist (corpo), IBM Plex Mono (dados)

## Desenvolvimento

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # build de produção (output: standalone)
pnpm start        # serve o build
```

> Conteúdo e números marcados `[confirmar]` precisam ser validados com a JL antes
> do go-live. Ver checklist em [`CLAUDE.md`](./CLAUDE.md).

## Deploy via Docker (Easypanel)

A imagem usa o output `standalone` do Next, em multi-stage:

```bash
docker build -t jlarq .
docker run -p 3000:3000 jlarq
```

No **Easypanel**: crie um App do tipo **Dockerfile** apontando para este repo;
a porta interna é **3000** (`PORT`/`HOSTNAME` já definidos na imagem). Nenhuma
variável de ambiente é obrigatória.

## Estrutura

```
app/            layout, page (compõe as seções), globals.css (design tokens)
components/
  sections/     Hero, Tese, Numeros, Especializacao, Projetos, Processo, Clientes, Autoridade, Contato
  anim/         BlueprintGrid, Convergence (assinatura), ScrollReveal, CountUp
  site/         Nav, Section
  providers/    SmoothScrollProvider (Lenis + GSAP)
lib/            content, projects, clients, blur, gsap, utils
public/         assets reais (logos, vídeo, fachadas, fundador, logos de clientes)
scripts/        shot.mjs (QA de screenshot), blur.mjs (placeholders)
```
