import ComoFunciona from './components/como-funciona/ComoFunciona';
import Hero from './components/hero/Hero';
import Servicos from './components/servicos/Servicos';

export default function Home() {
  return (
    <div>
      <Hero />
      <Servicos/>
      <ComoFunciona />
    </div>
  );
}
