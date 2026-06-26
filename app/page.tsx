import Nav from "@/components/site/Nav";
import BlueprintGrid from "@/components/anim/BlueprintGrid";
import Hero from "@/components/sections/Hero";
import Tese from "@/components/sections/Tese";
import Numeros from "@/components/sections/Numeros";
import Especializacao from "@/components/sections/Especializacao";
import Projetos from "@/components/sections/Projetos";
import Processo from "@/components/sections/Processo";
import Clientes from "@/components/sections/Clientes";
import Autoridade from "@/components/sections/Autoridade";
import Contato from "@/components/sections/Contato";

export default function Home() {
  return (
    <>
      <BlueprintGrid />
      <Nav />
      <main id="conteudo">
        <Hero />
        <Tese />
        <Numeros />
        <Especializacao />
        <Projetos />
        <Processo />
        <Clientes />
        <Autoridade />
        <Contato />
      </main>
    </>
  );
}
