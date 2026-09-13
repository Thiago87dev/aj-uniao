import Image from 'next/image';
import { FaCheck } from 'react-icons/fa6';
import { oficina } from '@/app/data/oficina';
import Numeros from './Numeros';

export default function Sobre() {
  return (
    <section id='sobre' aria-labelledby='sobre-titulo' className='bg-[#f3f6fa] px-5 py-16 text-background sm:px-10 lg:px-16 lg:py-24 xl:px-40'>
      <div className='grid items-center gap-10 lg:grid-cols-2 lg:gap-14'>
        <figure className='min-w-0'>
          <div className='relative aspect-4/3 overflow-hidden rounded-xl border-b-4 border-secondary'>
            <Image src={oficina.imagem} alt='Imagem ilustrativa de um mecânico avaliando um motor em uma oficina' fill sizes='(min-width: 1280px) 40vw, (min-width: 1024px) 45vw, 100vw' className='object-cover' />
          </div>
          {oficina.demonstracao && <figcaption className='mt-3 text-xs text-slate-500'>Imagem ilustrativa gerada por IA.</figcaption>}
        </figure>
        <div className='min-w-0'>
          <p className='section-eyebrow'>Sobre a oficina</p>
          <h2 id='sobre-titulo' className='section-heading'>Paixão por carros.<br /><span className='text-primary'>Respeito por você.</span></h2>
          <p className='mt-6 leading-7 text-slate-600'>{oficina.descricao}</p>
          <p className='mt-4 leading-7 text-slate-600'>{oficina.complemento}</p>
          <ul className='mt-6 space-y-3 text-sm font-semibold text-primary'>
            {['Conversa clara em cada etapa', 'Atenção aos detalhes do seu veículo', 'Cuidado que acompanha sua rotina'].map(texto => <li key={texto} className='flex items-center gap-3'><FaCheck aria-hidden='true' className='shrink-0' />{texto}</li>)}
          </ul>
        </div>
      </div>
      <Numeros />
    </section>
  );
}
