// Single source of truth for site copy.
// Rewrites applied per the copy-critique pass; [confirmar] marks data the JL
// must validate before launch (rendered with a visible tag in preview).

export const nav = [
  { label: "Especialização", href: "#especializacao" },
  { label: "Projetos", href: "#projetos" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
] as const;

export const hero = {
  sheet: "FL. 01/09",
  eyebrowPre: "EST. 2005",
  eyebrowConfirm: true,
  eyebrowPost: "· CUIABÁ–MT · ATUAÇÃO NACIONAL",
  headline: "Arquitetura para o cooperativismo financeiro brasileiro.",
  subhead:
    "Arquitetura e engenharia integradas para instituições financeiras e cooperativas. Uma única estrutura técnica, da viabilidade ao acompanhamento de obra.",
  ctaPrimary: "Falar com a JL",
  ctaSecondary: "Ver projetos",
};

export const tese = {
  sheet: "FL. 02/09",
  opener: "Toda cooperativa nasce de uma ideia simples:",
  principle: "junto se constrói o que ninguém faria sozinho.",
  bridge: "Projetamos sob o mesmo princípio.",
  body: "Arquitetura, engenharia e consultoria numa única estrutura técnica — cada disciplina compatibilizada com as outras antes da primeira parede subir.",
  closer: "Menos risco. Mais previsibilidade. Uma obra que se sustenta.",
  disciplines: ["Arquitetura", "Estrutural", "Elétrico", "Hidrossanitário"],
};

export const numeros = {
  sheet: "FL. 03/09",
  opener: "Vinte anos não se improvisam.",
  stats: [
    { value: 20, suffix: "+", label: "ANOS DE ATUAÇÃO", confirm: true },
    { value: 13, suffix: "", label: "ESTADOS ATENDIDOS", confirm: true },
    { value: 25000, suffix: "", label: "PROJETOS ENTREGUES", confirm: true },
    { value: 820000, suffix: "", label: "M² PROJETADOS", confirm: true },
  ],
};

export const especializacao = {
  sheet: "FL. 04/09 · ARQ-FIN",
  heading:
    "Não projetamos para todo mundo. Projetamos para quem move o cooperativismo.",
  body: [
    "Uma agência financeira não é um prédio comum. Ela protege pessoas e valores, padroniza a experiência do associado e responde a exigências de segurança, fluxo e marca que um projeto convencional ignora.",
    "É nisso que a JL se especializou. Há mais de duas décadas projetamos para o cooperativismo financeiro brasileiro — da agência de bairro à sede administrativa nacional.",
  ],
  sectors: [
    "Cooperativas de crédito",
    "Instituições financeiras",
    "Cooperativas agropecuárias",
    "Saúde cooperativa",
    "Sedes administrativas",
    "Rede de agências",
  ],
};

export const projetos = {
  sheet: "FL. 05/09",
  heading: "Projetos que se sustentam — no cálculo e na fachada.",
};

export const processo = {
  sheet: "FL. 06/09",
  heading: "Uma estrutura técnica, do terreno à entrega das chaves.",
  steps: [
    {
      n: "01",
      title: "Viabilidade",
      body: "Estudo de viabilidade técnica: terreno, programa de necessidades e custo. Antes de projetar, definimos o que faz sentido construir.",
    },
    {
      n: "02",
      title: "Projeto integrado",
      body: "Arquitetura, estrutural, elétrico, hidrossanitário, incêndio. Todas as disciplinas desenvolvidas dentro da mesma casa.",
    },
    {
      n: "03",
      title: "Compatibilização",
      body: "Os projetos conversam entre si antes da obra começar. É aqui que o risco cai e o orçamento para de surpreender.",
    },
    {
      n: "04",
      title: "Acompanhamento de obra",
      body: "Estamos em obra quando a prancha vira concreto — fiscalizando o que projetamos até a inauguração.",
    },
  ],
};

export const clientes = {
  sheet: "FL. 07/09",
  heading: "Quem não pode errar, confia à JL.",
};

export const autoridade = {
  sheet: "FL. 08/09",
  heading: "Um responsável técnico com nome, rosto e CAU.",
  name: "João Luiz Borges Alves",
  role: "CEO e responsável técnico · CAU A39962-5",
  bio: [
    "Trouxe para o escritório um critério fixo: beleza, função e racionalização de recursos na mesma decisão de projeto. Sem escolher entre estética e custo.",
    "Hoje lidera arquitetos, engenheiros e técnicos sob uma regra: um único interlocutor técnico responde por todas as disciplinas, do cliente à construtora.",
  ],
  closer:
    "Cada entrega da JL leva uma assinatura técnica e um número de registro. Responsabilidade com nome, não com promessa.",
};

export const cta = {
  sheet: "FL. 09/09",
  heading: "Vamos projetar sua próxima agência ou sede.",
  subhead:
    "Conte o que sua cooperativa ou instituição precisa construir. A JL assume arquitetura e engenharia numa única estrutura técnica.",
};

export const contato = {
  whatsapp: {
    href: "https://api.whatsapp.com/send?phone=5565999622276",
    label: "+55 65 99962-2276",
  },
  phone: { href: "tel:+556530578498", label: "(65) 3057-8498" },
  email: {
    href: "mailto:atendimento@jlarquitetura.com",
    label: "atendimento@jlarquitetura.com",
  },
  address: "Rua 24 de Outubro, 413 · Centro Norte · Cuiabá-MT · 78005-330",
  social: [
    { label: "Instagram", handle: "@sigajlarq", href: "https://instagram.com/sigajlarq" },
    { label: "LinkedIn", handle: "/in/sigajlarq", href: "https://linkedin.com/in/sigajlarq" },
    { label: "Facebook", handle: "/sigajlarq", href: "https://facebook.com/sigajlarq" },
  ],
};
