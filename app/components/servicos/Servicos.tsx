import { conteudoCard, conteudoInfo } from '@/app/data/servicos';
import ServicoCard from './ServicoCard';
import ServicoInfo from './ServicoInfo';
import Button from '../geral/Button';

const Servicos = () => {
  return (
    <div className='bg-foreground min-h-screen px-10 lg:px-40 pt-10 flex flex-col gap-5   pb-5'>
      <div className='flex flex-col gap-3 xl:w-2/5 w-full'>
        <h3 className='uppercase text-xs font-semibold'>
          <span className='text-center  w-6 h-0.75 bg-secondary inline-block align-middle mr-2'></span>nossos serviços
        </h3>
        <h2 className='text-4xl sm:text-5xl lg:text-6xl font-black lg:leading-15 uppercase'>
          serviços <span className='text-primary'>especializados</span>
        </h2>
        <p>
          Tecnologia, experiência e comprometimento para manter seu veículo sempre em perfeito funcionamento. Conte com
          uma equipe especializada e equipamentos de última geração.
        </p>
      </div>
      <div className='flex gap-5 flex-wrap justify-center xl:justify-start'>
        {conteudoCard.map(item => (
          <div key={item.id}>
            <ServicoCard title={item.title} title2={item.title2} text={item.text} icon={item.icon} img={item.img} />
          </div>
        ))}
      </div>
      <div className='flex justify-center xl:justify-around mt-4 flex-wrap flex-col xl:flex-row items-center xl:items-start gap-8 xl:gap-0 w-full'>
        {conteudoInfo.map(item => (
          <ServicoInfo key={item.id} icon={item.icon} title={item.title} text={item.text} />
        ))}
      </div>
      <div className='flex justify-center mt-5'>
        <Button title='Solicitar orçamento' />
      </div>
    </div>
  );
};
export default Servicos;
