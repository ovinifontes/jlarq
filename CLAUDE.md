# JL Arquitetura — Site Institucional

## O que é

One-pager premium, scroll-driven, para a JL Arquitetura e Engenharia.
Posicionamento: **ESPECIALISTA** em arquitetura para instituições financeiras e
cooperativas do Brasil. 20+ anos. Lidera com o nicho, não com "fazemos tudo".

## Stack

- Next.js 15 (App Router) + TypeScript + React 19
- Tailwind CSS v4 (config CSS-first em `app/globals.css` via `@theme`)
- shadcn-style `Button` (cva) — copiado, não a lib inteira
- Lenis (smooth scroll) + GSAP + ScrollTrigger + `@gsap/react` (`useGSAP`)
- Fontes via `next/font`: **Newsreader** (display), **Geist** (corpo), **IBM Plex Mono** (dados)
- Deploy alvo: Vercel

## Conceito / Assinatura

Eixo = **INTEGRAÇÃO** (arquitetura + engenharia + consultoria numa estrutura única),
que espelha o **cooperativismo** ("junto se constrói o que ninguém faria sozinho").

A assinatura visual é **um sistema único**, não enfeite espalhado:

1. **Convergência (Compatibilização)** — 4 camadas de disciplina (ARQ/EST/ELE/HID)
   entram desalinhadas e convergem numa linha coordenada. É a integração feita
   verbo gráfico. Vive na Tese (eco) e no Processo (clímax, passo 03).
   `components/anim/Convergence.tsx`
2. **Grade de coordenadas (espinha)** — guias verticais + eixos (A–E) que a página
   inteira referencia. `components/anim/BlueprintGrid.tsx`
3. **Cota honesta** — UMA dimensão real por foto-chave (só no flagship Sicredi).
   Escassez = sobriedade. `components/sections/ProjectFlagship.tsx`

> Decisão de direção: trocamos **Fraunces → Newsreader** (Fraunces virou a "cara"
> do template IA premium) e elevamos o **teal blueprint** a chroma da marca
> (pinho só no CTA). Tudo tokenizado — reskin de manual de marca = poucas linhas.

## Design Tokens (em `app/globals.css` `@theme`)

```
--color-paper #f4f2ec   base clara (calcário/papel técnico)
--color-ink   #1a1d1a   texto + fundos escuros
--color-stone #c9c5ba   SÓ divisores/hairlines/disabled — NUNCA texto
--color-stone-text #6e6a5f   legendas/secundário sobre claro (AA)
--color-pine  #1e3a2f   fundo pinho + detalhe escuro
--color-pine-cta #2a5a45     botão CTA sobre paper (lê como acento)
--color-blueprint #2e5e6e    EXCLUSIVO de cotas/dados técnicos sobre claro
--color-blueprint-dark #4e8fa3   cotas/teal sobre ink
--color-stone-dark #a8a498   secundário sobre ink
```

- Cantos retos (`rounded-none`) ou 2px no máximo.
- Muito respiro. Grid editorial (`max-w-[88rem]`, gutters fluidos). Fotos full-bleed.
- Display (Newsreader) grande, `font-optical-sizing: auto`.
- Dados/números/legendas SEMPRE em IBM Plex Mono, uppercase, tracking largo,
  `tabular-nums` (utilitário `.eyebrow`, classe `.tabular`).
- Ritmo de fundos: Hero(escuro) → Tese INK → Números paper → Especialização paper
  → Projetos(escuro) → Processo INK → Clientes paper → Autoridade paper → CTA INK.

## Estrutura (ordem) e arquivos

`app/page.tsx` (Server Component) compõe as seções; `app/layout.tsx` carrega fontes
e envolve em `SmoothScrollProvider`. Numeração de "prancha" `FL. 0X/09` por seção.

1. HERO — vídeo institucional real (gated: desktop/sem data-saver), poster LCP,
   headline com clip-reveal independente do vídeo, registro de coordenadas de Cuiabá.
2. TESE — manifesto (ink) + eco da convergência.
3. NÚMEROS — count-up gated em layout de carimbo de prancha; `[confirmar]` visível.
4. ESPECIALIZAÇÃO — o nicho explícito (o diferencial).
5. PROJETOS — flagship full-bleed com cota honesta + grid de cases (catálogo JL-00X).
6. PROCESSO — 01–04; passo 03 = clímax da convergência.
7. CLIENTES — logo wall real, fundo neutro, logos NÃO recoloridos.
8. AUTORIDADE — João Luiz Borges Alves, CAU A39962-5.
9. CTA/CONTATO — WhatsApp/tel/e-mail/endereço + footer.

## Conteúdo & copy

- Copy real em `lib/content.ts`; cases em `lib/projects.ts`; clientes em `lib/clients.ts`.
- Blur placeholders auto-gerados em `lib/blur.ts` (`node scripts/blur.mjs`).
- Tom: institucional, preciso, autoridade. Frases curtas, voz ativa.
- PROIBIDO: "soluções ágeis e confiáveis", "do conceito à entrega",
  "transformamos sonhos", "parceria", "boas mãos". Engenheiro que respeita o cliente.

## Qualidade (piso)

- Responsivo até mobile. Foco de teclado visível (anel blueprint).
- `prefers-reduced-motion`: branch real via `gsap.matchMedia` — desliga
  scrub/pin/parallax/draw e o Lenis (scroll nativo); mantém estados finais.
- Vídeo: muted + autoplay + playsInline + loop + poster; headline nunca espera o vídeo.
- `next/image` em tudo, `blurDataURL`, sem layout shift; assets servidos de `/public`
  (re-encodados localmente, sem hotlink de `jl.arq.br`).

## Dev / QA

- `pnpm dev` (porta 3000). `pnpm build` (verifica tipos + gera estático).
- Screenshot loop sem MCP: `node scripts/shot.mjs <url> <out> [w] [h] [full] [waitMs] [seletor] [motion]`
  (`motion=reduce` dá estados de repouso determinísticos). Saídas em `.screens/` (gitignored).

## Checklist — pedir à JL antes de publicar (itens `[confirmar]` no site)

- [ ] Ano de fundação único (Hero "EST. 2005" vs CLAUDE antigo "2004") — bate com "20+ anos".
- [ ] Números: 13 estados, **25.000 projetos (soa alto)**, 820.000 m² — definição + validação.
- [ ] Ficha oficial de cada case: ano, m², cliente, cidade/UF, tipologia.
- [ ] Foto em ALTA do flagship Sicredi Centro Sul (hoje usa frame do vídeo institucional).
- [ ] Fotos das obras em alta (as atuais são 1280×720).
- [ ] Permissão de uso de marca de cada cliente (Sicredi etc.) no portfólio.
- [ ] Manual de marca / cores oficiais (confirmar paleta e logo).
- [ ] Bio/foto atualizada do time (meta-tags antigas citam "Rebeca arquiteta").
- [ ] Grafia exata do CAU A39962-5 (dado de autoridade — erro é grave).
- [ ] Revalidar contatos (WhatsApp, tel, e-mail, endereço, redes).
- [ ] Objetivo do site: orçamento? autoridade? recrutamento?
