import type { Metadata } from "next";
import { Newsreader, Geist, IBM_Plex_Mono } from "next/font/google";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import "./globals.css";

// Display: institutional serif (engineered gravitas, not the Fraunces "AI-premium" tell).
// Swap target lives in one variable — validate against the real Sicredi photos.
const display = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

// Body: neutral, sober grotesque with full PT-BR diacritics.
const sans = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

// Data / cotas: drafting-instrument monospace.
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jlarquitetura.com"),
  title:
    "JL Arquitetura — Arquitetura para instituições financeiras e cooperativas",
  description:
    "Há mais de 20 anos projetando agências e sedes para o cooperativismo financeiro brasileiro. Arquitetura e engenharia integradas, da viabilidade ao acompanhamento de obra. Cuiabá-MT, atuação nacional.",
  openGraph: {
    title: "JL Arquitetura e Engenharia",
    description:
      "Arquitetura para o cooperativismo financeiro brasileiro. Arquitetura e engenharia integradas — da viabilidade ao acompanhamento de obra.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
