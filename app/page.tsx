import { oficina, navegacao, whatsappHref } from './data/oficina';
import ComoFunciona from './components/como-funciona/ComoFunciona';
import Hero from './components/hero/Hero';
import Servicos from './components/servicos/Servicos';
import Navbar from './components/institucional/Navbar';
import Sobre from './components/institucional/Sobre';
import Depoimentos from './components/institucional/Depoimentos';
import Faq from './components/institucional/Faq';
import Contato from './components/institucional/Contato';
import WhatsAppFlutuante from './components/geral/WhatsAppFlutuante';
import Footer from './components/institucional/Footer';
import LocalBusinessJsonLd from './components/LocalBusinessJsonLd';

export default function Home() {
  return (
    <>
      <a
        href='#conteudo'
        className='sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-60 focus:rounded-lg focus:bg-secondary focus:p-4 focus:text-primary'
      >
        Pular para o conteúdo
      </a>
      <Navbar
        oficina={{ nome: oficina.nome, marcaInicio: oficina.marcaInicio, marcaDestaque: oficina.marcaDestaque }}
        navegacao={navegacao}
        whatsappHref={whatsappHref}
      />
      <LocalBusinessJsonLd />
      <main id='conteudo' tabIndex={-1}>
        <Hero />
        <Servicos />
        <ComoFunciona />
        <Sobre />
        <Depoimentos />
        <Faq />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFlutuante />
    </>
  );
}
