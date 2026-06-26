// Catalog-numbered case index (Herzog & de Meuron model): every project reads
// as an engineering ledger entry, not a brochure caption.
// year / area are [confirmar] until the JL sends the official project sheets.

export type Typology =
  | "Sede administrativa"
  | "Agência"
  | "Agência agro";

export type Project = {
  id: string; // catalog no.
  title: string;
  client: string;
  location: string;
  uf: string;
  year: string; // "[confirmar]" until validated
  area: string; // m² — "[confirmar]" until validated
  typology: Typology;
  blurb: string;
  image: string;
  /** real measured span for the honest cota line, in meters */
  cota?: string;
  flagship?: boolean;
  /** photo is a stand-in until the JL provides the official high-res image */
  imageConfirm?: boolean;
};

export const projects: Project[] = [
  {
    id: "JL-001",
    title: "Sede Administrativa Sicredi Centro Sul",
    client: "Sicredi",
    location: "PR / SC / RJ",
    uf: "PR·SC·RJ",
    year: "[confirmar]",
    area: "[confirmar]",
    typology: "Sede administrativa",
    blurb:
      "A sede de uma das maiores cooperativas do país, documentada em livro — da primeira concepção ao detalhe final.",
    image: "/projetos/sicredi-centro-sul.jpg",
    flagship: true,
    imageConfirm: true,
  },
  {
    id: "JL-002",
    title: "Sicredi Acácias",
    client: "Sicredi",
    location: "Sinop",
    uf: "MT",
    year: "[confirmar]",
    area: "[confirmar]",
    typology: "Agência",
    blurb:
      "Agência que materializa o padrão Sicredi sem virar cópia de catálogo — leitura própria, dentro da identidade da marca.",
    image: "/projetos/sicredi-acacias-sinop.jpeg",
  },
  {
    id: "JL-003",
    title: "Sicredi Canarana",
    client: "Sicredi",
    location: "Canarana",
    uf: "MT",
    year: "[confirmar]",
    area: "[confirmar]",
    typology: "Agência",
    blurb:
      "Padrão de rede com leitura local. Eficiência construtiva e presença regional.",
    image: "/projetos/sicredi-canarana.jpg",
  },
  {
    id: "JL-004",
    title: "Sede Administrativa Celeiro",
    client: "Celeiro do MT",
    location: "MT / RR",
    uf: "MT·RR",
    year: "[confirmar]",
    area: "[confirmar]",
    typology: "Sede administrativa",
    blurb: "Estrutura administrativa pensada para crescer com a operação.",
    image: "/projetos/sede-celeiro.jpg",
  },
  {
    id: "JL-005",
    title: "Agência Agro",
    client: "Cooperativa agro",
    location: "Lucas do Rio Verde",
    uf: "MT",
    year: "[confirmar]",
    area: "[confirmar]",
    typology: "Agência agro",
    blurb:
      "Arquitetura para o agro cooperativo: a agência que atende quem produz, com a robustez de uma instituição financeira.",
    image: "/projetos/agencia-agro-lucas.jpeg",
  },
];

// Niche-typology grouping (Studio MK27 model) so a decision-maker self-selects.
export const typologyOrder: Typology[] = [
  "Sede administrativa",
  "Agência",
  "Agência agro",
];
