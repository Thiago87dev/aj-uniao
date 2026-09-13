import { etapas } from "@/app/data/como-funciona";

const ComoFunciona = () => {
  return (
    <section
      id='como-funciona'
      aria-labelledby='como-funciona-titulo'
      className='border-t border-white/10 bg-[#0b1015] px-5 py-16 text-foreground sm:px-10 lg:px-16 xl:px-40 lg:py-24'
    >
      <div className='flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between xl:gap-16'>
        <div className='min-w-0 max-w-2xl'>
          <p className='mb-3 text-xs font-semibold uppercase'>
            <span aria-hidden='true' className='mr-2 inline-block h-0.75 w-6 bg-secondary align-middle' />
            Como funciona
          </p>
          <h2 id='como-funciona-titulo' className='text-3xl min-[400px]:text-4xl font-black uppercase sm:text-5xl lg:text-6xl lg:leading-15'>
            Seu carro bem cuidado.<br />
            <span className='text-secondary'>Você mais tranquilo.</span>
          </h2>
        </div>
        <p className='max-w-md leading-7 text-slate-300'>
          Cuidar do seu veículo começa com uma boa conversa. Conheça os passos que conectam a sua necessidade ao serviço certo.
        </p>
      </div>

      <ol className='mt-12 grid gap-5 lg:mt-16 lg:grid-cols-3'>
        {etapas.map(({ numero, titulo, texto, icon: Icon }) => (
          <li key={numero} className='rounded-xl min-w-0 border border-white/10 bg-[#141c26] p-5 sm:p-8'>
            <div className='mb-8 flex items-center justify-between'>
              <span aria-hidden='true' className='flex size-14 items-center justify-center rounded-xl bg-primary'>
                <Icon className='size-6 text-secondary' />
              </span>
              <span aria-hidden='true' className='text-5xl font-black text-secondary/40'>{numero}</span>
            </div>
            <h3 className='max-w-64 text-xl font-black uppercase leading-tight text-white'>{titulo}</h3>
            <p className='mt-4 leading-7 text-slate-300'>{texto}</p>
          </li>
        ))}
      </ol>

      <p className='mt-8 border-l-4 border-secondary pl-4 text-sm leading-6 text-slate-300'>
        <strong className='font-semibold text-secondary'>Não sabe qual serviço procurar?</strong>{' '}
        Conte o que está acontecendo com o carro. O diagnóstico é o ponto de partida.
      </p>
    </section>
  );
};

export default ComoFunciona;
