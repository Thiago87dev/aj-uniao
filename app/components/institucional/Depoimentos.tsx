import { FaStar, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { depoimentos, oficina } from '@/app/data/oficina';

const googleAvaliacoes =
  'https://www.google.com/search?kgmid=/g/1ydnqhlhh&q=AJ+Uni%C3%A3o+Mec%C3%A2nica#lrd=0x94deb0553b4de977:0xc96f79088dcf9e57,1,,,,';

export default function Depoimentos() {
  return (
    <section
      id='depoimentos'
      aria-labelledby='depoimentos-titulo'
      className='bg-[#0b1015] px-5 py-16 text-white sm:px-10 lg:px-16 lg:py-24 xl:px-40'
    >
      <p className='section-eyebrow'>Depoimentos</p>
      <div className='flex flex-col items-start justify-between gap-6 xl:flex-row xl:items-end'>
        <h2 id='depoimentos-titulo' className='section-heading max-w-3xl'>
          Quem confia,
          <br />
          <span className='text-secondary'>conta a experiência.</span>
        </h2>
        <a
          href={googleAvaliacoes}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex shrink-0 items-center gap-3 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold hover:bg-white/10'
        >
          Ver avaliações no Google
          <FaArrowUpRightFromSquare aria-hidden='true' />
        </a>
      </div>
      {oficina.demonstracao && (
        <p className='mt-5 text-sm text-slate-400'>
          Prévia visual com depoimentos fictícios. Consulte as avaliações reais pelo link do Google.
        </p>
      )}
      <div className='mt-10 grid gap-5 lg:grid-cols-3'>
        {depoimentos.map((item, index) => (
          <figure key={item.nome} className='flex min-w-0 flex-col rounded-xl bg-white p-6 text-[#202124] shadow-sm'>
            <figcaption className='flex items-center gap-3'>
              <span
                aria-hidden='true'
                className={`flex size-10 shrink-0 items-center justify-center rounded-full text-lg font-medium text-white ${['bg-[#7b1fa2]', 'bg-[#1967d2]', 'bg-[#b06000]'][index % 3]}`}
              >
                {item.nome.charAt(0)}
              </span>
              <div className='min-w-0'>
                <p className='font-semibold'>{item.nome}</p>
                <p className='mt-0.5 text-xs text-[#5f6368]'>Perfil de exemplo</p>
              </div>
            </figcaption>
            <div className='mt-5 flex flex-wrap items-center gap-3'>
              <span className='flex gap-0.5 text-[#fbbc04]' aria-label='5 de 5 estrelas, nota ilustrativa'>
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar key={i} aria-hidden='true' className='size-4' />
                ))}
              </span>
              <span className='text-xs text-[#5f6368]'>Demonstração</span>
            </div>
            <blockquote className='mt-4 flex-1 text-sm leading-6'>{item.texto}</blockquote>
            <p className='mt-6 border-t border-[#dadce0] pt-4 text-xs text-[#5f6368]'>{item.servico}</p>
          </figure>
        ))}
      </div>
    </section>
  );
}
