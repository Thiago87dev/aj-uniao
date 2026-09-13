import { conteudoCard, conteudoInfo } from '@/app/data/servicos';
import ServicoCard from './ServicoCard';
import ServicoInfo from './ServicoInfo';

const Servicos = () => {
  return (
    <section
      id='servicos'
      aria-labelledby='servicos-titulo'
      className='bg-[#f3f6fa] text-background min-h-screen px-5 sm:px-10 lg:px-16 xl:px-40 pt-10 flex flex-col gap-5 pb-10'
    >
      <div className='flex flex-col gap-3 max-w-2xl w-full min-w-0'>
        <p className='uppercase text-xs font-semibold'>
          <span
            aria-hidden='true'
            className='text-center  w-6 h-0.75 bg-secondary inline-block align-middle mr-2'
          ></span>
          nossos serviços
        </p>
        <h2
          id='servicos-titulo'
          className='text-[1.75rem] min-[400px]:text-4xl sm:text-5xl lg:text-6xl font-black lg:leading-15 uppercase'
        >
          serviços <span className='text-primary'>especializados</span>
        </h2>
        <p>
          Tecnologia, experiência e comprometimento para manter seu veículo sempre em perfeito funcionamento. Conte com
          uma equipe especializada e equipamentos de última geração.
        </p>
      </div>
      <ol className='grid grid-cols-1 gap-5 md:grid-cols-2'>
        {conteudoCard.map(item => (
          <li key={item.id} className='min-w-0'>
            <ServicoCard
              title={item.title}
              title2={item.title2}
              text={item.text}
              icon={item.icon}
              img={item.img}
              imgCenter={item.imgCenter}
            />
          </li>
        ))}
      </ol>
      <ol className='mt-4 grid w-full grid-cols-1 gap-8 justify-items-center lg:grid-cols-3 lg:items-start'>
        {conteudoInfo.map(item => (
          <li key={item.id}>
            <ServicoInfo icon={item.icon} title={item.title} text={item.text} />
          </li>
        ))}
      </ol>
    </section>
  );
};
export default Servicos;
