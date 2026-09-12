import { IconType } from 'react-icons';

interface ServicoInfoProps {
  title: string;
  text: string;
  icon: IconType;
}

const ServicoInfo = ({ title, text, icon: Icon }: ServicoInfoProps) => {
  return (
    <div className='flex gap-4 items-center w-60 sm:w-80'>
      <div className='flex size-10 sm:size-12 shrink-0 items-center justify-center rounded-xl'>
        <Icon className='size-10 sm:size-12 text-primary' />
      </div>
      <div>
        <h3 className='text-sm font-black uppercase'>{title}</h3>
        <p className='text-xs font-semibold'>{text}</p>
      </div>
    </div>
  );
};
export default ServicoInfo;
